import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import {
  colors,
  FocusAwareStatusBar,
  Input,
  SafeAreaView,
  Search,
  Text,
} from '@/components/ui';
import CopyIcon from '@/components/ui/icons/copy';
import Custome from '@/components/ui/icons/custome';
import HeartIcon from '@/components/ui/icons/heart';

const _categories = ['Category', 'Discount', 'Newest'];

export default function Contacts() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(_categories[0]);
  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <View className="flex-1 p-1">
        <View className="relative rounded-2xl bg-bgBlock p-3" key={item}>
          <View className="flex-row items-center justify-between">
            <Text className="font-roboto-400 text-sm text-darkGrey">
              Expires in 2 days
            </Text>
            <View className="flex-row items-center gap-1">
              <CopyIcon width={18} height={18} color={colors.darkGrey} />
              <TouchableOpacity>
                <HeartIcon width={18} height={18} color={colors.darkGrey} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="my-5 size-24 bg-bgBlock" />
          <Text className="font-roboto-500 text-lg ">20% off</Text>
          <Text className="text-sm text-darkGrey">On orders over $50</Text>
          <View
            className={
              'absolute bottom-0 right-0 rounded-br-2xl rounded-tl-2xl bg-orange p-2'
            }
          >
            <Custome color={colors.orange} />
          </View>
        </View>
      </View>
    );
  }, []);
  return (
    <>
      <FocusAwareStatusBar />
      <SafeAreaView className="mt-4 flex-1 gap-4 ">
        <View className="px-6">
          <Text className="mb-4 text-center font-roboto-500 text-2xl">
            Coupons
          </Text>
          <Input
            value={searchValue}
            onChangeText={setSearchValue}
            placeholder={'Search for name/category'}
            leftIcon={<Search color={colors.grey} />}
            search
          />
          <View className="mt-4 flex-row gap-3">
            {_categories.map((item) => (
              <TouchableOpacity
                key={item}
                className={`rounded-lg ${item === selectedCategory ? 'bg-black' : 'bg-bgBlock'} px-4 py-2`}
                onPress={() => {
                  setSelectedCategory(item);
                }}
              >
                <Text
                  className={`${item !== selectedCategory ? 'text-black' : 'text-bgBlock'}`}
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
            data={[1, 3, 5]}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item) => `item-${item}`}
            estimatedItemSize={80}
            ItemSeparatorComponent={() => <View className="" />}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
