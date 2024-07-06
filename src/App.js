import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUniversities, deleteLast, addFirstToLast } from './redux/universitiesSlice';
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';

function App() {
  const dispatch = useDispatch();
  const universities = useSelector((state) => state.universities.universities);
  const status = useSelector((state) => state.universities.status);
  const error = useSelector((state) => state.universities.error);
  const { enqueueSnackbar } = useSnackbar();

  console.log(universities)

  const handleAdd = () => {
    if (universities.length > 0) {
      dispatch(addFirstToLast());
    } else {
      enqueueSnackbar('Cannot add university. The list is empty.', { variant: 'error' });
    }
  };

  return (
    <Container>
      <h1>University List</h1>
      <div>
        <Button variant="contained" onClick={() => dispatch(fetchUniversities())}>
          LOAD
        </Button>
        <Button variant="contained" onClick={() => dispatch(deleteLast())}>
          DELETE
        </Button>
        <Button variant="contained" onClick={handleAdd}>
          ADD
        </Button>
      </div>
      {status === 'loading' && <CircularProgress />}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (<TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Domains</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {universities.map((university, index) => (
              <TableRow key={index}>
                <TableCell>{university.name}</TableCell>
                <TableCell>{university.country}</TableCell>
                <TableCell>{university["state-province"]}</TableCell>
                <TableCell>
                {university.web_pages.map((webpage, index) => (
                  <>
                    <a href={webpage} target="_blank" rel="noopener noreferrer">
                    {webpage}
                    </a>
                    <br></br>
                  </>
                ))}
                </TableCell>
                <TableCell>{university.domains.map((webpage, _) => (
                  <>
                    {webpage}
                    <br></br>
                  </>
                ))}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
      
    </Container>
  );
}

const AppWrapper = () => (
  <SnackbarProvider maxSnack={3}>
    <App />
  </SnackbarProvider>
);

export default AppWrapper;