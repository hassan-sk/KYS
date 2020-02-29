import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';

import {colors} from '../../config.json'

const SingleOption = (props) => {
    return (
        <View style={styles.singleOptionStyling}>
            <TouchableWithoutFeedback
                onPress={() => props.onPress(props.id)}
            >
                <Text style={{color: 'white'}}>
                    {props.text}
                    {props.selected?"_": null}
                </Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const Navigator = (props) => {
    return (
        props.show?
            <View style={{...styles.navigatorStyling, height: props.height }}>
                {/* Give allOptions a gradient */}
                <View style={styles.allOptionsStyling}>
                {
                    props.options.map((x, index) => 
                        <SingleOption
                            onPress={props.onPress}
                            key={'SingleOptions'+index}
                            text={x.text}
                            id={x.id}
                            selected={props.selected==x.id}
                        />
                    )
                }
                </View>
            </View>        
            :
            null
    )
}

export const Page = (props) => {
    return (
        props.view
    )
}


class BottomNavigator extends Component {

    // what to do in case Dimensions are not accessible
    state = { height: Dimensions.get('window').width/6 }

    

    render() { 
        return (
            <SafeAreaView style={styles.holderView}>
                <View style={styles.mainView}> 
                    {this.props.children.filter(x => x.props.id == this.props.selected)[0]}
                </View>
                <Navigator 
                    onPress={this.props.onPress}
                    show={!this.props.children.filter(x => x.props.id == this.props.selected)[0].props.hideNavigation}
                    options={this.props.children.map(x => x.props)}
                    height={this.state.height}
                    selected={this.props.selected}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    navigatorStyling: {
        backgroundColor: colors.c1,
        color: 'green',
        justifyContent: 'center',
        padding: 5,
        alignItems: 'center'
    },
    allOptionsStyling: {
        flexDirection: 'row',
    },
    singleOptionStyling: {
        paddingRight: 10,
        paddingLeft: 10
    },
    mainView: {
        flex: 1
    },
    holderView: {
        flex: 1
    },
})



export default BottomNavigator;