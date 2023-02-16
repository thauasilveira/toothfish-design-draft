import {ApiService} from '../api.service';
import {CashOutPayload} from '../interfaces/api-interfaces';
import {Bank} from '../integrations/config/bank-integrations';

// Controller will call the service, this is just a test...

const api = new ApiService();

api.testCashOut(Bank.BS2, {
  amount: 0,
} as CashOutPayload);

api.testCashOut(Bank.BTG, {
  amount: 0,
} as CashOutPayload);

api.testCashOut(Bank.BS2, {
  amount: 1,
} as CashOutPayload);

api.testCashOut(Bank.BTG, {
  amount: 1,
} as CashOutPayload);

api.testCashOut(Bank.BTG, {
  amount: 11,
} as CashOutPayload);
