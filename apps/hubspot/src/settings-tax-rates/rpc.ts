import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getTaxRates202609TaxRates(
  args: InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tax-rates']['2026-09']['tax-rates'].$get(args, options))
}

export async function getTaxRates202609TaxRatesTaxRateGroupId(
  args: InferRequestType<
    (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId'].$get(args, options),
  )
}
