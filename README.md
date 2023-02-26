## Getting Started


```sh
# Creating base code
npm init -y

# In package.json
"scripts": {
    "start:types": "tsc basics/types.ts --outdir dist/ && node dist/types.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},

# Start
npm run start:types
```