import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetResourceGroupsTaggingAPI20170126GetResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources'].$post(args, options),
  )
}

export async function postXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeys(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys'].$post(args, options),
  )
}

export async function postXAmzTargetResourceGroupsTaggingAPI20170126GetTagValues(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues'].$post(args, options),
  )
}

export async function postXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetResourceGroupsTaggingAPI20170126TagResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources'].$post(args, options),
  )
}

export async function postXAmzTargetResourceGroupsTaggingAPI20170126UntagResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources'].$post(args, options),
  )
}
