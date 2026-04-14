
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';

const [count, setCount] = useState(0);

function Adicionar() {
    setCount(count + 1);
};

function Subtrair() {
    setCount(count + 1);
};

const listItems = produtos.map(produtos =>
  <li key={produtos.id}>
    {produtos.image},
    {produtos.nome},
    {produtos.preco}
    <button onClick={Adicionar}>
        + {count}
    </button>
    <button onClick={Subtrair}>
        - {count}
    </button>
  </li>
);

function Estoque() {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Text>Estoque</Text>
            <ul>{listItems}</ul>
        </View>
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
