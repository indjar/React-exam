import { Link} from "react-router-dom";
import {useAuth} from "../hooks/auth"
import { Button } from "../ui/Button";
import { Title3 } from "../ui/Main";
import { Header, Navbar, Title1, Navi, Item } from "../ui/Navbar";



export const Nav=()=>{
    const auth = useAuth();

    const start = auth.token ? (
        <Navi>
        <Button  register='true'>
            <Link style={{ color: "#1d3972" }} to="/">Home</Link>
        </Button>
        <Button login="true">
            <Link style={{ color: "white" }} to="/add" >Add</Link>
        </Button>
        <Button  register='true'>
            <Link onClick={() => auth.logout()} style={{ color: "#1d3972" }} to="/">Logout</Link>
        </Button>
    </Navi>
    ) : null

    const buttons = auth.token ? (

            <Title3 style={{ marginRight:"20px" }}>
                Welcome, {auth.email}!
            </Title3>

    ) : (
        <Navi>
            <Button login="true">
                <Link style={{ color: "white" }} to="/login">
                    Login
                </Link>
            </Button>

            <Button register='true'>
                <Link style={{ color: "#1d3972" }} to="/register">
                    Register
                </Link>
            </Button>
        </Navi>
    );

    return(
<Header style={{}}>
<Navbar className="navbar">
    <Title1>
        <Item as="img" src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="logo" />
    </Title1>
    {start}
    <div>{buttons}</div>
</Navbar>
</Header>)
}