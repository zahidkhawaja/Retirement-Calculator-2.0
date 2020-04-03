import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Results = ({ result }) => {

    const data = {
        "values": []
    };

    return (
        <div className = "results">
            <h2>Results</h2>
            <p>You will retire with ${result}!</p>
            <div className = "resultschart">
            <LineChart width={800} height={300} data={data.price}>
                <Line type="monotone" dataKey="value" stroke="#40E0D0" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" interval={3} />
                <YAxis />
                <Tooltip />
                </LineChart>
          </div>
        </div>
    )
};

export default Results;