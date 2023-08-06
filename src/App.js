import React from "react";
import Header from "./component/Header";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./component/FeedbackList";

import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./component/pages/AboutPage";
import {FeedbackProvider}  from "./context/FeedbackContext";
import AboutIconLink from "./component/AboutIconLink";



function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />}>
              this is the about route
            </Route>
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
