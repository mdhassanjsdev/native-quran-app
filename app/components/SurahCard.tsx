import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


interface Props {
    id: number,
    name: string,
    verse: number,
    arbicName: string,
    navigation: any
}

const SurahCard: React.FC<Props> = ({ id, name, verse, arbicName, navigation }) => {


    return (
        <TouchableOpacity
            activeOpacity={.5}
            style={{ marginHorizontal: 20, marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: '#300759', borderBottomWidth: 1, paddingBottom: 20 }}
            onPress={() => navigation.navigate('AyatScreen', { id, name, verse })}
        >
            <View>
                <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 18 }} >{name}</Text>
                <Text style={{ color: '#9D1DF2', fontWeight: 'bold', fontSize: 13 }} >verse : {verse}</Text>
            </View>
            <View>
                <Text>{arbicName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SurahCard