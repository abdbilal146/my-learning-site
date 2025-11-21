import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <StrictMode>
      <QueryClientProvider client={querClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
    ,
  </MantineProvider>
);
