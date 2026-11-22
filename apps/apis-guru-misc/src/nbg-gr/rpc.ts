import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccountAccessConsents(
  args: InferRequestType<(typeof client)['account-access-consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-access-consents'].$post(args, options))
}

export async function getAccountAccessConsentsConsentId(
  args: InferRequestType<(typeof client)['account-access-consents'][':consentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-access-consents'][':consentId'].$get(args, options))
}

export async function deleteAccountAccessConsentsConsentId(
  args: InferRequestType<(typeof client)['account-access-consents'][':consentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-access-consents'][':consentId'].$delete(args, options))
}

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$get(args, options))
}

export async function getAccountsAccountIdBalances(
  args: InferRequestType<(typeof client.accounts)[':accountId']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].balances.$get(args, options))
}

export async function getAccountsAccountIdBeneficiaries(
  args: InferRequestType<(typeof client.accounts)[':accountId']['beneficiaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].beneficiaries.$get(args, options))
}

export async function getAccountsAccountIdParties(
  args: InferRequestType<(typeof client.accounts)[':accountId']['parties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].parties.$get(args, options))
}

export async function getAccountsAccountIdParty(
  args: InferRequestType<(typeof client.accounts)[':accountId']['party']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].party.$get(args, options))
}

export async function getAccountsAccountIdScheduledPayments(
  args: InferRequestType<(typeof client.accounts)[':accountId']['scheduled-payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId']['scheduled-payments'].$get(args, options),
  )
}

export async function getAccountsAccountIdStandingOrders(
  args: InferRequestType<(typeof client.accounts)[':accountId']['standing-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId']['standing-orders'].$get(args, options))
}

export async function getAccountsAccountIdStatements(
  args: InferRequestType<(typeof client.accounts)[':accountId']['statements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].statements.$get(args, options))
}

export async function getAccountsAccountIdStatementsStatementId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].statements[':statementId'].$get(args, options),
  )
}

export async function getAccountsAccountIdStatementsStatementIdFile(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].statements[':statementId'].file.$get(args, options),
  )
}

export async function getAccountsAccountIdStatementsStatementIdTransactions(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].statements[':statementId'].transactions.$get(args, options),
  )
}

export async function getAccountsAccountIdTransactions(
  args: InferRequestType<(typeof client.accounts)[':accountId']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].transactions.$get(args, options))
}

export async function getParty(
  args: InferRequestType<typeof client.party.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.party.$get(args, options))
}

export async function putSandbox(
  args: InferRequestType<typeof client.sandbox.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.$put(args, options))
}

export async function postSandbox(
  args: InferRequestType<typeof client.sandbox.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.$post(args, options))
}

export async function getSandboxSandboxId(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId'].$get(args, options))
}

export async function deleteSandboxSandboxId(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId'].$delete(args, options))
}
