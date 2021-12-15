import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import styles from './product-styles';
import Counter from '../../components/counter/Counter';
import ProductsService from '../../services/ProductServices';
import Load from '../../components/loader/Loader';


const Products = () => {
  const [products, setProducts]
  const navigation = useNavigation<any>();

  const onPressButton = () => {
    navigation.navigate('product-details');
  };

  useEffect(() => {
    console.log('useeffect')

    const asyncCall = async () => {
      const result = await ProductsService.getProducts();


      console.log(products.data);
      console.log(result.data);
    };

    asyncCall();

  }, []);

  if (Products.length === 0) { return <Load /> }

  return (

    <SafeAreaView style={styles.container}>
      <Text h4>Soy la página de productos</Text>
      <Counter />
      <Button onPress={onPressButton} title="Ir a la página de detalles" />
      <Load />
    </SafeAreaView>

  );
};

export default Products;
