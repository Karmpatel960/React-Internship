import React from 'react'
import Hero from '../Components/Hero';
import Service from '../Components/Service';
import Collections  from '../Components/Collections';
import Products from '../Components/Products';
import BigSale from '../Components/BigSale';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Service />
            <Collections />
            <Products />
            <BigSale/>
        </>

    )
}
export default HomePage;