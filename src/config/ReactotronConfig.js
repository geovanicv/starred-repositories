import Reactotron from 'reactotron-react-native';

// __DEV__ é uma variavel global que retorna true quando o usuario está emulando em ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}
