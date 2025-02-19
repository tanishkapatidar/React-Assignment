import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import {useSpring, animated} from "@react-spring/web"
import { XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer, LineChart, Line } from "recharts";

const userProfile = {
    name: "John Smith",
    email: "john@gmail.com",
    scoreHistory: [
        { week: "Week 1", score: 60 },
        { week: "Week 2", score: 75 },
        { week: "Week 3", score: 90 },
        { week: "Week 4", score: 85 },
      ],
};

const Dashboard: React.FC =()=> {

    const profileAnim = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 800 }, 
  });

    const chartAnim = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 800 }, // Slow fade-in effect
    });


  return (
    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h4">Dashboard</Typography>

      
        <animated.div style={profileAnim}>
            <Card sx={{ width: "300px", margin: "20px auto" }}>
                <CardContent>
                    <Typography variant="h6">User: {userProfile.name}</Typography>
                    <Typography variant="body2">Email: {userProfile.email}</Typography>
                </CardContent>
            </Card>
        </animated.div>

      
        <animated.div style={chartAnim}>
            <ResponsiveContainer width="80%" height={300}>
                <LineChart data={userProfile.scoreHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </animated.div>
    </Box>
  );
};

export default Dashboard;