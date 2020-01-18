// TypeScript Version: 3.0

/// <reference types="node" />

class Stringer {
    static getEmailConfirmation(firstName: string, link: string): string;
    static getForgotPassword(firstName: string, link: string): string;
    static getDeposit(firstName: string, symbol: string, fullName: string, amount: string): string;
}

export = Stringer