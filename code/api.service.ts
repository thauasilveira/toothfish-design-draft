import { CashOutPayload } from './interfaces/api-interfaces';
import { BankIntegrationFactory } from './integrations/factories/factory';
import BankIntegration from './integrations/bank-integration.interface';
import {
  Bank,
  WebhookInterfaces,
} from './integrations/config/bank-integrations';

export class ApiService {
  testCashOut(bankService: Bank, payload: CashOutPayload) {
    let bankIntegration: BankIntegration =
      BankIntegrationFactory.factory(bankService);

    // save audit

    try {
      // create cashout at database
      let cashOut = bankIntegration.cashOut(payload);

      // update cashout status
      console.log('Cashout made', bankService);
    } catch (e) {
      console.error(e);
    }
  }

  testCashIn(bankService: Bank, payload: WebhookInterfaces) {
    let bankIntegration: BankIntegration =
      BankIntegrationFactory.factory(bankService);

    // save audit

    try {
      // create cashin at database

      let cashInExchange = bankIntegration.cashIn(payload);

      // exchange.send(cashInExchange);

      // update cashin status
      console.log('Cashin made', bankService);
    } catch (e) {
      console.error(e);
    }
  }
}
