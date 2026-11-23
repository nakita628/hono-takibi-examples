import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlan(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlan(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlans(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlan(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'].$post(
      args,
      options,
    ),
  )
}
