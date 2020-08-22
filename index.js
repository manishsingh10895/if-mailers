const fs = require('fs')

const APP = 'BetaFunds';
const ADDRESS = 'Betafunds,\n Cayman Islands';

const FACEBOOK = 'https://www.facebook.com/BetaFunds-107325990771705/';
const TWITTER = 'https://twitter.com/BetaFunds';
const YT = 'https://www.youtube.com/channel/UCvKIoglitJmvVGHkn94b-UQ/';
const INSTA = 'https://www.instagram.com/betafunds_/';
const TEL = '';
const REDDIT = '';
const LOGO_URL = 'https://betafunds.s3.ap-south-1.amazonaws.com/logo-fulltext-transparent.png';
const APP_LINK = 'https://betafunds.com';


class Mailer {
    options = {
        appName: APP,
        address: ADDRESS,
        appLogo: LOGO_URL,
        social: {
            facebook: FACEBOOK,
            twitter: TWITTER,
            youtube: YT,
            insta: INSTA,
        },
        appLink: APP_LINK
    }

    constructor(options) {
        if (options)
            this.options = {
                ...this.options,
                social: {
                    ...this.options.social,
                    ...options.social
                },
                ...options
            }
    }

    /**
     * Sets options 
     * @param {*} options 
     */
    setOptions(options) {
        this.options = {
            ...this.options,
            social: {
                ...this.options.social,
                ...options.social
            },
            ...options
        }
    }

    _readEmailFile(fileName) {
        let html = fs.readFileSync(__dirname + '/lib' + `/${fileName}.html`).toString('utf-8');

        return html;
    }

    replaceBaseVariables(html) {
        html = html.replace(/<%app%>/g, this.options.appName);
        html = html.replace(/<%address%>/g, this.options.address);
        html = html.replace(/<%appLogo%>/g, this.options.appLogo);

        html = this.setFooterLinks(html);

        return html;
    }

    setFooterLinks(html) {
        return Stringer.multiReplacement(html, {
            'link-facebook': this.options.social.facebook,
            'link-twitter': this.options.social.twitter,
            'link-insta': this.options.social.insta,
            'link-youtube': this.options.social.youtube,
            'link-telegram': TEL,
            'link-reddit': REDDIT
        })
    }

    getInvitation(inviter, signupLink) {
        let html = this._readEmailFile('invite');

        html = Stringer.multiReplacement(html, { inviter, appLink: this.options.appLink, link: signupLink });

        html = this.replaceBaseVariables(html);

        return html;
    }

    getEmailConfirmation(firstName, link) {
        let html = this._readEmailFile('email-confirmation');

        html = Stringer.multiReplacement(html, { firstName, link });

        html = this.replaceBaseVariables(html);

        return html;
    }

    getWelcome(firstName) {
        let html = this._readEmailFile('welcome');

        html = Stringer.multiReplacement(html, { firstName, link: this.options.appLink });
        html = this.replaceBaseVariables(html);

        return html;
    }

    getPasswordReset(email, firstName, password) {
        let html = this._readEmailFile('password-reset');

        html = Stringer.multiReplacement(html, { firstName, link: this.options.appLink, email, password });
        html = this.replaceBaseVariables(html);

        return html;
    }

    getForgotPassword(firstName, link) {
        let html = this._readEmailFile('forgot-password');

        html = Stringer.multiReplacement(html, { firstName, link });
        html = this.replaceBaseVariables(html);

        return html;
    }

    getAccountCreated(firstName, email, password, link) {
        let html = this._readEmailFile('account-created');

        html = Stringer.multiReplacement(html, { firstName, email, password, link: link });

        html = this.replaceBaseVariables(html);

        return html;
    }
}

class Stringer {
    static replaceBaseVariables(html) {
        html = html.replace(/<%app%>/g, APP);
        html = html.replace(/<%address%>/g, ADDRESS);

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
            'link-youtube': YT,
            'link-telegram': TEL,
            'link-reddit': REDDIT
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

module.exports = {
    Stringer,
    Mailer
}
