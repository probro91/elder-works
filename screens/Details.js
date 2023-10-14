import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Details = ({route}) => {
    const data = route.params.data;
    return (
        <View style = {styles.jobContainer}>
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>
                    {data.company}{'\n'}
                </Text>
                    
                <Text style = {{fontSize: 20}}>
                    <Text>{"Pay: $"}</Text>
                    <Text>{data.Pay}</Text>
                </Text>
                        
                        
                <Text style = {{fontSize: 20}}>
                    <Text>{"Role: "}</Text>
                    <Text>{data.Job}</Text>
                </Text>
                        
                        
                <Text style = {{fontSize: 20}}>
                    <Text>{"Location: "}</Text>
                    <Text>{data.location}</Text>
                </Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Damascus',
      },
      titleText: {
        fontSize: 40,
        fontWeight: 'bold',
      },    
    jobContainer: {
        backgroundColor: '#F7F3E3' ,
        alignItems: 'left',
        border: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        margin: 5,
        width: 410,
        paddingLeft: 10,
        paddingVertical: 5,
    },
    pay: {
        width: "50%",
        flexDirection: "row",
    },
    job: {
        width: "50%",
        flexDirection: "row",
    },
    payAndJob: {
        flexDirection: "row",
    }

    });
  
export default Details;