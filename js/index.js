const path = require('path');
const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, 'index.html');
    res.sendFile(filePath);
})

app.listen(port, () => {
  console.log(`Your app is live at ${port}`)
})