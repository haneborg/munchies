import HomePage from "../pages/HomePage/HomePage";
import './App.css';
import { isMobileView } from "../util/util";
import IntroPage from "../pages/IntroPage/IntroPage";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const breakpoint = 480;
  const isMobile = isMobileView(breakpoint);

  const [continuePressed, setContinuePressed] = React.useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      {(isMobile && !continuePressed) ? <IntroPage setContinuePressed={setContinuePressed} /> : <HomePage isMobile={isMobile} />}
    </QueryClientProvider>
  );
}

export default App;