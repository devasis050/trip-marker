
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const axios = require('axios');
const cookieParser = require('cookie-parser');
dotenv.config();
const distPath = path.join(__dirname, '..', 'dist');

app.use(cookieParser());
app.use('/dist', express.static(distPath));

app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, '/../index.html')
    res.sendFile(htmlPath);
})

app.get('/oauth/redirect', (req, res) => {
    const url = `${process.env.SERVER_URL}/auth/code`;
    if(req.query.error) {
        axios.post(url, {error: req.query.error});
        res.redirect('/');
    } else {
        axios.post(url, {code: req.query.code})
        .then((serverResp) => {
            console.log('setting cookie', serverResp.data.sessionId)
            res.cookie("userSession", serverResp.data.sessionId);
            res.redirect('/');
        })
        .catch(ex => {
            console.log('Exception in server call123', ex);
            res.redirect('/');
        });
    }
})

app.listen(process.env.APP_PORT, () => console.log(`app started at ${process.env.APP_PORT}`));