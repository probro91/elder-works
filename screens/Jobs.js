import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Job from '../components/Job';
import { jobList } from '../data';

const Jobs = ({navigation}) => {
    return (
        <>  
                <ScrollView>
                    <View style = {styles.jobsContainer} className="jobsContainer">
                        {jobList.map((data, key) => {
                            return (
                                <View key={key}>
                                    <Job data={data} />
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
      alignItems: 'right',
      justifyContent: 'center',
    },
    jobsContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});
  
export default Jobs;
