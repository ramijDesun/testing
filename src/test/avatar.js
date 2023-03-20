import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const AvatarIcon = () => {
    return (
        <View style={styles.container}>
            <Avatar.Icon size={24} icon="folder" />
            <Avatar.Text size={64} label="XD" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default AvatarIcon;