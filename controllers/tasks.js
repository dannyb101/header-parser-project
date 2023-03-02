const getHeaders = (req, res) => {
	res.json({
		ipaddress: req.ip,
		language: req.get("accept-language"),
		software: req.get("user-agent"),
	});
};

module.exports = getHeaders;
