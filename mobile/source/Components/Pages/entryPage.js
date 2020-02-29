import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';

import {colors} from '../../config.json'

import * as actions from '../../Actions';
import LoginButton from '../Buttons/LoginButton';

const twitter_logo = require('../../Assets/Images/twitter_logo.png') 
const fb_logo = require('../../Assets/Images/fb_logo.png')

class EntryPage extends Component {

    render(){
        return(
            <SafeAreaView style={styles.mainView}>
                <View style={styles.logoView}>
                    <Image
                        resizeMode={'contain'}
                        style={styles.logoStyling}
                        source={require('../../Assets/Images/Logo.png')}
                    />
                </View>
                <View style={styles.bottomHolder}>
                    <LoginButton 
                        onPress={()=> alert('logn with fb')}
                        text="Login with Facebook"
                        icon={fb_logo}
                        />
                    <LoginButton text="Login with Twitter" icon={twitter_logo}/>
                </View>    
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    logoStyling: {
        flex: 1,
        width: 200, 
    },
    mainView: {
        flex: 1
    },
    logoView: {
        flex: 2,
        backgroundColor: colors.c2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomHolder: {
        flex: 3,
        backgroundColor: colors.c4,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mstp = (state) => {
    return {
        logged: state.entry.logged,
        loading: state.entry.loading
    }
}

export default connect(mstp, actions)(EntryPage)