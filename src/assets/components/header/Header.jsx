import React, { useState } from "react";
import { useRef } from "react";
import { RiTodoLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setToDoList, setFilter, getFilter } from "../to-do-list/toDoListSlice";

const Header = () => {
  const toDo = useRef(null);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const selectedFilter = useSelector(getFilter);

  const filters = [
    {
      name: "asc",
      text: "A - Z",
    },
    {
      name: "desc",
      text: "Z - A",
    },
    {
      name: "completed",
      text: "Completed",
    },
    {
      name: "uncompleted",
      text: "Uncompleted",
    },
  ];

  const handleForm = (e) => {
    if (toDo.current.value.length < 3) {
      alert("Masukkan lebih dari 3 huruf");
    } else {
      dispatch(setToDoList(toDo.current.value));
      toDo.current.value = "";
    }
  };

  return (
    <div className="header max-w-4xl mx-auto flex flex-col gap-2">
      <h1 className="flex justify-center items-center gap-4 font-bold font-dancing-script text-4xl">
        To-Do List <RiTodoLine />
      </h1>
      <div className="form-filter flex gap-4 w-full">
        <div className="form flex h-10 w-full border border-biru-kayaknya rounded-md overflow-hidden">
          <input
            type="text"
            className="w-full h-10 px-2 text-lg outline-none"
            ref={toDo}
          />
          <button
            aria-label="add"
            className="w-10 h-10 bg-biru-kayaknya text-white flex justify-center items-center"
            onClick={handleForm}
          >
            <FaPlus />
          </button>
        </div>
        <div className="filter w-10 h-10 relative">
          <button
            onClick={() => setActive(!active)}
            aria-label="filter"
            className="w-full h-full flex justify-center items-center text-4xl border border-biru-kayaknya rounded-md bg-biru-kayaknya text-white"
          >
            <MdSort />
          </button>
          <div
            className={`absolute origin-top-right transition-all ease-in-out duration-300 top-full right-full border-2 rounded-md p-4 flex flex-col w-96  bg-[#F0F0F0] text-base ${
              active ? "scale-100" : "scale-0"
            }`}
          >
            <h1 className="font-semibold">Filter</h1>
            <div className="grid gap-2 w-full h-full grid-cols-3 mt-2">
              <div
                onClick={() => dispatch(setFilter(""))}
                className={`cursor-pointer border p-1 flex justify-center items-center rounded-sm ${
                  selectedFilter === "" ? "bg-biru-kayaknya text-white" : null
                }`}
              >
                No filter
              </div>
              {filters.map((filter, index) => {
                return (
                  <div
                    onClick={() => dispatch(setFilter(filter.name))}
                    className={`cursor-pointer border rounded-sm p-1 flex justify-center items-center ${
                      filter.name === selectedFilter
                        ? "bg-biru-kayaknya text-white"
                        : null
                    }`}
                    key={index}
                  >
                    {filter.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
