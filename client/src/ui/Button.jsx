import styled from "styled-components";
import {Element} from "./Elements";

 const button = ({ ...rest}) =>
    Element({as: "button", ...rest});

export const Button=styled(button)`
background: ${props => props.login ? "#1d3972" : "white"};
color: ${props => props.register ? "white" : "#1d3972"};
max-width:150px;
font-size: 20px;
margin: 14px;
padding: 0.25em 1em;
border: 2px solid #1d3972;
border-radius: 10px;
`
;

