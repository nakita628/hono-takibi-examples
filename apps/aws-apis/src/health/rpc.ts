import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeAffectedEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeEntityAggregates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeEventAggregates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeEventDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeEventTypes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeEvents'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeEventsForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization'].$post(
      args,
      options,
    ),
  )
}
