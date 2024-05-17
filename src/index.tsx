import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ComponentDev } from "./screens";
const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="네비게이션"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="온보딩" component={ComponentDev} />
        <Stack.Screen name="로그인" component={ComponentDev} />
        <Stack.Screen name="네비게이션" component={ComponentDev} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
