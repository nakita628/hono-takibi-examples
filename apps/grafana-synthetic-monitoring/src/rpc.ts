import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSecrets(options?: ClientRequestOptions) {
  return await parseResponse(client.secrets.$get(undefined, options))
}

export async function postSecrets(
  args: InferRequestType<typeof client.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.$post(args, options))
}

export async function getSecretsFindByLabels(options?: ClientRequestOptions) {
  return await parseResponse(client.secrets.find_by_labels.$get(undefined, options))
}

export async function getSecretsId(
  args: InferRequestType<(typeof client.secrets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':id'].$get(args, options))
}

export async function putSecretsId(
  args: InferRequestType<(typeof client.secrets)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':id'].$put(args, options))
}

export async function deleteSecretsId(
  args: InferRequestType<(typeof client.secrets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':id'].$delete(args, options))
}

export async function getSecretsIdDecrypt(
  args: InferRequestType<(typeof client.secrets)[':id']['decrypt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':id'].decrypt.$get(args, options))
}
