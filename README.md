# stdweb

Make it look like your website is printed line by line using just pure css!

## Compatibility

All features of stdweb work on Chrome. Internet Explorer is partially supported (Maybe a good task for a pull request? ;) )

## Usage

1. Add stdweb to you page stylesheets.
2. Add following html snippet

```html
<div class="stdweb">
    <div class="stdweb-line stdweb-trail" />
</div>
```

### Additional styling configuration

* If you just want to print the lines at once (no "character print") omit the inner div with the class `stdweb-line`.
* If you don't want the "crt ghosting"-effect you can disable it by omitting the class `stdweb-trail`

### Customize

You can override some sass-variables to customize the behaviour. Variables are defined and documented in [src/_variables.scss](src/_variables.scss)

### Building

1. `npm i`
2. `npm run build`

If you like continuous builds you can run `npm run watch` instead of `npm run build`

## What does it look like?

> ![preview](docs/preview.gif)
