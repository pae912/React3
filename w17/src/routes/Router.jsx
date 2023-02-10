import React from 'react';
import { Route } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import Nav from './Nav';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='Product' element={<Product />} />
            <Route path='About' element={<About />} />
        </Route>
    )
)
export default router;
