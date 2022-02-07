import React, { useEffect, useState,useRef } from "react";
import ReactDOM from "react-dom";

const Popup = () => {
  const [message, setMessage] = useState([false, ""]);
  const [lookupValue, setLookUpValue] = useState({
    exist: false,
    value:""
  });
  const [copyBtnAtt, setCopyBtnAtt] = useState({
    innerText: "Copy to clipboard",
    disabled: false,
  })

  const shortcutRef = React.useRef<HTMLInputElement>(null);
  const snippetTextRef = React.useRef<HTMLTextAreaElement>(null);
  const findValueRef = React.useRef<HTMLInputElement>(null);

  const saveSnippetHandler = () => {
    // tryStoreValue();
    const key = shortcutRef.current?.value;
    const value = snippetTextRef.current?.value;
    if (key?.trim() && value?.trim()) {
      chrome.storage.sync.set({ [key]: value }, () => setMessage([true,"variable has been set"]));
    }
    else {
      setMessage([true,"name or value cannot be empty"])
    }
  }

  const editSnippetHandler = () => {
    chrome.tabs.create({ url: "variables.html" });
    console.log("edit it");
  }
  const findSnippetHandler = () => {
    // tryGetValue()
    const key = findValueRef.current?.value;
    if (key?.trim()) {
      chrome.storage.sync.get(key, function(result) {
          var key_value = Object.entries(result)[0]
          if (key_value != undefined){ 
            setLookUpValue({
              exist: true,
              value:key_value[1]
              })
          }

          else {
            setLookUpValue({
              exist: true,
              value:"variable not found"
              })
          }
      })
  }
  }
  const copyBtnHandler = () => {
    setCopyBtnAtt({
      innerText: "Copied.",
      disabled: true
    });
    copyToClipboard(lookupValue.value);
  }
function copyToClipboard(text:string) {
    window.navigator.clipboard.writeText(text)
    .then(() => {
    })
  . catch(err => {
    console.error('Could not copy text: ', err);
  });
}
  return (
    <div className="container" style={{
      "background": "#fffde8",
      "padding": "10px",
      "color": "#00204a",
      "display": "flex",
      "flexDirection": "column",
      "alignContent":"stretch"
    }}>
      <form style={{"width":"100%"}}>
          <div className="form-group" style={{"width":"100%"}}>
            <input type="text" className="form-control" id="key" ref={shortcutRef} placeholder="Shortcut for the snippet" style={{"width":"100%","marginBottom":"4px"}}/>
          </div>
          <div className="form-group" style={{"width":"100%"}}>
          <textarea style={{ "width": "100%" }} className="form-control" id="value" ref={snippetTextRef} rows={8} placeholder="Type the snippet text here"></textarea>
          </div>
      </form>
      <button id="save" type="button" className="btn btn-dark" onClick={saveSnippetHandler}>Save</button>
      <button id="variables" type="button" className="btn btn-dark" onClick={editSnippetHandler}>Edit Variables</button>

        <br/>

      <div id="message">{message[0]&&message[1]}</div>

      <form>
        <div className="input-group-prepend">
          <input type="text" className="form-control" id="lookup" ref={findValueRef} placeholder="Quick Variable Lookup"/>
            <button id="find" type="button" className="btn btn-dark" onClick={findSnippetHandler}>Find</button>
          </div>
      </form>

      <br/>
      <div id="lookup-value">
        {lookupValue.exist && <>
          <textarea style={{"display":"block"}}className="lookupText" rows={3} readOnly={true} value={lookupValue.value} />
          <button id="copyBtn" onClick={copyBtnHandler} disabled={copyBtnAtt.disabled}>{copyBtnAtt.innerText}</button>
        </>}
      </div>

    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
