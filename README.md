<h1 style="text-align:center">Full Name Parse</h1>

This is a simple name parser, that will chop a name into its components of _prefix_, _first_, _middle_, _initials_, _infix_, _last_ and _suffix_. If something doesn't exist, it will be returned as `null`.

## Installation

**With Yarn**

```
yarn add @braweria/full-name-parser
```

**With NPM**

```
npm i @braweria/full-name-parser
```

## Usage

To use this library, just import `parseName` into your file, and immediatelly start using it!

```js
import { parseName } from "full-name-parser";

const parsedName = parseName("Prof. Steph Alice von Wolfenstein, III");
console.log(parsedName);
```

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

## Tests

```powershell
yarn test
```

or

```powershell
npm run test
```

## License

[MIT](https://opensource.org/licenses/mit-license.php)

## Author

- Wiktoria "Braweria" Mielcarek
- GitHub: https://github.com/Braweria
- Twitter: https://twitter.com/braweria
- LinkedIn: https://www.linkedin.com/in/wiktoria-mielcarek/

## Contribution

You want to help out and make this library better? Feel free to open a PR!

[Check out some of the issues.](https://github.com/Braweria/parse-name/issues)

---

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/D1D85QWKJ)
