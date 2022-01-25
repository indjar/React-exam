import { Link} from "react-router-dom";
import { Button } from "../ui/Button";
import { Header, Navbar, Title1, Navi, Item } from "../ui/Navbar";



export const Nav=()=>{
    return(
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
</Header>)
}