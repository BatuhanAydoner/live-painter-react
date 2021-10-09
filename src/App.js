import { useContext, useState } from "react";
import "./App.css";
import SelectionCard from "./components/SelectionCard";
import { Grid } from "@mui/material";
import SelectionList from "./components/SelectionList";
import LivePainterContext from "./contex/LivePainterContext";

function App() {
  const context = useContext(LivePainterContext);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={2}>
        <SelectionList />
      </Grid>
      <Grid item xs={12} sm={12} md={10}>
        <canvas
          width={context.state.field.width}
          height={context.state.field.height}
          style={{
            background: context.state.background,
            border: "1px solid black",
          }}
        ></canvas>
      </Grid>
    </Grid>
  );
}

export default App;
