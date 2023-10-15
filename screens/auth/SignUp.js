import FIREBASE_AUTH from './FirebaseConfig';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = getAuth();

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            setLoading(false);
        } catch (error) {
            alert('Sign up failed: ' + error.message);
            setLoading(false);
        }
    };
    return (
        <View style={styles.container}>
            <Text style = {{fontSize: 30}}>Elder Works</Text>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput value = {email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput value = {password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} secureTextEntry={true}></TextInput>
                { loading ? ( <ActivityIndicator size = "large"/>
                ) : ( 
                    <Button title="Sign Up" onPress={signUp} />
                )}
                <Button
                    title="Go to Log In"
                    onPress={() => navigation.navigate('Login')}
                />
            </KeyboardAvoidingView>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },  
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#ecf0f1'
    }
});