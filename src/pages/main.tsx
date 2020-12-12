import React, {ChangeEvent, useState} from "react";
import {Button, Input, Layout} from "antd";
import Highlighter from "react-highlight-words";
import './main.css';

const {TextArea} = Input;
const {Content} = Layout;


export function Main() {
    const [text, setText] = useState('Этот проект Центра внутреннего мониторинга уже давно помогает университету');
    const [searchWords, setSearchWords] = useState<string[]>([])
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
                const arr = []
                for (const el of response.result) {
                    if (el.is_loanword === 1) {
                        arr.push(el.word)
                    }
                }
                setSearchWords(arr);
                console.log(response.result)
            });
    }

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }
    return (
        <Layout className="text-input">
            <Content style={{textAlign: 'center'}}>
                <TextArea rows={10} style={{width: 500}} value={text} onChange={onChange}/>
            </Content>
            <Content style={{textAlign: 'center', paddingLeft: 788, width: 100}}>
                <Button type="primary" onClick={onClick}>Разобрать</Button>
            </Content>
            <Content style={{textAlign: 'center'}}>
                <Highlighter
                    highlightClassName="highlightClassName"
                    searchWords={searchWords}
                    autoEscape={true}
                    textToHighlight={text.toLowerCase()}/>
            </Content>
        </Layout>
    );
}
