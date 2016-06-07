# Diceware passwords generator

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/235519822cd448ad90c0199336eb7661)](https://www.codacy.com/app/rafaelcpalmeida/ChromeDicewarePasswordsGenerator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rafaelcpalmeida/ChromeDicewarePasswordsGenerator&amp;utm_campaign=Badge_Grade)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cfepfnclehmojjhijpfjapgmcldbjgbj.svg?maxAge=7200)](https://img.shields.io/chrome-web-store/v/cfepfnclehmojjhijpfjapgmcldbjgbj.svg)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/rating-count/cfepfnclehmojjhijpfjapgmcldbjgbj.svg?maxAge=7200)]()
[![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/cfepfnclehmojjhijpfjapgmcldbjgbj.svg?maxAge=7200)]()
[![Chrome Web Store](https://img.shields.io/chrome-web-store/d/cfepfnclehmojjhijpfjapgmcldbjgbj.svg?maxAge=7200)]()

This is a small Google Chrome extension that allows you to generate strong and secure passwords using the well known Diceware algorithm.

# Instructions
Just enter the number of words you want and the separator (if any!) and press that button. It will generate you a brand new password.

# Geek stuff
This plugin uses Vanilla JS and an implementation of the AVL tree (thanks to [Raoul Harel]) in order to quickly iterate over the [list] of words.

There's no way to know which password you generated but if you're paranoid you can disconnect from the Internet and the extension will work the same way.

# Thanks to
- [Freepik] for the beautiful icon
- [Raoul Harel] for the AVL implementation
- [Arnold Reinhold] for the diceware algorithm

# License

MIT

**Made with :heart: in Portugal**

**Software livre c\*ralho! :v:**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Raoul Harel]: <https://github.com/rharel/node-avl-tree/>
   [list]: <http://world.std.com/~reinhold/diceware.wordlist.asc>
   [Freepik]: <http://www.flaticon.com/authors/freepik>
   [Arnold Reinhold]: <http://world.std.com/~reinhold/diceware.html>