import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/pages/Home/Home";

function App() {
  const route = [
    {
      id: 1,
      path: "/",
      element: <Home />,
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
