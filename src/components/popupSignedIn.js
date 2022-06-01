import React from 'react';
import {render} from 'react-dom';
import '../popupSignedIn.css';

chrome.extension.onMessage.addListener(function(request, sender){
    if(request.action == "selectVideo"){
        document.body.innerText = request.source;
    }
})

function onInjectScript(){
    chrome.tabs.executeScript(null, {
        file: "InjectedScript.js"
    }, function() {
        if(chrome.extension.lastError){
            document.body.innerText = 'There was an error injecting script : \n' 
            + chrome.extension.lastError.message;
        }
    })
}

window.onload = onInjectScript;

function popupSignedIn(){

    return (
    <div className="popup-signed-in">
        <div class="popup_title">Lecmind</div>
        <div class="mypage">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 576 512"><path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z"/></svg>
            내 문서함 가기
            <button id="newTab">내 문서함</button>
        </div>
        <div class="videoselect">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            동영상 강의 필기하기
            <button id="select">동영상 선택</button>
        </div>
        <div class="signout">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 -50 512 512"><path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/></svg>
            <button id="signout_btn">로그아웃</button>
        </div>
    </div>
    )
}

export default popupSignedIn;