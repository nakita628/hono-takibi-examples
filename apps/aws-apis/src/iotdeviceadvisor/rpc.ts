import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSuiteDefinitions(
  args: InferRequestType<typeof client.suiteDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suiteDefinitions.$get(args, options))
}

export async function postSuiteDefinitions(
  args: InferRequestType<typeof client.suiteDefinitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suiteDefinitions.$post(args, options))
}

export async function getSuiteDefinitionsSuiteDefinitionId(
  args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suiteDefinitions[':suiteDefinitionId'].$get(args, options))
}

export async function deleteSuiteDefinitionsSuiteDefinitionId(
  args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suiteDefinitions[':suiteDefinitionId'].$delete(args, options))
}

export async function patchSuiteDefinitionsSuiteDefinitionId(
  args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suiteDefinitions[':suiteDefinitionId'].$patch(args, options))
}

export async function getEndpoint(
  args: InferRequestType<typeof client.endpoint.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoint.$get(args, options))
}

export async function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunId(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].$get(args, options),
  )
}

export async function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReport(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].report.$get(
      args,
      options,
    ),
  )
}

export async function getSuiteRuns(
  args: InferRequestType<typeof client.suiteRuns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suiteRuns.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postSuiteDefinitionsSuiteDefinitionIdSuiteRuns(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suiteDefinitions[':suiteDefinitionId'].suiteRuns.$post(args, options),
  )
}

export async function postSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStop(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].stop.$post(
      args,
      options,
    ),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
