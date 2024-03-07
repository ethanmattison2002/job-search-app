import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About this job:</Text>

      <Text style={styles.contentBox}>
        <Text style={styles.contentText}>{info}</Text>
      </Text>
    </View>
  )
}

export default About