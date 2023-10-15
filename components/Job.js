import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation} from 'react-navigation'; 


const Job = ({data, navigation}) => {


    const goToJobDetails = async (e) => {
        navigation.navigate('Details', {
            data: data
        });
    }

    return (
        <View style = {styles.jobContainer}>
            <TouchableOpacity onPress = {goToJobDetails}>
                <Text style={styles.baseText}>
                    <Text style={styles.titleText}>
                        {data.job.companyDisplayName}{'\n'}
                    </Text>
                    <View style = {styles.payAndJob}>
                        <View style = {styles.pay}>
                            <Text style = {{fontSize: 20}}>
                                <Text>{"Pay: $"}</Text>
                                <Text>{data.job.compensationInfo.entries[0].amount.units}</Text>
                            </Text>
                        </View>
                        <View style = {styles.job}>
                            <Text style = {{fontSize: 20}}>
                                <Text>{"Role: "}</Text>
                                <Text>{data.job.title}</Text>
                            </Text>
                        </View>
                        </View>
                        <Text style = {{fontSize: 20}}>
                            <Text>{"Location: "}</Text>
                            <Text>{data.job.addresses[0]}</Text>
                        </Text>
                </Text>
                </TouchableOpacity>
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
  
export default withNavigation(Job);