import { View, Text } from 'react-native'
import React from 'react'

interface Props {
    id: number,
    bangla: string,
    ayat: string
}

const AyatCard: React.FC<Props> = ({ id, bangla, ayat }) => {
    return (
        <View style={{ borderBottomColor: '#300759', borderBottomWidth: 1, paddingBottom: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 12, marginRight: 20, marginTop: 20, marginLeft: 50 }}>
                <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 25 }}>{ayat}</Text>
                <Text style={{ backgroundColor: '#300759', color: '#DAD0E1', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 100, fontWeight: 'bold' }}>{id}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 20, marginTop: 10 }}>
                <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 15, marginLeft: 40 }}>{bangla}</Text>
            </View>
        </View>
    )
}

export default AyatCard