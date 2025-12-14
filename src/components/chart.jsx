import React from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const SimpleChart = ({ sales, expenses }) => {
  // Combine the data
  const chartData = sales.map((sale, index) => ({
    month: sale.month,
    sales: sale.sales,
    expenses: expenses[index]?.expenses || 0,
  }));

  return (
    <div style={{ width: '100%', height: 400 }}>
      <AreaChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="sales" fill='red' stroke="#8884d8" />
        <Area type="monotone" dataKey="expenses" stroke="#82ca9d" />
      </AreaChart>
    </div>
  );
};

export default SimpleChart;