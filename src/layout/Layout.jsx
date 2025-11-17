import React from "react";
import { Layout as AntdLayout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = AntdLayout;

export const Layout = () => {
  return <AntdLayout>
    <Header>header</Header>
    <Content>
      <Outlet />
    </Content>
    <Footer>footer</Footer>
  </AntdLayout>
}
