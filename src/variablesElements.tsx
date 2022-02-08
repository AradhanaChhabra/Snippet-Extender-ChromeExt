
import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Header=styled.div`
    font-size: 42px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 10px;
    color: #2f353c;
`
export const GridContainer = styled.div`
    width:80%;
    grid-template-columns:repeat(3,1fr);
    display:grid;
    padding:10px;
`
export const TitleRow=styled.div`
    background:#1d2227;
    color: white;
    font-size: 20px;
    font-weight
    display: flex;
    flex-direction: row;
    padding: 12px;
    padding-left:30px;
`