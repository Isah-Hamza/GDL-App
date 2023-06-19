import React from "react";

const MyTable = ({ table_header, table_body }) => {
  return (
    <div>
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-[#f7f9fb] shadow">
            {table_header.map((item, idx) => (
              <th
                key={idx}
                className={`text-left !font-semibold py-2 ${
                  idx == 0 && "pl-3"
                }`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table_body.map((trnx, idx) => (
            <tr key={idx} className="pt-2">
              {table_header.map((teedee, idx) => (
                <td key={idx}>{trnx[teedee]}</td>
              ))}
              {/* <td className="pl-3">{trnx.date}</td>
              <td>{trnx.merchant}</td>
              <td>{trnx.category}</td>
              <td>{trnx.person}</td>
              <td>{trnx.department}</td>
              <td>{trnx.amount}</td>
              <td>
                <span className={`${trnx.status}`}>{trnx.status}</span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
