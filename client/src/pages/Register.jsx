import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {Auth} from "../services/authService";
import { Button } from "../ui/Button";
import { Field } from "../organism/Field";
import { Header, Navbar, Title1, Navi, Item } from "../ui/Navbar";
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
       navigate("/login");
    };

    return (
        <Main>
            <Header style={{}}>
                <Navbar className="navbar">
                    <Title1>
                        <Item as="img" src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="logo" />
                    </Title1>
                    <Navi>
                        <Button  register='true'>
                            <Link style={{ color: "#1d3972" }} to="/register">Register</Link>
                        </Button>
                        <Button login="true">
                            <Link style={{ color: "white" }} to="/Login" >Login</Link>
                        </Button>
                    </Navi>
                </Navbar>
        </Header>
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
