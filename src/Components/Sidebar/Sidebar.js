import React from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
import { 
    LineStyle, 
    Timeline, 
    TrendingUp, 
    PermIdentity, 
    AttachMoney, 
    Storefront, 
    MailOutline, 
    DynamicFeed, 
    ChatBubbleOutline, 
    LocalMallOutlined, 
    Report 
} from '@material-ui/icons'



export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/' className='link'>
                        <li className='sidebarListItem'>
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                        </Link>
                        <Link to='/analysis' className='link'>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        </Link>

                        <Link to='/sales' className='link'>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon'/>
                            Sales
                        </li>
                        </Link>
                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/users' className='link'>
                            <li className='sidebarListItem'>
                                <PermIdentity className='sidebarIcon' />
                                Users
                            </li>
                        </Link>

                        <Link to='/products' className='link'>
                            <li className='sidebarListItem'>
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                        </Link>

                        <Link to='/transaction' className='link'>
                            <li className='sidebarListItem'>
                                <AttachMoney className='sidebarIcon' />
                                Transactions
                            </li>
                        </Link>

                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notification</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>

                        <li className='sidebarListItem'>
                            <DynamicFeed className='sidebarIcon' />
                            Feedback
                        </li>

                        <li className='sidebarListItem'>
                            <ChatBubbleOutline className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <LocalMallOutlined className='sidebarIcon' />
                            Manage
                        </li>

                        <li className='sidebarListItem'>
                            <Report className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>             
            </div>
        </div>
    )
}
