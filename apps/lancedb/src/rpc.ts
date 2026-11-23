import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1TableIndex(
  args: InferRequestType<typeof client.v1.table.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table.index.$get(args, options))
}

export async function postV1TableNameCreateIndex(
  args: InferRequestType<(typeof client.v1.table)[':name']['create']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table[':name'].create.index.$post(args, options))
}

export async function postV1TableNameQueryIndex(
  args: InferRequestType<(typeof client.v1.table)[':name']['query']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table[':name'].query.index.$post(args, options))
}

export async function postV1TableNameInsertIndex(
  args: InferRequestType<(typeof client.v1.table)[':name']['insert']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table[':name'].insert.index.$post(args, options))
}

export async function postV1TableNameMergeInsertIndex(
  args: InferRequestType<(typeof client.v1.table)[':name']['merge_insert']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table[':name'].merge_insert.index.$post(args, options))
}

export async function postV1TableNameDeleteIndex(
  args: InferRequestType<(typeof client.v1.table)[':name']['delete']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table[':name'].delete.index.$post(args, options))
}

export async function postV1TableNameDropIndex(
  args: InferRequestType<(typeof client.v1.table)[':name']['drop']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table[':name'].drop.index.$post(args, options))
}

export async function postV1TableNameDescribeIndex(
  args: InferRequestType<(typeof client.v1.table)[':name']['describe']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table[':name'].describe.index.$post(args, options))
}

export async function postV1TableNameIndexListIndex(
  args: InferRequestType<(typeof client.v1.table)[':name']['index']['list']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table[':name'].index.list.index.$post(args, options))
}

export async function postV1TableNameCreateIndexIndex(
  args: InferRequestType<(typeof client.v1.table)[':name']['create_index']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.table[':name'].create_index.index.$post(args, options))
}

export async function postV1TableNameCreateScalarIndexIndex(
  args: InferRequestType<
    (typeof client.v1.table)[':name']['create_scalar_index']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.table[':name'].create_scalar_index.index.$post(args, options),
  )
}

export async function postV1TableNameIndexIndexNameDropIndex(
  args: InferRequestType<
    (typeof client.v1.table)[':name']['index'][':index_name']['drop']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.table[':name'].index[':index_name'].drop.index.$post(args, options),
  )
}
