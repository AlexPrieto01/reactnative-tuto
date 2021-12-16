import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { LinearProgress } from 'react-native-elements';
import styles from './product-styles';

import ProductItem from '../../components/product-item/ProductItem';
import Load from '../../components/loader/Loader';
import ProductsService from '../../services/ProductServices';

const Products = ({ onAddItemToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAsyncProducts = async () => {
      const result = await ProductsService.getProducts();
      setProducts(result.data);
    };

    getAsyncProducts();
  }, []);

  if (products.length === 0) {
    return <Load />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ProductItem product={item} onAddItemToCart={onAddItemToCart} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Products;
