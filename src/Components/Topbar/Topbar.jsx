import React from 'react';
import './topbar.css'
import { NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>

                    <div className="topbarIconsContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>

                    <div className="topbarIconsContainer">
                        <Settings />
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
