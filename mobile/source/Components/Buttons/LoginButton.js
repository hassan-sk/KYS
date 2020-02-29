import React, { Component } from 'react';
import {TouchableWithoutFeedback, View, StyleSheet, Text, Dimensions, Image} from 'react-native'


import {colors} from '../../config.json';

class LoginButton extends Component {
    state = {  }
    render() { 
        return ( 
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={styles.mainHolder}>
                    <View style={styles.innerLogoHolder}>
                        <Image source={this.props.icon} resizeMode={'contain'} style={styles.logoImageStyling}/>
                    </View>
                    <View style={styles.textHolder}>
                        <View>
                            <Text>{this.props.text}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
 
const styles = StyleSheet.create({
    mainHolder: {
        backgroundColor: colors.c1,
        padding: 3,
        margin: 5,
        borderRadius:5,
        flexDirection: 'row',
        width: Dimensions.get('window').width/1.5
    },
    logoImageStyling: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    innerLogoHolder: {
        padding: 3,
        backgroundColor: colors.c1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width/10,
        height: Dimensions.get('window').width/10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    textHolder: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey_1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    }
})

export default LoginButton;