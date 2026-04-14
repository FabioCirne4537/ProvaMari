import { Button } from 'react-native-paper';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { Estoque } from './Estoque';

function HomeScreen() {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Text>Entrar</Text>
        <TextInput
            placeholder="E-mail"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
        />
        <TextInput
            placeholder="Senha"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
        />
        </View>
        <Button mode="contained" onPress={() => navigation.navigate(Estoque)}>
            Entrar
        </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e7ceff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 15,
  }
});
