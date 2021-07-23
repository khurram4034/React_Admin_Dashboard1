import React from 'react';
import Chart from '../../Chart/Chart';
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo';
import { userData } from '../../dummyData';
import './Home.css';
import WidgetSm from '../../WidgetSm/WidgetSm';
import WidgetLg from '../../WidgetLg/WidgetLg';

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey="Active User" />
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
