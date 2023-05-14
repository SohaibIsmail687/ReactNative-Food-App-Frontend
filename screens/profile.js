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

class profile extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'whitesmoke',
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 0.3,
            width: width,
            height: 200,
            paddingLeft: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: width / 4, paddingVertical: 55}}>
              <Image
                style={{width: '100%', height: 90, borderRadius: 50}}
                source={require('../assets/Sonam.jpg')}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <View
                style={{
                  paddingLeft: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: '65%',
                  }}
                  numberOfLines={1}>
                  Sonam Bajwa hkjajskdkasjkldjskd
                </Text>
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  marginTop: 5,
                  width: width / 4,
                  height: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'maroon',
                  borderRadius: 5,
                }}>
                <Icon
                  name="crown"
                  type="FontAwesome5"
                  style={{color: 'white', fontSize: 11}}
                />
                <Text style={{color: 'white', paddingLeft: 5, fontSize: 10}}>
                  VIP member
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* List View starting here */}
        <View style={{marginTop: 20, marginLeft: 20, width: width}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: 'maroon',
                width: width / 10.5,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Icon
                name="bell"
                type="MaterialCommunityIcons"
                style={{color: 'white', fontSize: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{}}>
                <Text style={{color: 'black', fontSize: 16, paddingLeft: 20}}>
                  Notifications
                </Text>
              </View>
              <View style={{marginLeft: 170}}>
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{color: 'grey', fontSize: 15}}
                />
              </View>
            </View>
          </View>

          {/* Payment method */}

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                backgroundColor: 'skyblue',
                width: width / 10.5,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Icon
                name="comment-dollar"
                type="FontAwesome5"
                style={{color: 'white', fontSize: 20}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'black', fontSize: 16, paddingLeft: 20}}>
                Payment Method
              </Text>
            </View>
            <View style={{justifyContent: 'center', paddingLeft: 140}}>
              <Icon
                name="right"
                type="AntDesign"
                style={{color: 'grey', fontSize: 15}}
              />
            </View>
          </View>

          {/* Reward Credits */}

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                backgroundColor: 'dodgerblue',
                width: width / 10.5,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={{color: 'white', fontSize: 20}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'black', fontSize: 16, paddingLeft: 20}}>
                Reward Credits
              </Text>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 150}}>
              <Icon
                name="right"
                type="AntDesign"
                style={{color: 'grey', fontSize: 15}}
              />
            </View>
          </View>

          {/* My Promo Code */}

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                backgroundColor: 'orange',
                width: width / 10.5,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Icon
                name="qrcode"
                type="FontAwesome"
                style={{color: 'white', fontSize: 20}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'black', fontSize: 16, paddingLeft: 20}}>
                My Promo Code
              </Text>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 145}}>
              <Icon
                name="right"
                type="AntDesign"
                style={{color: 'grey', fontSize: 15}}
              />
            </View>
          </View>

          {/* Setting */}

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                backgroundColor: 'black',
                width: width / 10.5,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Icon
                name="settings-sharp"
                type="Ionicons"
                style={{color: 'white', fontSize: 20}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'black', fontSize: 16, paddingLeft: 20}}>
                Settings
              </Text>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 200}}>
              <Icon
                name="right"
                type="AntDesign"
                style={{color: 'grey', fontSize: 15}}
              />
            </View>
          </View>

          {/* Invite Friends */}

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                backgroundColor: 'green',
                width: width / 10.5,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Icon
                name="user-friends"
                type="FontAwesome5"
                style={{color: 'white', fontSize: 20}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'black', fontSize: 16, paddingLeft: 20}}>
                Invite Friends
              </Text>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 160}}>
              <Icon
                name="right"
                type="AntDesign"
                style={{color: 'grey', fontSize: 15}}
              />
            </View>
          </View>

          {/* Help Centre */}

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                backgroundColor: 'gold',
                width: width / 10.5,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Icon
                name="headphone"
                type="Fontisto"
                style={{color: 'white', fontSize: 20}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'black', fontSize: 16, paddingLeft: 20}}>
                Help Centre
              </Text>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 175}}>
              <Icon
                name="right"
                type="AntDesign"
                style={{color: 'grey', fontSize: 15}}
              />
            </View>
          </View>

          {/* About Us*/}

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                backgroundColor: 'dodgerblue',
                width: width / 10.5,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Icon
                name="exclamationcircle"
                type="AntDesign"
                style={{color: 'white', fontSize: 20}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'black', fontSize: 16, paddingLeft: 20}}>
                About Us
              </Text>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 190}}>
              <Icon
                name="right"
                type="AntDesign"
                style={{color: 'grey', fontSize: 15}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default profile;
