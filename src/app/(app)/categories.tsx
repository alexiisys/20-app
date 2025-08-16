import { FlashList } from '@shopify/flash-list';
import * as Clipboard from 'expo-clipboard';
import React, { useEffect, useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import type { Coupon } from '@/api';
import { useCategories } from '@/api/categories/use-coupons';
import { useCoupons } from '@/api/coupons/use-coupons';
import {
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

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { data } = useCoupons();
  const { favorite } = useSetting.use.settings();
  const { data: dataCategories } = useCategories();
  useEffect(() => {
    if (dataCategories) {
      setSelectedCategory(dataCategories[0]);
    }
  }, [dataCategories]);

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
  const filtered = useMemo(
    () => data?.filter((item) => selectedCategory === item.category),
    [data, selectedCategory]
  );

  return (
    <>
      <FocusAwareStatusBar />
      <SafeAreaView className="mt-4 flex-1 gap-4 ">
        <View className="px-6">
          <Text className="mb-4 text-center font-roboto-500 text-2xl">
            Coupons
          </Text>
          <View className="mt-4 flex-row gap-3">
            {dataCategories?.map((item) => (
              <TouchableOpacity
                key={item}
                className={`rounded-lg ${item === selectedCategory ? 'bg-black dark:bg-white' : 'bg-bgBlock dark:bg-color1'} px-4 py-2`}
                onPress={() => {
                  setSelectedCategory(item);
                }}
              >
                <Text
                  className={`${item !== selectedCategory ? 'text-black dark:text-white' : 'text-bgBlock dark:text-black'}`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="flex-1 px-5">
          <FlashList
            className="flex-1 "
            data={filtered}
            extraData={[favorite]}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={({ id }) => `item-${id}`}
            estimatedItemSize={80}
            ItemSeparatorComponent={() => <View className="" />}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Categories;
