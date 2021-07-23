import React from 'react'
import Chart from '../../Chart/Chart';
import './analysis.css';
import { anawaltData } from '../../dummyData';

export default function Analysis() {
    return (
        <div className='analysis'>
            <Chart data={anawaltData} dataKey="Sales" grid title="Year Report 2021"  />
        </div>
    )
}

