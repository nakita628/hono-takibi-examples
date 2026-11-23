type Error = { error?: string | undefined }
type Scenario = {
  achieve_date?: string | undefined
  closing_balance?: number | undefined
  closing_balance_date?: string | undefined
  created_at?: string | undefined
  current_balance?: number | undefined
  current_balance_date?: string | undefined
  current_balance_exchange_rate?: number | undefined
  current_balance_in_base_currency?: number | undefined
  description?: string | undefined
  id?: number | undefined
  interest_rate?: number | undefined
  interest_rate_repeat_id?: number | undefined
  'maximum-value'?: number | undefined
  'minimum-value'?: number | undefined
  safe_balance?: number | undefined
  safe_balance_in_base_currency?: number | undefined
  starting_balance?: number | undefined
  starting_balance_date?: string | undefined
  title?: string | undefined
  type?: 'no-interest' | 'savings' | 'debt' | undefined
  updated_at?: string | undefined
}
type Institution = {
  created_at?: string | undefined
  currency_code?: string | undefined
  id?: number | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type TransactionAccount = {
  created_at?: string | undefined
  currency_code?: string | undefined
  current_balance?: number | undefined
  current_balance_date?: string | undefined
  current_balance_exchange_rate?: number | undefined
  current_balance_in_base_currency?: number | undefined
  id?: number | undefined
  institution?: Institution | undefined
  name?: string | undefined
  number?: string | undefined
  safe_balance?: number | undefined
  safe_balance_in_base_currency?: number | undefined
  starting_balance?: number | undefined
  starting_balance_date?: string | undefined
  type?:
    | 'bank'
    | 'credits'
    | 'cash'
    | 'stocks'
    | 'mortgage'
    | 'loans'
    | 'vehicle'
    | 'property'
    | 'insurance'
    | 'other_asset'
    | 'other_liability'
    | undefined
  updated_at?: string | undefined
}
type Account = {
  created_at?: string | undefined
  currency_code?: string | undefined
  current_balance?: number | undefined
  current_balance_date?: string | undefined
  current_balance_exchange_rate?: number | undefined
  current_balance_in_base_currency?: number | undefined
  id?: number | undefined
  is_net_worth?: boolean | undefined
  primary_scenario?: Scenario | undefined
  primary_transaction_account?: TransactionAccount | undefined
  safe_balance?: number | undefined
  safe_balance_in_base_currency?: number | undefined
  scenarios?: Scenario[] | undefined
  title?: string | undefined
  transaction_accounts?: TransactionAccount[] | undefined
  type?:
    | 'bank'
    | 'credits'
    | 'cash'
    | 'stocks'
    | 'mortgage'
    | 'loans'
    | 'vehicle'
    | 'property'
    | 'insurance'
    | 'other_asset'
    | 'other_liability'
    | undefined
  updated_at?: string | undefined
}
type Category = {
  children?: Category[] | undefined
  colour?: string | undefined
  created_at?: string | undefined
  id?: number | undefined
  is_bill?: boolean | undefined
  is_transfer?: boolean | undefined
  parent_id?: number | undefined
  refund_behaviour?: 'debits_are_deductions' | 'credits_are_refunds' | null | undefined
  roll_up?: boolean | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type Transaction = {
  amount?: number | undefined
  amount_in_base_currency?: number | undefined
  category?: Category | undefined
  cheque_number?: string | undefined
  closing_balance?: number | undefined
  created_at?: string | undefined
  date?: string | undefined
  id?: number | undefined
  is_transfer?: boolean | undefined
  labels?: string[] | undefined
  memo?: string | undefined
  needs_review?: boolean | undefined
  note?: string | undefined
  original_payee?: string | undefined
  payee?: string | undefined
  status?: 'pending' | 'posted' | undefined
  transaction_account?: TransactionAccount | undefined
  type?: 'debit' | 'credit' | undefined
  updated_at?: string | undefined
  upload_source?: string | undefined
}
type Attachment = {
  content_type?: string | undefined
  content_type_meta?:
    | {
        description?: string | undefined
        extension?: string | undefined
        title?: string | undefined
      }
    | undefined
  created_at?: string | undefined
  file_name?: string | undefined
  id?: number | undefined
  original_url?: string | undefined
  title?: string | undefined
  type?: string | undefined
  updated_at?: string | undefined
  variants?: { large_url?: string | undefined; thumb_url?: string | undefined } | undefined
}
type CategoryRule = {
  category?: Category | undefined
  created_at?: string | undefined
  id?: number | undefined
  payee_matches?: string | undefined
  updated_at?: string | undefined
}
type CurrencySeparators = { major?: string | undefined; minor?: string | undefined }
type Currency = {
  id?: string | undefined
  minor_unit?: number | undefined
  name?: string | undefined
  separators?: CurrencySeparators | undefined
  symbol?: string | undefined
}
type Event = {
  amount?: number | undefined
  amount_in_base_currency?: number | undefined
  category?: Category | undefined
  colour?: string | undefined
  currency_code?: string | undefined
  date?: string | undefined
  id?: string | undefined
  infinite_series?: boolean | undefined
  note?: string | undefined
  repeat_interval?: number | undefined
  repeat_type?:
    | 'once'
    | 'daily'
    | 'weekly'
    | 'fortnightly'
    | 'monthly'
    | 'yearly'
    | 'each weekday'
    | undefined
  scenario?: Scenario | undefined
  series_id?: number | undefined
  series_start_id?: string | undefined
}
type User = {
  always_show_base_currency?: boolean | undefined
  available_accounts?: number | undefined
  available_budgets?: number | undefined
  avatar_url?: string | undefined
  base_currency_code?: string | undefined
  beta_user?: boolean | undefined
  created_at?: string | undefined
  email?: string | undefined
  forecast_defer_recalculate?: boolean | undefined
  forecast_end_date?: string | undefined
  forecast_last_accessed_at?: string | undefined
  forecast_last_updated_at?: string | undefined
  forecast_needs_recalculate?: boolean | undefined
  forecast_start_date?: string | undefined
  id?: number | undefined
  is_reviewing_transactions?: boolean | undefined
  last_activity_at?: string | undefined
  last_logged_in_at?: string | undefined
  login?: string | undefined
  name?: string | undefined
  time_zone?: string | undefined
  updated_at?: string | undefined
  using_multiple_currencies?: boolean | undefined
  week_start_day?: number | undefined
}
type TimeZone = {
  abbreviation?: string | undefined
  formatted_name?: string | undefined
  formatted_offset?: string | undefined
  identifier?: string | undefined
  name?: string | undefined
  utc_offset?: number | undefined
}
type Period = {
  actual_amount?: number | undefined
  currency_code?: string | undefined
  current?: boolean | undefined
  end_date?: string | undefined
  forecast_amount?: number | undefined
  over_budget?: boolean | undefined
  over_by?: number | undefined
  percentage_used?: number | undefined
  refund_amount?: number | undefined
  start_date?: string | undefined
  under_budget?: boolean | undefined
  under_by?: number | undefined
}
type BudgetAnalysis = {
  average_actual_amount?: number | undefined
  average_forecast_amount?: number | undefined
  currency_code?: string | undefined
  end_date?: string | undefined
  periods?: Period[] | undefined
  start_date?: string | undefined
  total_actual_amount?: number | undefined
  total_forecast_amount?: number | undefined
  total_over_by?: number | undefined
  total_under_by?: number | undefined
}
type BudgetAnalysisPackage = {
  category?: Category | undefined
  expense?: BudgetAnalysis | undefined
  income?: BudgetAnalysis | undefined
  is_transfer?: boolean | undefined
}
type SavedSearch = {
  created_at?: string | undefined
  id?: number | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 422 }
      $get:
        | { input: { param: { id: number } }; output: Account; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: number } } & {
              json: {
                currency_code?: string | undefined
                is_net_worth?: boolean | undefined
                title?: string | undefined
                type?:
                  | 'bank'
                  | 'credits'
                  | 'cash'
                  | 'loans'
                  | 'mortgage'
                  | 'stocks'
                  | 'vehicle'
                  | 'property'
                  | 'insurance'
                  | 'other_asset'
                  | 'other_liability'
                  | undefined
              }
            }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                currency_code?: string | undefined
                is_net_worth?: boolean | undefined
                title?: string | undefined
                type?:
                  | 'bank'
                  | 'credits'
                  | 'cash'
                  | 'loans'
                  | 'mortgage'
                  | 'stocks'
                  | 'vehicle'
                  | 'property'
                  | 'insurance'
                  | 'other_asset'
                  | 'other_liability'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                currency_code?: string | undefined
                is_net_worth?: boolean | undefined
                title?: string | undefined
                type?:
                  | 'bank'
                  | 'credits'
                  | 'cash'
                  | 'loans'
                  | 'mortgage'
                  | 'stocks'
                  | 'vehicle'
                  | 'property'
                  | 'insurance'
                  | 'other_asset'
                  | 'other_liability'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                currency_code?: string | undefined
                is_net_worth?: boolean | undefined
                title?: string | undefined
                type?:
                  | 'bank'
                  | 'credits'
                  | 'cash'
                  | 'loans'
                  | 'mortgage'
                  | 'stocks'
                  | 'vehicle'
                  | 'property'
                  | 'insurance'
                  | 'other_asset'
                  | 'other_liability'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/accounts/:id/transactions': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Transaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/attachments/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: number } }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: number } } & { json: { title?: string | undefined } }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { title?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { title?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { title?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/categories/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | { input: { param: { id: number } }; output: Category; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: number } } & {
              json: {
                colour?: string | undefined
                is_bill?: boolean | undefined
                is_transfer?: boolean | undefined
                parent_id?: number | undefined
                refund_behaviour?:
                  | 'debits_are_deductions'
                  | 'credits_are_refunds'
                  | null
                  | undefined
                roll_up?: boolean | undefined
                title?: string | undefined
              }
            }
            output: Category
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                colour?: string | undefined
                is_bill?: boolean | undefined
                is_transfer?: boolean | undefined
                parent_id?: number | undefined
                refund_behaviour?:
                  | 'debits_are_deductions'
                  | 'credits_are_refunds'
                  | null
                  | undefined
                roll_up?: boolean | undefined
                title?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                colour?: string | undefined
                is_bill?: boolean | undefined
                is_transfer?: boolean | undefined
                parent_id?: number | undefined
                refund_behaviour?:
                  | 'debits_are_deductions'
                  | 'credits_are_refunds'
                  | null
                  | undefined
                roll_up?: boolean | undefined
                title?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                colour?: string | undefined
                is_bill?: boolean | undefined
                is_transfer?: boolean | undefined
                parent_id?: number | undefined
                refund_behaviour?:
                  | 'debits_are_deductions'
                  | 'credits_are_refunds'
                  | null
                  | undefined
                roll_up?: boolean | undefined
                title?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/categories/:id/category_rules': {
      $post:
        | {
            input: { param: { id: number } } & {
              json: {
                apply_to_all?: boolean | undefined
                apply_to_uncategorised?: boolean | undefined
                payee_matches: string
              }
            }
            output: CategoryRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                apply_to_all?: boolean | undefined
                apply_to_uncategorised?: boolean | undefined
                payee_matches: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                apply_to_all?: boolean | undefined
                apply_to_uncategorised?: boolean | undefined
                payee_matches: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                apply_to_all?: boolean | undefined
                apply_to_uncategorised?: boolean | undefined
                payee_matches: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/categories/:id/transactions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Transaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/currencies': { $get: { input: {}; output: Currency[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/currencies/:id': {
      $get:
        | { input: { param: { id: string } }; output: Currency; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/events/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { behaviour: 'one' | 'forward' | 'all' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { behaviour: 'one' | 'forward' | 'all' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { behaviour: 'one' | 'forward' | 'all' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { behaviour: 'one' | 'forward' | 'all' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { behaviour: 'one' | 'forward' | 'all' } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | { input: { param: { id: string } }; output: Event; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                amount?: number | undefined
                behaviour: 'one' | 'forward' | 'all'
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type?:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
                  | undefined
              }
            }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                amount?: number | undefined
                behaviour: 'one' | 'forward' | 'all'
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type?:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                amount?: number | undefined
                behaviour: 'one' | 'forward' | 'all'
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type?:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                amount?: number | undefined
                behaviour: 'one' | 'forward' | 'all'
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type?:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                amount?: number | undefined
                behaviour: 'one' | 'forward' | 'all'
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type?:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                amount?: number | undefined
                behaviour: 'one' | 'forward' | 'all'
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type?:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/institutions/:id': {
      $delete:
        | {
            input: { param: { id: number } } & {
              query: { merge_into_institution_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & {
              query: { merge_into_institution_id?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { merge_into_institution_id?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { merge_into_institution_id?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { id: number } }
            output: Institution
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: number } } & {
              json: { currency_code?: string | undefined; title?: string | undefined }
            }
            output: Institution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { currency_code?: string | undefined; title?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: { currency_code?: string | undefined; title?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: { currency_code?: string | undefined; title?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/institutions/:id/accounts': {
      $get:
        | { input: { param: { id: number } }; output: Account[]; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: User; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/scenarios/:id/events': {
      $get:
        | {
            input: { param: { id: number } } & { query: { start_date: string; end_date: string } }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { start_date: string; end_date: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { start_date: string; end_date: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: number } } & {
              json: {
                amount: number
                category_id: number
                date: string
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
              }
            }
            output: Event
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount: number
                category_id: number
                date: string
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount: number
                category_id: number
                date: string
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount: number
                category_id: number
                date: string
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount: number
                category_id: number
                date: string
                note?: string | undefined
                repeat_interval?: number | undefined
                repeat_type:
                  | 'once'
                  | 'daily'
                  | 'weekly'
                  | 'fortnightly'
                  | 'monthly'
                  | 'yearly'
                  | 'each weekday'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/time_zones': { $get: { input: {}; output: TimeZone[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/transaction_accounts/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: TransactionAccount
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: number } } & {
              json: {
                institution_id?: number | undefined
                starting_balance?: number | undefined
                starting_balance_date?: string | undefined
              }
            }
            output: TransactionAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                institution_id?: number | undefined
                starting_balance?: number | undefined
                starting_balance_date?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                institution_id?: number | undefined
                starting_balance?: number | undefined
                starting_balance_date?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                institution_id?: number | undefined
                starting_balance?: number | undefined
                starting_balance_date?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/transaction_accounts/:id/transactions': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Transaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: number } } & {
              json: {
                amount: number
                category_id?: number | undefined
                cheque_number?: string | undefined
                date: string
                is_transfer?: boolean | undefined
                labels?: string | undefined
                memo?: string | undefined
                needs_review?: boolean | undefined
                note?: string | undefined
                payee: string
              }
            }
            output: Transaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount: number
                category_id?: number | undefined
                cheque_number?: string | undefined
                date: string
                is_transfer?: boolean | undefined
                labels?: string | undefined
                memo?: string | undefined
                needs_review?: boolean | undefined
                note?: string | undefined
                payee: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount: number
                category_id?: number | undefined
                cheque_number?: string | undefined
                date: string
                is_transfer?: boolean | undefined
                labels?: string | undefined
                memo?: string | undefined
                needs_review?: boolean | undefined
                note?: string | undefined
                payee: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount: number
                category_id?: number | undefined
                cheque_number?: string | undefined
                date: string
                is_transfer?: boolean | undefined
                labels?: string | undefined
                memo?: string | undefined
                needs_review?: boolean | undefined
                note?: string | undefined
                payee: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/transactions/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: number } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: number } } & {
              json: {
                amount?: number | undefined
                category_id?: number | undefined
                cheque_number?: string | undefined
                date?: string | undefined
                is_transfer?: boolean | undefined
                labels?: string | undefined
                memo?: string | undefined
                needs_review?: boolean | undefined
                note?: string | undefined
                payee?: string | undefined
              }
            }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount?: number | undefined
                category_id?: number | undefined
                cheque_number?: string | undefined
                date?: string | undefined
                is_transfer?: boolean | undefined
                labels?: string | undefined
                memo?: string | undefined
                needs_review?: boolean | undefined
                note?: string | undefined
                payee?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount?: number | undefined
                category_id?: number | undefined
                cheque_number?: string | undefined
                date?: string | undefined
                is_transfer?: boolean | undefined
                labels?: string | undefined
                memo?: string | undefined
                needs_review?: boolean | undefined
                note?: string | undefined
                payee?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                amount?: number | undefined
                category_id?: number | undefined
                cheque_number?: string | undefined
                date?: string | undefined
                is_transfer?: boolean | undefined
                labels?: string | undefined
                memo?: string | undefined
                needs_review?: boolean | undefined
                note?: string | undefined
                payee?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/transactions/:id/attachments': {
      $get:
        | {
            input: { param: { id: number } }
            output: Attachment[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: number } } & { json: { attachment_id?: number | undefined } }
            output: Attachment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & { json: { attachment_id?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { attachment_id?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/transactions/:transaction_id/attachments/:attachment_id': {
      $delete:
        | {
            input: { param: { transaction_id: number; attachment_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { transaction_id: number; attachment_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transaction_id: number; attachment_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:id': {
      $get:
        | { input: { param: { id: number } }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: number } } & {
              json: {
                always_show_base_currency?: boolean | undefined
                base_currency_code?: string | undefined
                beta_user?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                time_zone?: string | undefined
                week_start_day?: number | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                always_show_base_currency?: boolean | undefined
                base_currency_code?: string | undefined
                beta_user?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                time_zone?: string | undefined
                week_start_day?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                always_show_base_currency?: boolean | undefined
                base_currency_code?: string | undefined
                beta_user?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                time_zone?: string | undefined
                week_start_day?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                always_show_base_currency?: boolean | undefined
                base_currency_code?: string | undefined
                beta_user?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                time_zone?: string | undefined
                week_start_day?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:id/accounts': {
      $get:
        | { input: { param: { id: number } }; output: Account[]; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: number } } & {
              json: {
                currency_code: string
                institution_id: number
                title: string
                type:
                  | 'bank'
                  | 'credits'
                  | 'cash'
                  | 'loans'
                  | 'mortgage'
                  | 'stocks'
                  | 'vehicle'
                  | 'property'
                  | 'insurance'
                  | 'other_asset'
                  | 'other_liability'
              }
            }
            output: Account
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & {
              json: {
                currency_code: string
                institution_id: number
                title: string
                type:
                  | 'bank'
                  | 'credits'
                  | 'cash'
                  | 'loans'
                  | 'mortgage'
                  | 'stocks'
                  | 'vehicle'
                  | 'property'
                  | 'insurance'
                  | 'other_asset'
                  | 'other_liability'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                currency_code: string
                institution_id: number
                title: string
                type:
                  | 'bank'
                  | 'credits'
                  | 'cash'
                  | 'loans'
                  | 'mortgage'
                  | 'stocks'
                  | 'vehicle'
                  | 'property'
                  | 'insurance'
                  | 'other_asset'
                  | 'other_liability'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                currency_code: string
                institution_id: number
                title: string
                type:
                  | 'bank'
                  | 'credits'
                  | 'cash'
                  | 'loans'
                  | 'mortgage'
                  | 'stocks'
                  | 'vehicle'
                  | 'property'
                  | 'insurance'
                  | 'other_asset'
                  | 'other_liability'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { id: number } } & { json: { accounts: Account[] } }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { accounts: Account[] } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { accounts: Account[] } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { accounts: Account[] } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:id/attachments': {
      $get:
        | {
            input: { param: { id: number } } & { query: { unassigned?: number | undefined } }
            output: Attachment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { unassigned?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { unassigned?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: number } } & {
              json: {
                file_data?: string | undefined
                file_name?: string | undefined
                title?: string | undefined
              }
            }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                file_data?: string | undefined
                file_name?: string | undefined
                title?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                file_data?: string | undefined
                file_name?: string | undefined
                title?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                file_data?: string | undefined
                file_name?: string | undefined
                title?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:id/budget': {
      $get: {
        input: { param: { id: number } } & { query: { roll_up?: boolean | undefined } }
        output: BudgetAnalysisPackage[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id/budget_summary': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                period: 'weeks' | 'months' | 'years' | 'event'
                interval: number
                start_date: string
                end_date: string
              }
            }
            output: BudgetAnalysisPackage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                period: 'weeks' | 'months' | 'years' | 'event'
                interval: number
                start_date: string
                end_date: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                period: 'weeks' | 'months' | 'years' | 'event'
                interval: number
                start_date: string
                end_date: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                period: 'weeks' | 'months' | 'years' | 'event'
                interval: number
                start_date: string
                end_date: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:id/categories': {
      $get:
        | {
            input: { param: { id: number } }
            output: Category[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: number } } & {
              json: {
                colour?: string | undefined
                is_bill?: boolean | undefined
                is_transfer?: boolean | undefined
                parent_id?: number | undefined
                refund_behaviour?:
                  | 'debits_are_deductions'
                  | 'credits_are_refunds'
                  | null
                  | undefined
                roll_up?: boolean | undefined
                title: string
              }
            }
            output: Category
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & {
              json: {
                colour?: string | undefined
                is_bill?: boolean | undefined
                is_transfer?: boolean | undefined
                parent_id?: number | undefined
                refund_behaviour?:
                  | 'debits_are_deductions'
                  | 'credits_are_refunds'
                  | null
                  | undefined
                roll_up?: boolean | undefined
                title: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                colour?: string | undefined
                is_bill?: boolean | undefined
                is_transfer?: boolean | undefined
                parent_id?: number | undefined
                refund_behaviour?:
                  | 'debits_are_deductions'
                  | 'credits_are_refunds'
                  | null
                  | undefined
                roll_up?: boolean | undefined
                title: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                colour?: string | undefined
                is_bill?: boolean | undefined
                is_transfer?: boolean | undefined
                parent_id?: number | undefined
                refund_behaviour?:
                  | 'debits_are_deductions'
                  | 'credits_are_refunds'
                  | null
                  | undefined
                roll_up?: boolean | undefined
                title: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:id/category_rules': {
      $get:
        | {
            input: { param: { id: number } }
            output: CategoryRule[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/users/:id/events': {
      $get:
        | {
            input: { param: { id: number } } & { query: { start_date: string; end_date: string } }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { start_date: string; end_date: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { start_date: string; end_date: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:id/forecast_cache': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/users/:id/institutions': {
      $get:
        | {
            input: { param: { id: number } }
            output: Institution[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: number } } & { json: { currency_code: string; title: string } }
            output: Institution
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & { json: { currency_code: string; title: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { currency_code: string; title: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { currency_code: string; title: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:id/labels': {
      $get:
        | { input: { param: { id: number } }; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/users/:id/saved_searches': {
      $get:
        | {
            input: { param: { id: number } }
            output: SavedSearch[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/users/:id/transaction_accounts': {
      $get:
        | {
            input: { param: { id: number } }
            output: TransactionAccount[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: number } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/users/:id/transactions': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Transaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_since?: string | undefined
                uncategorised?: number | undefined
                type?: 'debit' | 'credit' | undefined
                needs_review?: number | undefined
                search?: string | undefined
                page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:id/trend_analysis': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                period: 'weeks' | 'months' | 'years' | 'event'
                interval: number
                start_date: string
                end_date: string
                categories: string
                scenarios: string
              }
            }
            output: BudgetAnalysisPackage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                period: 'weeks' | 'months' | 'years' | 'event'
                interval: number
                start_date: string
                end_date: string
                categories: string
                scenarios: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                period: 'weeks' | 'months' | 'years' | 'event'
                interval: number
                start_date: string
                end_date: string
                categories: string
                scenarios: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                period: 'weeks' | 'months' | 'years' | 'event'
                interval: number
                start_date: string
                end_date: string
                categories: string
                scenarios: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                period: 'weeks' | 'months' | 'years' | 'event'
                interval: number
                start_date: string
                end_date: string
                categories: string
                scenarios: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
