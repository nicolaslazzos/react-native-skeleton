## React Native Skeleton

[![version](https://img.shields.io/github/package-json/v/nicolaslazzos/react-native-skeleton/master?label=npm&style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton) 
[![npm](https://img.shields.io/npm/l/@nlazzos/react-native-skeleton?style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton) 
[![npm](https://img.shields.io/badge/types-included-blue?style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton)
[![npm](https://img.shields.io/npm/dm/@nlazzos/react-native-skeleton?style=flat-square&color=red)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton) 
[![npm](https://img.shields.io/github/stars/nicolaslazzos/react-native-skeleton?style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-skeleton) 

React Native Skeleton is a react-native library to easily create an loading effect.

### Installation

> Note: This package requires the dependency **@react-native-community/masked-view**.<br/>If your project includes the react-navigation >= 4.x you probably already have it installed and you can SKIP de Step #1

#### Step #1

Using yarn:

```bash
yarn add @react-native-community/masked-view
```

Using npm:

```bash
npm install @react-native-community/masked-view --save
```

If you are running a **react-native** version below 0.60:

```bash
react-native link @react-native-community/masked-view
```

Otherwise:

```bash
cd ios
pod install
```

#### Step #2

Using yarn:

```bash
yarn add @nlazzos/react-native-skeleton
```

Using npm:

```bash
npm install @nlazzos/react-native-skeleton --save
```

### Usage

You always need to wrap the skeletons with the `SkeletonContainer` like in the following example.

```javascript
import React from "react";
import { View } from "react-native";
import { SkeletonContainer, Skeleton } from "@nlazzos/react-native-skeleton";

const App = () => {
  return (
    <SkeletonContainer>
      <View style={{ flexDirection: "row", alignContent: "center", padding: 16 }}>
        <Skeleton style={{ height: 70, width: 70, borderRadius: 6 }} />
        <View style={{ flex: 1, justifyContent: "center", marginLeft: 16 }}>
          <Skeleton style={{ height: 16, width: "50%", borderRadius: 6, marginBottom: 10 }} />
          <Skeleton style={{ height: 16, width: "30%", borderRadius: 6, marginBottom: 10 }} />
          <Skeleton style={{ height: 16, width: "70%", borderRadius: 6 }} />
        </View>
      </View>
    </SkeletonContainer>
  );
};
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
    </SkeletonContainer>
  );
};

const ListItem = () => {
  return (
    <View style={{ flexDirection: "row", alignContent: "center", padding: 16 }}>
      <Skeleton style={{ height: 70, width: 70, borderRadius: 6 }} />
      <View style={{ flex: 1, justifyContent: "center", marginLeft: 16 }}>
        <Skeleton style={{ height: 16, width: "50%", borderRadius: 6, marginBottom: 10 }} />
        <Skeleton style={{ height: 16, width: "30%", borderRadius: 6, marginBottom: 10 }} />
        <Skeleton style={{ height: 16, width: "70%", borderRadius: 6 }} />
      </View>
    </View>
  );
};
```

### Properties

#### SkeletonContainer

|      Prop       |                  Description                   |  Type  |  Default  |
| :-------------: | :--------------------------------------------: | :----: | :-------: |
| backgroundColor |      Determines the color of placeholder       | string | `#E1E9EE` |
| highlightColor  | Determines the highlight color of placeholder  | string | `#F2F8FC` |
|      speed      | Determines the animation speed in milliseconds | number |   `800`   |

#### Skeleton

Accepts any `View` prop.

### License

[MIT](https://choosealicense.com/licenses/mit/)
