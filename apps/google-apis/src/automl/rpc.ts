import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1NameLocations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].locations.$get(args, options))
}

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function postV1beta1NameBatchPredict(
  args: InferRequestType<(typeof client.v1beta1)[':name:batchPredict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:batchPredict'].$post(args, options))
}

export async function postV1beta1NameCancel(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
}

export async function postV1beta1NameDeploy(
  args: InferRequestType<(typeof client.v1beta1)[':name:deploy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:deploy'].$post(args, options))
}

export async function postV1beta1NameExport(
  args: InferRequestType<(typeof client.v1beta1)[':name:export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:export'].$post(args, options))
}

export async function postV1beta1NameExportData(
  args: InferRequestType<(typeof client.v1beta1)[':name:exportData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:exportData'].$post(args, options))
}

export async function postV1beta1NameExportEvaluatedExamples(
  args: InferRequestType<(typeof client.v1beta1)[':name:exportEvaluatedExamples']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:exportEvaluatedExamples'].$post(args, options))
}

export async function postV1beta1NameImportData(
  args: InferRequestType<(typeof client.v1beta1)[':name:importData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:importData'].$post(args, options))
}

export async function postV1beta1NamePredict(
  args: InferRequestType<(typeof client.v1beta1)[':name:predict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:predict'].$post(args, options))
}

export async function postV1beta1NameUndeploy(
  args: InferRequestType<(typeof client.v1beta1)[':name:undeploy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:undeploy'].$post(args, options))
}

export async function postV1beta1NameWait(
  args: InferRequestType<(typeof client.v1beta1)[':name:wait']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:wait'].$post(args, options))
}

export async function getV1beta1ParentColumnSpecs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['columnSpecs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].columnSpecs.$get(args, options))
}

export async function getV1beta1ParentDatasets(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].datasets.$get(args, options))
}

export async function postV1beta1ParentDatasets(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].datasets.$post(args, options))
}

export async function getV1beta1ParentModelEvaluations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['modelEvaluations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].modelEvaluations.$get(args, options))
}

export async function getV1beta1ParentModels(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].models.$get(args, options))
}

export async function postV1beta1ParentModels(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].models.$post(args, options))
}

export async function getV1beta1ParentTableSpecs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tableSpecs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tableSpecs.$get(args, options))
}

export async function getV1beta1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1beta1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
}
