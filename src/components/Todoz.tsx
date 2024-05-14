"use client";
import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { onDeleteTodo } from "@/redux/todoSlice";
import { useDispatch } from "react-redux";

interface todozProps {
  id: number;
  title: string;
}

interface Props {
  todoz: todozProps[];
}

const Todoz = ({ todoz }: Props) => {
  const dispatch = useDispatch();
  const t = useTranslations("Index");
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(onDeleteTodo(id));
  };
  return (
    <>
      <Box>
        {/* todo list
  input */}
        <Box>
          {todoz.map((todo) => {
            return (
              <Paper key={todo.id} variant="outlined" sx={{ mx: 10, p: 5 }}>
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography textAlign="center"> {todo.title} </Typography>
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
                    PaperProps={{
                      style: {
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Button
                        onClick={() => {
                          handleDeleteTodo(todo.id);
                        }}
                      >
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
                    onClick={() => {
                      push(`/en/todo/${todo.id}`);
                    }}
                  >
                    Details
                  </Button>
                </Stack>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Todoz;
