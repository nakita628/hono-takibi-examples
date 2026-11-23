import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1NameLocations(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].locations.$get(args, options))
}

export async function getV1NameOperations(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].operations.$get(args, options))
}

export async function postV1NameAbandon(
  args: InferRequestType<(typeof client.v1)[':name:abandon']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:abandon'].$post(args, options))
}

export async function postV1NameAdvance(
  args: InferRequestType<(typeof client.v1)[':name:advance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:advance'].$post(args, options))
}

export async function postV1NameApprove(
  args: InferRequestType<(typeof client.v1)[':name:approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:approve'].$post(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameTerminate(
  args: InferRequestType<(typeof client.v1)[':name:terminate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:terminate'].$post(args, options))
}

export async function getV1ParentDeliveryPipelines(
  args: InferRequestType<(typeof client.v1)[':parent']['deliveryPipelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].deliveryPipelines.$get(args, options))
}

export async function postV1ParentDeliveryPipelines(
  args: InferRequestType<(typeof client.v1)[':parent']['deliveryPipelines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].deliveryPipelines.$post(args, options))
}

export async function getV1ParentJobRuns(
  args: InferRequestType<(typeof client.v1)[':parent']['jobRuns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].jobRuns.$get(args, options))
}

export async function getV1ParentReleases(
  args: InferRequestType<(typeof client.v1)[':parent']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].releases.$get(args, options))
}

export async function postV1ParentReleases(
  args: InferRequestType<(typeof client.v1)[':parent']['releases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].releases.$post(args, options))
}

export async function getV1ParentRollouts(
  args: InferRequestType<(typeof client.v1)[':parent']['rollouts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].rollouts.$get(args, options))
}

export async function postV1ParentRollouts(
  args: InferRequestType<(typeof client.v1)[':parent']['rollouts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].rollouts.$post(args, options))
}

export async function getV1ParentTargets(
  args: InferRequestType<(typeof client.v1)[':parent']['targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].targets.$get(args, options))
}

export async function postV1ParentTargets(
  args: InferRequestType<(typeof client.v1)[':parent']['targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].targets.$post(args, options))
}

export async function getV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}

export async function postV1RolloutIgnoreJob(
  args: InferRequestType<(typeof client.v1)[':rollout:ignoreJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':rollout:ignoreJob'].$post(args, options))
}

export async function postV1RolloutRetryJob(
  args: InferRequestType<(typeof client.v1)[':rollout:retryJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':rollout:retryJob'].$post(args, options))
}
