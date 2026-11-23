import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getListingViolation(
  args: InferRequestType<typeof client.listing_violation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing_violation.$get(args, options))
}

export async function getListingViolationSummary(
  args: InferRequestType<typeof client.listing_violation_summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing_violation_summary.$get(args, options))
}

export async function postSuppressListingViolation(
  args: InferRequestType<typeof client.suppress_listing_violation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppress_listing_violation.$post(args, options))
}
