type TransferBalanceResponse = {
  amount?: number | undefined
  balance_transfer_id?: string | undefined
  created_at?: string | undefined
  from?: string | undefined
  reference?: string | undefined
  to?: string | undefined
}
type ListBalanceTransfersResponse = {
  _embedded?: { balance_transfers?: TransferBalanceResponse[] | undefined } | undefined
}
type UnprovisionedErrorResponse = { detail: string; instance: string; title: string; type: string }
type TransferBalanceOrCreditRequest = {
  amount: number
  from: string
  reference?: string | undefined
  to: string
}
type TransferCreditResponse = {
  amount?: number | undefined
  created_at?: string | undefined
  credit_transfer_id?: string | undefined
  from?: string | undefined
  reference?: string | undefined
  to?: string | undefined
}
type ListCreditTransfersResponse = {
  _embedded?: { 'credit-transfers'?: TransferCreditResponse[] | undefined } | undefined
}
type SubaccountResponse = {
  api_key?: string | undefined
  balance?: number | undefined
  created_at?: string | undefined
  credit_limit?: number | undefined
  name?: string | undefined
  primary_account_api_key?: string | undefined
  suspended?: boolean | undefined
  use_primary_account_balance?: boolean | undefined
}
type SubaccountsAllResponse = {
  _embedded?:
    | {
        primary_account?: SubaccountResponse | undefined
        subaccounts?: SubaccountResponse[] | undefined
      }
    | undefined
}
type NewSubaccountRequest = {
  name: string
  secret?: string | undefined
  use_primary_account_balance?: boolean | undefined
}
type SubaccountCreateResponse = {
  secret?: string | undefined
  api_key?: string | undefined
  balance?: number | undefined
  created_at?: string | undefined
  credit_limit?: number | undefined
  name?: string | undefined
  primary_account_api_key?: string | undefined
  suspended?: boolean | undefined
  use_primary_account_balance?: boolean | undefined
}
type ModifySubaccountRequest = {
  name?: string | undefined
  suspended?: boolean | undefined
  use_primary_account_balance?: boolean | undefined
}
type TransferNumberRequest = {
  country?: string | undefined
  from?: string | undefined
  number?: number | undefined
  to?: string | undefined
}
type TransferNumberResponse = {
  country?: string | undefined
  from?: string | undefined
  number?: string | undefined
  to?: string | undefined
}
type InvalidNumberTransferErrorResponse = {
  detail: string
  instance: string
  title: string
  type: string
}
type ShortcodeNotFound = { detail: string; instance: string; title: string; type: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:api_key/balance-transfers': {
      $get:
        | {
            input: { param: { api_key: string } } & {
              query: {
                start_date: string
                end_date?: string | undefined
                subaccount?: string | undefined
              }
            }
            output: ListBalanceTransfersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string } } & {
              query: {
                start_date: string
                end_date?: string | undefined
                subaccount?: string | undefined
              }
            }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string } } & {
              query: {
                start_date: string
                end_date?: string | undefined
                subaccount?: string | undefined
              }
            }
            output: UnprovisionedErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string } } & {
              query: {
                start_date: string
                end_date?: string | undefined
                subaccount?: string | undefined
              }
            }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: TransferBalanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: UnprovisionedErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: {
              detail: string
              instance: string
              invalid_parameters: { name?: string | undefined; reason?: string | undefined }[]
              title: string
              type: string
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:api_key/credit-transfers': {
      $get:
        | {
            input: { param: { api_key: string } } & {
              query: {
                start_date: string
                end_date?: string | undefined
                subaccount?: string | undefined
              }
            }
            output: ListCreditTransfersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string } } & {
              query: {
                start_date: string
                end_date?: string | undefined
                subaccount?: string | undefined
              }
            }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string } } & {
              query: {
                start_date: string
                end_date?: string | undefined
                subaccount?: string | undefined
              }
            }
            output: UnprovisionedErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string } } & {
              query: {
                start_date: string
                end_date?: string | undefined
                subaccount?: string | undefined
              }
            }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: TransferCreditResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: UnprovisionedErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { api_key: string } } & { json: TransferBalanceOrCreditRequest }
            output: {
              detail: string
              instance: string
              invalid_parameters: { name?: string | undefined; reason?: string | undefined }[]
              title: string
              type: string
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:api_key/subaccounts': {
      $get:
        | {
            input: { param: { api_key: string } }
            output: SubaccountsAllResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string } }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string } }
            output: UnprovisionedErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string } }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { api_key: string } } & { json: NewSubaccountRequest }
            output: SubaccountCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string } } & { json: NewSubaccountRequest }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string } } & { json: NewSubaccountRequest }
            output: UnprovisionedErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string } } & { json: NewSubaccountRequest }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { api_key: string } } & { json: NewSubaccountRequest }
            output: {
              detail: string
              instance: string
              invalid_parameters: { name?: string | undefined; reason?: string | undefined }[]
              title: string
              type: string
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:api_key/subaccounts/:subaccount_key': {
      $get:
        | {
            input: { param: { api_key: string; subaccount_key: string } }
            output: SubaccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string; subaccount_key: string } }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string; subaccount_key: string } }
            output: UnprovisionedErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string; subaccount_key: string } }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { api_key: string; subaccount_key: string } } & {
              json: ModifySubaccountRequest
            }
            output: SubaccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string; subaccount_key: string } } & {
              json: ModifySubaccountRequest
            }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string; subaccount_key: string } } & {
              json: ModifySubaccountRequest
            }
            output: UnprovisionedErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string; subaccount_key: string } } & {
              json: ModifySubaccountRequest
            }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { api_key: string; subaccount_key: string } } & {
              json: ModifySubaccountRequest
            }
            output: {
              detail: string
              instance: string
              invalid_parameters: { name?: string | undefined; reason?: string | undefined }[]
              title: string
              type: string
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:api_key/transfer-number': {
      $post:
        | {
            input: { param: { api_key: string } } & { json: TransferNumberRequest }
            output: TransferNumberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string } } & { json: TransferNumberRequest }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string } } & { json: TransferNumberRequest }
            output: UnprovisionedErrorResponse | InvalidNumberTransferErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string } } & { json: TransferNumberRequest }
            output:
              | { detail: string; instance: string; title: string; type: string }
              | ShortcodeNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { api_key: string } } & { json: TransferNumberRequest }
            output: { detail: string; instance: string; title: string; type: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { api_key: string } } & { json: TransferNumberRequest }
            output: {
              detail: string
              instance: string
              invalid_parameters: { name?: string | undefined; reason?: string | undefined }[]
              title: string
              type: string
            }
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
