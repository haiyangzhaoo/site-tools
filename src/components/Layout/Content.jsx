import s from './index.module.css'

function Content(props) {
    
    return <div className={s.content}>
        {props.children}
    </div>
}

export default Content
