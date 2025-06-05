import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Mount the task routes
app.use('/api/tasks', taskRoutes);

export default app;
