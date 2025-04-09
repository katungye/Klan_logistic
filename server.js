const express = require('express');
const eventRoutes = require('./routes/eventRoutes');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';

// Middleware
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/lib/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/lib/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/lib/datatables', express.static(path.join(__dirname, 'node_modules/datatables.net/js')));
app.use('/lib/datatables-css', express.static(path.join(__dirname, 'node_modules/datatables.net-dt/css')));

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.use('/', eventRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://${ip}:${port}`);
});
