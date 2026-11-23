import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDataV1AvailabilityIndex(
  args: InferRequestType<typeof client.data.v1.availability.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.v1.availability.index.$get(args, options))
}

export async function getDataV1ConstraintVariable(
  args: InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.v1.constraint[':variable'].$get(args, options))
}

export async function getDataV1MapNew(
  args: InferRequestType<typeof client.data.v1.map.new.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.v1.map.new.$get(args, options))
}

export async function getDataV1Values(
  args: InferRequestType<typeof client.data.v1.values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.v1.values.$get(args, options))
}

export async function getEntityV1(
  args: InferRequestType<typeof client.entity.v1.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entity.v1.$get(args, options))
}

export async function getEntityV1Relation(
  args: InferRequestType<(typeof client.entity.v1)[':relation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entity.v1[':relation'].$get(args, options))
}

export async function getSearchV1Dataset(
  args: InferRequestType<typeof client.search.v1.dataset.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.v1.dataset.$get(args, options))
}

export async function getSearchV1Question(
  args: InferRequestType<typeof client.search.v1.question.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.v1.question.$get(args, options))
}

export async function getSuggestV1Type(
  args: InferRequestType<(typeof client.suggest.v1)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggest.v1[':type'].$get(args, options))
}
