import {useNavigate} from "react-router-dom";
import { Block, Title3, Paragra } from "../ui/Main";


export const SkillsDisplay = (skills) => {
    
    const skill=skills.skill
        
   
    return (
        <Block>
        <Title3>{skill.title}</Title3>
        <Paragra>{skill.description}</Paragra>
        </Block>
    );
    }