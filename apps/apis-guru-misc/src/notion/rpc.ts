import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1BlocksId(
  args: InferRequestType<(typeof client.v1.blocks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.blocks[':id'].$get(args, options))
}

export async function deleteV1BlocksId(
  args: InferRequestType<(typeof client.v1.blocks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.blocks[':id'].$delete(args, options))
}

export async function patchV1BlocksId(
  args: InferRequestType<(typeof client.v1.blocks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.blocks[':id'].$patch(args, options))
}

export async function getV1BlocksIdChildren(
  args: InferRequestType<(typeof client.v1.blocks)[':id']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.blocks[':id'].children.$get(args, options))
}

export async function patchV1BlocksIdChildren(
  args: InferRequestType<(typeof client.v1.blocks)[':id']['children']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.blocks[':id'].children.$patch(args, options))
}

export async function getV1Comments(
  args: InferRequestType<typeof client.v1.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.comments.$get(args, options))
}

export async function getV1DatabasesId(
  args: InferRequestType<(typeof client.v1.databases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.databases[':id'].$get(args, options))
}

export async function patchV1DatabasesId(
  args: InferRequestType<(typeof client.v1.databases)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.databases[':id'].$patch(args, options))
}

export async function postV1DatabasesIdQuery(
  args: InferRequestType<(typeof client.v1.databases)[':id']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.databases[':id'].query.$post(args, options))
}

export async function getV1PagesId(
  args: InferRequestType<(typeof client.v1.pages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.pages[':id'].$get(args, options))
}

export async function patchV1PagesId(
  args: InferRequestType<(typeof client.v1.pages)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.pages[':id'].$patch(args, options))
}

export async function getV1PagesPageIdPropertiesPropertyId(
  args: InferRequestType<
    (typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.pages[':page_id'].properties[':property_id'].$get(args, options),
  )
}

export async function getV1UsersId(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].$get(args, options))
}
