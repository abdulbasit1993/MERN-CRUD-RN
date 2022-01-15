import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

const URL = 'http://192.168.0.111:5000/users/';

const UserList = () => {
  const [userData, setUserData] = useState([]);

  const getUserData = () => {
    axios
      .get(URL)
      .then(function (response) {
        // handle success
        // console.log('response ===> ', response.data);
        setUserData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const renderData = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.dataRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.itemStyle}>{item.name}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.itemStyle}>{item.email}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.itemStyle}>{item.phone}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Users List</Text>
      <FlatList data={userData} renderItem={renderData} />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
  },
  itemContainer: {
    backgroundColor: 'lightgreen',
    margin: 15,
    padding: 15,
  },
  dataRow: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 20,
  },
  itemStyle: {
    fontSize: 18,
  },
});
