import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCashValidation(
  args: InferRequestType<typeof client.CashValidation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CashValidation.$get(args, options))
}

export async function getFinancialStatementsBalanceSheet(
  args: InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FinancialStatements.BalanceSheet.$get(args, options))
}

export async function getFinancialStatementsCashflow(
  args: InferRequestType<typeof client.FinancialStatements.Cashflow.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FinancialStatements.Cashflow.$get(args, options))
}

export async function getFinancialStatementsProfitAndLoss(
  args: InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FinancialStatements.ProfitAndLoss.$get(args, options))
}

export async function getFinancialStatementsTrialBalance(
  args: InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FinancialStatements.TrialBalance.$get(args, options))
}

export async function getFinancialStatementsContactsRevenue(
  args: InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FinancialStatements.contacts.revenue.$get(args, options))
}

export async function getFinancialStatementsContactsExpense(
  args: InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FinancialStatements.contacts.expense.$get(args, options))
}

export async function getBankStatementsPlusStatements(
  args: InferRequestType<typeof client.BankStatementsPlus.statements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankStatementsPlus.statements.$get(args, options))
}
