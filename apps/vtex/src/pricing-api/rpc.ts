import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPricingConfig(
  args: InferRequestType<typeof client.pricing.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.config.$get(args, options))
}

export async function getPricingMigration(
  args: InferRequestType<typeof client.pricing.migration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.migration.$get(args, options))
}

export async function getPricingPipelineCatalog(
  args: InferRequestType<typeof client.pricing.pipeline.catalog.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.pipeline.catalog.$get(args, options))
}

export async function getPricingPipelineCatalogPriceTableId(
  args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.pipeline.catalog[':priceTableId'].$get(args, options))
}

export async function putPricingPipelineCatalogPriceTableId(
  args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.pipeline.catalog[':priceTableId'].$put(args, options))
}

export async function getPricingPricesItemId(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.prices[':itemId'].$get(args, options))
}

export async function putPricingPricesItemId(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.prices[':itemId'].$put(args, options))
}

export async function deletePricingPricesItemId(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.prices[':itemId'].$delete(args, options))
}

export async function getPricingPricesItemIdComputedPriceTableId(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pricing.prices[':itemId'].computed[':priceTableId'].$get(args, options),
  )
}

export async function getPricingPricesItemIdFixed(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.prices[':itemId'].fixed.$get(args, options))
}

export async function getPricingPricesItemIdFixedPriceTableId(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pricing.prices[':itemId'].fixed[':priceTableId'].$get(args, options),
  )
}

export async function postPricingPricesItemIdFixedPriceTableId(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pricing.prices[':itemId'].fixed[':priceTableId'].$post(args, options),
  )
}

export async function deletePricingPricesItemIdFixedPriceTableId(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pricing.prices[':itemId'].fixed[':priceTableId'].$delete(args, options),
  )
}

export async function getPricingTables(
  args: InferRequestType<typeof client.pricing.tables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.tables.$get(args, options))
}
