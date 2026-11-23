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
type BankTransactionsBankTransactionType =
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
type BankTransactionsBankTransactionLine = {
  amount?: number | undefined
  balance?: number | undefined
  clearedOnDate?: DateTime | undefined
  counterparty?: (string | null) | undefined
  description?: (string | null) | undefined
  id?: string | undefined
  reconciled?: boolean | undefined
  reference?: (string | null) | undefined
  transactionType?: BankTransactionsBankTransactionType | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type BankTransactions = {
  accountId?: (string | null) | undefined
  transactions?: (BankTransactionsBankTransactionLine[] | null) | undefined
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
type PushOptionPushOptionType =
  | 'Array'
  | 'Object'
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'DateTime'
  | 'File'
  | 'MultiPart'
type PushOptionPushOptionChoice = {
  description?: string | undefined
  displayName?: string | undefined
  required?: boolean | undefined
  type?: PushOptionPushOptionType | undefined
  value?: string | undefined
}
type PushOptionPushFieldValidation = {
  details: string
  field?: string | undefined
  ref?: (string | null) | undefined
}
type PushOptionPushValidationInfo = {
  information?: (PushOptionPushFieldValidation[] | null) | undefined
  warnings?: (PushOptionPushFieldValidation[] | null) | undefined
}
type PushOptionPushOptionProperty = {
  description: string
  displayName: string
  options?: (PushOptionPushOptionChoice[] | null) | undefined
  properties?: ({ [x: string]: PushOptionPushOptionProperty } | null) | undefined
  required: boolean
  type: PushOptionPushOptionType
  validation?: PushOptionPushValidationInfo | undefined
}
type PushOption = {
  description?: string | undefined
  displayName: string
  options?: (PushOptionPushOptionChoice[] | null) | undefined
  properties?: ({ [x: string]: PushOptionPushOptionProperty } | null) | undefined
  required: boolean
  type: PushOptionPushOptionType
  validation?: PushOptionPushValidationInfo | undefined
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
type PushOperationPushOperationRef = { dataType?: DataType | undefined; id?: string | undefined }
type PushOperationPushChangeType =
  | 'Unknown'
  | 'Created'
  | 'Modified'
  | 'Deleted'
  | 'AttachmentUploaded'
type PushOperationPushOperationChange = {
  attachmentId?: (string | null) | undefined
  recordRef?: PushOperationPushOperationRef | undefined
  type?: PushOperationPushChangeType | undefined
}
type PushOperationPushOperationStatus = 'Pending' | 'Failed' | 'Success' | 'TimedOut'
type PushOperationValidationItem = {
  itemId?: (string | null) | undefined
  message?: (string | null) | undefined
  validatorName?: (string | null) | undefined
}
type PushOperationValidation = {
  errors?: (PushOperationValidationItem[] | null) | undefined
  warnings?: (PushOperationValidationItem[] | null) | undefined
}
type CreateBankTransactionsResponse = {
  data?: BankTransactions | undefined
  changes?: (PushOperationPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationValidation | undefined
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
