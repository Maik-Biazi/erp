import { Box, Button, Paper, TextField, useTheme } from "@mui/material";

export const BarraDeFerramentas: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      <TextField />
      <Button>Novo</Button>
    </Box>
  );
};
