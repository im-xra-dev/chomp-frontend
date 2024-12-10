import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Header} from './header/Header';
import * as React from "react";
import {ContentPart} from "./content-part/ContentPart";
import {ContentFull} from "./content-full/ContentFull";

// import './App.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    {/*showing content (full length pages)*/}
                    <Route path="/" element={<ContentFull/>}>
                        <Route index/>
                        <Route path="search/"/>
                        <Route path="s/:id/"/>
                        <Route
                            path="post/:postid/"
                        />
                        <Route path="profile/">
                            <Route index/>
                            <Route path=":uname/"/>
                        </Route>
                    </Route>
                    {/*submitting content (half length pages)*/}
                    <Route path="/" element={<ContentPart/>}>
                        <Route path="/login"/>
                        <Route path="/signup"/>
                        <Route path="post/">
                            <Route index/>
                            <Route path=":postid/comment/"/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
