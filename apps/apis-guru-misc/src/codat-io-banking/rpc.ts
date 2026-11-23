import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountBalances(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['banking-accountBalances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data[
      'banking-accountBalances'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['banking-accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['banking-accounts'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsAccountId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['banking-accounts'][':accountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['banking-accounts'][
      ':accountId'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategories(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['banking-transactionCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data[
      'banking-transactionCategories'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['banking-transactionCategories'][':transactionCategoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data[
      'banking-transactionCategories'
    ][':transactionCategoryId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['banking-transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['banking-transactions'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['banking-transactions'][':transactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['banking-transactions'][
      ':transactionId'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataBankingTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['banking-transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data['banking-transactions'].$get(args, options),
  )
}
