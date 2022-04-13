import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { ThemeSettingContext } from "./common/contexts/ThemeSettingContext";

function App() {
  const { onChangeThemeMode } = useContext(ThemeSettingContext);
  return (
    <Box>
      <Button onClick={onChangeThemeMode}>Hello</Button>
    </Box>
  );
}

export default App;
