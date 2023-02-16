import BankIntegration from '../bank-integration.interface';
import { Bank, bankIntegrations } from '../config/bank-integrations';

export class BankIntegrationFactory {
  static factory(bankService: Bank): BankIntegration {
    return new bankIntegrations[bankService]();
  }
}
