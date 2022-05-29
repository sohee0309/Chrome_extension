import React from "react";
import { render } from "react-dom";
import './popup.css';

//내 문서함(home) function
function opennewTab() {
    chrome.tabs.create({
        url: 'home.html'
    });
}


function selectVideo() {
    //chrome.tabs인지 runtime인지
    chrome.runtime.sendMessage({greeting: 'selectvideobtn'}, (response) => {
        console.log("[contentscript] chrome.runtime.sendMessage()");
        console.log(response.farewell);
      });
    
}

function Popup() { //popup을 호출할 react component 정의
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('newTab').addEventListener('click', opennewTab);
    });

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('select').addEventListener('click', selectVideo);
    });

    return (
        <div className="popup">
            <button id="newTab">New tab</button>
            <button id="select">video select</button>
        </div>
    )

}


export default Popup;