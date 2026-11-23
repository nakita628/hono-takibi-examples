type Amount = { currency: string; value: bigint }
type MerchantBalance = {
  availableFund?: Amount | undefined
  deposit?: Amount | undefined
  merchantAccount?: string | undefined
  nextPayout?: Amount | undefined
  pendingBalance?: Amount | undefined
  reserve?: Amount | undefined
}
type CompanyBalances = { merchantBalancesOverview?: MerchantBalance[] | undefined }
type InvalidField = { message: string; name: string; value: string }
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type BalanceTransferType = 'tax' | 'fee' | 'terminalSale' | 'credit' | 'debit' | 'adjustment'
type BalanceTransferRequest = {
  amount: Amount
  fromMerchant: string
  reference?: string | undefined
  toMerchant: string
  type: BalanceTransferType
}
type BalanceTransferResponse = { createdAt: string; pspReference: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/balanceOverview/companies/:companyAccountCode/balances': {
      $get:
        | {
            input: { param: { companyAccountCode: string } } & { query: { currency: string } }
            output: CompanyBalances
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyAccountCode: string } } & { query: { currency: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyAccountCode: string } } & { query: { currency: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyAccountCode: string } } & { query: { currency: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/balanceOverview/merchants/:merchantAccountCode/balances': {
      $get:
        | {
            input: { param: { merchantAccountCode: string } } & { query: { currency: string } }
            output: MerchantBalance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantAccountCode: string } } & { query: { currency: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantAccountCode: string } } & { query: { currency: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantAccountCode: string } } & { query: { currency: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/balanceTransfers': {
      $post:
        | {
            input: { json: BalanceTransferRequest }
            output: BalanceTransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BalanceTransferRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BalanceTransferRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
