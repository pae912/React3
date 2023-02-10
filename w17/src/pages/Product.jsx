import React from 'react';
import { useState, useEffect } from 'react';
import { client } from "../API/client.js";


const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        (async () => {
            
            try {
                // 此處 get() 內的參數，是配合 db.json 內容
                // 一般若是直接連後端 server，常會空白
                const { data } = await client.get('/products');
                console.log(data) // 此處可以觀察伺服器回傳的資料
                setProduct(data) // 此處可以將 data 的值設定給 product
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <>
            {product.map(({ id, name, fiveG }) => {
                return (
                    <ul key={id}>
                        <li>id: {id}</li>
                        <li>name: {name}</li>
                        <li>5G/4G: {fiveG ? "5G" : "4G"}</li>
                    </ul>
                )
            })}
        </>
    )

};

export default Product;