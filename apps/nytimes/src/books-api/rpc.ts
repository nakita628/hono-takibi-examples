import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getListsFormat(
  args: InferRequestType<(typeof client)['lists.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['lists.{format}'].$get(args, options))
}

export async function getListsBestSellersHistoryJson(
  args: InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists['best-sellers']['history.json'].$get(args, options))
}

export async function getListsNamesFormat(
  args: InferRequestType<(typeof client.lists)['names.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists['names.{format}'].$get(args, options))
}

export async function getListsOverviewFormat(
  args: InferRequestType<(typeof client.lists)['overview.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists['overview.{format}'].$get(args, options))
}

export async function getListsDateListJson(
  args: InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':date'][':list.json'].$get(args, options))
}

export async function getReviewsFormat(
  args: InferRequestType<(typeof client)['reviews.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reviews.{format}'].$get(args, options))
}
