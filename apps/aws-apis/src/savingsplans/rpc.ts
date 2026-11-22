import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCreateSavingsPlan(
  args: InferRequestType<typeof client.CreateSavingsPlan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateSavingsPlan.$post(args, options))
}

export async function postDeleteQueuedSavingsPlan(
  args: InferRequestType<typeof client.DeleteQueuedSavingsPlan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteQueuedSavingsPlan.$post(args, options))
}

export async function postDescribeSavingsPlanRates(
  args: InferRequestType<typeof client.DescribeSavingsPlanRates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeSavingsPlanRates.$post(args, options))
}

export async function postDescribeSavingsPlans(
  args: InferRequestType<typeof client.DescribeSavingsPlans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeSavingsPlans.$post(args, options))
}

export async function postDescribeSavingsPlansOfferingRates(
  args: InferRequestType<typeof client.DescribeSavingsPlansOfferingRates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeSavingsPlansOfferingRates.$post(args, options))
}

export async function postDescribeSavingsPlansOfferings(
  args: InferRequestType<typeof client.DescribeSavingsPlansOfferings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeSavingsPlansOfferings.$post(args, options))
}

export async function postListTagsForResource(
  args: InferRequestType<typeof client.ListTagsForResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListTagsForResource.$post(args, options))
}

export async function postTagResource(
  args: InferRequestType<typeof client.TagResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TagResource.$post(args, options))
}

export async function postUntagResource(
  args: InferRequestType<typeof client.UntagResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UntagResource.$post(args, options))
}
