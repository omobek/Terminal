import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";
import Button from "./Components/Buttons/Buttons";
import  Route,{BrowserRouter} from "react-router-dom";
import Catalog from "./Components/Container/Catalog/Catalog";
import Inner from "./Components/Container/Inner/Inner";

function App() {
    return (
        /*<BrowserRouter>*/
            <div className='App'>
                <Header/>
                {/*<div className='app__wrapper'>
                    <Route exact path={'container'} component={Container}/>
                    <Route path={'catalog'} component={Catalog}/>
                </div>*/}
                <Catalog/>
                {/*<Container/>*/}
             {/*  <Inner/>*/}

                <Button/>
                <Footer/>
            </div>
    );
}

export default App;
