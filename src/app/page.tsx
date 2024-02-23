import React from "react";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;
// import { useEffect, useMemo, useState } from "react";

// export default function MyComponent() {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     const response = await fetch("/api/data");
//     const jsonData = await response.json();
//     setData(jsonData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(data);
//   const memoizedData = useMemo(() => {
//     return data.map((item: any) => (
//       <div key={item._id}>{/* Render your data */}</div>
//     ));
//   }, [data]);

//   return <div>{memoizedData}</div>;
// }
