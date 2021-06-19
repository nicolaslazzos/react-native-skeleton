import * as React from "react";
import { Animated } from "react-native";

export interface SkeletonContextProps {
  backgroundColor?: string | Animated.AnimatedInterpolation;
}

export const SkeletonContext = React.createContext<SkeletonContextProps>({
  backgroundColor: "#E1E9EE",
});

export interface SkeletonContainerProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  highlightColor?: string;
  speed?: number;
  animation?: "pulse" | "none" | "wave";
}

export const defaultProps: SkeletonContainerProps = {
  backgroundColor: "#E1E9EE",
  highlightColor: "#EDF3F7",
  animation: "pulse",
};

export const SkeletonContainer: React.FC<SkeletonContainerProps> = ({ animation, ...props }) => {
  if (animation === "none") {
    return <None {...props} />;
  } else {
    return <Pulse {...props} />;
  }
};

SkeletonContainer.defaultProps = defaultProps;

export default SkeletonContainer;

// PULSE ANIMATION

const pulseDefaultProps: SkeletonContainerProps = {
  speed: 500,
};

const Pulse: React.FC<SkeletonContainerProps> = (props) => {
  const { children, backgroundColor, speed, highlightColor } = props;

  const colorAnimation = React.useRef(new Animated.Value(0)).current;

  const loop = Animated.loop(
    Animated.sequence([
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: speed,
        useNativeDriver: false,
      }),
      Animated.timing(colorAnimation, {
        toValue: 0,
        duration: speed,
        useNativeDriver: false,
      }),
    ])
  );

  React.useEffect(() => {
    loop.start();

    return () => loop.stop();
  }, [colorAnimation, speed]);

  let color: SkeletonContextProps["backgroundColor"];

  if (backgroundColor && highlightColor) {
    color = colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [backgroundColor, highlightColor],
    });
  }

  return <SkeletonContext.Provider value={{ backgroundColor: color }}>{children}</SkeletonContext.Provider>;
};

Pulse.defaultProps = pulseDefaultProps;

// NONE ANIMATION

const None: React.FC<SkeletonContainerProps> = (props) => {
  const { children, backgroundColor } = props;

  return <SkeletonContext.Provider value={{ backgroundColor }}>{children}</SkeletonContext.Provider>;
};
