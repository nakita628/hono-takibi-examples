import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProxy(
  args: InferRequestType<typeof client.proxy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy.$get(args, options))
}

export async function putProxy(
  args: InferRequestType<typeof client.proxy.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy.$put(args, options))
}

export async function postProxy(
  args: InferRequestType<typeof client.proxy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy.$post(args, options))
}

export async function deleteProxy(
  args: InferRequestType<typeof client.proxy.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy.$delete(args, options))
}

export async function optionsProxy(
  args: InferRequestType<typeof client.proxy.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy.$options(args, options))
}

export async function patchProxy(
  args: InferRequestType<typeof client.proxy.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy.$patch(args, options))
}
