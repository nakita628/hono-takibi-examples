import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postActivateAnomalyDetector(
  args: InferRequestType<typeof client.ActivateAnomalyDetector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ActivateAnomalyDetector.$post(args, options))
}

export async function postBackTestAnomalyDetector(
  args: InferRequestType<typeof client.BackTestAnomalyDetector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BackTestAnomalyDetector.$post(args, options))
}

export async function postCreateAlert(
  args: InferRequestType<typeof client.CreateAlert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateAlert.$post(args, options))
}

export async function postCreateAnomalyDetector(
  args: InferRequestType<typeof client.CreateAnomalyDetector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateAnomalyDetector.$post(args, options))
}

export async function postCreateMetricSet(
  args: InferRequestType<typeof client.CreateMetricSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateMetricSet.$post(args, options))
}

export async function postDeactivateAnomalyDetector(
  args: InferRequestType<typeof client.DeactivateAnomalyDetector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeactivateAnomalyDetector.$post(args, options))
}

export async function postDeleteAlert(
  args: InferRequestType<typeof client.DeleteAlert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteAlert.$post(args, options))
}

export async function postDeleteAnomalyDetector(
  args: InferRequestType<typeof client.DeleteAnomalyDetector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteAnomalyDetector.$post(args, options))
}

export async function postDescribeAlert(
  args: InferRequestType<typeof client.DescribeAlert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeAlert.$post(args, options))
}

export async function postDescribeAnomalyDetectionExecutions(
  args: InferRequestType<typeof client.DescribeAnomalyDetectionExecutions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeAnomalyDetectionExecutions.$post(args, options))
}

export async function postDescribeAnomalyDetector(
  args: InferRequestType<typeof client.DescribeAnomalyDetector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeAnomalyDetector.$post(args, options))
}

export async function postDescribeMetricSet(
  args: InferRequestType<typeof client.DescribeMetricSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeMetricSet.$post(args, options))
}

export async function postDetectMetricSetConfig(
  args: InferRequestType<typeof client.DetectMetricSetConfig.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DetectMetricSetConfig.$post(args, options))
}

export async function postGetAnomalyGroup(
  args: InferRequestType<typeof client.GetAnomalyGroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetAnomalyGroup.$post(args, options))
}

export async function postGetDataQualityMetrics(
  args: InferRequestType<typeof client.GetDataQualityMetrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetDataQualityMetrics.$post(args, options))
}

export async function postGetFeedback(
  args: InferRequestType<typeof client.GetFeedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetFeedback.$post(args, options))
}

export async function postGetSampleData(
  args: InferRequestType<typeof client.GetSampleData.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetSampleData.$post(args, options))
}

export async function postListAlerts(
  args: InferRequestType<typeof client.ListAlerts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListAlerts.$post(args, options))
}

export async function postListAnomalyDetectors(
  args: InferRequestType<typeof client.ListAnomalyDetectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListAnomalyDetectors.$post(args, options))
}

export async function postListAnomalyGroupRelatedMetrics(
  args: InferRequestType<typeof client.ListAnomalyGroupRelatedMetrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListAnomalyGroupRelatedMetrics.$post(args, options))
}

export async function postListAnomalyGroupSummaries(
  args: InferRequestType<typeof client.ListAnomalyGroupSummaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListAnomalyGroupSummaries.$post(args, options))
}

export async function postListAnomalyGroupTimeSeries(
  args: InferRequestType<typeof client.ListAnomalyGroupTimeSeries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListAnomalyGroupTimeSeries.$post(args, options))
}

export async function postListMetricSets(
  args: InferRequestType<typeof client.ListMetricSets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListMetricSets.$post(args, options))
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

export async function postPutFeedback(
  args: InferRequestType<typeof client.PutFeedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutFeedback.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postUpdateAlert(
  args: InferRequestType<typeof client.UpdateAlert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateAlert.$post(args, options))
}

export async function postUpdateAnomalyDetector(
  args: InferRequestType<typeof client.UpdateAnomalyDetector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateAnomalyDetector.$post(args, options))
}

export async function postUpdateMetricSet(
  args: InferRequestType<typeof client.UpdateMetricSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateMetricSet.$post(args, options))
}
