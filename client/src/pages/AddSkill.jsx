import { useNavigate} from "react-router-dom";
import {SkillsApi} from "../services/api";
import { Field } from "../organism/Field";
import { Button } from "../ui/Button";
import { Form, Container, Main, Title1  } from "../ui/Main";
import { Nav } from "../organism/Nav";
import { useAuth } from "../hooks/auth";

export const AddSkills=()=>{
   const navigate=useNavigate();
   const {token}=useAuth();
  

   const handleSubmit = async (e)=>{
       e.preventDefault();
       try {
           const data=new FormData (e.target);
           const [title, description]=data.values();
           if (!title.length || !description.length)
                return console.error('Please enter values');
            const skill= await SkillsApi.add({title, description}, token)
            if(skill.err) throw new Error(skill.err);
            alert ('Added new skill')
  
        } catch (error) {
            alert(error);
            navigate("/login");
        }
        window.location.reload();
    }

   
   return(
       <Main>
           <Nav />
           <Container>
               <Form onSubmit={handleSubmit}>
                   <Title1>Add skill</Title1>
                   <Field label="Title" name="title" placeholder="Title" type="text" required />
                   <Field label="Description" name="description" placeholder="Description" type="text" required />
                   <Button login="true" style={{ color: "white" }} type="submit">Add</Button>
               </Form>
           </Container>
       </Main>
   )
}