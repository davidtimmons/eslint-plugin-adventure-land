eslint-plugin-adventure-land
============================

[![npm version](https://badge.fury.io/js/eslint-plugin-adventure-land.svg)](http://badge.fury.io/js/eslint-plugin-adventure-land)

[Adventure Land MMORPG](http://adventure.land/) [ESLint](https://eslint.org/) plugin adding a
custom environment containing global game functions, classes, and variables.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-adventure-land`:

```
$ npm install eslint-plugin-adventure-land --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install
`eslint-plugin-adventure-land` globally.

## Usage

1. Add `adventure-land` to the plugins section of your `.eslintrc` configuration file.
   (You can omit the `eslint-plugin-` prefix.)
1. Add `adventure-land/api` to the environments section of your `.eslintrc` configuration file.

```json
{
    "plugins": [
        "adventure-land"
    ],
    "environments": {
        "adventure-land/api": true
    }
}
```

## Special Thanks

Special thanks to NexusNull for the [unofficial Adventure Land MMORPG code documentation](https://nexusnull.github.io/adventureland/global.html). Most environment globals in this plugin come directly from that document.
