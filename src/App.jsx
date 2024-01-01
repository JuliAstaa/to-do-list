import React from "react";
import ToDoList from "./assets/components/to-do-list/ToDoList";
import Header from "./assets/components/header/Header";

const App = () => {
  return (
    <main className="max-w-7xl border-2 mx-auto min-h-screen bg-[#F0F0F0] py-8 px-2">
      <Header />
      <ToDoList />
    </main>
  );
};

export default App;
