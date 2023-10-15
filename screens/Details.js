import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking } from 'react-native'
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const Details = ({route}) => {
    const data = route.params.data;
    const onClick = async (e) => {
        console.log("clicked")
        //Linking.openURL(data.job.applicationInfo.uris[0]);
    }
    return (
        <ScrollView>
            <View style = {styles.jobContainer}>
                <Text style={styles.baseText}>
                    <View style = {{flexDirection: "col"}}>
                        <View style = {{flexDirection: "row"}}>
                            <Text style={styles.titleText}>
                                {data.job.companyDisplayName}
                            </Text>
                            <Button title = "Apply" style = {styles.buttonStyle} onClick = {onClick()}/>
                        </View>
                            
                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Pay: "}</Text>
                            <Text>{"$"}{data.job.compensationInfo.entries[0].amount.units}</Text>
                        </Text>
                                
                                
                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Role: "}</Text>
                            <Text>{data.job.title}</Text>
                        </Text>
                                
                                
                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Location: "}</Text>
                            <Text>{data.job.addresses[0]}</Text>
                        </Text>

                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Posted: "}{'\n'}</Text>
                            <Text>{data.job.postingPublishTime}</Text>
                        </Text>

                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Description: "}{'\n'}</Text>
                            <Text>{data.job.description}</Text>
                        </Text>

                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Responsibilities: "}{'\n'}</Text>
                            <Text>{data.job.responsibilities}</Text>
                        </Text>

                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Qualifications: "}{'\n'}</Text>
                            <Text>{data.job.qualifications}</Text>
                        </Text>
                    </View>
                </Text>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Damascus',
        
      },
      titleText: {
        fontSize: 60,
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
    buttonStyle: {
        float: "right",
    }

    });
  
export default Details;