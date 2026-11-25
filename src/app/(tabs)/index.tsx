
import { router } from 'expo-router';
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const educationLevels = [
  {
    title: 'Grade 6 - 8',
    subtitle: 'Primary Learning',
    icon: '📚',
    color: '#E0F2FE',
    route: '/grades/primary',
  },
  {
    title: 'Grade 9 - 10',
    subtitle: 'Secondary Learning',
    icon: '🎓',
    color: '#DCFCE7',
    route: '/grades/secondary',
  },
  {
    title: 'Grade 11 - 12',
    subtitle: 'Entrance Preparation',
    icon: '📖',
    color: '#FEF3C7',
    route: '/grades/preparatory',
  },
  {
    title: 'University',
    subtitle: 'Higher Education',
    icon: '🏫',
    color: '#F3E8FF',
    route: '/grades/university',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          🎓 Smart Education
        </Text>

        <Text style={styles.welcome}>
          Welcome to Learning!
        </Text>

        <Text style={styles.description}>
          Learn, practice and prepare for your future.
        </Text>
      </View>

      {/* Education Levels */}
      <Text style={styles.sectionTitle}>
        Choose Your Education Level
      </Text>

      <View style={styles.grid}>
        {educationLevels.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              { backgroundColor: item.color },
            ]}
            activeOpacity={0.7}
            onPress={() => router.push(item.route as any)}
          >
            <Text style={styles.icon}>
              {item.icon}
            </Text>

            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text style={styles.cardSubtitle}>
              {item.subtitle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Smart Education App
        </Text>

        <Text style={styles.footerSub}>
          Your learning journey starts here.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  header: {
    backgroundColor: '#1D4ED8',
    padding: 25,
    paddingTop: 55,
    paddingBottom: 35,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },

  welcome: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 30,
  },

  description: {
    color: '#DBEAFE',
    fontSize: 14,
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1E293B',
    margin: 20,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  card: {
    width: '48%',
    minHeight: 155,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    justifyContent: 'center',
  },

  icon: {
    fontSize: 35,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  cardSubtitle: {
    fontSize: 12,
    color: '#475569',
    marginTop: 7,
  },

  footer: {
    alignItems: 'center',
    padding: 30,
  },

  footerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },

  footerSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 7,
  },

});
