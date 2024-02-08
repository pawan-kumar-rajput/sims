import Student from "../models/studentModel.js";
export const getAllStudents = async (req, res) => {
    try {
        const data = await Student.find();
        res.send(data);
    }
    catch (err) {
        res.send(err);
    }
}

export const getStudent = async (req, res) => {
    try {
        const data = await Student.findOne({ _id: req.params.id });
        res.send(data);
    }
    catch (err) {
        res.send(err);
    }
}

export const saveStudent = async (req, res) => {
    try {
        const student=new Student({
            name:req.body.name,
            email:req.body.email
        });
        const data = await student.save();
        res.status(200).send(data);
    }
    catch (err) {
        res.send(err);
    }
}


export const deleteStudent = async (req, res) => {
    try {
        const data = await Student.deleteOne({_id:req.params.id});
        data.id=req.params.id;
        res.status(200).send(data);
    }
    catch (err) {
        res.send(err);
    }
}


export const updateStudent = async (req, res) => {
    try {
        await Student.updateOne({_id:req.params.id},req.body);
        const data=await Student.findById(req.params.id);
        console.log(data);
        res.status(200).send(data);
    }
    catch (err) {
        res.send(err);
    }
}
