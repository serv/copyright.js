# Copyright.js

Copyright.js is a JavaScript plugin that updates the year in copyright. Here are some quick facts about Copyright.js.

1. Automatically update the year in copyright text.
2. You can specify the owner of the copyright.
3. No jQuery dependency! Copyright.js is just good ol' JavaScript.
4. Support multiple copyright texts appearing on a page.
5. Support multiple copyright formats.
6. Tiny file footprint. 1.5kb minified.

## Usage

### Using default format

`Copyright © 2014 Jason Kim`

1. Include `copyright.min.js` in the `head` tag of the html file.
    `<script src="copyright.min.js" type="text/javascript"></script>`
2. Use utf-8. Add the following in the `head` tag
    `<meta charset="utf-8">`
3. Include the following in the desired location in the `body` tag.
    `<div class="plugin-copyright" data-owner="[copyright-owner]"></div>`
4. Replace `[copyright-owner]` with the copyright owner name.
5. As a result, you should get something like
    `Copyright © 2014 Jason Kim`

### Using other format

Formats

    Format 1. Copyright © 2014 Jason Kim
    Format 2. © 2014 Jason Kim
    Format 3. Copyright 2014 Jason Kim
    Format 4. © Copyright 1999 to the present, Jason Kim
    Format 5. © 1999 - 2014 Jason Kim
    Format 6. © Copyright 1999 - 2014 Jason Kim

1. Include `copyright.min.js` in the `head` tag of the html file.
    `<script src="copyright.min.js" type="text/javascript"></script>`
2. Use utf-8. Add the following in the `head` tag
    `<meta charset="utf-8">`
3. Include the following in the desired location in the `body` tag.
    `<div class="plugin-copyright" data-owner="[copyright-owner]" data-format="[format-number]"></div>`
4. Replace `[copyright-owner]` with the copyright owner name.
5. Replace `[format-number]` with the copyright owner name.
    If you are using format 4 or 5 or 6, you must specify `data-beginning`. So your copyright div should look like the following.
    `<div class="plugin-copyright" data-owner="[copyright-owner]" data-format="[format-number]" data-beginning="1999"></div>`

Check `example.html` for more examples.

## Contributing to the project

### Reporting a bug

1. [Raise an issue](https://github.com/serv/copyright.js/issues/new)
2. Label the issue as a *bug*.
3. Describe the bug and detail how you can reproduce the bug. Make sure to report OS and browser with the version number you are using.

### Requesting a feature

1. [Raise an issue](https://github.com/serv/copyright.js/issues/new)
2. Label the issue as a *feature*.
3. Describe the feature.

### Making code changes

1. Fork the repository.
2. Make code changes.
3. Test the changes.
4. Make a pull request.

## License

Copyright.js is released under the [MIT License](http://www.opensource.org/licenses/MIT).