"use client";

import * as React from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import Input from "@mui/material/TextField";
import Link from "next/link";

import styles from "./list.module.css";
import FancyHR from "../fancy-hr/fancy-hr";

interface ListProps {
  title?: string;
  search?: boolean;
  dense?: boolean;
  func?: React.ReactNode[];
  columns: string[];
  rows: any[][];
  pagination?: number[];
  count?: number;
  onclick?: (row: any, key: number) => void;
}

const list: React.FC<ListProps> = ({
  title = "",
  search = false,
  dense = false,
  func = [],
  columns,
  rows,
  pagination = [10, 25, 50],
  onclick = (r: any, k: number) => {
    r.preventDefault();
  },
}) => {
  const [searchText, setSearchText] = React.useState("");
  const [searchAttribute, setSearchAttribute] = React.useState(0);

  const [density, setDensity] = React.useState(false);
  const [tableSize, setTableSize] = React.useState<"small" | "medium">(
    "medium"
  );

  const [currentPage, setCurrentPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pagination[0]);

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchText(event.target.value);
  };

  const handleSearchAttribute = (event: any, child: any) => {
    setSearchAttribute(child.props["data-index"]);
    console.log(child.props["data-index"]);
  };

  const handleHrefClick = (
    row: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!(row.ctrlKey || row.metaKey)) {
      row.preventDefault();
    }
  };

  const handleChangeDense = () => {
    if (density) {
      setDensity(false);
      setTableSize("medium");
    } else {
      setDensity(true);
      setTableSize("small");
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setCurrentPage(0);
  };

  return (
    <div className={styles.list_container}>
      <div className={styles.list_header_container}>
        <div className={styles.list_header_left_side}>
          {/* Rendering the title*/}
          {title == "" ? null : <Typography variant="h4">{title}</Typography>}
          <FancyHR vertical ballsize="0px" length="80%" thickness="1px" />
          {search ? (
            /* Rendering the search box*/
            <div className={styles.search_component}>
              <Input
                label="Search"
                variant="outlined"
                onChange={(e) => handleSearch(e)}
                sx={{
                  "& fieldset": {
                    borderInlineEnd: "none",
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                  },
                }}
              ></Input>
              {/* Rendering the attribute box*/}
              <FormControl>
                <Select
                  value={searchAttribute}
                  onChange={(event, child) =>
                    handleSearchAttribute(event, child)
                  }
                  autoWidth
                  sx={{
                    "& fieldset": {
                      borderInlineStart: "none",
                      borderStartStartRadius: 0,
                      borderEndStartRadius: 0,
                    },
                  }}
                >
                  {columns.map((value, index) => (
                    <MenuItem value={index} data-index={index}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          ) : null}
        </div>

        {/* Rendering all custom components for actions*/}
        <div className={styles.list_header_right_side}>
          {func?.map((component, index) => (
            <div key={index}>{component}</div>
          ))}
        </div>
      </div>
      {/* Rendering the table*/}
      <TableContainer className={styles.scrollableContainer}>
        <Table stickyHeader aria-label="sticky table" size={tableSize}>
          {/* Rendering the header columns*/}
          <TableHead>
            <TableRow>
              {columns.map((columnName, index) => (
                <TableCell key={index} align="left">
                  {columnName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* Rendering the rows*/}
          <TableBody>
            {rows
              .filter((row) =>
                row[searchAttribute]
                  .toString()
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
              .slice(
                currentPage * rowsPerPage,
                currentPage * rowsPerPage + rowsPerPage
              )
              .map((row, rowIndex) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={rowIndex}
                  component={Link}
                  href={window.location.href + "/" + rowIndex.toString()}
                  sx={{ textDecoration: "none" }}
                  onClick={(event) => handleHrefClick(event)}
                  onDoubleClick={(event) => onclick(event, rowIndex)}
                >
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex} align="left">
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.paginationContainer}>
        {dense ? (
          <FormControlLabel
            control={<Switch checked={density} />}
            label="Dense padding"
            onChange={handleChangeDense}
          />
        ) : (
          <div />
        )}
        <TablePagination
          rowsPerPageOptions={pagination}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={currentPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ borderTop: "none", overflow: "hidden" }}
        ></TablePagination>
      </div>
    </div>
  );
};

export default list;
