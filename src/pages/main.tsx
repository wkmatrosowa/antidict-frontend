import React, {ChangeEvent, useState} from "react";
import {Button, Card, Input, Layout, Space} from "antd";
import Highlighter from "react-highlight-words";
import './main.css';

const {TextArea} = Input;
const {Content} = Layout;


export function Main() {
    const [text, setText] = useState('');
    const [searchWords, setSearchWords] = useState<string[]>([]);
    const [categories, setCategories] = useState<Record<string, string>>({});
    const [highlightedText, setHighlightedText] = useState<string>('');
    const onClick = () => {
        const response = fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"jsonrpc": "2.0", "method": "process", "params": {"text": text}, "id": 1})
        })
            .then(response => response.json())
            .then(response => {
                const arrWords = []
                const arrCategories: Record<string, string> = {}
                for (const element of response.result) {
                    for (const el of element.analysis) {
                        const category = el.categories
                        const word = el.word
                        arrWords.push(word)
                        arrCategories[word] = category.join('')
                    }
                }
                // console.log(arrWords)
                setSearchWords(arrWords);
                setHighlightedText(text);
                console.log(arrCategories)
                setCategories(arrCategories);
            });
    }

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }
    // console.log(searchWords);
    // console.log(categories);
    return (
        <Layout className="text-input-output" style={{textAlign: 'center'}}>
            <Space direction="vertical" size={"middle"}>
                <Content className="text-input" style={{textAlign: 'center'}}>
                    <TextArea rows={10} style={{width: 500}} value={text} onChange={onChange}/>
                </Content>
                <Content className="button" style={{margin: '0 auto', textAlign: 'center', width: 100}}>
                    <Button type="primary" onClick={onClick}>Разобрать</Button>
                </Content>
                <Content className="text-output" style={{textAlign: 'left'}}>
                    <Card style={{margin: '0 auto', width: 500, borderStyle: 'solid'}} bordered={true}>
                        <Highlighter
                            highlightClassName="highlightClassName"
                            searchWords={searchWords}
                            autoEscape={true}
                            caseSensitive={false}
                            highlightTag={({children}) => (
                                <span
                                    className={"highlighted-text color" + categories[children.toString()]}>{children}</span>
                            )}
                            textToHighlight={highlightedText}/>
                    </Card>
                </Content>
            </Space>
        </Layout>
    );
}
