import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBalanceOverviewCompaniesCompanyAccountCodeBalances(
  args: InferRequestType<
    (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceOverview.companies[':companyAccountCode'].balances.$get(args, options),
  )
}

export async function getBalanceOverviewMerchantsMerchantAccountCodeBalances(
  args: InferRequestType<
    (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.balanceOverview.merchants[':merchantAccountCode'].balances.$get(args, options),
  )
}

export async function postBalanceTransfers(
  args: InferRequestType<typeof client.balanceTransfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceTransfers.$post(args, options))
}
