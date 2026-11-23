import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1betaInstanceLookupEffectiveGuestPolicy(
  args: InferRequestType<(typeof client.v1beta)[':instance:lookupEffectiveGuestPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':instance:lookupEffectiveGuestPolicy'].$post(args, options),
  )
}

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

export async function postV1betaNameCancel(
  args: InferRequestType<(typeof client.v1beta)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:cancel'].$post(args, options))
}

export async function postV1betaNamePause(
  args: InferRequestType<(typeof client.v1beta)[':name:pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:pause'].$post(args, options))
}

export async function postV1betaNameResume(
  args: InferRequestType<(typeof client.v1beta)[':name:resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:resume'].$post(args, options))
}

export async function getV1betaParentGuestPolicies(
  args: InferRequestType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].guestPolicies.$get(args, options))
}

export async function postV1betaParentGuestPolicies(
  args: InferRequestType<(typeof client.v1beta)[':parent']['guestPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].guestPolicies.$post(args, options))
}

export async function getV1betaParentInstanceDetails(
  args: InferRequestType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].instanceDetails.$get(args, options))
}

export async function getV1betaParentPatchDeployments(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].patchDeployments.$get(args, options))
}

export async function postV1betaParentPatchDeployments(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchDeployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].patchDeployments.$post(args, options))
}

export async function getV1betaParentPatchJobs(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].patchJobs.$get(args, options))
}

export async function postV1betaParentPatchJobsExecute(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchJobs:execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent']['patchJobs:execute'].$post(args, options))
}
