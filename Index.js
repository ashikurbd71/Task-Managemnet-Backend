// taskManagement
// 6AcwVmt6rKCiuiQN
const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./Src/Api/Databages/ContectDB.JS');
const port = process.env.PORT || 5000;
const allTask = require('./Src/Api/Route/')
const postTask = require('./src/routes/routes');
const updateTask = require('./src/routes/routes');
const deleteTask = require('./src/routes/routes');
const editTask = require('./src/routes/routes');
const connectMiddleware = require('./src/middleware/middleware');

connectMiddleware(app);
app.use(allTask);
app.use(postTask);
app.use(updateTask);
app.use(deleteTask);
app.use(editTask);


app.get('/health', (req, res) => {
    res.send('Server is good');
})

app.all('*', (req, res, next) => {
    const error = new Error(`Invalid url: [${req.url}]`)
    error.status = 404;
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 5000).json({ message: err.message });
})

const final = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running at localhost: ${port}`);
    })
}
final();
