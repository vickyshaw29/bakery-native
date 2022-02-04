import React from 'react'
import { View } from 'react-native'
import Dashboard from '../components/organisms/dashboard/Dashboard'
import styles from './styles/CommonStyles'

const DashboardPage = () => {
    return (
        <View style={styles.container}>
            <Dashboard/>
        </View>
    )
}

export default DashboardPage
