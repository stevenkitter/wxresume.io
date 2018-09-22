import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  detail: {
    display: "flex",
    padding: "0",
    flexDirection: "column",
    paddingLeft: "25px",
    marginBottom: "30px"
  },
  detailTitle: {
    display: "flex",
    alignItems: "center"
  }
});

class TitleContent extends Component {
  render() {
    const { classes, time, address, status, contents } = this.props;
    const contentItems = contents.map((item, index) => (
      <Typography key={index} variant="body1" style={{ marginTop: "6px" }}>
        {`${index + 1}. ${item}`}
      </Typography>
    ));
    return (
      <div className={classes.detail}>
        <div className={classes.detailTitle}>
          <Grid container>
            <Grid item xs={12} sm={4} md={4}>
              <Typography variant="body2">{time}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography variant="body2">{address}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography variant="body2">{status}</Typography>
            </Grid>
          </Grid>
        </div>
        {contentItems}
      </div>
    );
  }
}

TitleContent.propTypes = {
  classes: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  contents: PropTypes.array.isRequired
};

export default withStyles(styles)(TitleContent);
