let https = require('https');
let fs = require('fs');

https
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    const filseStream = fs.createReadStream('./content/big.txt', 'utf8');
    filseStream.on('open', () => {
      filseStream.pipe(res);
    });
    filseStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
