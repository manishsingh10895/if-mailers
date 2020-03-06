// TypeScript Version: 3.0

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
     */
    static getDeposit(firstName: string, symbol: string, fullName: string, amount: string): string;
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
     */
    static getWithdrawalProcessed(firstName: string, symbol: string, fullName: string, amount: string);
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
     */
    static getPackageBuy(firstName: string, packageName: string, amount: string): string;
}

export = Stringer