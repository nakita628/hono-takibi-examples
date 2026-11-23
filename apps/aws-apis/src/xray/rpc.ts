import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postTraces(
  args: InferRequestType<typeof client.Traces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Traces.$post(args, options))
}

export async function postCreateGroup(
  args: InferRequestType<typeof client.CreateGroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateGroup.$post(args, options))
}

export async function postCreateSamplingRule(
  args: InferRequestType<typeof client.CreateSamplingRule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateSamplingRule.$post(args, options))
}

export async function postDeleteGroup(
  args: InferRequestType<typeof client.DeleteGroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteGroup.$post(args, options))
}

export async function postDeleteResourcePolicy(
  args: InferRequestType<typeof client.DeleteResourcePolicy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteResourcePolicy.$post(args, options))
}

export async function postDeleteSamplingRule(
  args: InferRequestType<typeof client.DeleteSamplingRule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteSamplingRule.$post(args, options))
}

export async function postEncryptionConfig(
  args: InferRequestType<typeof client.EncryptionConfig.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.EncryptionConfig.$post(args, options))
}

export async function postGetGroup(
  args: InferRequestType<typeof client.GetGroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetGroup.$post(args, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.Groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Groups.$post(args, options))
}

export async function postInsight(
  args: InferRequestType<typeof client.Insight.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Insight.$post(args, options))
}

export async function postInsightEvents(
  args: InferRequestType<typeof client.InsightEvents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.InsightEvents.$post(args, options))
}

export async function postInsightImpactGraph(
  args: InferRequestType<typeof client.InsightImpactGraph.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.InsightImpactGraph.$post(args, options))
}

export async function postInsightSummaries(
  args: InferRequestType<typeof client.InsightSummaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.InsightSummaries.$post(args, options))
}

export async function postGetSamplingRules(
  args: InferRequestType<typeof client.GetSamplingRules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetSamplingRules.$post(args, options))
}

export async function postSamplingStatisticSummaries(
  args: InferRequestType<typeof client.SamplingStatisticSummaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SamplingStatisticSummaries.$post(args, options))
}

export async function postSamplingTargets(
  args: InferRequestType<typeof client.SamplingTargets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SamplingTargets.$post(args, options))
}

export async function postServiceGraph(
  args: InferRequestType<typeof client.ServiceGraph.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ServiceGraph.$post(args, options))
}

export async function postTimeSeriesServiceStatistics(
  args: InferRequestType<typeof client.TimeSeriesServiceStatistics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TimeSeriesServiceStatistics.$post(args, options))
}

export async function postTraceGraph(
  args: InferRequestType<typeof client.TraceGraph.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TraceGraph.$post(args, options))
}

export async function postTraceSummaries(
  args: InferRequestType<typeof client.TraceSummaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TraceSummaries.$post(args, options))
}

export async function postListResourcePolicies(
  args: InferRequestType<typeof client.ListResourcePolicies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListResourcePolicies.$post(args, options))
}

export async function postListTagsForResource(
  args: InferRequestType<typeof client.ListTagsForResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListTagsForResource.$post(args, options))
}

export async function postPutEncryptionConfig(
  args: InferRequestType<typeof client.PutEncryptionConfig.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutEncryptionConfig.$post(args, options))
}

export async function postPutResourcePolicy(
  args: InferRequestType<typeof client.PutResourcePolicy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutResourcePolicy.$post(args, options))
}

export async function postTelemetryRecords(
  args: InferRequestType<typeof client.TelemetryRecords.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TelemetryRecords.$post(args, options))
}

export async function postTraceSegments(
  args: InferRequestType<typeof client.TraceSegments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TraceSegments.$post(args, options))
}

export async function postTagResource(
  args: InferRequestType<typeof client.TagResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TagResource.$post(args, options))
}

export async function postUntagResource(
  args: InferRequestType<typeof client.UntagResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UntagResource.$post(args, options))
}

export async function postUpdateGroup(
  args: InferRequestType<typeof client.UpdateGroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateGroup.$post(args, options))
}

export async function postUpdateSamplingRule(
  args: InferRequestType<typeof client.UpdateSamplingRule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateSamplingRule.$post(args, options))
}
