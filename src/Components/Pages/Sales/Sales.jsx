import React from 'react';
import Chart from '../../Chart/Chart';
import './sales.css';
import { salestData } from '../../dummyData';

export default function Sales() {
    return (
        <div className='sales'>
            <Chart data={salestData} dataKey="Product Sales" grid title="Month Product Sales 2021"/>
        </div>
    )
}
