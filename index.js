const app = require('./app');
const port = process.env.PORT || 8080;

app.listen(process.env.PORT, () => console.log(`App listening on port ${port}`));
