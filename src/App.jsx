import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [quote, setQuote] = useState("");

  const handleSearchButton = () => {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: { "X-Api-Key": "QNw0ET0xjYWx4TXWhHHAvA==BBfyzb9PTU0xHjep" },
    })
      .then((data) => data.json())
      .then((json) => setQuote(json[0].quote));
  };

  return (
    <div className="justify-center items-center flex h-screen bg-gray-500">
      <div className="w-[24rem] h-2/4 flex items-center flex-col bg-gray-700 border-2 border-gray-900 rounded-md shadow-lg shadow-black">
        <h1 className="text-3xl font-bold m-2 text-white">quote generator</h1>
        <div className="w-[90%] h-[80%] p-2 bg-gray-500 rounded-lg">
          <p className="h-full font-bold break-words overflow-hidden">
            {quote}
          </p>
        </div>
        <Button handleClick={handleSearchButton}>generate quote</Button>
      </div>
    </div>
  );
}

export default App;
