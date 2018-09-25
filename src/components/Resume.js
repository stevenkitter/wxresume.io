import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import HeadBg from "../assets/head_bg.png";
import AvatarBg from "../assets/avatar.jpg";
import Typography from "@material-ui/core/Typography";
import { PieChart, Pie, Cell } from "recharts";
import TitleContent from "./TitleContent";
import Special from "./Special";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const pageWidth = 1000;

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  paper: {
    [theme.breakpoints.up(pageWidth)]: {
      maxWidth: `${pageWidth}px`,
      margin: "20px auto"
    },
    display: "block",
    width: "90%",
    margin: "20px auto"
  },
  header: {
    position: "relative"
  },
  headerImage: {
    maxWidth: "100%",
    paddingBottom: "18%",
    backgroundImage: `url(${HeadBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    [theme.breakpoints.down(pageWidth)]: {
      height: "150px"
    }
  },
  avatar: {
    position: "absolute",
    right: "40px",
    top: "40px",
    width: "130px",
    height: "173px",
    backgroundImage: `url(${AvatarBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    border: "4px solid #e5e5e5",
    [theme.breakpoints.down(pageWidth)]: {
      position: "relative",
      margin: "0 auto",
      right: "0px",
      top: "-20px"
    }
  },
  name: {
    position: "absolute",
    top: "30px",
    left: "40px",
    color: theme.palette.common.white
  },
  headerContent: {
    margin: "10px 40px 30px 40px",
    borderBottom: "1px dashed #cfcfcf",
    paddingBottom: "70px",
    [theme.breakpoints.down(pageWidth)]: {
      paddingBottom: "20px",
      textAlign: "center"
    }
  },
  content: {
    margin: "30px 40px 40px",
    borderLeft: `1px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down(pageWidth)]: {
      marginLeft: "20px"
    }
  },
  purpose: {
    marginBottom: "40px"
  },
  itemHead: {
    position: "relative",
    color: theme.palette.primary.main,
    marginLeft: "-15px",
    display: "flex",
    alignItems: "center"
  },
  detail: {
    display: "flex",
    padding: "0",
    flexDirection: "column",
    paddingLeft: "25px"
  },
  detailTitle: {
    display: "flex",
    alignItems: "center"
  },
  like: {
    [theme.breakpoints.down(1000)]: {
      width: "320px"
    },
    margin: "0 auto"
  }
});

const data02 = [
  { name: "音乐", value: 80 },
  { name: "阅读", value: 70 },
  { name: "健身", value: 90 },
  { name: "烹饪", value: 90 }
];

class Resume extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <div className={classes.headerImage} />
            <div className={classes.avatar} />
            <div className={classes.name}>
              <Typography
                variant="display1"
                color="inherit"
                style={{ marginBottom: "none", fontWeight: "500" }}
              >
                王旭
              </Typography>
              <Typography
                variant="subheading"
                color="inherit"
                style={{ marginBottom: "none", fontWeight: "800" }}
              >
                互联网5年开发经验，静心前行
              </Typography>
            </div>
            <div className={classes.headerContent}>
              <Typography
                variant="subheading"
                color="inherit"
                style={{ marginBottom: "none" }}
              >
                28岁 | 5年经验 | 18762389869 | 670294086@qq.com
              </Typography>
            </div>
          </div>
          <div className={classes.content}>
            <div className={classes.purpose}>
              <div className={classes.itemHead}>
                <i
                  className="iconfont"
                  style={{
                    height: "100%",
                    backgroundColor: "white"
                  }}
                >
                  &#xe600;
                </i>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{
                    marginBottom: "none",
                    marginLeft: "10px",
                    fontWeight: "500"
                  }}
                >
                  求职意向
                </Typography>
              </div>
              <div className={classes.detail}>
                <div className={classes.detailTitle}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className={classes.detailTitle}
                    >
                      <i className="iconfont" style={{ fontSize: "25px" }}>
                        &#xe60d;
                      </i>
                      <Typography variant="body2">前端开发</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className={classes.detailTitle}
                    >
                      <i className="iconfont" style={{ fontSize: "25px" }}>
                        &#xe7fc;
                      </i>
                      <Typography variant="body2">江苏盐城</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className={classes.detailTitle}
                    >
                      <i className="iconfont" style={{ fontSize: "25px" }}>
                        &#xe632;
                      </i>
                      <Typography variant="body2">8k-15k</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className={classes.detailTitle}
                    >
                      <i className="iconfont" style={{ fontSize: "25px" }}>
                        &#xe6ce;
                      </i>
                      <Typography variant="body2">1个月内到岗</Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div className={classes.purpose}>
              <div className={classes.itemHead}>
                <i
                  className="iconfont"
                  style={{
                    height: "100%",
                    backgroundColor: "white"
                  }}
                >
                  &#xe617;
                </i>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{
                    marginBottom: "none",
                    marginLeft: "10px",
                    fontWeight: "500"
                  }}
                >
                  教育背景
                </Typography>
              </div>
              <TitleContent
                time="2008.9-2015.9"
                address="江苏科技大学"
                status="电子与通信"
                contents={[
                  "大学本科硕士连读，本科期间获取多次奖学金。研究生期间作为班长获取过优秀学生干部称号。"
                ]}
              />
            </div>
            <div className={classes.purpose}>
              <div className={classes.itemHead}>
                <i
                  className="iconfont"
                  style={{
                    height: "100%",
                    backgroundColor: "white"
                  }}
                >
                  &#xe617;
                </i>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{
                    marginBottom: "none",
                    marginLeft: "10px",
                    fontWeight: "500"
                  }}
                >
                  工作经验
                </Typography>
              </div>
              <TitleContent
                time="2014.6-2015.6"
                address="中国船舶重工集团公司第七二三研究所"
                status="实习生"
                contents={[
                  "在研究所实习，具体任命于研究所导师，处理雷达信号，编写matlab程序，实现雷达波的识别，滤波及其相关实战功能。"
                ]}
              />
              <TitleContent
                time="2015.6-2017.1"
                address="优因科技"
                status="前端和移动端"
                contents={[
                  "负责公司的产品U会的研发工作。实现实时开会，社交，日程等多种功能。项目涉及庞大，功能繁多。与美工和后端一起参与产品设计与部署。"
                ]}
              />
              <TitleContent
                time="2017.1-至今"
                address="华生基因"
                status="iOS工程师"
                contents={[
                  "负责过公司对外产品金琉璃的开发工作，对内产品花生仁的全部研发工作。项目都是从无到有，自主研发，设计多个技术模块。客户基本维持在几千到几万不等。",
                  "参与公司公众号小程序的设计和研发，应用名称为琉璃堂，固定客户10万人以上，有大数据并发场景。"
                ]}
              />
            </div>
            <div className={classes.purpose}>
              <div className={classes.itemHead}>
                <i
                  className="iconfont"
                  style={{
                    height: "100%",
                    backgroundColor: "white"
                  }}
                >
                  &#xe617;
                </i>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{
                    marginBottom: "none",
                    marginLeft: "10px",
                    fontWeight: "500"
                  }}
                >
                  技能特长
                </Typography>
              </div>
              <Special />
            </div>
            <div className={classes.purpose}>
              <div className={classes.itemHead}>
                <i
                  className="iconfont"
                  style={{
                    height: "100%",
                    backgroundColor: "white"
                  }}
                >
                  &#xe617;
                </i>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{
                    marginBottom: "none",
                    marginLeft: "10px",
                    fontWeight: "500"
                  }}
                >
                  自我评价
                </Typography>
              </div>
              <Typography
                variant="body1"
                color="inherit"
                style={{
                  marginBottom: "none",
                  marginLeft: "25px"
                }}
              >
                对互联网保持高度的敏感性和关注度，熟悉产品开发流程，有很强的产品规划、需求分析、交互设计能力，能独立承担APP和WEB项目的管控工作，善于沟通，贴近用户。
                我正在寻找一个更好的发展平台，希望能够充分发挥自己的优势，共同努力成就一番事业。
              </Typography>
            </div>
            <div className={classes.purpose}>
              <div className={classes.itemHead}>
                <i
                  className="iconfont"
                  style={{
                    height: "100%",
                    backgroundColor: "white"
                  }}
                >
                  &#xe617;
                </i>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{
                    marginBottom: "none",
                    marginLeft: "10px",
                    fontWeight: "500"
                  }}
                >
                  兴趣爱好
                </Typography>
              </div>
              <div className={classes.like}>
                <PieChart width={220} height={220}>
                  <Pie
                    dataKey="value"
                    data={data02}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                  >
                    {data02.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </div>
          </div>
          <Typography
            variant="caption"
            color="inherit"
            style={{
              marginBottom: "40px",
              textAlign: "center",
              fontWeight: "500"
            }}
          >
            <span role="img" aria-label="Snowman">
              ©️
            </span>
            版权所有 wx所有 采用react material-ui打造
          </Typography>
        </Paper>
      </div>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${data02[index].name}`}
    </text>
  );
};
