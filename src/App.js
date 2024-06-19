import React from "react";
import { comments } from "./commentData";
import Card from "./Card";
import Counter from "./Counter";
import Array from "./Array";
import GroceryCart from "./GroceryCart";
import Form from "./Form";
import PageTitle from "./Headline";
import CounterAlert from "./CountAlert";

function App() {
  return (
    <>
      <div>
        {comments.map((comment) => (
          <Card commentObject={comment} />
        ))}
      </div>
      <Counter />
      <Array />
      <GroceryCart />
      <Form />
      <PageTitle />
      <CounterAlert />
    </>
  );
}

export default App;
