import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Game } from '@summon/types';
import { getGames } from './src/lib/api/api';

// 1. Crear el cliente
const queryClient = new QueryClient();

// 2. Componente de Lista
function GameList() {
  const { data, isLoading, error } = useQuery<Game[]>({
    queryKey: ['games'],
    queryFn: getGames
  });

  if (isLoading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  if (error) return <Text style={styles.error}>Error conectando: {error.message}</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ padding: 20 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{item.category} • {item.location.city}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.slots}>Slots: {item.filledSlots}/{item.maxSlots}</Text>
        </View>
      )}
    />
  );
}

// 3. App Root
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text style={styles.header}>Summon - Partidas</Text>
        <GameList />
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 50 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  title: { fontSize: 18, fontWeight: 'bold' },
  category: { color: '#666', marginBottom: 5 },
  desc: { fontSize: 14, color: '#333', marginBottom: 10 },
  slots: { fontWeight: 'bold', color: '#007AFF' },
  error: { color: 'red', textAlign: 'center', marginTop: 20 }
});