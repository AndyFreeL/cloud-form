import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Step1Page from "./pages/Step1Page/Step1Page";
import Step2Page from "./pages/Step2Page/Step2Page";
import Step3Page from "./pages/Step3Page/Step3Page";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/step1' element={<Step1Page/>}/>
                    <Route path='/step2' element={<Step2Page/>}/>
                    <Route path='/step3' element={<Step3Page/>}/>
                    <Route path='*' element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
