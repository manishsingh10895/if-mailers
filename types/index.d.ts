// TypeScript Version: 3.0

declare type MailOptions = {
    appName?: string,
    address?: string,
    appLink?: string,
    appLogo?: string,
    social?: {
        facebook?: string,
        twitter?: string,
        youtube?: string,
        insta?: string,
    }
}

declare class Mailer {
    options: MailOptions;

    constructor(options?: MailOptions);

    /**
     * Sets 
     * @param options mail options
     */
    setOptions(options: MailOptions): void;

    /**
     * 
     * @param firstName user name
     * @param link link to verify
     */
    getEmailConfirmation(firstName: string, link: string): string;

    /**
     * Returns html for an invitation email
     * 
     * @param inviter user who has invited the current user
     * @param signupLink link for users to signup
     */
    getInvitation(inviter: string, signupLink: string): string;

    /**
     * Welcome mail string
     * @param firstName user name   
     * 
     */
    getWelcome(firstName: string): string;

    /**
     * 
     * Returns reset password mail
     * 
     * @param firstName user name
     * @param code code for the  user to reset password screen
     */
    getForgotPassword(firstName: string, link: string): string;

    /**
     * Reset reset password email, forced reset, reset by an admin
     * @param email 
     * @param firstName 
     * @param password 
     */
    getPasswordReset(email: string, firstName: string, password: string): string;

    /**
     * 
     * @param firstName firstName of the user
     * @param email email of the new user
     * @param password password of the new user
     * @param link link to new login
     */
    getAccountCreated(firstName: string, email: string, password: string, link: string): string;
}

declare class Stringer {
    /**
     * 
     * @param firstName user name
     * @param link link to confirm
     */
    static getEmailConfirmation(firstName: string, link: string): string;
    /**
     * 
     * Returns reset password mail
     * 
     * @param firstName user name
     * @param code code for the  user to reset password screen
     */
    static getForgotPassword(firstName: string, code: string): string;
    /**
     * @param firstName name of user
     * @param symbol symbol for the token
     * @param fullName fullname of token    
     * @param amount amount of request  
     * @param link link for the app
     */
    static getDeposit(firstName: string, symbol: string, fullName: string, amount: string, link: string): string;
    /**
     * Welcome mail string
     * @param firstName user name   
     * @param link link for app
     */
    static getWelcome(firstName: string, link: string): string;
    /**
     * 
     * @param firstName name of user
     * @param symbol symbol for the token
     * @param fullName fullname of token    
     * @param amount amount of request  
     * @param link link for app
     */
    static getWithdrawalProcessed(firstName: string, symbol: string, fullName: string, amount: string, link: string);
    /**
     * 
     * @param firstName name of user
     * @param symbol symbol for the token
     * @param fullName fullname of token    
     * @param amount amount of request  
     * @param link link to take the user to show request
    */
    static getWithdrawalRequest(firstName: string, symbol: string, fullName: string, amount: string, link: string): string;

    /**
     * 
     * @param firstName firstname of the user
     * @param packageName package bought
     * @param amount amount of package 
     * @param link link for app
     */
    static getPackageBuy(firstName: string, packageName: string, amount: string, link: string): string;
}

export = { Stringer, Mailer }
