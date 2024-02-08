import express from "express";
import {
    deleteStudent,
    getAllStudents,
    getStudent,
    saveStudent,
    updateStudent
} from "../controllers/studentController.js";
const router = express.Router();
router.get('/', getAllStudents);
router.get('/:id',getStudent)
router.post('/',saveStudent);
router.put('/:id',updateStudent);
router.delete('/:id',deleteStudent);
export default router;
