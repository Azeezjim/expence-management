import React, {useRef, useEffect} from 'react'
import Details from "./componenta/Details/Details";
import Main from "./componenta/Main/Main";
import { SpeechState, useSpeechContext } from '@speechly/react-client'



import { Grid } from "@material-ui/core";
import  useStyles  from "./styles";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'


function App() {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);
  // const classes = useStyles();
  return (
    <div>
      <Grid 
        className={classes.grid}
        container spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}  >
          <Details title="Income" style={{ height: "50vh" }} />
        </Grid>
        <Grid ref={main} item xs={12} sm={3}  classNam={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}  className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
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
