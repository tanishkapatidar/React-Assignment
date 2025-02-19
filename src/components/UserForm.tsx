import React, { useState, useEffect} from "react";
import { TextField, Button, Typography,Box } from "@mui/material";
import {v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

const UserForm =()=> {
    const dispatch =useDispatch();
    const [formData, setFormData]= useState({id: uuidv4(),name:"",address:"", email:"",phone:""});
    const[ isDirty, setIsDirty] =useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]: e.target.value});
    setIsDirty(true);
}

const handleSave= ()=> {
    dispatch(setUserData(formData));
    alert("User data saved successfully!");
};

useEffect(()=> {
    const handleBeforeUnload = (event: BeforeUnloadEvent) =>{
        if (isDirty){
            event.preventDefault();
            event.returnValue ="You have unsaved changes. Do you really want to leave?";
        }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return ()=> window.removeEventListener("beforeunload", handleBeforeUnload);
},[isDirty]);

return (
    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4">User Form</Typography>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
      <Button onClick={handleSave}>Save</Button>
    </Box>
  );

};
export default UserForm