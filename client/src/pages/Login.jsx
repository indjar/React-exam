import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {useAuth} from "../hooks/auth";
import { Button } from "../ui/Button";
import { Field } from "../organism/Field";
import { Header, Navbar, Title1, Navi, Item } from "../ui/Navbar";
import { Form, Container, Main, Title3 } from "../ui/Main";

export const Login = () => {
    const navigate = useNavigate();
    const {login, error} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) return;

        const res = await login(username, password);

        if (res.error) {
            return;
        }
       
       navigate("/");
    };

    return (
        <Main >
            <Header style={{}}>
                <Navbar className="navbar">
                    <Title1>
                        <Item as="img" src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="logo" />
                    </Title1>
                    <Navi>
                        <Button register="true">
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
                <Title3>Login</Title3>
                <Field onChange={onUsernameChange} label="User name" placeholder="User Name" name="username" required />
                <Field onChange={onPasswordChange} label="Password" name="password" type="password" required minLength={8} />
                <Button login="true" style={{ color: "white" }} type="submit" disabled={!username || !password}>
                        Login
                </Button>
                <div style={{color: "red"}}>{error}</div>
            </Form>
            </Container>
        </Main>
    );
};
