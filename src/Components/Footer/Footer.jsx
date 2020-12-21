import React from 'react';
import mod from './Footer.module.css';

const Footer = () => {
    return(
        <div className={mod.footer}>
            <div className={mod.text}>
                КР УБ лицензиясы №12334 16 05 2019 Кыргыз Республикасы, Бишкек ш. Эгембердиева 1А
            </div>
            <div className={mod.admin}>
              <img src="https://thumbs.dreamstime.com/b/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81-150124023.jpg" alt=""/>
            </div>
        </div>
    )
}

export  default Footer;