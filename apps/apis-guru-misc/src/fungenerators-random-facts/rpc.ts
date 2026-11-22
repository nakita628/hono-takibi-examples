import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFact(
  args: InferRequestType<typeof client.fact.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.$get(args, options))
}

export async function putFact(
  args: InferRequestType<typeof client.fact.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.$put(args, options))
}

export async function deleteFact(
  args: InferRequestType<typeof client.fact.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.$delete(args, options))
}

export async function getFactCategories(
  args: InferRequestType<typeof client.fact.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.categories.$get(args, options))
}

export async function getFactFod(
  args: InferRequestType<typeof client.fact.fod.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.fod.$get(args, options))
}

export async function getFactFodCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.fact.fod.categories.$get(undefined, options))
}

export async function getFactNumbers(
  args: InferRequestType<typeof client.fact.numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.numbers.$get(args, options))
}

export async function getFactOnthisdayBorn(
  args: InferRequestType<typeof client.fact.onthisday.born.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.onthisday.born.$get(args, options))
}

export async function getFactOnthisdayDied(
  args: InferRequestType<typeof client.fact.onthisday.died.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.onthisday.died.$get(args, options))
}

export async function getFactOnthisdayEvent(
  args: InferRequestType<typeof client.fact.onthisday.event.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.onthisday.event.$get(args, options))
}

export async function getFactRandom(
  args: InferRequestType<typeof client.fact.random.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.random.$get(args, options))
}

export async function getFactSearch(
  args: InferRequestType<typeof client.fact.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fact.search.$get(args, options))
}
