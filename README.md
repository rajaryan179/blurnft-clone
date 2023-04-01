# blur-clone

## what to do

1. `cd backend`

2. Create a `.env` file inside the "backend" folder with the following content:

```
MORALIS_API_KEY= YOU KEY HERE
```

3. `npm install`

4. `npm start`

5. `cd ../frontend`

6. `npm install`

7. Go components/getNfts.js and change the chain

```js
const chain = "0x89"; // change this to your chain, 0x1, 0x89 for Mumbai, 0x5 for Goerli
```

7. `npm run dev`
