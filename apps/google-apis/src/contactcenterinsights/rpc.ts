import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1IssueModelCalculateIssueModelStats(
  args: InferRequestType<(typeof client.v1)[':issueModel:calculateIssueModelStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':issueModel:calculateIssueModelStats'].$get(args, options))
}

export async function getV1LocationConversationsCalculateStats(
  args: InferRequestType<(typeof client.v1)[':location']['conversations:calculateStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':location']['conversations:calculateStats'].$get(args, options),
  )
}

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

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameDeploy(
  args: InferRequestType<(typeof client.v1)[':name:deploy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:deploy'].$post(args, options))
}

export async function postV1NameUndeploy(
  args: InferRequestType<(typeof client.v1)[':name:undeploy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:undeploy'].$post(args, options))
}

export async function getV1ParentAnalyses(
  args: InferRequestType<(typeof client.v1)[':parent']['analyses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].analyses.$get(args, options))
}

export async function postV1ParentAnalyses(
  args: InferRequestType<(typeof client.v1)[':parent']['analyses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].analyses.$post(args, options))
}

export async function getV1ParentConversations(
  args: InferRequestType<(typeof client.v1)[':parent']['conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].conversations.$get(args, options))
}

export async function postV1ParentConversations(
  args: InferRequestType<(typeof client.v1)[':parent']['conversations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].conversations.$post(args, options))
}

export async function postV1ParentConversationsBulkAnalyze(
  args: InferRequestType<(typeof client.v1)[':parent']['conversations:bulkAnalyze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['conversations:bulkAnalyze'].$post(args, options))
}

export async function postV1ParentConversationsIngest(
  args: InferRequestType<(typeof client.v1)[':parent']['conversations:ingest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['conversations:ingest'].$post(args, options))
}

export async function postV1ParentConversationsUpload(
  args: InferRequestType<(typeof client.v1)[':parent']['conversations:upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['conversations:upload'].$post(args, options))
}

export async function postV1ParentInsightsdataExport(
  args: InferRequestType<(typeof client.v1)[':parent']['insightsdata:export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['insightsdata:export'].$post(args, options))
}

export async function getV1ParentIssueModels(
  args: InferRequestType<(typeof client.v1)[':parent']['issueModels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].issueModels.$get(args, options))
}

export async function postV1ParentIssueModels(
  args: InferRequestType<(typeof client.v1)[':parent']['issueModels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].issueModels.$post(args, options))
}

export async function getV1ParentIssues(
  args: InferRequestType<(typeof client.v1)[':parent']['issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].issues.$get(args, options))
}

export async function getV1ParentPhraseMatchers(
  args: InferRequestType<(typeof client.v1)[':parent']['phraseMatchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].phraseMatchers.$get(args, options))
}

export async function postV1ParentPhraseMatchers(
  args: InferRequestType<(typeof client.v1)[':parent']['phraseMatchers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].phraseMatchers.$post(args, options))
}

export async function getV1ParentViews(
  args: InferRequestType<(typeof client.v1)[':parent']['views']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].views.$get(args, options))
}

export async function postV1ParentViews(
  args: InferRequestType<(typeof client.v1)[':parent']['views']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].views.$post(args, options))
}
