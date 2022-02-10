import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import {
    Wrapper, Header, GridContainer, TitleRow, Shortcut, ValueEditGrid, Value, Edit,
    Nothing, About, Modal, Container, ModalInput, TextArea, Button, Message, Overlay,
    ButtonWrapper
} from './variablesElements'

type Props = {};


const Variables = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([<Nothing>No Data Here</Nothing>]);
    const [input, setInput] = useState('');
    const [value, setValue] = useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const valueRef = React.useRef<HTMLTextAreaElement>(null);
    const [showEditError, setShowEditError] = useState(false);
    // generate unique keys for mapping
    var key = 0;
    const getKey = () => key++;

    const onEdit = (key: string, value: string) => {
        setInput(key);
        setValue(value);
        setShowModal(prev => !prev)
    }
    
    const dataGenerator=(keys: string[], values: string[])=> {
        setData(keys.map((entry, index) => {
            return <ValueEditGrid key={getKey()}>
                <Shortcut>{entry}</Shortcut>
                <Value>{values[index]}</Value>
                <Edit onClick={() => onEdit(entry, values[index])}>Edit</Edit>
            </ValueEditGrid>
        }))
    }

    const deleteKey = (key: string|undefined)=> {
        key && chrome.storage.sync.remove(key, () => { })
        setShowModal(false)
        window.location.reload();
    }

    const changeShortcut = () => {
        const newKey = inputRef.current?.value;
        const newValue = valueRef.current?.value;
        const oldKey = inputRef.current?.defaultValue;
        if (newValue?.trim() && newKey?.trim()) {
            if (newKey != oldKey) {
                deleteKey(oldKey)
            }
            chrome.storage.sync.set({ [newKey]: newValue }, () => { })
            window.location.reload();
            setShowModal(false)
            setInput("")
            setValue("")
        }
        else {
            setShowEditError(true);
        }
    }

    useEffect(() => {
        // createRows called with data Object as parameter
        chrome.storage.sync.get(null, (items) => {
            var allKeys = Object.keys(items);
            var allValues = Object.values(items);
            dataGenerator(allKeys, allValues);
        });
    },[])   
    
    return(
        <Wrapper>
            <Modal show={showModal}>
                <Overlay onClick={()=>setShowModal(false)} />
                <Container show={showModal}>
                    <form>
                        <ModalInput ref={inputRef}type="text" placeholder="Name" defaultValue={input}/>
                        <TextArea ref={valueRef} rows={6} placeholder="Enter Value Here" defaultValue={value}/>
                    </form>
                    <ButtonWrapper>
                        <Button onClick={changeShortcut}>Save Changes</Button>
                        <Button delete={true} onClick={()=>deleteKey(inputRef.current?.defaultValue)}>Delete</Button>
                    </ButtonWrapper>
                    {showEditError&&<Message>Shortcut/Value Can't be Empty</Message>}
                </Container>
            </Modal>
            <Header>Snippet Expander Plugin</Header>
            <About>{"<"}Save customized snippets and use it anywhere in your browser{">"}</About>
            <GridContainer>
                {/* ROW 1 */}
                <TitleRow>
                    Shortcut
                </TitleRow>
                <TitleRow>
                    Value
                </TitleRow>
                <TitleRow/>
                {/* Other Rows */}
            </GridContainer>
            {data}
            <br/><br/>
            {/* {showEditError&&<Message>Shortcut/Value Can't be Empty</Message>} */}
    </Wrapper>)
};

ReactDOM.render(
  <React.StrictMode>
    <Variables/>
  </React.StrictMode>,
  document.getElementById("editRoot")
);