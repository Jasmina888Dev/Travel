import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Culture from "./components/pages/Culture/Culture";
import Games from "./components/pages/Culture/Games/Games";
import Clothes from "./components/pages/Culture/Clothes/Clothes";
import Admin from "./components/pages/Admin/Admin";
import Logwelcome from "./components/pages/Admin/Logwelcome";
import Logforgot from "./components/pages/Admin/Logforgot";
import Fourcode from "./components/pages/Admin/Fourcode";
import Routess from "./components/pages/Routes/Routes";
import Hand from "./components/pages/Culture/Hand/Hand";
import Currency from "./components/pages/Culture/Currency/Currency";
import Instrument from "./components/pages/Culture/Instruments/instruments";
import Kitchen from "./components/pages/Culture/Kitchen/kitchen";
import Gallery from "./components/pages/Gallery/Gallery";
import Chui from "./components/pages/Regions/chui/chui";
import Kyl from "./components/pages/Regions/kyl/kyl";
import Jalal from "./components/pages/Regions/jalalAbad/jalal";
import Osh from "./components/pages/Regions/osh/osh";
import Naryn from "./components/pages/Regions/naryn/naryn";
import Talas from "./components/pages/Regions/talas/talas";
import Batken from "./components/pages/Regions/batken/batken";
import Detail from "./components/pages/detail/detail";

function App() {
  const route = [
    {
      id: 1,
      path: "/",
      element: <Home />,
    },
    {
      id: 2,
      path: "/culture",
      element: <Culture />,
    },
    {
      id: 3,
      path: "/games",
      element: <Games />,
    },
    {
      id: 4,
      path: "/clothes",
      element: <Clothes />,
    },
    {
      id: 5,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 6,
      path: "/login",
      element: <Logwelcome />,
    },
    {
      id: 7,
      path: "/logpassword",
      element: <Logforgot />,
    },
    {
      id: 8,
      path: "/fourcode",
      element: <Fourcode />,
    },
    {
      id: 9,
      path: "/routes",
      element: <Routess />,
    },
    {
      id: 10,
      path: "/hand",
      element: <Hand />,
    },
    {
      id: 11,
      path: "/currency",
      element: <Currency />,
    },
    {
      id: 12,
      path: "/instrument",
      element: <Instrument />,
    },
    {
      id: 13,
      path: "/kitchen",
      element: <Kitchen />,
    },
    {
      id: 14,
      path: "/gallery",
      element: <Gallery />,
    },
    {
      id: 15,
      path: "/regions/chui",
      element: <Chui />,
    },
    {
      id: 16,
      path: "/regions/issyk-kul",
      element: <Kyl />,
    },
    {
      id: 17,
      path: "/regions/jalal-abad",
      element: <Jalal />,
    },
    {
      id: 18,
      path: "/regions/osh",
      element: <Osh />,
    },
    {
      id: 19,
      path: "/regions/naryn",
      element: <Naryn />,
    },
    {
      id: 20,
      path: "/regions/talas",
      element: <Talas />,
    },
    {
      id: 21,
      path: "/regions/batken",
      element: <Batken />,
    },
    {
      id: 22,
      path: "/detail/:placeId",
      element: <Detail />,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {route.map((el) => (
          <Route path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
