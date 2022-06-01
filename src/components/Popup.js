import React from 'react';
import {render} from 'react-dom';
import '../popup.css';


function Popup(){

    return (
        <div class="popup">
            <div class="popup_title">Lecmind</div>
                <div class="signin">
                로그인 후<br />이용하실 수 있습니다.<br />
                <button id="signin_btn">로그인</button>
                </div>
        </div>

    )
}

export default Popup;