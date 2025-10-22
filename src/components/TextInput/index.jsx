import styled from "styled-components";

const StyledInput = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #C98CF1;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const TextInputWrapper = styled.div`
    position: relative;
    display: inline-block;
`

const StyledIcon = styled.img`
     top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
    position: absolute;`



const TextInput = (props) => {
    return (
        <TextInputWrapper>
            <StyledInput placeholder="O que você procura?" />
            <StyledIcon src="/images/search.png" alt="Ícone de busca" />
        </TextInputWrapper>
    );
}


export default TextInput;