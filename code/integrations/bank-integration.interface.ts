import {
  CashInResponse,
  CashOutPayload,
  CashOutResponse,
} from '../interfaces/api-interfaces';
import { Bank, WebhookInterfaces } from './config/bank-integrations';

export default interface BankIntegration {
  serviceBank: Bank;

  getBalance(): number;

  cashOut(payload: CashOutPayload): CashOutResponse;

  cashIn<W extends WebhookInterfaces>(payload: W): CashInResponse;
}
