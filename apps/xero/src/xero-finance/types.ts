type StatementBalanceResponse = { value?: number | undefined; type?: string | undefined }
type DataSourceResponse = {
  directBankFeed?: number | undefined
  fileUpload?: number | undefined
  manual?: number | undefined
  directBankFeedPos?: number | undefined
  fileUploadPos?: number | undefined
  manualPos?: number | undefined
  directBankFeedNeg?: number | undefined
  fileUploadNeg?: number | undefined
  manualNeg?: number | undefined
  otherPos?: number | undefined
  otherNeg?: number | undefined
  other?: number | undefined
}
type StatementLinesResponse = {
  unreconciledAmountPos?: number | undefined
  unreconciledAmountNeg?: number | undefined
  unreconciledLines?: number | undefined
  avgDaysUnreconciledPos?: number | undefined
  avgDaysUnreconciledNeg?: number | undefined
  earliestUnreconciledTransaction?: string | undefined
  latestUnreconciledTransaction?: string | undefined
  deletedAmount?: number | undefined
  totalAmount?: number | undefined
  dataSource?: DataSourceResponse | undefined
  earliestReconciledTransaction?: string | undefined
  latestReconciledTransaction?: string | undefined
  reconciledAmountPos?: number | undefined
  reconciledAmountNeg?: number | undefined
  reconciledLines?: number | undefined
  totalAmountPos?: number | undefined
  totalAmountNeg?: number | undefined
}
type CurrentStatementResponse = {
  startDate?: string | undefined
  endDate?: string | undefined
  startBalance?: number | undefined
  endBalance?: number | undefined
  importedDateTimeUtc?: string | undefined
  importSourceType?: string | undefined
}
type BankStatementResponse = {
  statementLines?: StatementLinesResponse | undefined
  currentStatement?: CurrentStatementResponse | undefined
}
type CashAccountResponse = {
  unreconciledAmountPos?: number | undefined
  unreconciledAmountNeg?: number | undefined
  startingBalance?: number | undefined
  accountBalance?: number | undefined
  balanceCurrency?: string | undefined
}
type CashValidationResponse = {
  accountId?: string | undefined
  statementBalance?: StatementBalanceResponse | undefined
  statementBalanceDate?: string | undefined
  bankStatement?: BankStatementResponse | undefined
  cashAccount?: CashAccountResponse | undefined
}
type ProblemType =
  | 'NotSet'
  | 'bank-account-not-found'
  | 'internal-error'
  | 'invalid-application'
  | 'invalid-request'
  | 'organisation-not-found'
  | 'organisation-offline'
  | 'request-timeout'
  | 'service-unavailable'
  | 'unauthorized'
  | 'rate-limit-error'
type Problem = {
  type?: ProblemType | undefined
  title?: string | undefined
  status?: number | undefined
  detail?: string | undefined
}
type BalanceSheetAccountDetail = {
  code?: string | undefined
  accountID?: string | undefined
  name?: string | undefined
  reportingCode?: string | undefined
  total?: number | undefined
}
type BalanceSheetAccountType = {
  accountType?: string | undefined
  accounts?: BalanceSheetAccountDetail[] | undefined
  total?: number | undefined
}
type BalanceSheetAccountGroup = {
  accountTypes?: BalanceSheetAccountType[] | undefined
  total?: number | undefined
}
type BalanceSheetResponse = {
  balanceDate?: string | undefined
  asset?: BalanceSheetAccountGroup | undefined
  liability?: BalanceSheetAccountGroup | undefined
  equity?: BalanceSheetAccountGroup | undefined
}
type CashBalance = {
  openingCashBalance?: number | undefined
  closingCashBalance?: number | undefined
  netCashMovement?: number | undefined
}
type CashflowAccount = {
  accountId?: string | undefined
  accountType?: string | undefined
  accountClass?: string | undefined
  code?: string | undefined
  name?: string | undefined
  reportingCode?: string | undefined
  total?: number | undefined
}
type CashflowType = {
  name?: string | undefined
  total?: number | undefined
  accounts?: CashflowAccount[] | undefined
}
type CashflowActivity = {
  name?: string | undefined
  total?: number | undefined
  cashflowTypes?: CashflowType[] | undefined
}
type CashflowResponse = {
  startDate?: string | undefined
  endDate?: string | undefined
  cashBalance?: CashBalance | undefined
  cashflowActivities?: CashflowActivity[] | undefined
}
type PnlAccount = {
  accountID?: string | undefined
  accountType?: string | undefined
  code?: string | undefined
  name?: string | undefined
  reportingCode?: string | undefined
  total?: number | undefined
}
type PnlAccountType = {
  total?: number | undefined
  title?: string | undefined
  accounts?: PnlAccount[] | undefined
}
type PnlAccountClass = { total?: number | undefined; accountTypes?: PnlAccountType[] | undefined }
type ProfitAndLossResponse = {
  startDate?: string | undefined
  endDate?: string | undefined
  netProfitLoss?: number | undefined
  revenue?: PnlAccountClass | undefined
  expense?: PnlAccountClass | undefined
}
type TrialBalanceEntry = { value?: number | undefined; entryType?: string | undefined }
type TrialBalanceMovement = {
  debits?: number | undefined
  credits?: number | undefined
  movement?: TrialBalanceEntry | undefined
  signedMovement?: number | undefined
}
type TrialBalanceAccount = {
  accountId?: string | undefined
  accountType?: string | undefined
  accountCode?: string | undefined
  accountClass?: string | undefined
  status?: string | undefined
  reportingCode?: string | undefined
  accountName?: string | undefined
  balance?: TrialBalanceEntry | undefined
  signedBalance?: number | undefined
  accountMovement?: TrialBalanceMovement | undefined
}
type TrialBalanceResponse = {
  startDate?: string | undefined
  endDate?: string | undefined
  accounts?: TrialBalanceAccount[] | undefined
}
type TotalDetail = {
  totalPaid?: number | undefined
  totalOutstanding?: number | undefined
  totalCreditedUnApplied?: number | undefined
}
type TotalOther = {
  totalOutstandingAged?: number | undefined
  totalVoided?: number | undefined
  totalCredited?: number | undefined
}
type ContactTotalDetail = {
  totalPaid?: number | undefined
  totalOutstanding?: number | undefined
  totalCreditedUnApplied?: number | undefined
}
type ContactTotalOther = {
  totalOutstandingAged?: number | undefined
  totalVoided?: number | undefined
  totalCredited?: number | undefined
  transactionCount?: number | undefined
}
type ContactDetail = {
  contactId?: string | undefined
  name?: string | undefined
  total?: number | undefined
  totalDetail?: ContactTotalDetail | undefined
  totalOther?: ContactTotalOther | undefined
  accountCodes?: string[] | undefined
}
type ManualJournalTotal = { total?: number | undefined }
type IncomeByContactResponse = {
  startDate?: string | undefined
  endDate?: string | undefined
  total?: number | undefined
  totalDetail?: TotalDetail | undefined
  totalOther?: TotalOther | undefined
  contacts?: ContactDetail[] | undefined
  manualJournals?: ManualJournalTotal | undefined
}
type ContactResponse = { contactId?: string | undefined; contactName?: string | undefined }
type LineItemResponse = {
  accountId?: string | undefined
  reportingCode?: string | undefined
  lineAmount?: number | undefined
  accountType?: string | undefined
}
type InvoiceResponse = {
  invoiceId?: string | undefined
  contact?: ContactResponse | undefined
  total?: number | undefined
  lineItems?: LineItemResponse[] | undefined
}
type CreditNoteResponse = {
  creditNoteId?: string | undefined
  contact?: ContactResponse | undefined
  total?: number | undefined
  lineItems?: LineItemResponse[] | undefined
}
type PrepaymentResponse = {
  prepaymentId?: string | undefined
  contact?: ContactResponse | undefined
  total?: number | undefined
  lineItems?: LineItemResponse[] | undefined
}
type OverpaymentResponse = {
  overpaymentId?: string | undefined
  contact?: ContactResponse | undefined
  total?: number | undefined
  lineItems?: LineItemResponse[] | undefined
}
type PaymentResponse = {
  paymentId?: string | undefined
  batchPaymentId?: string | undefined
  date?: string | undefined
  amount?: number | undefined
  bankAmount?: number | undefined
  currencyRate?: number | undefined
  invoice?: InvoiceResponse | undefined
  creditNote?: CreditNoteResponse | undefined
  prepayment?: PrepaymentResponse | undefined
  overpayment?: OverpaymentResponse | undefined
}
type BankTransactionResponse = {
  bankTransactionId?: string | undefined
  batchPaymentId?: string | undefined
  contact?: ContactResponse | undefined
  date?: string | undefined
  amount?: number | undefined
  lineItems?: LineItemResponse[] | undefined
}
type StatementLineResponse = {
  statementLineId?: string | undefined
  postedDate?: string | undefined
  payee?: string | undefined
  reference?: string | undefined
  notes?: string | undefined
  chequeNo?: string | undefined
  amount?: number | undefined
  transactionDate?: string | undefined
  type?: string | undefined
  isReconciled?: boolean | undefined
  isDuplicate?: boolean | undefined
  isDeleted?: boolean | undefined
  payments?: PaymentResponse[] | undefined
  bankTransactions?: BankTransactionResponse[] | undefined
}
type StatementResponse = {
  statementId?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  importedDateTimeUtc?: string | undefined
  importSource?: string | undefined
  startBalance?: number | undefined
  endBalance?: number | undefined
  indicativeStartBalance?: number | undefined
  indicativeEndBalance?: number | undefined
  statementLines?: StatementLineResponse[] | undefined
}
type BankStatementAccountingResponse = {
  bankAccountId?: string | undefined
  bankAccountName?: string | undefined
  bankAccountCurrencyCode?: string | undefined
  statements?: StatementResponse[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/CashValidation': {
      $get:
        | {
            input: {
              query: {
                balanceDate?: string | undefined
                asAtSystemDate?: string | undefined
                beginDate?: string | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: CashValidationResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                balanceDate?: string | undefined
                asAtSystemDate?: string | undefined
                beginDate?: string | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/FinancialStatements/BalanceSheet': {
      $get:
        | {
            input: { query: { balanceDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: BalanceSheetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { balanceDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { balanceDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/FinancialStatements/Cashflow': {
      $get:
        | {
            input: { query: { startDate?: string | undefined; endDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: CashflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { startDate?: string | undefined; endDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { startDate?: string | undefined; endDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/FinancialStatements/ProfitAndLoss': {
      $get:
        | {
            input: { query: { startDate?: string | undefined; endDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: ProfitAndLossResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { startDate?: string | undefined; endDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/FinancialStatements/TrialBalance': {
      $get:
        | {
            input: { query: { endDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: TrialBalanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endDate?: string | undefined } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/FinancialStatements/contacts/revenue': {
      $get:
        | {
            input: {
              query: {
                contactIds?: string[] | undefined
                includeManualJournals?: boolean | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: IncomeByContactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                contactIds?: string[] | undefined
                includeManualJournals?: boolean | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/FinancialStatements/contacts/expense': {
      $get:
        | {
            input: {
              query: {
                contactIds?: string[] | undefined
                includeManualJournals?: boolean | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: IncomeByContactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                contactIds?: string[] | undefined
                includeManualJournals?: boolean | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BankStatementsPlus/statements': {
      $get:
        | {
            input: {
              query: {
                BankAccountID: string
                FromDate: string
                ToDate: string
                SummaryOnly?: boolean | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: BankStatementAccountingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                BankAccountID: string
                FromDate: string
                ToDate: string
                SummaryOnly?: boolean | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
