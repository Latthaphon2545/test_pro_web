const express = require('express');
const path = require('path');
const router = require('./routes/myRouter');
const app = express();
const socketIO = require('socket.io');
const cors = require('cors');
const QRCode = require('qrcode');
const generatePayload = require('promptpay-qr');
const bodyParser = require('body-parser');
const _ = require('lodash');

// Use the cors middleware with specific origin and options
app.use(cors({
    origin: 'https://hmv8210m-8000.asse.devtunnels.ms', // Replace with your frontend's origin
    methods: 'GET,POST', // Specify the allowed HTTP methods
    credentials: true, // Allow cookies and credentials to be sent with the request
}));

app.use(router);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

const io = socketIO(server);
io.on('connection', (socket) => {
    socket.on('order', (orderData) => {
        // Validate and handle the order data
        // console.log('Received order:', orderData);
        io.sockets.emit('shop', orderData);
    });

    socket.on('done', (doneOrder) => {
        // Validate and handle the customer data
        // console.log('done:', doneOrder);
        io.sockets.emit('pay', doneOrder);
    });

    socket.on('productsDB', (payOrder) => {
        // Validate and handle the customer data
        // console.log('pay:', payOrder);
        io.sockets.emit('products', payOrder);
    });
});

app.post('/generateQR', (req, res) => {
    const amount = parseFloat(_.get(req, ["body", "amount"]));
    const mobileNumber = '0949054456';
    const payload = generatePayload(mobileNumber, { amount });
    const option = {
        color: {
            dark: '#000',
            light: '#fff',
        },
    };
    QRCode.toDataURL(payload, option, (err, url) => {
        if (err) {
            console.log('generate fail');
            return res.status(400).json({
                RespCode: 400,
                RespMessage: 'bad : ' + err,
            });
        } else {
            return res.status(200).json({
                RespCode: 200,
                RespMessage: 'good',
                Result: url,
            });
        }
    });
});

module.exports = app;
