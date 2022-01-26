import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Auth} from "../services/authService";
import { Button } from "../ui/Button";
import { Field } from "../organism/Field";
import { Form, Container, Main, Title3 } from "../ui/Main";


export const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;

        const res = await Auth.register(email, password);

        if (res.err) {
            setError(res.err);
            return;
        }
        setError(null);
        alert('Registration successful, please login')
       navigate("/login");
    };

    return (
        <Main>
      <Container>
            <Form onSubmit={handleSubmit}>
                <Title3>Register</Title3>
                <Field onChange={onEmailChange} label="Email" placeholder="mail@mail.lt" name="email" required />
                <Field onChange={onPasswordChange} label="Password" name="password" type="password" required minLength={8} />
                <Button login="true" style={{ color: "white" }} type="submit" disabled={!email || !password}>
                        Register
                </Button>
                <div style={{color: "red"}}>{error}</div>
            </Form>
            </Container>
        </Main>
    );
};
