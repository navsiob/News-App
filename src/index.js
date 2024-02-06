import ReactDOM from "react-dom/client";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="insight"
                pageSize={6}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/home"
            element={
              <News key="home" pageSize={6} country="in" category="General" />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={6}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={6}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                key="general"
                pageSize={6}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={6} country="in" category="Health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={6}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={6}
                country="in"
                category="Technology"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize={6} country="in" category="Sports" />
            }
          />
        </Routes>
      </div>
    </Main>
  </React.StrictMode>
);
