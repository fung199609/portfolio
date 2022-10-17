const startAnimationTypeContainer = {
    width: "100%",
    textAlign: "center",
    fontFamily: "monospace",
    color: "#ffffff",
    fontSize: 25,
    height: window.innerHeight,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
    zIndex: 999
}

const animationBgContainer = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000000",
    transition: "visibility 0s 1s, opacity 1s linear",
}

const bottomContactContainer = {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgb(245,245,245)",
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: "center",
}

const contactName = { fontSize: 25, marginBottom: 20 }

const contactDesc = {
    marginBottom: 20,
    lineHeight: "30px",
    fontWeight: 300,
    fontSize: "16px",
    color: "#555",
}

const contactThreeIconRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
}

const leftcontactIcon = { marginRight: 30, cursor: "pointer" }

const middleContactIcon = { cursor: "pointer" }

const rightcontactIcon = { marginLeft: 30, cursor: "pointer" }

const styles = {
    startAnimationTypeContainer,
    animationBgContainer,
    bottomContactContainer,
    contactName,
    contactDesc,
    contactThreeIconRow,
    leftcontactIcon,
    middleContactIcon,
    rightcontactIcon
}

export default styles