import data from './data'
import Layout from '@/components/Layout'
import UList from '@/components/UList'
import s from './index.module.css'
import { useState } from 'react'

const Aside = Layout.Aside
const Content = Layout.Content

export default function Home() {
    const [list, setList] = useState(null)

    const getColor = () => {
        let getNum = () => Math.floor(Math.random()*256)

        return `rgb(${getNum()}, ${getNum()}, ${getNum()})`
    }

    return <>
        <Layout>
            <Aside>
                <UList data={data} onClick={setList} />
            </Aside>
            <Content>
                {/* <div style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    <a style={{width: '25%', height: 100, background: 'red'}}>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</a>
                    <a style={{width: '25%', height: 100, background: 'purple'}}></a>
                    <a style={{width: '25%', height: 100, background: 'red'}}></a>
                    <a style={{width: '25%', height: 100, background: 'purple'}}></a>
                    <a style={{width: '25%', height: 100, background: 'red'}}></a>
                    <a style={{width: '25%', height: 100, background: 'purple'}}></a>
                    <a style={{width: '25%', height: 100, background: 'red'}}></a>
                    <a style={{width: '25%', height: 100, background: 'purple'}}></a>
                </div> */}
                <div className={s.alist}>
                    {list && list.children.map(item => (
                        <a target='_blank' href={item.link} key={item.name} rel="noreferrer">
                            {item.pic ? <img src={item.pic} alt={item.name} /> : <span className={s.logo} style={{backgroundColor: getColor()}}>{item.name[0]}</span>}
                            <span className={s.title}>{item.name}</span>
                            {/* <span className={s.tt}>{item.desc}</span> */}
                        </a>
                    ))}
                </div>
            </Content>
        </Layout>
    </>
}
