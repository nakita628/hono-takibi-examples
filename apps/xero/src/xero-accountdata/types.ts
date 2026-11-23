type LedgerDecimal = { value: number; type: 'DEBIT' | 'CREDIT' }
type Account = {
  code?: (string | null) | undefined
  name: string
  class: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE'
  type: string
  status: 'ACTIVE' | 'ARCHIVED' | 'DELETED'
  systemAccountCode: string
}
type AccountBalance = {
  accountId: string
  date: string
  balance: LedgerDecimal
  signedBalance: number
  account: Account
}
type AccountBalancesResponse = { accountBalances: AccountBalance[] }
type FieldProblem = {
  fieldName?: (string | null) | undefined
  type?: (string | null) | undefined
  title?: (string | null) | undefined
  status?: (number | null) | undefined
  detail?: (string | null) | undefined
  instance?: (string | null) | undefined
}
type ValidationProblem = {
  type?: string | undefined
  title?: string | undefined
  status?: number | undefined
  detail?: string | undefined
  instance?: string | undefined
  fieldValidationErrors?: FieldProblem[] | undefined
}
type GatewayProblem = {
  Type?: (string | null) | undefined
  Title: string
  Status: number
  Detail?: string | undefined
  Instance?: string | undefined
  Extensions?: { [x: string]: unknown } | undefined
}
type ProblemDetails = {
  type?: string | undefined
  title: string
  status: number
  detail?: string | undefined
  instance?: string | undefined
}
type AccountingDateRange = { startDate: string; endDate: string }
type AccountMovement = {
  accountId: string
  dateRange: AccountingDateRange
  debits: number
  credits: number
  movement: LedgerDecimal
  signedMovement: number
  taxDebits?: number | undefined
  taxCredits?: number | undefined
  signedTaxMovement?: number | undefined
  account: Account
}
type AccountMovementsResponse = { accountMovements: AccountMovement[] }
type TransactionAccount = {
  id: string
  code?: (string | null) | undefined
  name: string
  class: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE'
  type: string
  status: 'ACTIVE' | 'ARCHIVED' | 'DELETED'
  systemAccountCode: string
}
type LineSource = {
  documentId?: (string | null) | undefined
  documentType?: (string | null) | undefined
  eventType?: (string | null) | undefined
  contactId?: (string | null) | undefined
  contactName?: (string | null) | undefined
  reference?: (string | null) | undefined
}
type LineTaxRate = {
  code?: (string | null) | undefined
  name?: (string | null) | undefined
  percentage?: (number | null) | undefined
}
type TrackingItemDetails = { categoryName: string; optionId: string; optionName: string }
type AccountTransactionLine = {
  journalNumber: bigint
  journalDate: string
  description: string
  account: TransactionAccount
  netAmount: LedgerDecimal
  signedNetAmount?: number | undefined
  taxAmount?: LedgerDecimal | undefined
  signedTaxAmount?: number | undefined
  source: LineSource
  taxRate: LineTaxRate
  trackingCategories?: { [x: string]: TrackingItemDetails } | undefined
}
type AccountTransactionsResponse = {
  currencyCode: string
  maxJournalNumber: bigint
  lines: AccountTransactionLine[]
  pagination?: ({ pageSize: number; nextToken: string } | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account-balances': {
      $get:
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                date: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: AccountBalancesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                date: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: ValidationProblem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                date: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: GatewayProblem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                date: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: GatewayProblem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                date: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                date: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                date: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account-movements': {
      $get:
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                startDate: string
                endDate: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: AccountMovementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                startDate: string
                endDate: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: ValidationProblem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                startDate: string
                endDate: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: GatewayProblem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                startDate: string
                endDate: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: GatewayProblem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                startDate: string
                endDate: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                startDate: string
                endDate: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                accountingBasis: 'ACCRUAL' | 'CASH'
                startDate: string
                endDate: string
                comparisonPeriodCount?: number | undefined
                comparisonPeriodSize?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                trackingItemIds?: string[] | undefined
                unassignedToTrackingCategoryIds?: string[] | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account-transactions': {
      $get:
        | {
            input: {
              query: {
                accountingBasis?: 'ACCRUAL' | 'CASH' | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                include?: 'trackingCategories'[] | undefined
                maxJournalNumber?: bigint | undefined
                token?: string | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: AccountTransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountingBasis?: 'ACCRUAL' | 'CASH' | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                include?: 'trackingCategories'[] | undefined
                maxJournalNumber?: bigint | undefined
                token?: string | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: ValidationProblem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                accountingBasis?: 'ACCRUAL' | 'CASH' | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                include?: 'trackingCategories'[] | undefined
                maxJournalNumber?: bigint | undefined
                token?: string | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: GatewayProblem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                accountingBasis?: 'ACCRUAL' | 'CASH' | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                include?: 'trackingCategories'[] | undefined
                maxJournalNumber?: bigint | undefined
                token?: string | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: GatewayProblem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                accountingBasis?: 'ACCRUAL' | 'CASH' | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                include?: 'trackingCategories'[] | undefined
                maxJournalNumber?: bigint | undefined
                token?: string | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                accountingBasis?: 'ACCRUAL' | 'CASH' | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                include?: 'trackingCategories'[] | undefined
                maxJournalNumber?: bigint | undefined
                token?: string | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                accountingBasis?: 'ACCRUAL' | 'CASH' | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                accountIds?: string[] | undefined
                class?: ('ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE')[] | undefined
                type?: string[] | undefined
                systemAccountCodes?: string[] | undefined
                include?: 'trackingCategories'[] | undefined
                maxJournalNumber?: bigint | undefined
                token?: string | undefined
              }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
