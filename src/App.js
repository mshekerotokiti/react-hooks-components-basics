import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Article>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</Article>
      <Comment>Naturally, I agree with this article.</Comment> 
    </div>
  );
}

export default App;
