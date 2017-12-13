import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 40.7128;
const LONGITUDE = -74.0060;
const LATITUDE_DELTA = 74.0060;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class StaticMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={styles.scrollview}
        >

          <MapView
            provider={this.props.provider}
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={this.state.region}
          >
            <MapView.Marker
              title="This is a title"
              description="This is a description"
              coordinate={this.state.region}
            />
          </MapView>

        </ScrollView>
      </View>
    );
  }
}

StaticMap.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  map: {
    width: 250,
    height: 250,
  },
});

//module.exports = StaticMap;
export default StaticMap;
