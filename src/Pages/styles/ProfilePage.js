const topSpace = { height: 100 }
const experienceText = { fontSize: 22, textAlign: "center" }
const workItemsContainer = { paddingLeft: 20, paddingRight: 20, marginBottom: 60 }
const workItemRowStyle = { position: "relative" }
const jobText = { fontWeight: 600 }
const jobPeriod = { color: "rgba(0,0,0,0.6)" }
const jobDesc = {
    paddingRight: 10,
    fontSize: 15,
    fontWeight: 300,
    marginBottom: 10
}
const mobileJobExtraSpace = { height: 50 }
const notLastWorkItemStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 120 / 2,
    width: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: -1
}
const skillSetCardStyle = {
    height: 300,
    boxShadow: "1px 4px 8px rgba(0, 0, 0, 0.1)"
}
const skillTopStyle = {
    position: "absolute",
    width: "100%",
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)"
}
const skillTopTitle = {
    color: "#fff",
    position: "absolute",
    textAlign: "center",
    width: "100%",
    top: "40%",
    fontSize: 22
}

const skillBottomStyle = {
    display: "flex",
    flexDirection: "column",
    fontSize: 15,
    alignItems: "center",
    lineHeight: "30px",
    paddingTop: 20
}

const skillOverviewText = { fontSize: 22, textAlign: "center" }

const styles = {
    topSpace,
    experienceText,
    workItemsContainer,
    workItemRowStyle,
    jobText,
    jobPeriod,
    jobDesc,
    mobileJobExtraSpace,
    notLastWorkItemStyle,
    skillSetCardStyle,
    skillTopStyle,
    skillTopTitle,
    skillBottomStyle,
    skillOverviewText
}

export default styles