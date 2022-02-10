import React, { useEffect, useState,useRef } from "react";
import ReactDOM from "react-dom";
import { Button, ButtonContainer, Container, Display, LookupButton, LookupInput, LookupWrapper, Message, ModalInput, TextArea, ValueFound } from "./PopupElements";

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
      setMessage([false,"name or value cannot be empty"])
    }
  }

  const editSnippetHandler = () => {
    chrome.tabs.create({ url: "variables.html" });
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
              exist: false,
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
    <Container>
      <form style={{"width":"100%"}}>
        <ModalInput type="text" id="key" ref={shortcutRef} placeholder="Shortcut for the snippet"/>
        <TextArea
          id="value"
          ref={snippetTextRef}
          rows={5}
          placeholder="Type the snippet text here"
        />
      </form>
      <ButtonContainer>
        <Button type="button"  onClick={saveSnippetHandler}>Save</Button>
        <Button type="button"  onClick={editSnippetHandler}>Edit Variables</Button>
      </ButtonContainer>
      <Message error={!message[0]}>{message[1]!=""&&message[1]}</Message>
      <form>
        <LookupWrapper>
          <LookupInput
            type="text"
            ref={findValueRef}
            placeholder="Quick Variable Lookup"
          />
          <LookupButton
            id="find"
            type="button"
            onClick={findSnippetHandler}>Find</LookupButton>
        </LookupWrapper>
      </form>

      <br />
      
      <ValueFound>
        {lookupValue.value!="" && <>
          <Display error={!lookupValue.exist}>{lookupValue.value}</Display>
          {lookupValue.exist&&<Button onClick={copyBtnHandler} disabled={copyBtnAtt.disabled}>{copyBtnAtt.innerText}</Button>}
        </>}

      </ValueFound>
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
