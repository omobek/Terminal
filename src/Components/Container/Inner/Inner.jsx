import React from 'react';
import mod from './Inner.module.css';
import InputNumber from "./Input/inputNumber";


const Inner = () => {
    return(
        <div className={mod.inner}>
            <link rel='stylesheet' a href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <div className={mod.header}>
                <div className={mod.logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Logo_O%21.png/200px-Logo_O%21.png" alt=""/>
                </div>
                <div className={mod.header__text}>
                    Введите номер телефона
                </div>
            </div>

            <div className={mod.main}>
                <div className={mod.left}>
                    <div className={mod.texts}>
                        <div className={mod.defaultText}>
                            <p>Внимание !!!</p>
                            <p>Комиссия  - 5 сом</p>
                            <div>Максимальная сумма платежа:<span> 10000 сом</span></div>
                            <div>Минимаальная сумма платежа: <span> 1 сом</span></div>
                            <div>Cправочная <span> О!</span> 0707, 0705 - 700 700</div>

                        </div>
                        <div className={mod.definiteText}>
                            <p>Внимание !!!</p>
                            <div>Корректировка платежа возможна только <br/> в течении текущего дня, при наличии <br/> полной суммы на ошибочном номере</div>
                        </div>
                    </div>
                </div>
                <div className={mod.right}>
                <InputNumber/>
                </div>
                {/*<div className={mod.right}>
                    <div className={mod.input}>
                        <form action='#' >
                            <input type="text" className={"textview"} placeholder="номер телефона"  name='phoneNumber'/>

                        </form>
                        <button className={mod.clearBtn}>
                            <div className="material-icons">
                                backspace
                            </div>
                        </button>
                    <script>
                        {function insert(num){
                            document.form.textview.value = document.form.textview.value + num;
                        }}
                    </script>


                    </div>

                    <div className={mod.keyboard}>
                        <div className={mod.numbers}>
                            <div className={mod.number + " " + mod.one}>
                                1
                            </div>
                            <div className={mod.number + " " + mod.two} onClick={'insert("2")'}>
                                2
                            </div>
                            <div className={mod.number + " " + mod.three}>
                                3
                            </div>
                            <div className={mod.number + " " + mod.four}>
                                4
                            </div>
                            <div className={mod.number + " " + mod.five}>
                                5
                            </div>
                            <div className={mod.number + " " + mod.six}>
                                6
                            </div>
                            <div className={mod.number + " " + mod.seven}>
                                7
                            </div>
                            <div className={mod.number + " " + mod.eight}>
                                8
                            </div>
                            <div className={mod.number + " " + mod.nine}>
                                9
                            </div>
                            <div className={mod.number + " " + mod.null}>
                                0
                            </div>
                            <div className={mod.number + " " + mod.tire}>
                                -
                            </div>
                            <div className={mod.number + " " + mod.slash}>
                                /
                            </div>
                        </div>
                    </div>
                </div>*/}

            </div>


        </div>
    )
}

export default Inner;