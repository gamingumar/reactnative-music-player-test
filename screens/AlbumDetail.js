import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from 'react-redux';

class AlbumDetail extends Component {
    render() {
        return(
            <View style={styles.container}>
          <View>
            <View style={styles.headerStyle}>
              <Ionicons
                name="ios-arrow-back"
                style={styles.goBackStyle}
                size={32}
              />
              <Text style={styles.headerTextStyle}>Trucker Radio</Text>
            </View>

            <ScrollView>
              <Image
                source={{
                  uri:
                    "http://abouttruckdriving.com/wp-content/uploads/2015/07/TD-Logo.jpg"
                }}
                style={styles.imageStyle}
              />
              <View style={styles.textViewStyle}>
                <Text style={styles.headingTextStyle}>
                  TD121: How to find a greate truck driving job
                </Text>
                <Text style={styles.textStyle}>Trucker Dump</Text>
              </View>
            </ScrollView>
          </View>

          <View style={styles.player}>
            <Text style={styles.durationLeft}>0:00</Text>
            <Text style={styles.durationRight}>63:00</Text>
          </View>
          <View style={styles.optionsView}>
            <Ionicons name="md-skip-backward" size={32} />
            <Ionicons name="md-play" size={32} />
            <Ionicons name="md-skip-forward" size={32} />
            <Ionicons name="md-thumbs-up" size={32}>
              <Text>129</Text>
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
    justifyContent: "space-between",
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
    marginBottom: 50,
  },
  player: {
    borderColor: "grey",
    borderBottomWidth: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  durationLeft: {
    alignItems: "flex-start",
    color: "grey",
    marginBottom: 10,
  },
  durationRight: {
    alignItems: "flex-end",
    color: "grey",
    marginBottom: 10,
  }
});

export default connect(null, {})(AlbumDetail);