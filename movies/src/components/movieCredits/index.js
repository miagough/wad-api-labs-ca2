import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default function MovieCredits({ movie }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCredits(movie.id).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="credits table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell align="center">Charactert</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map((c) => (
            <TableRow key={c.id}>
              <TableCell component="th" scope="row">
                {c.name}
              </TableCell>
              <TableCell >{excerpt(c.character)}</TableCell>
              <TableCell >
              <Link
                  to={`/credits/${c.id}`}
                  state={{
                      credit: c,
                      movie: movie,
                  }}
                >
                  Full Credits
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}