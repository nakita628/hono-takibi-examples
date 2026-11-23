import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2betaLabels(
  args: InferRequestType<typeof client.v2beta.labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta.labels.$get(args, options))
}

export async function postV2betaLabels(
  args: InferRequestType<typeof client.v2beta.labels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta.labels.$post(args, options))
}

export async function getV2betaLimitsLabel(
  args: InferRequestType<typeof client.v2beta.limits.label.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta.limits.label.$get(args, options))
}

export async function getV2betaName(
  args: InferRequestType<(typeof client.v2beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name'].$get(args, options))
}

export async function deleteV2betaName(
  args: InferRequestType<(typeof client.v2beta)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name'].$delete(args, options))
}

export async function postV2betaNameDelta(
  args: InferRequestType<(typeof client.v2beta)[':name:delta']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name:delta'].$post(args, options))
}

export async function postV2betaNameDisable(
  args: InferRequestType<(typeof client.v2beta)[':name:disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name:disable'].$post(args, options))
}

export async function postV2betaNameEnable(
  args: InferRequestType<(typeof client.v2beta)[':name:enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name:enable'].$post(args, options))
}

export async function postV2betaNamePublish(
  args: InferRequestType<(typeof client.v2beta)[':name:publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name:publish'].$post(args, options))
}

export async function postV2betaNameUpdateLabelCopyMode(
  args: InferRequestType<(typeof client.v2beta)[':name:updateLabelCopyMode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name:updateLabelCopyMode'].$post(args, options))
}

export async function getV2betaParentLocks(
  args: InferRequestType<(typeof client.v2beta)[':parent']['locks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].locks.$get(args, options))
}

export async function getV2betaParentPermissions(
  args: InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].permissions.$get(args, options))
}

export async function postV2betaParentPermissions(
  args: InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].permissions.$post(args, options))
}

export async function patchV2betaParentPermissions(
  args: InferRequestType<(typeof client.v2beta)[':parent']['permissions']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].permissions.$patch(args, options))
}

export async function postV2betaParentPermissionsBatchDelete(
  args: InferRequestType<(typeof client.v2beta)[':parent']['permissions:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta[':parent']['permissions:batchDelete'].$post(args, options),
  )
}

export async function postV2betaParentPermissionsBatchUpdate(
  args: InferRequestType<(typeof client.v2beta)[':parent']['permissions:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta[':parent']['permissions:batchUpdate'].$post(args, options),
  )
}
