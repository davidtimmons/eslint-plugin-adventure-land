eslint-plugin-adventure-land
============================

[![npm version](https://badge.fury.io/js/eslint-plugin-adventure-land.svg)](http://badge.fury.io/js/eslint-plugin-adventure-land)

[Adventure Land MMORPG](http://adventure.land/) [ESLint](https://eslint.org/) plugin adding a custom environment containing global game functions, classes, and variables.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-adventure-land`:

```
$ npm install eslint-plugin-adventure-land --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-adventure-land` globally.

## Usage

Add `adventure-land` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "adventure-land"
    ]
}
```

## Special Thanks

Special thanks to NexusNull for the [unofficial Adventure Land MMORPG code documentation](https://nexusnull.github.io/adventureland/global.html).
Environment globals in this plugin come directly from those documents.
