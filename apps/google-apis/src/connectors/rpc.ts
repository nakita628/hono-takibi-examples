import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2ConnectionExecuteSqlQuery(
  args: InferRequestType<(typeof client.v2)[':connection:executeSqlQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':connection:executeSqlQuery'].$post(args, options))
}

export async function postV2EntityTypeEntitiesDeleteEntitiesWithConditions(
  args: InferRequestType<
    (typeof client.v2)[':entityType']['entities:deleteEntitiesWithConditions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':entityType']['entities:deleteEntitiesWithConditions'].$post(args, options),
  )
}

export async function postV2EntityTypeEntitiesUpdateEntitiesWithConditions(
  args: InferRequestType<
    (typeof client.v2)[':entityType']['entities:updateEntitiesWithConditions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':entityType']['entities:updateEntitiesWithConditions'].$post(args, options),
  )
}

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function deleteV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$delete(args, options))
}

export async function patchV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$patch(args, options))
}

export async function postV2NameExecute(
  args: InferRequestType<(typeof client.v2)[':name:execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:execute'].$post(args, options))
}

export async function getV2ParentActions(
  args: InferRequestType<(typeof client.v2)[':parent']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].actions.$get(args, options))
}

export async function getV2ParentEntities(
  args: InferRequestType<(typeof client.v2)[':parent']['entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].entities.$get(args, options))
}

export async function postV2ParentEntities(
  args: InferRequestType<(typeof client.v2)[':parent']['entities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].entities.$post(args, options))
}

export async function getV2ParentEntityTypes(
  args: InferRequestType<(typeof client.v2)[':parent']['entityTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].entityTypes.$get(args, options))
}
