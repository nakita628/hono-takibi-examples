type VisibleAccounts = { visibleAccounts?: (string[] | null) | undefined }
type SyncToLatestArgs = { syncTo?: unknown | undefined }
type Connection = {
  additionalProperties?: unknown | undefined
  connectionInfo?: { [x: string]: string } | undefined
  created: unknown
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
  sourceId: unknown
  sourceType: 'Accounting' | 'Banking' | 'Commerce' | 'Other' | 'Unknown'
  status: 'PendingAuth' | 'Linked' | 'Unlinked' | 'Deauthorized'
}
type DateRange = { finish?: unknown | undefined; start?: unknown | undefined }
type SyncSummary = {
  commerceSyncId?: string | undefined
  companyId?: string | undefined
  dataConnections?: (Connection[] | null) | undefined
  dataPushed?: boolean | undefined
  errorMessage?: (string | null) | undefined
  syncDateRangeUtc?: DateRange | undefined
  syncExceptionMessage?: (string | null) | undefined
  syncStatus?: (string | null) | undefined
  syncStatusCode?: number | undefined
  syncUtc?: unknown | undefined
}
type AccountOption = {
  classification?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  nominalCode?: (string | null) | undefined
}
type ConfigAccount = {
  accountOptions?: (AccountOption[] | null) | undefined
  descriptionText?: (string | null) | undefined
  labelText?: (string | null) | undefined
  required?: boolean | undefined
  selectedAccountId?: (string | null) | undefined
}
type Option = { id?: string | undefined; name?: (string | null) | undefined }
type FeesSupplier = {
  selectedSupplierId?: (string | null) | undefined
  supplierOptions?: (Option[] | null) | undefined
}
type Fees = {
  accounts?: ({ [x: string]: ConfigAccount } | null) | undefined
  feesSupplier?: FeesSupplier | undefined
  syncFees?: boolean | undefined
}
type NewPayments = {
  accounts?: ({ [x: string]: ConfigAccount } | null) | undefined
  syncPayments?: boolean | undefined
}
type Payments = {
  accounts?: ({ [x: string]: ConfigAccount } | null) | undefined
  syncPayments?: boolean | undefined
}
type InvoiceLevelSelection = {
  groupByOptions?: (string[] | null) | undefined
  selectedGroupByOptions?: (string[] | null) | undefined
}
type InvoiceLineLevelSelection = {
  groupByOptions?: (string[] | null) | undefined
  selectedGroupByOptions?: (string[] | null) | undefined
}
type GroupingLevels = {
  invoiceLevel?: InvoiceLevelSelection | undefined
  invoiceLineLevel?: InvoiceLineLevelSelection | undefined
}
type GroupingPeriod = {
  groupingPeriodOptions?: (string[] | null) | undefined
  selectedGroupingPeriod?: (string | null) | undefined
}
type Grouping = {
  groupingLevels?: GroupingLevels | undefined
  groupingPeriod?: GroupingPeriod | undefined
}
type InvoiceStatus = {
  invoiceStatusOptions?: (string[] | null) | undefined
  selectedInvoiceStatus?: (string | null) | undefined
}
type TaxRateMapping = {
  selectedAccountingTaxRateId?: (string | null) | undefined
  selectedCommerceTaxRateIds?: (string[] | null) | undefined
}
type NewTaxRates = {
  accountingTaxRateOptions?: (Option[] | null) | undefined
  commerceTaxRateOptions?: (Option[] | null) | undefined
  defaultZeroTaxRateOptions?: (Option[] | null) | undefined
  selectedDefaultZeroTaxRateId?: (string | null) | undefined
  taxRateMappings?: (TaxRateMapping[] | null) | undefined
}
type Customer = {
  customerOptions?: (Option[] | null) | undefined
  selectedCustomerId?: (string | null) | undefined
}
type TaxRateAmount = {
  selectedTaxRateId?: (string | null) | undefined
  taxRateOptions?: (Option[] | null) | undefined
}
type Sales = {
  accounts?: ({ [x: string]: ConfigAccount } | null) | undefined
  grouping?: Grouping | undefined
  invoiceStatus?: InvoiceStatus | undefined
  newTaxRates?: NewTaxRates | undefined
  salesCustomer?: Customer | undefined
  syncSales?: boolean | undefined
  taxRates?: ({ [x: string]: TaxRateAmount } | null) | undefined
}
type Configuration = {
  fees?: Fees | undefined
  newPayments?: NewPayments | undefined
  payments?: Payments | undefined
  sales?: Sales | undefined
}
type Integration = {
  dataProvidedBy?: string | undefined
  datatypeFeatures?:
    | {
        dataType?:
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
          | undefined
        supportedFeatures: {
          featureState: 'Release' | 'Beta' | 'Deprecated' | 'NotSupported' | 'NotImplemented'
          featureType:
            | 'Get'
            | 'Post'
            | 'Categorization'
            | 'Delete'
            | 'Put'
            | 'GetAsPdf'
            | 'DownloadAttachment'
            | 'GetAttachment'
            | 'GetAttachments'
            | 'UploadAttachment'
        }[]
      }[]
    | undefined
  enabled: boolean
  integrationId?: unknown | undefined
  isBeta?: boolean | undefined
  isOfflineConnector?: boolean | undefined
  key: string
  logoUrl: string
  name: string
  sourceId?: unknown | undefined
  sourceType?: unknown | undefined
}
type HalRef = { href?: string | undefined }
type Links = {
  current: HalRef
  next?: HalRef | undefined
  previous?: HalRef | undefined
  self: HalRef
}
type Integrations = {
  results?: Integration[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Branding = {
  button?:
    | {
        default?: { [x: string]: unknown } | undefined
        hover?: { [x: string]: unknown } | undefined
      }
    | undefined
  logo?:
    | {
        full?:
          | { image?: { alt?: string | undefined; src?: string | undefined } | undefined }
          | undefined
        square?: { [x: string]: unknown } | undefined
      }
    | undefined
  sourceId?: string | undefined
}
type SyncFlowUrl = { url?: string | undefined }
type Company = {
  created?: string | undefined
  createdByUserName?: string | undefined
  dataConnections?: Connection[] | undefined
  description?: string | undefined
  id: string
  lastSync?: unknown | undefined
  name: string
  platform?: string | undefined
  redirect: string
}
type Companies = {
  results?: Company[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type CreateCompany = { name: string }
type Connections = {
  results?: Connection[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type UpdateConnection = { status?: (string | null) | undefined }
type Localization = { required?: boolean | undefined; text?: (string | null) | undefined }
type LocalizationInfo = { [x: string]: Localization }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/clients/:clientId/config/ui/accounts/platform/:platformKey': {
      $get: {
        input: { param: { clientId: string; platformKey: string } }
        output: VisibleAccounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/sync/commerce/latest': {
      $post: {
        input: { param: { companyId: unknown } } & { json: SyncToLatestArgs }
        output: SyncSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/config/companies/:companyId/sync/commerce': {
      $get: {
        input: { param: { companyId: unknown } }
        output: Configuration
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { companyId: unknown } }
        output: Configuration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/config/integrations': {
      $get: {
        input: {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Integrations
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/config/integrations/:platformKey/branding': {
      $get: {
        input: { param: { platformKey: string } }
        output: Branding
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/config/sync/commerce/:commerceKey/:accountingKey/start': {
      $get: {
        input: { param: { commerceKey: string; accountingKey: string } } & {
          query: { merchantIdentifier?: string | undefined }
        }
        output: SyncFlowUrl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meta/companies': {
      $get: {
        input: {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Companies
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meta/companies/sync': {
      $post: { input: { json: CreateCompany }; output: Company; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/meta/companies/:companyId/connections': {
      $get: {
        input: { param: { companyId: unknown } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Connections
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { companyId: unknown } } & { json: string }
        output: Connection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meta/companies/:companyId/connections/:connectionId': {
      $patch: {
        input: { param: { companyId: unknown; connectionId: unknown } } & { json: UpdateConnection }
        output: Connection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meta/companies/:companyId/sync/commerce/historic': {
      $post: {
        input: { param: { companyId: unknown } } & { json: DateRange }
        output: SyncSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meta/companies/:companyId/sync/commerce/status': {
      $get: {
        input: { param: { companyId: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/commerce/config/ui/accounts/platform/:commerceKey': {
      $patch: {
        input: { param: { commerceKey: string } } & { json: VisibleAccounts }
        output: VisibleAccounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sync/commerce/config/ui/text': {
      $get: { input: {}; output: LocalizationInfo; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { json: LocalizationInfo }
        output: LocalizationInfo
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
