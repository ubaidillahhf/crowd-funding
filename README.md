![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

# Installation

You can simply clone the project and start with your barebone project

```sh
git clone git@github.com:ubaidillahhf/crowd-funding.git
```

# What's Included?

- **Navigation System**
  - React Navigation V5
  - React Navigation Helpers
  - Ready to use Stack and Tab Screens with navigation
- **Built-in Theme System**
  - Colors
  - Fonts
  - Built-in TextWrapper for better Custom Text usage
- **Built-in Animated Splash Screen**
- **Built-in Localization (Multi-Language Support)**
- **HTTP Network Management**
  - Axios
  - API Service with Usage Examples
- **Built-in EventEmitter**
  - EventBus
- **Built-in Local Storage asa MMKV Storage**
  - LocalStorage (Instead of AsyncStorage)
- **Local Storage Ready to Use Util Functions**
- **Babel Plugin Module Resolver**
  - Fixing the relative path problem
  - Visit `.babelrc` to ready to use and more customization
- **Pre-commit Husky Integration**
  - Ready to command husky setup with `npm run husky:setup`
  - `commitlint` Integration for better commit linter
  - Auto prettier on pre-commit
- **Built-in Custom Font Implementation**
  - All you need to do is copy-paste the .tff file and run `npx react-native-asset` command

## Project Structure

```
├───android
├───ios
├───src
│   ├───screens
│   │   ├───detail
│   │   │   ├───DetailScreen.style.ts
│   │   │   └───DetailScreen.tsx
│   │   ├───home
│   │   │   ├───HomeScreen.style.ts
│   │   │   └───HomeScreen.tsx
│   │   └───search
│   │       ├───SearchScreen.style.ts
│   │       └───SearchScreen.tsx
│   ├───services
│   │   ├───api
│   │   │   ├───api.constant.ts
│   │   │   └───index.ts
│   │   ├───event-emitter
│   │   │   └───index.ts
│   │   ├───models
│   │   │   └───index.ts
│   │   └───navigation
│   │       └───index.tsx
│   ├───shared
│   │   ├───components
│   │   │   └───text-wrapper
│   │   ├───constants
│   │   │   └───index.ts
│   │   ├───localization
│   │   │   └───index.ts
│   │   └───theme
│   │       ├───fonts
│   │       ├───colors.ts
│   │       ├───font-size.ts
│   │       ├───index.ts
│   │       └───theme.ts
│   └───utils
│       ├───local-storage
│       │   └───index.ts
│       └───index.ts
├───.babelrc
├───.buckconfig
├───.eslintrc.js
├───.gitattributes
├───.gitignore
├───.npmignore
├───.prettierrc.js
├───.watchmanconfig
├───App.tsx
├───README.md
├───app.json
├───index.js
├───metro.config.js
├───package-lock.json
├───package.json
├───react-native.config.js
├───tsconfig.json
```

# Components

## Styles

- **TextWrapper** over default Text component
- Colors
- Fonts
- Theme
- Font Size

## Imports

Predefined **`h`** tags are usable with TextWrapper

```jsx
import Text from "@shared-components/text-wrapper/Text";

// ? Advanced Usage Example
<Text h3 bold right color="#913400" numberOfLines={1} style={{ margin: 16 }}>
  Heading 3 Bold Right Sided Custom Text
</Text>;
```

```jsx
import colors from "@colors";

<Text h1 color={colors.light.primary}>
  Heading 1 with custom color from theme
</Text>;
```

```jsx
import fonts from "@fonts";

<Text h5 fontFamily={fonts.helvetica.regular}>
  Heading 1 with custom font usage
</Text>;
```

```jsx
import fontSize from "@font-size";
```

```jsx
import theme from "@theme";
```

if you want to call them all at once

```js
import { theme, fonts, colors, spacing, fontSize } from "@shared-styles/index";
```

# Step By Step Guide

## Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies

- `rm -rf .git README.md`
- `rm -rf ./assets/RN-Typescript-Boilerplate.gif ./assets/logo.png`
- `git init`
- `npm i`
- `npx pod-install` (iOS Only)
- `react-native run-ios/android`

**OR**

- `npm run clean-up`
- `npm i && npx pod-install`
- `react-native run-ios/android`

## Husky Integration

Before doing anything else, please simply run the command to initalize the husky.

```jsx
npm run husky:setup
```

`husky:setup` will handle the initizalition, installation and ready to use `commitlint` and `prettier`.

## Rename the project: (Thanks to [react-native-name](https://github.com/junedomingo/react-native-rename))

```sh
npx react-native-rename <your-project-name>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)

```sj
npx react-native-rename <your-project-name> -b <bundleIdentifier>
```

### Install Pods (iOS Only)

- `npm i`
- `cd ios && pod install`
- `cd .. && react-native run-ios/android`

### Android local.properties (Android Only)

- `npm i`
- `cd android && mkdir local.properties`
- `nano local.properties`

## Android local.properties

- Go to `Android -> local.properties`
- Change the your local android sdk and cmake path

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android SDK

```
ndk.dir=/Users/your-name/Library/Android/sdk/ndk-bundle
sdk.dir=/Users/your-name/Library/Android/sdk
```

- `cd .. & react-native run-ios/android`

## Credits

Ubaidillahhf - [@ubaidillahhf](https://twitter.com/ubaidillahhf) - ubaidillahhf@gmail.com

## Author

UBED.DEV, ubed.dev@gmail.com

## License

React Native CrowdFunding is available under the MIT license. See the LICENSE file for more info.
