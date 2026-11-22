import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSSupport20130415AddAttachmentsToSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415AddCommunicationToCase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415CreateCase(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.CreateCase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.CreateCase'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415DescribeAttachment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415DescribeCases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.DescribeCases'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415DescribeCommunications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415DescribeServices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.DescribeServices'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415DescribeSeverityLevels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatuses(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResult(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummaries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheck(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSupport20130415ResolveCase(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.ResolveCase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSupport_20130415.ResolveCase'].$post(args, options),
  )
}
