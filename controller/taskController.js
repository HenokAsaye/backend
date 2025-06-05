import { Task } from "../model/taskModel.js";
import { HTTP_STATUS_CODE } from "http-status-code"; // Assuming this import is correct for your setup

// Helper function for consistent error responses (optional)
// const sendErrorResponse = (res, statusCode, message) => {
//     return res.status(statusCode).json({ message });
// };

export const createTask = async (req, res) => {
    const { title, description, status, DueDate } = req.body;

    // BEST PRACTICE: Add input validation here
    // e.g., check if title and description are provided and are strings
    // if (!title || typeof title !== 'string') {
    //     return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: 'Title is required and must be a string.' });
    // }

    try {
        const task = await Task.create({
            title,
            description,
            status,
            DueDate // IMPORTANT: Ensure 'DueDate' casing matches your Task model definition
        });
        res.status(HTTP_STATUS_CODE.CREATED).json({
            message: "Task Created Successfully",
            task
        });
    } catch (error) {
        // console.error("Error creating task:", error); // Optional: server-side logging
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            message: error.message || "An unexpected error occurred while creating the task."
        });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        if (!tasks || tasks.length === 0) {
            return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
                message: "No Tasks Here🔍" // Keeps original message for no tasks found
            });
        }

        res.status(HTTP_STATUS_CODE.OK).json({
            message: "Tasks fetched successfully",
            tasks
        });
    } catch (error) {
        // console.error("Error fetching all tasks:", error);
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            message: error.message || "An unexpected error occurred while fetching tasks."
        });
    }
};

export const getTaskById = async (req, res) => {
    const { taskId } = req.params;

    // BEST PRACTICE: Validate taskId (e.g., if it's a valid MongoDB ObjectId format)
    // if (!mongoose.Types.ObjectId.isValid(taskId)) {
    //     return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: 'Invalid Task ID format.' });
    // }

    try {
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
                message: "Task not found"
            });
        }

        res.status(HTTP_STATUS_CODE.OK).json({
            message: "Task fetched successfully",
            task
        });
    } catch (error) {
        // console.error(`Error fetching task by ID ${taskId}:`, error);
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            message: error.message || "An unexpected error occurred while fetching the task."
        });
    }
};

export const updateTask = async (req, res) => {
    const { taskId } = req.params;
    const { title, description, status, DueDate } = req.body;

    // BEST PRACTICE: Validate taskId and req.body contents

    try {
        const updateFields = {};
        if (title !== undefined) updateFields.title = title;
        if (description !== undefined) updateFields.description = description;
        if (status !== undefined) updateFields.status = status;
        if (DueDate !== undefined) updateFields.DueDate = DueDate; // IMPORTANT: Ensure 'DueDate' casing matches your Task model

        if (Object.keys(updateFields).length === 0) {
            return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
                message: "No update fields provided. Please provide at least one field to update."
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            updateFields, 
            { new: true, runValidators: true } // new:true returns the updated doc, runValidators ensures schema validation
        );

        if (!updatedTask) {
            return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
                message: "Task not found, update failed."
            });
        }

        res.status(HTTP_STATUS_CODE.OK).json({
            message: "Task updated successfully",
            task: updatedTask
        });
    } catch (error) {
        // console.error(`Error updating task ${taskId}:`, error);
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            message: error.message || "An unexpected error occurred while updating the task."
        });
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
                message: "Task not found, deletion failed."
            });
        }

        res.status(HTTP_STATUS_CODE.OK).json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            message: error.message || "An unexpected error occurred while deleting the task."
        });
    }
};