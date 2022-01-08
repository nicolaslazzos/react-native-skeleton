## React Native Skeleton

[![version](https://img.shields.io/github/package-json/v/nicolaslazzos/react-native-skeleton/master?label=npm&style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton) 
[![npm](https://img.shields.io/npm/l/@nlazzos/react-native-skeleton?style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton) 
[![npm](https://img.shields.io/badge/types-included-blue?style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton)
[![npm](https://img.shields.io/npm/dm/@nlazzos/react-native-skeleton?style=flat-square&color=red)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton) 
[![npm](https://img.shields.io/github/stars/nicolaslazzos/react-native-skeleton?style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton) 

React Native Skeleton is a react-native and react-native-web library to easily create a loading effect.

### Installation

#### Step #1

Using yarn:

```bash
yarn add @nlazzos/react-native-skeleton
```

Using npm:

```bash
npm install @nlazzos/react-native-skeleton --save
```

#### Step #2 (Mobile Only)

> Note: Only if you are using this package on `react-native` it requires the dependency **@react-native-masked-view/masked-view** for the `wave` animation (only available on mobile).<br/>If your project includes the react-navigation >= 4.x you probably already have it installed and you can SKIP this step.

Using yarn:

```bash
yarn add @react-native-masked-view/masked-view
```

Using npm:

```bash
npm install @react-native-masked-view/masked-view --save
```

If you are running a **react-native** version below 0.60:

```bash
react-native link @react-native-masked-view/masked-view
```

Otherwise:

```bash
cd ios
pod install
```

### Example

Check the following example to see it in action and try changing the default props to see how it works.

[![npm](https://img.shields.io/static/v1?style=flat-square&label=Expo&message=Example&logo=expo)](https://snack.expo.io/@nicolaslazzos/react-native-skeleton-example)

### Usage

You always need to wrap the skeletons with the `SkeletonContainer` like in the following example.

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SkeletonContainer, Skeleton } from '@nlazzos/react-native-skeleton';

const App = () => {
  return (
    <SkeletonContainer>
      <View style={styles.container}>
        <Skeleton style={styles.avatar} />
        <View style={styles.textContainer}>
          <Skeleton style={styles.title} />
          <Skeleton style={styles.subtitle} />
        </View>
        <Skeleton style={styles.icon} />
      </View>
    </SkeletonContainer>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatar: { height: 40, width: 40, borderRadius: 0 },
  textContainer: { flex: 1, marginLeft: 16 },
  title: { width: '90%', height: 14, borderRadius: 7, marginBottom: 5 },
  subtitle: { width: '70%', height: 14, borderRadius: 7 },
  icon: { height: 16, width: 16, borderRadius: 4 },
});
```

Also you can do things like this.

```javascript
import React from "react";
import { View } from "react-native";
import { SkeletonContainer, Skeleton } from "@nlazzos/react-native-skeleton";

const App = () => {
  return (
    <SkeletonContainer>
      <ListItem />
      <ListItem />
      <ListItem />
    </SkeletonContainer>
  );
};

const ListItem = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.avatar} />
      <View style={styles.textContainer}>
        <Skeleton style={styles.title} />
        <Skeleton style={styles.subtitle} />
      </View>
      <Skeleton style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatar: { height: 40, width: 40, borderRadius: 0 },
  textContainer: { flex: 1, marginLeft: 16 },
  title: { width: '90%', height: 14, borderRadius: 7, marginBottom: 5 },
  subtitle: { width: '70%', height: 14, borderRadius: 7 },
  icon: { height: 16, width: 16, borderRadius: 4 },
});
```

### Properties

#### SkeletonContainer

|      Prop       |                  Description                   |            Type           |  Default  |
| :-------------: | :--------------------------------------------: |           :----:          | :-------: |
| backgroundColor |      Determines the color of placeholder       |          `string`         | `#E1E9EE` |
| highlightColor  | Determines the highlight color of placeholder  |          `string`         | `#EDF3F7` |
|      speed      | Determines the animation speed in milliseconds |          `number`         |   `800`   |
|    animation    | Determines type of animation for the skeletons | `wave`, `pulse` or `none` |  `pulse`  |

> Note: The `wave` animaton is only available for mobile, because it makes use of the `@react-native-masked-view/masked-view` package.

#### Skeleton

Accepts any `View` prop.

### License

[MIT](https://choosealicense.com/licenses/mit/)
