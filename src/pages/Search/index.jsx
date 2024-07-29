import React, { useState } from "react";
import { Input, Layout, Button, Empty } from 'antd';
import Iframe from '@/components/Iframe';
import s from './index.module.scss';
import { URL_DATAS } from './constants';

console.log(s);

const { Header, Content } = Layout;


const Search = () => { 
  const [val, setVal] = useState('');

  return <Layout className={ s.layout}>
    <Header className={ s.header}>
      <Input placeholder="请输入" value={val} onChange={e => setVal(e?.target.value)} />
      <Button className={ s.header_btn} type="primary">查询</Button>
    </Header>
    <Content className={ s.content}>
      {val ? URL_DATAS?.map(item => <div key={item?.label} className={s.content_iframe}>
        <span>{item?.label}</span>
        <div>
          <Iframe url={ `${item?.url}${val}`} />
        </div>
      </div>) : <Empty /> }
    </Content>
  </Layout>
}

export default Search