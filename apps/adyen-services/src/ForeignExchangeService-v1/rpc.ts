import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRatesCalculate(
  args: InferRequestType<typeof client.rates.calculate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rates.calculate.$post(args, options))
}
