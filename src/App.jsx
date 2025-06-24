import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

function App() {
  const route = [
    {
      id: 1,
      path: "/",
      element: "",
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
