import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getServiceInfo(options?: ClientRequestOptions) {
  return await parseResponse(client['service-info'].$get(undefined, options))
}

export async function getObjectsObjectId(
  args: InferRequestType<(typeof client.objects)[':object_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects[':object_id'].$get(args, options))
}

export async function postObjectsObjectId(
  args: InferRequestType<(typeof client.objects)[':object_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects[':object_id'].$post(args, options))
}

export async function optionsObjectsObjectId(
  args: InferRequestType<(typeof client.objects)[':object_id']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects[':object_id'].$options(args, options))
}

export async function postObjects(
  args: InferRequestType<typeof client.objects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.$post(args, options))
}

export async function optionsObjects(
  args: InferRequestType<typeof client.objects.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.$options(args, options))
}

export async function getObjectsObjectIdAccessAccessId(
  args: InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects[':object_id'].access[':access_id'].$get(args, options))
}

export async function postObjectsObjectIdAccessAccessId(
  args: InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects[':object_id'].access[':access_id'].$post(args, options))
}

export async function postObjectsAccess(
  args: InferRequestType<typeof client.objects.access.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.access.$post(args, options))
}
