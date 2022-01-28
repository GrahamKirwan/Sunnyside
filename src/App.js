import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Tiles from "./components/Tiles";

const theme = {
  colors: {
    white: "hsl(0, 0%, 100%)",
    red: "hsl(7, 99%, 70%)",
    yellow: "hsl(51, 100%, 49%)",
    cyan: "hsl(167, 40%, 24%)",
    blue: "hsl(198, 62%, 26%)",
    blue2: "hsl(212, 27%, 19%)",
    blue3: "hsl(213, 9%, 39%)",
    blue4: "hsl(232, 10%, 55%)",
    blue5: "hsl(210, 4%, 67%)",
    footer: "hsl(168, 34%, 41%)",
  },
  mobile: "768px",
  mobileNum: 768,
};

const infoData = [
  {
    id: 1,
    title: "Transform your brand",
    para: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    color: theme.colors.yellow,
    image: 'url("../assets/desktop/image-transform.jpg")',
    imageMobile: 'url("../assets/mobile/image-transform.jpg")'
  },
  {
    id: 2,
    title: "Stand out to the right audience",
    para: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    color: theme.colors.red,
    image: 'url("../assets/desktop/image-stand-out.jpg")',
    imageMobile: 'url("../assets/mobile/image-stand-out.jpg")'
  }
];

const infoData2 = [
  {
    title: "Graphic Design",
    para: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    image: 'url("../assets/desktop/image-graphic-design.jpg")',
    imageMobile: 'url("../assets/mobile/image-graphic-design.jpg")'
  },
  {
    title: "Photography",
    para: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    image: 'url("../assets/desktop/image-photography.jpg")',
    imageMobile: 'url("../assets/mobile/image-photography.jpg")'
  },
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {infoData.map((mapping, index) => (
        <InfoSection key={index} data={mapping} theme={theme}/>
      ))}
      <Tiles data={infoData2}/>
    </ThemeProvider>
  );
}

export default App;
