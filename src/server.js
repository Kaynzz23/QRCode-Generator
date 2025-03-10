import express from 'express';
import genroute from './routes/generateQRcode.route.js';

const app = new express();

app.use('/', genroute);

app.listen(process.env.PORT, () => {
	console.log(`api rodando em ${process.env.PORT}`);
});
