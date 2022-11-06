import { Box, Button, TextField } from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import CancelIcon from "@mui/icons-material/Cancel";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import React, { ChangeEvent, useState } from "react";
import { useContext } from "react";
import { EntriesContext } from "../../context/entries/EntriesContext";
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {
  
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const {isAddingEntry,setIsAddiongEntry}= useContext(UIContext)

  const { addNewEntry } = useContext(EntriesContext);

  const onTextFielChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAddiongEntry(false);
    setIsTouched(false);
    setInputValue("");
  };

  return (
    <>
      <Box
        sx={{
          marginBottom: 2,
          paddingX: 2,
        }}
      >
        {isAddingEntry ? (
          <>
            <TextField
              fullWidth
              placeholder="Nueva Entrada"
              autoFocus
              multiline
              label="Nueva entarada"
              helperText={
                inputValue.length <= 0 && isTouched && "Ingrese un valor"
              }
              error={inputValue.length <= 0 && isTouched}
              value={inputValue}
              onChange={onTextFielChanged}
              onBlur={() => setIsTouched(true)}
            />

            <Box
              display="flex"
              justifyContent="space-between"
              sx={{
                marginTop: 1,
              }}
            >
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<SaveAsIcon />}
                onClick={onSave}
              >
                Guardar
              </Button>
              <Button
                variant="outlined"
                color="error"
                endIcon={<CancelIcon />}
                onClick={() => setIsAddiongEntry(false)}
              >
                cancelar
              </Button>
            </Box>
          </>
        ) : (
          <Button
            startIcon={<LibraryAddIcon />}
            variant="outlined"
            fullWidth
            onClick={() => setIsAddiongEntry(true)}
            sx={{
              marginTop: 1,
            }}
          >
            Agregar Tarea
          </Button>
        )}
      </Box>
    </>
  );
};
