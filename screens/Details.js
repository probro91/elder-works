import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const Details = ({route}) => {
    const data = route.params.data;
    return (
        <ScrollView>
            <View style = {styles.jobContainer}>
                <Text style={styles.baseText}>
                    <View style = {{flexDirection: "col"}}>
                        <View style = {{flexDirection: "row"}}>
                            <Text style={styles.titleText}>
                                {data.company}
                            </Text>
                            <Button title = "Apply" style = {styles.buttonStyle} onPress = {() => {}}/>
                        </View>
                            
                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Pay: "}</Text>
                            <Text>{"$"}{data.Pay}</Text>
                        </Text>
                                
                                
                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Role: "}</Text>
                            <Text>{data.Job}</Text>
                        </Text>
                                
                                
                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Location: "}</Text>
                            <Text>{data.location}</Text>
                        </Text>

                        <Text style = {{fontSize: 30, paddingVertical: 5}}>
                            <Text style = {{fontWeight: "bold"}}>{"Description: "}{'\n'}</Text>
                            <Text>{data.description}</Text>
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