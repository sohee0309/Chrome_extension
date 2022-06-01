chrome.extension.onConnect.addListener(function(port){
    var extensionListener = function(message, sender, sendResponse){
        if(message.tabId && message.content){
            chrome.tabs.executeScript(message.tabId, {file: 'InjectedScript.js'});
        }
        else {
            
        }
    }
})