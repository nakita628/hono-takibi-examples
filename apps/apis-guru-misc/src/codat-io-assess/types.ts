type Currency = string
type EnhancedReport = {
  reportInfo?:
    | {
        companyName?: string | undefined
        currency?: Currency | undefined
        generatedDate?: unknown | undefined
        reportName?: string | undefined
      }
    | undefined
  reportItems?:
    | {
        accountCategory?:
          | {
              levels?:
                | { confidence?: number | undefined; levelName?: string | undefined }[]
                | undefined
              status?: string | undefined
            }
          | undefined
        accountId?: string | undefined
        accountName?: string | undefined
        balance?: number | undefined
        date?: unknown | undefined
      }[]
    | undefined
}
type EnhancedCashFlowTransactions = {
  dataSources?:
    | {
        accounts?:
          | {
              accountName?: string | undefined
              accountProvider?: string | undefined
              accountType?: string | undefined
              currency?: Currency | undefined
              currentBalance?: number | undefined
              platformName?: string | undefined
              sourceRef?: { sourceType?: string | undefined } | undefined
            }[]
          | undefined
      }[]
    | undefined
  reportInfo?:
    | {
        companyName?: string | undefined
        generatedDate?: string | undefined
        pageNumber?: number | undefined
        pageSize?: number | undefined
        reportName?: string | undefined
        totalResults?: number | undefined
      }
    | undefined
  reportItems?:
    | {
        transactions?:
          | {
              amount?: number | undefined
              currency?: string | undefined
              date?: unknown | undefined
              description?: string | undefined
              id?: string | undefined
              sourceRef?: { sourceType?: string | undefined } | undefined
              transactionCategory?:
                | { confidence?: number | undefined; levels?: string[] | undefined }
                | undefined
            }[]
          | undefined
      }[]
    | undefined
}
type CurrencyRate = number | null
type EnhancedInvoicesReport = {
  reportInfo?:
    | {
        companyName?: string | undefined
        generatedDate?: string | undefined
        pageNumber?: number | undefined
        pageSize?: number | undefined
        reportName?: string | undefined
        totalResults?: number | undefined
      }
    | undefined
  reportItems?:
    | {
        invoices?:
          | {
              amountDue?: number | undefined
              currency?: Currency | undefined
              customerRef?: { companyName?: (string | null) | undefined; id: string } | undefined
              dueDate?: unknown | undefined
              id?: string | undefined
              invoiceNumber?: string | undefined
              issueDate?: unknown | undefined
              paidOnDate?: unknown | undefined
              payments?:
                | {
                    accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
                    currency?: Currency | undefined
                    currencyRate?: CurrencyRate | undefined
                    customerRef?:
                      | { companyName?: (string | null) | undefined; id: string }
                      | undefined
                    date?: unknown | undefined
                    id?: string | undefined
                    lines?:
                      | (
                          | {
                              allocatedOnDate?: unknown | undefined
                              amount: number
                              links?:
                                | (
                                    | {
                                        amount?: (number | null) | undefined
                                        currencyRate?: CurrencyRate | undefined
                                        id?: string | undefined
                                        type:
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
                                      }[]
                                    | null
                                  )
                                | undefined
                            }[]
                          | null
                        )
                      | undefined
                    metadata?: { isDeleted?: (boolean | null) | undefined } | undefined
                    note?: (string | null) | undefined
                    paymentMethodRef?:
                      | { id?: string | undefined; name?: (string | null) | undefined }
                      | undefined
                    reference?: (string | null) | undefined
                    supplementalData?:
                      | {
                          content?:
                            | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
                            | undefined
                        }
                      | undefined
                    totalAmount?: number | undefined
                    modifiedDate?: unknown | undefined
                    sourceModifiedDate?: unknown | undefined
                  }[]
                | undefined
              status?:
                | 'Unknown'
                | 'Draft'
                | 'Submitted'
                | 'PartiallyPaid'
                | 'Paid'
                | 'Void'
                | undefined
              totalAmount?: number | undefined
            }[]
          | undefined
      }[]
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
type DataIntegrityDetails = {
  amount?: number | undefined
  connectionId?: string | undefined
  currency?: Currency | undefined
  date?: unknown | undefined
  description?: string | undefined
  id?: string | undefined
  matches?:
    | {
        amount?: string | undefined
        connectionId?: string | undefined
        currency?: Currency | undefined
        date?: string | undefined
        description?: string | undefined
        id?: string | undefined
        type?: string | undefined
      }[]
    | undefined
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
type DataIntegrityStatus = {
  type?: string | undefined
  amounts?:
    | { currency?: Currency | undefined; max?: number | undefined; min?: number | undefined }
    | undefined
  connectionIds?: { source?: string[] | undefined; target?: string[] | undefined } | undefined
  dates?:
    | {
        maxDate?: unknown | undefined
        maxOverlappingDate?: unknown | undefined
        minDate?: unknown | undefined
        minOverlappingDate?: unknown | undefined
      }
    | undefined
  statusInfo?:
    | {
        currentStatus?: 'Unknown' | 'DoesNotExist' | 'Error' | 'Complete' | undefined
        lastMatched?: unknown | undefined
        statusMessage?: string | undefined
      }
    | undefined
}
type Status = { metadata?: DataIntegrityStatus[] | undefined }
type DataIntegritySummary = {
  type?: string | undefined
  byAmount?:
    | {
        currency?: Currency | undefined
        matchPercentage?: number | undefined
        matched?: number | undefined
        total?: number | undefined
        unmatched?: number | undefined
      }
    | undefined
  byCount?:
    | {
        matchPercentage?: number | undefined
        matched?: number | undefined
        total?: number | undefined
        unmatched?: number | undefined
      }
    | undefined
}
type Summaries = { summaries?: DataIntegritySummary[] | undefined }
type ExcelStatus = {
  errorMessage?: string | undefined
  fileSize?: number | undefined
  inProgress?: boolean | undefined
  lastGenerated?: string | undefined
  lastInvocationId?: string | undefined
  queued?: string | undefined
  reportType?: string | undefined
  success?: boolean | undefined
}
type ReportComponent = {
  components?: ReportComponent[] | undefined
  dimension?: number | undefined
  dimensionDisplayName?: string | undefined
  item?: number | undefined
  itemDisplayName?: string | undefined
  measures?:
    | {
        index?: number | undefined
        measureDisplayName?: string | undefined
        value?: number | undefined
      }[]
    | undefined
}
type Report = {
  dimensions?:
    | {
        displayName?: string | undefined
        index?: number | undefined
        items?: { index?: number | undefined }[] | undefined
        type?: string | undefined
      }[]
    | undefined
  errors?:
    | {
        details?: { [x: string]: string[] } | undefined
        message?: string | undefined
        type?: string | undefined
      }[]
    | undefined
  measures?:
    | {
        displayName?: string | undefined
        index?: number | undefined
        type?: string | undefined
        units?: string | undefined
      }[]
    | undefined
  reportData?: ReportComponent[] | undefined
  reportInfo?: { [x: string]: string } | undefined
}
type CategorisedAccount = {
  accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
  confirmed?:
    | {
        detailType?: string | undefined
        subtype?: string | undefined
        type?: string | undefined
        modifiedDate?: unknown | undefined
      }
    | undefined
  suggested?:
    | {
        detailType?: string | undefined
        subtype?: string | undefined
        type?: string | undefined
        modifiedDate?: unknown | undefined
      }
    | undefined
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
type FinancialMetrics = {
  currency?: Currency | undefined
  errors?:
    | {
        message?: string | undefined
        type?:
          | 'DataNotSynced'
          | 'DataNotSupported'
          | 'DataSyncFailed'
          | 'DataTypeNotEnabled'
          | undefined
      }[]
    | undefined
  metrics?:
    | {
        errors?:
          | {
              details?: { [x: string]: string[] } | undefined
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
                    details?: { [x: string]: string[] } | undefined
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
      }[]
    | undefined
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
