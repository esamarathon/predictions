export default {
	port: Number(process.env.PORT || 8080),
	rateLimit: {
		windowMs: 60000, // 1 minute
		max: 60, // 60 requests per minute
	},
};
