import s from './index.module.css'

function Aside(props) {
    
    return <div className={s.aside}>
        {props.children}
    </div>
}

export default Aside