import React, {ChangeEvent, useState} from "react";
import {Button, Input, Layout} from 'antd';

const {TextArea} = Input;
const {Header, Content, Footer} = Layout;


export function Main() {
    const [text, setText] = useState('');
    const onClick = () => {
        return (console.log(text));
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
