import React from 'react';
import './widgetLg.css';

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FAby8oZ-6HEpdg1oWMlPcIVtI7KE-WdGrRl4-lgh8brpxa95uVVIJUcnEY2WTOuH2E0&usqp=CAU"
                            alt="" 
                            className="widgetLgImg"
                            />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Frank James</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://www.askdavetaylor.com/wp-content/uploads/2020/05/facebook-create-avatar-fp.png"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Dave Taylor</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://i.pinimg.com/originals/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4.png"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://i.pinimg.com/originals/c3/8b/4a/c38b4a0dcac9a5807f521314d2ce44de.png"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
