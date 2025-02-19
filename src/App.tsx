import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Box, Button } from "@mui/material";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Box sx={{ textAlign: "center", margin: "20px" }}>
          <Button component={Link} to="/">Counter</Button>
          <Button component={Link} to="/form">User Form</Button>
          <Button component={Link} to="/editor">Rich Text Editor</Button>
          <Button component={Link} to="/dashboard">Dashboard</Button>
        </Box>

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
