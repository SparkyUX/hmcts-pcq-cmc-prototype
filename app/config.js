// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {

  // Set the order of the questions, 
  // remove any not required, the full list is  questionOrder: ['age','language','sex','gender','sexual-orientation','marriage','ethnicity','religion','disability','pregnancy','exit']
  // keep lower case as these are the file names
  // Leave exit as the last page

  questionOrder: [
  'language',
  'sex',
  'gender',
  'sexual-orientation',
  'marriage',
  'ethnicity',
  'religion',
  'disability',
  'pregnancy',
  'exit'],

  // Set values for the originating service, these are used if the process.env are not set 

  // Set the type of user e.g. appellant, applicant, respondent, defendant. 
  // probate is either single executor or multiple exectors, used for return URL 
  // serviceUserTypeA: 'single',
  // serviceUserTypeB: 'multiple',

  // Set the return page, this will determine the destination when returning to the originating service
  // if there are options based on the serviceUserType the correct url is selected in server.js. 
  // if query string is passed this will be compared with the service userType to determine the return url

  // serviceReturnUrlA: 'https://probate-pcq-prototype.herokuapp.com/tasklist/review-and-confirm',
  // serviceReturnUrlB: '',


  // Set the type of user action e.g. application, response, appeal. This will determine the text on the wrapper pages
  // serviceUserAction:'application',

  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Equality and diversity questions',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'false',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true'

}
