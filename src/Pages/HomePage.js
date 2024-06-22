import React from 'react'
import Hero from '../Componets/Hero';
import Service from '../Componets/Service';
import Collections from '../Componets/Collections';
import Products from '../Componets/Products';
import BigSale from '../Componets/BigSale';

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