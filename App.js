import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Provider, connect } from 'react-redux';
import store from './store';
import AlbumDetail from './screens/AlbumDetail';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AlbumDetail />
      </Provider>
    );
  }
}

