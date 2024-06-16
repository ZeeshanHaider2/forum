import React from "react";
import { comments } from "./commentData";
import Card from "./Card";
import Counter from "./Counter";

function App() {
  return (
    <>
      <div>
        {comments.map((comment) => (
          <Card commentObject={comment} />
        ))}
      </div>
      <Counter />
    </>
  );
}

export default App;
