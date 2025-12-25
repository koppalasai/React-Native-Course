import { View, Text, ScrollView, Alert, SafeAreaView } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#22c55e',
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            padding: 16,
            backgroundColor: '#f0fdf4',
            borderRadius: 24,
          }}>
          {/* TASK 1 // # Title with emoji and underline 
            - Set fontSize to 24
            - Add fontWeight "bold"
            - Add textDecorationLine "underline"
            - Set marginBottom to 15
            - Set color to "green"
            - Center align the text with textAlign
          */}
        
          <Text style={{
            
             fontSize: 24, 
             fontWeight: 'bold', 
             textDecorationLine: 'underline',
              marginBottom: 15, 
              color: 'green', 
              textAlign: 'center' }}>
          
          
          
          
          🌵 Quick Cactus Facts</Text>

          {/* TASK 2 // # Main paragraph with different text styles
            - For the main Text: set fontSize to 16, lineHeight to 22, textAlign
              to "center",
              marginBottom to 15, and color to "green"
            - For "Saguaro cactus": add fontWeight "bold"
            - For "150-200 years": add fontStyle "italic"
            - For "40-60 feet tall": add both fontWeight "bold" AND fontStyle
              "italic"
            - For "desert trees": add textDecorationLine "underline" and color
              "blue"
            - For "woody plants": add textDecorationLine "line-through" and color
              "grey"
            - For "succulent bushes": add textDecorationLine "underline
              line-through" and color "olive"
          */}
          <Text>
            The
            <Text> Saguaro cactus </Text>
            can live for
            <Text> 150-200 years </Text>
            and grow to
            <Text> 40-60 feet tall</Text>! Cacti are often called
            <Text> desert trees </Text>
            but they're
            <Text> woody plants </Text>
            actually
            <Text> succulent bushes </Text>.
          </Text>

          {/* TASK 3 // @ Selectable text with highlight
            - Set fontSize to 15
            - Add backgroundColor "#e8f5e9"
            - Add padding of 10
            - Set borderRadius to 8
            - Add marginBottom of 15
            - Set width to 250
            - Center align the text
            - Add the "selectable" prop
            - Set selectionColor to "#6bc02d"
          */}
          <Text>
            🌵 Select to discover how cacti store water for years of drought.
          </Text>

          {/* TASK 4 // @ Text with line limit and ellipsis
            - Set width to 250
            - Set fontSize to 15
            - Add backgroundColor "#61f8e9"
            - Add padding of 10
            - Set borderRadius to 8
            - Add marginBottom of 15
            - Set color to "#33691e"
            - Add numberOfLines={2}
            - Add ellipsizeMode="tail"
          */}
          <Text>
            🌰 A Saguaro doesn't grow its first arm until it's 75-100 years old,
            and their root system spreads out just below the surface for up to
            100 feet, allowing them to quickly absorb any rainfall...
          </Text>

          {/* TASK 5 // # Interactive text
            - Set color to "#00796b"
            - Add marginVertical of 10
            - Set fontSize to 16
            - Add fontWeight "500"
            - Add textDecorationLine "underline"
          */}
          <Text
            onPress={() =>
              Alert.alert(
                'Cactus Fact',
                'The Saguaro cactus is protected by law in Arizona!'
              )
            }>
            🌵 Tap for cactus {'\n'} secret!
          </Text>

          {/* TASK 6 // # Text with nested styles
            - For the main Text: set fontSize to 15, lineHeight to 20, textAlign
              to "center",
              marginTop to 5, and marginBottom to 10
            - For "giants": add fontWeight "bold" and color "green"
            - For "remarkable": add fontStyle "italic" and color "#FF9800"
            - For "survival experts!": add fontWeight "bold", fontStyle "italic",
              and textDecorationLine "underline"
          */}
          <Text>
            These desert
            <Text> giants </Text>
            are truly
            <Text> remarkable </Text>
            <Text>survival experts!</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
