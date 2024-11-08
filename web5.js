// web.js
const express = require('express');
const commander = require('commander');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Commander.js example (basic command)
commander
  .command('sayHello')
  .description('Say hello')
  .action(() => {
    console.log('Hello from Commander.js!');
  });

commander.parse(process.argv);
