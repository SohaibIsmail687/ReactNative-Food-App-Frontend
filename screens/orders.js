import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {Actions, Lightbox} from 'react-native-router-flux';
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class orders extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 10,
            paddingTop: 15,
            backgroundColor: 'white',
          }}>
          <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>
            My Order
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            width: width / 1.1,
            alignSelf: 'center',
            borderRadius: 8,
            borderColor: 'lightgrey',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: 'black',
              paddingLeft: 20,
              paddingTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Little Creatures - Club Street
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 20,
              paddingTop: 8,
              alignItems: 'center',
            }}>
            <Icon
              name="ios-location"
              type="Ionicons"
              style={{fontSize: 15, color: 'grey'}}
            />
            <Text style={{color: 'grey', paddingLeft: 10}}>
              856 Esta Underpass
            </Text>
            <View
              style={{
                backgroundColor: 'orange',
                marginLeft: 15,
                width: width / 3.6,
                borderRadius: 30,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Free delievery</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              paddingLeft: 15,
              borderBottomLeftRadius: 7,
              borderBottomRightRadius: 7,
              paddingRight: 10,
            }}>
            <View
              style={{
                marginTop: 10,
                borderBottomWidth: 0.74,
                borderColor: 'lightgrey',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  paddingTop: 10,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Special Gajanand Bhel
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text numberOfLines={1} style={{color: 'grey', width: '85%'}}>
                  Mixed vegetables, Chicken Egg
                </Text>
                <Text style={{color: 'grey', width: '17%'}}>$ 17.20</Text>
              </View>
            </View>

            {/* Cold Bournvita */}

            <View
              style={{
                borderBottomWidth: 0.27,
                borderColor: 'lightgrey',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  paddingTop: 10,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Cold Bournvita
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'grey'}}>Extra hot Mild</Text>

                <Text style={{color: 'grey', paddingLeft: 5}}>$ 15.00</Text>
              </View>
            </View>

            {/* Cold Bournvita */}

            <View
              style={{
                borderBottomWidth: 0.27,
                borderColor: 'lightgrey',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  paddingTop: 10,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Cold Bournvita
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'grey'}}>Extra hot Mild</Text>
                <Text style={{color: 'grey'}}>$ 15.00</Text>
              </View>
            </View>

            {/* Add More Items */}

            <View
              style={{
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  color: 'maroon',
                  paddingTop: 10,
                  paddingBottom: 16,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Add more items
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 20,
            width: width,
            position: 'absolute',
            bottom: 0,
            paddingBottom: 15,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{color: 'dimgrey', fontSize: 17, fontWeight: 'bold'}}>
              Subtotal
            </Text>
            <Text style={{color: 'dimgrey', fontSize: 17, fontWeight: 'bold'}}>
              $ 93.40
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{color: 'dimgrey', fontSize: 17, fontWeight: 'bold'}}>
              Tax & Fees
            </Text>
            <Text style={{color: 'dimgrey', fontSize: 17, fontWeight: 'bold'}}>
              $ 02.00
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              marginTop: 10,
            }}>
            <Text style={{color: 'dimgrey', fontSize: 17, fontWeight: 'bold'}}>
              Delievery
            </Text>
            <Text
              style={{
                color: 'dimgrey',
                fontSize: 17,
                fontWeight: 'bold',
                paddingBottom: 10,
              }}>
              Free
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              paddingLeft: 100,
              marginTop: 12,
              backgroundColor: 'orange',
              height: 40,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              Continue
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                paddingLeft: 40,
              }}>
              $95.40
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default orders;
