import { FlashList } from '@shopify/flash-list';
import * as Clipboard from 'expo-clipboard';
import * as React from 'react';
import { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import type { Coupon } from '@/api';
import { useCoupons } from '@/api/coupons/use-coupons';
import {
  Button,
  colors,
  FocusAwareStatusBar,
  Image,
  SafeAreaView,
  Text,
} from '@/components/ui';
import CopyIcon from '@/components/ui/icons/copy';
import Custome from '@/components/ui/icons/custome';
import HeartIcon from '@/components/ui/icons/heart';
import { addFavorite, removeFavorite, useSetting } from '@/lib/storage';
import { openLinkInBrowser } from '@/lib/utils';

function daysFrom(dateInput: string | Date): number {
  const givenDate: Date =
    typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  const today: Date = new Date();

  // Считаем только дни, игнорируем часы/минуты/секунды
  givenDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffMs: number = today.getTime() - givenDate.getTime();
  const diffDays: number = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDays;
}

export default function Favorite() {
  const { data } = useCoupons();
  const { favorite } = useSetting.use.settings();
  const filtered = useMemo(
    () => data?.filter((item) => favorite.includes(item.id)),
    [data, favorite]
  );
  const renderItem = ({ item }: { item: Coupon }) => {
    const isFavorite = favorite.find((id) => id === item.id);
    return (
      <View className="flex-1 p-1" key={item.id}>
        <View className="relative rounded-2xl bg-bgBlock dark:bg-color1 p-3">
          <View className="flex-row items-center justify-between">
            <Text className="font-roboto-400 text-sm text-darkGrey">
              Expires in {daysFrom(item.valid_until)} days
            </Text>
            <View className="flex-row items-center gap-1">
              <TouchableOpacity
                onPress={() => {
                  showMessage({
                    message: 'Copied to clipboard',
                  });
                  Clipboard.setStringAsync(item.code);
                }}
              >
                <CopyIcon width={18} height={18} color={colors.darkGrey} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  isFavorite ? removeFavorite(item.id) : addFavorite(item.id)
                }
              >
                <HeartIcon
                  width={18}
                  height={18}
                  color={isFavorite ? colors.orange : colors.darkGrey}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="items-center justify-center">
            <Image className="my-5 size-24" source={{ uri: item.image_url }} />
          </View>
          <Text className="font-roboto-500 text-lg ">{item.title}</Text>
          <Text className="mr-6 text-sm text-darkGrey">{item.description}</Text>
          <TouchableOpacity
            onPress={() => openLinkInBrowser(item.link)}
            className={
              'absolute bottom-0 right-0 rounded-br-2xl rounded-tl-2xl bg-orange p-2'
            }
          >
            <Custome color={colors.orange} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <FocusAwareStatusBar />
      <SafeAreaView className="mt-4 flex-1 gap-4 ">
        <View className="flex-1 px-6">
          <Text className="mb-4 text-center font-roboto-500 text-2xl">
            Favorites
          </Text>
          {!filtered?.length ? (
            <>
              <Image
                source={require('../../../assets/img_1.png')}
                className="h-52"
              />
              <View className="mt-10 items-center gap-4">
                <Text className="">No favorites yet</Text>
                <Text className="">
                  Tap the heart icon on a coupon to save it here.
                </Text>
                <Button label={'Browse coupon'} />
              </View>
            </>
          ) : (
            <FlashList
              className="flex-1 "
              data={filtered}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor={({ id, title }) => `item-${id}-${title}`}
              estimatedItemSize={80}
              ItemSeparatorComponent={() => <View className="" />}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
}
