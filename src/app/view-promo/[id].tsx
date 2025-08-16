import * as Clipboard from 'expo-clipboard';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { useCoupons } from '@/api/coupons/use-coupons';
import {
  colors,
  FocusAwareStatusBar,
  Image,
  SafeAreaView,
  Text,
} from '@/components/ui';
import ArrowLeftIcon from '@/components/ui/icons/ArrowLeft';
import CopyIcon from '@/components/ui/icons/copy';
import Custome from '@/components/ui/icons/custome';
import { openLinkInBrowser } from '@/lib/utils';

const Id = () => {
  const local = useLocalSearchParams<{ id: string }>();
  const { data } = useCoupons();
  const coupon = useMemo(
    () => data?.find((coupon) => coupon.id === local.id),
    [data, local.id]
  );
  const router = useRouter();
  return (
    <>
      <FocusAwareStatusBar />
      <SafeAreaView className="mt-4 flex-1 gap-4 px-4">
        <View className="flex-row">
          <TouchableOpacity className="flex-1" onPress={() => router.back()}>
            <ArrowLeftIcon width={24} height={24} />
          </TouchableOpacity>
          <Text className="flex-1 text-center font-roboto-500 text-2xl">
            Promo code
          </Text>
          <View className="flex-1" />
        </View>
        <View className="w-full items-center justify-center rounded-xl bg-bgBlock py-4 dark:bg-color1">
          <Image className="my-5 size-40" source={{ uri: coupon?.image_url }} />
        </View>
        <Text className="font-roboto-400 text-xl">{coupon?.description}</Text>
        <View className="flex-1 justify-end">
          <View className="flex-row gap-3">
            <TouchableOpacity
              onPress={() => {
                showMessage({
                  message: 'Copied to clipboard',
                });
                Clipboard.setStringAsync(coupon?.code ?? '');
              }}
              className="flex-1 flex-row items-center justify-center gap-2 rounded-xl bg-bgBlock py-4 dark:bg-color1"
            >
              <Text className="text-darkGrey">Copy</Text>
              <CopyIcon width={18} height={18} color={colors.darkGrey} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openLinkInBrowser(coupon?.link ?? '')}
              className="flex-1 flex-row items-center justify-center gap-2 rounded-xl bg-orange py-1 dark:bg-orange"
            >
              <Custome width={36} height={36} color={colors.orange} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Id;
