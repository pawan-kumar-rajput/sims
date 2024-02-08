import { Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, fetchStudents, updateStudent } from '../store/slices/studentSlice';
import { useNavigate, useParams } from 'react-router-dom';

const AddStudent = () => {
  const students = useSelector((state) => state.students);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const student = students.find((s) => s._id === id);
      if (student) {
        setName(student.name);
        setEmail(student.email);
      }
    }
  }, [id, students]);

  const handleSubmit = () => {
    if (id) {
      const studentData = { name, email };
      dispatch(updateStudent({ id, studentData }));
    }
    else {
      dispatch(addStudent({ name, email }));
    }
    navigate('/');
  }

  return (
    <Grid container rowGap={5}>
      <Grid item container>
        <Navbar />
      </Grid>
      <Grid item container justifyContent={'center'}>
        <Card >
          <CardHeader sx={{ backgroundColor: '#1976d2', color: 'white' }}
            title='Enter Student Detail'/>
          <CardContent>
            <form onSubmit={() => handleSubmit()}>
              <div>
                <TextField value={name} onChange={(e) => setName(
                  e.target.value,
                )}
                variant='outlined' label='Enter Name' placeholder='Name' required />
              </div>
              <div>
                <TextField value={email} type='email' onChange={(e) => setEmail(
                  e.target.value
                )}
                  sx={{mt:2}} variant='outlined'
                  label='Enter Email' placeholder='Email' required />
              </div>
              <div>
                <Button fullWidth sx={{ mt: 2 }} type='submit' variant='contained' color='primary'>
                  submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

      </Grid>
    </Grid>
  )
}

export default AddStudent