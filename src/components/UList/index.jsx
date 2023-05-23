import { useEffect, useState } from 'react'
import s from './index.module.css'

export default function UList({data, onClick}) {
    const [select, setSelect] = useState('')
    
    const handleClick = (item) => {
        setSelect(item.name)
        onClick && onClick(item)
    }

    useEffect(() => {
        handleClick(data[0])
    }, [])

    return <ul className={s.ulcontainer}>
        {data.map((item, idx) => <li className={select == item.name ? s.selected : null} onClick={() => handleClick(item)} key={`${idx}-${item.name}`}>
            <span>{item.name}</span>
            <i></i>
            <i></i>
        </li>)}
    </ul>
}
