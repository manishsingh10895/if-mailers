const fs = require('fs')

const APP = 'BetaFunds';
const ADDRESS = 'Uphold, Inc. All rights reserved. Suite A, 6 Honduras Street | London, England, EC1Y 0TH Uphold HQ Inc. NMLS ID No. 1269875';

class Stringer {

    static replaceBaseVariables(html) {
        html = html.replace(/<%app%>/, APP);
        html = html.replace(/<%address%>/, ADDRESS);

        return html;
    }

    static multiReplacement(html, keyvalue) {
        for (var key in keyvalue) {
            html = html.replace(new RegExp(`<%${key}%>`, 'g'))
        }

        return html;
    }

    static getEmailConfirmation(firstName, link) {
        let html = fs.readFileSync(__dirname + '/email-confirmation.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, link });
        html = Stringer.replaceBaseVariables(html);


        return html;
    }

    static getForgotPassword(firstName, link) {
        let html = fs.readFileSync(__dirname + '/forgot-password.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, link });

        html = Stringer.multiReplacement(html, { firstName, link });


        return html;
    }

    static getDeposit(firstName, symbol, fullName, amount) {
        let html = fs.readFileSync(__dirname + '/deposit.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, symbol, fullName, amount });

        html = Stringer.replaceBaseVariables(html);


        return html;
    }

    static getWelcome(firstName, link) {
        let html = fs.readFileSync(__dirname + '/welcome.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, link });

        html = Stringer.replaceBaseVariables(html);

        return html;
    }

    static getWithdrawalProcessed(firstName, symbol, fullName, amount) {
        let html = fs.readFileSync(__dirname + '/withdrawal-processed.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, symbol, fullName, amount });

        html = Stringer.replaceBaseVariables(html);


        return html;
    }

    static getWithdrawalRequest(firstName, symbol, fullName, amount, link) {
        let html = fs.readFileSync(__dirname + '/withdrawal-request.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, symbol, fullName, amount, link });

        html = Stringer.replaceBaseVariables(html);

        return html;
    }

    static getPackageBuy(firstName, packageName, amount) {
        let html = fs.readFileSync(__dirname + '/package-buy.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, packageName, amount });

        html = Stringer.replaceBaseVariables(html);

        return html;
    }
}

module.exports = Stringer;