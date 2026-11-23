type Currency = string
type ExcelStatusLastGenerated = string
type EnhancedReportEnhancedReportInfo = {
  companyName?: string | undefined
  currency?: Currency | undefined
  generatedDate?: ExcelStatusLastGenerated | undefined
  reportName?: string | undefined
}
type EnhancedReportAccountCategoryLevel = {
  confidence?: number | undefined
  levelName?: string | undefined
}
type EnhancedReportEnhancedReportAccountCategory = {
  levels?: EnhancedReportAccountCategoryLevel[] | undefined
  status?: string | undefined
}
type EnhancedReport = {
  reportInfo?: EnhancedReportEnhancedReportInfo | undefined
  reportItems?:
    | {
        accountCategory?: EnhancedReportEnhancedReportAccountCategory | undefined
        accountId?: string | undefined
        accountName?: string | undefined
        balance?: number | undefined
        date?: ExcelStatusLastGenerated | undefined
      }[]
    | undefined
}
type EnhancedCashFlowTransactionsSourceRef = { sourceType?: string | undefined }
type EnhancedCashFlowTransactionsAccounts = {
  accountName?: string | undefined
  accountProvider?: string | undefined
  accountType?: string | undefined
  currency?: Currency | undefined
  currentBalance?: number | undefined
  platformName?: string | undefined
  sourceRef?: EnhancedCashFlowTransactionsSourceRef | undefined
}
type EnhancedCashFlowTransactionsDataSource = {
  accounts?: EnhancedCashFlowTransactionsAccounts[] | undefined
}
type EnhancedInvoicesReportReportInfo = {
  companyName?: string | undefined
  generatedDate?: string | undefined
  pageNumber?: number | undefined
  pageSize?: number | undefined
  reportName?: string | undefined
  totalResults?: number | undefined
}
type EnhancedCashFlowTransactionsTransactionCategory = {
  confidence?: number | undefined
  levels?: string[] | undefined
}
type EnhancedCashFlowTransactionsEnhancedCashFlowTransaction = {
  amount?: number | undefined
  currency?: string | undefined
  date?: ExcelStatusLastGenerated | undefined
  description?: string | undefined
  id?: string | undefined
  sourceRef?: EnhancedCashFlowTransactionsSourceRef | undefined
  transactionCategory?: EnhancedCashFlowTransactionsTransactionCategory | undefined
}
type EnhancedCashFlowTransactionsEnhancedCashFlowItem = {
  transactions?: EnhancedCashFlowTransactionsEnhancedCashFlowTransaction[] | undefined
}
type EnhancedCashFlowTransactions = {
  dataSources?: EnhancedCashFlowTransactionsDataSource[] | undefined
  reportInfo?: EnhancedInvoicesReportReportInfo | undefined
  reportItems?: EnhancedCashFlowTransactionsEnhancedCashFlowItem[] | undefined
}
type EnhancedInvoicesReportCustomerRef = { companyName?: (string | null) | undefined; id: string }
type CategorisedAccountAccountRef = { id?: string | undefined; name?: string | undefined }
type CurrencyRate = number | null
type EnhancedInvoicesReportPaymentPaymentLinkType =
  | 'Unknown'
  | 'Unlinked'
  | 'Invoice'
  | 'CreditNote'
  | 'Other'
  | 'Refund'
  | 'Payment'
  | 'PaymentOnAccount'
  | 'ManualJournal'
  | 'Discount'
type EnhancedInvoicesReportPaymentPaymentLineLink = {
  amount?: (number | null) | undefined
  currencyRate?: CurrencyRate | undefined
  id?: string | undefined
  type: EnhancedInvoicesReportPaymentPaymentLinkType
}
type EnhancedInvoicesReportPaymentPaymentLine = {
  allocatedOnDate?: ExcelStatusLastGenerated | undefined
  amount: number
  links?: (EnhancedInvoicesReportPaymentPaymentLineLink[] | null) | undefined
}
type EnhancedInvoicesReportPayment = {
  accountRef?: CategorisedAccountAccountRef | undefined
  currency?: Currency | undefined
  currencyRate?: CurrencyRate | undefined
  customerRef?: EnhancedInvoicesReportCustomerRef | undefined
  date?: ExcelStatusLastGenerated | undefined
  id?: string | undefined
  lines?: (EnhancedInvoicesReportPaymentPaymentLine[] | null) | undefined
  metadata?: { isDeleted?: (boolean | null) | undefined } | undefined
  note?: (string | null) | undefined
  paymentMethodRef?: { id?: string | undefined; name?: (string | null) | undefined } | undefined
  reference?: (string | null) | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  totalAmount?: number | undefined
  modifiedDate?: ExcelStatusLastGenerated | undefined
  sourceModifiedDate?: ExcelStatusLastGenerated | undefined
}
type EnhancedInvoicesReportInvoiceStatus =
  | 'Unknown'
  | 'Draft'
  | 'Submitted'
  | 'PartiallyPaid'
  | 'Paid'
  | 'Void'
type EnhancedInvoicesReportEnhancedInvoiceReportItem = {
  amountDue?: number | undefined
  currency?: Currency | undefined
  customerRef?: EnhancedInvoicesReportCustomerRef | undefined
  dueDate?: ExcelStatusLastGenerated | undefined
  id?: string | undefined
  invoiceNumber?: string | undefined
  issueDate?: ExcelStatusLastGenerated | undefined
  paidOnDate?: ExcelStatusLastGenerated | undefined
  payments?: EnhancedInvoicesReportPayment[] | undefined
  status?: EnhancedInvoicesReportInvoiceStatus | undefined
  totalAmount?: number | undefined
}
type EnhancedInvoicesReport = {
  reportInfo?: EnhancedInvoicesReportReportInfo | undefined
  reportItems?:
    | { invoices?: EnhancedInvoicesReportEnhancedInvoiceReportItem[] | undefined }[]
    | undefined
}
type Categories = {
  detailType?: string | undefined
  subtype?: string | undefined
  type?: string | undefined
  detailTypeDescription?: string | undefined
  detailTypeDisplayName?: string | undefined
  subtypeDisplayName?: string | undefined
}[]
type DataIntegrityDetailsDataIntegrityMatch = {
  amount?: string | undefined
  connectionId?: string | undefined
  currency?: Currency | undefined
  date?: string | undefined
  description?: string | undefined
  id?: string | undefined
  type?: string | undefined
}
type DataIntegrityDetails = {
  amount?: number | undefined
  connectionId?: string | undefined
  currency?: Currency | undefined
  date?: ExcelStatusLastGenerated | undefined
  description?: string | undefined
  id?: string | undefined
  matches?: DataIntegrityDetailsDataIntegrityMatch[] | undefined
  type?: string | undefined
}
type HalRef = { href?: string | undefined }
type Links = {
  current: HalRef
  next?: HalRef | undefined
  previous?: HalRef | undefined
  self: HalRef
}
type Details = {
  results?: DataIntegrityDetails[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type DataIntegrityStatusDataIntegrityAmounts = {
  currency?: Currency | undefined
  max?: number | undefined
  min?: number | undefined
}
type DataIntegrityStatusDataIntegrityConnectionId = {
  source?: string[] | undefined
  target?: string[] | undefined
}
type DataIntegrityStatusDataIntegrityDates = {
  maxDate?: ExcelStatusLastGenerated | undefined
  maxOverlappingDate?: ExcelStatusLastGenerated | undefined
  minDate?: ExcelStatusLastGenerated | undefined
  minOverlappingDate?: ExcelStatusLastGenerated | undefined
}
type DataIntegrityStatusIntegrityStatus = 'Unknown' | 'DoesNotExist' | 'Error' | 'Complete'
type DataIntegrityStatusDataIntegrityStatusInfo = {
  currentStatus?: DataIntegrityStatusIntegrityStatus | undefined
  lastMatched?: ExcelStatusLastGenerated | undefined
  statusMessage?: string | undefined
}
type DataIntegrityStatus = {
  type?: string | undefined
  amounts?: DataIntegrityStatusDataIntegrityAmounts | undefined
  connectionIds?: DataIntegrityStatusDataIntegrityConnectionId | undefined
  dates?: DataIntegrityStatusDataIntegrityDates | undefined
  statusInfo?: DataIntegrityStatusDataIntegrityStatusInfo | undefined
}
type Status = { metadata?: DataIntegrityStatus[] | undefined }
type DataIntegritySummaryDataIntegrityByAmount = {
  currency?: Currency | undefined
  matchPercentage?: number | undefined
  matched?: number | undefined
  total?: number | undefined
  unmatched?: number | undefined
}
type DataIntegritySummaryDataIntegrityByCount = {
  matchPercentage?: number | undefined
  matched?: number | undefined
  total?: number | undefined
  unmatched?: number | undefined
}
type DataIntegritySummary = {
  type?: string | undefined
  byAmount?: DataIntegritySummaryDataIntegrityByAmount | undefined
  byCount?: DataIntegritySummaryDataIntegrityByCount | undefined
}
type Summaries = { summaries?: DataIntegritySummary[] | undefined }
type ExcelStatus = {
  errorMessage?: string | undefined
  fileSize?: number | undefined
  inProgress?: boolean | undefined
  lastGenerated?: ExcelStatusLastGenerated | undefined
  lastInvocationId?: string | undefined
  queued?: string | undefined
  reportType?: string | undefined
  success?: boolean | undefined
}
type ReportReportDimension = {
  displayName?: string | undefined
  index?: number | undefined
  items?: { index?: number | undefined }[] | undefined
  type?: string | undefined
}
type ReportReportError = {
  details?: { [x: string]: string[] } | undefined
  message?: string | undefined
  type?: string | undefined
}
type ReportReportMeasure = {
  displayName?: string | undefined
  index?: number | undefined
  type?: string | undefined
  units?: string | undefined
}
type ReportReportComponentMeasure = {
  index?: number | undefined
  measureDisplayName?: string | undefined
  value?: number | undefined
}
type ReportReportComponent = {
  components?: ReportReportComponent[] | undefined
  dimension?: number | undefined
  dimensionDisplayName?: string | undefined
  item?: number | undefined
  itemDisplayName?: string | undefined
  measures?: ReportReportComponentMeasure[] | undefined
}
type Report = {
  dimensions?: ReportReportDimension[] | undefined
  errors?: ReportReportError[] | undefined
  measures?: ReportReportMeasure[] | undefined
  reportData?: ReportReportComponent[] | undefined
  reportInfo?: { [x: string]: string } | undefined
}
type CategorisedAccountAccountCategoryDeprecated = {
  detailType?: string | undefined
  subtype?: string | undefined
  type?: string | undefined
  modifiedDate?: ExcelStatusLastGenerated | undefined
}
type CategorisedAccount = {
  accountRef?: CategorisedAccountAccountRef | undefined
  confirmed?: CategorisedAccountAccountCategoryDeprecated | undefined
  suggested?: CategorisedAccountAccountCategoryDeprecated | undefined
}
type CategorisedAccounts = {
  results?: CategorisedAccount[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type AccountCategory = {
  detailType?: string | undefined
  subtype?: string | undefined
  type?: string | undefined
}
type ConfirmCategories = {
  categories?:
    | { accountRef?: { id: string } | undefined; confirmed?: AccountCategory | undefined }[]
    | undefined
}
type ConfirmCategory = { confirmed: AccountCategory }
type FinancialMetricsFinancialMetricError = {
  message?: string | undefined
  type?: 'DataNotSynced' | 'DataNotSupported' | 'DataSyncFailed' | 'DataTypeNotEnabled' | undefined
}
type FinancialMetricsAssessErrorDetails = { [x: string]: string[] }
type FinancialMetricsFinancialMetric = {
  errors?:
    | {
        details?: FinancialMetricsAssessErrorDetails | undefined
        message?: string | undefined
        type?: 'UncategorizedAccounts' | 'MissingInputData' | 'InputDataError' | undefined
      }[]
    | undefined
  key?:
    | 'Unknown'
    | 'EBITDA'
    | 'DebtServiceCoverageRatio'
    | 'CurrentRatio QuickRatio'
    | 'GrossProfitMargin'
    | 'FixedChargeCoverageRatio'
    | 'WorkingCapital'
    | 'FreeCashFlow'
    | 'NetProfitMargin'
    | 'ReturnOnAssetsRatio'
    | 'ReturnOnEquityRatio'
    | 'OperatingProfitMargin'
    | 'DeptToEquity'
    | 'DebtToAssets'
    | 'InterestCoverageRatio'
    | 'CashRatio'
    | 'InventoryTurnoverRatio'
    | 'AssetTurnoverRatio'
    | 'WorkingCapitalTurnoverRatio'
    | 'DaysSalesOutstanding'
    | 'DaysPayablesOutstanding'
    | undefined
  metricUnit?: 'Ratio' | 'Money' | undefined
  name?: string | undefined
  periods?:
    | {
        errors?:
          | {
              details?: FinancialMetricsAssessErrorDetails | undefined
              massage?: string | undefined
              type?: 'MissingAccountData' | 'DatesOutOfRange' | undefined
            }[]
          | undefined
        fromDate?: string | undefined
        inputs?: { name?: string | undefined; value?: number | undefined }[] | undefined
        toDate?: string | undefined
        value?: number | undefined
      }[]
    | undefined
}
type FinancialMetrics = {
  currency?: Currency | undefined
  errors?: FinancialMetricsFinancialMetricError[] | undefined
  metrics?: FinancialMetricsFinancialMetric[] | undefined
  periodUnit?: 'Month' | 'Week' | 'Day' | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/companies/:companyId/reports/enhancedBalanceSheet/accounts': {
      $get: {
        input: { param: { companyId: string } } & {
          query: { reportDate: string; numberOfPeriods: number }
        }
        output: EnhancedReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/enhancedCashFlow/transactions': {
      $get: {
        input: { param: { companyId: string } } & {
          query: { page: number; pageSize?: number | undefined; query?: string | undefined }
        }
        output: EnhancedCashFlowTransactions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/enhancedInvoices': {
      $get: {
        input: { param: { companyId: string } } & {
          query: { page: number; pageSize?: number | undefined; query?: string | undefined }
        }
        output: EnhancedInvoicesReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/enhancedProfitAndLoss/accounts': {
      $get: {
        input: { param: { companyId: string } } & {
          query: { reportDate: string; numberOfPeriods: number }
        }
        output: EnhancedReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/assess/accounts/categories': {
      $get: { input: {}; output: Categories; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/data/companies/:companyId/assess/dataTypes/:dataType/dataIntegrity/details': {
      $get: {
        input: {
          param: {
            companyId: string
            dataType:
              | 'banking-accounts'
              | 'banking-transactions'
              | 'bankAccounts'
              | 'accountTransactions'
          }
        } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Details
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/assess/dataTypes/:dataType/dataIntegrity/status': {
      $get: {
        input: {
          param: {
            companyId: string
            dataType:
              | 'banking-accounts'
              | 'banking-transactions'
              | 'bankAccounts'
              | 'accountTransactions'
          }
        }
        output: Status
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/assess/dataTypes/:dataType/dataIntegrity/summaries': {
      $get: {
        input: {
          param: {
            companyId: string
            dataType:
              | 'banking-accounts'
              | 'banking-transactions'
              | 'bankAccounts'
              | 'accountTransactions'
          }
        } & { query: { query?: string | undefined } }
        output: Summaries
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/assess/excel': {
      $get: {
        input: { param: { companyId: string } } & {
          query: { reportType: 'audit' | 'enhancedFinancials' }
        }
        output: ExcelStatus
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { companyId: string } } & {
          query: { reportType: 'audit' | 'enhancedFinancials' }
        }
        output: ExcelStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/assess/excel/download': {
      $get: {
        input: { param: { companyId: string } } & {
          query: { reportType: 'audit' | 'enhancedFinancials' }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { companyId: string } } & {
          query: { reportType: 'audit' | 'enhancedFinancials' }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/accountingMetrics/marketing': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            reportDate: string
            periodLength: number
            numberOfPeriods: number
            periodUnit: 'Day' | 'Week' | 'Month' | 'Year'
            includeDisplayNames?: boolean | undefined
            showInputValues?: boolean | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/categories': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: CategorisedAccounts
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { companyId: string; connectionId: string } } & { json: ConfirmCategories }
        output: CategorisedAccount[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/:accountId/categories': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountId: string } }
        output: CategorisedAccount
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { companyId: string; connectionId: string; accountId: string } } & {
          json: ConfirmCategory
        }
        output: CategorisedAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/customerRetention': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            reportDate: string
            periodLength: number
            numberOfPeriods: number
            periodUnit: 'Day' | 'Week' | 'Month' | 'Year'
            includeDisplayNames?: boolean | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/lifetimeValue': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            reportDate: string
            periodLength: number
            numberOfPeriods: number
            periodUnit: 'Day' | 'Week' | 'Month' | 'Year'
            includeDisplayNames?: boolean | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/orders': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            reportDate: string
            periodLength: number
            numberOfPeriods: number
            periodUnit: 'Day' | 'Week' | 'Month' | 'Year'
            includeDisplayNames?: boolean | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/refunds': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            reportDate: string
            periodLength: number
            numberOfPeriods: number
            periodUnit: 'Day' | 'Week' | 'Month' | 'Year'
            includeDisplayNames?: boolean | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/revenue': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            reportDate: string
            periodLength: number
            numberOfPeriods: number
            periodUnit: 'Day' | 'Week' | 'Month' | 'Year'
            includeDisplayNames?: boolean | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/enhancedBalanceSheet': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            reportDate: string
            periodLength: number
            numberOfPeriods: number
            includeDisplayNames?: boolean | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/enhancedProfitAndLoss': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            reportDate: string
            periodLength: number
            numberOfPeriods: number
            includeDisplayNames?: boolean | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/financialMetrics': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            reportDate: string
            periodLength: number
            numberOfPeriods: number
            showMetricInputs?: boolean | undefined
          }
        }
        output: FinancialMetrics
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/subscriptions/mrr': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/companies/:companyId/connections/:connectionId/assess/subscriptions/process': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
