import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class foodinfo extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{width: width}}>
          <Image
            style={{
              width: '100%',
              height: 300,
              resizeMode: 'stretch',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={require('../assets/loginHeader.jpg')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              fontWeight: 'bold',
              paddingLeft: 15,
              paddingTop: 15,
            }}>
            Chocolat' N Spice
          </Text>
          <View
            style={{
              paddingLeft: 15,
              paddingTop: 5,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon
              name="md-location-sharp"
              type="Ionicons"
              style={{fontSize: 15, color: 'lightgrey'}}
            />
            <Text
              style={{
                color: 'lightgrey',
                fontWeight: 'bold',
                paddingLeft: 5,
              }}>
              03 Jameson Manors Apt. 177{' '}
            </Text>
          </View>
          <View style={{flexDirection: 'row', paddingLeft: 15, paddingTop: 15}}>
            <View
              style={{
                backgroundColor: 'orange',
                borderRadius: 12,
                width: width / 3.7,
                height: 21,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{}}>Free delievery</Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                borderLeftWidth: 1,
                borderColor: 'lightgrey',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{paddingLeft: 10, color: 'grey'}}>33 min</Text>
            </View>

            <View
              style={{
                marginLeft: 10,
                borderLeftWidth: 1,
                borderColor: 'lightgrey',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{paddingLeft: 10, color: 'grey'}}>27 miles</Text>
            </View>
          </View>
        </View>

        {/* Another View Starting here */}

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'whitesmoke',
            alignItems: 'center',
            width: width,
            paddingVertical: 18,
            marginTop: 15,
            paddingLeft: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                borderRightWidth: 1,
                borderColor: 'lightgrey',
                paddingRight: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'gold',
                  borderRadius: 50,
                  height: 35,
                  width: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="star"
                  type="FontAwesome"
                  style={{
                    fontSize: 20,
                    color: 'white',
                  }}
                />
              </View>

              <View style={{paddingLeft: 10}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>4.5</Text>
                <Text style={{color: 'grey'}}>Ratings</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingLeft: 10}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                borderRightWidth: 1,
                borderColor: 'lightgrey',
                paddingRight: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'maroon',
                  borderRadius: 50,
                  height: 35,
                  width: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="bookmark"
                  type="Ionicons"
                  style={{
                    fontSize: 20,
                    color: 'white',
                  }}
                />
              </View>

              <View style={{paddingLeft: 10}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>4.5</Text>
                <Text style={{color: 'grey'}}>Bookmarks</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingLeft: 10}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                // borderRightWidth: 1,
                // borderColor: 'lightgrey',
                // paddingRight: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'dodgerblue',
                  borderRadius: 50,
                  height: 35,
                  width: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="image-inverted"
                  type="Entypo"
                  style={{
                    fontSize: 20,
                    color: 'white',
                  }}
                />
              </View>

              <View style={{paddingLeft: 10}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>346</Text>
                <Text style={{color: 'grey'}}>Photo</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Text Heading */}
        <View style={{paddingLeft: 15, paddingTop: 10}}>
          <Text style={{color: 'black', fontSize: 17}}>
            From the Italian countryside, to your doostep. PAUL was founded in
            1989 as a family bakery and patisserie. Savour a selection of
            viennoiseirie (croissants etc,)....
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 23,
              fontWeight: 'bold',
              paddingTop: 10,
            }}>
            Photo
          </Text>
        </View>

        {/* ----------Photos View ---------*/}
        <View
          style={{
            flexDirection: 'row',
            width: width,
            paddingLeft: 12,
            paddingTop: 3,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              style={{
                width: width / 4,
                height: 85,
                borderRadius: 5,
              }}
              source={require('../assets/BBQ.jpg')}
            />
            <View style={{paddingLeft: 7}}>
              <Image
                style={{
                  width: width / 4,
                  height: 85,
                  borderRadius: 5,
                  paddingHorizontal: 5,
                }}
                source={require('../assets/Burger.jpg')}
              />
            </View>

            <View style={{paddingLeft: 7}}>
              <Image
                style={{
                  width: width / 4,
                  height: 85,
                  borderRadius: 5,
                  paddingHorizontal: 5,
                }}
                source={require('../assets/eggs.jpg')}
              />
            </View>

            <View style={{paddingLeft: 7}}>
              <Image
                style={{
                  width: width / 4,
                  height: 85,
                  borderRadius: 5,
                  paddingHorizontal: 5,
                }}
                source={require('../assets/chocoCold.jpg')}
              />
            </View>

            <View style={{paddingLeft: 7}}>
              <Image
                style={{
                  width: width / 4,
                  height: 85,
                  borderRadius: 5,
                  paddingHorizontal: 5,
                }}
                source={require('../assets/loginHeader.jpg')}
              />
            </View>

            <View style={{paddingLeft: 7}}>
              <Image
                style={{
                  width: width / 4,
                  height: 85,
                  borderRadius: 5,
                  paddingHorizontal: 5,
                }}
                source={require('../assets/BBQ.jpg')}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default foodinfo;
