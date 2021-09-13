// set your stie key here ...
const SITE_KEY = "";

// handleButtonClick ...
document.addEventListener("click", function (e) {
	if (!e.target.matches(".generate-token")) return;

	e.preventDefault();

	grecaptcha.ready(function () {
		grecaptcha.execute(SITE_KEY, { action: "login" }).then(function (token) {
			console.log({ token });
			// Add your logic to submit to your backend server here.
		});
	});
});
