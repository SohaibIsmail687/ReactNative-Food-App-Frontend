import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Icon} from 'native-base';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class dishes extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: width / 1.23,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              borderColor: 'lightgrey',
              borderWidth: 1.5,
              marginTop: 20,
              marginLeft: 10,
              height: 38,
              // shadowOffset: {width: 0, height: 2},
              // shadowOpacity: 0.25,
              // shadowRadius: 3.84,
              // elevation: 3,
            }}>
            <TextInput
              style={{
                width: '100%',
                alignSelf: 'center',
                height: 40,
                borderRadius: 8,
                paddingLeft: 40,
                color: 'darkgrey',
              }}
              placeholder="Search "
              placeholderTextColor="darkgrey"
            />
            <Icon
              name="search"
              type="Ionicons"
              style={{
                color: 'lightgrey',
                fontSize: 20,
                position: 'absolute',
                left: 10,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              marginLeft: 10,
              borderRadius: 50,
              backgroundColor: 'lightgrey',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              width: '11%',
            }}>
            <Icon
              name="filter-list"
              type="MaterialIcons"
              style={{
                color: 'white',
                fontSize: 30,
              }}
            />
          </View>
        </View>

        <View style={{width: width / 1.23, marginTop: 20, marginLeft: 10}}>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
            Discover new places
          </Text>
        </View>

        {/* Discover List */}
        <View style={{width: width}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{width: width / 1.8, marginLeft: 12}}>
              <Image
                style={{
                  width: '100%',
                  height: 280,
                  marginTop: 15,
                  borderRadius: 10,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/chocoCold.jpg')}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingTop: 10,
                  fontSize: 16,
                }}>
                Andy & Cindy's Diner
              </Text>

              <Text
                style={{
                  color: 'darkgrey',
                  fontWeight: 'bold',
                  paddingTop: 5,
                  fontSize: 12,
                }}>
                87 Botsford Circle Apt
              </Text>

              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="star"
                  type="MaterialIcons"
                  style={{
                    color: 'gold',
                    fontSize: 20,
                    paddingTop: 3,
                    // marginLeft: -5,
                  }}
                />
                <Text
                  style={{color: 'black', fontWeight: 'bold', paddingTop: 3}}>
                  4.8
                </Text>
                <Text style={{color: 'darkgrey', fontSize: 14, paddingTop: 3}}>
                  (233 ratings)
                </Text>
                <View
                  style={{
                    backgroundColor: 'orange',
                    width: 75,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 7,
                    borderRadius: 50,
                    marginTop: 3,
                  }}>
                  <Text style={{color: 'white', fontSize: 10}}>
                    Free Delievery
                  </Text>
                </View>
              </View>
            </View>

            {/* New item for ScrollView */}

            <View style={{width: width / 1.8, marginLeft: 12}}>
              <Image
                style={{
                  width: '100%',
                  height: 280,
                  marginTop: 15,
                  borderRadius: 10,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/eggs.jpg')}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingTop: 10,
                  fontSize: 16,
                }}>
                Andy & Cindy's Diner
              </Text>
              <Text
                style={{
                  color: 'darkgrey',
                  fontWeight: 'bold',
                  paddingTop: 5,
                  fontSize: 12,
                }}>
                87 Botsford Circle Apt
              </Text>

              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="star"
                  type="MaterialIcons"
                  style={{
                    color: 'gold',
                    fontSize: 20,
                    paddingTop: 3,
                    // marginLeft: -5,
                  }}
                />
                <Text
                  style={{color: 'black', fontWeight: 'bold', paddingTop: 3}}>
                  4.8
                </Text>
                <Text style={{color: 'darkgrey', fontSize: 14, paddingTop: 3}}>
                  (233 ratings)
                </Text>
                <View
                  style={{
                    backgroundColor: 'orange',
                    width: 75,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 7,
                    borderRadius: 50,
                    marginTop: 3,
                  }}>
                  <Text style={{color: 'white', fontSize: 10}}>
                    Free Delievery
                  </Text>
                </View>
              </View>
            </View>

            {/* New item for ScrollView */}

            <View style={{width: width / 1.8, marginLeft: 12}}>
              <Image
                style={{
                  width: '100%',
                  height: 280,
                  marginTop: 15,
                  borderRadius: 10,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/BBQ.jpg')}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingTop: 10,
                  fontSize: 16,
                }}>
                Andy & Cindy's Diner
              </Text>
              <Text
                style={{
                  color: 'darkgrey',
                  fontWeight: 'bold',
                  paddingTop: 5,
                  fontSize: 12,
                }}>
                87 Botsford Circle Apt
              </Text>

              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="star"
                  type="MaterialIcons"
                  style={{
                    color: 'gold',
                    fontSize: 20,
                    paddingTop: 3,
                  }}
                />
                <Text
                  style={{color: 'black', fontWeight: 'bold', paddingTop: 3}}>
                  4.8
                </Text>
                <Text style={{color: 'darkgrey', fontSize: 14, paddingTop: 3}}>
                  (233 ratings)
                </Text>
                <View
                  style={{
                    backgroundColor: 'orange',
                    width: 75,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 7,
                    borderRadius: 50,
                    marginTop: 3,
                  }}>
                  <Text style={{color: 'white', fontSize: 10}}>
                    Free Delievery
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Categories Heading */}

        <View
          style={{
            width: width,
            paddingVertical: 10,
            marginTop: 10,
            // backgroundColor: 'yellow',
          }}>
          <View
            style={{
              alignItems: 'center', //vertically adjust in flex-direction row
              justifyContent: 'space-between', //Horizonatally
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 21,
                fontWeight: 'bold',
                paddingLeft: 12,
              }}>
              Top categories
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Show all</Text>
              <Icon
                name="caretright"
                type="AntDesign"
                style={{fontSize: 11, paddingLeft: 3}}
              />
            </View>
          </View>
        </View>

        {/* Categories list */}
        <View style={{width: width, marginTop: 7}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <View
                style={{
                  marginLeft: 10,
                  width: width / 4.3,
                  height: 80,
                  backgroundColor: 'orange',
                  borderRadius: 10,
                  alignItems: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="hamburger"
                  type="FontAwesome5"
                  style={{fontSize: 40, color: 'white'}}
                />
              </View>
              <View style={{marginLeft: 18, marginTop: 5}}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                  Burgers
                </Text>
                <Text style={{color: 'darkgrey', paddingTop: 2}}>
                  1126 places
                </Text>
              </View>
            </View>

            {/* New category item */}

            <View>
              <View
                style={{
                  marginLeft: 15,
                  width: width / 4.3,
                  height: 80,
                  backgroundColor: 'cornflowerblue',
                  borderRadius: 10,
                  alignItems: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="ios-pizza"
                  type="Ionicans"
                  style={{fontSize: 40, color: 'white'}}
                />
              </View>
              <View style={{marginLeft: 18, marginTop: 5}}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                  Pizza
                </Text>
                <Text style={{color: 'darkgrey', paddingTop: 2}}>
                  365 places
                </Text>
              </View>
            </View>

            {/* New category item */}

            <View>
              <View
                style={{
                  marginLeft: 15,
                  width: width / 4.3,
                  height: 80,
                  backgroundColor: 'crimson',
                  borderRadius: 10,
                  alignItems: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="wine-bar"
                  type="MaterialIcons"
                  style={{fontSize: 40, color: 'white'}}
                />
              </View>
              <View style={{marginLeft: 18, marginTop: 5}}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                  Burgers
                </Text>
                <Text style={{color: 'darkgrey', paddingTop: 2}}>
                  1126 places
                </Text>
              </View>
            </View>

            {/* New Category Item */}

            <View>
              <View
                style={{
                  marginLeft: 15,
                  width: width / 4.3,
                  height: 80,
                  backgroundColor: 'lightseagreen',
                  borderRadius: 10,
                  alignItems: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="food-drumstick"
                  type="MaterialCommunityIcons"
                  style={{fontSize: 40, color: 'white'}}
                />
              </View>
              <View style={{marginLeft: 18, marginTop: 5}}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                  Burgers
                </Text>
                <Text style={{color: 'darkgrey', paddingTop: 2}}>
                  1126 places
                </Text>
              </View>
            </View>

            {/* New Category Item */}

            <View>
              <View
                style={{
                  marginLeft: 15,
                  width: width / 4.3,
                  height: 80,
                  backgroundColor: 'orange',
                  borderRadius: 10,
                  alignItems: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="hamburger"
                  type="FontAwesome5"
                  style={{fontSize: 40, color: 'white'}}
                />
              </View>
              <View style={{marginLeft: 18, marginTop: 5}}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                  Burgers
                </Text>
                <Text style={{color: 'darkgrey', paddingTop: 2}}>
                  1126 places
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default dishes;
