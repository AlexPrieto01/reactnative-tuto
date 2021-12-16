import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import Counter from '../counter/Counter';
import styles from './ProductItem-style';

const ProductItem = ({ product, onAddItem }) => {
    const [itemList, setItem] = useState(1);

    const onPressCarrito = () => {
        onAddItem(product, itemList)
        console.log(itemList);
    };
    return (
        <View style={styles.card}>
            <View style={styles.topContainer}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: product.image
                    }}
                />
                <View style={styles.brandContainer}>
                    <Text style={styles.brandText}>{product.brand}</Text>
                </View>
            </View>

            <View style={styles.middleContainer}>
                <Text style={styles.nameText}>{product.name}</Text>
                <Text style={styles.priceText}>{`${product.unitPrice}€`}</Text>
            </View>

            <View style={styles.counterContainer}>
                <Counter />
            </View>

            <View style={styles.actionContainer}>
                <Button
                    title="Añadir al carrito"
                    onPress={onPressCarrito}
                />

            </View>
        </View>
    );
};

export default ProductItem;