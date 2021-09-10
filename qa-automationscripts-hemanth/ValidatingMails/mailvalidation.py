import re
import smtplib
import dns.resolver
import json


def check_mail(mail):
    inputAddress = mail
    addressToVerify = str(inputAddress)
    match = re.match(regex, addressToVerify)
    if match == None:
        print('Bad Syntax')
    else:
        splitAddress = addressToVerify.split('@')
        domain = str(splitAddress[1])
        # MX record lookup
        records = dns.resolver.resolve(domain, 'MX')
        mxRecord = records[0].exchange
        mxRecord = str(mxRecord)
        # SMTP lib setup (use debug level for full output)
        server = smtplib.SMTP()
        server.set_debuglevel(0)
        # SMTP Conversation
        server.connect(mxRecord)
        server.helo(server.local_hostname)  ### server.local_hostname(Get local server hostname)
        server.mail(fromAddress)
        code, message = server.rcpt(str(addressToVerify))
        server.quit()
        # Assume SMTP response 250 is success
        if code == 250:
            print('Mail : %(i)s || Domain is : %(d)s || Status is : Success(Valid)' % {'i': mail, 'd': domain})
        else:
            print('Mail :  %(i)s || Domain is : %(d)s || Status is : Bad(Not Valid)' % {'i': mail, 'd': domain})


f = open('mails.json',)
json_obj = json.load(f)
fromAddress = 'corn@bt.com'
regex = '^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$'
for i in json_obj['mail']:
    check_mail(i)


