import styled from "styled-components";
import {Element} from "./Elements";

 const container = ({ ...rest}) =>
    Element({as: "div", className:"container", ...rest});

const form = ({ ...rest}) =>
    Element({as: "form",  ...rest});

export const Main = ({ ...rest}) =>
    Element({as: "main", className:"main", ...rest});

const title3=({...rest})=> 
    Element({as: "h1", ...rest});


export const Container= styled(container)`
    display: flex;
    justify-content: flex-end;
    margin-top: 200px;
`

export const Form= styled(form)`
    display: block;
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 5px;
`

export const Title3=styled(title3)`
    text-align: center;
`