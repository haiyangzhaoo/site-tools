import { Routes, Route, HashRouter} from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import('../pages/Home'))
const Demo = React.lazy(() => import('../pages/Demo'))

export default function Router() {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/demo" element={<Demo />} />
        </Routes>
    </HashRouter>
}
