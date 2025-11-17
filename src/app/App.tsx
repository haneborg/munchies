import { useState } from "react";
import HomePage from "../pages/Home/HomePage";
import WebPage from "../pages/Web/WebPage";
import './App.css';

function App() {
  const [page, setPage] = useState<"home" | "web" | "app">("home");

  if (page === "web") return <WebPage />;

  return (
    <HomePage
      onWebClick={() => setPage("web")}
      onAppClick={() => setPage("app")}
    />
  );
}


export default App;
