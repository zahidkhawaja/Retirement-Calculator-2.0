import React, { useState, useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Results = props => {

    const [data, setData] = useState({
          list1: []
    });

    useEffect(() => {
        setData({
            list1: [
              { x: parseInt(props.result.age), y: parseInt(props.result.currentSavings) },
              { x: parseInt(props.result.retirementAge), y: props.result.retirementSavings }
            ]
      })
      console.log("PROPS", props);
    }, [props.result.retirementSavings]);

    const { list1 } = data;

    return (
        <div className = "results">
            <h2>Results</h2>
            <p>You will retire with ${props.result.retirementSavings.toLocaleString()}!</p>
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