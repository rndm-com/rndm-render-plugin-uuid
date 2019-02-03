# [RNDM](https://www.rndm.com) Render Plugin: UUID

## About

This plugin provides the Unique User Identifier generation for the [RNDM Render package](https://www.rndm.com/docs/rndm-render).

This plugin provides RNDM method wrapping for easy serialisation of UUID generation using the awesome [UUID](https://github.com/kelektiv/node-uuid) library

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://www.rndm.com/docs/rndm-render/plugin/core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-uuid
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-uuid';
```

## Usage

The UUID Plugin transforms the V1, V3, V4 and V5 UUID generators into serialisable functions.

### Methods

The 4 version of UUID that are supported are:

v1 - timestamp based
v3 - namespace based
v4 - random generation
v5 - namespace based

**Example**

```json
{
    "type": "react-native.TouchableOpacity",
    "props": {
        "onPress": {
            "isFunc": true,
            "type": "uuid.v1",
            "args": []
        },
        "children": {
            "type": "react-native.Text",
            "props": {
                "children": "Touch Me"
            }
        }
    }
}
```

For a more complete example checkout the included json in the example folders, which makes use of the [Redux](https://github.com/rndm-render-plugin-redux) plugin.

Check out the [Playground](https://www.rndm.com/playground) page to see how these features work.
