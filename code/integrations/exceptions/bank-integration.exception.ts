import { Bank } from '../config/bank-integrations';

export default class BankIntegrationException extends Error {
  constructor(bank: Bank, m: string) {
    super(`[${bank}] ${m}`);
  }
}

export class BankIntegrationNotEnoughFundsException extends BankIntegrationException {
  constructor(bank: Bank, m: string) {
    super(bank, m);
  }
}
