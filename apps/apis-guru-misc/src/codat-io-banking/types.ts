type AccountBalanceAccountBalanceAmounts = {
  available?: (number | null) | undefined
  current?: number | undefined
  limit?: (number | null) | undefined
}
type DateTime = string
type AccountBalance = {
  accountId?: string | undefined
  balance?: AccountBalanceAccountBalanceAmounts | undefined
  date?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type HRef = { href?: string | undefined }
type Links = { current: HRef; next?: HRef | undefined; previous?: HRef | undefined; self: HRef }
type AccountBalances = {
  results?: AccountBalance[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type AccountAccountIdentifierType =
  | 'Account'
  | 'Card'
  | 'Credit'
  | 'Depository'
  | 'Investment'
  | 'Loan'
  | 'Other'
type AccountAccountIdentifiers = {
  bankCode?: (string | null) | undefined
  bic?: (string | null) | undefined
  iban?: (string | null) | undefined
  maskedAccountNumber?: (string | null) | undefined
  number?: (string | null) | undefined
  subtype?: (string | null) | undefined
  type: AccountAccountIdentifierType
}
type AccountAccountInstitution = { id?: string | undefined; name?: string | undefined }
type AccountType = 'Unknown' | 'Credit' | 'Debit'
type Account = {
  balance?: AccountBalanceAccountBalanceAmounts | undefined
  currency?: string | undefined
  holder?: (string | null) | undefined
  id?: string | undefined
  identifiers?: AccountAccountIdentifiers | undefined
  informalName?: (string | null) | undefined
  institution?: AccountAccountInstitution | undefined
  name?: string | undefined
  type?: AccountType | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Accounts = {
  results?: Account[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TransactionCategoryTransactionCategoryStatus = 'Unknown' | 'Active' | 'Archived'
type TransactionCategory = {
  hasChildren?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  parentId?: (string | null) | undefined
  status?: TransactionCategoryTransactionCategoryStatus | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type TransactionCategories = {
  results?: TransactionCategory[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TransactionTransactionCode =
  | 'Unknown'
  | 'Fee'
  | 'Payment'
  | 'Cash'
  | 'Transfer'
  | 'Interest'
  | 'Cashback'
  | 'Cheque'
  | 'DirectDebit'
  | 'Purchase'
  | 'StandingOrder'
  | 'Adjustment'
  | 'Credit'
  | 'Other'
  | 'NotSupported'
type TransactionCategoryTransactionCategoryRef = { id: string; name?: (string | null) | undefined }
type Transaction = {
  accountId?: string | undefined
  amount?: number | undefined
  authorizedDate?: DateTime | undefined
  code?: TransactionTransactionCode | undefined
  currency?: string | undefined
  description?: (string | null) | undefined
  id?: string | undefined
  merchantName?: (string | null) | undefined
  postedDate?: DateTime | undefined
  transactionCategoryRef?: TransactionCategoryTransactionCategoryRef | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Transactions = {
  results?: Transaction[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/companies/:companyId/connections/:connectionId/data/banking-accountBalances': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: AccountBalances
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/banking-accounts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Accounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/banking-accounts/:accountId': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountId: string } }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/banking-transactionCategories': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: TransactionCategories
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/banking-transactionCategories/:transactionCategoryId': {
      $get: {
        input: { param: { companyId: string; connectionId: string; transactionCategoryId: string } }
        output: TransactionCategory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/banking-transactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Transactions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/banking-transactions/:transactionId': {
      $get: {
        input: { param: { companyId: string; transactionId: string; connectionId: string } }
        output: Transaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/banking-transactions': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Transactions
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
