import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Resume from "./components/Resume";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#475FCD" }, // Purple and green play nicely together.
    secondary: { main: "#d500f9" } // This is just green.A700 as hex.
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          <Router>
            <React.Fragment>
              <MuiThemeProvider theme={theme}>
                <Route path="/" component={Resume} />
              </MuiThemeProvider>
            </React.Fragment>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
