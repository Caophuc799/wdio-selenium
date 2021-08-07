# Setup
npm install --save-dev @wdio/cli
npx wdio config
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register

Config prettier, babel.config.js and add port to wdio.conf.js and update mochaOpts 

```
 mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    require: ['@babel/register']
},
```
# Some common syntax:
It is in /tests/example.js
