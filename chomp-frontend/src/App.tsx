import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {ContentProvider} from './content-provider/ContentProvider';
import * as React from "react";

function App() {
    return (
        <>
            <BrowserRouter>
                {/* <div className="min-h-screenw-full"> */}
                <div className="flex flex-col min-h-full">
                    <Header />
                    <div className="flex-grow">
                        <ContentProvider />
                    </div>
                    <Footer/>
                </div>
                
                {/* <Routes> */}
                    {/*showing content (full length pages)*/}
                    {/* <Route path="/" element={<ContentFull/>}>
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
                    </Route> */}
                    {/*submitting content (half length pages)*/}
                    {/* <Route path="/" element={<ContentPart/>}>
                        <Route path="/login"/>
                        <Route path="/signup"/>
                        <Route path="post/">
                            <Route index/>
                            <Route path=":postid/comment/"/>
                        </Route>
                    </Route> */}
                {/* </Routes> */}
            </BrowserRouter>
        </>
    )
}

export default App
