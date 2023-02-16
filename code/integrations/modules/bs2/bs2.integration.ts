import {
  CashInResponse,
  CashOutPayload,
  CashOutResponse,
} from '../../../interfaces/api-interfaces';
import { BankIntegrationNotEnoughFundsException } from '../../exceptions/bank-integration.exception';
import BankIntegration from '../../bank-integration.interface';
import { Bank } from '../../config/bank-integrations';
import Http from '../../../test/http';

export class BS2Integration implements BankIntegration {
  serviceBank = Bank.BS2;

  getBalance(): number {
    return 0;
  }

  cashOut(payload: CashOutPayload): CashOutResponse {
    if (payload.amount <= this.getBalance()) {
      Http.post('bs2/cashout', {});
      return {} as CashOutResponse;
    } else {
      throw new BankIntegrationNotEnoughFundsException(
        this.serviceBank,
        `Not enough funds for cashOut: ${JSON.stringify(payload)}.`
      );
    }
  }

  cashIn<BS2TransactionWebhook>(
    payload: BS2TransactionWebhook
  ): CashInResponse {
    Http.post('exchange/cashin/bs2', {});
    return {} as CashInResponse; // map correctly
  }
}
