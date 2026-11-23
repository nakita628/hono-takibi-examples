type LoanAccountPeriodicValue = { [x: string]: bigint }
type AccountType =
  | 'checking'
  | 'savings'
  | 'cash'
  | 'creditCard'
  | 'lineOfCredit'
  | 'otherAsset'
  | 'otherLiability'
  | 'mortgage'
  | 'autoLoan'
  | 'studentLoan'
  | 'personalLoan'
  | 'medicalDebt'
  | 'otherDebt'
type Account = {
  balance: bigint
  cleared_balance: bigint
  closed: boolean
  debt_escrow_amounts?: LoanAccountPeriodicValue | undefined
  debt_interest_rates?: LoanAccountPeriodicValue | undefined
  debt_minimum_payments?: LoanAccountPeriodicValue | undefined
  debt_original_balance?: bigint | undefined
  deleted: boolean
  direct_import_in_error?: boolean | undefined
  direct_import_linked?: boolean | undefined
  id: string
  last_reconciled_at?: string | undefined
  name: string
  note?: string | undefined
  on_budget: boolean
  transfer_payee_id: string
  type: AccountType
  uncleared_balance: bigint
}
type CurrencyFormat = {
  currency_symbol: string
  decimal_digits: number
  decimal_separator: string
  display_symbol: boolean
  example_format: string
  group_separator: string
  iso_code: string
  symbol_first: boolean
}
type DateFormat = { format: string }
type BudgetSummary = {
  accounts?: Account[] | undefined
  currency_format?: CurrencyFormat | undefined
  date_format?: DateFormat | undefined
  first_month?: string | undefined
  id: string
  last_modified_on?: string | undefined
  last_month?: string | undefined
  name: string
}
type BudgetSummaryResponse = {
  data: { budgets: BudgetSummary[]; default_budget?: BudgetSummary | undefined }
}
type ErrorDetail = { detail: string; id: string; name: string }
type ErrorResponse = { error: ErrorDetail }
type Category = {
  activity: bigint
  balance: bigint
  budgeted: bigint
  category_group_id: string
  deleted: boolean
  goal_cadence?: number | undefined
  goal_cadence_frequency?: number | undefined
  goal_creation_month?: string | undefined
  goal_day?: number | undefined
  goal_months_to_budget?: number | undefined
  goal_overall_funded?: bigint | undefined
  goal_overall_left?: bigint | undefined
  goal_percentage_complete?: number | undefined
  goal_target?: bigint | undefined
  goal_target_month?: string | undefined
  goal_type?: 'TB' | 'TBD' | 'MF' | 'NEED' | 'DEBT' | null | undefined
  goal_under_funded?: bigint | undefined
  hidden: boolean
  id: string
  name: string
  note?: string | undefined
  original_category_group_id?: string | undefined
}
type CategoryGroup = { deleted: boolean; hidden: boolean; id: string; name: string }
type MonthDetail = {
  activity: bigint
  age_of_money?: number | undefined
  budgeted: bigint
  deleted: boolean
  income: bigint
  month: string
  note?: string | undefined
  to_be_budgeted: bigint
  categories: Category[]
}
type PayeeLocation = {
  deleted: boolean
  id: string
  latitude: string
  longitude: string
  payee_id: string
}
type Payee = {
  deleted: boolean
  id: string
  name: string
  transfer_account_id?: string | undefined
}
type ScheduledSubTransaction = {
  amount: bigint
  category_id?: string | undefined
  deleted: boolean
  id: string
  memo?: string | undefined
  payee_id?: string | undefined
  scheduled_transaction_id: string
  transfer_account_id?: string | undefined
}
type ScheduledTransactionSummary = {
  account_id: string
  amount: bigint
  category_id?: string | undefined
  date_first: string
  date_next: string
  deleted: boolean
  flag_color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | null | undefined
  frequency:
    | 'never'
    | 'daily'
    | 'weekly'
    | 'everyOtherWeek'
    | 'twiceAMonth'
    | 'every4Weeks'
    | 'monthly'
    | 'everyOtherMonth'
    | 'every3Months'
    | 'every4Months'
    | 'twiceAYear'
    | 'yearly'
    | 'everyOtherYear'
  id: string
  memo?: string | undefined
  payee_id?: string | undefined
  transfer_account_id?: string | undefined
}
type SubTransaction = {
  amount: bigint
  category_id?: string | undefined
  category_name?: string | undefined
  deleted: boolean
  id: string
  memo?: string | undefined
  payee_id?: string | undefined
  payee_name?: string | undefined
  transaction_id: string
  transfer_account_id?: string | undefined
  transfer_transaction_id?: string | undefined
}
type TransactionSummary = {
  account_id: string
  amount: bigint
  approved: boolean
  category_id?: string | undefined
  cleared: 'cleared' | 'uncleared' | 'reconciled'
  date: string
  debt_transaction_type?:
    | 'payment'
    | 'refund'
    | 'fee'
    | 'interest'
    | 'escrow'
    | 'balancedAdjustment'
    | 'credit'
    | 'charge'
    | null
    | undefined
  deleted: boolean
  flag_color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | null | undefined
  id: string
  import_id?: string | undefined
  import_payee_name?: string | undefined
  import_payee_name_original?: string | undefined
  matched_transaction_id?: string | undefined
  memo?: string | undefined
  payee_id?: string | undefined
  transfer_account_id?: string | undefined
  transfer_transaction_id?: string | undefined
}
type BudgetDetail = {
  accounts?: Account[] | undefined
  currency_format?: CurrencyFormat | undefined
  date_format?: DateFormat | undefined
  first_month?: string | undefined
  id: string
  last_modified_on?: string | undefined
  last_month?: string | undefined
  name: string
  categories?: Category[] | undefined
  category_groups?: CategoryGroup[] | undefined
  months?: MonthDetail[] | undefined
  payee_locations?: PayeeLocation[] | undefined
  payees?: Payee[] | undefined
  scheduled_subtransactions?: ScheduledSubTransaction[] | undefined
  scheduled_transactions?: ScheduledTransactionSummary[] | undefined
  subtransactions?: SubTransaction[] | undefined
  transactions?: TransactionSummary[] | undefined
}
type BudgetDetailResponse = { data: { budget: BudgetDetail; server_knowledge: bigint } }
type AccountsResponse = { data: { accounts: Account[]; server_knowledge: bigint } }
type SaveAccount = { balance: bigint; name: string; type: AccountType }
type PostAccountWrapper = { account: SaveAccount }
type AccountResponse = { data: { account: Account } }
type TransactionDetail = {
  account_id: string
  amount: bigint
  approved: boolean
  category_id?: string | undefined
  cleared: 'cleared' | 'uncleared' | 'reconciled'
  date: string
  debt_transaction_type?:
    | 'payment'
    | 'refund'
    | 'fee'
    | 'interest'
    | 'escrow'
    | 'balancedAdjustment'
    | 'credit'
    | 'charge'
    | null
    | undefined
  deleted: boolean
  flag_color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | null | undefined
  id: string
  import_id?: string | undefined
  import_payee_name?: string | undefined
  import_payee_name_original?: string | undefined
  matched_transaction_id?: string | undefined
  memo?: string | undefined
  payee_id?: string | undefined
  transfer_account_id?: string | undefined
  transfer_transaction_id?: string | undefined
  account_name: string
  category_name?: string | undefined
  payee_name?: string | undefined
  subtransactions: SubTransaction[]
}
type TransactionsResponse = {
  data: { server_knowledge: bigint; transactions: TransactionDetail[] }
}
type CategoryGroupWithCategories = {
  deleted: boolean
  hidden: boolean
  id: string
  name: string
  categories: Category[]
}
type CategoriesResponse = {
  data: { category_groups: CategoryGroupWithCategories[]; server_knowledge: bigint }
}
type CategoryResponse = { data: { category: Category } }
type HybridTransaction = {
  account_id: string
  amount: bigint
  approved: boolean
  category_id?: string | undefined
  cleared: 'cleared' | 'uncleared' | 'reconciled'
  date: string
  debt_transaction_type?:
    | 'payment'
    | 'refund'
    | 'fee'
    | 'interest'
    | 'escrow'
    | 'balancedAdjustment'
    | 'credit'
    | 'charge'
    | null
    | undefined
  deleted: boolean
  flag_color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | null | undefined
  id: string
  import_id?: string | undefined
  import_payee_name?: string | undefined
  import_payee_name_original?: string | undefined
  matched_transaction_id?: string | undefined
  memo?: string | undefined
  payee_id?: string | undefined
  transfer_account_id?: string | undefined
  transfer_transaction_id?: string | undefined
  account_name: string
  category_name?: string | undefined
  parent_transaction_id?: string | undefined
  payee_name?: string | undefined
  type: 'transaction' | 'subtransaction'
}
type HybridTransactionsResponse = {
  data: { server_knowledge?: bigint | undefined; transactions: HybridTransaction[] }
}
type MonthSummary = {
  activity: bigint
  age_of_money?: number | undefined
  budgeted: bigint
  deleted: boolean
  income: bigint
  month: string
  note?: string | undefined
  to_be_budgeted: bigint
}
type MonthSummariesResponse = { data: { months: MonthSummary[]; server_knowledge: bigint } }
type MonthDetailResponse = { data: { month: MonthDetail } }
type SaveMonthCategory = { budgeted: bigint }
type PatchMonthCategoryWrapper = { category: SaveMonthCategory }
type SaveCategoryResponse = { data: { category: Category; server_knowledge: bigint } }
type PayeeLocationsResponse = { data: { payee_locations: PayeeLocation[] } }
type PayeeLocationResponse = { data: { payee_location: PayeeLocation } }
type PayeesResponse = { data: { payees: Payee[]; server_knowledge: bigint } }
type PayeeResponse = { data: { payee: Payee } }
type ScheduledTransactionDetail = {
  account_id: string
  amount: bigint
  category_id?: string | undefined
  date_first: string
  date_next: string
  deleted: boolean
  flag_color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | null | undefined
  frequency:
    | 'never'
    | 'daily'
    | 'weekly'
    | 'everyOtherWeek'
    | 'twiceAMonth'
    | 'every4Weeks'
    | 'monthly'
    | 'everyOtherMonth'
    | 'every3Months'
    | 'every4Months'
    | 'twiceAYear'
    | 'yearly'
    | 'everyOtherYear'
  id: string
  memo?: string | undefined
  payee_id?: string | undefined
  transfer_account_id?: string | undefined
  account_name: string
  category_name?: string | undefined
  payee_name?: string | undefined
  subtransactions: ScheduledSubTransaction[]
}
type ScheduledTransactionsResponse = {
  data: { scheduled_transactions: ScheduledTransactionDetail[]; server_knowledge: bigint }
}
type ScheduledTransactionResponse = { data: { scheduled_transaction: ScheduledTransactionDetail } }
type BudgetSettings = { currency_format: CurrencyFormat; date_format: DateFormat }
type BudgetSettingsResponse = { data: { settings: BudgetSettings } }
type SaveSubTransaction = {
  amount: bigint
  category_id?: string | undefined
  memo?: string | undefined
  payee_id?: string | undefined
  payee_name?: string | undefined
}
type SaveTransactionWithId = {
  id?: string | undefined
  account_id?: string | undefined
  amount?: bigint | undefined
  approved?: boolean | undefined
  category_id?: string | undefined
  cleared?: 'cleared' | 'uncleared' | 'reconciled' | undefined
  date?: string | undefined
  flag_color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | null | undefined
  import_id?: string | undefined
  memo?: string | undefined
  payee_id?: string | undefined
  payee_name?: string | undefined
  subtransactions?: SaveSubTransaction[] | undefined
}
type PatchTransactionsWrapper = { transactions: SaveTransactionWithId[] }
type SaveTransaction = {
  account_id?: string | undefined
  amount?: bigint | undefined
  approved?: boolean | undefined
  category_id?: string | undefined
  cleared?: 'cleared' | 'uncleared' | 'reconciled' | undefined
  date?: string | undefined
  flag_color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | null | undefined
  import_id?: string | undefined
  memo?: string | undefined
  payee_id?: string | undefined
  payee_name?: string | undefined
  subtransactions?: SaveSubTransaction[] | undefined
}
type PostTransactionsWrapper = {
  transaction?: SaveTransaction | undefined
  transactions?: SaveTransaction[] | undefined
}
type SaveTransactionsResponse = {
  data: {
    duplicate_import_ids?: string[] | undefined
    server_knowledge: bigint
    transaction?: TransactionDetail | undefined
    transaction_ids: string[]
    transactions?: TransactionDetail[] | undefined
  }
}
type BulkTransactions = { transactions: SaveTransaction[] }
type BulkResponse = {
  data: { bulk: { duplicate_import_ids: string[]; transaction_ids: string[] } }
}
type TransactionsImportResponse = { data: { transaction_ids: string[] } }
type TransactionResponse = { data: { transaction: TransactionDetail } }
type PutTransactionWrapper = { transaction: SaveTransaction }
type User = { id: string }
type UserResponse = { data: { user: User } }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/budgets': {
      $get:
        | {
            input: { query: { include_accounts?: boolean | undefined } }
            output: BudgetSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_accounts?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { include_accounts?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id': {
      $get:
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: BudgetDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/accounts': {
      $get:
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: AccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { budget_id: string } } & { json: PostAccountWrapper }
            output: AccountResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { budget_id: string } } & { json: PostAccountWrapper }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/budgets/:budget_id/accounts/:account_id': {
      $get:
        | {
            input: { param: { budget_id: string; account_id: string } }
            output: AccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; account_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; account_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/accounts/:account_id/transactions': {
      $get:
        | {
            input: { param: { budget_id: string; account_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: TransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; account_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; account_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/categories': {
      $get:
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: CategoriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/categories/:category_id': {
      $get:
        | {
            input: { param: { budget_id: string; category_id: string } }
            output: CategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; category_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; category_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/categories/:category_id/transactions': {
      $get:
        | {
            input: { param: { budget_id: string; category_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: HybridTransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; category_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; category_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/months': {
      $get:
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: MonthSummariesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/months/:month': {
      $get:
        | {
            input: { param: { budget_id: string; month: string } }
            output: MonthDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; month: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; month: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/months/:month/categories/:category_id': {
      $get:
        | {
            input: { param: { budget_id: string; month: string; category_id: string } }
            output: CategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; month: string; category_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; month: string; category_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { budget_id: string; month: string; category_id: string } } & {
              json: PatchMonthCategoryWrapper
            }
            output: SaveCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; month: string; category_id: string } } & {
              json: PatchMonthCategoryWrapper
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/budgets/:budget_id/payee_locations': {
      $get:
        | {
            input: { param: { budget_id: string } }
            output: PayeeLocationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/payee_locations/:payee_location_id': {
      $get:
        | {
            input: { param: { budget_id: string; payee_location_id: string } }
            output: PayeeLocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; payee_location_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; payee_location_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/payees': {
      $get:
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: PayeesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/payees/:payee_id': {
      $get:
        | {
            input: { param: { budget_id: string; payee_id: string } }
            output: PayeeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; payee_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; payee_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/payees/:payee_id/payee_locations': {
      $get:
        | {
            input: { param: { budget_id: string; payee_id: string } }
            output: PayeeLocationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; payee_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; payee_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/payees/:payee_id/transactions': {
      $get:
        | {
            input: { param: { budget_id: string; payee_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: HybridTransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; payee_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; payee_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/scheduled_transactions': {
      $get:
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ScheduledTransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string } } & {
              query: { last_knowledge_of_server?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/scheduled_transactions/:scheduled_transaction_id': {
      $get:
        | {
            input: { param: { budget_id: string; scheduled_transaction_id: string } }
            output: ScheduledTransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; scheduled_transaction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; scheduled_transaction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/settings': {
      $get:
        | {
            input: { param: { budget_id: string } }
            output: BudgetSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/budgets/:budget_id/transactions': {
      $get:
        | {
            input: { param: { budget_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: TransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { budget_id: string } } & {
              query: {
                since_date?: string | undefined
                type?: 'uncategorized' | 'unapproved' | undefined
                last_knowledge_of_server?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch: {
        input: { param: { budget_id: string } } & { json: PatchTransactionsWrapper }
        output: ErrorResponse
        outputFormat: 'json'
        status: 400
      }
      $post:
        | {
            input: { param: { budget_id: string } } & { json: PostTransactionsWrapper }
            output: SaveTransactionsResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { budget_id: string } } & { json: PostTransactionsWrapper }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { budget_id: string } } & { json: PostTransactionsWrapper }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/budgets/:budget_id/transactions/bulk': {
      $post:
        | {
            input: { param: { budget_id: string } } & { json: BulkTransactions }
            output: BulkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { budget_id: string } } & { json: BulkTransactions }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/budgets/:budget_id/transactions/import': {
      $post:
        | {
            input: { param: { budget_id: string } }
            output: TransactionsImportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string } }
            output: TransactionsImportResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { budget_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/budgets/:budget_id/transactions/:transaction_id': {
      $delete:
        | {
            input: { param: { budget_id: string; transaction_id: string } }
            output: TransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; transaction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { budget_id: string; transaction_id: string } }
            output: TransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; transaction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_id: string; transaction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { budget_id: string; transaction_id: string } } & {
              json: PutTransactionWrapper
            }
            output: TransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_id: string; transaction_id: string } } & {
              json: PutTransactionWrapper
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user': {
      $get:
        | { input: {}; output: UserResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
