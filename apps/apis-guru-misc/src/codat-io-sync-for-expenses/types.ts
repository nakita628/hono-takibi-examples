type BankAccount = { id?: string | undefined }
type Customer = { id?: string | undefined }
type Supplier = { id?: string | undefined }
type CompanyConfiguration = {
  bankAccount?: BankAccount | undefined
  customer?: Customer | undefined
  supplier?: Supplier | undefined
}
type CodatErrorMessage = {
  canBeRetried?: string | undefined
  correlationId?: string | undefined
  detailedErrorCode?: number | undefined
  error?: string | undefined
  inner?: string | undefined
  service?: string | undefined
  statusCode?: number | undefined
  validation?:
    | {
        errors?:
          | {
              itemId?: string | undefined
              message?: string | undefined
              ruleId?: string | undefined
              validatorName?: string | undefined
            }[]
          | undefined
        hasErrors?: boolean | undefined
        hasInternals?: boolean | undefined
        hasWarnings?: boolean | undefined
        internals?:
          | {
              itemId?: string | undefined
              message?: string | undefined
              ruleId?: string | undefined
              validatorName?: string | undefined
            }[]
          | undefined
        warnings?:
          | {
              itemId?: string | undefined
              message?: string | undefined
              ruleId?: string | undefined
              validatorName?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type DataConnection = {
  additionalProperties?: unknown | undefined
  connectionInfo?: { [x: string]: string } | undefined
  created: string
  dataConnectionErrors?:
    | {
        errorMessage?: string | undefined
        erroredOnUtc?: unknown | undefined
        statusCode?: string | undefined
        statusText?: string | undefined
      }[]
    | undefined
  id: string
  integrationId: string
  integrationKey: string
  lastSync?: unknown | undefined
  linkUrl: string
  platformName: string
  sourceId: string
  sourceType: 'Accounting' | 'Banking' | 'Commerce' | 'Other' | 'Unknown'
  status: 'PendingAuth' | 'Linked' | 'Unlinked' | 'Deauthorized'
}
type RecordRef = { id?: string | undefined }
type ExpenseTransactionLine = {
  accountRef: RecordRef
  netAmount: number
  taxAmount: number
  taxRateRef?: RecordRef | undefined
  trackingRefs?: RecordRef[] | undefined
}
type ExpenseTransaction = {
  currency: string
  currencyRate?: (number | null) | undefined
  id: string
  issueDate: unknown
  lines?: ExpenseTransactionLine[] | undefined
  merchantName?: string | undefined
  notes?: string | undefined
  type:
    | 'Payment'
    | 'Refund'
    | 'Reward'
    | 'Chargeback'
    | 'TransferIn'
    | 'TransferOut'
    | 'AdjustmentIn'
    | 'AdjustmentOut'
}
type CreateExpenseRequest = { items?: ExpenseTransaction[] | undefined }
type CreateExpenseResponse = { datasetId?: string | undefined }
type AccountMappingInfo = {
  accountType?: 'Asset' | 'Liability' | 'Income' | 'Expense' | 'Equity' | undefined
  currency?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  validTransactionTypes?:
    | (
        | (
            | 'Payment'
            | 'Refund'
            | 'Reward'
            | 'Chargeback'
            | 'TransferIn'
            | 'TransferOut'
            | 'AdjustmentIn'
            | 'AdjustmentOut'
          )[]
        | null
      )
    | undefined
}
type TaxRateMappingInfo = {
  code?: (string | null) | undefined
  effectiveTaxRate?: number | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  totalTaxRate?: number | undefined
  validTransactionTypes?:
    | (
        | (
            | 'Payment'
            | 'Refund'
            | 'Reward'
            | 'Chargeback'
            | 'TransferIn'
            | 'TransferOut'
            | 'AdjustmentIn'
            | 'AdjustmentOut'
          )[]
        | null
      )
    | undefined
}
type TrackingCategoryMappingInfo = {
  hasChildren?: boolean | undefined
  id?: (string | null) | undefined
  modifiedDate?: unknown | undefined
  name?: (string | null) | undefined
  parentId?: (string | null) | undefined
}
type MappingOptions = {
  accounts?: (AccountMappingInfo[] | null) | undefined
  expenseProvider?: (string | null) | undefined
  taxRates?: (TaxRateMappingInfo[] | null) | undefined
  trackingCategories?: (TrackingCategoryMappingInfo[] | null) | undefined
}
type PostSync = { datasetIds?: (string[] | null) | undefined }
type SyncInitiated = { syncId?: string | undefined }
type CompanySyncStatus = {
  companyId?: (string | null) | undefined
  dataPushed?: boolean | undefined
  errorMessage?: (string | null) | undefined
  syncExceptionMessage?: (string | null) | undefined
  syncId?: (string | null) | undefined
  syncStatus?: (string | null) | undefined
  syncStatusCode?: number | undefined
  syncUtc?: unknown | undefined
}
type IntegrationType = 'expenses' | 'bankfeeds'
type TransactionStatus = 'Unknown' | 'Pending' | 'ValidationError' | 'Completed' | 'PushError'
type TransactionMetadata = {
  integrationType?: IntegrationType | undefined
  message?: (string | null) | undefined
  status?: TransactionStatus | undefined
  transactionId?: (string | null) | undefined
}
type HalLink = { href?: string | undefined }
type TransactionMetadataList = {
  results?: TransactionMetadata[] | undefined
  _links: {
    current: HalLink
    next?: HalLink | undefined
    previous?: HalLink | undefined
    self: HalLink
  }
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Attachment = {
  companyId?: string | undefined
  id?: string | undefined
  transactionId?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/companies/:companyId/sync/expenses/config': {
      $get: {
        input: { param: { companyId: string } }
        output: CompanyConfiguration
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { companyId: string } } & { json: CompanyConfiguration }
            output: CompanyConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { json: CompanyConfiguration }
            output: CodatErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/companies/:companyId/sync/expenses/connections/partnerExpense': {
      $post: {
        input: { param: { companyId: string } }
        output: DataConnection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/expenses/data/expense-transactions': {
      $post: {
        input: { param: { companyId: string } } & { json: CreateExpenseRequest }
        output: CreateExpenseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/expenses/mappingOptions': {
      $get: {
        input: { param: { companyId: string } }
        output: MappingOptions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/expenses/syncs': {
      $post:
        | {
            input: { param: { companyId: string } } & { json: PostSync }
            output: SyncInitiated
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { companyId: string } } & { json: PostSync }
            output: CodatErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: PostSync }
            output: CodatErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { companyId: string } } & { json: PostSync }
            output: CodatErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/companies/:companyId/sync/expenses/syncs/lastSuccessful/status': {
      $get: {
        input: { param: { companyId: string } }
        output: CompanySyncStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/expenses/syncs/latest/status': {
      $get: {
        input: { param: { companyId: string } }
        output: CompanySyncStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/expenses/syncs/list/status': {
      $get: {
        input: { param: { companyId: string } }
        output: CompanySyncStatus[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/expenses/syncs/:syncId/status': {
      $get: {
        input: { param: { companyId: string; syncId: string } }
        output: CompanySyncStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/expenses/syncs/:syncId/transactions': {
      $get: {
        input: { param: { companyId: string; syncId: string } } & {
          query: { page: number; pageSize?: number | undefined }
        }
        output: TransactionMetadataList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/expenses/syncs/:syncId/transactions/:transactionId': {
      $get: {
        input: { param: { companyId: string; syncId: string; transactionId: string } }
        output: TransactionMetadata[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/expenses/syncs/:syncId/transactions/:transactionId/attachments': {
      $post: {
        input: { param: { companyId: string; transactionId: string; syncId: string } } & {
          form: File
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
