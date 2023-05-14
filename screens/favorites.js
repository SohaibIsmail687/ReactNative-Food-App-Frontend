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

class favorites extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              paddingTop: 15,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            My Favourite
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              width: width / 1.6,
              height: 40,
              borderColor: 'lightgrey',
              borderWidth: 1,
              borderRadius: 20,
              marginBottom: 15,
            }}>
            <View
              style={{
                backgroundColor: 'orange',
                justifyContent: 'center',
                width: '55%',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', fontSize: 15}}>Places</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '45%',
                borderRadius: 20,
              }}>
              <Text style={{color: 'grey', fontSize: 15}}>Food</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            width: width / 1.1,
            paddingVertical:17,
            alignSelf:'center',
            paddingHorizontal:15,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 10,
            shadowOffset: 5,
            shadowOpacity: 5,
            shadowColor: 'gray',
            elevation: 5,
          }}>
            <Image
              style={{
                width: 90,
                height: 90,
                resizeMode: 'stretch',
                borderRadius: 5,
              }}
              source={require('../assets/BBQ.jpg')}
            />
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                  width:'70%'
                }} numberOfLines={2}>
                Little Creatures - Club street
              </Text>
              <Icon
                name="bookmark"
                type="Ionicons"
                style={{color: 'crimson', fontSize: 25, paddingLeft: 10}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 3,
                alignItems: 'center',
              }}>
              <Icon
                name="location-on"
                type="MaterialIcons"
                style={{color: 'grey', fontSize: 12, paddingLeft: 10}}
              />
              <Text
                style={{
                  color: 'grey',
                  paddingLeft: 10,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                856 Esta Underpass
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 3,
                alignItems: 'center',
              }}>
              <Icon
                name="star"
                type="FontAwesome"
                style={{color: 'gold', fontSize: 12, paddingLeft: 10}}
              />
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 10,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                4.8
                <Text
                  style={{color: 'grey', fontSize: 12, fontWeight: 'normal'}}>
                  {' '}
                  (233 ratings){' '}
                </Text>
              </Text>
              <View
                style={{
                  backgroundColor: 'orange',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '35%',
                  height: 20,
                  marginLeft: 5,
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: 12}}>Free delievery</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Another View */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            width: width / 1.1,
            height: 130,
            marginHorizontal: 15,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 10,
            shadowOffset: 5,
            shadowOpacity: 5,
            shadowColor: 'black',
            elevation: 20,
            shadowColor: 'black',
          }}>
          <View style={{width: width / 3.5, paddingLeft: 15}}>
            <Image
              style={{
                width: '100%',
                height: 90,
                resizeMode: 'stretch',
                borderRadius: 5,
              }}
              source={require('../assets/loginHeader.jpg')}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Yanti Nasi Padang
              </Text>
              <Icon
                name="bookmark"
                type="Ionicons"
                style={{color: 'crimson', fontSize: 25, paddingLeft: 10}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 22,
                alignItems: 'center',
              }}>
              <Icon
                name="location-on"
                type="MaterialIcons"
                style={{color: 'grey', fontSize: 12, paddingLeft: 10}}
              />
              <Text
                style={{
                  color: 'grey',
                  paddingLeft: 10,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                856 Esta Underpass
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 3,
                alignItems: 'center',
              }}>
              <Icon
                name="star"
                type="FontAwesome"
                style={{color: 'gold', fontSize: 12, paddingLeft: 10}}
              />
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 10,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                4.8
                <Text
                  style={{color: 'grey', fontSize: 12, fontWeight: 'normal'}}>
                  {' '}
                  (233 ratings){' '}
                </Text>
              </Text>
              <View
                style={{
                  backgroundColor: 'orange',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '35%',
                  height: 20,
                  marginLeft: 5,
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: 12}}>Free delievery</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Another View */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            width: width / 1.1,
            height: 130,
            marginHorizontal: 15,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 10,
            shadowOffset: 5,
            shadowOpacity: 5,
            shadowColor: 'gray',
            elevation: 5,
          }}>
          <View style={{width: width / 3.5, paddingLeft: 15}}>
            <Image
              style={{
                width: '100%',
                height: 90,
                resizeMode: 'stretch',
                borderRadius: 5,
              }}
              source={require('../assets/eggs.jpg')}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Tiong Bahru {'\n'}Bakery
              </Text>
              <Icon
                name="bookmark"
                type="Ionicons"
                style={{color: 'crimson', fontSize: 25, paddingLeft: 50}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 3,
                alignItems: 'center',
              }}>
              <Icon
                name="location-on"
                type="MaterialIcons"
                style={{color: 'grey', fontSize: 12, paddingLeft: 10}}
              />
              <Text
                style={{
                  color: 'grey',
                  paddingLeft: 10,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                856 Esta Underpass
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 3,
                alignItems: 'center',
              }}>
              <Icon
                name="star"
                type="FontAwesome"
                style={{color: 'gold', fontSize: 12, paddingLeft: 10}}
              />
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 10,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                4.8
                <Text
                  style={{color: 'grey', fontSize: 12, fontWeight: 'normal'}}>
                  {' '}
                  (233 ratings){' '}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default favorites;
