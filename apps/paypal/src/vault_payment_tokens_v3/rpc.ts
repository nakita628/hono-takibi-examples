import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3VaultPaymentTokens(
  args: InferRequestType<(typeof client.v3.vault)['payment-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.vault['payment-tokens'].$get(args, options))
}

export async function postV3VaultPaymentTokens(
  args: InferRequestType<(typeof client.v3.vault)['payment-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.vault['payment-tokens'].$post(args, options))
}

export async function getV3VaultPaymentTokensId(
  args: InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.vault['payment-tokens'][':id'].$get(args, options))
}

export async function deleteV3VaultPaymentTokensId(
  args: InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.vault['payment-tokens'][':id'].$delete(args, options))
}

export async function postV3VaultSetupTokens(
  args: InferRequestType<(typeof client.v3.vault)['setup-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.vault['setup-tokens'].$post(args, options))
}

export async function getV3VaultSetupTokensId(
  args: InferRequestType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.vault['setup-tokens'][':id'].$get(args, options))
}
