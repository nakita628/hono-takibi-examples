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

export async function getV1betaNameLoginProfile(
  args: InferRequestType<(typeof client.v1beta)[':name']['loginProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].loginProfile.$get(args, options))
}

export async function postV1betaParentSshPublicKeys(
  args: InferRequestType<(typeof client.v1beta)[':parent']['sshPublicKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].sshPublicKeys.$post(args, options))
}

export async function postV1betaParentImportSshPublicKey(
  args: InferRequestType<(typeof client.v1beta)[':parent:importSshPublicKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent:importSshPublicKey'].$post(args, options))
}
