import Navbar from '../components/Navbar'
import CustomTable from '../components/CustomTable'
import {Button, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Student = () => {
    const navigate=useNavigate();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item container>
                    <Navbar/>
                </Grid>
                <Grid item container justifyContent={'center'}>
                    <Button variant='contained' color='primary' onClick={()=>navigate('/add')}>Add Student</Button>
                </Grid>
                <Grid item container justifyContent={'center'}>
                    <CustomTable/>
                </Grid>
            </Grid>
        </>
    )
}

export default Student