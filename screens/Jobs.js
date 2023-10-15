import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, Button } from 'react-native';
import Job from '../components/Job';
import { Slider } from '@react-native-assets/slider';

const Jobs = ({navigation}) => {

    async function getJobs(searchCriteria) {
        try {
            const response = await fetch('http://localhost:3000', 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(searchCriteria)
            });
            const data = await response.json();
            console.log(data);
        }
        catch (err){
            console.log("error");
            console.log(err);
        }
    }

    const jobList = require('../jobSearchResults.json');
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [radius, setRadius] = useState(50);

    const onClick = (e) => {
        console.log(keyword);
        console.log(location);
        console.log(radius);
        //e.preventDefault();
        if(!keyword) {
            alert("Please add a keyword")
            return
        }
        if(!location) {
            alert("Please add a location")
            return
        }
        if(!radius) {
            alert("Please add a radius")
            return
        }

        const searchCriteria = {
            keyword: keyword,
            location: location,
            radius: radius
        }

        getJobs(searchCriteria);

        setKeyword('');
        setLocation('');
        setRadius(50);
    }

    return (
        <>  
            <View>
                <TextInput placeholder='Search ElderWorks!'
                value={keyword}
                onChangeText={setKeyword}
                />
                <TextInput placeholder='Where are you looking?'
                value={location}
                onChangeText={setLocation}
                />
                <Slider
                value={radius}
                minimumValue={5}
                maximumValue={100}
                onValueChange={setRadius}
                step={5}
                slideOnTap={true}
                />
                <Button title = "Search" style = {styles.buttonStyle} onPress = {onClick}/>
            </View>
                <ScrollView>
                    <View style = {styles.jobsContainer} className="jobsContainer">
                        {jobList.map((data, key) => {
                            return (
                                <View key={key}>
                                    <Job data={data} navigation = {navigation}/>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
      flex: 1,
      justifyContent: 'center',
    },
    jobsContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});
  
export default Jobs;
