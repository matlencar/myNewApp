import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";

import { styles } from './styles';

import { Participant } from "../../components/Participant";

export default function Home() {
  const participantes = ['Matheus', 'Allan', 'Diego', 'Vini', 'Isa', 'Ana', 'Mayk', "Luana", "Mari", 'Gabriel']

  function handleParticipantAdd() {
    if(participantes.includes("Matheus")) {
     return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      {
        text: 'Sim',
        onPress: ()=>  Alert.alert("Deletado")
      },
      {
        text: 'Não',
        style: "cancel"
      }
    ]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta-Feira, 20 de dezembro
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"} />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />

    </View>
  )
}