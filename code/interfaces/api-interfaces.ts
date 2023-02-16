import { OperationType } from './operation-type';
import { BankAccount, PixAccount } from './sample-interfaces';

export interface CashOutPayload {
  type: OperationType;
  source: BankAccount;
  target: BankAccount | PixAccount;
  amount: number;
}

export interface CashOutResponse {}

export interface CashInResponse {}
