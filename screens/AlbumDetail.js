import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

import { FETCH_ALBUM_INFO_REQUEST } from '../actions/types';
import { fetchAlbumInfo } from '../actions/api_actions';

class AlbumDetail extends Component {
  componentDidMount() {
    this.props.fetchAlbumInfo();
  }

  componentWillReceiveProps() {

  }

  render() {
    if(this.props.loading) {
      return <ActivityIndicator />
    }
    
    let { albumInfo } = this.props;

    let likeColor = albumInfo.is_liked ? 'green' : 'blue';

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.headerStyle}>
            <Ionicons
              name="ios-arrow-back"
              style={styles.goBackStyle}
              size={32}
            />
            <Text style={styles.headerTextStyle}>{albumInfo.artist}</Text>
          </View>

          <ScrollView>
            <Image
              source={{ uri: albumInfo.cover }}
              style={styles.imageStyle}
            />
            <View style={styles.textViewStyle}>
              <Text style={styles.headingTextStyle}>
                {albumInfo.title}
              </Text>
              <Text style={styles.textStyle}>Trucker Dump</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.player}>
          <Text style={styles.durationLeft}>0:00</Text>
          <Text style={styles.durationRight}>{albumInfo.duration}:00</Text>
        </View>
        <View style={styles.optionsView}>
          <Ionicons name="md-skip-backward" size={32} />
          <Ionicons name="md-play" size={32} color={'blue'} />
          <Ionicons name="md-skip-forward" size={32} />
          <Ionicons name="md-thumbs-up" size={32} color={likeColor}>
            <Text>{albumInfo.likes}</Text>
          </Ionicons>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between"
  },
  navbar: {
    backgroundColor: "brown",
    flexDirection: "row",
    height: 200
  },
  headerStyle: {
    backgroundColor: "brown",
    flexDirection: "row",
    height: 80,
    alignSelf: "stretch",
    alignItems: "center"
  },
  goBackStyle: {
    left: 20
  },
  headerTextStyle: {
    marginLeft: 10,
    fontSize: 18,
    color: "white",
    left: 30
  },
  imageStyle: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,
    height: 300,
    backgroundColor: "grey"
  },
  textViewStyle: {
    justifyContent: "center"
  },
  headingTextStyle: {
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,

    textAlign: "center"
  },
  textStyle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center"
  },
  optionsView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50
  },
  player: {
    borderColor: "grey",
    borderBottomWidth: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20
  },
  durationLeft: {
    alignItems: "flex-start",
    color: "grey",
    marginBottom: 10
  },
  durationRight: {
    alignItems: "flex-end",
    color: "grey",
    marginBottom: 10
  }
});

function mapStateToProps(state) {
  return {
    albumInfo: state.album.data,
    loading: state.album.loading
  }
}

export default connect(mapStateToProps, { fetchAlbumInfo })(AlbumDetail);
