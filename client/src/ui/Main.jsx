import styled from "styled-components";
import {Element} from "./Elements";

export const Main = ({...rest}) =>
    Element({as: "main",  ...rest});

export const Paragra = ({ ...rest}) =>
    Element({as: "p", ...rest});

const container = ({  ...rest}) =>
    Element({as: "div",  ...rest});

const list = ({  ...rest}) =>
    Element({as: "div",  ...rest});

const block = ({...rest}) =>
    Element({as: "div",  ...rest});

const form = ({ ...rest}) =>
    Element({as: "form",  ...rest});

const title1=({...rest})=> 
    Element({as: "h1", ...rest});

const title3=({...rest})=> 

    Element({as: "h3", ...rest});

const title4=({...rest})=> 
    Element({as: "h4", ...rest});


export const Container= styled(container)`
    display: flex;
    justify-content: flex-end;
    margin-top: 250px;
`
;
export const Form= styled(form)`
    display: block;
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 5px;
`
;
export const Title3=styled(title3)`
    text-align: center;
`
;
export const Title1=styled(title1)`
    text-align: center;
    text-size: 24px;
`
;
export const Title4=styled(title4)`
    text-align: center;
    color: #1d3972;

`
;
export const Block = styled(block)`
    border: solid 2px #1d3972;
    width: 26%;
    height: 20%;
    margin: 2%;
    text-align: center;
    padding: 30px 0 30px 0;
    font-size: 18px;
    padding: 10px;
`
;
export const List= styled(list)`
    display: flex;
    flex-direction:column;
    justify-content: flex-even;
    
`
;