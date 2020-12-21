import React from 'react';
import mod from './Buttons.module.css';
import {useHistory} from "react-router";

const Button = () => {
  const history = useHistory();

  return (
    <div className={mod.container}>
        <link rel='stylesheet' a href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <div className={mod.buttons}>
        <div className={mod.btn} onClick={() => history.push("/")}>
          назад
        </div>

        <div className={mod.btn} onClick={() => history.push("keyboard")}>
          <a className="material-icons">
            search
          </a>
        </div>

        <div className={mod.btn}>
            <img src="https://img2.freepng.ru/20180612/kjt/kisspng-flag-of-kyrgyzstan-kirghiz-soviet-socialist-republ-5b208aa97d2ca8.4622944515288593055127.jpg" alt=""/>
        </div>

      </div>

    </div>
  )
}

export default Button;
