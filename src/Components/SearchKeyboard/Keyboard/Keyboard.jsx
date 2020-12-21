import React from 'react';
import './Keyboard.css';


const Keyboard = () => {
  return (
    <div className={'containerK'}>
      <div className={'rowK one'}>
        <div className={"btn"}>
          <button> `</button>
          <button> 1</button>
          <button> 2</button>
          <button> 3</button>
          <button> 4</button>
          <button> 5</button>
          <button> 6</button>
          <button> 7</button>
          <button> 9</button>
          <button> 0</button>
          <button> -</button>
          <button> =</button>
          <button id={'backSpace'}> BackSpace</button>
        </div>
      </div>

      <div className={'rowK two'}>
        <div className={"btn"}>
          <button id='tab'> Tab</button>
          <button> й</button>
          <button> ц</button>
          <button> у</button>
          <button> к</button>
          <button> е</button>
          <button> н</button>
          <button> г</button>
          <button> ш</button>
          <button> щ</button>
          <button> з</button>
          <button> х</button>
          <button> ъ</button>
        </div>
      </div>

      <div className={'rowK three'}>
        <div className={"btn"}>
          <button id={'cap'}> Caps</button>
          <button> ф</button>
          <button> ы</button>
          <button> в</button>
          <button> а</button>
          <button> п</button>
          <button> р</button>
          <button> о</button>
          <button> л</button>
          <button> д</button>
          <button> ж</button>
          <button> э</button>
          <button id={'enter'}> Enter</button>
        </div>
      </div>

      <div className={'rowK four'}>
        <div className={"btn"}>
          <button id={'shift'}> Shift</button>
          <button> я</button>
          <button> ч</button>
          <button> с</button>
          <button> м</button>
          <button> и</button>
          <button> т</button>
          <button> ь</button>
          <button> б</button>
          <button> ю</button>
          <button> .</button>
          <button id={'shift'}> Shift</button>
        </div>
      </div>

      <div className={'rowK five'}>
        <div className={"btn"}>
          <button> Ctrl</button>
          <button> Win</button>
          <button> Alt</button>
          <button id={'space'}> Space</button>
          <button> Alt</button>
          <button> Win</button>
          <button> Ctrl</button>
        </div>
      </div>


    </div>
  )
}

export default Keyboard;