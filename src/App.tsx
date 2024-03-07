import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import { Counter } from "./counter";
// import * as FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'
import { useEffect, useState } from "react";

interface item {
  id: string;
  title: string
}

function App() {
  const [data, setData] = useState<item[]>([])
  // const dispatch = useDispatch()
  // const handleIncrement = () => {
  //   dispatch(increment());
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  useEffect(() => {
    const load = async () => {
      const get = await fetch('https://jsonplaceholder.typicode.com/posts')
      setData(await get.json())
    }
    load()
  }, [])

  const downloadExcel = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "Title\n" +
      data.map(row => row.title).join("\n") +
      "\n\n" +
      "ID\n" +
      data.map(row => row.id).join("\n");
    const encodedUri = encodeURI(csvContent);
    
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  };


  return (
    <><div className="App">

      <button onClick={downloadExcel}>Download Excel</button>
     <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 && data?.map((item, index) => (
            <tr key={index}>
              <td>{item?.id}</td>
              <td>{item?.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div></>
  );
}

export default App;
