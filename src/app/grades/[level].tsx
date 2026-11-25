
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useLocalSearchParams, router } from 'expo-router';

export default function GradeScreen() {
  const { level } = useLocalSearchParams();

  const gradeData: Record<string, string[]> = {
    primary: ['Grade 6', 'Grade 7', 'Grade 8'],
    secondary: ['Grade 9', 'Grade 10'],
    preparatory: ['Grade 11', 'Grade 12'],
    university: ['University Courses'],
  };

  const grades = gradeData[String(level)] || [];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.back}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Select Your Grade</Text>

      <Text style={styles.subtitle}>
        Choose a grade to explore subjects.
      </Text>

      {grades.length > 0 ? (
        grades.map((grade, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => alert(grade + ' selected')}
          >
            <Text style={styles.grade}>{grade}</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No grades found. Please check your selection.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 20,
  },
  back: {
    marginTop: 40,
    marginBottom: 25,
  },
  backText: {
    color: '#2563EB',
    fontSize: 18,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  grade: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  arrow: {
    fontSize: 25,
    color: '#2563EB',
  },
});
