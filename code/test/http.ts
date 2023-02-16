export default class Http {
  static get(endpoint: string) {
    console.log(`GET ${endpoint}`);
  }
  static post(endpoint: string, payload: any) {
    console.log(`POST ${endpoint}: ${payload.toString()}`);
  }
}
