const HomeNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Practice: PracticeScreen,
  Results: ResultsScreen
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator
    },
    HighScores: {
      screen: HighScoresScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  }
);

export default createAppContainer(AppNavigator);
