import * as React from "react";
import {
  Animated,
  View,
  StyleSheet,
  Easing,
  LayoutRectangle,
  LayoutChangeEvent,
  useWindowDimensions,
} from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";

import {
  SkeletonContainer as SkeletonContainerWeb,
  SkeletonContainerProps,
  SkeletonContext,
  defaultProps,
} from "./SkeletonContainerBase";

export * from "./SkeletonContainerBase";

export const SkeletonContainer: React.FC<SkeletonContainerProps> = (props) => {
  if (props.animation === "wave") {
    return <Wave {...props} />;
  } else {
    return <SkeletonContainerWeb {...props} />;
  }
};

SkeletonContainer.defaultProps = defaultProps;

export default SkeletonContainer;

// WAVE ANIMATION

const waveDefaultProps: SkeletonContainerProps = {
  speed: 800,
};

const Wave: React.FC<SkeletonContainerProps> = (props) => {
  const { children, backgroundColor, speed, highlightColor } = props;

  const SCREEN_WIDTH = useWindowDimensions().width;
  const SCREEN_HEIGHT = useWindowDimensions().height;

  const [context, setContext] = React.useState({ backgroundColor });
  const [layout, setLayout] = React.useState<LayoutRectangle>();

  const animatedValue = React.useMemo(() => new Animated.Value(0), []);
  const translateX = React.useMemo(() => {
    const width = layout?.width ?? SCREEN_WIDTH;

    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-width, width],
    });
  }, [animatedValue, layout?.width, SCREEN_WIDTH]);

  const loop = Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: speed,
      easing: Easing.ease,
      useNativeDriver: true,
    })
  );

  React.useEffect(() => {
    loop.stop();

    animatedValue.setValue(0);

    if (layout?.width && layout?.height) {
      loop.start();
    }

    return () => loop.stop();
  }, [animatedValue, speed, layout?.width, SCREEN_WIDTH]);

  const onLayout = (e: LayoutChangeEvent) => {
    const newLayout = e.nativeEvent.layout;

    if (newLayout.width !== layout?.width) {
      setLayout(newLayout);
    }
  };

  React.useEffect(() => {
    setContext({ backgroundColor });
  }, [backgroundColor]);

  const absoluteTranslateStyle = React.useMemo(
    () => ({ ...StyleSheet.absoluteFillObject, transform: [{ translateX }] }),
    [translateX]
  );

  return (
    <SkeletonContext.Provider value={context}>
      <View onLayout={onLayout}>
        {layout?.width && layout?.height ? (
          <MaskedView
            style={{ maxHeight: SCREEN_HEIGHT, height: layout.height, width: layout.width }}
            maskElement={<View>{children}</View>}
          >
            <View style={{ flexGrow: 1, backgroundColor }} />
            <Animated.View style={[{ flexDirection: "row" }, absoluteTranslateStyle]}>
              {Array.from({ length: layout.width }).map((_, index) => {
                const opacity = new Animated.Value(index);
                return (
                  <Animated.View
                    key={index}
                    style={{
                      width: 1,
                      backgroundColor: highlightColor,
                      opacity: opacity.interpolate({
                        inputRange: [0, layout.width / 2, layout.width],
                        outputRange: [0, 1, 0],
                      }),
                    }}
                  />
                );
              })}
            </Animated.View>
          </MaskedView>
        ) : (
          children
        )}
      </View>
    </SkeletonContext.Provider>
  );
};

Wave.defaultProps = waveDefaultProps;
