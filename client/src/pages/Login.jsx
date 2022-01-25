import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {useAuth} from "../hooks/auth";
import { Button } from "../ui/Button";
import { Field } from "../organism/Field";
import { Form, Container, Main, Title3 } from "../ui/Main";
import { Nav } from "../organism/NavForNotLoged";

export const Login = () => {
    const navigate = useNavigate();
    const {login, error} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;

        const res = await login(email, password);

        if (res.err) {
            return;
        }
       
       navigate("/");
    };

    return (
        <Main >
           <Nav/>
      <Container>
            <Form onSubmit={handleSubmit}>
                <Title3>Login</Title3>
                <Field onChange={onEmailChange} label="Email" placeholder="mail@mail.lt" name="email" required />
                <Field onChange={onPasswordChange} label="Password" placeholder="Testpasword0" name="password" type="password" required minLength={8} />
                <Button login="true" style={{ color: "white" }} type="submit" disabled={!email || !password}>
                        Login
                </Button>
                <div style={{color: "red"}}>{error}</div>
            </Form>
            </Container>
        </Main>
    );
};
