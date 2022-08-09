import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from "./store"

import HomeScreen from "./src/screens/Home/index.js";
import RestaurantScreen from "./src/screens/Restaurant/index.js";
import BasketScreen from "./src/screens/Basket/index.js";
import PreparingOrderScreen from "./src/screens/PreparingOrder/index.js";
import DeliveryScreen from "./src/screens/Delivery/index.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen 
              name="Basket" 
              component={BasketScreen} 
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen 
              name="PreparingOrder" 
              component={PreparingOrderScreen} 
              options={{ presentation: "fullScreenModal", headerShown: false }}
             />
            <Stack.Screen 
              name="Delivery"
              component={DeliveryScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
