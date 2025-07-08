import React from "react";
import AppRouter from "./router/AppRouter";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

export default App;
