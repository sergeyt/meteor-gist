[![Build Status](https://drone.io/github.com/sergeyt/meteor-gist/status.png)](https://drone.io/github.com/sergeyt/meteor-gist/latest)

[![Deps Status](https://david-dm.org/sergeyt/meteor-gist.png)](https://david-dm.org/sergeyt/meteor-gist)
[![DevDeps Status](https://david-dm.org/sergeyt/meteor-gist/dev-status.png)](https://david-dm.org/sergeyt/meteor-gist#info=devDependencies)

# meteor-gist

Provides a dead simple way to get and inject public gist into dynamic meteor template.

## Usage

Put `{{{gist <user> <id>}}}` in your meteor template where:

* `<user>` - github user name of gist owner
* `<id>` - gist id

### Example

```html
<template name="example">
  <div class="gist">
  	{{{gist "sergeyt" "7329871"}}}
  </div>
</template>
```

## TODO

* Port for browser
