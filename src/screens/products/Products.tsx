import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import styles from './product-styles';
import Counter from '../../components/counter/Counter';
import ProductsService from '../../services/ProductServices';


const Products = () => {
  const navigation = useNavigation<any>();

  const onPressButton = () => {
    navigation.navigate('product-details');
  };

  useEffect(() => {
    console.log('useeffect')

    const asyncCall = async () => {
      const result = await ProductsService.getProducts();
      console.log(result.data);
    };

    asyncCall();

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text h4>Soy la página de productos</Text>
      <Counter />

      <Button onPress={onPressButton} title="Ir a la página de detalles" />
    </SafeAreaView>
  );
};

export default Products;
