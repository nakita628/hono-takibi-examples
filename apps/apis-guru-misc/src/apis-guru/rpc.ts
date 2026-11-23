import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getListJson(options?: ClientRequestOptions) {
  return await parseResponse(client['list.json'].$get(undefined, options))
}

export async function getMetricsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['metrics.json'].$get(undefined, options))
}

export async function getProvidersJson(options?: ClientRequestOptions) {
  return await parseResponse(client['providers.json'].$get(undefined, options))
}

export async function getSpecsProviderApiJson(
  args: InferRequestType<(typeof client.specs)[':provider'][':api.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.specs[':provider'][':api.json'].$get(args, options))
}

export async function getSpecsProviderServiceApiJson(
  args: InferRequestType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.specs[':provider'][':service'][':api.json'].$get(args, options))
}

export async function getProviderJson(
  args: InferRequestType<(typeof client)[':provider.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':provider.json'].$get(args, options))
}

export async function getProviderServicesJson(
  args: InferRequestType<(typeof client)[':provider']['services.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':provider']['services.json'].$get(args, options))
}
