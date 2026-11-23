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
  args: InferRequestType<(typeof client)['account-access-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-access-consents'][':ConsentId'].$get(args, options))
}

export async function deleteAccountAccessConsentsConsentId(
  args: InferRequestType<(typeof client)['account-access-consents'][':ConsentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-access-consents'][':ConsentId'].$delete(args, options))
}

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId'].$get(args, options))
}

export async function getAccountsAccountIdBalances(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId'].balances.$get(args, options))
}

export async function getAccountsAccountIdBeneficiaries(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['beneficiaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId'].beneficiaries.$get(args, options))
}

export async function getAccountsAccountIdDirectDebits(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['direct-debits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId']['direct-debits'].$get(args, options))
}

export async function getAccountsAccountIdOffers(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId'].offers.$get(args, options))
}

export async function getAccountsAccountIdParties(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['parties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId'].parties.$get(args, options))
}

export async function getAccountsAccountIdParty(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['party']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId'].party.$get(args, options))
}

export async function getAccountsAccountIdProduct(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['product']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId'].product.$get(args, options))
}

export async function getAccountsAccountIdScheduledPayments(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['scheduled-payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AccountId']['scheduled-payments'].$get(args, options),
  )
}

export async function getAccountsAccountIdStandingOrders(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['standing-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId']['standing-orders'].$get(args, options))
}

export async function getAccountsAccountIdStatements(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['statements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId'].statements.$get(args, options))
}

export async function getAccountsAccountIdStatementsStatementId(
  args: InferRequestType<
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AccountId'].statements[':StatementId'].$get(args, options),
  )
}

export async function getAccountsAccountIdStatementsStatementIdFile(
  args: InferRequestType<
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AccountId'].statements[':StatementId'].file.$get(args, options),
  )
}

export async function getAccountsAccountIdStatementsStatementIdTransactions(
  args: InferRequestType<
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AccountId'].statements[':StatementId'].transactions.$get(args, options),
  )
}

export async function getAccountsAccountIdTransactions(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AccountId'].transactions.$get(args, options))
}

export async function getBalances(
  args: InferRequestType<typeof client.balances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balances.$get(args, options))
}

export async function getBeneficiaries(
  args: InferRequestType<typeof client.beneficiaries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.beneficiaries.$get(args, options))
}

export async function getDirectDebits(
  args: InferRequestType<(typeof client)['direct-debits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['direct-debits'].$get(args, options))
}

export async function getOffers(
  args: InferRequestType<typeof client.offers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.$get(args, options))
}

export async function getParty(
  args: InferRequestType<typeof client.party.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.party.$get(args, options))
}

export async function getProducts(
  args: InferRequestType<typeof client.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$get(args, options))
}

export async function getScheduledPayments(
  args: InferRequestType<(typeof client)['scheduled-payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['scheduled-payments'].$get(args, options))
}

export async function getStandingOrders(
  args: InferRequestType<(typeof client)['standing-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['standing-orders'].$get(args, options))
}

export async function getStatements(
  args: InferRequestType<typeof client.statements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statements.$get(args, options))
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}
