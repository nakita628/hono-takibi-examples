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

export async function getV1NameOperations(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].operations.$get(args, options))
}

export async function postV1NameAddMeasurement(
  args: InferRequestType<(typeof client.v1)[':name:addMeasurement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:addMeasurement'].$post(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameCheckEarlyStoppingState(
  args: InferRequestType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:checkEarlyStoppingState'].$post(args, options))
}

export async function postV1NameComplete(
  args: InferRequestType<(typeof client.v1)[':name:complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:complete'].$post(args, options))
}

export async function postV1NameExplain(
  args: InferRequestType<(typeof client.v1)[':name:explain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:explain'].$post(args, options))
}

export async function getV1NameGetConfig(
  args: InferRequestType<(typeof client.v1)[':name:getConfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:getConfig'].$get(args, options))
}

export async function postV1NamePredict(
  args: InferRequestType<(typeof client.v1)[':name:predict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:predict'].$post(args, options))
}

export async function postV1NameSetDefault(
  args: InferRequestType<(typeof client.v1)[':name:setDefault']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:setDefault'].$post(args, options))
}

export async function postV1NameStop(
  args: InferRequestType<(typeof client.v1)[':name:stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:stop'].$post(args, options))
}

export async function getV1ParentJobs(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].jobs.$get(args, options))
}

export async function postV1ParentJobs(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].jobs.$post(args, options))
}

export async function getV1ParentLocations(
  args: InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].locations.$get(args, options))
}

export async function getV1ParentModels(
  args: InferRequestType<(typeof client.v1)[':parent']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].models.$get(args, options))
}

export async function postV1ParentModels(
  args: InferRequestType<(typeof client.v1)[':parent']['models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].models.$post(args, options))
}

export async function getV1ParentStudies(
  args: InferRequestType<(typeof client.v1)[':parent']['studies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].studies.$get(args, options))
}

export async function postV1ParentStudies(
  args: InferRequestType<(typeof client.v1)[':parent']['studies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].studies.$post(args, options))
}

export async function getV1ParentTrials(
  args: InferRequestType<(typeof client.v1)[':parent']['trials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].trials.$get(args, options))
}

export async function postV1ParentTrials(
  args: InferRequestType<(typeof client.v1)[':parent']['trials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].trials.$post(args, options))
}

export async function postV1ParentTrialsListOptimalTrials(
  args: InferRequestType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['trials:listOptimalTrials'].$post(args, options))
}

export async function postV1ParentTrialsSuggest(
  args: InferRequestType<(typeof client.v1)[':parent']['trials:suggest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['trials:suggest'].$post(args, options))
}

export async function getV1ParentVersions(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].versions.$get(args, options))
}

export async function postV1ParentVersions(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].versions.$post(args, options))
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
