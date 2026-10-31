import { createRoute, z } from '@hono/zod-openapi'

const LoanAccountPeriodicValueSchema = z
  .record(
    z.string(),
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  )
  .openapi('LoanAccountPeriodicValue')

const AccountTypeSchema = z
  .enum([
    'checking',
    'savings',
    'cash',
    'creditCard',
    'lineOfCredit',
    'otherAsset',
    'otherLiability',
    'mortgage',
    'autoLoan',
    'studentLoan',
    'personalLoan',
    'medicalDebt',
    'otherDebt',
  ])
  .openapi({ description: 'The type of account' })
  .openapi('AccountType')

const AccountSchema = z
  .object({
    balance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The current balance of the account in milliunits format',
      }),
    cleared_balance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The current cleared balance of the account in milliunits format',
      }),
    closed: z.boolean().openapi({ description: 'Whether this account is closed or not' }),
    debt_escrow_amounts: LoanAccountPeriodicValueSchema.exactOptional(),
    debt_interest_rates: LoanAccountPeriodicValueSchema.exactOptional(),
    debt_minimum_payments: LoanAccountPeriodicValueSchema.exactOptional(),
    debt_original_balance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The original debt/loan account balance, specified in milliunits format.',
      }),
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests.',
      }),
    direct_import_in_error: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If an account linked to a financial institution (direct_import_linked=true) and the linked connection is not in a healthy state, this will be true.',
      }),
    direct_import_linked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the account is linked to a financial institution for automatic transaction import.',
      }),
    id: z.uuid(),
    last_reconciled_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'A date/time specifying when the account was last reconciled.' }),
    name: z.string(),
    note: z.string().exactOptional(),
    on_budget: z.boolean().openapi({ description: 'Whether this account is on budget or not' }),
    transfer_payee_id: z
      .uuid()
      .openapi({
        description: 'The payee id which should be used when transferring to this account',
      }),
    type: AccountTypeSchema,
    uncleared_balance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The current uncleared balance of the account in milliunits format',
      }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'type',
      'on_budget',
      'closed',
      'balance',
      'cleared_balance',
      'uncleared_balance',
      'transfer_payee_id',
      'deleted',
    ],
  })
  .openapi('Account')

const AccountResponseSchema = z
  .object({ data: z.object({ account: AccountSchema }).openapi({ required: ['account'] }) })
  .openapi({ required: ['data'] })
  .openapi('AccountResponse')

const AccountsResponseSchema = z
  .object({
    data: z
      .object({
        accounts: z.array(AccountSchema),
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
      })
      .openapi({ required: ['accounts', 'server_knowledge'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('AccountsResponse')

const CurrencyFormatSchema = z
  .object({
    currency_symbol: z.string(),
    decimal_digits: z.int32(),
    decimal_separator: z.string(),
    display_symbol: z.boolean(),
    example_format: z.string(),
    group_separator: z.string(),
    iso_code: z.string(),
    symbol_first: z.boolean(),
  })
  .openapi({
    description:
      'The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.',
    required: [
      'iso_code',
      'example_format',
      'decimal_digits',
      'decimal_separator',
      'symbol_first',
      'group_separator',
      'currency_symbol',
      'display_symbol',
    ],
  })
  .openapi('CurrencyFormat')

const DateFormatSchema = z
  .object({ format: z.string() })
  .openapi({
    description:
      'The date format setting for the budget.  In some cases the format will not be available and will be specified as null.',
    required: ['format'],
  })
  .openapi('DateFormat')

const BudgetSummarySchema = z
  .object({
    accounts: z
      .array(AccountSchema)
      .exactOptional()
      .openapi({
        description:
          'The budget accounts (only included if `include_accounts=true` specified as query parameter)',
      }),
    currency_format: CurrencyFormatSchema.exactOptional(),
    date_format: DateFormatSchema.exactOptional(),
    first_month: z.iso.date().exactOptional().openapi({ description: 'The earliest budget month' }),
    id: z.uuid(),
    last_modified_on: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The last time any changes were made to the budget from either a web or mobile client',
      }),
    last_month: z.iso.date().exactOptional().openapi({ description: 'The latest budget month' }),
    name: z.string(),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('BudgetSummary')

const CategorySchema = z
  .object({
    activity: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Activity amount in milliunits format',
      }),
    balance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Balance in milliunits format' }),
    budgeted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Budgeted amount in milliunits format',
      }),
    category_group_id: z.uuid(),
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the category has been deleted.  Deleted categories will only be included in delta requests.',
      }),
    goal_cadence: z.int32().exactOptional().openapi({ description: 'The goal cadence' }),
    goal_cadence_frequency: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The goal cadence frequency' }),
    goal_creation_month: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The month a goal was created' }),
    goal_day: z.int32().exactOptional().openapi({ description: 'The day of the goal' }),
    goal_months_to_budget: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of months, including the current month, left in the current goal period.',
      }),
    goal_overall_funded: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The total amount funded towards the goal within the current goal period.',
      }),
    goal_overall_left: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The amount of funding still needed to complete the goal within the current goal period.',
      }),
    goal_percentage_complete: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The percentage completion of the goal' }),
    goal_target: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The goal target amount in milliunits',
      }),
    goal_target_month: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The original target month for the goal to be completed.  Only some goal types specify this date.',
      }),
    goal_type: z
      .union([
        z.literal('TB'),
        z.literal('TBD'),
        z.literal('MF'),
        z.literal('NEED'),
        z.literal('DEBT'),
        z.literal(null),
      ])
      .exactOptional()
      .openapi({
        description:
          "The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending')",
      }),
    goal_under_funded: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period.  This amount will generally correspond to the 'Underfunded' amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month.  The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month.",
      }),
    hidden: z.boolean().openapi({ description: 'Whether or not the category is hidden' }),
    id: z.uuid(),
    name: z.string(),
    note: z.string().exactOptional(),
    original_category_group_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'If category is hidden this is the id of the category group it originally belonged to before it was hidden.',
      }),
  })
  .openapi({
    required: [
      'id',
      'category_group_id',
      'name',
      'hidden',
      'budgeted',
      'activity',
      'balance',
      'deleted',
    ],
  })
  .openapi('Category')

const CategoryGroupSchema = z
  .object({
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.',
      }),
    hidden: z.boolean().openapi({ description: 'Whether or not the category group is hidden' }),
    id: z.uuid(),
    name: z.string(),
  })
  .openapi({ required: ['id', 'name', 'hidden', 'deleted'] })
  .openapi('CategoryGroup')

const MonthSummarySchema = z
  .object({
    activity: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'",
      }),
    age_of_money: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Age of Money as of the month' }),
    budgeted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The total amount budgeted in the month',
      }),
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the month has been deleted.  Deleted months will only be included in delta requests.',
      }),
    income: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month",
      }),
    month: z.iso.date(),
    note: z.string().exactOptional(),
    to_be_budgeted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: "The available amount for 'Ready to Assign'",
      }),
  })
  .openapi({ required: ['month', 'income', 'budgeted', 'activity', 'to_be_budgeted', 'deleted'] })
  .openapi('MonthSummary')

const MonthDetailSchema = MonthSummarySchema.and(
  z
    .object({
      categories: z
        .array(CategorySchema)
        .openapi({
          description:
            'The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified.',
        }),
    })
    .openapi({ required: ['categories'] }),
).openapi('MonthDetail')

const PayeeLocationSchema = z
  .object({
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests.',
      }),
    id: z.uuid(),
    latitude: z.string(),
    longitude: z.string(),
    payee_id: z.uuid(),
  })
  .openapi({ required: ['id', 'payee_id', 'latitude', 'longitude', 'deleted'] })
  .openapi('PayeeLocation')

const PayeeSchema = z
  .object({
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests.',
      }),
    id: z.uuid(),
    name: z.string(),
    transfer_account_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If a transfer payee, the `account_id` to which this payee transfers to',
      }),
  })
  .openapi({ required: ['id', 'name', 'deleted'] })
  .openapi('Payee')

const ScheduledSubTransactionSchema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The scheduled subtransaction amount in milliunits format',
      }),
    category_id: z.uuid().exactOptional(),
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the scheduled subtransaction has been deleted.  Deleted scheduled subtransactions will only be included in delta requests.',
      }),
    id: z.uuid(),
    memo: z.string().exactOptional(),
    payee_id: z.uuid().exactOptional(),
    scheduled_transaction_id: z.uuid(),
    transfer_account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'If a transfer, the account_id which the scheduled subtransaction transfers to',
      }),
  })
  .openapi({ required: ['id', 'scheduled_transaction_id', 'amount', 'deleted'] })
  .openapi('ScheduledSubTransaction')

const ScheduledTransactionSummarySchema = z
  .object({
    account_id: z.uuid(),
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The scheduled transaction amount in milliunits format',
      }),
    category_id: z.uuid().exactOptional(),
    date_first: z.iso
      .date()
      .openapi({
        description: 'The first date for which the Scheduled Transaction was scheduled.',
      }),
    date_next: z.iso
      .date()
      .openapi({ description: 'The next date for which the Scheduled Transaction is scheduled.' }),
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.',
      }),
    flag_color: z
      .union([
        z.literal('red'),
        z.literal('orange'),
        z.literal('yellow'),
        z.literal('green'),
        z.literal('blue'),
        z.literal('purple'),
        z.literal(null),
      ])
      .exactOptional()
      .openapi({ description: 'The scheduled transaction flag' }),
    frequency: z.enum([
      'never',
      'daily',
      'weekly',
      'everyOtherWeek',
      'twiceAMonth',
      'every4Weeks',
      'monthly',
      'everyOtherMonth',
      'every3Months',
      'every4Months',
      'twiceAYear',
      'yearly',
      'everyOtherYear',
    ]),
    id: z.uuid(),
    memo: z.string().exactOptional(),
    payee_id: z.uuid().exactOptional(),
    transfer_account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'If a transfer, the account_id which the scheduled transaction transfers to',
      }),
  })
  .openapi({
    required: ['id', 'date_first', 'date_next', 'frequency', 'amount', 'account_id', 'deleted'],
  })
  .openapi('ScheduledTransactionSummary')

const SubTransactionSchema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The subtransaction amount in milliunits format',
      }),
    category_id: z.uuid().exactOptional(),
    category_name: z.string().exactOptional(),
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the subtransaction has been deleted.  Deleted subtransactions will only be included in delta requests.',
      }),
    id: z.string(),
    memo: z.string().exactOptional(),
    payee_id: z.uuid().exactOptional(),
    payee_name: z.string().exactOptional(),
    transaction_id: z.string(),
    transfer_account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'If a transfer, the account_id which the subtransaction transfers to',
      }),
    transfer_transaction_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If a transfer, the id of transaction on the other side of the transfer',
      }),
  })
  .openapi({ required: ['id', 'transaction_id', 'amount', 'deleted'] })
  .openapi('SubTransaction')

const TransactionSummarySchema = z
  .object({
    account_id: z.uuid(),
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The transaction amount in milliunits format',
      }),
    approved: z.boolean().openapi({ description: 'Whether or not the transaction is approved' }),
    category_id: z.uuid().exactOptional(),
    cleared: z
      .enum(['cleared', 'uncleared', 'reconciled'])
      .openapi({ description: 'The cleared status of the transaction' }),
    date: z.iso
      .date()
      .openapi({ description: 'The transaction date in ISO format (e.g. 2016-12-01)' }),
    debt_transaction_type: z
      .union([
        z.literal('payment'),
        z.literal('refund'),
        z.literal('fee'),
        z.literal('interest'),
        z.literal('escrow'),
        z.literal('balancedAdjustment'),
        z.literal('credit'),
        z.literal('charge'),
        z.literal(null),
      ])
      .exactOptional()
      .openapi({
        description:
          'If the transaction is a debt/loan account transaction, the type of transaction',
      }),
    deleted: z
      .boolean()
      .openapi({
        description:
          'Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.',
      }),
    flag_color: z
      .union([
        z.literal('red'),
        z.literal('orange'),
        z.literal('yellow'),
        z.literal('green'),
        z.literal('blue'),
        z.literal('purple'),
        z.literal(null),
      ])
      .exactOptional()
      .openapi({ description: 'The transaction flag' }),
    id: z.string(),
    import_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.",
      }),
    import_payee_name: z
      .string()
      .max(200)
      .exactOptional()
      .openapi({
        description:
          'If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules',
      }),
    import_payee_name_original: z
      .string()
      .max(200)
      .exactOptional()
      .openapi({
        description:
          'If the transaction was imported, the original payee name as it appeared on the statement',
      }),
    matched_transaction_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'If transaction is matched, the id of the matched transaction' }),
    memo: z.string().exactOptional(),
    payee_id: z.uuid().exactOptional(),
    transfer_account_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'If a transfer transaction, the account to which it transfers' }),
    transfer_transaction_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If a transfer transaction, the id of transaction on the other side of the transfer',
      }),
  })
  .openapi({ required: ['id', 'date', 'amount', 'cleared', 'approved', 'account_id', 'deleted'] })
  .openapi('TransactionSummary')

const BudgetDetailSchema = BudgetSummarySchema.and(
  z
    .object({
      accounts: z.array(AccountSchema).exactOptional(),
      categories: z.array(CategorySchema).exactOptional(),
      category_groups: z.array(CategoryGroupSchema).exactOptional(),
      months: z.array(MonthDetailSchema).exactOptional(),
      payee_locations: z.array(PayeeLocationSchema).exactOptional(),
      payees: z.array(PayeeSchema).exactOptional(),
      scheduled_subtransactions: z.array(ScheduledSubTransactionSchema).exactOptional(),
      scheduled_transactions: z.array(ScheduledTransactionSummarySchema).exactOptional(),
      subtransactions: z.array(SubTransactionSchema).exactOptional(),
      transactions: z.array(TransactionSummarySchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BudgetDetail')

const BudgetDetailResponseSchema = z
  .object({
    data: z
      .object({
        budget: BudgetDetailSchema,
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
      })
      .openapi({ required: ['budget', 'server_knowledge'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('BudgetDetailResponse')

const BudgetSettingsSchema = z
  .object({ currency_format: CurrencyFormatSchema, date_format: DateFormatSchema })
  .openapi({ required: ['date_format', 'currency_format'] })
  .openapi('BudgetSettings')

const BudgetSettingsResponseSchema = z
  .object({
    data: z.object({ settings: BudgetSettingsSchema }).openapi({ required: ['settings'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('BudgetSettingsResponse')

const BudgetSummaryResponseSchema = z
  .object({
    data: z
      .object({
        budgets: z.array(BudgetSummarySchema),
        default_budget: BudgetSummarySchema.exactOptional(),
      })
      .openapi({ required: ['budgets'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('BudgetSummaryResponse')

const BulkResponseSchema = z
  .object({
    data: z
      .object({
        bulk: z
          .object({
            duplicate_import_ids: z
              .array(z.string())
              .openapi({
                description:
                  'If any Transactions were not created because they had an `import_id` matching a transaction already on the same account, the specified import_id(s) will be included in this list.',
              }),
            transaction_ids: z
              .array(z.string())
              .openapi({ description: 'The list of Transaction ids that were created.' }),
          })
          .openapi({ required: ['transaction_ids', 'duplicate_import_ids'] }),
      })
      .openapi({ required: ['bulk'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('BulkResponse')

const SaveSubTransactionSchema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The subtransaction amount in milliunits format.',
      }),
    category_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The category for the subtransaction.  Credit Card Payment categories are not permitted and will be ignored if supplied.',
      }),
    memo: z.string().max(200).exactOptional(),
    payee_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The payee for the subtransaction.' }),
    payee_name: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if import_id is also specified on parent transaction) or (2) a payee with the same name or (3) creation of a new payee.',
      }),
  })
  .openapi({ required: ['amount'] })
  .openapi('SaveSubTransaction')

const SaveTransactionWithOptionalFieldsSchema = z
  .object({
    account_id: z.uuid().exactOptional(),
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored.',
      }),
    approved: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default.',
      }),
    category_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied.',
      }),
    cleared: z
      .enum(['cleared', 'uncleared', 'reconciled'])
      .exactOptional()
      .openapi({ description: 'The cleared status of the transaction' }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored.',
      }),
    flag_color: z
      .union([
        z.literal('red'),
        z.literal('orange'),
        z.literal('yellow'),
        z.literal('green'),
        z.literal('blue'),
        z.literal('purple'),
        z.literal(null),
      ])
      .exactOptional()
      .openapi({ description: 'The transaction flag' }),
    import_id: z
      .string()
      .max(36)
      .exactOptional()
      .openapi({
        description:
          'If specified, the new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transation on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: \'YNAB:[milliunit_amount]:[iso_date]:[occurrence]\'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of \'YNAB:-294230:2015-12-30:1\'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be \'YNAB:-294230:2015-12-30:2\'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API).',
      }),
    memo: z.string().max(200).exactOptional(),
    payee_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `tranfer_payee_id` on the account resource.',
      }),
    payee_name: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.',
      }),
    subtransactions: z
      .array(SaveSubTransactionSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of subtransactions to configure a transaction as a split.  Updating `subtransactions` on an existing split transaction is not supported.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SaveTransactionWithOptionalFields')

const SaveTransactionSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'account_id')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (!Object.hasOwn(val, 'date')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (!Object.hasOwn(val, 'amount')) {
        ctx.addIssue({ code: 'custom' })
      }
    }
  })
  .openapi({ required: ['account_id', 'date', 'amount'] })
  .and(SaveTransactionWithOptionalFieldsSchema)
  .openapi('SaveTransaction')

const BulkTransactionsSchema = z
  .object({ transactions: z.array(SaveTransactionSchema) })
  .openapi({ required: ['transactions'] })
  .openapi('BulkTransactions')

const CategoryGroupWithCategoriesSchema = CategoryGroupSchema.and(
  z
    .object({
      categories: z
        .array(CategorySchema)
        .openapi({
          description:
            'Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).',
        }),
    })
    .openapi({ required: ['categories'] }),
).openapi('CategoryGroupWithCategories')

const CategoriesResponseSchema = z
  .object({
    data: z
      .object({
        category_groups: z.array(CategoryGroupWithCategoriesSchema),
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
      })
      .openapi({ required: ['category_groups', 'server_knowledge'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('CategoriesResponse')

const CategoryResponseSchema = z
  .object({ data: z.object({ category: CategorySchema }).openapi({ required: ['category'] }) })
  .openapi({ required: ['data'] })
  .openapi('CategoryResponse')

const ErrorDetailSchema = z
  .object({ detail: z.string(), id: z.string(), name: z.string() })
  .openapi({ required: ['id', 'name', 'detail'] })
  .openapi('ErrorDetail')

const ErrorResponseSchema = z
  .object({ error: ErrorDetailSchema })
  .openapi({ required: ['error'] })
  .openapi('ErrorResponse')

const HybridTransactionSchema = TransactionSummarySchema.and(
  z
    .object({
      account_name: z.string(),
      category_name: z.string().exactOptional(),
      parent_transaction_id: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'For subtransaction types, this is the id of the parent transaction.  For transaction types, this id will be always be null.',
        }),
      payee_name: z.string().exactOptional(),
      type: z
        .enum(['transaction', 'subtransaction'])
        .openapi({
          description:
            'Whether the hybrid transaction represents a regular transaction or a subtransaction',
        }),
    })
    .openapi({ required: ['type', 'account_name'] }),
).openapi('HybridTransaction')

const HybridTransactionsResponseSchema = z
  .object({
    data: z
      .object({
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
        transactions: z.array(HybridTransactionSchema),
      })
      .openapi({ required: ['transactions'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('HybridTransactionsResponse')

const MonthDetailResponseSchema = z
  .object({ data: z.object({ month: MonthDetailSchema }).openapi({ required: ['month'] }) })
  .openapi({ required: ['data'] })
  .openapi('MonthDetailResponse')

const MonthSummariesResponseSchema = z
  .object({
    data: z
      .object({
        months: z.array(MonthSummarySchema),
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
      })
      .openapi({ required: ['months', 'server_knowledge'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('MonthSummariesResponse')

const SaveMonthCategorySchema = z
  .object({
    budgeted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Budgeted amount in milliunits format',
      }),
  })
  .openapi({ required: ['budgeted'] })
  .openapi('SaveMonthCategory')

const PatchMonthCategoryWrapperSchema = z
  .object({ category: SaveMonthCategorySchema })
  .openapi({ required: ['category'] })
  .openapi('PatchMonthCategoryWrapper')

const SaveTransactionWithIdSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({ required: [] })
  .and(SaveTransactionWithOptionalFieldsSchema)
  .openapi('SaveTransactionWithId')

const PatchTransactionsWrapperSchema = z
  .object({ transactions: z.array(SaveTransactionWithIdSchema) })
  .openapi({ required: ['transactions'] })
  .openapi('PatchTransactionsWrapper')

const PayeeLocationResponseSchema = z
  .object({
    data: z
      .object({ payee_location: PayeeLocationSchema })
      .openapi({ required: ['payee_location'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('PayeeLocationResponse')

const PayeeLocationsResponseSchema = z
  .object({
    data: z
      .object({ payee_locations: z.array(PayeeLocationSchema) })
      .openapi({ required: ['payee_locations'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('PayeeLocationsResponse')

const PayeeResponseSchema = z
  .object({ data: z.object({ payee: PayeeSchema }).openapi({ required: ['payee'] }) })
  .openapi({ required: ['data'] })
  .openapi('PayeeResponse')

const PayeesResponseSchema = z
  .object({
    data: z
      .object({
        payees: z.array(PayeeSchema),
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
      })
      .openapi({ required: ['payees', 'server_knowledge'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('PayeesResponse')

const SaveAccountSchema = z
  .object({
    balance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The current balance of the account in milliunits format',
      }),
    name: z.string().openapi({ description: 'The name of the account' }),
    type: AccountTypeSchema,
  })
  .openapi({ required: ['name', 'type', 'balance'] })
  .openapi('SaveAccount')

const PostAccountWrapperSchema = z
  .object({ account: SaveAccountSchema })
  .openapi({ required: ['account'] })
  .openapi('PostAccountWrapper')

const PostTransactionsWrapperSchema = z
  .object({
    transaction: SaveTransactionSchema.exactOptional(),
    transactions: z.array(SaveTransactionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostTransactionsWrapper')

const PutTransactionWrapperSchema = z
  .object({ transaction: SaveTransactionSchema })
  .openapi({ required: ['transaction'] })
  .openapi('PutTransactionWrapper')

const SaveCategoryResponseSchema = z
  .object({
    data: z
      .object({
        category: CategorySchema,
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
      })
      .openapi({ required: ['category', 'server_knowledge'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('SaveCategoryResponse')

const TransactionDetailSchema = TransactionSummarySchema.and(
  z
    .object({
      account_name: z.string(),
      category_name: z.string().exactOptional(),
      payee_name: z.string().exactOptional(),
      subtransactions: z
        .array(SubTransactionSchema)
        .openapi({ description: 'If a split transaction, the subtransactions.' }),
    })
    .openapi({ required: ['account_name', 'subtransactions'] }),
).openapi('TransactionDetail')

const SaveTransactionsResponseSchema = z
  .object({
    data: z
      .object({
        duplicate_import_ids: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'If multiple transactions were specified, a list of import_ids that were not created because of an existing `import_id` found on the same account',
          }),
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
        transaction: TransactionDetailSchema.exactOptional(),
        transaction_ids: z
          .array(z.string())
          .openapi({ description: 'The transaction ids that were saved' }),
        transactions: z
          .array(TransactionDetailSchema)
          .exactOptional()
          .openapi({
            description:
              'If multiple transactions were specified, the transactions that were saved',
          }),
      })
      .openapi({ required: ['transaction_ids', 'server_knowledge'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('SaveTransactionsResponse')

const ScheduledTransactionDetailSchema = ScheduledTransactionSummarySchema.and(
  z
    .object({
      account_name: z.string(),
      category_name: z.string().exactOptional(),
      payee_name: z.string().exactOptional(),
      subtransactions: z
        .array(ScheduledSubTransactionSchema)
        .openapi({ description: 'If a split scheduled transaction, the subtransactions.' }),
    })
    .openapi({ required: ['account_name', 'subtransactions'] }),
).openapi('ScheduledTransactionDetail')

const ScheduledTransactionResponseSchema = z
  .object({
    data: z
      .object({ scheduled_transaction: ScheduledTransactionDetailSchema })
      .openapi({ required: ['scheduled_transaction'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('ScheduledTransactionResponse')

const ScheduledTransactionsResponseSchema = z
  .object({
    data: z
      .object({
        scheduled_transactions: z.array(ScheduledTransactionDetailSchema),
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
      })
      .openapi({ required: ['scheduled_transactions', 'server_knowledge'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('ScheduledTransactionsResponse')

const TransactionResponseSchema = z
  .object({
    data: z.object({ transaction: TransactionDetailSchema }).openapi({ required: ['transaction'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('TransactionResponse')

const TransactionsImportResponseSchema = z
  .object({
    data: z
      .object({
        transaction_ids: z
          .array(z.string())
          .openapi({ description: 'The list of transaction ids that were imported.' }),
      })
      .openapi({ required: ['transaction_ids'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('TransactionsImportResponse')

const TransactionsResponseSchema = z
  .object({
    data: z
      .object({
        server_knowledge: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The knowledge of the server',
          }),
        transactions: z.array(TransactionDetailSchema),
      })
      .openapi({ required: ['transactions', 'server_knowledge'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('TransactionsResponse')

const UserSchema = z
  .object({ id: z.uuid() })
  .openapi({ required: ['id'] })
  .openapi('User')

const UserResponseSchema = z
  .object({ data: z.object({ user: UserSchema }).openapi({ required: ['user'] }) })
  .openapi({ required: ['data'] })
  .openapi('UserResponse')

const BearerSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const getBudgetsRoute = createRoute({
  method: 'get',
  path: '/budgets',
  tags: ['Budgets'],
  summary: 'List budgets',
  description: 'Returns budgets list with summary information',
  operationId: 'getBudgets',
  request: {
    query: z.object({
      include_accounts: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to include the list of budget accounts',
            in: 'query',
            name: 'include_accounts',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of budgets',
      content: { 'application/json': { schema: BudgetSummaryResponseSchema } },
    },
    404: {
      description: 'No budgets were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}',
  tags: ['Budgets'],
  summary: 'Single budget',
  description:
    'Returns a single budget with all related entities.  This resource is effectively a full budget export.',
  operationId: 'getBudgetById',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested budget',
      content: { 'application/json': { schema: BudgetDetailResponseSchema } },
    },
    404: {
      description: 'The specified budget was not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdAccountsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/accounts',
  tags: ['Accounts'],
  summary: 'Account list',
  description: 'Returns all accounts',
  operationId: 'getAccounts',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of requested accounts',
      content: { 'application/json': { schema: AccountsResponseSchema } },
    },
    404: {
      description: 'No accounts were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postBudgetsBudgetIdAccountsRoute = createRoute({
  method: 'post',
  path: '/budgets/{budget_id}/accounts',
  tags: ['Accounts'],
  summary: 'Create a new account',
  description: 'Creates a new account',
  operationId: 'createAccount',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget ("last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The account to create.',
      content: { 'application/json': { schema: PostAccountWrapperSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The account was successfully created',
      content: { 'application/json': { schema: AccountResponseSchema } },
    },
    400: {
      description:
        'The request could not be understood due to malformed syntax or validation error(s).',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/accounts/{account_id}',
  tags: ['Accounts'],
  summary: 'Single account',
  description: 'Returns a single account',
  operationId: 'getAccountById',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The id of the account',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested account',
      content: { 'application/json': { schema: AccountResponseSchema } },
    },
    404: {
      description: 'The requested account was not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdAccountsAccountIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/accounts/{account_id}/transactions',
  tags: ['Transactions'],
  summary: 'List account transactions',
  description: 'Returns all transactions for a specified account',
  operationId: 'getTransactionsByAccount',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      since_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).',
            in: 'query',
            name: 'since_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      type: z
        .enum(['uncategorized', 'unapproved'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['uncategorized', 'unapproved'], type: 'string' },
          },
        }),
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of requested transactions',
      content: { 'application/json': { schema: TransactionsResponseSchema } },
    },
    404: {
      description: 'No transactions were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdCategoriesRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/categories',
  tags: ['Categories'],
  summary: 'List categories',
  description:
    'Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).',
  operationId: 'getCategories',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The categories grouped by category group',
      content: { 'application/json': { schema: CategoriesResponseSchema } },
    },
    404: {
      description: 'No categories were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdCategoriesCategoryIdRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/categories/{category_id}',
  tags: ['Categories'],
  summary: 'Single category',
  description:
    'Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).',
  operationId: 'getCategoryById',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the category',
            in: 'path',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested category',
      content: { 'application/json': { schema: CategoryResponseSchema } },
    },
    404: {
      description: 'The category not was found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdCategoriesCategoryIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/categories/{category_id}/transactions',
  tags: ['Transactions'],
  summary: 'List category transactions',
  description: 'Returns all transactions for a specified category',
  operationId: 'getTransactionsByCategory',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the category',
            in: 'path',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      since_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).',
            in: 'query',
            name: 'since_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      type: z
        .enum(['uncategorized', 'unapproved'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['uncategorized', 'unapproved'], type: 'string' },
          },
        }),
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of requested transactions',
      content: { 'application/json': { schema: HybridTransactionsResponseSchema } },
    },
    404: {
      description: 'No transactions were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdMonthsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/months',
  tags: ['Months'],
  summary: 'List budget months',
  description: 'Returns all budget months',
  operationId: 'getBudgetMonths',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of budget months',
      content: { 'application/json': { schema: MonthSummariesResponseSchema } },
    },
    404: {
      description: 'No budget months were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdMonthsMonthRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/months/{month}',
  tags: ['Months'],
  summary: 'Single budget month',
  description: 'Returns a single budget month',
  operationId: 'getBudgetMonth',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      month: z.iso
        .date()
        .openapi({
          param: {
            description:
              'The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))',
            in: 'path',
            name: 'month',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The budget month detail',
      content: { 'application/json': { schema: MonthDetailResponseSchema } },
    },
    404: {
      description: 'The budget month was not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/months/{month}/categories/{category_id}',
  tags: ['Categories'],
  summary: 'Single category for a specific budget month',
  description:
    'Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).',
  operationId: 'getMonthCategoryById',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      month: z.iso
        .date()
        .openapi({
          param: {
            description:
              'The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))',
            in: 'path',
            name: 'month',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the category',
            in: 'path',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested month category',
      content: { 'application/json': { schema: CategoryResponseSchema } },
    },
    404: {
      description: 'The month category was not was found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const patchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute = createRoute({
  method: 'patch',
  path: '/budgets/{budget_id}/months/{month}/categories/{category_id}',
  tags: ['Categories'],
  summary: 'Update a category for a specific month',
  description: 'Update a category for a specific month.  Only `budgeted` amount can be updated.',
  operationId: 'updateMonthCategory',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      month: z.iso
        .date()
        .openapi({
          param: {
            description:
              'The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))',
            in: 'path',
            name: 'month',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the category',
            in: 'path',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'The category to update.  Only `budgeted` amount can be updated and any other fields specified will be ignored.',
      content: { 'application/json': { schema: PatchMonthCategoryWrapperSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The month category was successfully updated',
      content: { 'application/json': { schema: SaveCategoryResponseSchema } },
    },
    400: {
      description:
        'The request could not be understood due to malformed syntax or validation error(s)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdPayeeLocationsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/payee_locations',
  tags: ['Payee Locations'],
  summary: 'List payee locations',
  description: 'Returns all payee locations',
  operationId: 'getPayeeLocations',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of payee locations',
      content: { 'application/json': { schema: PayeeLocationsResponseSchema } },
    },
    404: {
      description: 'No payees locations were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdPayeeLocationsPayeeLocationIdRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/payee_locations/{payee_location_id}',
  tags: ['Payee Locations'],
  summary: 'Single payee location',
  description: 'Returns a single payee location',
  operationId: 'getPayeeLocationById',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payee_location_id: z
        .string()
        .openapi({
          param: {
            description: 'id of payee location',
            in: 'path',
            name: 'payee_location_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The payee location',
      content: { 'application/json': { schema: PayeeLocationResponseSchema } },
    },
    404: {
      description: 'The payee location was not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdPayeesRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/payees',
  tags: ['Payees'],
  summary: 'List payees',
  description: 'Returns all payees',
  operationId: 'getPayees',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested list of payees',
      content: { 'application/json': { schema: PayeesResponseSchema } },
    },
    404: {
      description: 'No payees were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdPayeesPayeeIdRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/payees/{payee_id}',
  tags: ['Payees'],
  summary: 'Single payee',
  description: 'Returns a single payee',
  operationId: 'getPayeeById',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payee_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the payee',
            in: 'path',
            name: 'payee_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested payee',
      content: { 'application/json': { schema: PayeeResponseSchema } },
    },
    404: {
      description: 'The payee was not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/payees/{payee_id}/payee_locations',
  tags: ['Payee Locations'],
  summary: 'List locations for a payee',
  description: 'Returns all payee locations for a specified payee',
  operationId: 'getPayeeLocationsByPayee',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payee_id: z
        .string()
        .openapi({
          param: {
            description: 'id of payee',
            in: 'path',
            name: 'payee_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of requested payee locations',
      content: { 'application/json': { schema: PayeeLocationsResponseSchema } },
    },
    404: {
      description: 'No payees locations were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdPayeesPayeeIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/payees/{payee_id}/transactions',
  tags: ['Transactions'],
  summary: 'List payee transactions',
  description: 'Returns all transactions for a specified payee',
  operationId: 'getTransactionsByPayee',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payee_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the payee',
            in: 'path',
            name: 'payee_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      since_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).',
            in: 'query',
            name: 'since_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      type: z
        .enum(['uncategorized', 'unapproved'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['uncategorized', 'unapproved'], type: 'string' },
          },
        }),
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of requested transactions',
      content: { 'application/json': { schema: HybridTransactionsResponseSchema } },
    },
    404: {
      description: 'No transactions were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdScheduledTransactionsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/scheduled_transactions',
  tags: ['Scheduled Transactions'],
  summary: 'List scheduled transactions',
  description: 'Returns all scheduled transactions',
  operationId: 'getScheduledTransactions',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of requested scheduled transactions',
      content: { 'application/json': { schema: ScheduledTransactionsResponseSchema } },
    },
    404: {
      description: 'No scheduled transactions were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}',
  tags: ['Scheduled Transactions'],
  summary: 'Single scheduled transaction',
  description: 'Returns a single scheduled transaction',
  operationId: 'getScheduledTransactionById',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduled_transaction_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the scheduled transaction',
            in: 'path',
            name: 'scheduled_transaction_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Scheduled Transaction',
      content: { 'application/json': { schema: ScheduledTransactionResponseSchema } },
    },
    404: {
      description: 'The scheduled transaction was not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdSettingsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/settings',
  tags: ['Budgets'],
  summary: 'Budget Settings',
  description: 'Returns settings for a budget',
  operationId: 'getBudgetSettingsById',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested budget settings',
      content: { 'application/json': { schema: BudgetSettingsResponseSchema } },
    },
    404: {
      description: 'The specified Budget was not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/transactions',
  tags: ['Transactions'],
  summary: 'List transactions',
  description: 'Returns budget transactions',
  operationId: 'getTransactions',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      since_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).',
            in: 'query',
            name: 'since_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      type: z
        .enum(['uncategorized', 'unapproved'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['uncategorized', 'unapproved'], type: 'string' },
          },
        }),
      last_knowledge_of_server: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.',
            in: 'query',
            name: 'last_knowledge_of_server',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of requested transactions',
      content: { 'application/json': { schema: TransactionsResponseSchema } },
    },
    400: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'No transactions were found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postBudgetsBudgetIdTransactionsRoute = createRoute({
  method: 'post',
  path: '/budgets/{budget_id}/transactions',
  tags: ['Transactions'],
  summary: 'Create a single transaction or multiple transactions',
  description:
    'Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.',
  operationId: 'createTransaction',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'The transaction or transactions to create.  To create a single transaction you can specify a value for the `transaction` object and to create multiple transactions you can specify an array of `transactions`.  It is expected that you will only provide a value for one of these objects.',
      content: { 'application/json': { schema: PostTransactionsWrapperSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The transaction or transactions were successfully created',
      content: { 'application/json': { schema: SaveTransactionsResponseSchema } },
    },
    400: {
      description:
        'The request could not be understood due to malformed syntax or validation error(s).',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description: 'A transaction on the same account with the same `import_id` already exists.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const patchBudgetsBudgetIdTransactionsRoute = createRoute({
  method: 'patch',
  path: '/budgets/{budget_id}/transactions',
  tags: ['Transactions'],
  summary: 'Update multiple transactions',
  description: 'Updates multiple transactions, by `id` or `import_id`.',
  operationId: 'updateTransactions',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'The transactions to update. Each transaction must have either an `id` or `import_id` specified. If `id` is specified as null an `import_id` value can be provided which will allow transaction(s) to be updated by their `import_id`. If an `id` is specified, it will always be used for lookup.',
      content: { 'application/json': { schema: PatchTransactionsWrapperSchema } },
      required: true,
    },
  },
  responses: {
    209: {
      description: 'The transactions were successfully updated',
      content: { 'application/json': { schema: SaveTransactionsResponseSchema } },
    },
    400: {
      description:
        'The request could not be understood due to malformed syntax or validation error(s).',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postBudgetsBudgetIdTransactionsBulkRoute = createRoute({
  method: 'post',
  path: '/budgets/{budget_id}/transactions/bulk',
  tags: ['Deprecated'],
  summary: 'Bulk create transactions',
  description:
    "Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.",
  operationId: 'bulkCreateTransactions',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The list of transactions to create',
      content: { 'application/json': { schema: BulkTransactionsSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The bulk request was processed successfully',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    400: {
      description:
        'The request could not be understood due to malformed syntax or validation error(s)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postBudgetsBudgetIdTransactionsImportRoute = createRoute({
  method: 'post',
  path: '/budgets/{budget_id}/transactions/import',
  tags: ['Transactions'],
  summary: 'Import transactions',
  description:
    'Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.',
  operationId: 'importTransactions',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was successful but there were no transactions to import',
      content: { 'application/json': { schema: TransactionsImportResponseSchema } },
    },
    201: {
      description: 'One or more transactions were imported successfully',
      content: { 'application/json': { schema: TransactionsImportResponseSchema } },
    },
    400: {
      description:
        'The request could not be understood due to malformed syntax or validation error(s)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getBudgetsBudgetIdTransactionsTransactionIdRoute = createRoute({
  method: 'get',
  path: '/budgets/{budget_id}/transactions/{transaction_id}',
  tags: ['Transactions'],
  summary: 'Single transaction',
  description: 'Returns a single transaction',
  operationId: 'getTransactionById',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      transaction_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the transaction',
            in: 'path',
            name: 'transaction_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested transaction',
      content: { 'application/json': { schema: TransactionResponseSchema } },
    },
    404: {
      description: 'The transaction was not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putBudgetsBudgetIdTransactionsTransactionIdRoute = createRoute({
  method: 'put',
  path: '/budgets/{budget_id}/transactions/{transaction_id}',
  tags: ['Transactions'],
  summary: 'Updates an existing transaction',
  description: 'Updates a single transaction',
  operationId: 'updateTransaction',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      transaction_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the transaction',
            in: 'path',
            name: 'transaction_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The transaction to update',
      content: { 'application/json': { schema: PutTransactionWrapperSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The transaction was successfully updated',
      content: { 'application/json': { schema: TransactionResponseSchema } },
    },
    400: {
      description:
        'The request could not be understood due to malformed syntax or validation error(s)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteBudgetsBudgetIdTransactionsTransactionIdRoute = createRoute({
  method: 'delete',
  path: '/budgets/{budget_id}/transactions/{transaction_id}',
  tags: ['Transactions'],
  summary: 'Deletes an existing transaction',
  description: 'Deletes a transaction',
  operationId: 'deleteTransaction',
  request: {
    params: z.object({
      budget_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).',
            in: 'path',
            name: 'budget_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      transaction_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the transaction',
            in: 'path',
            name: 'transaction_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The transaction was successfully deleted',
      content: { 'application/json': { schema: TransactionResponseSchema } },
    },
    404: {
      description: 'The transaction was not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['User'],
  summary: 'User info',
  description: 'Returns authenticated user information',
  operationId: 'getUser',
  responses: {
    200: {
      description: 'The user info',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: {
      description: 'An error occurred',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
