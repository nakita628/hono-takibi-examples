import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountVerificationReportsCode(
  args: InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountVerification.reports[':code'].$get(args, options))
}

export async function postAccountVerificationRoutes(
  args: InferRequestType<typeof client.accountVerification.routes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountVerification.routes.$post(args, options))
}
