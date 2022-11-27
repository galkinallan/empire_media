import moment from "moment-timezone";
import { useState } from "react";
import tw from "tailwind-styled-components";

const HistoryTable = tw.table`w-full border-2 sticky`;

const Thead = tw.thead`bg-gray-50 border-b-2 border-gray200 sm:sticky sm:top-0`;

const Th = tw.th`p-3 txt-sm font-bold tracking-wide text-left `;

const Buttons = tw.div`flex flex-col ml-1  justify-center`;

export default function Table({ changes }) {
  const [table, setTable] = useState(changes?.data?.slice());
  const [sortBy, setSortBy] = useState({
    name: "Date",
    type: "DESC",
  });
  const [visible, setVisible] = useState(5);

  function showMore() {
    setVisible((prevValue) => prevValue + 5);
  }

  function sort(value) {
    if (sortBy.type === "ASC") {
      const sorted = table.sort((a, b) => (a[value] < b[value] ? 1 : -1));
      setTable(sorted);
      setSortBy({ name: value, type: "DESC" });
    } else if (sortBy.type === "DESC") {
      const sorted = table.sort((a, b) => (a[value] > b[value] ? 1 : -1));
      setTable(sorted);
      setSortBy({ name: value, type: "ASC" });
    }
  }

  const columns = ["Date", "High", "Low", "Open", "Close"];

  return (
    <div className=" w-full overflow-x-auto sm:overflow-x-visible">
      <HistoryTable>
        <Thead>
          <tr>
            {columns.map((column) => (
              <Th key={column}>
                <div className=" flex">
                  {column}
                  <Buttons>
                    <button
                      onClick={() => sort(column)}
                      className={
                        sortBy.type === "ASC" && sortBy.name === column
                          ? " up-dark"
                          : " up-light"
                      }
                    ></button>
                    <button
                      onClick={() => sort(column)}
                      className={
                        sortBy.type === "DESC" && sortBy.name === column
                          ? " down-dark"
                          : " down-light"
                      }
                    ></button>
                  </Buttons>
                </div>
              </Th>
            ))}
          </tr>
        </Thead>
        <tbody>
          {table?.slice(0, visible).map((data, index) => (
            <tr key={index}>
              <td className=" p-3 text-gray-700 border-b-2 ">
                {moment(data.Date).tz("UTC").format("MMM Do, YYYY hh:mm ")}
              </td>
              <td className=" p-3 text-gray-700 border-b-2 ">
                {data.High.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td className=" p-3 text-gray-700 border-b-2 ">
                {data.Low.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td className=" p-3 text-gray-700 border-b-2 ">
                {data.Open.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td className=" p-3 text-gray-700 border-b-2 ">
                {data.Close.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
            </tr>
          ))}
        </tbody>
      </HistoryTable>
      <div className=" flex flex-col  pt-8 justify-center">
        <button
          className=" content-between bg-transparent hover:bg-green-800 
             text-green-800 font-semibold hover:text-white py-2 px-4 border
             border-green-800 hover:border-transparent rounded "
          onClick={showMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

//date high low open close
