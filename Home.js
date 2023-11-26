import * as React from 'react';
import { View, Text } from 'react-native';
import { Axios } from 'axios';
// import { Text } from 'react-native-elements';

export default function Home({navigation}) {
    return(
        <View style={{ flex: 1, alignitems: 'center', justifyContent:'center' }}>
            <Text
            omPress={() => Alert('ini adaalah "Home".')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>halama Home</Text>
        </View>
    )
} 