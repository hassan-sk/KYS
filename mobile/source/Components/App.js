import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import * as actions from '../Actions';

import HomePage from './Pages/homePage';
import EntryPage from './Pages/entryPage';
import AnalysisPage from './Pages/analysisPage';
import SettingsPage from './Pages/settingsPage';

import BottomNavigator, {Page} from '../Components/Global/BottomNavigator';



const App = (props) => {
    return (
        <BottomNavigator onPress={props.navigator_select} selected={props.navigator.selected}>
            <Page id={'entry'} hideNavigation view={<EntryPage/>}/>
            <Page id={'home'} text={'Home'} view={<HomePage/>}/>
            <Page id={'analysis'} text={'Analysis'} view={<AnalysisPage/>}/>
            <Page id={'settings'} text={'Settings'} view={<SettingsPage/>}/>
        </BottomNavigator>
    )
}

const mstp = (state) => {
    return {
        logged: state.entry.logged,
        navigator: state.navigator
    }
}

export default connect(mstp, actions)(App);   