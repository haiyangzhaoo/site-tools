import Aside from './Aside'
import Content from './Content'
import s from './index.module.css'

function Layout(props) {
    
    return <div className={s.container}>
        {props.children}
    </div>
}

Layout.Aside = Aside
Layout.Content = Content

export default Layout
