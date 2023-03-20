import React from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown, TextInput } from '../../Components';


const Home = () => {
    return (
        <View style={styles.container}>
            <Dropdown />
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home;