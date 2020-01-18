const fs = require('fs')

const APP = 'BetaFunds';
const ADDRESS = 'Uphold, Inc. All rights reserved. Suite A, 6 Honduras Street | London, England, EC1Y 0TH Uphold HQ Inc. NMLS ID No. 1269875';

class Stringer {

    static replaceBaseVariables(html) {
        html = html.replace(/<%app%>/, APP);
        html = html.replace(/<%address%>/, ADDRESS);

        return html;
    }

    static getEmailConfirmation(firstName, link) {
        let html = fs.readFileSync(__dirname + '/email-confirmation.html').toString('utf-8');

        html = html.replace(/<%firstName%>/g, firstName);
        html = html.replace(/<%link%>/g, link);

        html = Stringer.replaceBaseVariables(html);

        console.log(html);
        return html;
    }

    static getForgotPassword(firstName, link) {
        let html = fs.readFileSync(__dirname + '/forgot-password.html').toString('utf-8');

        html = html.replace(/<%firstName%>/g, firstName);
        html = html.replace(/<%link%>/g, link);

        html = Stringer.replaceBaseVariables(html);

        console.log(html);
        return html;
    }

    static getDeposit(firstName, symbol, fullName, amount) {
        let html = fs.readFileSync(__dirname + '/deposit.html').toString('utf-8');

        html = html.replace(/<%firstName%>/g, firstName);
        html = html.replace(/<%symbol%>/g, symbol);
        html = html.replace(/<%fullName%>/g, fullName);
        html = html.replace(/<%amount%>/g, amount);

        html = Stringer.replaceBaseVariables(html);

        console.log(html);
        return html;
    }
    
}

Stringer.getEmailConfirmation('Manish', 'link')

module.exports = Stringer;