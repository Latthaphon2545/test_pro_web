const express = require('express')
const app_qr = express();
const QRCode = require('qrcode')
const generatePayload = require('promptpay-qr')
const bodyParser = require('body-parser')
const _ = require('lodash')
const cors = require('cors')

app_qr.use(cors())
app_qr.use(bodyParser.json())
app_qr.use(bodyParser.urlencoded( { extended: true }))

app_qr.post('/generateQR', (req, res) => {
    const amount = parseFloat(_.get(req, ["body", "amount"]));
    const mobileNumber = '0949054456';
    const payload = generatePayload(mobileNumber, { amount });
    const option = {
        color: {
            dark: '#000',
            light: '#fff'
        }
    }
    QRCode.toDataURL(payload, option, (err, url) => {
        if(err) {
            console.log('generate fail')
            return res.status(400).json({
                RespCode: 400,
                RespMessage: 'bad : ' + err
            })  
        } 
        else {
            return res.status(200).json({
                RespCode: 200,
                RespMessage: 'good',
                Result: url
            })  
        }

    })
})

module.exports = app_qr;