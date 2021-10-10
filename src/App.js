import "./App.css";
import { Grid } from "@mui/material";
import SelectionList from "./components/SelectionList";
import CanvasField from "./components/CanvasField";
import Button from "./customUI/Button";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={2}>
        <Button title="Live" color="warning" onClick={() => {}} />
        <Button title="Join" color="primary" onClick={() => {}} />
        <SelectionList />
      </Grid>
      <Grid item xs={12} sm={12} md={10}>
        <CanvasField />
        <CanvasField reDraw={true} />
      </Grid>
    </Grid>
  );
}

export default App;
