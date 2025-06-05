import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:["inprogress","completed"],
        default:"inprogress"
    },
    dueDate:{
        type:Date,
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})
const Task = mongoose.model("tasks",taskSchema)
export default Task;