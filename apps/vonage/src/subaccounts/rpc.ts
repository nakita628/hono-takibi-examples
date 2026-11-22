import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiKeyBalanceTransfers(
  args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':api_key']['balance-transfers'].$get(args, options))
}

export async function postApiKeyBalanceTransfers(
  args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':api_key']['balance-transfers'].$post(args, options))
}

export async function getApiKeyCreditTransfers(
  args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':api_key']['credit-transfers'].$get(args, options))
}

export async function postApiKeyCreditTransfers(
  args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':api_key']['credit-transfers'].$post(args, options))
}

export async function getApiKeySubaccounts(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':api_key'].subaccounts.$get(args, options))
}

export async function postApiKeySubaccounts(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':api_key'].subaccounts.$post(args, options))
}

export async function getApiKeySubaccountsSubaccountKey(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':api_key'].subaccounts[':subaccount_key'].$get(args, options))
}

export async function patchApiKeySubaccountsSubaccountKey(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':api_key'].subaccounts[':subaccount_key'].$patch(args, options),
  )
}

export async function postApiKeyTransferNumber(
  args: InferRequestType<(typeof client)[':api_key']['transfer-number']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':api_key']['transfer-number'].$post(args, options))
}
