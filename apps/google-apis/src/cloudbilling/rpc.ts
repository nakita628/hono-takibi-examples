import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1betaBillingAccountEstimateCostScenario(
  args: InferRequestType<(typeof client.v1beta)[':billingAccount:estimateCostScenario']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':billingAccount:estimateCostScenario'].$post(args, options),
  )
}

export async function postV1betaEstimateCostScenario(
  args: InferRequestType<(typeof client)['v1beta:estimateCostScenario']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v1beta:estimateCostScenario'].$post(args, options))
}
