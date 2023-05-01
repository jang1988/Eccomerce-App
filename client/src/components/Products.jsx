import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = React.useState([]);
    const [filteredProducts, setFilteredProducts] = React.useState([]);

    React.useEffect(() => {
        const getProducts = async () => {
          try {

            const res = await axios.get('http://localhost:5000/api/products')
            console.log('res: ', res)
            
          } catch (error) {
            console.log('error: ', error)
          }
        };
        getProducts()
    }, [cat]);

    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
