import React from 'react';
import mod from './SearchKeyboard.module.css'
import Keyboard from "./Keyboard/Keyboard";
import Input from "../Container/Inner/Input/InputComponents/Input";

const SearchKeyboard = () =>{
  return(
    <div className={mod.container}>

      <div className={mod.input}>
          <input type="text" className={mod.inp} placeholder="Поиск по названию услуги"/>

      </div>

      <Keyboard/>


    </div>
  )
}

export default SearchKeyboard;