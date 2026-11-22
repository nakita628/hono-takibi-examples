import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountBalances(
  args: InferRequestType<(typeof client)['account-balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-balances'].$get(args, options))
}

export async function getAccountMovements(
  args: InferRequestType<(typeof client)['account-movements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-movements'].$get(args, options))
}

export async function getAccountTransactions(
  args: InferRequestType<(typeof client)['account-transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-transactions'].$get(args, options))
}
