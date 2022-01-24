import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import {Register} from "./pages/Register";
import {AuthProvider} from "./components/AuthProvider";
import {RequireAuth} from "./components/RequireAuth";





function App() {
  return (
    <Router>
     <AuthProvider>

       <Routes>
         <Route path='/register' element={<Register/>}></Route>
       </Routes>

     </AuthProvider>
  </Router>
  );
}

export default App;
