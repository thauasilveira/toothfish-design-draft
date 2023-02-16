import {
  CashInResponse,
  CashOutPayload,
  CashOutResponse,
} from '../../../interfaces/api-interfaces';
import { BankIntegrationNotEnoughFundsException } from '../../exceptions/bank-integration.exception';
import BankIntegration from '../../bank-integration.interface';
import { Bank } from '../../config/bank-integrations';
import Http from '../../../test/http';

export class BTGIntegration implements BankIntegration {
  serviceBank = Bank.BTG;

  getBalance(): number {
    return 10;
  }

  cashOut(payload: CashOutPayload): CashOutResponse {
    if (payload.amount <= this.getBalance()) {
      Http.post('btg/cashout', {});
      return {} as CashOutResponse;
    } else {
      throw new BankIntegrationNotEnoughFundsException(
        this.serviceBank,
        `Not enough funds for cashOut: ${JSON.stringify(payload)}.`
      );
    }
  }

  cashIn<BTGTransactionWebhook>(
    payload: BTGTransactionWebhook
  ): CashInResponse {
    Http.post('exchange/cashin/btg', {});
    return {} as CashInResponse; // map correctly
  }
}
