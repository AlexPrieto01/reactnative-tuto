import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Load = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={100} color="#00ff00" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default Load;