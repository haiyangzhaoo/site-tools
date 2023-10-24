import { useState } from 'react'
import { Layout, Menu } from 'antd';
import s from './index.module.scss'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    SearchOutlined,
    AppstoreOutlined,
    YuqueOutlined,
    AimOutlined
  } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

export default function Like() {    
    const [collapsed, setCollapsed] = useState(false);

    return <Layout className={s.container}>
        <Header>
            <div className={s.title}>随便～占位的名字，想到再说吧</div>
        </Header>
        <Layout className={s.content}>
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
                            icon: <AppstoreOutlined />,
                            label: '网站',
                            children: [
                                {
                                    key: '2-1',
                                    icon: <AimOutlined />,
                                    label: <Link to='/like/network/juejin'>掘金</Link>,
                                },
                                {
                                    key: '2-2',
                                    icon: <YuqueOutlined />,
                                    label: <Link to='/like/network/yuque'>语雀</Link>,
                                },
                                {
                                    key: '2-3',
                                    icon: <AppstoreOutlined />,
                                    label: <Link to='/like/network/bili'>B站</Link>,
                                },
                            ]
                        },
                    ]}
                />
                <span className={s.collapsed} onClick={() => setCollapsed(!collapsed)}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
            </Sider>
            <Content>
                <Outlet />
            </Content>
        </Layout>
        <Footer>
        <div style={{textAlign: 'center'}} className={s.title}>
            随便写点吧～
            {/* <iframe src='https://tianqiapi.com/api.php?style=tb&skin=pitaya'></iframe> */}
            </div>
        </Footer>
    </Layout>
}
