import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";
import Button from "./Components/Buttons/Buttons";
import {BrowserRouter} from "react-router-dom";
import Catalog from "./Components/Container/Catalog/Catalog";
import Inner from "./Components/Container/Inner/Inner";
import {Route, Switch} from "react-router";
import SearchKeyboard from "./Components/SearchKeyboard/SearchKeyboard";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <div className='app__wrapper'>
          <Switch>

            <Route exact path={"/"} component={Container}/>
            <Route exact path={"/catalog"} component={Catalog}/>
            <Route exact path={"/inner"} component={Inner}/>
            <Route exact path={"/keyboard"} component={SearchKeyboard}/>


          </Switch>
        </div>
        {/*<Catalog/>
          <Container/>
          <Inner/>*/}

        <Button/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
