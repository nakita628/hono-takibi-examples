import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$get(args, options))
}

export async function deleteV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$delete(args, options))
}

export async function patchV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$patch(args, options))
}

export async function getV1beta2NameLocations(
  args: InferRequestType<(typeof client.v1beta2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].locations.$get(args, options))
}

export async function postV1beta2ParentAptArtifactsCreate(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['aptArtifacts:create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent']['aptArtifacts:create'].$post(args, options))
}

export async function postV1beta2ParentAptArtifactsImport(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['aptArtifacts:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent']['aptArtifacts:import'].$post(args, options))
}

export async function getV1beta2ParentFiles(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].files.$get(args, options))
}

export async function getV1beta2ParentPackages(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].packages.$get(args, options))
}

export async function getV1beta2ParentRepositories(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].repositories.$get(args, options))
}

export async function postV1beta2ParentRepositories(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['repositories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].repositories.$post(args, options))
}

export async function getV1beta2ParentTags(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].tags.$get(args, options))
}

export async function postV1beta2ParentTags(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].tags.$post(args, options))
}

export async function getV1beta2ParentVersions(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].versions.$get(args, options))
}

export async function postV1beta2ParentYumArtifactsCreate(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['yumArtifacts:create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent']['yumArtifacts:create'].$post(args, options))
}

export async function postV1beta2ParentYumArtifactsImport(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['yumArtifacts:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent']['yumArtifacts:import'].$post(args, options))
}

export async function getV1beta2ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta2)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1beta2ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta2)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta2ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta2)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':resource:testIamPermissions'].$post(args, options))
}
