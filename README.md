# Full Name Parser

## Parsing and deconstructing names into their individual chunks

This is a simple name parser, that will deconstruct a name into its individual components of _prefix_, _first_, _middle_, _initials_, _infix_, _last_ and _suffix_. If something doesn't exist, it will be returned as `null`. It uses a pre-defined list of common prefixes, infixes and suffixes.  
This library assumes people start with their first name and end with their last name and not the other way around.

## Installation and usage instructions

First you must install the package into your repository. 

```bash
yarn add @braweria/full-name-parser
# or
npm i @braweria/full-name-parser
```

After you have installed it successfully in your app, you're ready to start using it. All you have to do is to import the `parseName` function into your module.

```js
import { parseName } from "@braweria/full-name-parser";
```

And then call the function with the name you want to be parsed and deconstructed into components.

```js
const parsedName = parseName("Prof. Steph Alice von Wolfenstein, III");
```

This will result in the following output:

```json
{
  "prefix": "Prof.",
  "first": "Steph",
  "middle": "Alice",
  "initials": null,
  "infix": "von",
  "last": "Wolfenstein",
  "suffix": "III",
  "full": "Prof. Steph Alice von Wolfenstein"
}
```

## Contribution

Contributors are welcome! When contributing, make sure your Pull Request is documented on what it fixes and, if it applies, which issue it is tackling.

Fork the repository and create a new, descriptive, branch with all your fixes and features. Fixes are prefixed with `fix/`, while features are prefixed with `feat/`.

Also make sure to test your code, before submitting.

```bash
yarn test
# or
npm run test
```

Check out what issues and feature requests there are on the issues page.

## License

[MIT](https://opensource.org/licenses/mit-license.php)


## Donations

You liked my package? How about buying me a drink? :)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/D1D85QWKJ)
