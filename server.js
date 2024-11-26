const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const routes = require('./controllers');

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running at 🙊 🙉 🙈 http://localhost:${PORT}`);
});
