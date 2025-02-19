import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const Counter: React.FC = () => {
    const [count, setCount] = React.useState(0);

  
    const counterAnim = useSpring({
        number: count,
        from: { number: 0 },
        config: { tension: 170, friction: 12 },
    });

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            gap: 2,
        }}>
            <Card sx={{ padding: 3, boxShadow: 3, borderRadius: 3, minWidth: 300 }}>
                <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>
                    Counter
                </Typography>
                
                <animated.div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    {counterAnim.number.to((n) => n.toFixed(0))}
                </animated.div>

                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => setCount(count + 1)}>+</Button>

                    <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => setCount(count - 1)}>-</Button>

                    <Button 
                    variant="outlined" 
                    color="error" 
                    onClick={() => setCount(0)}>RESET</Button>
                </Box>
                </CardContent>
            </Card>
        </Box>  
    );
};

export default Counter