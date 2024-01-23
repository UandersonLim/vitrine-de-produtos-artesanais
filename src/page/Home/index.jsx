import { Header } from "../../Components/pages/Home/Header/index.jsx";
import { Component_Footer } from "../../Components/pages/Home/Footer/index.jsx";
import { Component_Main } from "../../Components/pages/Home/Main/index.jsx";
import GifLogo from "../../../public/assets/image/GIF/Logo-GIF.gif"

export const Home = () => {
  return (
    <>
      <Header />
      <Component_Main />
      <Component_Footer gif={GifLogo} />
    </>
  );
};
