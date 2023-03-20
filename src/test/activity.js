import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, MD2Colors, MD3Colors } from "react-native-paper";

const Activity = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} color="red" />
            <ActivityIndicator animating={true} color={MD2Colors.blueGrey600} size={50} />
            <ActivityIndicator animating={true} color={MD3Colors.error30} size="large" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    }
})

export default Activity;