import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import {Register} from "./pages/Register";
import {AuthProvider} from "./components/AuthProvider";
import {RequireAuth} from "./components/RequireAuth";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";
import {AddSkills} from "./pages/AddSkill";
import { Nav } from "./organism/Nav";
import {WrongPage} from "./pages/WrongPage";

function App() {
  return (
    <Router>
     <AuthProvider>
        <Nav/>
       <Routes>
       <Route path="/" element={ <RequireAuth> <Home /> </RequireAuth> }/>
       <Route path="/add" element={ <RequireAuth> <AddSkills /> </RequireAuth> }/>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/404' element={<WrongPage/>}></Route>
         <Route path="*" element={<Navigate to="/404"/>} />
       </Routes>

     </AuthProvider>
  </Router>
  );
}

export default App;
