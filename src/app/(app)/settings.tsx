/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, FocusAwareStatusBar, Text } from '@/components/ui';
import { useSelectedTheme } from '@/lib';
import { Env } from '@/lib/env';
import { openLinkInBrowser } from '@/lib/utils';

export default function Settings() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const isDark = selectedTheme === 'dark';

  const openPrivacyPolicy = () => openLinkInBrowser(Env.PRIVACY_POLICY);

  const openContactUs = () => openLinkInBrowser(Env.FEEDBACK_FORM);
  return (
    <>
      <FocusAwareStatusBar />

      <SafeAreaView className=" mt-4 flex-1 px-6">
        <View className="relative flex-1 gap-10">
          <Text className="font-exo2Bold text-2xl">Settings</Text>
          <Text className="font-roboto-500 text-lg">App Theme</Text>
          <View className="flex-row gap-4">
            <TouchableOpacity
              onPress={() => setSelectedTheme('light')}
              className={`rounded-xl bg-bgBlock px-4 py-5 ${!isDark ? 'bg-black dark:bg-white' : 'bg-bgBlock dark:bg-color1'}`}
            >
              <Text
                className={`${isDark ? 'text-black dark:text-white' : 'text-bgBlock dark:text-black'} `}
              >
                Light Theme
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedTheme('dark')}
              className={`rounded-xl bg-bgBlock px-4 py-5 ${isDark ? 'bg-black dark:bg-white' : 'bg-bgBlock dark:bg-color1'}`}
            >
              <Text
                className={`${!isDark ? 'text-black ' : 'text-bgBlock dark:text-black'}`}
              >
                Dark theme
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={openPrivacyPolicy}>
            <Text className="text-app-shadowBorder underline">
              Privacy Policy
            </Text>
          </TouchableOpacity>
          <View
            className="absolute right-0 w-full gap-4"
            style={{ bottom: 12 }}
          >
            <Text className="text-center ">Have a problem?</Text>
            <Button label={'Contact us'} onPress={openContactUs} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
