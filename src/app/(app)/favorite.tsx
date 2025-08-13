import * as React from 'react';
import { View } from 'react-native';

import {
  Button,
  FocusAwareStatusBar,
  Image,
  SafeAreaView,
  Text,
} from '@/components/ui';

export default function Favorite() {
  return (
    <>
      <FocusAwareStatusBar />
      <SafeAreaView className="mt-4 flex-1 gap-4 ">
        <View className="px-6">
          <Text className="mb-4 text-center font-roboto-500 text-2xl">
            Favorites
          </Text>
          <Image
            source={require('../../../assets/img_1.png')}
            className="h-52"
          />
          <View className="items-center mt-10 gap-4">
            <Text className="">No favorites yet</Text>
            <Text className="">
              Tap the heart icon on a coupon to save it here.
            </Text>
            <Button label={'Browse coupon'} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
