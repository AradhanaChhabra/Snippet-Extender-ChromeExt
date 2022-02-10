import styled from 'styled-components'
interface ErrorProp{
    error: boolean|string
}
export const Container=styled.div`
    background: #ffffff;
    padding: 10px;
    color: #2c2a2a;
    display: flex;
    flex-direction:column;
    align-content:stretch;
    font-family:'Ubuntu', sans-serif;
`
export const ModalInput=styled.input`
    width: calc(100% - 40px);
    margin-bottom: 8px;
    color: rgb(19, 18, 18);
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    background:rgb(245 245 245);
    font-family:'Ubuntu', sans-serif;

    ::placeholder {
       color: #93a8b4;
       font-size:16px;
       font-family:'Ubuntu', sans-serif;
   }
   &:hover {
    border:1px solid #32435e;
  }
    &:focus {
            outline: none;
            border:2px solid #162741;
    }
`
export const TextArea=styled.textarea`
   width: calc(100% - 40px);
    margin-bottom: 8px;
    color: rgb(19, 18, 18);
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    background:rgb(245 245 245);

    ::placeholder {
       color: #93a8b4;
       font-size:16px;
   }
   &:hover {
    border:1px solid #32435e;
  }
    &:focus {
            outline: none;
            border:2px solid #162741;
    }
`
export const ButtonContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;

`
export const Button=styled.button`
    padding: 10px 18px;
    font-size: 16px;
    font-weight: 600;
    background: rgb(13 16 33);
    color: #ffffff;
    border-radius: 6px;
    border:none;

    &:hover {
    background: #201e2c;
    border:1px solid #22212e;
  }
`
export const Message=styled.div<ErrorProp>`
    margin:20px 0;
    font-size:16px;
    font-weight: 400;
    color: ${p=>p.error?'#b44242':'#4ebe61'};
`
export const LookupWrapper=styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-content:stretch;
`
export const LookupButton = styled.button`
    padding: 10px 18px;
    font-size: 16px;
    font-weight: 600;
    background: rgb(50 62 78);
    color: #ffffff;
    border-radius: 6px;
    border:none;

    &:hover {
    background: #18202e;
    border:1px solid #232b46;
  }
    width: auto;
    padding: 0px 24px;
    font-size: 16px;
`
export const LookupInput = styled.input`
    width:70%;
    color: rgb(19, 18, 18);
    margin-right:4px;
    font-size: 18px;
    padding: 10px 10px;
    border-radius: 4px;
    border:1px solid #32435e;
    background:rgb(245 245 245);
    font-family:'Ubuntu', sans-serif;

    ::placeholder {
        font-size:16px;
        color: #93a8b4;
   }
   &:hover {
    border:1px solid #2a3649;
  }
    &:focus {
            outline: none;
            border:2px solid #162741;
    }
`

export const ValueFound = styled.div`
    font-size:16px;
`
export const Display=styled.div<ErrorProp>`
    background: #efe9ff;
    color:${p => p.error && '#b44242'};
    padding: 10px;
    margin-bottom: 10px;
`