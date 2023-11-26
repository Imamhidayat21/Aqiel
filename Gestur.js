import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeViewGestureHandler } from "react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler";

export default function App() {
    <GestureHandlerRootView>
        <NativeViewGestureHandler>
             <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}>
                <View style={styles.contentContainer}>
                   <Text>Awesome 🎉</Text>
               </View>
               </BottomSheet>
        </NativeViewGestureHandler>
    </GestureHandlerRootView>
}