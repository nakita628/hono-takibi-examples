import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1VerificationResult(
  args: InferRequestType<typeof client.v1.verification.result.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.verification.result.$get(args, options))
}

export async function postV1VerificationSend(
  args: InferRequestType<typeof client.v1.verification.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.verification.send.$post(args, options))
}
