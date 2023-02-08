import React, { Fragment } from 'react'
import Banner from './Banner';
import Navbar from './Navbar';
import { Box, styled } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
const Component = styled(Box)`
padding:20px 10px
background:#F2F2F2;
`;
const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    console.log(products)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <Navbar />

            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection/>
                <Slide products={products} title="Discounts for you" timer={false} />
                <Slide products={products} title="Suggested item" timer={false} />
                <Slide products={products} title="Top Selections" timer={false} />
                <Slide products={products} title="Recommended item" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
                <Slide products={products} title="Top deals on Accosseries" timer={false} />
            </Component>

        </>
    )
}

export default Home;