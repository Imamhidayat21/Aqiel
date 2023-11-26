import * as React from 'react';
import { Text, View } from 'react-native';

export default function HalamanSeting({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
            onPress={() => navigation.navigate('center')}
            style={{fontSize: 26, fontWeight: 'bold'}}>HalamanSeting</Text>
        </View>
    )
}