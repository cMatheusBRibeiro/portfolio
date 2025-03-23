"use client";

import "./globals.css";
import AppWrapper from "./AppWrapper";
import { Provider } from "react-redux";
import store from "@/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio - Matheus Braga Ribeiro</title>
        <meta
          name="description"
          content="This website is Matheus Braga Ribeiro portfolio. In this, you will see more about his."
        />
      </head>
      <Provider store={store}>
        <AppWrapper>{children}</AppWrapper>
      </Provider>
    </html>
  );
}
