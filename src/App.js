import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUniversities, deleteLast, addFirstToLast } from './redux/universitiesSlice';
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';

function App() {
  const dispatch = useDispatch();
  const universities = useSelector((state) => state.universities.universities);
  const status = useSelector((state) => state.universities.status);
  const error = useSelector((state) => state.universities.error);

  console.log(universities)
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
        <Button variant="contained" onClick={() => dispatch(addFirstToLast())}>
          ADD
        </Button>
      </div>
      <TableContainer>
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
                  <a href={university.web_pages[0]}>
                    {university.web_pages[0]}
                  </a>
                </TableCell>
                <TableCell>{university.domains[0]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Container>
  );
}

export default App;
