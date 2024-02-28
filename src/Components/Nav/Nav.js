import React, { useContext, useState } from 'react'
import "./Nav.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
export default function Nav() {
    let [Class, setClass] = useState("")

    const changetheme = (() => {
        if (window.scrollY >= 80) {
            setClass("absolute")
        } else {
            setClass("")
        }
    })

    window.addEventListener("scroll", changetheme)

    let noteContext = useContext(Context)
    let total = noteContext.Total
    let counter = noteContext.Counter
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className='box_menu'>
                    <p>Installment conditions</p>
                    <p>Service Center</p>
                    <p>Feedback</p>
                </div>
            </List>
            <Divider />
            <List>
                <Link className='none' to="/cart">
                    <div className='box-menu'>
                        <span className='counter-box'>{counter}</span>
                        <button className='box-cart icon-cart'></button>
                    </div>
                </Link>
            </List>
        </Box>
    );
    return (
        <nav className={`nav-bar ${Class}`}>
            <ul className='left'>
                <Link to="/"><img width="190px" alt='logo' height="35px" src='./images/logos/logo.png'></img></Link>
            </ul>
            <ul className='middle'>
                <div className='search'>
                    <button className='search_btn icon-search'></button>
                    <input maxLength="35" className='search_inp'></input>
                </div>
            </ul>
            <ul className='right'>
                <select className='options'>
                    <option>AM</option>
                    <option>RU</option>
                    <option>EN</option>
                </select>
                {
                    total === 0 ? <Link className='none' to="/cart"><li title='go to cart' className='cart icon-cart'></li></Link>
                        : <Link className='none' to="/cart">
                            <div title='go to cart' className="Cartflex">
                                <span className='icon-cart'></span>
                                <span>${total} </span>
                                <span className='counter'>{counter}</span>
                            </div>
                        </Link>
                }

            </ul>

            <>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button className='btn-menu ' onClick={toggleDrawer(anchor, true)}> <span className='icon-menu'><span className='menu-counter'>{counter !== 0 ? counter : ""}</span></span></Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </>

        </nav>
    )
}
