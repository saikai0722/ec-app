import React from 'react';
import {makeStyles} from '@material-ui/styles';
import AppBer from '@material-ui/core/AppBar';
import ToolBer from '@material-ui/core/Toolbar';
import logo from '../../assets/img/icons/logo.png';
import {useDispatch, useSelector } from 'react-redux';
import { getIsSignedIn } from '../../reducks/users/selectors';
import {push} from 'connected-react-router';
import {HeaderMenus} from './index';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    menuBer: {
        backgroundColor: '#fff',
        color: '#444'
    },
    toolBer: {
        margin: '0 auto',
        maxWidth: 1024,
        width: '100%'
    },
    iconButtons: {
        margin: '0 0 0 auto'
    }
})

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const isSignedIn = getIsSignedIn(selector);

    return (
        <div className={classes.root}>
            <AppBer position="fixed" className={classes.menuBer}>
                <ToolBer className={classes.toolBer}>
                    <img src={logo} alt="トラハックのロゴ" width='128px'
                        onClick={() => dispatch(push('/'))}
                    />
                    {isSignedIn && (
                        <div className={classes.iconButtons}>
                        <HeaderMenus />
                        </div>
                    )}
                </ToolBer>
            </AppBer>
        </div>
    )
};

export default Header;