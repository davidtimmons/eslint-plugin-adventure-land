eslint-plugin-adventure-land
============================

<p>
    <a href="https://www.npmjs.com/package/eslint-plugin-adventure-land"><img src="https://img.shields.io/npm/v/eslint-plugin-adventure-land.svg"></a>
    <a href="https://www.npmjs.com/package/eslint-plugin-adventure-land"><img src="https://img.shields.io/npm/dt/eslint-plugin-adventure-land.svg"></a>
</p>

[Adventure Land MMORPG](http://adventure.land/) [ESLint](https://eslint.org/) plugin adding a
custom environment containing global game functions, classes, and variables. For test stubs and
mock data, see the [test helpers](https://github.com/davidtimmons/adventure-land-test-helpers).

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

## Sources

1. [Official Adventure Land MMORPG source code](https://github.com/kaansoral/adventureland/blob/master/runner_functions.js)
   by Kaan Soral.
1. [Unofficial Adventure Land MMORPG code documentation](https://nexusnull.github.io/adventureland/global.html)
   by NexusNull.
