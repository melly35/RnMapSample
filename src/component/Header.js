import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const Header = props => { 

  return (
    <View style={[styles.hContainer]}>
      <Text style={[styles.hTitle]}>{props.title}</Text>

      <View style={[styles.ppContainer]}>
        <Image
          style={[styles.ppBox]}
          source={require('../assets/image/pp.png')}
        />
        <View style={[styles.badge]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  hTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  ppContainer: {},

  ppBox: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  badge: {
    position: 'absolute',
    right: -2,
    top: -2,
    backgroundColor: '#EF550A',
    width: 14,
    height: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default Header;
