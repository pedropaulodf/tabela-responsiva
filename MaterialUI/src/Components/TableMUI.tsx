import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table" className="responsiveTable">
        <TableHead>
          <TableRow>
            <TableCell scope="col">Dessert (100g serving)</TableCell>
            <TableCell scope="col" align="right">Calories</TableCell>
            <TableCell scope="col" align="right">Fat&nbsp;(g)</TableCell>
            <TableCell scope="col" align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell scope="col" align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell data-label="Dessert (100g serving):" scope="row">{row.name}</TableCell>
              <TableCell data-label="Calories:" align="right">{row.calories}</TableCell>
              <TableCell data-label="Fat&nbsp;(g):" align="right">{row.fat}</TableCell>
              <TableCell data-label="Carbs&nbsp;(g):" align="right">{row.carbs}</TableCell>
              <TableCell data-label="Protein&nbsp;(g):" align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
