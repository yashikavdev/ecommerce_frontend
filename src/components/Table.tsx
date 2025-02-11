
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Stack, Typography, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { addToCartAPI } from "@/utils/addToCart";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    border: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FAFCFE",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function ProductTable({ products }: any) {
  const [budget, setBudget] = React.useState<number | "">("");

  const sortedProducts = [...products].sort(
    (a, b) => b.price - a.price || b.weight - a.weight
  );

  let filteredProducts: any[] = [];

  if (budget !== "") {
    const exactMatch = sortedProducts.find((product) => product.price === budget);

    if (exactMatch) {
      filteredProducts = [exactMatch]; 
    } else {
      let total = 0;
      const heaviestProduct = sortedProducts.find((product) => product.price <= budget);

      if (heaviestProduct) {
        filteredProducts.push(heaviestProduct);
        total += heaviestProduct.price;
      }

      for (const product of sortedProducts) {
        if (!filteredProducts.includes(product) && total + product.price <= budget) {
          filteredProducts.push(product);
          total += product.price;
        }
      }
    }
  } else {
    filteredProducts = sortedProducts; 
  }

  const handleAddToCart = (row: any) => {
    addToCartAPI(row.id)
    toast("Item added to cart");
  };

  return (
    <>
      <Stack className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto mb-5">
        <Stack className="!flex-row items-center justify-between pb-6">
          <Typography className="!text-base !font-semibold">
            Showing products for budget ₹{budget || "All"}
          </Typography>
          <TextField
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value ? parseFloat(e.target.value) : "")}
            placeholder="Enter Budget"
            size="small"
            variant="outlined"
            className="w-40 !ml-auto"
          />
        </Stack>

        <Stack className="border rounded-lg bg-gray-200">
          {filteredProducts.length > 0 ? (
            <>
              <TableContainer className="border-lg !rounded-t-lg">
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell className="!bg-gray-200 !font-semibold whitespace-nowrap">
                        Product Id
                      </StyledTableCell>
                      <StyledTableCell align="left" className="!bg-gray-200 !font-semibold whitespace-nowrap">
                        Name
                      </StyledTableCell>
                      <StyledTableCell align="left" className="!bg-gray-200 !font-semibold whitespace-nowrap ">
                        Price
                      </StyledTableCell>
                      <StyledTableCell align="left" className="!bg-gray-200 !font-semibold whitespace-nowrap">
                        Add to Cart
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredProducts.map((row) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell align="left" className="!text-sm !font-medium !border-b-0">
                          {row.id}
                        </StyledTableCell>
                        <StyledTableCell align="left" className="!text-sm !font-medium !border-b-0">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="left" className="!text-sm !font-medium !border-b-0">
                          {row.price}
                        </StyledTableCell>
                        <StyledTableCell align="left" className="!border-b-0">
                          <Button
                            variant="outlined"
                            color="primary"
                            className="!text-sm !font-medium !rounded-md !capitalize !py-2.5 !min-w-36"
                            onClick={() => handleAddToCart(row)}
                          >
                            Add to Cart
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <Typography className="text-center py-6 text-adminTextColor/60">
              No products found within the budget.
            </Typography>
          )}
        </Stack>
      </Stack>
    </>
  );
}
