import React, {ChangeEvent, useState} from "react";
import {Button, Input, Layout} from 'antd';

const {TextArea} = Input;
const {Content} = Layout;


export function Main() {
    const [text, setText] = useState('');
    const onClick = () => {
        const response = fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"jsonrpc": "2.0", "method": "process", "params": {"text": text}, "id": 1})
        });
    }

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }
    return (
        <Layout className="layout">
            <Content style={{textAlign: 'center'}}>
                <TextArea rows={10} style={{width: 500}} value={text} onChange={onChange}/>
            </Content>
            <Content style={{textAlign: 'center', paddingLeft: 788, width: 100}}>
                <Button type="primary" onClick={onClick}>Разобрать</Button>
            </Content>
        </Layout>
    );
}
