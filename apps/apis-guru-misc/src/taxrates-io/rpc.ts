import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1TaxCountrycode(
  args: InferRequestType<typeof client.v1.tax.countrycode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tax.countrycode.$get(args, options))
}

export async function getV1TaxIp(
  args: InferRequestType<typeof client.v1.tax.ip.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tax.ip.$get(args, options))
}

export async function getV3TaxRates(
  args: InferRequestType<typeof client.v3.tax.rates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.tax.rates.$get(args, options))
}
