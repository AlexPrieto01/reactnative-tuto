import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useState } from 'react';
import styles from './product-styles';
import Counter from '../../components/counter/Counter';
import ProductsService from '../../services/ProductServices';
import Load from '../../components/loader/Loader';
import ProductItem from '../../components/product-item/ProductItem';


const Products = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation<any>();

  const onPressButton = () => {
    navigation.navigate('product-details');
  };

  useEffect(() => {
    console.log('useeffect')

    const asyncCall = async () => {
      const result = await ProductsService.getProducts();
      setProducts(result.data);
    };

    asyncCall();

  }, []);

  if (products.length === 0) { return <Load /> }

  return (

    <SafeAreaView style={styles.container}>
      <Text h4>Bienvenido a la tienducha!</Text>
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ProductItem product={item} />;
        }}
      />
      <Button onPress={onPressButton} title="Ir a la página de detalles" />
    </SafeAreaView>

  );
};

export default Products;
