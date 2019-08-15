import HttpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import { uptime } from '../services/uptimeService';

export function healthcheckEndpoint(req: Request, res: Response) {
	return res.status(HttpStatus.OK).json({
		uptime: uptime(),
	});
}
