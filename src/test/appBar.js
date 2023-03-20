import React from "react";
import { Appbar, useTheme, FAB } from "react-native-paper";
import { StyleSheet, View, Platform } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;
const moreIcon = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const AppBar = () => {

    const {bottom} = useSafeAreaInsets();
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => console.log('Back button')} />
                <Appbar.Content title="Appbar" />
                <Appbar.Action icon={'calendar'} onPress={() => console.log('Calender')} />
                <Appbar.Action icon="magnify" onPress={() => console.log('magnify')} />
                <Appbar.Action icon={moreIcon} />
            </Appbar.Header>

            <Appbar
                style={[
                    styles.bottom,
                    {
                        height: BOTTOM_APPBAR_HEIGHT + bottom,
                        backgroundColor: theme.colors.elevation.level2,
                    },
                ]}
                safeAreaInsets={{ bottom }}
                // dark={true}
            >
                <Appbar.Action icon="archive" onPress={() => console.log('Archeive')} />
                <Appbar.Action icon="email" onPress={() => console.log('email')} />
                <Appbar.Action icon="label" onPress={() => console.log('label')} />
                <Appbar.Action icon="delete" onPress={() => console.log('delete')} />
                {/* <FAB
                    mode="flat"
                    size="medium"
                    icon="plus"
                    onPress={() => {}}
                    style={[
                    styles.fab,
                    { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
                    ]}
                /> */}
            </Appbar>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    },
    header:{
        backgroundColor:'#dde'
    },
    bottom: {
        backgroundColor: 'aquamarine',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent:'space-between'
    },
    fab: {
        position: 'absolute',
        right: 16,
    },
    icon:{
        height:50,
        width:50,
        backgroundColor:'red'
    }
})

export default AppBar;