import React from 'react';
import mod from './Inner.module.css';

const Inner = () => {
    return(
        <div className={mod.inner}>
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
                        <div className={mod.degaultText}>
                            TExt default
                        </div>
                        <div className={mod.definiteText}>
                            Text Definite
                        </div>
                    </div>
                </div>
                <div className={mod.right}>
                    <div className={mod.input}>
                        <form action='#' method='post'>
                            <input type="tel" placeholder="номер телефона"  name='phoneNumber'/>
                            <button className={mod.clearBtn}>
                                clear
                            </button>
                        </form>



                    </div>

                    <div className={mod.keyboard}>
                        <div className={mod.numbers}>
                            <div className={mod.number + " " + mod.one}>
                                1
                            </div>
                            <div className={mod.number + " " + mod.two}>
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
                </div>
            </div>

            <div className={mod.buttons}>

            </div>
        </div>
    )
}

export default Inner;