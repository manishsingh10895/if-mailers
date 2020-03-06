const fs = require('fs')

const APP = 'BetaFunds';
const ADDRESS = 'Betafunds,\n Cayman Islands';

const FACEBOOK = 'https://www.facebook.com/BetaFunds-107325990771705/';
const TWITTER = 'https://twitter.com/BetaFunds';
const YT = 'https://www.youtube.com/channel/UCvKIoglitJmvVGHkn94b-UQ/';
const INSTA = 'https://www.instagram.com/betafunds_/';

class Stringer {
    static replaceBaseVariables(html) {
        html = html.replace(/<%app%>/, APP);
        html = html.replace(/<%address%>/, ADDRESS);

        html = this.setFooterLinks(html);

        return html;
    }

    static multiReplacement(html, keyvalue) {
        for (var key in keyvalue) {
            html = html.replace(new RegExp(`<%${key}%>`, 'g'), keyvalue[key])
        }

        return html;
    }

    static setFooterLinks(html) {
        return Stringer.multiReplacement(html, {
            'link-facebook': FACEBOOK,
            'link-twitter': TWITTER,
            'link-insta': INSTA,
            'link-youtube': YT
        })
    }

    static getEmailConfirmation(firstName, link) {
        let html = fs.readFileSync(__dirname + '/lib' + '/email-confirmation.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, link });
        html = Stringer.replaceBaseVariables(html);


        return html;
    }

    static getForgotPassword(firstName, code, link) {
        let html = fs.readFileSync(__dirname + '/lib' + '/forgot-password.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, code });
        html = Stringer.replaceBaseVariables(html);

        return html;
    }

    static getDeposit(firstName, symbol, fullName, amount, link) {
        let html = fs.readFileSync(__dirname + '/lib' + '/deposit.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, symbol, symbollc: symbol.toLowerCase(), fullName, amount, link });

        html = Stringer.replaceBaseVariables(html);


        return html;
    }

    static getWelcome(firstName, link) {
        let html = fs.readFileSync(__dirname + '/lib' + '/welcome.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, link });

        html = Stringer.replaceBaseVariables(html);

        return html;
    }

    static getWithdrawalProcessed(firstName, symbol, fullName, amount, link) {
        let html = fs.readFileSync(__dirname + '/lib' + '/withdrawal-processed.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, symbol, symbollc: symbol.toLowerCase(), fullName, amount, link });

        html = Stringer.replaceBaseVariables(html);


        return html;
    }

    static getPackageBuy(packageName, firstName, amount, link) {
        let html = fs.readFileSync(__dirname + '/lib' + '/package-buy.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, packageName, amount, link });

        html = Stringer.replaceBaseVariables(html);

        return html;
    }

    static getWithdrawalRequest(firstName, symbol, fullName, amount, link) {
        let html = fs.readFileSync(__dirname + '/lib' + '/withdrawal-request.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, symbol, symbollc: symbol.toLowerCase(), fullName, amount, link });

        html = Stringer.replaceBaseVariables(html);

        return html;
    }

    static getPackageBuy(firstName, packageName, amount, link) {
        let html = fs.readFileSync(__dirname + '/lib' + '/package-buy.html').toString('utf-8');

        html = Stringer.multiReplacement(html, { firstName, packageName, amount, link });

        html = Stringer.replaceBaseVariables(html);

        return html;
    }
}

console.log(Stringer.getPackageBuy('Randua', 'Manishj', '123', 'https://localhost:2303'));

module.exports = Stringer;