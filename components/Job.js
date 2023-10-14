import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Job = ({data, navigation}) => {

    const goToJobDetails = async (e) => {
        navigation.navigate('Job', {data: data, navigation: navigation});
    }
    return (
        <View style = {styles.jobContainer} onClick = {goToJobDetails}>
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>
                    {data.company}{'\n'}
                </Text>
                <View style = {styles.payAndJob}>
                    <View style = {styles.pay}>
                        <Text style = {{fontSize: 20}}>
                            <Text>{"Pay: $"}</Text>
                            <Text>{data.Pay}</Text>
                        </Text>
                    </View>
                    <View style = {styles.job}>
                        <Text style = {{fontSize: 20}}>
                            <Text>{"Role: "}</Text>
                            <Text>{data.Job}</Text>
                        </Text>
                    </View>
                </View>
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
  
export default Job;