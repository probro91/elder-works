import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Pressable } from 'react-native';

const Details = ({route}) => {
    const data = route.params.data;
    return (
        <ScrollView>
            <View style = {styles.jobContainer}>
                <Text style={styles.baseText}>
                    <View style = {{flexDirection: "col"}}>
                        <View style = {{flexDirection: "row", justifyContent: 'space-around'}}>
                            <Text style={styles.titleText}>
                                {data.company}
                            </Text>
                            <Pressable style = {styles.buttonStyle} onPress = {() => {}}>
                                <Text style = {{color: "white", fontSize: 25}}>Apply</Text>
                            </Pressable>
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
    }

    });
  
export default Details;