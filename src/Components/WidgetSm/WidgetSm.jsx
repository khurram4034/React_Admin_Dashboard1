import React from 'react';
import { Visibility } from '@material-ui/icons';
import './widgetSm.css'

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmlistItem">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU" 
                    alt="" 
                    className='widgetSmImg'
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmlistItem">
                    <img
                        src="https://i.pinimg.com/originals/c3/8b/4a/c38b4a0dcac9a5807f521314d2ce44de.png"
                        alt=""
                        className='widgetSmImg'
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmlistItem">
                    <img
                        src="https://i.pinimg.com/originals/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4.png"
                        alt=""
                        className='widgetSmImg'
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmlistItem">
                    <img
                        src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
                        alt=""
                        className='widgetSmImg'
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmlistItem">
                    <img
                        src="https://d.newsweek.com/en/full/1592734/facebook-avatar.jpg?w=1600&h=1600&q=88&f=f188f5e40bbb7411e5435a4659bcba86"
                        alt=""
                        className='widgetSmImg'
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

            </ul>
        </div>
    )
}
