import { createRoute, z } from '@hono/zod-openapi'

const ProblemTypeSchema = z
  .enum([
    'NotSet',
    'bank-account-not-found',
    'internal-error',
    'invalid-application',
    'invalid-request',
    'organisation-not-found',
    'organisation-offline',
    'request-timeout',
    'service-unavailable',
    'unauthorized',
    'rate-limit-error',
  ])
  .openapi('ProblemType')

const ProblemSchema = z
  .strictObject({
    type: ProblemTypeSchema.exactOptional(),
    title: z.string().exactOptional(),
    status: z.int32().exactOptional(),
    detail: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Problem')

const DataSourceResponseSchema = z
  .strictObject({
    directBankFeed: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was a direct bank feed in to Xero via an API integration.   This could be from a bank or aggregator.   This gives an indication on the certainty of correctness of the data.',
        'x-is-money': true,
      }),
    fileUpload: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was a file manually uploaded in to Xero.   This gives an indication on the certainty of correctness of the data.',
        'x-is-money': true,
      }),
    manual: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was manually input in to Xero.   This gives an indication on the certainty of correctness of the data.',
        'x-is-money': true,
      }),
    directBankFeedPos: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was a direct bank feed in to Xero via an API integration.   This could be from a bank or aggregator.  This gives an indication on the certainty of correctness of the data.  Only positive transactions are included.',
        'x-is-money': true,
      }),
    fileUploadPos: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was a file manually uploaded in to Xero.   This gives an indication on the certainty of correctness of the data. Only positive transactions are included.',
        'x-is-money': true,
      }),
    manualPos: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was manually input in to Xero.   This gives an indication on the certainty of correctness of the data. Only positive transactions are included.',
        'x-is-money': true,
      }),
    directBankFeedNeg: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was a direct bank feed in to Xero via an API integration.   This could be from a bank or aggregator.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.',
        'x-is-money': true,
      }),
    fileUploadNeg: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was a file manually uploaded in to Xero.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.',
        'x-is-money': true,
      }),
    manualNeg: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was manually input in to Xero.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.',
        'x-is-money': true,
      }),
    otherPos: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was unknown.   This gives an indication on the certainty of correctness of the data.  Only positive transactions are included.',
        'x-is-money': true,
      }),
    otherNeg: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was unknown.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.',
        'x-is-money': true,
      }),
    other: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where the source of the data was unknown.   This gives an indication on the certainty of correctness of the data.',
        'x-is-money': true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DataSourceResponse')

const StatementLinesResponseSchema = z
  .strictObject({
    unreconciledAmountPos: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where both the reconciled flag is set to FALSE, and the amount is positive.',
        'x-is-money': true,
      }),
    unreconciledAmountNeg: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where both the reconciled flag is set to FALSE, and the amount is negative.',
        'x-is-money': true,
      }),
    unreconciledLines: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Count of all statement lines where the reconciled flag is set to FALSE.',
      }),
    avgDaysUnreconciledPos: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum-product of age of statement line in days multiplied by transaction amount, divided by the sum of transaction amount - in for those statement lines in which the reconciled flag is set to FALSE, and the amount is positive. Provides an indication of the age of unreconciled transactions.',
        'x-is-money': true,
      }),
    avgDaysUnreconciledNeg: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum-product of age of statement line in days multiplied by transaction amount, divided by the sum of transaction amount - in for those statement lines in which the reconciled flag is set to FALSE, and the amount is negative. Provides an indication of the age of unreconciled transactions.',
        'x-is-money': true,
      }),
    earliestUnreconciledTransaction: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'UTC Date which is the earliest transaction date of a statement line for which the reconciled flag is set to FALSE.  This date is represented in ISO 8601 format.',
      }),
    latestUnreconciledTransaction: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'UTC Date which is the latest transaction date of a statement line for which the reconciled flag is set to FALSE.  This date is represented in ISO 8601 format.',
      }),
    deletedAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all deleted statement lines.  Transactions may be deleted due to duplication or otherwise.',
        'x-is-money': true,
      }),
    totalAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines.  This is used as a metric of comparison to the unreconciled figures above.',
        'x-is-money': true,
      }),
    dataSource: DataSourceResponseSchema.exactOptional(),
    earliestReconciledTransaction: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'UTC Date which is the earliest transaction date of a statement line for which the reconciled flag is set to TRUE.  This date is represented in ISO 8601 format.',
      }),
    latestReconciledTransaction: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'UTC Date which is the latest transaction date of a statement line for which the reconciled flag is set to TRUE.  This date is represented in ISO 8601 format.',
      }),
    reconciledAmountPos: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where both the reconciled flag is set to TRUE, and the amount is positive.',
        'x-is-money': true,
      }),
    reconciledAmountNeg: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Sum of the amounts of all statement lines where both the reconciled flag is set to TRUE, and the amount is negative.',
        'x-is-money': true,
      }),
    reconciledLines: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Count of all statement lines where the reconciled flag is set to TRUE',
      }),
    totalAmountPos: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Sum of the amounts of all statement lines where the amount is positive',
        'x-is-money': true,
      }),
    totalAmountNeg: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Sum of the amounts of all statement lines where the amount is negative.',
        'x-is-money': true,
      }),
  })
  .openapi({ required: [] })
  .openapi('StatementLinesResponse')

const CurrentStatementResponseSchema = z
  .strictObject({
    startDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Looking at the most recent bank statement, this field indicates the first date which transactions on this statement pertain to. This date is represented in ISO 8601 format.',
      }),
    endDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Looking at the most recent bank statement, this field indicates the last date which transactions on this statement pertain to. This date is represented in ISO 8601 format.',
      }),
    startBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Looking at the most recent bank statement, this field indicates the balance before the transactions on the statement are applied (note, this is not always populated by the bank in every single instance (~10%)).',
        'x-is-money': true,
      }),
    endBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Looking at the most recent bank statement, this field indicates the balance after the transactions on the statement are applied (note, this is not always populated by the bank in every single instance (~10%)).',
        'x-is-money': true,
      }),
    importedDateTimeUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Looking at the most recent bank statement, this field indicates when the document was imported into Xero.  This date is represented in ISO 8601 format.',
      }),
    importSourceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Looking at the most recent bank statement, this field indicates the source of the data (direct bank feed, file upload, or manual keying).',
      }),
  })
  .openapi({ required: [] })
  .openapi('CurrentStatementResponse')

const BankStatementResponseSchema = z
  .strictObject({
    statementLines: StatementLinesResponseSchema.exactOptional(),
    currentStatement: CurrentStatementResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BankStatementResponse')

const CashAccountResponseSchema = z
  .strictObject({
    unreconciledAmountPos: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total value of transactions in the journals which are not reconciled to bank statement lines, and have a positive (debit) value.',
        'x-is-money': true,
      }),
    unreconciledAmountNeg: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total value of transactions in the journals which are not reconciled to bank statement lines, and have a negative (credit) value.',
        'x-is-money': true,
      }),
    startingBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Starting (or historic) balance from the journals (manually keyed in by users on account creation - unverified).',
        'x-is-money': true,
      }),
    accountBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Current cash at bank accounting value from the journals.',
        'x-is-money': true,
      }),
    balanceCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currency which the cashAccount transactions relate to.' }),
  })
  .openapi({ required: [] })
  .openapi('CashAccountResponse')

const StatementBalanceResponseSchema = z
  .strictObject({
    value: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total closing balance of the account. This includes both reconciled and unreconciled bank statement lines. The closing balance will always be represented as a positive number, with it’s debit/credit status defined in the statementBalanceDebitCredit field.',
        'x-is-money': true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The DEBIT or CREDIT status of the account. Cash accounts in credit have a negative balance.',
      }),
  })
  .openapi({ required: [] })
  .openapi('StatementBalanceResponse')

const CashValidationResponseSchema = z
  .strictObject({
    accountId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for an account' }),
    statementBalance: StatementBalanceResponseSchema.exactOptional(),
    statementBalanceDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'UTC Date when the last bank statement item was entered into Xero. This date is represented in ISO 8601 format.',
      }),
    bankStatement: BankStatementResponseSchema.exactOptional(),
    cashAccount: CashAccountResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CashValidationResponse')

const BalanceSheetAccountDetailSchema = z
  .strictObject({
    code: z.string().exactOptional().openapi({ description: 'Accounting code' }),
    accountID: z.uuid().exactOptional().openapi({ description: 'ID of the account' }),
    name: z.string().exactOptional().openapi({ description: 'Account name' }),
    reportingCode: z.string().exactOptional().openapi({ description: 'Reporting code' }),
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total movement on this account', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('BalanceSheetAccountDetail')

const BalanceSheetAccountTypeSchema = z
  .strictObject({
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountTypes'>Account Types</a>",
      }),
    accounts: z
      .array(BalanceSheetAccountDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of all accounts of this type. Refer to the Account section below for each account element detail.',
      }),
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total value of all the accounts in this type', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('BalanceSheetAccountType')

const BalanceSheetAccountGroupSchema = z
  .strictObject({
    accountTypes: z.array(BalanceSheetAccountTypeSchema).exactOptional(),
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total value of all the accounts in this type', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('BalanceSheetAccountGroup')

const BalanceSheetResponseSchema = z
  .strictObject({
    balanceDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Balance date of the report' }),
    asset: BalanceSheetAccountGroupSchema.exactOptional(),
    liability: BalanceSheetAccountGroupSchema.exactOptional(),
    equity: BalanceSheetAccountGroupSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BalanceSheetResponse')

const CashBalanceSchema = z
  .strictObject({
    openingCashBalance: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Opening balance of cash and cash equivalents', 'x-is-money': true }),
    closingCashBalance: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Closing balance of cash and cash equivalents', 'x-is-money': true }),
    netCashMovement: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Net movement of cash and cash equivalents for the period',
        'x-is-money': true,
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('CashBalance')

const CashflowAccountSchema = z
  .strictObject({
    accountId: z.uuid().exactOptional().openapi({ description: 'ID of the account' }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountTypes'>Account Types</a>",
      }),
    accountClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The class of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountClassTypes'>Account Class Types</a>",
      }),
    code: z.string().exactOptional().openapi({ description: 'Account code' }),
    name: z.string().exactOptional().openapi({ description: 'Account name' }),
    reportingCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reporting code used for cash flow classification' }),
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount for the account', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('CashflowAccount')

const CashflowTypeSchema = z
  .strictObject({
    name: z.string().exactOptional().openapi({ description: 'Name of the activity' }),
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total value of the activity', 'x-is-money': true }),
    accounts: z
      .array(CashflowAccountSchema)
      .exactOptional()
      .openapi({ description: 'List of the accounts in this activity' }),
  })
  .openapi({ required: [] })
  .openapi('CashflowType')

const CashflowActivitySchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the cashflow activity type. It will be either Operating Activities, Investing Activities or Financing Activities',
      }),
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total value of the activity type', 'x-is-money': true }),
    cashflowTypes: z.array(CashflowTypeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CashflowActivity')

const CashflowResponseSchema = z
  .strictObject({
    startDate: z.iso.date().exactOptional().openapi({ description: 'Start date of the report' }),
    endDate: z.iso.date().exactOptional().openapi({ description: 'End date of the report' }),
    cashBalance: CashBalanceSchema.exactOptional(),
    cashflowActivities: z
      .array(CashflowActivitySchema)
      .exactOptional()
      .openapi({ description: 'Break down of cash and cash equivalents for the period' }),
  })
  .openapi({ required: [] })
  .openapi('CashflowResponse')

const PnlAccountSchema = z
  .strictObject({
    accountID: z.uuid().exactOptional().openapi({ description: 'ID of the account' }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountTypes'>Account Types</a>",
      }),
    code: z.string().exactOptional().openapi({ description: 'Account code' }),
    name: z.string().exactOptional().openapi({ description: 'Account name' }),
    reportingCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reporting code (Shown if set)' }),
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total movement on this account', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('PnlAccount')

const PnlAccountTypeSchema = z
  .strictObject({
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total movement on this account type', 'x-is-money': true }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this account type, it will be either Trading Income or Other Income for Revenue section / Direct Cost or Operating Expenses for Expense section',
      }),
    accounts: z
      .array(PnlAccountSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the movement on each account detail during the query period. Refer to the account detail element below',
      }),
  })
  .openapi({ required: [] })
  .openapi('PnlAccountType')

const PnlAccountClassSchema = z
  .strictObject({
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total revenue/expense value', 'x-is-money': true }),
    accountTypes: z
      .array(PnlAccountTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains trading income and other income for revenue section / operating expenses and direct cost for expense section if the data is available for each section. Refer to the account type element below',
      }),
  })
  .openapi({ required: [] })
  .openapi('PnlAccountClass')

const ProfitAndLossResponseSchema = z
  .strictObject({
    startDate: z.iso.date().exactOptional().openapi({ description: 'Start date of the report' }),
    endDate: z.iso.date().exactOptional().openapi({ description: 'End date of the report' }),
    netProfitLoss: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Net profit loss value', 'x-is-money': true }),
    revenue: PnlAccountClassSchema.exactOptional(),
    expense: PnlAccountClassSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfitAndLossResponse')

const TrialBalanceEntrySchema = z
  .strictObject({
    value: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Net movement or net balance in the account', 'x-is-money': true }),
    entryType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sign (Debit/Credit) of the movement of balance in the account' }),
  })
  .openapi({ required: [] })
  .openapi('TrialBalanceEntry')

const TrialBalanceMovementSchema = z
  .strictObject({
    debits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Debit amount', 'x-is-money': true }),
    credits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Credit amount', 'x-is-money': true }),
    movement: TrialBalanceEntrySchema.exactOptional(),
    signedMovement: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Value of movement. Expense and Asset accounts code debits as positive. Revenue, Liability, and Equity accounts code debits as negative',
        'x-is-money': true,
      }),
  })
  .openapi({ required: [] })
  .openapi('TrialBalanceMovement')

const TrialBalanceAccountSchema = z
  .strictObject({
    accountId: z.uuid().exactOptional().openapi({ description: 'ID of the account' }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountTypes'>Account Types</a>",
      }),
    accountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer defined alpha numeric account code e.g 200 or SALES' }),
    accountClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The class of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountClassTypes'>Account Class Types</a>",
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Accounts with a status of ACTIVE can be updated to ARCHIVED. See <a href='https://developer.xero.com/documentation/api/types#AccountStatusCodes'>Account Status Codes</a>",
      }),
    reportingCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reporting code (Shown if set)' }),
    accountName: z.string().exactOptional().openapi({ description: 'Name of the account' }),
    balance: TrialBalanceEntrySchema.exactOptional(),
    signedBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Value of balance. Expense and Asset accounts code debits as positive. Revenue, Liability, and Equity accounts code debits as negative',
        'x-is-money': true,
      }),
    accountMovement: TrialBalanceMovementSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrialBalanceAccount')

const TrialBalanceResponseSchema = z
  .strictObject({
    startDate: z.iso.date().exactOptional().openapi({ description: 'Start date of the report' }),
    endDate: z.iso.date().exactOptional().openapi({ description: 'End date of the report' }),
    accounts: z
      .array(TrialBalanceAccountSchema)
      .exactOptional()
      .openapi({ description: 'Refer to the accounts section below' }),
  })
  .openapi({ required: [] })
  .openapi('TrialBalanceResponse')

const TotalDetailSchema = z
  .strictObject({
    totalPaid: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total paid invoice and cash value within the period.',
        'x-is-money': true,
      }),
    totalOutstanding: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total outstanding invoice value within the period.',
        'x-is-money': true,
      }),
    totalCreditedUnApplied: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total unapplied credited value within the period.',
        'x-is-money': true,
      }),
  })
  .openapi({ required: [] })
  .openapi('TotalDetail')

const TotalOtherSchema = z
  .strictObject({
    totalOutstandingAged: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total outstanding invoice value within the period where the invoices are more than 90 days old',
        'x-is-money': true,
      }),
    totalVoided: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total voided value.', 'x-is-money': true }),
    totalCredited: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total credited value.', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('TotalOther')

const ContactTotalDetailSchema = z
  .strictObject({
    totalPaid: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total paid invoice and cash value for the contact within the period.',
        'x-is-money': true,
      }),
    totalOutstanding: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total outstanding invoice value for the contact within the period.',
        'x-is-money': true,
      }),
    totalCreditedUnApplied: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total unapplied credited value for the contact within the period.',
        'x-is-money': true,
      }),
  })
  .openapi({ required: [] })
  .openapi('ContactTotalDetail')

const ContactTotalOtherSchema = z
  .strictObject({
    totalOutstandingAged: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total outstanding invoice value for the contact within the period where the invoices are more than 90 days old',
        'x-is-money': true,
      }),
    totalVoided: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total voided value for the contact.', 'x-is-money': true }),
    totalCredited: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total credited value for the contact.', 'x-is-money': true }),
    transactionCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of transactions for the contact.' }),
  })
  .openapi({ required: [] })
  .openapi('ContactTotalOther')

const ContactDetailSchema = z
  .strictObject({
    contactId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the contact associated with the transactions.\r\n\r\nTransactions with no contact will be grouped under the special ID: 86793108-198C-46D8-90A3-43C1D12686CE.\r\n\r\nTransactions that are receive or spend bank transfers will be grouped under the special ID: 207322B3-6A58-4BE7-80F1-430123914AD6',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the contact associated with the transactions.\r\n\r\nIf no contact is associated with the transactions this will appear as “None Provided”,\r\n\r\nFor receive or spend bank transfer transactions, this will appear as “Bank Transfer”.',
      }),
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total value for the contact', 'x-is-money': true }),
    totalDetail: ContactTotalDetailSchema.exactOptional(),
    totalOther: ContactTotalOtherSchema.exactOptional(),
    accountCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of account codes involved in transactions.' }),
  })
  .openapi({ required: [] })
  .openapi('ContactDetail')

const ManualJournalTotalSchema = z
  .strictObject({
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total value of manual journals.', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('ManualJournalTotal')

const IncomeByContactResponseSchema = z
  .strictObject({
    startDate: z.iso.date().exactOptional().openapi({ description: 'Start date of the report' }),
    endDate: z.iso.date().exactOptional().openapi({ description: 'End date of the report' }),
    total: z.float64().exactOptional().openapi({ description: 'Total value', 'x-is-money': true }),
    totalDetail: TotalDetailSchema.exactOptional(),
    totalOther: TotalOtherSchema.exactOptional(),
    contacts: z.array(ContactDetailSchema).exactOptional(),
    manualJournals: ManualJournalTotalSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IncomeByContactResponse')

const ContactResponseSchema = z
  .strictObject({
    contactId: z.uuid().exactOptional().openapi({ description: 'Xero Identifier of contact' }),
    contactName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full name of contact/organisation' }),
  })
  .openapi({ required: [] })
  .openapi('ContactResponse')

const LineItemResponseSchema = z
  .strictObject({
    accountId: z.uuid().exactOptional().openapi({ description: 'Xero Identifier of account' }),
    reportingCode: z.string().exactOptional().openapi({ description: 'Shown if set' }),
    lineAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Amount of line item', 'x-is-money': true }),
    accountType: z.string().exactOptional().openapi({ description: 'Account type' }),
  })
  .openapi({ required: [] })
  .openapi('LineItemResponse')

const InvoiceResponseSchema = z
  .strictObject({
    invoiceId: z.uuid().exactOptional().openapi({ description: 'Xero Identifier of invoice' }),
    contact: ContactResponseSchema.exactOptional(),
    total: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total of Invoice tax inclusive (i.e. SubTotal + TotalTax); Not included in summary mode',
        'x-is-money': true,
      }),
    lineItems: z
      .array(LineItemResponseSchema)
      .exactOptional()
      .openapi({ description: 'Not included in summary mode' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceResponse')

const CreditNoteResponseSchema = z
  .strictObject({
    creditNoteId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero Identifier of credit note' }),
    contact: ContactResponseSchema.exactOptional(),
    total: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total of Invoice tax inclusive (i.e. SubTotal + TotalTax); Not included in summary mode',
        'x-is-money': true,
      }),
    lineItems: z
      .array(LineItemResponseSchema)
      .exactOptional()
      .openapi({ description: 'Not included in summary mode' }),
  })
  .openapi({ required: [] })
  .openapi('CreditNoteResponse')

const PrepaymentResponseSchema = z
  .strictObject({
    prepaymentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero Identifier of prepayment' }),
    contact: ContactResponseSchema.exactOptional(),
    total: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total of Invoice tax inclusive (i.e. SubTotal + TotalTax); Not included in summary mode',
        'x-is-money': true,
      }),
    lineItems: z
      .array(LineItemResponseSchema)
      .exactOptional()
      .openapi({ description: 'Not included in summary mode' }),
  })
  .openapi({ required: [] })
  .openapi('PrepaymentResponse')

const OverpaymentResponseSchema = z
  .strictObject({
    overpaymentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero Identifier of overpayment' }),
    contact: ContactResponseSchema.exactOptional(),
    total: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total of Invoice tax inclusive (i.e. SubTotal + TotalTax); Not included in summary mode',
        'x-is-money': true,
      }),
    lineItems: z
      .array(LineItemResponseSchema)
      .exactOptional()
      .openapi({ description: 'Not included in summary mode' }),
  })
  .openapi({ required: [] })
  .openapi('OverpaymentResponse')

const PaymentResponseSchema = z
  .strictObject({
    paymentId: z.uuid().exactOptional().openapi({ description: 'Xero Identifier of payment' }),
    batchPaymentId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Xero Identifier of batch payment. Present if the payment was created as part of a batch.',
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the payment is being made (YYYY-MM-DD) e.g. 2009-09-06' }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the payment', 'x-is-money': true }),
    bankAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The bank amount of the payment', 'x-is-money': true }),
    currencyRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Exchange rate when payment is received. Only used for non base currency invoices and credit notes e.g. 0.7500',
      }),
    invoice: InvoiceResponseSchema.exactOptional(),
    creditNote: CreditNoteResponseSchema.exactOptional(),
    prepayment: PrepaymentResponseSchema.exactOptional(),
    overpayment: OverpaymentResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentResponse')

const BankTransactionResponseSchema = z
  .strictObject({
    bankTransactionId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero Identifier of transaction' }),
    batchPaymentId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Xero Identifier of batch payment. Present if the transaction is part of a batch.',
      }),
    contact: ContactResponseSchema.exactOptional(),
    date: z.iso.date().exactOptional().openapi({ description: 'Date of transaction - YYYY-MM-DD' }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Amount of transaction', 'x-is-money': true }),
    lineItems: z
      .array(LineItemResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The LineItems element can contain any number of individual LineItem sub-elements. Not included in summary mode',
      }),
  })
  .openapi({ required: [] })
  .openapi('BankTransactionResponse')

const StatementLineResponseSchema = z
  .strictObject({
    statementLineId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero Identifier of statement line' }),
    postedDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date of when statement line was posted' }),
    payee: z
      .string()
      .exactOptional()
      .openapi({ description: 'Payee description of statement line' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reference description of statement line' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Notes description of statement line' }),
    chequeNo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cheque number of statement line' }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Amount of statement line', 'x-is-money': true }),
    transactionDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Transaction date of statement line' }),
    type: z.string().exactOptional().openapi({ description: 'Type of statement line' }),
    isReconciled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean to show if statement line is reconciled' }),
    isDuplicate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean to show if statement line is duplicate' }),
    isDeleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean to show if statement line is deleted' }),
    payments: z
      .array(PaymentResponseSchema)
      .exactOptional()
      .openapi({ description: 'List of payments associated with reconciled statement lines' }),
    bankTransactions: z
      .array(BankTransactionResponseSchema)
      .exactOptional()
      .openapi({
        description: 'List of bank transactions associated with reconciled statement lines',
      }),
  })
  .openapi({ required: [] })
  .openapi('StatementLineResponse')

const StatementResponseSchema = z
  .strictObject({
    statementId: z.uuid().exactOptional().openapi({ description: 'Xero Identifier of statement' }),
    startDate: z.iso.date().exactOptional().openapi({ description: 'Start date of statement' }),
    endDate: z.iso.date().exactOptional().openapi({ description: 'End date of statement' }),
    importedDateTimeUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Utc date time of when the statement was imported in Xero' }),
    importSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies where the statement data in Xero was sourced, 1) direct bank feed, automatically loaded from the bank (eg STMTIMPORTSRC/CBAFEED); 2) indirect bank feed, automatically loaded from a 3rd party provider (eg STMTIMPORTSRC/YODLEE); 3) manually uploaded bank feed (eg STMTIMPORTSRC/CSV) or 4) manually entered statement data (STMTIMPORTSRC/MANUAL).',
      }),
    startBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Opening balance sourced from imported bank statements (if supplied). Note, for manually uploaded statements, this balance is also manual and usually not supplied. Where not supplied, the value will be 0.',
        'x-is-money': true,
      }),
    endBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Closing balance sourced from imported bank statements (if supplied). Note, for manually uploaded statements, this balance is also manual and usually not supplied. Where not supplied, the value will be 0.',
        'x-is-money': true,
      }),
    indicativeStartBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Opening statement balance calculated in Xero (= bank account conversion balance plus sum of imported bank statement lines). Note: If indicative statement balance doesn't match imported statement balance for the same date, either the conversion (opening at inception) balance in Xero is wrong or there's an error in the bank statement lines in Xero. Ref: https://central.xero.com/s/article/Compare-the-statement-balance-in-Xero-to-your-actual-bank-balance?userregion=true\n",
        'x-is-money': true,
      }),
    indicativeEndBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Closing statement balance calculated in Xero (= bank account conversion balance plus sum of imported bank statement lines). Note: If indicative statement balance doesn't match imported statement balance for the same date, either the conversion (opening at inception) balance in Xero is wrong or there's an error in the bank statement lines in Xero. Ref: https://central.xero.com/s/article/Compare-the-statement-balance-in-Xero-to-your-actual-bank-balance?userregion=true \n",
        'x-is-money': true,
      }),
    statementLines: z
      .array(StatementLineResponseSchema)
      .exactOptional()
      .openapi({ description: 'List of statement lines' }),
  })
  .openapi({ required: [] })
  .openapi('StatementResponse')

const BankStatementAccountingResponseSchema = z
  .strictObject({
    bankAccountId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero Identifier of bank account' }),
    bankAccountName: z.string().exactOptional().openapi({ description: 'Name of bank account' }),
    bankAccountCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currency code of the bank account' }),
    statements: z
      .array(StatementResponseSchema)
      .exactOptional()
      .openapi({
        description: 'List of bank statements and linked accounting data for the requested period',
      }),
  })
  .openapi({ required: [] })
  .openapi('BankStatementAccountingResponse')

const RequiredHeaderParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'xero-tenant-id',
      'x-snake': 'xero_tenant_id',
      description: 'Xero identifier for Tenant',
      example: 'YOUR_XERO_TENANT_ID',
      schema: { type: 'string' },
      required: true,
    },
  })

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description: 'For more information',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: {
        email: 'Grant read-only access to your email',
        openid: 'Grant read-only access to your open id',
        profile: 'your profile information',
        'finance.statements.read': 'Grant read-only access to finacial statements',
        'finance.cashvalidation.read':
          'Grant read-only access to bank statement and reconcilation data',
        'finance.bankstatementsplus.read':
          'Grant read-only access to bank statements accounting data',
      },
    },
  },
}

export const getCashValidationRoute = createRoute({
  method: 'get',
  path: '/CashValidation',
  tags: ['Finance'],
  summary: 'Get cash validation',
  description: 'Summarizes the total cash position for each account for an org',
  operationId: 'getCashValidation',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      balanceDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'balanceDate',
            'x-snake': 'balance_date',
            in: 'query',
            description:
              'date, yyyy-MM-dd \r\n\r\nIf no parameter is provided, the current date will be used.\r\n\r\nThe ‘balance date’ will return transactions based on the accounting date entered by the user.  Transactions before the balanceDate will be included.\r\nThe user has discretion as to which accounting period the transaction relates to.\r\n\r\nThe ‘balance date’  will control the latest maximum date of transactions included in the aggregate numbers.  Balance date does not affect the CurrentStatement object, as this will always return the most recent statement before asAtSystemDate (if specified)',
            schema: { type: 'string' },
            example: '2021-09-15',
            required: false,
          },
        }),
      asAtSystemDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'asAtSystemDate',
            'x-snake': 'as_at_system_date',
            in: 'query',
            description:
              'date, yyyy-MM-dd \r\n\r\nIf no parameter is provided, the current date will be used.\r\n\r\nThe ‘as at’ date will return transactions based on the  creation date.  It reflects the date the transactions were entered into Xero, not the accounting date.\r\nThe ‘as at’ date can not be overridden by the user.  This can be used to estimate a ‘historical frequency of reconciliation’.\r\n\r\nThe ‘as at’ date will affect the current statement in the response, as any candidate statements created after this date will be filtered out.  Thus the current statement returned will be the most recent statement prior to the specified ‘as at’ date.  Be aware that neither the begin date, nor the balance date, will affect the current statement.\r\n\r\nNote;  information is only presented when system architecture allows, meaning historical cash validation information will be an estimate. In addition, delete events are not aware of the ‘as at’ functionality in this endpoint, meaning that transactions deleted at the time the API is accessed will be considered to always have been deleted.',
            schema: { type: 'string' },
            example: '2021-09-15',
            required: false,
          },
        }),
      beginDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beginDate',
            'x-snake': 'begin_date',
            in: 'query',
            description:
              'date, yyyy-MM-dd \r\n\r\nIf no parameter is provided, the aggregate results will be drawn from the user’s total history.\r\n\r\nThe ‘begin date’ will return transactions based on the accounting date entered by the user. Transactions after the beginDate will be included.\r\nThe user has discretion as to which accounting period the transaction relates to.',
            schema: { type: 'string' },
            example: '2021-09-15',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(CashValidationResponseSchema),
          example: [
            {
              accountId: '73151de8-3676-4887-a021-edec960dd537',
              statementBalance: { value: 100, type: 'DEBIT' },
              statementBalanceDate: '2021-03-01',
              bankStatement: {
                statementLines: {
                  unreconciledAmountPos: 4577,
                  unreconciledAmountNeg: -2367,
                  unreconciledLines: 8,
                  avgDaysUnreconciledPos: 112.265531,
                  avgDaysUnreconciledNeg: 149.298992,
                  earliestUnreconciledTransaction: '2019-03-01',
                  latestUnreconciledTransaction: '2021-03-01',
                  deletedAmount: 50,
                  totalAmount: 189,
                  dataSource: {
                    directBankFeed: 0,
                    fileUpload: 300,
                    manual: -188,
                    directBankFeedPos: 0,
                    fileUploadPos: 2223,
                    manualPos: 0,
                    directBankFeedNeg: 0,
                    fileUploadNeg: -1890,
                    manualNeg: -500,
                    otherPos: 0,
                    otherNeg: 0,
                    other: 100,
                  },
                  earliestReconciledTransaction: '2019-03-01',
                  latestReconciledTransaction: '2020-03-01',
                  reconciledAmountPos: 0,
                  reconciledAmountNeg: -288,
                  reconciledLines: 3,
                  totalAmountPos: 2245,
                  totalAmountNeg: -1995,
                },
                currentStatement: {
                  startDate: '2021-03-01',
                  endDate: '2021-03-01',
                  startBalance: 0,
                  endBalance: 0,
                  importedDateTimeUtc: '2021-03-09T05:22:14.3Z',
                  importSourceType: 'Manual',
                },
              },
              cashAccount: {
                unreconciledAmountPos: 1440,
                unreconciledAmountNeg: -1000,
                startingBalance: 0,
                accountBalance: 0,
                balanceCurrency: 'NZD',
              },
            },
          ],
        },
      },
    },
    400: {
      description: 'BadRequest',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'invalid-request',
            title: 'InvalidRequest',
            status: 400,
            detail: "Invalid BalanceDate: '2020-01'",
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['finance.cashvalidation.read'] }],
})

export const getFinancialStatementsBalanceSheetRoute = createRoute({
  method: 'get',
  path: '/FinancialStatements/BalanceSheet',
  tags: ['Finance'],
  summary: 'Get Balance Sheet report',
  description:
    'The balance sheet report is a standard financial report which describes the financial position of an organisation at a point in time.',
  operationId: 'getFinancialStatementBalanceSheet',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      balanceDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'balanceDate',
            'x-snake': 'balance_date',
            in: 'query',
            description:
              'Specifies the date for balance sheet report.\r\n\r\nFormat yyyy-MM-dd. If no parameter is provided, the current date will be used.',
            schema: { type: 'string' },
            example: '2020-06-30',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BalanceSheetResponseSchema,
          example: {
            balanceDate: '2021-05-12',
            asset: {
              accountTypes: [
                {
                  accountType: 'INVENTORY',
                  accounts: [
                    {
                      code: '630',
                      accountID: 'abcdeabc-80bb-47f5-9418-d1fc2241b838',
                      name: 'Inventory',
                      reportingCode: 'ASS.CUR.INY',
                      total: 3,
                    },
                  ],
                  total: 3,
                },
                {
                  accountType: 'CURRENT',
                  accounts: [
                    {
                      code: '610',
                      accountID: 'abcdeabc-b4d1-45a5-82f7-19deda692a31',
                      name: 'Accounts Receivable',
                      reportingCode: 'ASS.CUR.REC.TRA',
                      total: 100,
                    },
                  ],
                  total: 100,
                },
                {
                  accountType: 'BANK',
                  accounts: [
                    {
                      accountID: 'abcdeabc-3a6d-4c53-ba82-ea1c92d02ef4',
                      name: 'Buz Acc',
                      reportingCode: 'ASS',
                      total: -42.3,
                    },
                  ],
                  total: -42.3,
                },
              ],
              total: 60.7,
            },
            liability: {
              accountTypes: [
                {
                  accountType: 'CURRLIAB',
                  accounts: [
                    {
                      code: '820',
                      accountID: 'abcdeabc-40f7-49f1-ad89-1930c1366e5b',
                      name: 'GST',
                      reportingCode: 'LIA.CUR.TAX.GST',
                      total: 1.59,
                    },
                    {
                      code: '860',
                      accountID: 'abcdeabc-2877-4c00-be7d-475b1ded30d7',
                      name: 'Rounding',
                      reportingCode: 'LIA.CUR',
                      total: -0.1,
                    },
                    {
                      code: '800',
                      accountID: 'abcdeabc-80ba-4b58-8d72-f8e9ca0f2f00',
                      name: 'Accounts Payable',
                      reportingCode: 'LIA.CUR.PAY.TRA',
                      total: 44.4,
                    },
                  ],
                  total: 45.89,
                },
              ],
              total: 45.89,
            },
            equity: {
              accountTypes: [
                {
                  accountType: 'EQUITY',
                  accounts: [
                    {
                      accountID: '00000000-0000-0000-0000-000000000000',
                      name: 'Current Year Earnings',
                      total: 14.81,
                    },
                  ],
                  total: 14.81,
                },
              ],
              total: 14.81,
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'invalid-request',
            title: 'InvalidRequest',
            status: 400,
            detail: 'Organisation xxx does not exist',
          },
        },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'service-unavailable',
            title: 'ServiceUnavailable',
            status: 503,
            detail: 'Cannot process org xxx at this time. Apologies for inconvenience.',
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['finance.statements.read'] }],
})

export const getFinancialStatementsCashflowRoute = createRoute({
  method: 'get',
  path: '/FinancialStatements/Cashflow',
  tags: ['Finance'],
  summary: 'Get Cash flow report',
  description:
    'The statement of cash flows - direct method, provides the year to date changes in operating, financing and investing cash flow activities for an organisation. Cashflow statement is not available in US region at this stage.',
  operationId: 'getFinancialStatementCashflow',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            'x-snake': 'start_date',
            in: 'query',
            description:
              'Date e.g. yyyy-MM-dd\r\n\r\nSpecifies the start date for cash flow report.\r\n\r\nIf no parameter is provided, the date of 12 months before the end date will be used.',
            schema: { type: 'string' },
            example: '2020-09-15',
            required: false,
          },
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            'x-snake': 'end_date',
            in: 'query',
            description:
              'Date e.g. yyyy-MM-dd\r\n\r\nSpecifies the end date for cash flow report.\r\n\r\nIf no parameter is provided, the current date will be used.',
            schema: { type: 'string' },
            example: '2021-09-15',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: CashflowResponseSchema,
          example: {
            startDate: '2018-07-01',
            endDate: '2019-06-30',
            cashBalance: {
              openingCashBalance: 5000,
              closingCashBalance: -50000,
              netCashMovement: -55000,
            },
            cashflowActivities: [
              {
                name: 'Operating Activities',
                total: -41000,
                cashflowTypes: [
                  {
                    name: 'Receipts from customers',
                    total: 34000,
                    accounts: [
                      {
                        accountId: 'abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2',
                        accountType: 'REVENUE',
                        accountClass: 'REVENUE',
                        code: '455',
                        name: 'Cellar Door - Till Variance',
                        reportingCode: 'EXP',
                        total: -1000,
                      },
                      {
                        accountId: 'abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2',
                        accountType: 'CURRENT',
                        accountClass: 'ASSET',
                        code: '123',
                        name: "Loan - Darleen's",
                        reportingCode: 'ASS',
                        total: 35000,
                      },
                    ],
                  },
                  {
                    name: 'Payments to suppliers and employees',
                    total: -75000,
                    accounts: [
                      {
                        accountId: 'abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2',
                        accountType: 'CURRENT',
                        accountClass: 'ASSET',
                        code: '123',
                        name: "Loan - Darleen's",
                        reportingCode: 'ASS',
                        total: -75000,
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Investing Activities',
                total: -35000,
                cashflowTypes: [
                  {
                    name: 'Payment for property, plant and equipment',
                    total: -36000,
                    accounts: [
                      {
                        accountId: 'abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2',
                        accountType: 'FIXED',
                        accountClass: 'ASSET',
                        code: '138',
                        name: 'Motor Vehicles at Cost',
                        reportingCode: 'ASS',
                        total: -1000,
                      },
                      {
                        accountId: 'abcdefab-5353-9d4b-7cad-51b2c2a2754a',
                        accountType: 'FIXED',
                        accountClass: 'ASSET',
                        code: '140',
                        name: 'Equipment at cost',
                        reportingCode: 'ASS',
                        total: -35000,
                      },
                    ],
                  },
                  {
                    name: 'Proceeds from sale of property, plant and equipment',
                    total: 1000,
                    accounts: [
                      {
                        accountId: 'abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2',
                        accountType: 'FIXED',
                        accountClass: 'ASSET',
                        code: '138',
                        name: 'Motor Vehicles at Cost',
                        reportingCode: 'ASS',
                        total: 1000,
                      },
                      {
                        accountId: 'abcdefab-5353-9d4b-7cad-51b2c2a2754a',
                        accountType: 'FIXED',
                        accountClass: 'ASSET',
                        code: '140',
                        name: 'Equipment at cost',
                        reportingCode: 'ASS',
                        total: 0,
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Financing Activities',
                total: -14000,
                cashflowTypes: [
                  {
                    name: 'Proceeds from borrowings',
                    total: 1000.5,
                    accounts: [
                      {
                        accountId: 'abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2',
                        accountType: 'TERMLIAB',
                        accountClass: 'LIABILITY',
                        code: '244',
                        name: 'Loan - Shellcoll Distribution 2019',
                        reportingCode: 'LIA.CUR.LOA',
                        total: 1000.5,
                      },
                    ],
                  },
                  {
                    name: 'Repayment of borrowings',
                    total: -15000.5,
                    accounts: [
                      {
                        accountId: 'abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2',
                        accountType: 'TERMLIAB',
                        accountClass: 'LIABILITY',
                        code: '244',
                        name: 'Loan - Shellcoll Distribution 2019',
                        reportingCode: 'LIA.CUR.LOA',
                        total: -15000.5,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'invalid-request',
            title: 'InvalidRequest',
            status: 400,
            detail: 'Organisation xxx does not exist',
          },
        },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'service-unavailable',
            title: 'ServiceUnavailable',
            status: 503,
            detail: 'Cannot process org xxx at this time. Apologies for inconvenience.',
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['finance.statements.read'] }],
})

export const getFinancialStatementsProfitAndLossRoute = createRoute({
  method: 'get',
  path: '/FinancialStatements/ProfitAndLoss',
  tags: ['Finance'],
  summary: 'Get Profit & Loss report',
  description:
    'The profit and loss statement is a standard financial report providing detailed year to date income and expense detail for an organisation.',
  operationId: 'getFinancialStatementProfitAndLoss',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            'x-snake': 'start_date',
            in: 'query',
            description:
              'Date e.g. yyyy-MM-dd\r\n\r\nSpecifies the start date for profit and loss report\r\n\r\nIf no parameter is provided, the date of 12 months before the end date will be used.',
            schema: { type: 'string' },
            example: '2020-09-15',
            required: false,
          },
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            'x-snake': 'end_date',
            in: 'query',
            description:
              'Date e.g. yyyy-MM-dd\r\n\r\nSpecifies the end date for profit and loss report \r\n\r\nIf no parameter is provided, the current date will be used.',
            schema: { type: 'string' },
            example: '2021-09-15',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ProfitAndLossResponseSchema,
          example: {
            startDate: '2020-07-01',
            endDate: '2021-06-30',
            netProfitLoss: 123,
            revenue: {
              total: 20922.46,
              accountTypes: [
                {
                  total: 20825.41,
                  title: 'Trading Income',
                  accounts: [
                    {
                      accountID: 'abcdefab-2006-43c2-a5da-3c0e5f43b452',
                      accountType: 'REVENUE',
                      code: '200',
                      name: 'Sales',
                      reportingCode: 'REV',
                      total: 20825.41,
                    },
                  ],
                },
                {
                  total: 97.05,
                  title: 'Other Income',
                  accounts: [
                    {
                      accountID: 'abcdefab-4d63-4af8-937f-04087ae2e36e',
                      accountType: 'OTHERINCOME',
                      code: '270',
                      name: 'Interest Income',
                      reportingCode: 'REV.OTH',
                      total: 97.05,
                    },
                  ],
                },
              ],
            },
            expense: {
              total: 1282.06,
              accountTypes: [
                {
                  total: 1137.59,
                  title: 'Direct Cost',
                  accounts: [
                    {
                      accountID: 'abcdefab-d381-4bd6-ba47-7af927d25825',
                      accountType: 'DIRECTCOSTS',
                      code: '300',
                      name: 'Purchases',
                      reportingCode: 'EXP.DC',
                      total: 1137.59,
                    },
                  ],
                },
                {
                  total: 144.47,
                  title: 'Operating Expenses',
                  accounts: [
                    {
                      accountID: 'abcdefab-f897-4168-b5d1-2279bf74bb82',
                      accountType: 'EXPENSE',
                      code: '453',
                      name: 'Office Expenses',
                      reportingCode: 'EXP',
                      total: 144.47,
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'invalid-request',
            title: 'InvalidRequest',
            status: 400,
            detail: 'Organisation xxx does not exist',
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['finance.statements.read'] }],
})

export const getFinancialStatementsTrialBalanceRoute = createRoute({
  method: 'get',
  path: '/FinancialStatements/TrialBalance',
  tags: ['Finance'],
  summary: 'Get Trial Balance report',
  description:
    'The trial balance provides a detailed list of all accounts of an organisation at a point in time, with revenue and expense items being year to date.',
  operationId: 'getFinancialStatementTrialBalance',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            'x-snake': 'end_date',
            in: 'query',
            description:
              'Date e.g. yyyy-MM-dd \r\n\r\nSpecifies the end date for trial balance report \r\n\r\nIf no parameter is provided, the current date will be used.',
            schema: { type: 'string' },
            example: '2021-09-15',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TrialBalanceResponseSchema,
          example: {
            startDate: '2020-07-01',
            endDate: '2021-06-30',
            accounts: [
              {
                accountId: 'abcdefab-3bbf-4f2a-9e4c-20ec7b8e6b41',
                accountType: 'ASSET',
                accountCode: 'ASS',
                accountClass: 'BANK',
                status: 'ACTIVE',
                reportingCode: 'ASS',
                accountName: 'Everyday transactions',
                balance: { value: 100, entryType: 'DEBIT' },
                signedBalance: -23,
                accountMovement: {
                  debits: 0,
                  credits: 0,
                  movement: { value: 123, entryType: 'CREDIT' },
                  signedMovement: 0,
                },
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'invalid-request',
            title: 'InvalidRequest',
            status: 400,
            detail: 'Organisation xxx does not exist',
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['finance.statements.read'] }],
})

export const getFinancialStatementsContactsRevenueRoute = createRoute({
  method: 'get',
  path: '/FinancialStatements/contacts/revenue',
  tags: ['Finance'],
  summary: 'Get revenue by contacts report',
  description:
    'The revenue by contact report provides a year to date profit and loss for customers and suppliers for a given organisation, including detailed contact information.',
  operationId: 'getFinancialStatementContactsRevenue',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      contactIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'contactIds',
            'x-snake': 'contact_ids',
            in: 'query',
            description:
              'Specifies the customer contacts to be included in the report.\r\n\r\nIf no parameter is provided, all customer contacts will be included',
            schema: {
              type: 'array',
              example: [
                '00000000-0000-0000-0000-000000000000',
                '00000000-0000-0000-0000-000000000000',
              ],
              items: { type: 'string', format: 'uuid' },
            },
            required: false,
          },
          example: ['00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000'],
        }),
      includeManualJournals: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeManualJournals',
            'x-snake': 'include_manual_journals',
            in: 'query',
            description:
              'Specifies whether to include the manual journals in the report.\r\n            \r\nIf no parameter is provided, manual journals will not be included.',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            'x-snake': 'start_date',
            in: 'query',
            description:
              'Date yyyy-MM-dd\r\n\r\nSpecifies the start date for the report.\r\n            \r\nIf no parameter is provided, the date of 12 months before the end date will be used.\r\n            \r\nIt is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.',
            example: '2020-09-15',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            'x-snake': 'end_date',
            in: 'query',
            description:
              'Date yyyy-MM-dd\r\n\r\nSpecifies the end date for the report.\r\n\r\nIf no parameter is provided, the current date will be used.\r\n            \r\nIt is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.',
            example: '2020-09-15',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: IncomeByContactResponseSchema,
          example: {
            startDate: '2019-10-17',
            endDate: '2020-10-16',
            total: 1200,
            totalDetail: { totalPaid: 400, totalOutstanding: 1000, totalCreditedUnApplied: 200 },
            totalOther: { totalOutstandingAged: 1000, totalVoided: 150, totalCredited: 10 },
            contacts: [
              {
                id: '1f580fe2-0659-31ee-eeb4-5c49d15d8bfa',
                name: 'FirstContact',
                total: 1400,
                totalDetail: { totalPaid: 400, totalOutstanding: 1000, totalCreditedUnApplied: 0 },
                totalOther: {
                  totalOutstandingAged: 1000,
                  totalVoided: 150,
                  totalCredited: 0,
                  transactionCount: 3,
                },
                accountCodes: ['090', '200', '09-BANK'],
              },
              {
                id: '20e94281-4751-fb7e-ee5e-96b43ae93c8a',
                name: 'SecondContact',
                total: -200,
                totalDetail: { totalPaid: 10, totalOutstanding: 20, totalCreditedUnApplied: 200 },
                totalOther: {
                  totalOutstandingAged: 2,
                  totalVoided: 3,
                  totalCredited: 4,
                  transactionCount: 1,
                },
                accountCodes: ['900'],
              },
            ],
            manualJournals: { total: -100 },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'invalid-request',
            title: 'InvalidRequest',
            status: 400,
            detail: 'Organisation xxx does not exist',
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['finance.statements.read'] }],
})

export const getFinancialStatementsContactsExpenseRoute = createRoute({
  method: 'get',
  path: '/FinancialStatements/contacts/expense',
  tags: ['Finance'],
  summary: 'Get expense by contacts report',
  description:
    'The expense by contact report provides a year to date profit and loss for customers and suppliers for a given organisation, including detailed contact information.',
  operationId: 'getFinancialStatementContactsExpense',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      contactIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'contactIds',
            'x-snake': 'contact_ids',
            in: 'query',
            description:
              'Specifies the customer contacts to be included in the report.\r\n\r\nIf no parameter is provided, all customer contacts will be included',
            schema: {
              type: 'array',
              example: [
                '00000000-0000-0000-0000-000000000000',
                '00000000-0000-0000-0000-000000000000',
              ],
              items: { type: 'string', format: 'uuid' },
            },
            required: false,
          },
          example: ['00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000'],
        }),
      includeManualJournals: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeManualJournals',
            'x-snake': 'include_manual_journals',
            in: 'query',
            description:
              'Specifies whether to include the manual journals in the report.\r\n            \r\nIf no parameter is provided, manual journals will not be included.',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            'x-snake': 'start_date',
            in: 'query',
            description:
              'Date yyyy-MM-dd\r\n\r\nSpecifies the start date for the report.\r\n            \r\nIf no parameter is provided, the date of 12 months before the end date will be used.\r\n            \r\nIt is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.',
            example: '2020-09-15',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            'x-snake': 'end_date',
            in: 'query',
            description:
              'Date yyyy-MM-dd\r\n\r\nSpecifies the end date for the report.\r\n\r\nIf no parameter is provided, the current date will be used.\r\n            \r\nIt is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.',
            example: '2020-09-15',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: IncomeByContactResponseSchema,
          example: {
            startDate: '2019-10-17',
            endDate: '2020-10-16',
            total: 1200,
            totalDetail: { totalPaid: 400, totalOutstanding: 1000, totalCreditedUnApplied: 200 },
            totalOther: { totalOutstandingAged: 1000, totalVoided: 150, totalCredited: 10 },
            contacts: [
              {
                id: '1f580fe2-0659-31ee-eeb4-5c49d15d8bfa',
                name: 'FirstContact',
                total: 1400,
                totalDetail: { totalPaid: 400, totalOutstanding: 1000, totalCreditedUnApplied: 0 },
                totalOther: {
                  totalOutstandingAged: 1000,
                  totalVoided: 150,
                  totalCredited: 0,
                  transactionCount: 3,
                },
                accountCodes: ['090', '200', '09-BANK'],
              },
              {
                id: '20e94281-4751-fb7e-ee5e-96b43ae93c8a',
                name: 'SecondContact',
                total: -200,
                totalDetail: { totalPaid: 0, totalOutstanding: 0, totalCreditedUnApplied: 200 },
                totalOther: {
                  totalOutstandingAged: 2,
                  totalVoided: 3,
                  totalCredited: 4,
                  transactionCount: 1,
                },
                accountCodes: ['900'],
              },
            ],
            manualJournals: { total: -100 },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'invalid-request',
            title: 'InvalidRequest',
            status: 400,
            detail: 'Organisation xxx does not exist',
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['finance.statements.read'] }],
})

export const getBankStatementsPlusStatementsRoute = createRoute({
  method: 'get',
  path: '/BankStatementsPlus/statements',
  tags: ['Finance'],
  summary: 'Get Bank Statement Accounting',
  description:
    "For lenders that prefer using bank statement data as the source of truth.  We provide a data point that will allow access to customer bank statements, plus for reconciled bank transactions the matching accounting, invoice and billing data as well.  As customers reconcile bank statements to invoices and bills, this transaction detail will provide valuable insight for lender's assessment measures. ",
  operationId: 'getBankStatementAccounting',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      BankAccountID: z
        .uuid()
        .openapi({
          param: {
            name: 'BankAccountID',
            'x-snake': 'bank_account_id',
            in: 'query',
            description: 'string, GUID\r\n\r\nBank account Id',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      FromDate: z
        .string()
        .openapi({
          param: {
            name: 'FromDate',
            'x-snake': 'from_date',
            in: 'query',
            description:
              'date, yyyy-MM-dd \r\n\r\nSpecifies the start date of the query period. \r\nThe maximum range of the query period is 12 months. If the specified query period is more than 12 months the request will be rejected.',
            required: true,
            schema: { type: 'string', example: '2020-07-01' },
            example: '2020-07-01',
          },
          example: '2020-07-01',
        }),
      ToDate: z
        .string()
        .openapi({
          param: {
            name: 'ToDate',
            'x-snake': 'to_date',
            in: 'query',
            description:
              'date, yyyy-MM-dd \r\n\r\nSpecifies the end date of the query period. \r\nIf the end date is a future date, the request will be rejected.',
            required: true,
            schema: { type: 'string', example: '2021-06-30' },
            example: '2021-06-30',
          },
          example: '2021-06-30',
        }),
      SummaryOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'SummaryOnly',
            'x-snake': 'summary_only',
            in: 'query',
            description:
              'boolean, true/false\r\n\r\nThe default value is true if no parameter is provided.\r\n\r\nIn summary mode, the response will exclude the computation-heavy LineItems fields from bank transaction, invoice, credit note, prepayment and overpayment data, making the API calls quicker and more efficient.',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BankStatementAccountingResponseSchema,
          example: {
            bankAccountId: '1234eee9-47f0-4179-bd46-9adb4f21cc7f',
            bankAccountName: 'ANZ BANK',
            bankAccountCurrencyCode: 'NZD',
            statements: [
              {
                statementId: '7c29eee9-47f0-4179-bd46-9adb4f21cc7f',
                startDate: '2021-01-01',
                endDate: '2021-01-02',
                importedDateTimeUtc: '2021-01-02T12:00:00Z',
                importSource: 'STMTIMPORTSRC/MANUAL',
                startBalance: 10,
                endBalance: 200,
                indicativeStartBalance: 10,
                indicativeEndBalance: 200,
                statementLines: [
                  {
                    statementLineId: '1234eee9-47f0-4179-bd46-9adb4f21cc7f',
                    postedDate: '2021-01-01',
                    payee: 'ACME Thneeds ABC1234567890 SYDNEY',
                    reference: 'Eft',
                    notes: 'payment to bank',
                    chequeNo: '123',
                    amount: 100,
                    transactionDate: '2021-01-01',
                    type: 'Debit',
                    isReconciled: true,
                    isDuplicate: false,
                    isDeleted: false,
                    payments: [
                      {
                        paymentId: '47ec8431-23c2-4ef9-90e5-b440fe55d086',
                        batchPaymentId: 'ecc83387-ffaa-4023-b111-b3fd9e3e4a8e',
                        date: '2021-01-01',
                        amount: 80,
                        bankAmount: 80,
                        currencyRate: 1,
                        invoice: {
                          invoiceId: 'c01dd6ac-8835-4bf2-af8b-841db9534d7f',
                          contact: {
                            contactId: '1234eee9-47f0-4179-bd46-9adb4f21cc7f',
                            contactName: 'Bob',
                          },
                          total: 80,
                          lineItems: [
                            {
                              accountId: 'f7fe1049-d1cf-4d10-9df1-67a6e363015f',
                              reportingCode: 'REV.OTH',
                              lineAmount: 80,
                              accountType: 'REVENUE',
                            },
                          ],
                        },
                      },
                      {
                        paymentId: '54e8eee0-91a7-4a4d-bb9b-957302a2760a',
                        batchPaymentId: 'ecc83387-ffaa-4023-b111-b3fd9e3e4a8e',
                        date: '2021-01-01',
                        amount: 15,
                        bankAmount: 15,
                        currencyRate: 1,
                        creditNote: {
                          creditNoteId: 'c346d6a5-f013-4207-bc70-f2dd80a5f37f',
                          contact: {
                            contactId: '1234eee9-47f0-4179-bd46-9adb4f21cc7f',
                            contactName: 'Bob',
                          },
                          total: 15,
                          lineItems: [
                            {
                              accountId: 'f7fe1049-d1cf-4d10-9df1-67a6e363015f',
                              reportingCode: 'REV.OTH',
                              lineAmount: 15,
                              accountType: 'REVENUE',
                            },
                          ],
                        },
                      },
                      {
                        paymentId: 'f94dad64-658c-491f-b901-05d38e9e8702',
                        date: '2021-01-01',
                        amount: 5,
                        bankAmount: 5,
                        currencyRate: 1,
                        prepayment: {
                          prepaymentId: '995f81ae-0afd-4c84-bbe1-90bc7dfa4372',
                          contact: {
                            contactId: '1234eee9-47f0-4179-bd46-9adb4f21cc7f',
                            contactName: 'Bob',
                          },
                          total: 5,
                          lineItems: [
                            {
                              accountId: 'f7fe1049-d1cf-4d10-9df1-67a6e363015f',
                              reportingCode: 'REV.OTH',
                              lineAmount: 5,
                              accountType: 'REVENUE',
                            },
                          ],
                        },
                      },
                      {
                        paymentId: '6ffbe999-04c8-42d2-bf16-13947c5f1036',
                        date: '2021-01-01',
                        amount: 5,
                        bankAmount: 5,
                        currencyRate: 1,
                        overpayment: {
                          overpaymentId: '06575718-5100-4e02-8fbf-c2731a112836',
                          contact: {
                            contactId: '1234eee9-47f0-4179-bd46-9adb4f21cc7f',
                            contactName: 'Bob',
                          },
                          total: 5,
                          lineItems: [
                            {
                              accountId: 'f7fe1049-d1cf-4d10-9df1-67a6e363015f',
                              reportingCode: 'REV.OTH',
                              lineAmount: 5,
                              accountType: 'REVENUE',
                            },
                          ],
                        },
                      },
                    ],
                    bankTransactions: [
                      {
                        bankTransactionId: '55edf88c-6bf6-459a-bd9b-7f250df62eb2',
                        batchPaymentId: '2dce9b39-0427-41af-9739-9510e3b68211',
                        contact: {
                          contactId: '1234eee9-47f0-4179-bd46-9adb4f21cc7f',
                          contactName: 'Bob',
                        },
                        date: '2021-01-01',
                        amount: 20,
                        lineItems: [
                          {
                            accountId: 'f7fe1049-d1cf-4d10-9df1-67a6e363015f',
                            reportingCode: 'REV.OTH',
                            lineAmount: 20,
                            accountType: 'REVENUE',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'BadRequest',
      content: {
        'application/json': {
          schema: ProblemSchema,
          example: {
            type: 'invalid-request',
            title: 'InvalidRequest',
            status: 400,
            detail: 'AccountId was not supplied',
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['finance.bankstatementsplus.read'] }],
})
