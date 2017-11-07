import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profile from '../screens/profile';
import Repositories from "../screens/repositories";
import Followers from "../screens/followers";
import Following from "../screens/following";

export const Tabs = TabNavigator({
	Profile: {
		screen: Profile,
	},
	Repos: {
		screen: Repositories,
	},
	Followers: {
		screen: Followers,
	},
	Following: {
		screen: Following,
	},
});