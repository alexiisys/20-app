/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';

import { colors } from '@/components/ui';
import {
  Balance,
  Dashboard,
  Settings as SettingsIcon,
} from '@/components/ui/icons';
import ListIcon from '@/components/ui/icons/categories';
import HomeIcon from '@/components/ui/icons/home';
import HeartIcon from '@/components/ui/icons/heart';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: colors.lightGrey,

        tabBarActiveTintColor: isDark ? colors.white : colors.black,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <HomeIcon
              color={color}
            />
          ),
          tabBarButtonTestID: 'feed-tab',
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <ListIcon
              color={color}
            />
          ),
          tabBarButtonTestID: 'feed-tab',
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          headerShown: false,
          title: 'Favorite',
          tabBarIcon: ({ color }) => (
            <HeartIcon
              color={color}
            />
          ),
          tabBarButtonTestID: 'balance-tab',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <SettingsIcon
              color={color}
            />
          ),
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}
