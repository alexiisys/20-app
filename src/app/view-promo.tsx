import React from 'react';
import { FocusAwareStatusBar, SafeAreaView } from '@/components/ui';
import { TouchableOpacity, View } from 'react-native';

const ViewPromo = () => {
  return (
    <>
      <FocusAwareStatusBar />
      <SafeAreaView className="mt-4 flex-1 gap-4 ">
        <View>
          <TouchableOpacity onPress={() => {}}>

          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ViewPromo;