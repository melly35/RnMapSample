import React, {PureComponent, useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import axios from 'axios';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import MapView, {Marker} from 'react-native-maps';
import {SearchIcon} from '../assets/svg';
 

import Header from '../component/Header';

const HomeScreen = ({navigation, route}) => {
  const GOOGLE_MAP_KEY = '';
  const [marker, setMarker] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [textInputContainerStyle, setTextInputContainerStyle] =
    useState('#E5E7EA');

  let _GooglePlacesAutocomplete = useRef();

  const onFocus = () => {
    setTextInputContainerStyle('#fff');
  };

  const onBlur = () => {
    setTextInputContainerStyle('#E5E7EA');
  };

  let _map = useRef();
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.03421,
  });

  const getFiltered = details => {
    const postal_code = details.find(addressComponent =>
      addressComponent.types.includes('postal_code'),
    )?.short_name;

    const country = details.find(addressComponent =>
      addressComponent.types.includes('country'),
    )?.long_name;

    const administrative_area_level_1 = details.find(addressComponent =>
      addressComponent.types.includes('administrative_area_level_1'),
    )?.long_name;

    const administrative_area_level_2 = details.find(addressComponent =>
      addressComponent.types.includes('administrative_area_level_2'),
    )?.long_name;

    const administrative_area_level_3 = details.find(addressComponent =>
      addressComponent.types.includes('administrative_area_level_3'),
    )?.long_name;

    const administrative_area_level_4 = details.find(addressComponent =>
      addressComponent.types.includes('administrative_area_level_4'),
    )?.long_name;

    const sublocality_level_1 = details.find(addressComponent =>
      addressComponent.types.includes('sublocality_level_1'),
    )?.long_name;

    const locality = details.find(addressComponent =>
      addressComponent.types.includes('locality'),
    )?.long_name;

    setCountry(country);
    setPostalCode(postal_code !== undefined ? postal_code : '-');
    setProvince(
      locality !== undefined ? locality : administrative_area_level_1,
    );
    setDistrict(
      sublocality_level_1 !== undefined
        ? sublocality_level_1
        : administrative_area_level_2 ||
            administrative_area_level_3 ||
            administrative_area_level_4,
    );
  };

  const mapSet = geo => {
    let markerIn = {latitude: geo.location.lat, longitude: geo.location.lng};

    setMarker(markerIn);
    let newRegion = {
      latitude: geo.location.lat,
      longitude: geo.location.lng,
      latitudeDelta: geo.viewport.northeast.lat - geo.viewport.southwest.lat,
      longitudeDelta: geo.viewport.northeast.lng - geo.viewport.southwest.lng,
    };
    setInitialRegion(newRegion);
    _map.current.animateToRegion(newRegion, 1000);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Cities'} />
      <View style={[styles.mainContainer]}>
        <View style={[styles.formContainer]}>
          <View style={[styles.formRow, styles.zIndex]}>
            <GooglePlacesAutocomplete
              ref={_GooglePlacesAutocomplete}
              placeholder="Search"
              minLength={2} // minimum length of text to search
              autoFocus={false}
              fetchDetails={true}
              renderDescription={row => row.description}
              enablePoweredByContainer={false}
              onPress={(data, details = null) => {
                mapSet(details?.geometry);
                getFiltered(details.address_components);
              }}
              textInputProps={{
                onBlur: onBlur,
                onFocus: onFocus,
              }}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: GOOGLE_MAP_KEY,
                language: 'en', // language of the results
                types: 'geocode',
              }}
              renderLeftButton={() => {
                return <SearchIcon width={30} height={30} />;
              }}
              styles={{
                textInputContainer: {
                  backgroundColor: textInputContainerStyle,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 6,
                  padding: 8,
                },
                textInput: {
                  color: '#8D9093',
                  fontSize: 16,
                  alignSelf: 'center',
                  backgroundColor: 'transparent',
                  marginBottom: 0,
                },
                predefinedPlacesDescription: {
                  color: '#1faadb',
                },
                container: {
                  position: 'absolute',
                  width: '100%',
                  zIndex: 1,
                },
                separator: {
                  borderBottomWidth: 1,
                  borderColor: '#fff',
                },
                listView: {
                  marginTop: 1,
                },
              }}
              renderRow={(rowData, index) => {
                const title = rowData.structured_formatting.main_text;
                const address = rowData.structured_formatting.secondary_text;

                return (
                  <View style={{flexDirection: 'row'}}>
                    <SearchIcon width={16} height={16} />
                    <Text
                      style={styles.textResultDescription}
                      numberOfLines={1}>
                      {address}
                    </Text>
                  </View>
                );
              }}
            />
          </View>

          <View style={[styles.formRow]}>
            <View style={[styles.formCol, styles.mr5]}>
              <Text style={[styles.label]}>Country</Text>
              <TextInput
                style={[styles.input]}
                placeholder="Germany"
                value={country}
                onChangeText={setCountry}
                placeholderTextColor={'#8D9093'}
              />
            </View>

            <View style={[styles.formCol]}>
              <Text style={[styles.label]}>Province</Text>
              <TextInput
                style={[styles.input]}
                placeholder="Berlin"
                value={province}
                onChangeText={setProvince}
                placeholderTextColor={'#8D9093'}
              />
            </View>
          </View>

          <View style={[styles.formRow]}>
            <View style={[styles.formCol, styles.mr5]}>
              <Text style={[styles.label]}>District</Text>
              <TextInput
                style={[styles.input]}
                placeholder="Mitte"
                value={district}
                onChangeText={setDistrict}
                placeholderTextColor={'#8D9093'}
              />
            </View>

            <View style={[styles.formCol]}>
              <Text style={[styles.label]}>Post Code</Text>
              <TextInput
                style={[styles.input]}
                placeholder="10115"
                value={postalCode}
                onChangeText={setPostalCode}
                placeholderTextColor={'#8D9093'}
              />
            </View>
          </View>
        </View>

        <View style={[styles.mapContainer, {}]}>
          <MapView ref={_map} style={[styles.mapView]} region={initialRegion}>
            <Marker coordinate={marker} title={'Title'} />
          </MapView>
        </View>
      </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F3F6',
  },

  textResultDescription: {
    marginLeft: 10,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },

  mainContainer: {
    flex: 1,
    padding: 20,
  },

  formContainer: {
    flex: 1.3,
    justifyContent: 'flex-start',
    marginBottom: 30,
  },

  mapContainer: {
    flex: 1,
  },

  formRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
  },

  mr5: {
    marginRight: 15,
  },

  zIndex: {zIndex: 1},

  formCol: {
    flex: 1,
  },

  mapView: {
    flex: 1,
  },

  input: {
    backgroundColor: '#E5E7EA',
    color: '#171717',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 16,
  },

  label: {
    color: '#171717',
    fontSize: 16,
    marginBottom: 6,
  },
});

export default HomeScreen;
