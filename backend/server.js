const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 6767;
app.use(cors());
app.get('/', (req, res) => {
    res.send('ha ha ha');

})

app.listen(PORT, () => {
    console.log(`Server is running at local host http://localhost:${PORT}`);
});