import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRegressionApi(
  args: InferRequestType<typeof client.regression.api.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regression.api.$post(args, options))
}
