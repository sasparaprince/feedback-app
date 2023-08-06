import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Header from "./component/Header";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./component/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./component/pages/AboutPage";
import {FeedbackProvider}  from "./context/FeedbackContext";
import AboutIconLink from "./component/AboutIconLink";



function App() {
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

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
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback}
                  />
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
