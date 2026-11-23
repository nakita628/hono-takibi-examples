import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putArchiveRule(
  args: InferRequestType<(typeof client)['archive-rule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['archive-rule'].$put(args, options))
}

export async function getPolicyGenerationJobId(
  args: InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy.generation[':jobId'].$get(args, options))
}

export async function putPolicyGenerationJobId(
  args: InferRequestType<(typeof client.policy.generation)[':jobId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy.generation[':jobId'].$put(args, options))
}

export async function putAccessPreview(
  args: InferRequestType<(typeof client)['access-preview']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-preview'].$put(args, options))
}

export async function getAnalyzer(
  args: InferRequestType<typeof client.analyzer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyzer.$get(args, options))
}

export async function putAnalyzer(
  args: InferRequestType<typeof client.analyzer.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyzer.$put(args, options))
}

export async function getAnalyzerAnalyzerNameArchiveRule(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyzer[':analyzerName']['archive-rule'].$get(args, options))
}

export async function putAnalyzerAnalyzerNameArchiveRule(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyzer[':analyzerName']['archive-rule'].$put(args, options))
}

export async function getAnalyzerAnalyzerName(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyzer[':analyzerName'].$get(args, options))
}

export async function deleteAnalyzerAnalyzerName(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyzer[':analyzerName'].$delete(args, options))
}

export async function getAnalyzerAnalyzerNameArchiveRuleRuleName(
  args: InferRequestType<
    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$get(args, options),
  )
}

export async function putAnalyzerAnalyzerNameArchiveRuleRuleName(
  args: InferRequestType<
    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$put(args, options),
  )
}

export async function deleteAnalyzerAnalyzerNameArchiveRuleRuleName(
  args: InferRequestType<
    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$delete(args, options),
  )
}

export async function getAccessPreviewAccessPreviewIdAnalyzerArn(
  args: InferRequestType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-preview'][':accessPreviewId#analyzerArn'].$get(args, options),
  )
}

export async function getAnalyzedResourceAnalyzerArnResourceArn(
  args: InferRequestType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['analyzed-resource#analyzerArn&resourceArn'].$get(args, options),
  )
}

export async function getFindingIdAnalyzerArn(
  args: InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.finding[':id#analyzerArn'].$get(args, options))
}

export async function postAccessPreviewAccessPreviewId(
  args: InferRequestType<(typeof client)['access-preview'][':accessPreviewId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-preview'][':accessPreviewId'].$post(args, options))
}

export async function getAccessPreviewAnalyzerArn(
  args: InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-preview#analyzerArn'].$get(args, options))
}

export async function postAnalyzedResource(
  args: InferRequestType<(typeof client)['analyzed-resource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['analyzed-resource'].$post(args, options))
}

export async function putFinding(
  args: InferRequestType<typeof client.finding.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.finding.$put(args, options))
}

export async function postFinding(
  args: InferRequestType<typeof client.finding.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.finding.$post(args, options))
}

export async function getPolicyGeneration(
  args: InferRequestType<typeof client.policy.generation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy.generation.$get(args, options))
}

export async function putPolicyGeneration(
  args: InferRequestType<typeof client.policy.generation.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy.generation.$put(args, options))
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

export async function postResourceScan(
  args: InferRequestType<typeof client.resource.scan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource.scan.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postPolicyValidation(
  args: InferRequestType<typeof client.policy.validation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy.validation.$post(args, options))
}
