import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';


const TextInputComponent = ({ activeOutlineColor }) => {
    return (
        <>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Enter something"
                    mode="outlined"
                    onChangeText={(text) => console.log('text', text)}
                    activeOutlineColor={activeOutlineColor ? activeOutlineColor : null}
                    style={styles.inputBox}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        height: 50
    },
    inputBox: {
        backgroundColor: '#fff',
    }
})

export default TextInputComponent;