import * as React from "react";
import { View, ViewProps } from "react-native";

import { SkeletonContext } from "./SkeletonContainer";

export interface SkeletonProps extends ViewProps {}

export const Skeleton: React.FunctionComponent<SkeletonProps> = (props) => {
	const { backgroundColor } = React.useContext(SkeletonContext);

	return <View {...props} style={[props.style, { backgroundColor }]} />;
};
