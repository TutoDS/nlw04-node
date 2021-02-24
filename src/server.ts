import 'reflect-metadata';
import './database';

import { server } from './configs/environment';
import express from 'express';
import routes from './routes';

const app = express();

app
	// Enable JSON
	.use(express.json())
	// API Routes
	.use('/api', routes)
	// Server Port
	.listen(server.port, () => {
		console.log('[SERVER START]');
	});
