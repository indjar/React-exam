import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { SkillsApi } from "../services/api";
import { SkillsDisplay } from "../components/SkillsDisplay";
import { List, Main, Title1, Title3} from "../ui/Main";


export const Home=()=>{
    const [skills, setSkills]=useState();
    const {state}=useLocation();
    const {token}=useAuth();
    
    const fetchSkills=async()=>{
        const res= await SkillsApi.getAll(token);
        if (res.error) {
            alert(res.error)
        }
        setSkills(res);
    };

    const addSkill=(skill)=>{
        setSkills((prevState)=> [...prevState, skill])
    };

    

    useEffect(()=>{
        fetchSkills();
    }, []);

    useEffect(()=>{
        if (!state) return ;

        if (state.added){
            addSkill(state.added);
        }
    }, [state]);

    if (!skills) {
        return <div>Loading...</div>;
    }

    const renderedSkills=!skills?
    <Title3 style={{color:"red"}}>NO SKILLS ADDED YET <br/> Please add some</Title3> 
    : skills.map((skill)=>(
        <SkillsDisplay key={skill.id} skill={skill}/>
    ) ) ;

    console.log(renderedSkills)

    return (
        <Main>
        
            <div style={{marginTop:"180px"}}>
            <Title1>Skills List</Title1>
           <List>
           {renderedSkills}
               </List> 
               </div>
        </Main>
    )
}