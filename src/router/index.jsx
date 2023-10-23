import { Routes, Route, HashRouter} from "react-router-dom";
import React, { useEffect } from "react";
import titleMap from "../utils/titleMap";

const Home = React.lazy(() => import('../pages/Home'))
const Demo = React.lazy(() => import('../pages/Demo'))
const Like = React.lazy(() => import('../pages/Like'))

export default function Router() {
    useEffect(() => {
        document.title = titleMap[window.location.hash.substr(1)]
        
        const cb = e => {
            document.title = titleMap[new URL(e.newURL).hash.substr(1)]
        }

        window.addEventListener('hashchange', cb)

        return () => {
            window.removeEventListener('hashchange', cb)
        }
    }, [])

    return <HashRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/ky" element={<Demo />} />
            <Route path="/like" element={<Like />} />
        </Routes>
    </HashRouter>
}
