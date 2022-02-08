import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { Wrapper,Header,GridContainer,TitleRow,Shortcut,ValueEditGrid, Value,Edit,Nothing} from './variablesElements'

type Props = {};


const Variables = (props: Props) => {

    const [data, setData] = useState([<Nothing>No Data Here</Nothing>]);
    var key = 0;
    const getKey = () => key++;
    
    function dataGenerator(keys:string[],values:string[]) {
        setData(keys.map((entry, index) => {
            console.log(entry)
            console.log(values[index])
            return <ValueEditGrid>
                <Shortcut>{entry}</Shortcut>
                <Value>{values[index]}</Value>
                <Edit>Edit</Edit>
            </ValueEditGrid>
        }))
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
            <Header>Snippet Expander Plugin</Header>
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
    </Wrapper>)
};

ReactDOM.render(
  <React.StrictMode>
    <Variables/>
  </React.StrictMode>,
  document.getElementById("editRoot")
);