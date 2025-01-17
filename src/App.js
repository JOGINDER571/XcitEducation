import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import StudentLog from "./Components/StudentLog";
import CompanyLog from "./Components/CompanyLog";
import Student from "./Components/Student";
import Employ from "./Components/Employ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyApplication from "./Components/MyApplicationTable";
import MyApplicationCard from "./Components/MyApplicationCard";
import Internship from "./Components/Internship";
import { createTheme, ThemeProvider } from "@mui/material";
import Employee_dash from "./Components/Employee_dash";
import Employee_intern_dash from "./Components/Employee_intern_dash";
import Ide from "./Components/Ide";
import IndividualPage from "./Components/IndividualPage";
import PostIntern from "./Components/PostIntern";
import Question from "./Components/Question";

const theme = createTheme({
  margin: 0,
});

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/register/Student" element={<Student />} />
            <Route path="/register/Company" element={<Employ />} />
            <Route path="/login/StudentLog" element={<StudentLog />} />
            <Route path="/login/CompanyLog" element={<CompanyLog />} />
            <Route path="/login/MyApplication" element={<MyApplication />} />
            <Route path="/Internship" element={<Internship />} />
            <Route path="/ide" element={<Ide />} />
            <Route path="/individualPage" element={<IndividualPage />} />
            <Route path="/postIntern" element={<PostIntern />} />
            <Route path="/question" element={<Question />} />
            <Route
              path="/login/MyApplicationCard"
              element={<MyApplicationCard />}
            />
            <Route path="/Employee/Dashboard" element={<Employee_dash />} />
            <Route
              path="/Employee/Internship"
              element={<Employee_intern_dash />}
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
