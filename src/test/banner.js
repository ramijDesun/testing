import React from "react";
import { Banner } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";

const BannerCom = () => {
    const [visible, setVisible] = React.useState(true);
    return (
        <View style={styles.container}>
            <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          // source={require('../../src/assets/images/set.png')}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      There was a problem processing a transaction on your credit card.
    </Banner>
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

export default BannerCom;