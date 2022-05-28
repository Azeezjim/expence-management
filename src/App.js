import Details from "./componenta/Details/Details";
import Main from "./componenta/Main/Main";


import { Grid } from "@material-ui/core";
import  useStyles  from "./styles";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'


function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid 
        className={classes.grid}
        container spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={2} >
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} >
          <Main />
        </Grid>
        {/* <Grid item xs={12} sm={4} >
          <Details title="Income" />
        </Grid> */}
        <Grid item xs={12} sm={2} >
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
