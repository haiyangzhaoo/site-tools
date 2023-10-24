import React from "react";
import s from './index.module.scss'

export default function Search(props) {
    return <iframe className={s.iframe} src={props.url}></iframe>
}
