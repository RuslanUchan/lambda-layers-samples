# Lambda Layers Samples

To use:
`cd build && zip -r dependencies.zip nodejs`

Then upload the `dependencies.zip` to Lambda layers

Check `samples/index.js` for example handlers

_Notes_
- `app/`: local dependencies testing
- `build/`: build folder
- `colors/`: dependencies folder
- `samples/`: handlers example

This code is taken from [how to create node modules](https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module)