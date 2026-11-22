import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdapters(options?: ClientRequestOptions) {
  return await parseResponse(client.adapters.$get(undefined, options))
}

export async function postAdapters(
  args: InferRequestType<typeof client.adapters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adapters.$post(args, options))
}

export async function getAdaptersName(
  args: InferRequestType<(typeof client.adapters)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adapters[':name'].$get(args, options))
}

export async function putAdaptersName(
  args: InferRequestType<(typeof client.adapters)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adapters[':name'].$put(args, options))
}

export async function deleteAdaptersName(
  args: InferRequestType<(typeof client.adapters)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adapters[':name'].$delete(args, options))
}

export async function getAdaptersNameStatus(
  args: InferRequestType<(typeof client.adapters)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adapters[':name'].status.$get(args, options))
}

export async function getAdaptersNameLogs(
  args: InferRequestType<(typeof client.adapters)[':name']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adapters[':name'].logs.$get(args, options))
}

export async function getTools(options?: ClientRequestOptions) {
  return await parseResponse(client.tools.$get(undefined, options))
}

export async function postTools(
  args: InferRequestType<typeof client.tools.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools.$post(args, options))
}

export async function getToolsName(
  args: InferRequestType<(typeof client.tools)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools[':name'].$get(args, options))
}

export async function putToolsName(
  args: InferRequestType<(typeof client.tools)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools[':name'].$put(args, options))
}

export async function deleteToolsName(
  args: InferRequestType<(typeof client.tools)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools[':name'].$delete(args, options))
}

export async function getToolsNameStatus(
  args: InferRequestType<(typeof client.tools)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools[':name'].status.$get(args, options))
}

export async function getToolsNameLogs(
  args: InferRequestType<(typeof client.tools)[':name']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools[':name'].logs.$get(args, options))
}

export async function postMcp(
  args: InferRequestType<typeof client.mcp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mcp.$post(args, options))
}

export async function postAdaptersNameMcp(
  args: InferRequestType<(typeof client.adapters)[':name']['mcp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adapters[':name'].mcp.$post(args, options))
}
