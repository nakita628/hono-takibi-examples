import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$get(args, options))
}

export async function deleteV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$delete(args, options))
}

export async function patchV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$patch(args, options))
}

export async function getV1betaNameLocations(
  args: InferRequestType<(typeof client.v1beta)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].locations.$get(args, options))
}

export async function getV1betaNameOperations(
  args: InferRequestType<(typeof client.v1beta)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].operations.$get(args, options))
}

export async function postV1betaNameCancel(
  args: InferRequestType<(typeof client.v1beta)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:cancel'].$post(args, options))
}

export async function getV1betaParentBackups(
  args: InferRequestType<(typeof client.v1beta)[':parent']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].backups.$get(args, options))
}

export async function postV1betaParentBackups(
  args: InferRequestType<(typeof client.v1beta)[':parent']['backups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].backups.$post(args, options))
}

export async function getV1betaParentFederations(
  args: InferRequestType<(typeof client.v1beta)[':parent']['federations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].federations.$get(args, options))
}

export async function postV1betaParentFederations(
  args: InferRequestType<(typeof client.v1beta)[':parent']['federations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].federations.$post(args, options))
}

export async function getV1betaParentMetadataImports(
  args: InferRequestType<(typeof client.v1beta)[':parent']['metadataImports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].metadataImports.$get(args, options))
}

export async function postV1betaParentMetadataImports(
  args: InferRequestType<(typeof client.v1beta)[':parent']['metadataImports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].metadataImports.$post(args, options))
}

export async function getV1betaParentServices(
  args: InferRequestType<(typeof client.v1beta)[':parent']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].services.$get(args, options))
}

export async function postV1betaParentServices(
  args: InferRequestType<(typeof client.v1beta)[':parent']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].services.$post(args, options))
}

export async function getV1betaResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1betaResourceRemoveIamPolicy(
  args: InferRequestType<(typeof client.v1beta)[':resource:removeIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':resource:removeIamPolicy'].$post(args, options))
}

export async function postV1betaResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1betaResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':resource:testIamPermissions'].$post(args, options))
}

export async function postV1betaServiceAlterLocation(
  args: InferRequestType<(typeof client.v1beta)[':service:alterLocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':service:alterLocation'].$post(args, options))
}

export async function postV1betaServiceExportMetadata(
  args: InferRequestType<(typeof client.v1beta)[':service:exportMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':service:exportMetadata'].$post(args, options))
}

export async function postV1betaServiceMoveTableToDatabase(
  args: InferRequestType<(typeof client.v1beta)[':service:moveTableToDatabase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':service:moveTableToDatabase'].$post(args, options))
}

export async function postV1betaServiceQueryMetadata(
  args: InferRequestType<(typeof client.v1beta)[':service:queryMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':service:queryMetadata'].$post(args, options))
}

export async function postV1betaServiceRestore(
  args: InferRequestType<(typeof client.v1beta)[':service:restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':service:restore'].$post(args, options))
}
