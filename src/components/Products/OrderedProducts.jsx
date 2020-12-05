import React, { useCallback } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import {push} from 'connected-react-router';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../UIkit';

const useStyles = makeStyles({
    list: {
        background: '#fff',
        height: 'auto'
    },
    image: {
        objectFit: 'cover',
        margin: '8px 16px 8px 0',
        height: 96,
        width: 96
    },
    text: {
        width:'100%'
    }
});

const OrderedProducts = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const products = props.products;

    const goToProductDetail = useCallback((id) => {
        dispatch(push('/product/' + id))
    }, [])

    return (
        <List>
            {products.map(product =>  (
                <>
                    <ListItem className={classes.list} key={product.id}>
                        <ListItemAvatar>
                            <img
                                className={classes.image}
                                src={product.images[0].path}
                                alt={"注文商品画像"}
                            />
                        </ListItemAvatar>
                        <div className={classes.text}>
                            <ListItemText 
                                primary={product.name}
                                secondary={"サイズ" + product.size}
                            />
                            <ListItemText 
                                primary={"¥" + product.price.toLocaleString()}
                            />
                        </div>
                        <PrimaryButton 
                            label={"商品詳細をみる"}
                            onClick={() => goToProductDetail(product.id)}
                        />
                    </ListItem>
                    <Divider />
                </>
            )
            )}
        </List>
    )
}

export default OrderedProducts;