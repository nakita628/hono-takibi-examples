import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAddressAutocomplete(
  args: InferRequestType<typeof client.address.autocomplete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.address.autocomplete.$post(args, options))
}

export async function postContactEnrich(
  args: InferRequestType<typeof client.contact.enrich.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact.enrich.$post(args, options))
}

export async function postEmailEnrich(
  args: InferRequestType<typeof client.email.enrich.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.enrich.$post(args, options))
}

export async function postIdentityVerifyId(
  args: InferRequestType<typeof client.identity.verify_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.verify_id.$post(args, options))
}

export async function postPhoneEnrich(
  args: InferRequestType<typeof client.phone.enrich.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.enrich.$post(args, options))
}
