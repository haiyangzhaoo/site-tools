import { useState } from 'react'
import { Layout, Menu, Button } from 'antd';
import s from './index.module.scss'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    SearchOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

export default function Like() {
    const [collapsed, setCollapsed] = useState(false);

    return <Layout>
        <Header>
            <div className={s.title}>随便～占位的名字，想到再说吧</div>
        </Header>
        <Layout>
        <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <SearchOutlined />,
                        label: <Link to='/like/search'>搜索</Link>,
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
            <span className={s.collapsed} onClick={() => setCollapsed(!collapsed)}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
        </Sider>
        <Content>
            内容
        </Content>
        </Layout>
        <Footer>
            尾
        </Footer>
    </Layout>
}
