import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {
  setCompleted,
  setDeleted,
  toDoListData,
  getFilter,
} from "./toDoListSlice";

const ToDoList = () => {
  const toDoLists = useSelector(toDoListData);
  const selectedFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleComplete = (index) => {
    dispatch(setCompleted(index));
  };

  const filteredToDoListData = toDoLists.slice().sort((a, b) => {
    if (selectedFilter === "") {
      return null;
    } else if (selectedFilter === "asc") {
      return a.todo.localeCompare(b.todo);
    } else if (selectedFilter === "desc") {
      return b.todo.localeCompare(a.todo);
    } else if (selectedFilter === "completed") {
      if (a.completed && !b.completed) {
        return -1;
      }
    } else {
      if (!a.completed && b.completed) {
        return -1;
      }
    }
  });

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto mt-8">
      {toDoLists.length != 0 ? (
        filteredToDoListData.map((toDoList, index) => {
          return (
            <div
              key={index}
              className="flex w-full gap-4 justify-between items-center border-b-2 border-[#213555] mb-2 pb-2"
            >
              <div
                className="flex w-full gap-4 justify-between items-center cursor-pointer"
                onClick={() => handleComplete(index)}
              >
                <div className="number w-6">
                  <span className="flex justify-center items-center text-xl h-8 w-8 rounded-md  text-white bg-biru-kayaknya">
                    {index + 1}
                  </span>
                </div>
                <div className="to-do w-full">
                  <p
                    className={`font-roboto ${
                      toDoList.completed ? "active" : null
                    }`}
                  >
                    {toDoList.todo}
                  </p>
                </div>
                <div className="checkbox">
                  <span className="w-6 h-6 border-2 flex justify-center items-center relative">
                    <div
                      className={`absolute text-3xl -top-2 -right-1.5 ${
                        toDoList.completed ? "checked" : "hidden"
                      }`}
                    >
                      <GiCheckMark />
                    </div>
                  </span>
                </div>
              </div>
              <div className="delete">
                <button
                  onClick={() => dispatch(setDeleted(index))}
                  aria-label="delete"
                  className="w-6 h-6 flex justify-center items-center text-2xl text-red-500 hover:text-red-600 relative "
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex w-full gap-4 justify-between items-center border-b-2 border-[#213555] mb-2 pb-2">
          <div className="flex w-full gap-4 justify-between items-center cursor-pointer">
            <div className="number w-6">
              <span className="flex justify-center items-center text-xl h-8 w-8 rounded-md text-white bg-biru-kayaknya">
                #
              </span>
            </div>
            <div className="to-do w-full">
              <p className={`font-roboto `}>Belum ada to-do list</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
