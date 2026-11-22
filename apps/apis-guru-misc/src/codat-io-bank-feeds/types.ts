type DateTime = string
type BankFeedAccount = {
  accountName?: (string | null) | undefined
  accountNumber?: (string | null) | undefined
  accountType?: (string | null) | undefined
  balance?: (number | null) | undefined
  currency?: (string | null) | undefined
  feedStartDate?: DateTime | undefined
  id: string
  modifiedDate?: DateTime | undefined
  sortCode?: (string | null) | undefined
  status?: (string | null) | undefined
}
type BankFeedAccounts = BankFeedAccount[]
type BankTransactions = {
  accountId?: (string | null) | undefined
  transactions?:
    | (
        | {
            amount?: number | undefined
            balance?: number | undefined
            clearedOnDate?: DateTime | undefined
            counterparty?: (string | null) | undefined
            description?: (string | null) | undefined
            id?: string | undefined
            reconciled?: boolean | undefined
            reference?: (string | null) | undefined
            transactionType?:
              | 'Unknown'
              | 'Credit'
              | 'Debit'
              | 'Int'
              | 'Div'
              | 'Fee'
              | 'SerChg'
              | 'Dep'
              | 'Atm'
              | 'Pos'
              | 'Xfer'
              | 'Check'
              | 'Payment'
              | 'Cash'
              | 'DirectDep'
              | 'DirectDebit'
              | 'RepeatPmt'
              | 'Other'
              | undefined
            modifiedDate?: DateTime | undefined
            sourceModifiedDate?: DateTime | undefined
          }[]
        | null
      )
    | undefined
}
type HRef = { href?: string | undefined }
type Links = { current: HRef; next?: HRef | undefined; previous?: HRef | undefined; self: HRef }
type BankTransactionsResponse = {
  results?: BankTransactions[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PushOptionProperty = {
  description: string
  displayName: string
  options?:
    | (
        | {
            description?: string | undefined
            displayName?: string | undefined
            required?: boolean | undefined
            type?:
              | 'Array'
              | 'Object'
              | 'String'
              | 'Number'
              | 'Boolean'
              | 'DateTime'
              | 'File'
              | 'MultiPart'
              | undefined
            value?: string | undefined
          }[]
        | null
      )
    | undefined
  properties?: ({ [x: string]: PushOptionProperty } | null) | undefined
  required: boolean
  type: 'Array' | 'Object' | 'String' | 'Number' | 'Boolean' | 'DateTime' | 'File' | 'MultiPart'
  validation?:
    | {
        information?:
          | (
              | { details: string; field?: string | undefined; ref?: (string | null) | undefined }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | { details: string; field?: string | undefined; ref?: (string | null) | undefined }[]
              | null
            )
          | undefined
      }
    | undefined
}
type PushOption = {
  description?: string | undefined
  displayName: string
  options?:
    | (
        | {
            description?: string | undefined
            displayName?: string | undefined
            required?: boolean | undefined
            type?:
              | 'Array'
              | 'Object'
              | 'String'
              | 'Number'
              | 'Boolean'
              | 'DateTime'
              | 'File'
              | 'MultiPart'
              | undefined
            value?: string | undefined
          }[]
        | null
      )
    | undefined
  properties?: ({ [x: string]: PushOptionProperty } | null) | undefined
  required: boolean
  type: 'Array' | 'Object' | 'String' | 'Number' | 'Boolean' | 'DateTime' | 'File' | 'MultiPart'
  validation?:
    | ({
        information?:
          | (
              | { details: string; field?: string | undefined; ref?: (string | null) | undefined }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | { details: string; field?: string | undefined; ref?: (string | null) | undefined }[]
              | null
            )
          | undefined
      } | null)
    | undefined
}
type DataType =
  | 'accountTransactions'
  | 'balanceSheet'
  | 'bankAccounts'
  | 'bankTransactions'
  | 'billCreditNotes'
  | 'billPayments'
  | 'bills'
  | 'cashFlowStatement'
  | 'chartOfAccounts'
  | 'company'
  | 'creditNotes'
  | 'customers'
  | 'directCosts'
  | 'directIncomes'
  | 'invoices'
  | 'items'
  | 'journalEntries'
  | 'journals'
  | 'paymentMethods'
  | 'payments'
  | 'profitAndLoss'
  | 'purchaseOrders'
  | 'salesOrders'
  | 'suppliers'
  | 'taxRates'
  | 'trackingCategories'
  | 'transfers'
  | 'banking-accountBalances'
  | 'banking-accounts'
  | 'banking-transactionCategories'
  | 'banking-transactions'
  | 'commerce-companyInfo'
  | 'commerce-customers'
  | 'commerce-disputes'
  | 'commerce-locations'
  | 'commerce-orders'
  | 'commerce-paymentMethods'
  | 'commerce-payments'
  | 'commerce-productCategories'
  | 'commerce-products'
  | 'commerce-taxComponents'
  | 'commerce-transactions'
type CreateBankTransactionsResponse = {
  data?: BankTransactions | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: BankFeedAccounts
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { companyId: string; connectionId: string } } & { json: BankFeedAccounts }
        output: BankFeedAccounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts/:accountId': {
      $patch: {
        input: { param: { companyId: string; connectionId: string; accountId: string } } & {
          json: BankFeedAccount
        }
        output: BankFeedAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bankAccounts/:accountId/bankTransactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BankTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/bankAccounts/:accountId/bankTransactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bankAccounts/:accountId/bankTransactions': {
      $post: {
        input: { param: { companyId: string; connectionId: string; accountId: string } } & {
          query: {
            allowSyncOnPushComplete?: boolean | undefined
            timeoutInMinutes?: number | undefined
          }
        } & { json: BankTransactions }
        output: CreateBankTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
