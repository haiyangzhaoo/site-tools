import data from './data'
import Layout from '@/components/Layout'
import UList from '@/components/UList'
import s from './index.module.css'
import { useState } from 'react'

console.log(s)

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
                <div className={s.alist}>
                    <div className={s.listContainer}>
                        <div className={s.aContainer}>
                            {list && list.children.map(item => (
                                <a target='_blank' href={item.link} key={item.name} rel="noreferrer">
                                    {item.pic ? <img src={item.pic} alt={item.name} /> : <span className={s.logo} style={{backgroundColor: getColor()}}>{item.name[0]}</span>}
                                    <span className={s.title}>{item.name}</span>
                                    <span title={item.desc} className={s.tt}>{item.desc}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    </>
}
