import {BS2TransactionWebhook} from '../modules/bs2/interfaces/interfaces';
import {BS2Integration} from '../modules/bs2/bs2.integration';
import {BTGTransactionWebhook} from '../modules/btg/interfaces/interfaces';
import {BTGIntegration} from '../modules/btg/btg.integration';

// Banks available and their keys
export enum Bank {
  BS2 = 'bs2',
  BTG = 'btg',
}

// Webhooks interfaces support
export type WebhookInterfaces = BS2TransactionWebhook | BTGTransactionWebhook;

// Integration classes for each bank
export const bankIntegrations = {
  [Bank.BS2]: BS2Integration,
  [Bank.BTG]: BTGIntegration,
};
