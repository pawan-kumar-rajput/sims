import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;
export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
    const res = await axios.get(base_url + '/');
    return res.data;
});

export const addStudent = createAsyncThunk('students/addStudent', async (studentData) => {
    const res = await axios.post(base_url + '/', studentData);
    return res.data;
});

export const deleteStudent = createAsyncThunk('students/deleteStudent', async (id) => {
    const res = await axios.delete(base_url + '/' + id);
    return res.data;
});

export const updateStudent = createAsyncThunk('students/updateStudent', async (data) => {
    const res = await axios.put(base_url + '/' + data.id,data.studentData);
    return res.data;
});

export const studentSlice = createSlice({
    name: "studentSlice",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            return action.payload;
        });

        builder.addCase(addStudent.fulfilled, (state, action) => {
            state.push(action.payload);
        });

        builder.addCase(deleteStudent.fulfilled, (state, action) => {
            if (action.payload.deletedCount > 0) {
                return state.filter((val, index) => val._id !== action.payload.id);
            }
            else {
                return state;
            }
        });

        builder.addCase(updateStudent.fulfilled, (state, action) => {
            state.forEach((val) => {
                if (val._id === action.payload._id) {
                    val.name = action.payload.name;
                    val.email = action.payload.email;
                }
            });
        });
    }
});
