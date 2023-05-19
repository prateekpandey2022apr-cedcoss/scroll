import "./App.css";
import { useEffect, useState } from "react";
import InfinityScroll from "./InfinityScroll";

function App() {
  const [list, setList] = useState([]);
  const [EOF, setEOF] = useState(true);

  function GenerateParagraphs(start, end) {
    const temp = [];
    for (let i = start; i < end; i++) {
      temp.push(`This is para no. ${i + 1}`);
    }

    return temp;
  }

  const getMoreList = () => {
    setTimeout(() => {
      setList([...list, ...GenerateParagraphs(list.length, list.length + 50)]);
      setEOF(false);
    }, 5000);
  };

  return (
    <InfinityScroll EOF={EOF} setEOF={setEOF} fetchCb={getMoreList} data={list}>
      <div className="App">
        {list.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        {EOF && <p>Loading Content ...</p>}
      </div>
    </InfinityScroll>
  );
}

export default App;
