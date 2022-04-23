import Details from "./componenta/Details/Details";

import { Grid } from "@material-ui/core";

function App() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        align="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details />
        </Grid>

        <Grid item xs={12} sm={4}>
          Main
        </Grid>

        <Grid item xs={12} sm={4}>
          <Details />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
