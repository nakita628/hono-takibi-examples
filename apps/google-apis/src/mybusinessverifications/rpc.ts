import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1VerificationTokensGenerate(
  args: InferRequestType<(typeof client.v1)['verificationTokens:generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['verificationTokens:generate'].$post(args, options))
}

export async function postV1LocationFetchVerificationOptions(
  args: InferRequestType<(typeof client.v1)[':location:fetchVerificationOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location:fetchVerificationOptions'].$post(args, options))
}

export async function getV1NameVoiceOfMerchantState(
  args: InferRequestType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].VoiceOfMerchantState.$get(args, options))
}

export async function postV1NameComplete(
  args: InferRequestType<(typeof client.v1)[':name:complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:complete'].$post(args, options))
}

export async function postV1NameVerify(
  args: InferRequestType<(typeof client.v1)[':name:verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:verify'].$post(args, options))
}

export async function getV1ParentVerifications(
  args: InferRequestType<(typeof client.v1)[':parent']['verifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].verifications.$get(args, options))
}
