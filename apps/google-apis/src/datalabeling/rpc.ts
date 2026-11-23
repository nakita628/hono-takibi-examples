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

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function getV1beta1NameCancel(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancel'].$get(args, options))
}

export async function postV1beta1NameExportData(
  args: InferRequestType<(typeof client.v1beta1)[':name:exportData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:exportData'].$post(args, options))
}

export async function postV1beta1NameImportData(
  args: InferRequestType<(typeof client.v1beta1)[':name:importData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:importData'].$post(args, options))
}

export async function postV1beta1NamePause(
  args: InferRequestType<(typeof client.v1beta1)[':name:pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:pause'].$post(args, options))
}

export async function postV1beta1NameResume(
  args: InferRequestType<(typeof client.v1beta1)[':name:resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:resume'].$post(args, options))
}

export async function getV1beta1ParentAnnotatedDatasets(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['annotatedDatasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].annotatedDatasets.$get(args, options))
}

export async function getV1beta1ParentAnnotationSpecSets(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].annotationSpecSets.$get(args, options))
}

export async function postV1beta1ParentAnnotationSpecSets(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].annotationSpecSets.$post(args, options))
}

export async function getV1beta1ParentDataItems(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['dataItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].dataItems.$get(args, options))
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

export async function getV1beta1ParentEvaluationJobs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].evaluationJobs.$get(args, options))
}

export async function postV1beta1ParentEvaluationJobs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].evaluationJobs.$post(args, options))
}

export async function getV1beta1ParentEvaluationsSearch(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['evaluations:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['evaluations:search'].$get(args, options))
}

export async function postV1beta1ParentExampleComparisonsSearch(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['exampleComparisons:search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['exampleComparisons:search'].$post(args, options),
  )
}

export async function getV1beta1ParentExamples(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].examples.$get(args, options))
}

export async function getV1beta1ParentFeedbackMessages(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].feedbackMessages.$get(args, options))
}

export async function postV1beta1ParentFeedbackMessages(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].feedbackMessages.$post(args, options))
}

export async function getV1beta1ParentFeedbackThreads(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['feedbackThreads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].feedbackThreads.$get(args, options))
}

export async function postV1beta1ParentImageLabel(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['image:label']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['image:label'].$post(args, options))
}

export async function getV1beta1ParentInstructions(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['instructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].instructions.$get(args, options))
}

export async function postV1beta1ParentInstructions(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['instructions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].instructions.$post(args, options))
}

export async function postV1beta1ParentTextLabel(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['text:label']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['text:label'].$post(args, options))
}

export async function postV1beta1ParentVideoLabel(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['video:label']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['video:label'].$post(args, options))
}
