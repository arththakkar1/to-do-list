import { useState } from 'react';
import './index.css';

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSave = () => {
    if (inputValue.trim() === "") return;
    setData([...data, { Content: inputValue }]); 
    setInputValue("");
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index)); 
  };

  return (
    <>
      <main className="flex max-w-full h-screen justify-center items-center text-white bg-black">
        <div className="h-auto w-[500px] mx-10 flex flex-col border gap-4 border-gray-900 rounded-xl p-5">
          <div className="text-2xl font-bold">To Do List</div>
          <div className="flex gap-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="bg-gray-50 flex w-full mx-auto border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Here"
              required
            />
            <button
              className="border border-lg border-gray-900 rounded-xl text-black bg-white px-4 h-[50px]"
              onClick={handleSave} 
            >
              Save
            </button>
          </div>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col p-4 text-xl gap-y-4">
              <div className="flex justify-between items-center">
                <span>{item.Content}</span>
                <button
                  className="border border-lg border-gray-900 rounded-xl bg-red-900 px-4 h-[44px]"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
