import React, { useState } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Results = ({ result }) => {

    const [data, setData] = useState({
        list1: [
            { x: 20, y: 1000 },
            { x: 30, y: 3000 },
            { x: 40, y: 5000 },
            { x: 50, y: 7000 },
            { x: 60, y: 9000 },
            { x: 70, y: 11000 }
          ]
    });

    const { list1 } = data;

    return (
        <div className = "results">
            <h2>Results</h2>
            <p>You will retire with ${result.toLocaleString()}!</p>
            <div className = "resultschart">
            <ScatterChart
        width={850}
        height={450}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey={"x"} name="age" unit="age" />
        <YAxis type="number" dataKey={"y"} name="savings" unit="$" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter
          name="Median"
          data={list1}
          fill="#8884d8"
          line
          shape="circle"
        />
      </ScatterChart>
          </div>
        </div>
    )
};

export default Results;