import { createRoute, z } from '@hono/zod-openapi'

const ScenarioSchema = z
  .object({
    achieve_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'For goals, the date that they should be achieved by.' }),
    closing_balance: z
      .number()
      .exactOptional()
      .openapi({ description: 'The closing balance of the scenario.', example: 5431.2 }),
    closing_balance_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the closing balance.', example: '2018-02-27' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the scenario was created.', example: '2015-04-21T22:42:22Z' }),
    current_balance: z
      .number()
      .exactOptional()
      .openapi({ description: 'The current balance of the scenario.', example: 5431.2 }),
    current_balance_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the current balance.', example: '2018-02-27' }),
    current_balance_exchange_rate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The exchange rate between the scenario's currency and the user's base currency, when different. If the currencies are the same, null is returned.",
        example: 1.5,
      }),
    current_balance_in_base_currency: z
      .number()
      .exactOptional()
      .openapi({
        description: "The current balance of the scenario in the user's base currency.",
        example: 8146.8,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of what the scenario is modelling.' }),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the scenario.', example: 42 }),
    interest_rate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The amount of interest to apply to the balance. Will apply periodically depending on what `interest_rate_repeat_id` is set to.',
        example: 2.4,
      }),
    interest_rate_repeat_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A number representing how often the interest should be applied. 0 is used for no interest, 2 is weekly, 3 is fortnightly, 4 is monthly, 5 is yearly and 7 for quarterly.',
        example: 4,
      }),
    'maximum-value': z.number().exactOptional().openapi({ example: 42 }),
    'minimum-value': z.number().exactOptional().openapi({ example: 4000 }),
    safe_balance: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not activated, then null is returned.",
        example: 5431.2,
      }),
    safe_balance_in_base_currency: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not available, then null is returned.",
        example: 8146.8,
      }),
    starting_balance: z
      .number()
      .exactOptional()
      .openapi({ description: 'The starting balance of the scenario.', example: 2450 }),
    starting_balance_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the starting balance.', example: '2018-02-27' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the scenario.', example: 'Wedding' }),
    type: z
      .enum(['no-interest', 'savings', 'debt'])
      .exactOptional()
      .openapi({ description: 'The type of the scenario.', example: 'no-interest' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the scenario was last updated.',
        example: '2015-04-21T22:42:22Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('Scenario')

const InstitutionSchema = z
  .object({
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the institution was created.',
        example: '2015-04-21T22:42:22Z',
      }),
    currency_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code of the institution.', example: 'NZD' }),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the institution.', example: 57 }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the institution.', example: 'Bank of Foo' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the institution was last updated.',
        example: '2015-04-21T22:42:22Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('Institution')

const TransactionAccountSchema = z
  .object({
    created_at: z.string().exactOptional().openapi({ example: '2015-03-17T02:42:10Z' }),
    currency_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency that the account is in. This is determined by the account that the transaction account belongs to.',
        example: 'NZD',
      }),
    current_balance: z.number().exactOptional().openapi({ example: 2694.39 }),
    current_balance_date: z.string().exactOptional().openapi({ example: '2015-07-03' }),
    current_balance_exchange_rate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The exchange rate between the transaction account's currency and the user's base currency, when different. If the currencies are the same, null is returned.",
        example: 1.5,
      }),
    current_balance_in_base_currency: z
      .number()
      .exactOptional()
      .openapi({
        description: "The current balance of the transaction account in the user's base currency.",
        example: 4041.59,
      }),
    id: z.int().exactOptional().openapi({ example: 96027 }),
    institution: InstitutionSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ example: 'Sample Credit' }),
    number: z.string().exactOptional().openapi({ example: 'ASBCRD44554' }),
    safe_balance: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The current safe balance, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.',
        example: 2694.39,
      }),
    safe_balance_in_base_currency: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The current safe balance in the user's base currency, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.",
        example: 4041.59,
      }),
    starting_balance: z.number().exactOptional().openapi({ example: 3547.45 }),
    starting_balance_date: z.string().exactOptional().openapi({ example: '2015-03-15' }),
    type: z
      .enum([
        'bank',
        'credits',
        'cash',
        'stocks',
        'mortgage',
        'loans',
        'vehicle',
        'property',
        'insurance',
        'other_asset',
        'other_liability',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the transaction account.', example: 'bank' }),
    updated_at: z.string().exactOptional().openapi({ example: '2015-07-02T22:14:49Z' }),
  })
  .openapi({ required: [] })
  .openapi('TransactionAccount')

type AccountType = {
  created_at?: string
  currency_code?: string
  current_balance?: number
  current_balance_date?: string
  current_balance_exchange_rate?: number
  current_balance_in_base_currency?: number
  id?: number
  is_net_worth?: boolean
  primary_scenario?: z.infer<typeof ScenarioSchema>
  primary_transaction_account?: z.infer<typeof TransactionAccountSchema>
  safe_balance?: number
  safe_balance_in_base_currency?: number
  scenarios?: z.infer<typeof ScenarioSchema>[]
  title?: string
  transaction_accounts?: z.infer<typeof TransactionAccountSchema>[]
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
  updated_at?: string
}

type CategoryType = {
  children?: CategoryType[]
  colour?: string
  created_at?: string
  id?: number
  is_bill?: boolean
  is_transfer?: boolean
  parent_id?: number
  refund_behaviour?: 'debits_are_deductions' | 'credits_are_refunds' | null
  roll_up?: boolean
  title?: string
  updated_at?: string
}

const AccountSchema: z.ZodType<AccountType> = z
  .lazy(() =>
    z
      .object({
        created_at: z
          .string()
          .exactOptional()
          .openapi({ description: 'When the account was created.', example: '2018-02-27' }),
        currency_code: z
          .string()
          .exactOptional()
          .openapi({ description: 'The currency code for the account.', example: 'NZD' }),
        current_balance: z
          .number()
          .exactOptional()
          .openapi({ description: 'The current balance of the account.', example: 2694.39 }),
        current_balance_date: z
          .string()
          .exactOptional()
          .openapi({ description: 'The date of the current balance.', example: '2018-02-27' }),
        current_balance_exchange_rate: z
          .number()
          .exactOptional()
          .openapi({
            description:
              "The exchange rate between the account's currency and the user's base currency, when different. If the currencies are the same, null is returned.",
            example: 1.5,
          }),
        current_balance_in_base_currency: z
          .number()
          .exactOptional()
          .openapi({
            description: "The current balance of the account in the user's base currency.",
            example: 4041.59,
          }),
        id: z
          .int()
          .exactOptional()
          .openapi({ description: 'The unique identifier of the account.', example: 42 }),
        is_net_worth: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the account is a net worth asset.', example: false }),
        primary_scenario: ScenarioSchema.exactOptional(),
        primary_transaction_account: TransactionAccountSchema.exactOptional(),
        safe_balance: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The current safe balance, if safe balance is activated on the account. If safe balance is not activated, then null is returned.',
            example: 2694.39,
          }),
        safe_balance_in_base_currency: z
          .number()
          .exactOptional()
          .openapi({
            description:
              "The current safe balance in the user's base currency, if safe balance is activated on the account. If safe balance is not activated, then null is returned.",
            example: 4041.59,
          }),
        scenarios: z
          .array(ScenarioSchema)
          .exactOptional()
          .openapi({
            description: 'All scenarios that compose the account, including the primary.',
          }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The title of the account.', example: 'Bank of Foo' }),
        transaction_accounts: z
          .array(TransactionAccountSchema)
          .exactOptional()
          .openapi({
            description:
              'All transaction accounts that compose the account, including the primary.',
          }),
        type: z
          .enum([
            'bank',
            'credits',
            'cash',
            'stocks',
            'mortgage',
            'loans',
            'vehicle',
            'property',
            'insurance',
            'other_asset',
            'other_liability',
          ])
          .exactOptional()
          .openapi({ description: 'The type of the account.', example: 'bank' }),
        updated_at: z
          .string()
          .exactOptional()
          .openapi({ description: 'When the account was last updated.', example: '2018-02-27' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Account')

const AttachmentSchema = z
  .object({
    content_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content type of the attachment.', example: 'image/png' }),
    content_type_meta: z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The content type description of the attachment.',
            example: 'PNG image',
          }),
        extension: z
          .string()
          .exactOptional()
          .openapi({ description: 'The extension type of the attachment.', example: 'png' }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The content type title of the attachment.', example: 'PNG' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the attachment was created.',
        example: '2015-08-16T02:17:02Z',
      }),
    file_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file name of the attachment.', example: 'taxi.png' }),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the attachment', example: 42 }),
    original_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url of the attachment.',
        example: 'https://image.com/image.png',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the attachment. If blank or not provided, the title will be derived from the file name.',
        example: 'Invoice for taxi',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of attachment.', example: 'image' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the attachment was last updated.',
        example: '2015-08-16T02:17:02Z',
      }),
    variants: z
      .object({
        large_url: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The url of the large version of the attachment.',
            example: 'https://image.com/image.png',
          }),
        thumb_url: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The url of the thumb version of the attachment.',
            example: 'https://image.com/image.png',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Attachment')

const PeriodSchema = z
  .object({
    actual_amount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The sum of all actuals (transactions) in the period.',
        example: -42.3,
      }),
    currency_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency of the period.', example: 'nzd' }),
    current: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether this period is current, such that the current date (in the user's time zone) falls within the date range.",
        example: true,
      }),
    end_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end date of the period.', example: '2016-11-30' }),
    forecast_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The sum of all forecast sources (budget events) in the period, for comparison against the actual amount.',
        example: -60,
      }),
    over_budget: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the budget has been exceeded in the period.',
        example: false,
      }),
    over_by: z
      .number()
      .exactOptional()
      .openapi({
        description: 'How much the budget has been exceeded by in the period.',
        example: 0,
      }),
    percentage_used: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The percentage of the budget that has been used in the period.',
        example: 70.5,
      }),
    refund_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'This attribute tracks the amount that has been refunded or deducted to the actual amount. When a category is set to "always expense", any credit transactions are treated as refunds and when set to "always income", any debit transactions are treated as deductions.',
        example: 5.6,
      }),
    start_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start date of the period.', example: '2016-11-01' }),
    under_budget: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the budget has not been exceeded in the period.',
        example: true,
      }),
    under_by: z
      .number()
      .exactOptional()
      .openapi({
        description: 'How much there is left in the budget for the period.',
        example: 17.7,
      }),
  })
  .openapi({ required: [] })
  .openapi('Period')

const BudgetAnalysisSchema = z
  .object({
    average_actual_amount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The average actual (transactions) amount across all periods.',
        example: -42.3,
      }),
    average_forecast_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The average budgeted amount across all periods.', example: -60 }),
    currency_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency of the budget analysis.', example: 'nzd' }),
    end_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end date of the budget analysis.', example: '2016-11-30' }),
    periods: z
      .array(PeriodSchema)
      .exactOptional()
      .openapi({ description: 'The period analyses that this budget analysis comprises.' }),
    start_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start date of the budget analysis.', example: '2016-11-01' }),
    total_actual_amount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total actual (transactions) amount across all periods.',
        example: -42.3,
      }),
    total_forecast_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total budgeted amount across all periods.', example: -60 }),
    total_over_by: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total amount the budget was exceeded across all periods.',
        example: 0,
      }),
    total_under_by: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total amount the budget was under by across all periods.',
        example: 17.7,
      }),
  })
  .openapi({ required: [] })
  .openapi('BudgetAnalysis')

const CategorySchema: z.ZodType<CategoryType> = z
  .lazy(() =>
    z
      .object({
        children: z
          .array(CategorySchema)
          .exactOptional()
          .openapi({ description: "The category's child categories." }),
        colour: z
          .string()
          .exactOptional()
          .openapi({ description: 'The colour for the category.', example: '#00ff00' }),
        created_at: z
          .string()
          .exactOptional()
          .openapi({
            description: 'When the category was created.',
            example: '2015-08-16T02:17:02Z',
          }),
        id: z
          .int()
          .exactOptional()
          .openapi({ description: 'The unique identifier of the category.', example: 1438154 }),
        is_bill: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the category is a bill category. A bill category is when budgeted amounts are normally spent at once, instead of spread across a budgeting period. This category will be included in the bill reminder email when set to true.',
            example: true,
          }),
        is_transfer: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether this category has been marked as a transfer category.',
            example: false,
          }),
        parent_id: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The unique identifier of the parent category of this category, or null if this category has no parent (i.e. is a top-level category)',
            example: 42,
          }),
        refund_behaviour: z
          .union([
            z.literal('debits_are_deductions'),
            z.literal('credits_are_refunds'),
            z.literal(null),
          ])
          .nullable()
          .exactOptional()
          .openapi({
            description: "How the category's refunds or deductions should be reported on.",
            example: 'credits_are_refunds',
          }),
        roll_up: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "Whether the category's budget is rolled up into its parent category, if a parent category is present.",
            example: false,
          }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The title of the category.', example: 'Beer' }),
        updated_at: z
          .string()
          .exactOptional()
          .openapi({
            description: 'When the category was last updated.',
            example: '2015-08-16T02:17:02Z',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Category')

const BudgetAnalysisPackageSchema = z
  .object({
    category: CategorySchema.exactOptional(),
    expense: BudgetAnalysisSchema.exactOptional(),
    income: BudgetAnalysisSchema.exactOptional(),
    is_transfer: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the expense budget analysis looks like a transfer to the income budget analysis, based on a number of heuristics.',
        example: false,
      }),
  })
  .openapi({ required: [] })
  .openapi('BudgetAnalysisPackage')

const CategoryRuleSchema = z
  .object({
    category: CategorySchema.exactOptional(),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the category rule was created.',
        example: '2019-07-09T10:06:02Z',
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the category rule.', example: 1438154 }),
    payee_matches: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The keyword/s to match the transactions payees.',
        example: 'Countdown',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the category rule was last updated.',
        example: '2019-07-09T10:06:02Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('CategoryRule')

const CurrencySeparatorsSchema = z
  .object({
    major: z
      .string()
      .exactOptional()
      .openapi({ description: 'The separator used in the major unit.', example: ',' }),
    minor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The seperator used for the minor unit.', example: '.' }),
  })
  .openapi({ required: [] })
  .openapi('CurrencySeparators')

const CurrencySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISO 4217 or unofficial currency code.', example: 'nzd' }),
    minor_unit: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of digits after the minor unit separator.', example: 2 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the currency.', example: 'New Zealand Dollar' }),
    separators: CurrencySeparatorsSchema.exactOptional(),
    symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'The symbol of the currency.', example: '$' }),
  })
  .openapi({ required: [] })
  .openapi('Currency')

const ErrorSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message describing the error that occurred.',
        example: 'A message describing the error that occurred.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const EventSchema = z
  .object({
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount of the event.', example: 250.5 }),
    amount_in_base_currency: z
      .number()
      .exactOptional()
      .openapi({
        description: "The amount of the event in the user's base currency.",
        example: 375.75,
      }),
    category: CategorySchema.exactOptional(),
    colour: z
      .string()
      .exactOptional()
      .openapi({ description: 'The CSS hex-style colour of the event.', example: '#F63737' }),
    currency_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code of the event.', example: 'nzd' }),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the event.', example: '2020-10-27' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the event.', example: '42-1601942400' }),
    infinite_series: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the event repeats and does not have an end date.',
        example: true,
      }),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The note of the event.',
        example: 'Buy more beer every Friday from the local brewery.',
      }),
    repeat_interval: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The repeat interval of how often the event takes place.',
        example: 1,
      }),
    repeat_type: z
      .enum(['once', 'daily', 'weekly', 'fortnightly', 'monthly', 'yearly', 'each weekday'])
      .exactOptional()
      .openapi({ description: 'The repeat type of the event.', example: 'weekly' }),
    scenario: ScenarioSchema.exactOptional(),
    series_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the series that the event belongs to.',
        example: 42,
      }),
    series_start_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The unique identifier of the series followed by the series's start date.",
        example: '42-1593993600',
      }),
  })
  .openapi({ required: [] })
  .openapi('Event')

const SavedSearchSchema = z
  .object({
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the saved search was created.',
        example: '2015-08-16T02:17:02Z',
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the saved search.', example: 42 }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the saved search.', example: 'Craft beer' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the saved search was last updated.',
        example: '2015-08-16T02:17:02Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('SavedSearch')

const TimeZoneSchema = z
  .object({
    abbreviation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The abbreviation of the time zone.', example: 'NZDT' }),
    formatted_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The formatted name of the time zone.',
        example: '(GMT+13:00) Auckland',
      }),
    formatted_offset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The formatted offset of the time zone.', example: '+13:00' }),
    identifier: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The tz database name of the time zone.',
        example: 'Pacific/Auckland',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the time zone.', example: 'Auckland' }),
    utc_offset: z
      .int()
      .exactOptional()
      .openapi({ description: "The time zone's UTC offset in seconds.", example: 46800 }),
  })
  .openapi({ required: [] })
  .openapi('TimeZone')

const TransactionSchema = z
  .object({
    amount: z.number().exactOptional().openapi({ example: 34.6 }),
    amount_in_base_currency: z
      .number()
      .exactOptional()
      .openapi({
        description: "The amount of the transaction in the user's base currency.",
        example: 51.9,
      }),
    category: CategorySchema.exactOptional(),
    cheque_number: z.string().exactOptional().openapi({ example: '503113643691' }),
    closing_balance: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The closing balance of the account at the transaction.',
        example: 4312.32,
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the transaction was created.',
        example: '2018-02-27T22:42:22Z',
      }),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the transaction took place.', example: '2018-02-27' }),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the transaction.', example: 42 }),
    is_transfer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the transaction is a transfer.', example: false }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['foo', 'bar', 'baz'] }),
    memo: z.string().exactOptional().openapi({ example: 'An example memo' }),
    needs_review: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the transaction needs to be reviewed.', example: true }),
    note: z.string().exactOptional().openapi({ example: 'I spent way too much on cheese here' }),
    original_payee: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payee the transaction was created with.',
        example: 'CARD4083ST MARTINS NEW WORLD CHRISTCHURCH',
      }),
    payee: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payee/merchant of the transaction.',
        example: 'St Martins New World',
      }),
    status: z
      .enum(['pending', 'posted'])
      .exactOptional()
      .openapi({
        description:
          'The status of the transaction. Pending transactions are temporary and may be superseded later by their posted counterparts, which are permanent.',
      }),
    transaction_account: TransactionAccountSchema.exactOptional(),
    type: z
      .enum(['debit', 'credit'])
      .exactOptional()
      .openapi({
        description: 'Whether the transaction is a debit or a credit',
        example: 'credit',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the transaction was last updated.',
        example: '2018-02-27T22:42:22Z',
      }),
    upload_source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Where the transaction came from.', example: 'file' }),
  })
  .openapi({ required: [] })
  .openapi('Transaction')

const UserSchema = z
  .object({
    always_show_base_currency: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user wants to see all accounts in their base currency instead of the native account currency.',
        example: false,
      }),
    available_accounts: z
      .int()
      .exactOptional()
      .openapi({ description: "The user's total number of available accounts.", example: 3 }),
    available_budgets: z
      .int()
      .exactOptional()
      .openapi({ description: "The user's total number of available budgets.", example: 3 }),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "The URL to the user's avatar.",
        example: 'https://image.com/image.png',
      }),
    base_currency_code: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's base currency.", example: 'NZD' }),
    beta_user: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user has opted in to beta features.', example: true }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the user signed up.', example: '2015-07-02T22:14:49Z' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's email address.", example: 'user69@sample.com' }),
    forecast_defer_recalculate: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether the user's forecast recalculation should be deferred.",
        example: false,
      }),
    forecast_end_date: z
      .string()
      .exactOptional()
      .openapi({ description: "The date that the user's forecast ends.", example: '2015-07-15' }),
    forecast_last_accessed_at: z
      .string()
      .exactOptional()
      .openapi({
        description: "When the user's forecast was last accessed.",
        example: '2015-07-02T22:14:49Z',
      }),
    forecast_last_updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: "When the user's forecast was last updated.",
        example: '2015-07-02T22:14:49Z',
      }),
    forecast_needs_recalculate: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether the user's forecast needs to be recalculated.",
        example: true,
      }),
    forecast_start_date: z
      .string()
      .exactOptional()
      .openapi({ description: "The date that the user's forecast starts.", example: '2015-07-01' }),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the user.', example: 42 }),
    is_reviewing_transactions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user wants to review new transactions, transfer transactions or categorisation.',
        example: true,
      }),
    last_activity_at: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the user last interacted with PocketSmith, via any application or the API.',
        example: '2015-07-02T22:14:49Z',
      }),
    last_logged_in_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the user last logged into PocketSmith.',
        example: '2015-07-02T22:14:49Z',
      }),
    login: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's username.", example: 'sampleuser69' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The full name of the user, although not all users will have a name set.',
        example: 'Foo Barrington',
      }),
    time_zone: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's time zone.", example: 'Auckland' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the user was last updated.', example: '2015-07-02T22:14:49Z' }),
    using_multiple_currencies: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the user has multiple currencies in use across their account.',
        example: true,
      }),
    week_start_day: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday.',
        example: 1,
      }),
  })
  .openapi({ required: [] })
  .openapi('User')

const _400Response = {
  description: 'Bad Request',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _403Response = {
  description: 'Not Allowed',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _404Response = {
  description: 'Not Found',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _409Response = {
  description: 'Conflict',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _422Response = {
  description: 'Validation Error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const EventIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The unique identifier of the event.',
      example: '42-1601942400',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ScenarioIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'The unique identifier of the scenario.',
      example: 42,
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const UserIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'The unique identifier of the user.',
      example: 42,
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const DeveloperKeySecurityScheme = {
  description:
    'If you want to build a tool just for yourself, be it a desktop widget to display your balances or a tool to import transactions from a bank without a bank feed, you can use our developer keys feature. You can issue yourself a key which will give you persistent API access to just your account. You should rotate your keys regularly.',
  in: 'header',
  name: 'X-Developer-Key',
  type: 'apiKey',
}

const Oauth2SecurityScheme = {
  description:
    "If you want to a create an app for PocketSmith that other PocketSmith users can use, you'll be using OAuth 2. To register an app with PocketSmith, please email us on api@pocketsmith.com. Let us know a bit about yourself and what you plan on building. When approved, you will be provided with your client_id and client_secret to start using OAuth. Then, check out our guide for integrating OAuth to get started.",
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://my.pocketsmith.com/oauth/authorize',
      scopes: {
        'accounts.read': 'Access to list and view transaction accounts',
        'accounts.write': 'Access to update and delete transaction accounts',
        'attachments.read': 'Access to view attachments',
        'attachments.write': 'Ability to create, update and delete attachments',
        'categories.read': 'Access to view categories',
        'categories.write': 'Ability to edit and delete categories',
        'events.read': 'Access to view events',
        'events.write': 'Ability to create, update and delete events',
        'transactions.read': 'Access to list and view accounts and transactions',
        'transactions.write': 'Access to create, update and delete transactions',
        'user.read': "Access the user's details and preferences",
        'user.write': "Access to change the user's details and preferences",
      },
      tokenUrl: 'https://api.pocketsmith.com/v2/oauth/access_token',
    },
  },
  type: 'oauth2',
}

export const getAccountsIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{id}',
  tags: ['Accounts'],
  summary: 'Get account',
  description: 'Gets an account by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AccountSchema } } },
    403: _403Response,
    404: _404Response,
  },
})

export const putAccountsIdRoute = createRoute({
  method: 'put',
  path: '/accounts/{id}',
  tags: ['Accounts'],
  summary: 'Update account',
  description: 'Updates and returns an account by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currency_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new currency code for the account.', example: 'NZD' }),
              is_net_worth: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the account is a net worth account.',
                  example: false,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new title for the account.', example: 'Savings' }),
              type: z
                .enum([
                  'bank',
                  'credits',
                  'cash',
                  'loans',
                  'mortgage',
                  'stocks',
                  'vehicle',
                  'property',
                  'insurance',
                  'other_asset',
                  'other_liability',
                ])
                .exactOptional()
                .openapi({ description: 'The type of the account.', example: 'bank' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AccountSchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const deleteAccountsIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{id}',
  tags: ['Accounts'],
  summary: 'Delete account',
  description:
    'Deletes an account and all its data by ID, optionally merge scenarios into another account.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getAccountsIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/accounts/{id}/transactions',
  tags: ['Transactions'],
  summary: 'List transactions in account',
  description: 'Lists transactions belonging to an account by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.",
            example: '2016-11-01',
            in: 'query',
            name: 'start_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.",
            example: '2016-11-30',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      updated_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions updated since an ISO 8601 timestamp.',
            example: '2020-10-14T09:20:33+13:00',
            in: 'query',
            name: 'updated_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      uncategorised: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to uncategorised transactions.',
            example: 1,
            in: 'query',
            name: 'uncategorised',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      type: z
        .enum(['debit', 'credit'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions of this type.',
            example: 'debit',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['debit', 'credit'], type: 'string' },
          },
        }),
      needs_review: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions that need to be reviewed.',
            example: 1,
            in: 'query',
            name: 'needs_review',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.',
            example: 'Paypal',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Choose a particular page of the results.',
            example: 3,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(TransactionSchema) } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
})

export const getAttachmentsIdRoute = createRoute({
  method: 'get',
  path: '/attachments/{id}',
  tags: ['Attachments'],
  summary: 'Get attachment',
  description: 'Gets a particular attachment by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the attachment.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AttachmentSchema } } },
    403: _403Response,
    404: _404Response,
  },
})

export const putAttachmentsIdRoute = createRoute({
  method: 'put',
  path: '/attachments/{id}',
  tags: ['Attachments'],
  summary: 'Update attachment',
  description: 'Updates the title of the attachment.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the attachment.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The new title of the attachment. If the title is blank or not provided, the server will derive a title from the file name.',
                  example: 'Invoice for taxi',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AttachmentSchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const deleteAttachmentsIdRoute = createRoute({
  method: 'delete',
  path: '/attachments/{id}',
  tags: ['Attachments'],
  summary: 'Delete attachment',
  description: 'Deletes a particular attachment by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the attachment.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 403: _403Response, 404: _404Response },
})

export const getCategoriesIdRoute = createRoute({
  method: 'get',
  path: '/categories/{id}',
  tags: ['Categories'],
  summary: 'Get category',
  description: 'Gets a particular category by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the category.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CategorySchema } } },
    403: _403Response,
    404: _404Response,
  },
})

export const putCategoriesIdRoute = createRoute({
  method: 'put',
  path: '/categories/{id}',
  tags: ['Categories'],
  summary: 'Update category',
  description: 'Updates a category by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the category.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              colour: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A new CSS-style hex colour for the category.',
                  example: '#e0e7ff',
                }),
              is_bill: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set the category as a bill category.', example: true }),
              is_transfer: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Set the category as a transfer category.',
                  example: false,
                }),
              parent_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The unique identifier of a parent category for the category, making this category a child of that category.',
                  example: 42,
                }),
              refund_behaviour: z
                .union([
                  z.literal('debits_are_deductions'),
                  z.literal('credits_are_refunds'),
                  z.literal(null),
                ])
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Set the refund behaviour of the category.',
                  example: 'credits_are_refunds',
                }),
              roll_up: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Set the category to be rolled up into its parent category.',
                  example: false,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new title for the category.', example: 'Food' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CategorySchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const deleteCategoriesIdRoute = createRoute({
  method: 'delete',
  path: '/categories/{id}',
  tags: ['Categories'],
  summary: 'Delete category',
  description:
    'Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the category.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 403: _403Response, 404: _404Response },
})

export const postCategoriesIdCategoryRulesRoute = createRoute({
  method: 'post',
  path: '/categories/{id}/category_rules',
  tags: ['Category Rules'],
  summary: 'Create category rule in category',
  description: 'Creates a rule to allocate a category to transactions.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the category.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apply_to_all: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Apply the created category rule to all transactions.',
                  example: false,
                }),
              apply_to_uncategorised: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Apply the created category rule to all uncategorised transactions.',
                  example: true,
                }),
              payee_matches: z
                .string()
                .openapi({
                  description: 'The keyword/s to match the transaction payees.',
                  example: 'Countdown',
                }),
            })
            .openapi({ required: ['category_id', 'payee_matches'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CategoryRuleSchema } },
    },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getCategoriesIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/categories/{id}/transactions',
  tags: ['Transactions'],
  summary: 'List transactions in categories',
  description: 'Lists transactions belonging to one or more categories by their IDs.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'A comma-separated list of category IDs.',
            example: '42,43',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.",
            example: '2016-11-01',
            in: 'query',
            name: 'start_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.",
            example: '2016-11-30',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      updated_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions updated since an ISO 8601 timestamp.',
            example: '2020-10-14T09:20:33+13:00',
            in: 'query',
            name: 'updated_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      uncategorised: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to uncategorised transactions.',
            example: 1,
            in: 'query',
            name: 'uncategorised',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      type: z
        .enum(['debit', 'credit'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions of this type.',
            example: 'debit',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['debit', 'credit'], type: 'string' },
          },
        }),
      needs_review: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions that need to be reviewed.',
            example: 1,
            in: 'query',
            name: 'needs_review',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.',
            example: 'Paypal',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Choose a particular page of the results.',
            example: 3,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(TransactionSchema) } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
})

export const getCurrenciesRoute = createRoute({
  method: 'get',
  path: '/currencies',
  tags: ['Currencies'],
  summary: 'List currencies',
  description: 'Lists currencies supported by PocketSmith.',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CurrencySchema) } },
    },
  },
})

export const getCurrenciesIdRoute = createRoute({
  method: 'get',
  path: '/currencies/{id}',
  tags: ['Currencies'],
  summary: 'Get currency',
  description: 'Gets a particular currency by its ID.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the currency.',
            example: 'nzd',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CurrencySchema } } },
    404: _404Response,
  },
})

export const getEventsIdRoute = createRoute({
  method: 'get',
  path: '/events/{id}',
  tags: ['Events'],
  summary: 'Get event',
  description: 'Gets a particular event by its ID.',
  request: { params: z.object({ id: EventIdParamsSchema }) },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: EventSchema } } },
    403: _403Response,
    404: _404Response,
  },
})

export const putEventsIdRoute = createRoute({
  method: 'put',
  path: '/events/{id}',
  tags: ['Events'],
  summary: 'Update event',
  description: 'Updates an event by its ID.',
  request: {
    params: z.object({ id: EventIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              amount: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The amount of the event. A positive amount is a credit, and a negative amount is a debit.',
                  example: 11.5,
                }),
              behaviour: z
                .enum(['one', 'forward', 'all'])
                .openapi({
                  description:
                    'Whether the update applies only to this event, to all events within the series from this event or to all events within the series.',
                  example: 'all',
                }),
              note: z
                .string()
                .exactOptional()
                .openapi({ description: 'A note for the event.', example: 'Need more beer.' }),
              repeat_interval: z
                .int()
                .exactOptional()
                .openapi({ description: 'The repeat interval of the event.', example: 1 }),
              repeat_type: z
                .enum([
                  'once',
                  'daily',
                  'weekly',
                  'fortnightly',
                  'monthly',
                  'yearly',
                  'each weekday',
                ])
                .exactOptional()
                .openapi({ description: 'The repeat type of the event.', example: 'weekly' }),
            })
            .openapi({ required: ['behaviour'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: EventSchema } } },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    409: _409Response,
    422: _422Response,
  },
})

export const deleteEventsIdRoute = createRoute({
  method: 'delete',
  path: '/events/{id}',
  tags: ['Events'],
  summary: 'Delete event',
  description: 'Deletes an event by its ID.',
  request: {
    params: z.object({ id: EventIdParamsSchema }),
    query: z.object({
      behaviour: z
        .enum(['one', 'forward', 'all'])
        .openapi({
          param: {
            description:
              'Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.',
            in: 'query',
            name: 'behaviour',
            required: true,
            schema: { enum: ['one', 'forward', 'all'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    409: _409Response,
  },
})

export const getInstitutionsIdRoute = createRoute({
  method: 'get',
  path: '/institutions/{id}',
  tags: ['Institutions'],
  summary: 'Get institution',
  description: 'Gets an institution by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the institution.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: InstitutionSchema } } },
    403: _403Response,
    404: _404Response,
  },
})

export const putInstitutionsIdRoute = createRoute({
  method: 'put',
  path: '/institutions/{id}',
  tags: ['Institutions'],
  summary: 'Update institution',
  description: 'Updates the title and currency code for an institution.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the institution.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currency_code: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A new currency code for the institution.',
                  example: 'NZD',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A new title for the institution.',
                  example: 'Bank of Foo',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: InstitutionSchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const deleteInstitutionsIdRoute = createRoute({
  method: 'delete',
  path: '/institutions/{id}',
  tags: ['Institutions'],
  summary: 'Delete institution',
  description:
    'Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the institution.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      merge_into_institution_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique identifier of the institution to merge into.',
            example: 44,
            in: 'query',
            name: 'merge_into_institution_id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getInstitutionsIdAccountsRoute = createRoute({
  method: 'get',
  path: '/institutions/{id}/accounts',
  tags: ['Accounts'],
  summary: 'List accounts in institution',
  description: 'Lists accounts belonging to an institution by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the institution.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['Users'],
  summary: 'Get the authorised user',
  description: 'Gets the user that corresponds to the access token used in the request.',
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserSchema } } },
    403: _403Response,
  },
})

export const getScenariosIdEventsRoute = createRoute({
  method: 'get',
  path: '/scenarios/{id}/events',
  tags: ['Events'],
  summary: 'List events in scenario.',
  description: 'Lists events belonging to a scenario by their ID.',
  request: {
    params: z.object({ id: ScenarioIdParamsSchema }),
    query: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Return the events from and including this date.',
            example: '2020-10-01',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .openapi({
          param: {
            description: 'Return the events until and including this date.',
            example: '2020-10-30',
            in: 'query',
            name: 'end_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(EventSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const postScenariosIdEventsRoute = createRoute({
  method: 'post',
  path: '/scenarios/{id}/events',
  tags: ['Events'],
  summary: 'Create event in scenario',
  description: 'Creates an event in a scenario by its ID.',
  request: {
    params: z.object({ id: ScenarioIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              amount: z
                .number()
                .openapi({
                  description:
                    'The amount of the event. A positive amount is a credit, and a negative amount is a debit.',
                  example: 11.5,
                }),
              category_id: z
                .int()
                .openapi({
                  description: 'The unique identifier of the category for the event.',
                  example: 42,
                }),
              date: z
                .string()
                .openapi({ description: 'The starting date of the event.', example: '2020-10-27' }),
              note: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A note for the event.',
                  example: 'New beers for sampling over the weekends.',
                }),
              repeat_interval: z
                .int()
                .default(1)
                .exactOptional()
                .openapi({ description: 'The repeat interval of the event.', example: 1 }),
              repeat_type: z
                .enum([
                  'once',
                  'daily',
                  'weekly',
                  'fortnightly',
                  'monthly',
                  'yearly',
                  'each weekday',
                ])
                .openapi({ description: 'The repeat type of the event.', example: 'weekly' }),
            })
            .openapi({ required: ['category_id', 'date', 'amount', 'repeat_type'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: EventSchema } } },
    403: _403Response,
    404: _404Response,
    409: _409Response,
    422: _422Response,
  },
})

export const getTimeZonesRoute = createRoute({
  method: 'get',
  path: '/time_zones',
  tags: ['Time Zones'],
  summary: 'List time zones',
  description: 'Lists time zones.',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(TimeZoneSchema) } },
    },
  },
})

export const getTransactionAccountsIdRoute = createRoute({
  method: 'get',
  path: '/transaction_accounts/{id}',
  tags: ['Transaction Accounts'],
  summary: 'Get transaction account',
  description: 'Gets a transaction account by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TransactionAccountSchema } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const putTransactionAccountsIdRoute = createRoute({
  method: 'put',
  path: '/transaction_accounts/{id}',
  tags: ['Transaction Accounts'],
  summary: 'Update transaction account',
  description: 'Updates the transaction account by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              institution_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The unique identifier of a new institution for the transaction account.',
                  example: 42,
                }),
              starting_balance: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The starting balance amount of the transaction account.',
                  example: 3547.45,
                }),
              starting_balance_date: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The starting balance date of the transaction account.',
                  example: '2015-03-15',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TransactionAccountSchema } },
    },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getTransactionAccountsIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/transaction_accounts/{id}/transactions',
  tags: ['Transactions'],
  summary: 'List transactions in transaction account',
  description: 'Lists transactions belonging to a transaction account by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.",
            example: '2016-11-01',
            in: 'query',
            name: 'start_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.",
            example: '2016-11-30',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      updated_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions updated since an ISO 8601 timestamp.',
            example: '2020-10-14T09:20:33+13:00',
            in: 'query',
            name: 'updated_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      uncategorised: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to uncategorised transactions.',
            example: 1,
            in: 'query',
            name: 'uncategorised',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      type: z
        .enum(['debit', 'credit'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions of this type.',
            example: 'debit',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['debit', 'credit'], type: 'string' },
          },
        }),
      needs_review: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions that need to be reviewed.',
            example: 1,
            in: 'query',
            name: 'needs_review',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.',
            example: 'Paypal',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Choose a particular page of the results.',
            example: 3,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(TransactionSchema) } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
})

export const postTransactionAccountsIdTransactionsRoute = createRoute({
  method: 'post',
  path: '/transaction_accounts/{id}/transactions',
  tags: ['Transactions'],
  summary: 'Create a transaction in transaction account',
  description: 'Creates a transaction in a transaction account by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              amount: z
                .number()
                .openapi({
                  description:
                    'The amount of the transaction. A positive amount is a credit, and a negative amount is a debit.',
                  example: 11.5,
                }),
              category_id: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier of a category for the transaction.',
                  example: 42,
                }),
              cheque_number: z
                .string()
                .exactOptional()
                .openapi({ description: 'A cheque number for the transaction.' }),
              date: z
                .string()
                .openapi({
                  description: 'The date when the transaction occurred.',
                  example: '2018-02-27',
                }),
              is_transfer: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the transaction should be indicated as a transfer.',
                  example: false,
                }),
              labels: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A set of comma-separated labels for the transaction.',
                  example: 'lunch,mexican',
                }),
              memo: z
                .string()
                .exactOptional()
                .openapi({ description: 'A memo for the transaction.' }),
              needs_review: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the transaction needs to be reviewed or not.',
                  example: false,
                }),
              note: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A note for the transaction.',
                  example: 'I really enjoyed the loaded corn chips',
                }),
              payee: z
                .string()
                .openapi({
                  description: 'The payee/merchant of the transaction.',
                  example: 'Tex Otago',
                }),
            })
            .openapi({ required: ['payee', 'amount', 'date'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: TransactionSchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getTransactionsIdRoute = createRoute({
  method: 'get',
  path: '/transactions/{id}',
  tags: ['Transactions'],
  summary: 'Get a transaction',
  description: 'Gets a transaction by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TransactionSchema } } },
    403: _403Response,
    404: _404Response,
  },
})

export const putTransactionsIdRoute = createRoute({
  method: 'put',
  path: '/transactions/{id}',
  tags: ['Transactions'],
  summary: 'Update a transaction',
  description: 'Updates a transaction by its ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              amount: z
                .number()
                .exactOptional()
                .openapi({ description: 'A new amount for the transaction.', example: 225 }),
              category_id: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier of a new category for the transaction.',
                  example: 42,
                }),
              cheque_number: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A new cheque number for the transaction.',
                  example: '503113643691',
                }),
              date: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new date for the transaction.', example: '2018-02-27' }),
              is_transfer: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the transaction is a transfer or not.',
                  example: false,
                }),
              labels: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A new comma-separated set of labels for the transaction.',
                  example: 'foo,bar,baz',
                }),
              memo: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new memo for the transaction.', example: 'Rent' }),
              needs_review: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the transaction needs to be reviewed or not.',
                  example: false,
                }),
              note: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new note for the transaction.' }),
              payee: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new payee for the transaction.', example: 'Bill' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TransactionSchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const deleteTransactionsIdRoute = createRoute({
  method: 'delete',
  path: '/transactions/{id}',
  tags: ['Transactions'],
  summary: 'Delete transaction',
  description: 'Deletes a transaction and all its data by ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 403: _403Response, 404: _404Response },
})

export const getTransactionsIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/transactions/{id}/attachments',
  tags: ['Attachments'],
  summary: 'List attachments in transaction',
  description: 'Lists attachments belonging to a transaction by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AttachmentSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const postTransactionsIdAttachmentsRoute = createRoute({
  method: 'post',
  path: '/transactions/{id}/attachments',
  tags: ['Attachments'],
  summary: 'Assigns attachment to transaction',
  description: 'Assigns an attachment to the transaction by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attachment_id: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier of the attachment.',
                  example: 1438154,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: AttachmentSchema } } },
    403: _403Response,
    404: _404Response,
  },
})

export const deleteTransactionsTransactionIdAttachmentsAttachmentIdRoute = createRoute({
  method: 'delete',
  path: '/transactions/{transaction_id}/attachments/{attachment_id}',
  tags: ['Attachments'],
  summary: 'Unassigns attachment in transaction',
  description:
    'Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.',
  request: {
    params: z.object({
      transaction_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the transaction.',
            example: 42,
            in: 'path',
            name: 'transaction_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      attachment_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the attachment.',
            example: 1438154,
            in: 'path',
            name: 'attachment_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 403: _403Response, 404: _404Response },
})

export const getUsersIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Get user',
  description:
    'Gets a user by ID. You must be authorised as the target user in order to make this request.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserSchema } } },
    403: _403Response,
    404: _404Response,
  },
})

export const putUsersIdRoute = createRoute({
  method: 'put',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Update user',
  description:
    'Updates the user by their ID. You must be authorised as the target user in order to make this request.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              always_show_base_currency: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the user wishes to have all monetary values converted to their base currency.',
                  example: true,
                }),
              base_currency_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new base currency code for the user.', example: 'nzd' }),
              beta_user: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the user is a beta user, and wishes to try out new features.',
                  example: true,
                }),
              email: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A new email address for the user.',
                  example: 'foo@bar.com',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new name for the user.', example: 'John Appleseed' }),
              time_zone: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new time zone for the user.', example: 'Auckland' }),
              week_start_day: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday.',
                  example: 1,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserSchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getUsersIdAccountsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/accounts',
  tags: ['Accounts'],
  summary: 'List accounts in user',
  description: 'Lists all accounts belonging to the user by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const putUsersIdAccountsRoute = createRoute({
  method: 'put',
  path: '/users/{id}/accounts',
  tags: ['Accounts'],
  summary: 'Update the display order of accounts in user',
  description:
    'Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accounts: z
                .array(AccountSchema)
                .openapi({ description: 'List the account objects in their new display order.' }),
            })
            .openapi({ required: ['accounts'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
})

export const postUsersIdAccountsRoute = createRoute({
  method: 'post',
  path: '/users/{id}/accounts',
  tags: ['Accounts'],
  summary: 'Create an account in user',
  description: 'Creates and returns an account belonging to the user by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currency_code: z
                .string()
                .openapi({ description: 'A currency code for the account.', example: 'NZD' }),
              institution_id: z
                .int()
                .openapi({
                  description: 'The ID of the institution to create this account in.',
                  example: 42,
                }),
              title: z
                .string()
                .openapi({ description: 'A title for the account.', example: 'Foo' }),
              type: z
                .enum([
                  'bank',
                  'credits',
                  'cash',
                  'loans',
                  'mortgage',
                  'stocks',
                  'vehicle',
                  'property',
                  'insurance',
                  'other_asset',
                  'other_liability',
                ])
                .openapi({ description: 'The type of the account.', example: 'bank' }),
            })
            .openapi({ required: ['institution_id', 'title', 'currency_code', 'type'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: AccountSchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getUsersIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/attachments',
  tags: ['Attachments'],
  summary: 'Lists attachments in user',
  description: 'Lists attachments belonging to a user by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      unassigned: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, returns unassigned attachments, that are available for assigning to a transaction.',
            example: 1,
            in: 'query',
            name: 'unassigned',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AttachmentSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const postUsersIdAttachmentsRoute = createRoute({
  method: 'post',
  path: '/users/{id}/attachments',
  tags: ['Attachments'],
  summary: 'Create attachment in user',
  description: 'Creates an attachment belonging to the user by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              file_data: z
                .base64()
                .exactOptional()
                .openapi({
                  description:
                    'The base64-encoded contents of the source file. The supported file types are png, jpg, pdf, xls, xlsx, doc, docx.',
                }),
              file_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The file name of the attachment.', example: 'taxi.png' }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The title of the attachment. If the title is blank or not provided, the title will derived from the file name.',
                  example: 'Invoice for taxi',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AttachmentSchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getUsersIdBudgetRoute = createRoute({
  method: 'get',
  path: '/users/{id}/budget',
  tags: ['Budgeting'],
  summary: 'List budget for user',
  description:
    "Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.",
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      roll_up: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether parent categories should have their children rolled up into them. When used, the children will still appear in the collection on their own, but their actual and forecast figures will be rolled up to the root parent.',
            example: true,
            in: 'query',
            name: 'roll_up',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BudgetAnalysisPackageSchema) } },
    },
  },
})

export const getUsersIdBudgetSummaryRoute = createRoute({
  method: 'get',
  path: '/users/{id}/budget_summary',
  tags: ['Budgeting'],
  summary: 'Get budget summary for user',
  description:
    "Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.",
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      period: z
        .enum(['weeks', 'months', 'years', 'event'])
        .openapi({
          param: {
            description:
              "The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.",
            example: 'weeks',
            in: 'query',
            name: 'period',
            required: true,
            schema: { enum: ['weeks', 'months', 'years', 'event'], type: 'string' },
          },
        }),
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.',
            example: 2,
            in: 'query',
            name: 'interval',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      start_date: z
        .string()
        .openapi({
          param: {
            description:
              'The date to start analysing the budget from. This will be bumped out to make full periods as necessary.',
            example: '2016-11-01',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .openapi({
          param: {
            description:
              'The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.',
            example: '2016-11-30',
            in: 'query',
            name: 'end_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BudgetAnalysisPackageSchema) } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
})

export const getUsersIdCategoriesRoute = createRoute({
  method: 'get',
  path: '/users/{id}/categories',
  tags: ['Categories'],
  summary: 'List categories in user',
  description: 'Lists all categories belonging to a user by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CategorySchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const postUsersIdCategoriesRoute = createRoute({
  method: 'post',
  path: '/users/{id}/categories',
  tags: ['Categories'],
  summary: 'Create category in user',
  description: 'Creates a category belonging to the user by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              colour: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A CSS-style hex colour for the category.',
                  example: '#e0e7ff',
                }),
              is_bill: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set the category as a bill category.', example: true }),
              is_transfer: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Set the category as a transfer category.',
                  example: false,
                }),
              parent_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The unique identifier of a category to be the parent of this category.',
                  example: 42,
                }),
              refund_behaviour: z
                .union([
                  z.literal('debits_are_deductions'),
                  z.literal('credits_are_refunds'),
                  z.literal(null),
                ])
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Set the refund behaviour of the category.',
                  example: 'credits_are_refunds',
                }),
              roll_up: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Set the category to be rolled up into its parent category.',
                  example: false,
                }),
              title: z
                .string()
                .openapi({ description: 'A title for the category.', example: 'Food' }),
            })
            .openapi({ required: ['title'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: CategorySchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getUsersIdCategoryRulesRoute = createRoute({
  method: 'get',
  path: '/users/{id}/category_rules',
  tags: ['Category Rules'],
  summary: 'List category rules in user',
  description: 'Lists all category rules belonging to a user by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CategoryRuleSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const getUsersIdEventsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/events',
  tags: ['Events'],
  summary: 'List events in user.',
  description: 'Lists events belonging to a user by their ID.',
  request: {
    params: z.object({ id: UserIdParamsSchema }),
    query: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Return the events from and including this date.',
            example: '2020-10-01',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .openapi({
          param: {
            description: 'Return the events until and including this date.',
            example: '2020-10-30',
            in: 'query',
            name: 'end_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(EventSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const deleteUsersIdForecastCacheRoute = createRoute({
  method: 'delete',
  path: '/users/{id}/forecast_cache',
  tags: ['Budgeting'],
  summary: 'Delete forecast cache for user',
  description: "Delete the user's cached forecast by recalculating the forecast.",
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 403: _403Response, 404: _404Response },
})

export const getUsersIdInstitutionsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/institutions',
  tags: ['Institutions'],
  summary: 'List institutions in user',
  description: 'Lists all the institutions belonging to the user.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(InstitutionSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const postUsersIdInstitutionsRoute = createRoute({
  method: 'post',
  path: '/users/{id}/institutions',
  tags: ['Institutions'],
  summary: 'Create institution in user',
  description: 'Creates an institution belonging to a user.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currency_code: z
                .string()
                .openapi({ description: 'A currency code for the institution.', example: 'NZD' }),
              title: z
                .string()
                .openapi({ description: 'A title for the institution.', example: 'Bank of Foo' }),
            })
            .openapi({ required: ['title', 'currency_code'] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: InstitutionSchema } } },
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})

export const getUsersIdLabelsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/labels',
  tags: ['Labels'],
  summary: 'List labels in user',
  description: 'Lists labels belonging to a user by their ID.',
  request: { params: z.object({ id: UserIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(z.string()),
          example: ['craftbeer', 'bargains', 'gaming', 'Trip to Auckland'],
        },
      },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const getUsersIdSavedSearchesRoute = createRoute({
  method: 'get',
  path: '/users/{id}/saved_searches',
  tags: ['Saved Searches'],
  summary: 'List saved searches in user',
  description: 'Lists saved searches belonging to a user by their ID.',
  request: { params: z.object({ id: UserIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SavedSearchSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const getUsersIdTransactionAccountsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/transaction_accounts',
  tags: ['Transaction Accounts'],
  summary: 'List transaction accounts in user',
  description: 'List all transaction accounts belonging to a user.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(TransactionAccountSchema) } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const getUsersIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/transactions',
  tags: ['Transactions'],
  summary: 'List transactions in user',
  description: 'Lists transactions belonging to a user by their ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the account.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.",
            example: '2016-11-01',
            in: 'query',
            name: 'start_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.",
            example: '2016-11-30',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      updated_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions updated since an ISO 8601 timestamp.',
            example: '2020-10-14T09:20:33+13:00',
            in: 'query',
            name: 'updated_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      uncategorised: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to uncategorised transactions.',
            example: 1,
            in: 'query',
            name: 'uncategorised',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      type: z
        .enum(['debit', 'credit'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions of this type.',
            example: 'debit',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['debit', 'credit'], type: 'string' },
          },
        }),
      needs_review: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to transactions that need to be reviewed.',
            example: 1,
            in: 'query',
            name: 'needs_review',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.',
            example: 'Paypal',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Choose a particular page of the results.',
            example: 3,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(TransactionSchema) } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
})

export const getUsersIdTrendAnalysisRoute = createRoute({
  method: 'get',
  path: '/users/{id}/trend_analysis',
  tags: ['Budgeting'],
  summary: 'Get trend analysis for user',
  description:
    'Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique identifier of the user.',
            example: 42,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      period: z
        .enum(['weeks', 'months', 'years', 'event'])
        .openapi({
          param: {
            description:
              "The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.",
            example: 'weeks',
            in: 'query',
            name: 'period',
            required: true,
            schema: { enum: ['weeks', 'months', 'years', 'event'], type: 'string' },
          },
        }),
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.',
            example: true,
            in: 'query',
            name: 'interval',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      start_date: z
        .string()
        .openapi({
          param: {
            description:
              'The date to start analysing the budget from. This will be bumped out to make full periods as necessary.',
            example: '2016-11-01',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .openapi({
          param: {
            description:
              'The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.',
            example: '2016-11-30',
            in: 'query',
            name: 'end_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      categories: z
        .string()
        .openapi({
          param: {
            description: 'A comma-separated list of category IDs to analyse.',
            example: '42,49',
            in: 'query',
            name: 'categories',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scenarios: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of scenario IDs to analyse. You're likely going to want to include all a user's scenarios here, unless you have reason to only analyse for a subset of scenarios. Regardless of what scenarios are analysed, all actuals (transactions) across all accounts will be included.",
            example: '11,29',
            in: 'query',
            name: 'scenarios',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BudgetAnalysisPackageSchema) } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
})
