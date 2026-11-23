import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnalytics(
  args: InferRequestType<typeof client.analytics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.$get(args, options))
}

export async function getBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.balance.$get(undefined, options))
}

export async function getContacts(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$get(args, options))
}

export async function postContacts(
  args: InferRequestType<typeof client.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$post(args, options))
}

export async function getHooks(
  args: InferRequestType<typeof client.hooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks.$get(args, options))
}

export async function postHooks(
  args: InferRequestType<typeof client.hooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks.$post(args, options))
}

export async function postLookup(
  args: InferRequestType<typeof client.lookup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.$post(args, options))
}

export async function postLookupCnam(
  args: InferRequestType<typeof client.lookup.cnam.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.cnam.$post(args, options))
}

export async function postLookupFormat(
  args: InferRequestType<typeof client.lookup.format.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.format.$post(args, options))
}

export async function postLookupHlr(
  args: InferRequestType<typeof client.lookup.hlr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.hlr.$post(args, options))
}

export async function postLookupMnp(
  args: InferRequestType<typeof client.lookup.mnp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.mnp.$post(args, options))
}

export async function getPricing(
  args: InferRequestType<typeof client.pricing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.$get(args, options))
}

export async function postSms(
  args: InferRequestType<typeof client.sms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.$post(args, options))
}

export async function getStatus(
  args: InferRequestType<typeof client.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status.$get(args, options))
}

export async function postValidateForVoice(
  args: InferRequestType<typeof client.validate_for_voice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validate_for_voice.$post(args, options))
}

export async function postVoice(
  args: InferRequestType<typeof client.voice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice.$post(args, options))
}
