# fivem-resource-context
A simplified resource to gather metadata for a key on a specific resource.

## File manifest (`./resource_context`)

> Copy this from your zip file / repo clone to your server environment.

- `fx_manifest.lua`
- [`./index.js`](reference/index.js) is the logic of the code itself.
- `README.md` is there as a minimalist version of this readme, only including details of what it exports and where it originates from.
- `LICENSE` is a copy of the same one found at the root of the project.

---

### Unnecessary files (`./reference/*`)

- [`./index.ts`](reference/index.ts) is the file this code was derived from... yes it was written in TypeScript first, then it was downgraded.
- [`./global.d.ts`](reference/global.d.ts) is the file used to make TypeScript happy, if you intend to inspect or modify the code yourself.
  > Declarations in this file are found within the [Natives Reference (docs.fivem.net)](https://docs.fivem.net/natives/).

> Support for native TypeScript may arrive when I am more confident with FiveM's yarn integration.
> *Source types are a bit off, to say the least.*

## Utilizing

```js
// JavaScript
const { GetResourceContext, GetResourceIterator } = exports.resource_context;

const resourceEntry = GetResourceContext("myresource", "mydata", 4);

for (const entry of exports.GetResourceIterator("myresource", "mydata")) {
  console.log(entry); // { resource, key, value, extra? }
}
```

```lua
-- Lua
local getResourceContext = exports.resource_context:getResourceContext
local getResourceIterator = exports.resource_context:getResourceIterator

local resourceEntry = getResourceContext("myresource", "mydata", 4)

for entry in getResourceIterator("myresource", "mydata") do
  print(entry)
end
```

## Support

For support with this resource, please join the [Discord server](https://discord.gg/z5DPVHNBuw).

- [Resource Manifest (docs.fivem.net)](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)