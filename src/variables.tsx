import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import { Wrapper,Header,GridContainer,TitleRow } from './variablesElements'

type Props = {};


const Variables = (props: Props) => {
    
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
    </Wrapper>)
};

ReactDOM.render(
  <React.StrictMode>
    <Variables/>
  </React.StrictMode>,
  document.getElementById("editRoot")
);