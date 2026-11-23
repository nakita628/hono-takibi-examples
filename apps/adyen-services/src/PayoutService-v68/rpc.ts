import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postConfirmThirdParty(
  args: InferRequestType<typeof client.confirmThirdParty.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.confirmThirdParty.$post(args, options))
}

export async function postDeclineThirdParty(
  args: InferRequestType<typeof client.declineThirdParty.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.declineThirdParty.$post(args, options))
}

export async function postPayout(
  args: InferRequestType<typeof client.payout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payout.$post(args, options))
}

export async function postStoreDetail(
  args: InferRequestType<typeof client.storeDetail.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storeDetail.$post(args, options))
}

export async function postStoreDetailAndSubmitThirdParty(
  args: InferRequestType<typeof client.storeDetailAndSubmitThirdParty.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storeDetailAndSubmitThirdParty.$post(args, options))
}

export async function postSubmitThirdParty(
  args: InferRequestType<typeof client.submitThirdParty.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.submitThirdParty.$post(args, options))
}
