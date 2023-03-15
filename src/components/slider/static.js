import Slide1 from "../../content/png/slide1.png";
import Slide2 from "../../content/png/slide2.png";
import Slide3 from "../../content/png/slide3.png";
import Slide4 from "../../content/png/slide4.jpg";
import Amazon from "../../content/png/amazon.png";
import Maersk from "../../content/png/maersk.png";
import Twillio from "../../content/png/twillio.png";
import Domino from "../../content/png/domino.png";
import AmazonColor from "../../content/brands/amazon.svg";
import MaerskColor from "../../content/brands/maersk.svg";
import TwilioColor from "../../content/brands/twilio.svg";
import DominosColor from "../../content/brands/dominos.svg";
import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },

    red: {
      main: "#e60000",
      contrastText: "#fff",
    },
    yellow: {
      main: "#FF9900",
      contrastText: "#000",
    },
  },
});

export const slides = [
  {
    image: Slide4,
    content: "See how Dominos simplified online payments with stripe",
    logo: Domino,
    width: "150px",
    logoColor: DominosColor,
    progressBarColor: "primary",
    backgroundLayer:
      "linear-gradient(180deg, rgba(58,126,233,0) 0%, rgba(13,134,157,1) 100%)",
  },

  {
    image: Slide1,
    content: "See how amazon simplified cross-border payments with stripe",
    logo: Amazon,
    width: "100px",
    logoColor: AmazonColor,
    progressBarColor: "yellow",
    backgroundLayer:
      "linear-gradient(180deg, rgba(233,172,58,0.23573179271708689) 0%, rgba(157,107,13,1) 100%)",
  },
  {
    image: Slide2,
    content:
      "See how Maersk tapped into new technology to make it easiir to ship around the world",
    logo: Maersk,
    width: "150px",
    logoColor: MaerskColor,
    progressBarColor: "primary",
    backgroundLayer:
      "linear-gradient(180deg, rgba(58,126,233,0) 0%, rgba(13,134,157,1) 100%)",
  },
  {
    image: Slide3,
    content: "See how Twilio increased authorization rates by 10% with stripe",
    logo: Twillio,
    width: "100px",
    logoColor: TwilioColor,
    progressBarColor: "red",
    backgroundLayer:
      "linear-gradient(180deg, rgba(233,58,58,0.10407913165266103) 0%, rgba(157,13,13,1) 100%)",
  },
];
