"use client";
import * as React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  Pagination,
} from "@mui/material";
import { useTranslations } from "next-intl";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { onDeleteTodo, onUpdateTodos } from "@/redux/todoSlice";
import axios from "axios";

export default function Index() {
  const dispatch = useDispatch();
  const t = useTranslations("Index");

  const { push } = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const itemsPerPage = 10;

  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(onDeleteTodo(id));
  };

  React.useEffect(() => {
    const fetchTotalItems = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        dispatch(onUpdateTodos(response.data));
        const totalItems = response.data.length;
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      } catch (error) {
        console.error("Error fetching total items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTotalItems();
  }, [dispatch]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${itemsPerPage}`
        );
        dispatch(onUpdateTodos(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, dispatch]);

  const handlePageChange = (_event: any, value: number) => {
    setPage(value);
  };

  return (
    <Container>
      {isLoading ? " Loading ... " : null}
      <Stack spacing={1}>
        {todos.map((todo) => (
          <Paper key={todo.id} variant="outlined" sx={{ mx: 10, p: 5 }}>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Box>
                <Typography textAlign="center">{todo.title}</Typography>
              </Box>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{ style: { width: "20ch" } }}
              >
                <MenuItem onClick={handleClose}>
                  <Button onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </Button>
                </MenuItem>
              </Menu>
            </Stack>
            <Stack justifyContent="end" direction="row">
              <Button
                variant="outlined"
                size="small"
                sx={{ marginTop: 2, textTransform: "lowercase" }}
                onClick={() => push(`/en/todo/${todo.id}`)}
              >
                Details
              </Button>
            </Stack>
          </Paper>
        ))}
      </Stack>
      <Stack justifyContent="center" my-3>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </Container>
  );
}
