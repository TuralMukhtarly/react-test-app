import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background:
      "linear-gradient(90deg, rgba(48,47,77,1) 2%, rgba(185,183,225,1) 87%)",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    background:
      "linear-gradient(90deg, rgba(48,47,77,1) 2%, rgba(185,183,225,1) 87%)",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paginator: {
    justifyContent: "flex-end",
    display: "flex",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  button: {
    display: "flex",
  },
  rootList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "row",
  },
  imageList: {
    width: 1330,
    height: 480,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  field: {
    display: "flex",  
    margin: "5px 0 5px 0",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  avatar: {
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    left: "90%",
  },
  title: {
    textAlign: "center",
    fontFamily: "'Raleway', sans-serif",
  },
  imagesBlock: {
    marginTop: "10px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  rootSearch: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    display: "flex",
    margin: "5px 0 5px 0",
  },
  iconButton: {
    padding: 10,
  },
}));
