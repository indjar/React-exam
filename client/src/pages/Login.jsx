import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/auth";
import { Button } from "../ui/Button";
import { Field } from "../organism/Field";
import { Form, Container, Main, Title3 } from "../ui/Main";


export const Login = () => {
    const navigate = useNavigate();
    const {login, error} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logError, setError] = useState(null);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) 
        return setError("Please enter email and password");

        const res = await login(email, password);
  
        if (res.err) return setError(res.err);
        setError(null)
        
       navigate("/")
    };
    
    return (
        <Main >
      <Container>
            <Form onSubmit={handleSubmit}>
                <Title3>Login</Title3>
                <Field onChange={onEmailChange} label="Email" placeholder="mail@mail.lt" name="email" required />
                <Field onChange={onPasswordChange} label="Password" placeholder="*********" name="password" type="password" required minLength={8} />
                <Button login="true" style={{ color: "white" }} type="submit" disabled={!email || !password}>
                        Login
                </Button>
                <div 
                style={{color: "red",
                        padding:"20px", 
                        textAlign:"center", 
                        font:"message-box"}}>
                            {error || logError}
                </div>
            </Form>
            </Container>
        </Main>
    );
};
