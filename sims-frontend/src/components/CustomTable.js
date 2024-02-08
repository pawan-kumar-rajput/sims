import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  Button
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, fetchStudents} from '../store/slices/studentSlice';
import { useNavigate } from 'react-router-dom';


const CustomTable = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const students = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(fetchStudents());
  },[dispatch]);
  const clabel = ['_id', 'name', 'email'];
  return (
    <>
      <TableContainer component={Paper} sx={{ width: 'fit-content' }}>
        <Table sx={{ width: '80vw' }}>
          <TableHead>
            <TableRow>
              {
                clabel.map((label) =>
                  <TableCell>
                    <Typography variant='h5'>
                      {label}
                    </Typography>
                  </TableCell>
                )
              }

              <TableCell>
                <Typography variant='h5'>
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((data) => (
              <TableRow
                key={students._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {
                  clabel.map((label) =>
                    <TableCell>{data[label]}</TableCell>
                  )
                }

                <TableCell>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ marginRight: '5px' }}>
                      <Button onClick={()=>navigate('/update/'+data._id)} variant='contained' color='warning'>Update</Button>
                    </div>
                    <Button variant='contained' color='error' onClick={()=>dispatch(deleteStudent(data._id))}>Delete</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default CustomTable