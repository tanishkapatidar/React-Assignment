import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Typography } from "@mui/material";

const RichTextEditor: React.FC = () => {
    const [text, setText]= useState("");

    return (
        < Box sx={{ marginTop: "20px" }}>
            <Typography variant="h4">Rich Text Editor</Typography>
            <ReactQuill value={text} onChange={setText} />
        </Box>
    );
};

export default RichTextEditor;
