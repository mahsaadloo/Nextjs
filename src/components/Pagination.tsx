import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

const pageSize = 20

export default function PaginationApp() {
    const [paginatioon, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    })
    return(
        <Stack spacing={1} my={2} justifyItems="center">
          <Pagination
            count={10}
            variant="outlined"
          />
        </Stack>
    )
}