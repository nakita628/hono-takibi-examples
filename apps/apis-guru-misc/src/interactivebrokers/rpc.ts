import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function postAccountsAccountOrderImpact(
  args: InferRequestType<(typeof client.accounts)[':account']['order_impact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account'].order_impact.$post(args, options))
}

export async function getAccountsAccountOrders(
  args: InferRequestType<(typeof client.accounts)[':account']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account'].orders.$get(args, options))
}

export async function postAccountsAccountOrders(
  args: InferRequestType<(typeof client.accounts)[':account']['orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account'].orders.$post(args, options))
}

export async function getAccountsAccountOrdersCustomerOrderId(
  args: InferRequestType<
    (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':account'].orders[':CustomerOrderId'].$get(args, options),
  )
}

export async function putAccountsAccountOrdersCustomerOrderId(
  args: InferRequestType<
    (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':account'].orders[':CustomerOrderId'].$put(args, options),
  )
}

export async function deleteAccountsAccountOrdersCustomerOrderId(
  args: InferRequestType<
    (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':account'].orders[':CustomerOrderId'].$delete(args, options),
  )
}

export async function getAccountsAccountPositions(
  args: InferRequestType<(typeof client.accounts)[':account']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account'].positions.$get(args, options))
}

export async function getAccountsAccountSummary(
  args: InferRequestType<(typeof client.accounts)[':account']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account'].summary.$get(args, options))
}

export async function getAccountsAccountTrades(
  args: InferRequestType<(typeof client.accounts)[':account']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account'].trades.$get(args, options))
}

export async function getMarketdataExchangeComponents(options?: ClientRequestOptions) {
  return await parseResponse(client.marketdata.exchange_components.$get(undefined, options))
}

export async function getMarketdataSnapshot(
  args: InferRequestType<typeof client.marketdata.snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketdata.snapshot.$get(args, options))
}

export async function postOauthAccessToken(
  args: InferRequestType<typeof client.oauth.access_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.access_token.$post(args, options))
}

export async function postOauthLiveSessionToken(
  args: InferRequestType<typeof client.oauth.live_session_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.live_session_token.$post(args, options))
}

export async function postOauthRequestToken(
  args: InferRequestType<typeof client.oauth.request_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.request_token.$post(args, options))
}

export async function getSecdef(
  args: InferRequestType<typeof client.secdef.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secdef.$get(args, options))
}
