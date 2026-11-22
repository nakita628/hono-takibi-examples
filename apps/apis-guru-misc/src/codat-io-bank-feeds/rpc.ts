import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[
      ':connectionId'
    ].connectionInfo.bankFeedAccounts.$get(args, options),
  )
}

export async function putCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[
      ':connectionId'
    ].connectionInfo.bankFeedAccounts.$put(args, options),
  )
}

export async function patchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts'][':accountId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].connectionInfo.bankFeedAccounts[
      ':accountId'
    ].$patch(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
      ':accountId'
    ].bankTransactions.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.bankAccounts[
      ':accountId'
    ].bankTransactions.$get(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':accountId']['bankTransactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.bankAccounts[
      ':accountId'
    ].bankTransactions.$post(args, options),
  )
}
