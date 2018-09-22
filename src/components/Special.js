import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis } from "recharts";

const styles = theme => ({
  root: { position: "relative" },
  items: {
    position: "relative",
    display: "block",
    margin: "0 auto",
    [theme.breakpoints.down(1000)]: {
      width: "320px"
    }
  }
});

class Special extends Component {
  render() {
    const { classes } = this.props;
    const data = [
      { subject: "团队协作", A: 120, fullMark: 150 },
      { subject: "JavaScript", A: 120, fullMark: 150 },
      { subject: "Swift", A: 145, fullMark: 150 },
      { subject: "Golang", A: 100, fullMark: 150 },
      { subject: "React", A: 110, fullMark: 150 },
      { subject: "Docker", A: 90, fullMark: 150 },
      { subject: "小程序", A: 100, fullMark: 150 }
    ];
    return (
      <div className={classes.root}>
        <div className={classes.items}>
          <RadarChart outerRadius={90} width={320} height={320} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              name="技能熟练度"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </div>
      </div>
    );
  }
}

Special.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Special);
