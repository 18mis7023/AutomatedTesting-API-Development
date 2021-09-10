const validmails = require('./mailsvalid.json')
const timer = ms => new Promise(res => setTimeout(res, ms))
const { verifyExistence } = require('email-lookup');
var mailslength=validmails.emails.length;
(async () => {
    for(var i=0;i<mailslength;i++)
    {
      sleep(10000);
      if (checkmail(validmails.emails[i])) {
        sleep(5000);
        try {
          const response = await verifyExistence(validmails.emails[i]);
          console.log(validmails.emails[i]+" is :");
          console.log(response);
        } catch (error) {
          try {
            const response = await verifyExistence(validmails.emails[i]);
            console.log(validmails.emails[i]+" is :");
            console.log(response);
          } catch (error) {
            console.log(validmails.emails[i]+" is :");
            console.log(error);
          }
          
        }
      } 
    }
})();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function checkmail(mail) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
      return (true)
  }
  console.log("You have entered an invalid email address! and mail id you entered is "+mail);
  return (false) 
}
