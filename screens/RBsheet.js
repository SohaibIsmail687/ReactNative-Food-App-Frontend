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
import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogFooter,
  DialogButton,
  DialogTitle,
} from 'react-native-popup-dialog';
import ImageLoad from 'react-native-image-placeholder';
import RBSheet from 'react-native-raw-bottom-sheet';
import * as ImagePicker from 'react-native-image-picker';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class RBsheet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      date: '',
      description: '',
      data: [],
      popup_task: '',
      popup_date: '',
      popup_desc: '',
      img: null,
      visible: false,
    };
  }

  uploadimage1 = async () => {
    this.RBSheet1.close();
    ImagePicker.launchImageLibrary(
      {noData: true, mediaType: 'photo', allowsEditing: true, quality: 0.7},
      response => {
        // console.log('response =', response);
        if (response.didCancel) {
          console.log('user cancelled  image picker');
        } else if (response.error) {
          console.log('imagepicker error : ', response.error);
        } else if (response.customButton) {
          console.log('user tapped  custom button : ', response.customButton);
        } else {
          console.log('outdoor image ', response.assets[0].uri);

          let text = response.assets[0].uri;
          console.log('outdoor image1111111111 ', text);

          this.setState({img: text, imagecheck: true});
        }
      },
    );
  };

  Check_PlatForm = () => {
    if (Platform.OS === 'ios') {
      this.uploadimage_Camera_1();
      console.log('Platform Ios');
    } else {
      this.requestCameraPermission_1();
      console.log('Platform Android');
    }
  };

  popup_open_func = (task, date, description) => {
    this.setState({
      popup_task: task,
      popup_date: date,
      popup_desc: description,
    });
    console.log('Task:', task);
    console.log('Date:', date);
    console.log('Description:', description);

    setTimeout(() => {
      this.setState({visible: true});
    }, 100);
  };

  popup_close_func = () => {
    this.setState({visible: false});
  };

  Add_button = () => {
    // console.log('Task:', this.state.Task);
    // console.log('Date:', this.state.Date);
    // console.log('Description:', this.state.Description);

    let obj_button = {
      task: this.state.task,
      date: this.state.date,
      description: this.state.description,
      image: this.state.img,
    };
    this.state.data.push(obj_button);
    console.log('Data Added:', this.state.data);
    this.setState({task: '', date: '', description: '', img: null});
  };

  createlist = () => {
    let table = [];
    let record = this.state.data;
    let len = record.length;

    if (record != 'fail') {
      for (let i = 0; i < len; i++) {
        let task = record[i].task;
        let date = record[i].date;
        let description = record[i].description;
        let image = record[i].image;

        table.push(
          <View>
            {
              <View>
                <TouchableOpacity
                  onPress={() => this.popup_open_func(task, date, description)}
                  activeOpacity={0.8}
                  style={{
                    width: width / 1.1,
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                    padding: 10,
                    backgroundColor: 'whitesmoke',
                    marginTop: 10,
                    borderRadius: 8,
                    borderColor: 'dodgerblue',
                    borderWidth: 1.5,
                    borderTopRightRadius: 12,
                    borderBottomLeftRadius: 12,
                  }}>
                  <ImageLoad
                    style={{
                      width: 50,
                      height: 50,
                    //   borderWidth: 2,
                      borderRadius: 150,
                      alignSelf: 'center',
                    //   borderColor: '#FCC564',
                    }}
                    loadingStyle={{size: 'large', color: 'blue'}}
                    source={{uri: image}}
                    borderRadius={150}
                    resizeMode='stretch'
                    placeholderStyle={{
                      width: 50,
                      height: 50,
                      borderWidth: 2,
                      borderRadius: 150,
                      borderColor: '#FCC564',
                    }}
                  />
                  {/* <Icon
                    name="ios-checkbox-outline"
                    type="Ionicons"
                    style={{color: 'black', fontSize: 30}}
                  /> */}

                  <View style={{width: '80%', paddingLeft: 10}}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 16,
                        maxWidth: '80%',
                      }}
                      numberOfLines={1}>
                      {task}
                    </Text>

                    <Text
                      allowFontScaling={false}
                      style={{color: 'black', fontSize: 14}}>
                      {date}
                    </Text>

                    <Text
                      allowFontScaling={false}
                      style={{color: 'black', fontSize: 14}}>
                      {description}
                    </Text>
                  </View>
                  {/* <Icon
                    name="circle-with-cross"
                    type="Entypo"
                    style={{color: 'black', fontSize: 30}}
                  /> */}
                </TouchableOpacity>
                {/* <Text allowFontScaling={false} style={{ color: 'gray', fontSize: 14, textAlign: 'right', marginRight: 10 }}>{time}</Text> */}
              </View>
            }
          </View>,
        );
      }
      return table;
    } else {
      let img = [];
      img.push(
        <View style={{flex: 1, justifyContent: 'center'}}>
          {<View></View>}
        </View>,
      );
      return img;
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'dodgerblue',
              paddingVertical: 15,
              paddingHorizontal: 15,
            }}>
            <Icon
              name="check-circle"
              type="MaterialCommunityIcons"
              style={{color: 'white', fonttSize: 20}}
            />
            <Text
              style={{
                paddingLeft: 15,
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
              }}>
              Add Lists
            </Text>
          </View>

          <View>
            {this.state.img == null ? (
              <TouchableOpacity
                onPress={() => this.RBSheet1.open()}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#e6e6e6',
                  alignSelf: 'center',
                  marginTop: 15,
                }}
                activeOpacity={0.8}>
                <Icon
                  name="camera"
                  type="AntDesign"
                  style={{color: 'gray', fontSize: 40}}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.RBSheet1.open()}
                activeOpacity={0.8}>
                <ImageLoad
                  style={{
                    width: 70,
                    height: 70,
                    marginTop: 15,
                    // borderWidth: 2,
                    borderRadius: 150,
                    alignSelf: 'center',
                    // borderColor: '#FCC564',
                  }}
                  loadingStyle={{size: 'large', color: 'blue'}}
                  source={{uri: this.state.img}}
                  borderRadius={150}
                  resizeMode='stretch'
                  placeholderStyle={{
                    width: 50,
                    height: 50,
                    marginTop: 15,
                    borderWidth: 2,
                    borderRadius: 150,
                    borderColor: '#FCC564',
                  }}
                />
              </TouchableOpacity>
            )}
          </View>

          <View
            style={{paddingHorizontal: 15, paddingTop: 20, width: width / 1}}>
            <Text
              style={{color: 'dodgerblue', fontWeight: 'bold', fontSize: 16}}>
              What is to be done?
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                borderColor: 'dodgerblue',
                paddingBottom: 1,
                fontSize: 18,
                color: 'black',
              }}
              placeholder="Enter Task Here"
              placeholderTextColor="grey"
              onChangeText={task => this.setState({task})}
              value={this.state.task}
            />

            <Text
              style={{
                color: 'dodgerblue',
                fontWeight: 'bold',
                fontSize: 16,
                paddingTop: 20,
              }}>
              Due Date
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                borderColor: 'dodgerblue',
                paddingBottom: 1,
                fontSize: 18,
                color: 'black',
              }}
              placeholder="Enter Date Here"
              placeholderTextColor="grey"
              onChangeText={date => this.setState({date})}
              value={this.state.date}
            />

            <Text
              style={{
                color: 'dodgerblue',
                fontWeight: 'bold',
                fontSize: 16,
                paddingTop: 20,
              }}>
              Description
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                borderColor: 'dodgerblue',
                paddingBottom: 1,
                fontSize: 18,
                color: 'black',
              }}
              placeholder="Enter Description Here"
              placeholderTextColor="grey"
              onChangeText={description => this.setState({description})}
              value={this.state.description}
            />
            <TouchableOpacity onPress={() => this.Add_button()}>
              <View
                style={{
                  backgroundColor: 'dodgerblue',
                  marginTop: 15,
                  width: width / 4,
                  alignItems: 'center',
                  paddingVertical: 12,
                  borderRadius: 5,
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  Add
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'dodgerblue',
              paddingVertical: 15,
              marginTop: 15,
              paddingHorizontal: 15,
            }}>
            <Icon
              name="check-circle"
              type="MaterialCommunityIcons"
              style={{color: 'white', fonttSize: 20}}
            />
            <Text
              style={{
                paddingLeft: 15,
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
              }}>
              Added Lists
            </Text>
          </View>

          {this.createlist()}
        </ScrollView>

        {/* Here starts the popup code */}

        <Dialog
          style={{backgroundColor: 'black', padding: 0}}
          width={'90%'}
          visible={this.state.visible}
          dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}>
          <DialogContent
            style={{paddingLeft: 0, paddingRight: 0, paddingBottom: 0}}>
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20,
                alignItems: 'center',
                backgroundColor: 'dodgerblue',
                width: 80,
                height: 80,
                borderRadius: 80,
              }}>
              <Icon
                name="done"
                type="MaterialIcons"
                style={{color: 'white', fontSize: 50}}
              />
            </View>

            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              {this.state.popup_task}
            </Text>

            <Text
              style={{
                fontSize: 13,
                textAlign: 'center',
                color: 'gray',
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              {this.state.popup_date}
            </Text>
            <Text
              style={{
                fontSize: 13,
                textAlign: 'center',
                color: 'gray',
                fontWeight: 'bold',
                marginTop: 3,
              }}>
              {this.state.popup_desc}
            </Text>

            <TouchableOpacity
              onPress={() => {
                this.popup_close_func();
              }}
              style={{
                width: '85%',
                marginBottom: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                backgroundColor: 'dodgerblue',
                paddingVertical: 15,
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
            </TouchableOpacity>
          </DialogContent>
        </Dialog>

        {/* Here Starts the RBSheet */}

        <RBSheet
          ref={ref => {
            this.RBSheet1 = ref;
          }}
          height={230}
          openDuration={200}
          customStyles={{
            container: {
              paddingHorizontal: 20,
            },
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
              Choose an action
            </Text>

            <View style={{flexDirection: 'row', marginTop: 30}}>
              <TouchableOpacity
                onPress={() => this.uploadimage1()}
                activeOpacity={0.6}>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="images"
                    type="Entypo"
                    color="white"
                    style={{fontSize: 30, color: 'black'}}
                  />
                  <Text
                    style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                    Gallery
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.Check_PlatForm()}
                activeOpacity={0.6}>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    type="Entypo"
                    color="white"
                    style={{fontSize: 30, color: 'black'}}
                  />
                  <Text
                    style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                    Camera
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
    );
  }
}
export default RBsheet;
