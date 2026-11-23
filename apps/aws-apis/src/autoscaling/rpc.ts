import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAttachInstances(
  args: InferRequestType<(typeof client)['#Action=AttachInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachInstances'].$get(args, options))
}

export async function postActionAttachInstances(
  args: InferRequestType<(typeof client)['#Action=AttachInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachInstances'].$post(args, options))
}

export async function getActionAttachLoadBalancerTargetGroups(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachLoadBalancerTargetGroups'].$get(args, options))
}

export async function postActionAttachLoadBalancerTargetGroups(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachLoadBalancerTargetGroups'].$post(args, options))
}

export async function getActionAttachLoadBalancers(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachLoadBalancers'].$get(args, options))
}

export async function postActionAttachLoadBalancers(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachLoadBalancers'].$post(args, options))
}

export async function getActionAttachTrafficSources(
  args: InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachTrafficSources'].$get(args, options))
}

export async function postActionAttachTrafficSources(
  args: InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachTrafficSources'].$post(args, options))
}

export async function getActionBatchDeleteScheduledAction(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchDeleteScheduledAction'].$get(args, options))
}

export async function postActionBatchDeleteScheduledAction(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchDeleteScheduledAction'].$post(args, options))
}

export async function getActionBatchPutScheduledUpdateGroupAction(
  args: InferRequestType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=BatchPutScheduledUpdateGroupAction'].$get(args, options),
  )
}

export async function postActionBatchPutScheduledUpdateGroupAction(
  args: InferRequestType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=BatchPutScheduledUpdateGroupAction'].$post(args, options),
  )
}

export async function getActionCancelInstanceRefresh(
  args: InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelInstanceRefresh'].$get(args, options))
}

export async function postActionCancelInstanceRefresh(
  args: InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelInstanceRefresh'].$post(args, options))
}

export async function getActionCompleteLifecycleAction(
  args: InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CompleteLifecycleAction'].$get(args, options))
}

export async function postActionCompleteLifecycleAction(
  args: InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CompleteLifecycleAction'].$post(args, options))
}

export async function getActionCreateAutoScalingGroup(
  args: InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAutoScalingGroup'].$get(args, options))
}

export async function postActionCreateAutoScalingGroup(
  args: InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAutoScalingGroup'].$post(args, options))
}

export async function getActionCreateLaunchConfiguration(
  args: InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLaunchConfiguration'].$get(args, options))
}

export async function postActionCreateLaunchConfiguration(
  args: InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLaunchConfiguration'].$post(args, options))
}

export async function getActionCreateOrUpdateTags(
  args: InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateOrUpdateTags'].$get(args, options))
}

export async function postActionCreateOrUpdateTags(
  args: InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateOrUpdateTags'].$post(args, options))
}

export async function getActionDeleteAutoScalingGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAutoScalingGroup'].$get(args, options))
}

export async function postActionDeleteAutoScalingGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAutoScalingGroup'].$post(args, options))
}

export async function getActionDeleteLaunchConfiguration(
  args: InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLaunchConfiguration'].$get(args, options))
}

export async function postActionDeleteLaunchConfiguration(
  args: InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLaunchConfiguration'].$post(args, options))
}

export async function getActionDeleteLifecycleHook(
  args: InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLifecycleHook'].$get(args, options))
}

export async function postActionDeleteLifecycleHook(
  args: InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLifecycleHook'].$post(args, options))
}

export async function getActionDeleteNotificationConfiguration(
  args: InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNotificationConfiguration'].$get(args, options))
}

export async function postActionDeleteNotificationConfiguration(
  args: InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNotificationConfiguration'].$post(args, options))
}

export async function getActionDeletePolicy(
  args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePolicy'].$get(args, options))
}

export async function postActionDeletePolicy(
  args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePolicy'].$post(args, options))
}

export async function getActionDeleteScheduledAction(
  args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteScheduledAction'].$get(args, options))
}

export async function postActionDeleteScheduledAction(
  args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteScheduledAction'].$post(args, options))
}

export async function getActionDeleteTags(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTags'].$get(args, options))
}

export async function postActionDeleteTags(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTags'].$post(args, options))
}

export async function getActionDeleteWarmPool(
  args: InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteWarmPool'].$get(args, options))
}

export async function postActionDeleteWarmPool(
  args: InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteWarmPool'].$post(args, options))
}

export async function getActionDescribeAccountLimits(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountLimits'].$get(args, options))
}

export async function postActionDescribeAccountLimits(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountLimits'].$post(args, options))
}

export async function getActionDescribeAdjustmentTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAdjustmentTypes'].$get(args, options))
}

export async function postActionDescribeAdjustmentTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAdjustmentTypes'].$post(args, options))
}

export async function getActionDescribeAutoScalingGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAutoScalingGroups'].$get(args, options))
}

export async function postActionDescribeAutoScalingGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAutoScalingGroups'].$post(args, options))
}

export async function getActionDescribeAutoScalingInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAutoScalingInstances'].$get(args, options))
}

export async function postActionDescribeAutoScalingInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAutoScalingInstances'].$post(args, options))
}

export async function getActionDescribeAutoScalingNotificationTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeAutoScalingNotificationTypes'].$get(args, options),
  )
}

export async function postActionDescribeAutoScalingNotificationTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeAutoScalingNotificationTypes'].$post(args, options),
  )
}

export async function getActionDescribeInstanceRefreshes(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceRefreshes'].$get(args, options))
}

export async function postActionDescribeInstanceRefreshes(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceRefreshes'].$post(args, options))
}

export async function getActionDescribeLaunchConfigurations(
  args: InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLaunchConfigurations'].$get(args, options))
}

export async function postActionDescribeLaunchConfigurations(
  args: InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLaunchConfigurations'].$post(args, options))
}

export async function getActionDescribeLifecycleHookTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLifecycleHookTypes'].$get(args, options))
}

export async function postActionDescribeLifecycleHookTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLifecycleHookTypes'].$post(args, options))
}

export async function getActionDescribeLifecycleHooks(
  args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLifecycleHooks'].$get(args, options))
}

export async function postActionDescribeLifecycleHooks(
  args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLifecycleHooks'].$post(args, options))
}

export async function getActionDescribeLoadBalancerTargetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancerTargetGroups'].$get(args, options))
}

export async function postActionDescribeLoadBalancerTargetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeLoadBalancerTargetGroups'].$post(args, options),
  )
}

export async function getActionDescribeLoadBalancers(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancers'].$get(args, options))
}

export async function postActionDescribeLoadBalancers(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancers'].$post(args, options))
}

export async function getActionDescribeMetricCollectionTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeMetricCollectionTypes'].$get(args, options))
}

export async function postActionDescribeMetricCollectionTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeMetricCollectionTypes'].$post(args, options))
}

export async function getActionDescribeNotificationConfigurations(
  args: InferRequestType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNotificationConfigurations'].$get(args, options),
  )
}

export async function postActionDescribeNotificationConfigurations(
  args: InferRequestType<(typeof client)['#Action=DescribeNotificationConfigurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNotificationConfigurations'].$post(args, options),
  )
}

export async function getActionDescribePolicies(
  args: InferRequestType<(typeof client)['#Action=DescribePolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePolicies'].$get(args, options))
}

export async function postActionDescribePolicies(
  args: InferRequestType<(typeof client)['#Action=DescribePolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePolicies'].$post(args, options))
}

export async function getActionDescribeScalingActivities(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScalingActivities'].$get(args, options))
}

export async function postActionDescribeScalingActivities(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScalingActivities'].$post(args, options))
}

export async function getActionDescribeScalingProcessTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScalingProcessTypes'].$get(args, options))
}

export async function postActionDescribeScalingProcessTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScalingProcessTypes'].$post(args, options))
}

export async function getActionDescribeScheduledActions(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScheduledActions'].$get(args, options))
}

export async function postActionDescribeScheduledActions(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScheduledActions'].$post(args, options))
}

export async function getActionDescribeTags(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTags'].$get(args, options))
}

export async function postActionDescribeTags(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTags'].$post(args, options))
}

export async function getActionDescribeTerminationPolicyTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTerminationPolicyTypes'].$get(args, options))
}

export async function postActionDescribeTerminationPolicyTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTerminationPolicyTypes'].$post(args, options))
}

export async function getActionDescribeTrafficSources(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTrafficSources'].$get(args, options))
}

export async function postActionDescribeTrafficSources(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTrafficSources'].$post(args, options))
}

export async function getActionDescribeWarmPool(
  args: InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeWarmPool'].$get(args, options))
}

export async function postActionDescribeWarmPool(
  args: InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeWarmPool'].$post(args, options))
}

export async function getActionDetachInstances(
  args: InferRequestType<(typeof client)['#Action=DetachInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachInstances'].$get(args, options))
}

export async function postActionDetachInstances(
  args: InferRequestType<(typeof client)['#Action=DetachInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachInstances'].$post(args, options))
}

export async function getActionDetachLoadBalancerTargetGroups(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachLoadBalancerTargetGroups'].$get(args, options))
}

export async function postActionDetachLoadBalancerTargetGroups(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachLoadBalancerTargetGroups'].$post(args, options))
}

export async function getActionDetachLoadBalancers(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachLoadBalancers'].$get(args, options))
}

export async function postActionDetachLoadBalancers(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachLoadBalancers'].$post(args, options))
}

export async function getActionDetachTrafficSources(
  args: InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachTrafficSources'].$get(args, options))
}

export async function postActionDetachTrafficSources(
  args: InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachTrafficSources'].$post(args, options))
}

export async function getActionDisableMetricsCollection(
  args: InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableMetricsCollection'].$get(args, options))
}

export async function postActionDisableMetricsCollection(
  args: InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableMetricsCollection'].$post(args, options))
}

export async function getActionEnableMetricsCollection(
  args: InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableMetricsCollection'].$get(args, options))
}

export async function postActionEnableMetricsCollection(
  args: InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableMetricsCollection'].$post(args, options))
}

export async function getActionEnterStandby(
  args: InferRequestType<(typeof client)['#Action=EnterStandby']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnterStandby'].$get(args, options))
}

export async function postActionEnterStandby(
  args: InferRequestType<(typeof client)['#Action=EnterStandby']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnterStandby'].$post(args, options))
}

export async function getActionExecutePolicy(
  args: InferRequestType<(typeof client)['#Action=ExecutePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExecutePolicy'].$get(args, options))
}

export async function postActionExecutePolicy(
  args: InferRequestType<(typeof client)['#Action=ExecutePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExecutePolicy'].$post(args, options))
}

export async function getActionExitStandby(
  args: InferRequestType<(typeof client)['#Action=ExitStandby']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExitStandby'].$get(args, options))
}

export async function postActionExitStandby(
  args: InferRequestType<(typeof client)['#Action=ExitStandby']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExitStandby'].$post(args, options))
}

export async function getActionGetPredictiveScalingForecast(
  args: InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetPredictiveScalingForecast'].$get(args, options))
}

export async function postActionGetPredictiveScalingForecast(
  args: InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetPredictiveScalingForecast'].$post(args, options))
}

export async function getActionPutLifecycleHook(
  args: InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutLifecycleHook'].$get(args, options))
}

export async function postActionPutLifecycleHook(
  args: InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutLifecycleHook'].$post(args, options))
}

export async function getActionPutNotificationConfiguration(
  args: InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutNotificationConfiguration'].$get(args, options))
}

export async function postActionPutNotificationConfiguration(
  args: InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutNotificationConfiguration'].$post(args, options))
}

export async function getActionPutScalingPolicy(
  args: InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutScalingPolicy'].$get(args, options))
}

export async function postActionPutScalingPolicy(
  args: InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutScalingPolicy'].$post(args, options))
}

export async function getActionPutScheduledUpdateGroupAction(
  args: InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutScheduledUpdateGroupAction'].$get(args, options))
}

export async function postActionPutScheduledUpdateGroupAction(
  args: InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutScheduledUpdateGroupAction'].$post(args, options))
}

export async function getActionPutWarmPool(
  args: InferRequestType<(typeof client)['#Action=PutWarmPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutWarmPool'].$get(args, options))
}

export async function postActionPutWarmPool(
  args: InferRequestType<(typeof client)['#Action=PutWarmPool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutWarmPool'].$post(args, options))
}

export async function getActionRecordLifecycleActionHeartbeat(
  args: InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RecordLifecycleActionHeartbeat'].$get(args, options))
}

export async function postActionRecordLifecycleActionHeartbeat(
  args: InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RecordLifecycleActionHeartbeat'].$post(args, options))
}

export async function getActionResumeProcesses(
  args: InferRequestType<(typeof client)['#Action=ResumeProcesses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResumeProcesses'].$get(args, options))
}

export async function postActionResumeProcesses(
  args: InferRequestType<(typeof client)['#Action=ResumeProcesses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResumeProcesses'].$post(args, options))
}

export async function getActionRollbackInstanceRefresh(
  args: InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RollbackInstanceRefresh'].$get(args, options))
}

export async function postActionRollbackInstanceRefresh(
  args: InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RollbackInstanceRefresh'].$post(args, options))
}

export async function getActionSetDesiredCapacity(
  args: InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetDesiredCapacity'].$get(args, options))
}

export async function postActionSetDesiredCapacity(
  args: InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetDesiredCapacity'].$post(args, options))
}

export async function getActionSetInstanceHealth(
  args: InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetInstanceHealth'].$get(args, options))
}

export async function postActionSetInstanceHealth(
  args: InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetInstanceHealth'].$post(args, options))
}

export async function getActionSetInstanceProtection(
  args: InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetInstanceProtection'].$get(args, options))
}

export async function postActionSetInstanceProtection(
  args: InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetInstanceProtection'].$post(args, options))
}

export async function getActionStartInstanceRefresh(
  args: InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartInstanceRefresh'].$get(args, options))
}

export async function postActionStartInstanceRefresh(
  args: InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartInstanceRefresh'].$post(args, options))
}

export async function getActionSuspendProcesses(
  args: InferRequestType<(typeof client)['#Action=SuspendProcesses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SuspendProcesses'].$get(args, options))
}

export async function postActionSuspendProcesses(
  args: InferRequestType<(typeof client)['#Action=SuspendProcesses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SuspendProcesses'].$post(args, options))
}

export async function getActionTerminateInstanceInAutoScalingGroup(
  args: InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=TerminateInstanceInAutoScalingGroup'].$get(args, options),
  )
}

export async function postActionTerminateInstanceInAutoScalingGroup(
  args: InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=TerminateInstanceInAutoScalingGroup'].$post(args, options),
  )
}

export async function getActionUpdateAutoScalingGroup(
  args: InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAutoScalingGroup'].$get(args, options))
}

export async function postActionUpdateAutoScalingGroup(
  args: InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAutoScalingGroup'].$post(args, options))
}
