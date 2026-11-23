import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putAdminRelationTuples(
  args: InferRequestType<(typeof client.admin)['relation-tuples']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['relation-tuples'].$put(args, options))
}

export async function deleteAdminRelationTuples(
  args: InferRequestType<(typeof client.admin)['relation-tuples']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['relation-tuples'].$delete(args, options))
}

export async function patchAdminRelationTuples(
  args: InferRequestType<(typeof client.admin)['relation-tuples']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['relation-tuples'].$patch(args, options))
}

export async function getHealthAlive(options?: ClientRequestOptions) {
  return await parseResponse(client.health.alive.$get(undefined, options))
}

export async function getHealthReady(options?: ClientRequestOptions) {
  return await parseResponse(client.health.ready.$get(undefined, options))
}

export async function getNamespaces(options?: ClientRequestOptions) {
  return await parseResponse(client.namespaces.$get(undefined, options))
}

export async function postOplSyntaxCheck(
  args: InferRequestType<typeof client.opl.syntax.check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.opl.syntax.check.$post(args, options))
}

export async function getRelationTuples(
  args: InferRequestType<(typeof client)['relation-tuples']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['relation-tuples'].$get(args, options))
}

export async function postRelationTuplesBatchCheck(
  args: InferRequestType<(typeof client)['relation-tuples']['batch']['check']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['relation-tuples'].batch.check.$post(args, options))
}

export async function getRelationTuplesCheck(
  args: InferRequestType<(typeof client)['relation-tuples']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['relation-tuples'].check.$get(args, options))
}

export async function postRelationTuplesCheck(
  args: InferRequestType<(typeof client)['relation-tuples']['check']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['relation-tuples'].check.$post(args, options))
}

export async function getRelationTuplesCheckOpenapi(
  args: InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['relation-tuples'].check.openapi.$get(args, options))
}

export async function postRelationTuplesCheckOpenapi(
  args: InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['relation-tuples'].check.openapi.$post(args, options))
}

export async function getRelationTuplesExpand(
  args: InferRequestType<(typeof client)['relation-tuples']['expand']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['relation-tuples'].expand.$get(args, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}
