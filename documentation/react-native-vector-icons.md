# Configuração do React Native Vector Icons

Este guia explica como instalar e configurar a biblioteca `react-native-vector-icons` no seu projeto React Native.

## 📦 Instalação

Execute os seguintes comandos para instalar as dependências necessárias:

```sh
npm install --save @react-native-vector-icons/common
```

```sh
npm install --save @react-native-vector-icons/fontawesome6 @react-native-vector-icons/evil-icons
```

Para mais detalhes, consulte a documentação oficial:  
🔗 [Configuração do React Native Vector Icons](https://github.com/oblador/react-native-vector-icons/blob/master/docs/SETUP-REACT-NATIVE.md)

---

## ⚙️ Configuração

### 🟢 Android

Nenhuma configuração adicional é necessária. 🎉

### 🍏 iOS

1. Abra o arquivo `ios/Info.plist` e adicione o seguinte trecho dentro da tag `<dict>`:

   ```xml
   <key>UIAppFonts</key>
   <array>
       <string>FontAwesome6_Brands.ttf</string>
       <string>FontAwesome6_Regular.ttf</string>
       <string>FontAwesome6_Solid.ttf</string>
       <string>Octicons.ttf</string>
   </array>
   ```

2. Execute o seguinte comando para instalar as dependências do CocoaPods:

   ```sh
   npx pod-install ios
   ```

✅ Pronto! Agora você pode usar ícones no seu projeto React Native. 🚀
