# hmcts-pcq-prototype-master #
These are the protected characteristics questions (PCQs) to be integrated into other services

This project is designed to be called from other hmcts services prototypes to determine where to collect the user's protected characteristics.

## Question order ##

To set the order and which questions to ask, change the value of questionOrder in the config.js file

## Environment variables ##

It is deployed with heroku and uses process.env variables to determine the return service url and the type of user. These fields are also defined in the env-variables.env file for dev testing. Which variables to use is determined in server.js by checking the environment and in routes.js for the logic below.

The SERVICE_USER_TYPE_A is used to define the type of user and which return url (serviceReturnUrl) is used. If there is only one user type then there will be only one return url SERVICE_RETURN_URL_A. In this case leave SERVICE_USER_TYPE_B and SERVICE_RETURN_URL_B blank.

If there are two user types then the user type is passed to the PCQs via a query string on the URL from the initiating service It is checked against the SERVICE_USER_TYPE_B, if they match then SERVICE_RETURN_URL_B is used as the return. This means that if no query string is passed (i.e. only one user type for this service) the return url defaults to SERVICE_RETURN_URL_A.

The serviceUserAction is used to display the action of the user in the information panel on the introduction page e.g. application
"Your answers won't affect your {{serviceUserAction}}."  This is determined (hard coded with a switch command) in the routes.js file
