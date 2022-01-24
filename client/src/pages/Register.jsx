import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {Auth} from "../services/authService";
import { Button } from "../ui/Button";
import { Field } from "../organism/Field";
import { Header, Navbar, Title1, Navi, Item } from "../ui/Navbar";
import { Form, Container, Main } from "../ui/Main";

export const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) return;

        const res = await Auth.register(username, password);

        if (res.error) {
            setError(res.error);
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
                <Field onChange={onUsernameChange} label="User name" placeholder="User Name" name="username" required />
                <Field onChange={onPasswordChange} label="Password" name="password" type="password" required minLength={8} />
                <Button login style={{ color: "white" }} type="submit" disabled={!username || !password}>
                        Register
                </Button>
                <div style={{color: "red"}}>{error}</div>
            </Form>
            </Container>
        </Main>
    );
};
