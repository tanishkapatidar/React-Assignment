import React, { useState} from "react";
import { Button, Box, Typography} from "@mui/material";

const Counter: React.FC= () => {
    const [count, setCount] =useState(0);
    const handleIncrement =() => setCount(count+1);
    const handleDecrement =() => setCount(count-1);
    const handleReset =()=> setCount(0);

    return (
        <Box sx={{ textAlign: "center", padding: 2, backgroundColor: `rgba(0, 150, 255, ${count / 10})`, transition: "background 0.5s ease" 
        }}>
            <Typography variant="h4">Counter: {count}</Typography>
            <Button onClick={handleIncrement}>+</Button>
            <Button onClick={handleDecrement}>-</Button>
            <Button onClick={handleReset}>Reset</Button>
        </Box>
    );

};

export default Counter