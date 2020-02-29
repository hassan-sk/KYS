import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    
    },
    inner_View1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        // backgroundColor: 'red'
    },
    inner_View2: {
        flex: 2,
        alignSelf: 'stretch',
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 300,
        borderTopLeftRadius: 300,
    },
    startAnalysisButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#3b5998',
        borderRadius: 50,
    }

})