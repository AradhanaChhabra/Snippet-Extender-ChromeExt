
import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height: calc(100vh - 20px);
`
export const Header=styled.div`
    font-size: 44px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 10px;
    color: #2f353c;
`
export const About = styled.div`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 2px 12px 24px;
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
    display: flex;
    flex-direction: row;
    padding: 12px;
    padding-left:30px;
`

export const ValueEditGrid = styled.div`
    grid-template-columns:repeat(3,1fr);
    display:grid;
    padding:10px;
    width:80%;
    border-bottom:1px solid #dee2e6;
`
export const Shortcut = styled.div`
    color:#212529;
    font-size:18px;
    padding: 12px;
    padding-left:30px;
`
export const Value=styled.div`
    color:#212529;
    padding: 12px;
    font-size:16px;
    padding-left:30px;
`
export const Edit=styled.button`
    color:#007bff;
    padding: 12px;
    padding-left:30px;
    font-size:16px;
    background:none;
    border:none;
    cursor:pointer;
`
export const Nothing=styled.div`
    font-size:24px;
    padding:20px;
`
interface Props{
    show: boolean,
    hideModal?: () => void
}
export const Modal = styled.div<Props>`
	z-index: auto;
	display: ${({ show }) => (show ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: center;
    align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width:100%;
    transition: all 0.4s ease;
`;
export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index:30;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Container = styled.div<Props>`
    display:flex;
    flex-direction:column;
	position:fixed;
    top:30%;
	background: #f7f7f7;
	width: 60%;
	height: auto;
	border-radius: 10px;
	padding: 28px;
    font-size:24px;
	color: #393972b2;
    box-shadow: 0 10px 25px 4px rgb(2 2 2 / 50%);
    z-index:40;
`;
export const ModalInput = styled.input`
    width:100%;
    padding:6px;
    margin:10px 0;
`
export const TextArea=styled.textarea`
    width:100%;
`
export const ButtonWrapper=styled.div`
    display:flex;
    flex-direction:row;
`
export const Button=styled.button`
    margin:0 20px;
    padding:8px;
    font-size:18px;
`
export const Message = styled.div`
    color:#499169;
    font-size:20px;
    padding:10px;
`