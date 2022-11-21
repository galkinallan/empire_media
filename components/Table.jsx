import moment from "moment-timezone";
import { useState } from "react";

export default function Table({ ...props }) {
  const [table, setTable] = useState(props.changes?.data?.slice());
  const [sortBy, setSortBy] = useState({
    name: "Date",
    type: "DESC",
  });

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

  return (
    <table className=" w-full border-2">
      <thead className=" bg-gray-50 border-b-2 border-gray200">
        <tr>
          <th className=" p-3 txt-sm font-bold tracking-wide text-left ">
            <div className=" flex">
              Date
              <div className=" flex flex-col ml-1  justify-center">
                <button
                  onClick={() => sort("Date")}
                  className={
                    sortBy.type === "ASC" && sortBy.name === "Date"
                      ? " up-dark"
                      : " up-light"
                  }
                ></button>
                <button
                  onClick={() => sort("Date")}
                  className={
                    sortBy.type === "DESC" && sortBy.name === "Date"
                      ? " down-dark"
                      : " down-light"
                  }
                ></button>
              </div>
            </div>
          </th>
          <th className=" p-3 txt-sm font-bold tracking-wide text-left">
            <div className="flex">
              High
              <div className=" flex flex-col ml-1  justify-center">
                <button
                  onClick={() => sort("High")}
                  className={
                    sortBy.type === "ASC" && sortBy.name === "High"
                      ? " up-dark"
                      : " up-light"
                  }
                ></button>
                <button
                  onClick={() => sort("High")}
                  className={
                    sortBy.type === "DESC" && sortBy.name === "High"
                      ? " down-dark"
                      : " down-light"
                  }
                ></button>
              </div>
            </div>
          </th>
          <th className=" p-3 txt-sm font-bold tracking-wide text-left">
            <div className="flex">
              Low
              <div className=" flex flex-col ml-1  justify-center">
                <button
                  onClick={() => sort("Low")}
                  className={
                    sortBy.type === "ASC" && sortBy.name === "Low"
                      ? " up-dark"
                      : " up-light"
                  }
                ></button>
                <button
                  onClick={() => sort("Low")}
                  className={
                    sortBy.type === "DESC" && sortBy.name === "Low"
                      ? " down-dark"
                      : " down-light"
                  }
                ></button>
              </div>
            </div>
          </th>
          <th className=" p-3 txt-sm font-bold tracking-wide text-left">
            <div className="flex">
              Open
              <div className=" flex flex-col ml-1  justify-center">
                <button
                  onClick={() => sort("Open")}
                  className={
                    sortBy.type === "ASC" && sortBy.name === "Open"
                      ? " up-dark"
                      : " up-light"
                  }
                ></button>
                <button
                  onClick={() => sort("Open")}
                  className={
                    sortBy.type === "DESC" && sortBy.name === "Open"
                      ? " down-dark"
                      : " down-light"
                  }
                ></button>
              </div>
            </div>
          </th>
          <th
            onClick={() => sort("Close")}
            className=" p-3 txt-sm font-bold tracking-wide text-left "
          >
            <div className="flex">
              Close
              <div className=" flex flex-col ml-1  justify-center">
                <button
                  onClick={() => sort("Close")}
                  className={
                    sortBy.type === "ASC" && sortBy.name === "Close"
                      ? " up-dark"
                      : " up-light"
                  }
                ></button>
                <button
                  onClick={() => sort("Close")}
                  className={
                    sortBy.type === "DESC" && sortBy.name === "Close"
                      ? " down-dark"
                      : " down-light"
                  }
                ></button>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {table?.map((data, index) => (
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
    </table>
  );
}

//date high low open close
