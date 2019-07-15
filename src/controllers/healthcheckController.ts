import { Request, Response } from 'express';
import { uptime } from '../services/uptimeService';

export function healthcheck(req: Request, res: Response) {
	res.status(200).json({
		uptime: uptime(),
	});
}
