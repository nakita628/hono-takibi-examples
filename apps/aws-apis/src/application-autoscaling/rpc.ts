import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceDeleteScheduledAction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceDeregisterScalableTarget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceDescribeScalableTargets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceDescribeScalingActivities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceDescribeScalingPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServicePutScalingPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServicePutScheduledAction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceRegisterScalableTarget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleFrontendServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleFrontendService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleFrontendService.UntagResource'].$post(args, options),
  )
}
