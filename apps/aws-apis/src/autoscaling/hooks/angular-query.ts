import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionAttachInstancesKey() {
  return ['#Action=AttachInstances'] as const
}

export function getActionAttachLoadBalancerTargetGroupsKey() {
  return ['#Action=AttachLoadBalancerTargetGroups'] as const
}

export function getActionAttachLoadBalancersKey() {
  return ['#Action=AttachLoadBalancers'] as const
}

export function getActionAttachTrafficSourcesKey() {
  return ['#Action=AttachTrafficSources'] as const
}

export function getActionBatchDeleteScheduledActionKey() {
  return ['#Action=BatchDeleteScheduledAction'] as const
}

export function getActionBatchPutScheduledUpdateGroupActionKey() {
  return ['#Action=BatchPutScheduledUpdateGroupAction'] as const
}

export function getActionCancelInstanceRefreshKey() {
  return ['#Action=CancelInstanceRefresh'] as const
}

export function getActionCompleteLifecycleActionKey() {
  return ['#Action=CompleteLifecycleAction'] as const
}

export function getActionCreateAutoScalingGroupKey() {
  return ['#Action=CreateAutoScalingGroup'] as const
}

export function getActionCreateLaunchConfigurationKey() {
  return ['#Action=CreateLaunchConfiguration'] as const
}

export function getActionCreateOrUpdateTagsKey() {
  return ['#Action=CreateOrUpdateTags'] as const
}

export function getActionDeleteAutoScalingGroupKey() {
  return ['#Action=DeleteAutoScalingGroup'] as const
}

export function getActionDeleteLaunchConfigurationKey() {
  return ['#Action=DeleteLaunchConfiguration'] as const
}

export function getActionDeleteLifecycleHookKey() {
  return ['#Action=DeleteLifecycleHook'] as const
}

export function getActionDeleteNotificationConfigurationKey() {
  return ['#Action=DeleteNotificationConfiguration'] as const
}

export function getActionDeletePolicyKey() {
  return ['#Action=DeletePolicy'] as const
}

export function getActionDeleteScheduledActionKey() {
  return ['#Action=DeleteScheduledAction'] as const
}

export function getActionDeleteTagsKey() {
  return ['#Action=DeleteTags'] as const
}

export function getActionDeleteWarmPoolKey() {
  return ['#Action=DeleteWarmPool'] as const
}

export function getActionDescribeAccountLimitsKey() {
  return ['#Action=DescribeAccountLimits'] as const
}

export function getActionDescribeAdjustmentTypesKey() {
  return ['#Action=DescribeAdjustmentTypes'] as const
}

export function getActionDescribeAutoScalingGroupsKey() {
  return ['#Action=DescribeAutoScalingGroups'] as const
}

export function getActionDescribeAutoScalingInstancesKey() {
  return ['#Action=DescribeAutoScalingInstances'] as const
}

export function getActionDescribeAutoScalingNotificationTypesKey() {
  return ['#Action=DescribeAutoScalingNotificationTypes'] as const
}

export function getActionDescribeInstanceRefreshesKey() {
  return ['#Action=DescribeInstanceRefreshes'] as const
}

export function getActionDescribeLaunchConfigurationsKey() {
  return ['#Action=DescribeLaunchConfigurations'] as const
}

export function getActionDescribeLifecycleHookTypesKey() {
  return ['#Action=DescribeLifecycleHookTypes'] as const
}

export function getActionDescribeLifecycleHooksKey() {
  return ['#Action=DescribeLifecycleHooks'] as const
}

export function getActionDescribeLoadBalancerTargetGroupsKey() {
  return ['#Action=DescribeLoadBalancerTargetGroups'] as const
}

export function getActionDescribeLoadBalancersKey() {
  return ['#Action=DescribeLoadBalancers'] as const
}

export function getActionDescribeMetricCollectionTypesKey() {
  return ['#Action=DescribeMetricCollectionTypes'] as const
}

export function getActionDescribeNotificationConfigurationsKey() {
  return ['#Action=DescribeNotificationConfigurations'] as const
}

export function getActionDescribePoliciesKey() {
  return ['#Action=DescribePolicies'] as const
}

export function getActionDescribeScalingActivitiesKey() {
  return ['#Action=DescribeScalingActivities'] as const
}

export function getActionDescribeScalingProcessTypesKey() {
  return ['#Action=DescribeScalingProcessTypes'] as const
}

export function getActionDescribeScheduledActionsKey() {
  return ['#Action=DescribeScheduledActions'] as const
}

export function getActionDescribeTagsKey() {
  return ['#Action=DescribeTags'] as const
}

export function getActionDescribeTerminationPolicyTypesKey() {
  return ['#Action=DescribeTerminationPolicyTypes'] as const
}

export function getActionDescribeTrafficSourcesKey() {
  return ['#Action=DescribeTrafficSources'] as const
}

export function getActionDescribeWarmPoolKey() {
  return ['#Action=DescribeWarmPool'] as const
}

export function getActionDetachInstancesKey() {
  return ['#Action=DetachInstances'] as const
}

export function getActionDetachLoadBalancerTargetGroupsKey() {
  return ['#Action=DetachLoadBalancerTargetGroups'] as const
}

export function getActionDetachLoadBalancersKey() {
  return ['#Action=DetachLoadBalancers'] as const
}

export function getActionDetachTrafficSourcesKey() {
  return ['#Action=DetachTrafficSources'] as const
}

export function getActionDisableMetricsCollectionKey() {
  return ['#Action=DisableMetricsCollection'] as const
}

export function getActionEnableMetricsCollectionKey() {
  return ['#Action=EnableMetricsCollection'] as const
}

export function getActionEnterStandbyKey() {
  return ['#Action=EnterStandby'] as const
}

export function getActionExecutePolicyKey() {
  return ['#Action=ExecutePolicy'] as const
}

export function getActionExitStandbyKey() {
  return ['#Action=ExitStandby'] as const
}

export function getActionGetPredictiveScalingForecastKey() {
  return ['#Action=GetPredictiveScalingForecast'] as const
}

export function getActionPutLifecycleHookKey() {
  return ['#Action=PutLifecycleHook'] as const
}

export function getActionPutNotificationConfigurationKey() {
  return ['#Action=PutNotificationConfiguration'] as const
}

export function getActionPutScalingPolicyKey() {
  return ['#Action=PutScalingPolicy'] as const
}

export function getActionPutScheduledUpdateGroupActionKey() {
  return ['#Action=PutScheduledUpdateGroupAction'] as const
}

export function getActionPutWarmPoolKey() {
  return ['#Action=PutWarmPool'] as const
}

export function getActionRecordLifecycleActionHeartbeatKey() {
  return ['#Action=RecordLifecycleActionHeartbeat'] as const
}

export function getActionResumeProcessesKey() {
  return ['#Action=ResumeProcesses'] as const
}

export function getActionRollbackInstanceRefreshKey() {
  return ['#Action=RollbackInstanceRefresh'] as const
}

export function getActionSetDesiredCapacityKey() {
  return ['#Action=SetDesiredCapacity'] as const
}

export function getActionSetInstanceHealthKey() {
  return ['#Action=SetInstanceHealth'] as const
}

export function getActionSetInstanceProtectionKey() {
  return ['#Action=SetInstanceProtection'] as const
}

export function getActionStartInstanceRefreshKey() {
  return ['#Action=StartInstanceRefresh'] as const
}

export function getActionSuspendProcessesKey() {
  return ['#Action=SuspendProcesses'] as const
}

export function getActionTerminateInstanceInAutoScalingGroupKey() {
  return ['#Action=TerminateInstanceInAutoScalingGroup'] as const
}

export function getActionUpdateAutoScalingGroupKey() {
  return ['#Action=UpdateAutoScalingGroup'] as const
}

export function getActionAttachInstancesQueryKey(
  args: InferRequestType<(typeof client)['#Action=AttachInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AttachInstances', '/#Action=AttachInstances', keyArgs] as const
}

export function getActionAttachInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AttachInstances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AttachInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAttachInstancesQueryKey>
  >({
    queryKey: getActionAttachInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AttachInstances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionAttachInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AttachInstances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AttachInstances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AttachInstances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAttachInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionAttachInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionAttachInstancesMutationKey() {
  return ['#Action=AttachInstances', '/#Action=AttachInstances', 'POST'] as const
}

export function getPostActionAttachInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AttachInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAttachInstancesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=AttachInstances']['$post']>) {
      return parseResponse(client['#Action=AttachInstances'].$post(args, options))
    },
  })
}

export function injectPostActionAttachInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AttachInstances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AttachInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionAttachInstancesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionAttachLoadBalancerTargetGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AttachLoadBalancerTargetGroups',
    '/#Action=AttachLoadBalancerTargetGroups',
    keyArgs,
  ] as const
}

export function getActionAttachLoadBalancerTargetGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAttachLoadBalancerTargetGroupsQueryKey>
  >({
    queryKey: getActionAttachLoadBalancerTargetGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AttachLoadBalancerTargetGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionAttachLoadBalancerTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAttachLoadBalancerTargetGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionAttachLoadBalancerTargetGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionAttachLoadBalancerTargetGroupsMutationKey() {
  return [
    '#Action=AttachLoadBalancerTargetGroups',
    '/#Action=AttachLoadBalancerTargetGroups',
    'POST',
  ] as const
}

export function getPostActionAttachLoadBalancerTargetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAttachLoadBalancerTargetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=AttachLoadBalancerTargetGroups'].$post(args, options))
    },
  })
}

export function injectPostActionAttachLoadBalancerTargetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionAttachLoadBalancerTargetGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionAttachLoadBalancersQueryKey(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AttachLoadBalancers', '/#Action=AttachLoadBalancers', keyArgs] as const
}

export function getActionAttachLoadBalancersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAttachLoadBalancersQueryKey>
  >({
    queryKey: getActionAttachLoadBalancersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AttachLoadBalancers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionAttachLoadBalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAttachLoadBalancersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionAttachLoadBalancersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionAttachLoadBalancersMutationKey() {
  return ['#Action=AttachLoadBalancers', '/#Action=AttachLoadBalancers', 'POST'] as const
}

export function getPostActionAttachLoadBalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAttachLoadBalancersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$post']>,
    ) {
      return parseResponse(client['#Action=AttachLoadBalancers'].$post(args, options))
    },
  })
}

export function injectPostActionAttachLoadBalancers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionAttachLoadBalancersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionAttachTrafficSourcesQueryKey(
  args: InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AttachTrafficSources', '/#Action=AttachTrafficSources', keyArgs] as const
}

export function getActionAttachTrafficSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachTrafficSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachTrafficSources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAttachTrafficSourcesQueryKey>
  >({
    queryKey: getActionAttachTrafficSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AttachTrafficSources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionAttachTrafficSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachTrafficSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AttachTrafficSources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAttachTrafficSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionAttachTrafficSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionAttachTrafficSourcesMutationKey() {
  return ['#Action=AttachTrafficSources', '/#Action=AttachTrafficSources', 'POST'] as const
}

export function getPostActionAttachTrafficSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachTrafficSources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAttachTrafficSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$post']>,
    ) {
      return parseResponse(client['#Action=AttachTrafficSources'].$post(args, options))
    },
  })
}

export function injectPostActionAttachTrafficSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AttachTrafficSources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionAttachTrafficSourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionBatchDeleteScheduledActionQueryKey(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=BatchDeleteScheduledAction',
    '/#Action=BatchDeleteScheduledAction',
    keyArgs,
  ] as const
}

export function getActionBatchDeleteScheduledActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBatchDeleteScheduledActionQueryKey>
  >({
    queryKey: getActionBatchDeleteScheduledActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=BatchDeleteScheduledAction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionBatchDeleteScheduledAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionBatchDeleteScheduledActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionBatchDeleteScheduledActionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionBatchDeleteScheduledActionMutationKey() {
  return [
    '#Action=BatchDeleteScheduledAction',
    '/#Action=BatchDeleteScheduledAction',
    'POST',
  ] as const
}

export function getPostActionBatchDeleteScheduledActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchDeleteScheduledAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBatchDeleteScheduledActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$post']>,
    ) {
      return parseResponse(client['#Action=BatchDeleteScheduledAction'].$post(args, options))
    },
  })
}

export function injectPostActionBatchDeleteScheduledAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BatchDeleteScheduledAction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionBatchDeleteScheduledActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionBatchPutScheduledUpdateGroupActionQueryKey(
  args: InferRequestType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=BatchPutScheduledUpdateGroupAction',
    '/#Action=BatchPutScheduledUpdateGroupAction',
    keyArgs,
  ] as const
}

export function getActionBatchPutScheduledUpdateGroupActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBatchPutScheduledUpdateGroupActionQueryKey>
  >({
    queryKey: getActionBatchPutScheduledUpdateGroupActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=BatchPutScheduledUpdateGroupAction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionBatchPutScheduledUpdateGroupAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionBatchPutScheduledUpdateGroupActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionBatchPutScheduledUpdateGroupActionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionBatchPutScheduledUpdateGroupActionMutationKey() {
  return [
    '#Action=BatchPutScheduledUpdateGroupAction',
    '/#Action=BatchPutScheduledUpdateGroupAction',
    'POST',
  ] as const
}

export function getPostActionBatchPutScheduledUpdateGroupActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBatchPutScheduledUpdateGroupActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=BatchPutScheduledUpdateGroupAction'].$post(args, options),
      )
    },
  })
}

export function injectPostActionBatchPutScheduledUpdateGroupAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionBatchPutScheduledUpdateGroupActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCancelInstanceRefreshQueryKey(
  args: InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CancelInstanceRefresh', '/#Action=CancelInstanceRefresh', keyArgs] as const
}

export function getActionCancelInstanceRefreshQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCancelInstanceRefreshQueryKey>
  >({
    queryKey: getActionCancelInstanceRefreshQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CancelInstanceRefresh'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCancelInstanceRefresh<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCancelInstanceRefreshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCancelInstanceRefreshQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCancelInstanceRefreshMutationKey() {
  return ['#Action=CancelInstanceRefresh', '/#Action=CancelInstanceRefresh', 'POST'] as const
}

export function getPostActionCancelInstanceRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CancelInstanceRefresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCancelInstanceRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$post']>,
    ) {
      return parseResponse(client['#Action=CancelInstanceRefresh'].$post(args, options))
    },
  })
}

export function injectPostActionCancelInstanceRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CancelInstanceRefresh']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCancelInstanceRefreshMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCompleteLifecycleActionQueryKey(
  args: InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CompleteLifecycleAction', '/#Action=CompleteLifecycleAction', keyArgs] as const
}

export function getActionCompleteLifecycleActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCompleteLifecycleActionQueryKey>
  >({
    queryKey: getActionCompleteLifecycleActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CompleteLifecycleAction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCompleteLifecycleAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCompleteLifecycleActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCompleteLifecycleActionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCompleteLifecycleActionMutationKey() {
  return ['#Action=CompleteLifecycleAction', '/#Action=CompleteLifecycleAction', 'POST'] as const
}

export function getPostActionCompleteLifecycleActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CompleteLifecycleAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCompleteLifecycleActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$post']>,
    ) {
      return parseResponse(client['#Action=CompleteLifecycleAction'].$post(args, options))
    },
  })
}

export function injectPostActionCompleteLifecycleAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CompleteLifecycleAction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCompleteLifecycleActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCreateAutoScalingGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateAutoScalingGroup', '/#Action=CreateAutoScalingGroup', keyArgs] as const
}

export function getActionCreateAutoScalingGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateAutoScalingGroupQueryKey>
  >({
    queryKey: getActionCreateAutoScalingGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateAutoScalingGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateAutoScalingGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateAutoScalingGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateAutoScalingGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateAutoScalingGroupMutationKey() {
  return ['#Action=CreateAutoScalingGroup', '/#Action=CreateAutoScalingGroup', 'POST'] as const
}

export function getPostActionCreateAutoScalingGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAutoScalingGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateAutoScalingGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateAutoScalingGroup'].$post(args, options))
    },
  })
}

export function injectPostActionCreateAutoScalingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateAutoScalingGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCreateAutoScalingGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCreateLaunchConfigurationQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateLaunchConfiguration',
    '/#Action=CreateLaunchConfiguration',
    keyArgs,
  ] as const
}

export function getActionCreateLaunchConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLaunchConfigurationQueryKey>
  >({
    queryKey: getActionCreateLaunchConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateLaunchConfiguration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateLaunchConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateLaunchConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateLaunchConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateLaunchConfigurationMutationKey() {
  return [
    '#Action=CreateLaunchConfiguration',
    '/#Action=CreateLaunchConfiguration',
    'POST',
  ] as const
}

export function getPostActionCreateLaunchConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLaunchConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateLaunchConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateLaunchConfiguration'].$post(args, options))
    },
  })
}

export function injectPostActionCreateLaunchConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateLaunchConfiguration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCreateLaunchConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCreateOrUpdateTagsQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateOrUpdateTags', '/#Action=CreateOrUpdateTags', keyArgs] as const
}

export function getActionCreateOrUpdateTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateOrUpdateTagsQueryKey>
  >({
    queryKey: getActionCreateOrUpdateTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateOrUpdateTags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateOrUpdateTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateOrUpdateTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateOrUpdateTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateOrUpdateTagsMutationKey() {
  return ['#Action=CreateOrUpdateTags', '/#Action=CreateOrUpdateTags', 'POST'] as const
}

export function getPostActionCreateOrUpdateTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateOrUpdateTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateOrUpdateTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateOrUpdateTags'].$post(args, options))
    },
  })
}

export function injectPostActionCreateOrUpdateTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateOrUpdateTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCreateOrUpdateTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteAutoScalingGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteAutoScalingGroup', '/#Action=DeleteAutoScalingGroup', keyArgs] as const
}

export function getActionDeleteAutoScalingGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAutoScalingGroupQueryKey>
  >({
    queryKey: getActionDeleteAutoScalingGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteAutoScalingGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteAutoScalingGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteAutoScalingGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteAutoScalingGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteAutoScalingGroupMutationKey() {
  return ['#Action=DeleteAutoScalingGroup', '/#Action=DeleteAutoScalingGroup', 'POST'] as const
}

export function getPostActionDeleteAutoScalingGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAutoScalingGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteAutoScalingGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteAutoScalingGroup'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteAutoScalingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAutoScalingGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteAutoScalingGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteLaunchConfigurationQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteLaunchConfiguration',
    '/#Action=DeleteLaunchConfiguration',
    keyArgs,
  ] as const
}

export function getActionDeleteLaunchConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteLaunchConfigurationQueryKey>
  >({
    queryKey: getActionDeleteLaunchConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteLaunchConfiguration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteLaunchConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteLaunchConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteLaunchConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteLaunchConfigurationMutationKey() {
  return [
    '#Action=DeleteLaunchConfiguration',
    '/#Action=DeleteLaunchConfiguration',
    'POST',
  ] as const
}

export function getPostActionDeleteLaunchConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLaunchConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteLaunchConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteLaunchConfiguration'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteLaunchConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteLaunchConfiguration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteLaunchConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteLifecycleHookQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteLifecycleHook', '/#Action=DeleteLifecycleHook', keyArgs] as const
}

export function getActionDeleteLifecycleHookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteLifecycleHookQueryKey>
  >({
    queryKey: getActionDeleteLifecycleHookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteLifecycleHook'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteLifecycleHook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteLifecycleHookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteLifecycleHookQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteLifecycleHookMutationKey() {
  return ['#Action=DeleteLifecycleHook', '/#Action=DeleteLifecycleHook', 'POST'] as const
}

export function getPostActionDeleteLifecycleHookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLifecycleHook']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteLifecycleHookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteLifecycleHook'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteLifecycleHook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteLifecycleHook']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteLifecycleHookMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteNotificationConfigurationQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteNotificationConfiguration',
    '/#Action=DeleteNotificationConfiguration',
    keyArgs,
  ] as const
}

export function getActionDeleteNotificationConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteNotificationConfigurationQueryKey>
  >({
    queryKey: getActionDeleteNotificationConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteNotificationConfiguration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteNotificationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteNotificationConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteNotificationConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteNotificationConfigurationMutationKey() {
  return [
    '#Action=DeleteNotificationConfiguration',
    '/#Action=DeleteNotificationConfiguration',
    'POST',
  ] as const
}

export function getPostActionDeleteNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteNotificationConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteNotificationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteNotificationConfiguration'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteNotificationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DeleteNotificationConfiguration']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteNotificationConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeletePolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeletePolicy', '/#Action=DeletePolicy', keyArgs] as const
}

export function getActionDeletePolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeletePolicyQueryKey>
  >({
    queryKey: getActionDeletePolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeletePolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeletePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeletePolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionDeletePolicyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionDeletePolicyMutationKey() {
  return ['#Action=DeletePolicy', '/#Action=DeletePolicy', 'POST'] as const
}

export function getPostActionDeletePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeletePolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']>) {
      return parseResponse(client['#Action=DeletePolicy'].$post(args, options))
    },
  })
}

export function injectPostActionDeletePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeletePolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteScheduledActionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteScheduledAction', '/#Action=DeleteScheduledAction', keyArgs] as const
}

export function getActionDeleteScheduledActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteScheduledActionQueryKey>
  >({
    queryKey: getActionDeleteScheduledActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteScheduledAction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteScheduledAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteScheduledActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteScheduledActionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteScheduledActionMutationKey() {
  return ['#Action=DeleteScheduledAction', '/#Action=DeleteScheduledAction', 'POST'] as const
}

export function getPostActionDeleteScheduledActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteScheduledActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteScheduledAction'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteScheduledAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteScheduledActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteTagsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteTags', '/#Action=DeleteTags', keyArgs] as const
}

export function getActionDeleteTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteTagsQueryKey>
  >({
    queryKey: getActionDeleteTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteTags'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActionDeleteTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionDeleteTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionDeleteTagsMutationKey() {
  return ['#Action=DeleteTags', '/#Action=DeleteTags', 'POST'] as const
}

export function getPostActionDeleteTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>) {
      return parseResponse(client['#Action=DeleteTags'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteWarmPoolQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteWarmPool', '/#Action=DeleteWarmPool', keyArgs] as const
}

export function getActionDeleteWarmPoolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteWarmPoolQueryKey>
  >({
    queryKey: getActionDeleteWarmPoolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteWarmPool'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteWarmPool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteWarmPoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteWarmPoolQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteWarmPoolMutationKey() {
  return ['#Action=DeleteWarmPool', '/#Action=DeleteWarmPool', 'POST'] as const
}

export function getPostActionDeleteWarmPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteWarmPoolMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$post']>) {
      return parseResponse(client['#Action=DeleteWarmPool'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteWarmPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteWarmPoolMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeAccountLimitsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', keyArgs] as const
}

export function getActionDescribeAccountLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAccountLimitsQueryKey>
  >({
    queryKey: getActionDescribeAccountLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAccountLimits'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeAccountLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAccountLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeAccountLimitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeAccountLimitsMutationKey() {
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', 'POST'] as const
}

export function getPostActionDescribeAccountLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAccountLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAccountLimits'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeAccountLimits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeAccountLimitsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeAdjustmentTypesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAdjustmentTypes', '/#Action=DescribeAdjustmentTypes', keyArgs] as const
}

export function getActionDescribeAdjustmentTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAdjustmentTypesQueryKey>
  >({
    queryKey: getActionDescribeAdjustmentTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAdjustmentTypes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeAdjustmentTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAdjustmentTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeAdjustmentTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeAdjustmentTypesMutationKey() {
  return ['#Action=DescribeAdjustmentTypes', '/#Action=DescribeAdjustmentTypes', 'POST'] as const
}

export function getPostActionDescribeAdjustmentTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAdjustmentTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAdjustmentTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAdjustmentTypes'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeAdjustmentTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAdjustmentTypes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeAdjustmentTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeAutoScalingGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAutoScalingGroups',
    '/#Action=DescribeAutoScalingGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeAutoScalingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAutoScalingGroupsQueryKey>
  >({
    queryKey: getActionDescribeAutoScalingGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAutoScalingGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeAutoScalingGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAutoScalingGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeAutoScalingGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeAutoScalingGroupsMutationKey() {
  return [
    '#Action=DescribeAutoScalingGroups',
    '/#Action=DescribeAutoScalingGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeAutoScalingGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAutoScalingGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAutoScalingGroups'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeAutoScalingGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingGroups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeAutoScalingGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeAutoScalingInstancesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAutoScalingInstances',
    '/#Action=DescribeAutoScalingInstances',
    keyArgs,
  ] as const
}

export function getActionDescribeAutoScalingInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAutoScalingInstancesQueryKey>
  >({
    queryKey: getActionDescribeAutoScalingInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAutoScalingInstances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeAutoScalingInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAutoScalingInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeAutoScalingInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeAutoScalingInstancesMutationKey() {
  return [
    '#Action=DescribeAutoScalingInstances',
    '/#Action=DescribeAutoScalingInstances',
    'POST',
  ] as const
}

export function getPostActionDescribeAutoScalingInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAutoScalingInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAutoScalingInstances'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeAutoScalingInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeAutoScalingInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeAutoScalingNotificationTypesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAutoScalingNotificationTypes',
    '/#Action=DescribeAutoScalingNotificationTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeAutoScalingNotificationTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAutoScalingNotificationTypesQueryKey>
  >({
    queryKey: getActionDescribeAutoScalingNotificationTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAutoScalingNotificationTypes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeAutoScalingNotificationTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAutoScalingNotificationTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeAutoScalingNotificationTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeAutoScalingNotificationTypesMutationKey() {
  return [
    '#Action=DescribeAutoScalingNotificationTypes',
    '/#Action=DescribeAutoScalingNotificationTypes',
    'POST',
  ] as const
}

export function getPostActionDescribeAutoScalingNotificationTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAutoScalingNotificationTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeAutoScalingNotificationTypes'].$post(args, options),
      )
    },
  })
}

export function injectPostActionDescribeAutoScalingNotificationTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeAutoScalingNotificationTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeInstanceRefreshesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeInstanceRefreshes',
    '/#Action=DescribeInstanceRefreshes',
    keyArgs,
  ] as const
}

export function getActionDescribeInstanceRefreshesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeInstanceRefreshesQueryKey>
  >({
    queryKey: getActionDescribeInstanceRefreshesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeInstanceRefreshes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeInstanceRefreshes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeInstanceRefreshesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeInstanceRefreshesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeInstanceRefreshesMutationKey() {
  return [
    '#Action=DescribeInstanceRefreshes',
    '/#Action=DescribeInstanceRefreshes',
    'POST',
  ] as const
}

export function getPostActionDescribeInstanceRefreshesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceRefreshes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeInstanceRefreshesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeInstanceRefreshes'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeInstanceRefreshes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceRefreshes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeInstanceRefreshesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeLaunchConfigurationsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeLaunchConfigurations',
    '/#Action=DescribeLaunchConfigurations',
    keyArgs,
  ] as const
}

export function getActionDescribeLaunchConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLaunchConfigurationsQueryKey>
  >({
    queryKey: getActionDescribeLaunchConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeLaunchConfigurations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeLaunchConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeLaunchConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeLaunchConfigurationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeLaunchConfigurationsMutationKey() {
  return [
    '#Action=DescribeLaunchConfigurations',
    '/#Action=DescribeLaunchConfigurations',
    'POST',
  ] as const
}

export function getPostActionDescribeLaunchConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLaunchConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLaunchConfigurations'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeLaunchConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeLaunchConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeLifecycleHookTypesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeLifecycleHookTypes',
    '/#Action=DescribeLifecycleHookTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeLifecycleHookTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLifecycleHookTypesQueryKey>
  >({
    queryKey: getActionDescribeLifecycleHookTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeLifecycleHookTypes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeLifecycleHookTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeLifecycleHookTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeLifecycleHookTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeLifecycleHookTypesMutationKey() {
  return [
    '#Action=DescribeLifecycleHookTypes',
    '/#Action=DescribeLifecycleHookTypes',
    'POST',
  ] as const
}

export function getPostActionDescribeLifecycleHookTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLifecycleHookTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLifecycleHookTypes'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeLifecycleHookTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeLifecycleHookTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeLifecycleHooksQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeLifecycleHooks', '/#Action=DescribeLifecycleHooks', keyArgs] as const
}

export function getActionDescribeLifecycleHooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLifecycleHooksQueryKey>
  >({
    queryKey: getActionDescribeLifecycleHooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeLifecycleHooks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeLifecycleHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeLifecycleHooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeLifecycleHooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeLifecycleHooksMutationKey() {
  return ['#Action=DescribeLifecycleHooks', '/#Action=DescribeLifecycleHooks', 'POST'] as const
}

export function getPostActionDescribeLifecycleHooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLifecycleHooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLifecycleHooks'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeLifecycleHooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeLifecycleHooksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeLoadBalancerTargetGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeLoadBalancerTargetGroups',
    '/#Action=DescribeLoadBalancerTargetGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeLoadBalancerTargetGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancerTargetGroupsQueryKey>
  >({
    queryKey: getActionDescribeLoadBalancerTargetGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeLoadBalancerTargetGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeLoadBalancerTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeLoadBalancerTargetGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeLoadBalancerTargetGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeLoadBalancerTargetGroupsMutationKey() {
  return [
    '#Action=DescribeLoadBalancerTargetGroups',
    '/#Action=DescribeLoadBalancerTargetGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeLoadBalancerTargetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLoadBalancerTargetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLoadBalancerTargetGroups'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeLoadBalancerTargetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeLoadBalancerTargetGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeLoadBalancersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeLoadBalancers', '/#Action=DescribeLoadBalancers', keyArgs] as const
}

export function getActionDescribeLoadBalancersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancersQueryKey>
  >({
    queryKey: getActionDescribeLoadBalancersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeLoadBalancers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeLoadBalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeLoadBalancersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeLoadBalancersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeLoadBalancersMutationKey() {
  return ['#Action=DescribeLoadBalancers', '/#Action=DescribeLoadBalancers', 'POST'] as const
}

export function getPostActionDescribeLoadBalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLoadBalancersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLoadBalancers'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeLoadBalancers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeLoadBalancersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeMetricCollectionTypesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeMetricCollectionTypes',
    '/#Action=DescribeMetricCollectionTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeMetricCollectionTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeMetricCollectionTypesQueryKey>
  >({
    queryKey: getActionDescribeMetricCollectionTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeMetricCollectionTypes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeMetricCollectionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeMetricCollectionTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeMetricCollectionTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeMetricCollectionTypesMutationKey() {
  return [
    '#Action=DescribeMetricCollectionTypes',
    '/#Action=DescribeMetricCollectionTypes',
    'POST',
  ] as const
}

export function getPostActionDescribeMetricCollectionTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeMetricCollectionTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeMetricCollectionTypes'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeMetricCollectionTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeMetricCollectionTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeNotificationConfigurationsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeNotificationConfigurations',
    '/#Action=DescribeNotificationConfigurations',
    keyArgs,
  ] as const
}

export function getActionDescribeNotificationConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeNotificationConfigurationsQueryKey>
  >({
    queryKey: getActionDescribeNotificationConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeNotificationConfigurations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeNotificationConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeNotificationConfigurations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeNotificationConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeNotificationConfigurationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeNotificationConfigurationsMutationKey() {
  return [
    '#Action=DescribeNotificationConfigurations',
    '/#Action=DescribeNotificationConfigurations',
    'POST',
  ] as const
}

export function getPostActionDescribeNotificationConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeNotificationConfigurations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeNotificationConfigurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeNotificationConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeNotificationConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeNotificationConfigurations'].$post(args, options),
      )
    },
  })
}

export function injectPostActionDescribeNotificationConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeNotificationConfigurations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeNotificationConfigurations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeNotificationConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribePoliciesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribePolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribePolicies', '/#Action=DescribePolicies', keyArgs] as const
}

export function getActionDescribePoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribePolicies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribePolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribePolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribePoliciesQueryKey>
  >({
    queryKey: getActionDescribePoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribePolicies'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribePolicies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribePolicies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribePolicies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribePoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribePoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribePoliciesMutationKey() {
  return ['#Action=DescribePolicies', '/#Action=DescribePolicies', 'POST'] as const
}

export function getPostActionDescribePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribePolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribePolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribePoliciesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribePolicies']['$post']>) {
      return parseResponse(client['#Action=DescribePolicies'].$post(args, options))
    },
  })
}

export function injectPostActionDescribePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribePolicies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribePolicies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribePoliciesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeScalingActivitiesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeScalingActivities',
    '/#Action=DescribeScalingActivities',
    keyArgs,
  ] as const
}

export function getActionDescribeScalingActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScalingActivities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScalingActivities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeScalingActivitiesQueryKey>
  >({
    queryKey: getActionDescribeScalingActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeScalingActivities'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeScalingActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScalingActivities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeScalingActivities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeScalingActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeScalingActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeScalingActivitiesMutationKey() {
  return [
    '#Action=DescribeScalingActivities',
    '/#Action=DescribeScalingActivities',
    'POST',
  ] as const
}

export function getPostActionDescribeScalingActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScalingActivities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeScalingActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeScalingActivities'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeScalingActivities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeScalingActivities']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeScalingActivitiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeScalingProcessTypesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeScalingProcessTypes',
    '/#Action=DescribeScalingProcessTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeScalingProcessTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeScalingProcessTypesQueryKey>
  >({
    queryKey: getActionDescribeScalingProcessTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeScalingProcessTypes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeScalingProcessTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeScalingProcessTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeScalingProcessTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeScalingProcessTypesMutationKey() {
  return [
    '#Action=DescribeScalingProcessTypes',
    '/#Action=DescribeScalingProcessTypes',
    'POST',
  ] as const
}

export function getPostActionDescribeScalingProcessTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScalingProcessTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeScalingProcessTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeScalingProcessTypes'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeScalingProcessTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeScalingProcessTypes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeScalingProcessTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeScheduledActionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeScheduledActions', '/#Action=DescribeScheduledActions', keyArgs] as const
}

export function getActionDescribeScheduledActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeScheduledActionsQueryKey>
  >({
    queryKey: getActionDescribeScheduledActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeScheduledActions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeScheduledActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeScheduledActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeScheduledActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeScheduledActionsMutationKey() {
  return ['#Action=DescribeScheduledActions', '/#Action=DescribeScheduledActions', 'POST'] as const
}

export function getPostActionDescribeScheduledActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeScheduledActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeScheduledActions'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeScheduledActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeScheduledActionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeTagsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeTags', '/#Action=DescribeTags', keyArgs] as const
}

export function getActionDescribeTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTagsQueryKey>
  >({
    queryKey: getActionDescribeTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeTags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionDescribeTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionDescribeTagsMutationKey() {
  return ['#Action=DescribeTags', '/#Action=DescribeTags', 'POST'] as const
}

export function getPostActionDescribeTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>) {
      return parseResponse(client['#Action=DescribeTags'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeTerminationPolicyTypesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeTerminationPolicyTypes',
    '/#Action=DescribeTerminationPolicyTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeTerminationPolicyTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTerminationPolicyTypesQueryKey>
  >({
    queryKey: getActionDescribeTerminationPolicyTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeTerminationPolicyTypes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeTerminationPolicyTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeTerminationPolicyTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeTerminationPolicyTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeTerminationPolicyTypesMutationKey() {
  return [
    '#Action=DescribeTerminationPolicyTypes',
    '/#Action=DescribeTerminationPolicyTypes',
    'POST',
  ] as const
}

export function getPostActionDescribeTerminationPolicyTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTerminationPolicyTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeTerminationPolicyTypes'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeTerminationPolicyTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeTerminationPolicyTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeTrafficSourcesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeTrafficSources', '/#Action=DescribeTrafficSources', keyArgs] as const
}

export function getActionDescribeTrafficSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTrafficSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTrafficSources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTrafficSourcesQueryKey>
  >({
    queryKey: getActionDescribeTrafficSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeTrafficSources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeTrafficSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTrafficSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeTrafficSources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeTrafficSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeTrafficSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeTrafficSourcesMutationKey() {
  return ['#Action=DescribeTrafficSources', '/#Action=DescribeTrafficSources', 'POST'] as const
}

export function getPostActionDescribeTrafficSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTrafficSources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTrafficSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeTrafficSources'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeTrafficSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeTrafficSources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeTrafficSourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeWarmPoolQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeWarmPool', '/#Action=DescribeWarmPool', keyArgs] as const
}

export function getActionDescribeWarmPoolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeWarmPool']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeWarmPool']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeWarmPoolQueryKey>
  >({
    queryKey: getActionDescribeWarmPoolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeWarmPool'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeWarmPool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeWarmPool']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeWarmPool']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeWarmPoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeWarmPoolQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeWarmPoolMutationKey() {
  return ['#Action=DescribeWarmPool', '/#Action=DescribeWarmPool', 'POST'] as const
}

export function getPostActionDescribeWarmPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeWarmPool']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeWarmPoolMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$post']>) {
      return parseResponse(client['#Action=DescribeWarmPool'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeWarmPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeWarmPool']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeWarmPoolMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDetachInstancesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DetachInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DetachInstances', '/#Action=DetachInstances', keyArgs] as const
}

export function getActionDetachInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DetachInstances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DetachInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetachInstancesQueryKey>
  >({
    queryKey: getActionDetachInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DetachInstances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDetachInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DetachInstances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DetachInstances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetachInstances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDetachInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDetachInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDetachInstancesMutationKey() {
  return ['#Action=DetachInstances', '/#Action=DetachInstances', 'POST'] as const
}

export function getPostActionDetachInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetachInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetachInstancesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DetachInstances']['$post']>) {
      return parseResponse(client['#Action=DetachInstances'].$post(args, options))
    },
  })
}

export function injectPostActionDetachInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetachInstances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DetachInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDetachInstancesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDetachLoadBalancerTargetGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DetachLoadBalancerTargetGroups',
    '/#Action=DetachLoadBalancerTargetGroups',
    keyArgs,
  ] as const
}

export function getActionDetachLoadBalancerTargetGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetachLoadBalancerTargetGroupsQueryKey>
  >({
    queryKey: getActionDetachLoadBalancerTargetGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DetachLoadBalancerTargetGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDetachLoadBalancerTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDetachLoadBalancerTargetGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDetachLoadBalancerTargetGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDetachLoadBalancerTargetGroupsMutationKey() {
  return [
    '#Action=DetachLoadBalancerTargetGroups',
    '/#Action=DetachLoadBalancerTargetGroups',
    'POST',
  ] as const
}

export function getPostActionDetachLoadBalancerTargetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetachLoadBalancerTargetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DetachLoadBalancerTargetGroups'].$post(args, options))
    },
  })
}

export function injectPostActionDetachLoadBalancerTargetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDetachLoadBalancerTargetGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDetachLoadBalancersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DetachLoadBalancers', '/#Action=DetachLoadBalancers', keyArgs] as const
}

export function getActionDetachLoadBalancersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetachLoadBalancersQueryKey>
  >({
    queryKey: getActionDetachLoadBalancersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DetachLoadBalancers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDetachLoadBalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDetachLoadBalancersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDetachLoadBalancersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDetachLoadBalancersMutationKey() {
  return ['#Action=DetachLoadBalancers', '/#Action=DetachLoadBalancers', 'POST'] as const
}

export function getPostActionDetachLoadBalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetachLoadBalancersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$post']>,
    ) {
      return parseResponse(client['#Action=DetachLoadBalancers'].$post(args, options))
    },
  })
}

export function injectPostActionDetachLoadBalancers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDetachLoadBalancersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDetachTrafficSourcesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DetachTrafficSources', '/#Action=DetachTrafficSources', keyArgs] as const
}

export function getActionDetachTrafficSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachTrafficSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachTrafficSources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetachTrafficSourcesQueryKey>
  >({
    queryKey: getActionDetachTrafficSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DetachTrafficSources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDetachTrafficSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachTrafficSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetachTrafficSources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDetachTrafficSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDetachTrafficSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDetachTrafficSourcesMutationKey() {
  return ['#Action=DetachTrafficSources', '/#Action=DetachTrafficSources', 'POST'] as const
}

export function getPostActionDetachTrafficSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachTrafficSources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetachTrafficSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$post']>,
    ) {
      return parseResponse(client['#Action=DetachTrafficSources'].$post(args, options))
    },
  })
}

export function injectPostActionDetachTrafficSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetachTrafficSources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDetachTrafficSourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDisableMetricsCollectionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DisableMetricsCollection', '/#Action=DisableMetricsCollection', keyArgs] as const
}

export function getActionDisableMetricsCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableMetricsCollection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableMetricsCollection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisableMetricsCollectionQueryKey>
  >({
    queryKey: getActionDisableMetricsCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DisableMetricsCollection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDisableMetricsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableMetricsCollection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DisableMetricsCollection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDisableMetricsCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDisableMetricsCollectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDisableMetricsCollectionMutationKey() {
  return ['#Action=DisableMetricsCollection', '/#Action=DisableMetricsCollection', 'POST'] as const
}

export function getPostActionDisableMetricsCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableMetricsCollection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDisableMetricsCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$post']>,
    ) {
      return parseResponse(client['#Action=DisableMetricsCollection'].$post(args, options))
    },
  })
}

export function injectPostActionDisableMetricsCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DisableMetricsCollection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDisableMetricsCollectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionEnableMetricsCollectionQueryKey(
  args: InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EnableMetricsCollection', '/#Action=EnableMetricsCollection', keyArgs] as const
}

export function getActionEnableMetricsCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableMetricsCollection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableMetricsCollection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnableMetricsCollectionQueryKey>
  >({
    queryKey: getActionEnableMetricsCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=EnableMetricsCollection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionEnableMetricsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableMetricsCollection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnableMetricsCollection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionEnableMetricsCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionEnableMetricsCollectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionEnableMetricsCollectionMutationKey() {
  return ['#Action=EnableMetricsCollection', '/#Action=EnableMetricsCollection', 'POST'] as const
}

export function getPostActionEnableMetricsCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableMetricsCollection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionEnableMetricsCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$post']>,
    ) {
      return parseResponse(client['#Action=EnableMetricsCollection'].$post(args, options))
    },
  })
}

export function injectPostActionEnableMetricsCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnableMetricsCollection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionEnableMetricsCollectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionEnterStandbyQueryKey(
  args: InferRequestType<(typeof client)['#Action=EnterStandby']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EnterStandby', '/#Action=EnterStandby', keyArgs] as const
}

export function getActionEnterStandbyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EnterStandby']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnterStandbyQueryKey>
  >({
    queryKey: getActionEnterStandbyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=EnterStandby'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionEnterStandby<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=EnterStandby']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionEnterStandbyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionEnterStandbyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionEnterStandbyMutationKey() {
  return ['#Action=EnterStandby', '/#Action=EnterStandby', 'POST'] as const
}

export function getPostActionEnterStandbyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=EnterStandby']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionEnterStandbyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=EnterStandby']['$post']>) {
      return parseResponse(client['#Action=EnterStandby'].$post(args, options))
    },
  })
}

export function injectPostActionEnterStandby<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=EnterStandby']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionEnterStandbyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionExecutePolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=ExecutePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ExecutePolicy', '/#Action=ExecutePolicy', keyArgs] as const
}

export function getActionExecutePolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ExecutePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionExecutePolicyQueryKey>
  >({
    queryKey: getActionExecutePolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ExecutePolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionExecutePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ExecutePolicy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionExecutePolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionExecutePolicyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionExecutePolicyMutationKey() {
  return ['#Action=ExecutePolicy', '/#Action=ExecutePolicy', 'POST'] as const
}

export function getPostActionExecutePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ExecutePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionExecutePolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ExecutePolicy']['$post']>) {
      return parseResponse(client['#Action=ExecutePolicy'].$post(args, options))
    },
  })
}

export function injectPostActionExecutePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ExecutePolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionExecutePolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionExitStandbyQueryKey(
  args: InferRequestType<(typeof client)['#Action=ExitStandby']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ExitStandby', '/#Action=ExitStandby', keyArgs] as const
}

export function getActionExitStandbyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ExitStandby']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionExitStandbyQueryKey>
  >({
    queryKey: getActionExitStandbyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ExitStandby'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionExitStandby<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ExitStandby']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionExitStandbyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionExitStandbyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionExitStandbyMutationKey() {
  return ['#Action=ExitStandby', '/#Action=ExitStandby', 'POST'] as const
}

export function getPostActionExitStandbyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ExitStandby']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionExitStandbyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ExitStandby']['$post']>) {
      return parseResponse(client['#Action=ExitStandby'].$post(args, options))
    },
  })
}

export function injectPostActionExitStandby<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ExitStandby']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionExitStandbyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionGetPredictiveScalingForecastQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetPredictiveScalingForecast',
    '/#Action=GetPredictiveScalingForecast',
    keyArgs,
  ] as const
}

export function getActionGetPredictiveScalingForecastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetPredictiveScalingForecastQueryKey>
  >({
    queryKey: getActionGetPredictiveScalingForecastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetPredictiveScalingForecast'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetPredictiveScalingForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetPredictiveScalingForecastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionGetPredictiveScalingForecastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetPredictiveScalingForecastMutationKey() {
  return [
    '#Action=GetPredictiveScalingForecast',
    '/#Action=GetPredictiveScalingForecast',
    'POST',
  ] as const
}

export function getPostActionGetPredictiveScalingForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetPredictiveScalingForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$post']>,
    ) {
      return parseResponse(client['#Action=GetPredictiveScalingForecast'].$post(args, options))
    },
  })
}

export function injectPostActionGetPredictiveScalingForecast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionGetPredictiveScalingForecastMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionPutLifecycleHookQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutLifecycleHook', '/#Action=PutLifecycleHook', keyArgs] as const
}

export function getActionPutLifecycleHookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutLifecycleHook']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutLifecycleHook']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutLifecycleHookQueryKey>
  >({
    queryKey: getActionPutLifecycleHookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutLifecycleHook'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionPutLifecycleHook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutLifecycleHook']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutLifecycleHook']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutLifecycleHookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionPutLifecycleHookQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionPutLifecycleHookMutationKey() {
  return ['#Action=PutLifecycleHook', '/#Action=PutLifecycleHook', 'POST'] as const
}

export function getPostActionPutLifecycleHookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutLifecycleHook']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutLifecycleHookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$post']>) {
      return parseResponse(client['#Action=PutLifecycleHook'].$post(args, options))
    },
  })
}

export function injectPostActionPutLifecycleHook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutLifecycleHook']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionPutLifecycleHookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionPutNotificationConfigurationQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PutNotificationConfiguration',
    '/#Action=PutNotificationConfiguration',
    keyArgs,
  ] as const
}

export function getActionPutNotificationConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutNotificationConfigurationQueryKey>
  >({
    queryKey: getActionPutNotificationConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutNotificationConfiguration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionPutNotificationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutNotificationConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionPutNotificationConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionPutNotificationConfigurationMutationKey() {
  return [
    '#Action=PutNotificationConfiguration',
    '/#Action=PutNotificationConfiguration',
    'POST',
  ] as const
}

export function getPostActionPutNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutNotificationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$post']>,
    ) {
      return parseResponse(client['#Action=PutNotificationConfiguration'].$post(args, options))
    },
  })
}

export function injectPostActionPutNotificationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionPutNotificationConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionPutScalingPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutScalingPolicy', '/#Action=PutScalingPolicy', keyArgs] as const
}

export function getActionPutScalingPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutScalingPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutScalingPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutScalingPolicyQueryKey>
  >({
    queryKey: getActionPutScalingPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutScalingPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionPutScalingPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutScalingPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutScalingPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutScalingPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionPutScalingPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionPutScalingPolicyMutationKey() {
  return ['#Action=PutScalingPolicy', '/#Action=PutScalingPolicy', 'POST'] as const
}

export function getPostActionPutScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutScalingPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutScalingPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$post']>) {
      return parseResponse(client['#Action=PutScalingPolicy'].$post(args, options))
    },
  })
}

export function injectPostActionPutScalingPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutScalingPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionPutScalingPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionPutScheduledUpdateGroupActionQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PutScheduledUpdateGroupAction',
    '/#Action=PutScheduledUpdateGroupAction',
    keyArgs,
  ] as const
}

export function getActionPutScheduledUpdateGroupActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutScheduledUpdateGroupActionQueryKey>
  >({
    queryKey: getActionPutScheduledUpdateGroupActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutScheduledUpdateGroupAction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionPutScheduledUpdateGroupAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutScheduledUpdateGroupActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionPutScheduledUpdateGroupActionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionPutScheduledUpdateGroupActionMutationKey() {
  return [
    '#Action=PutScheduledUpdateGroupAction',
    '/#Action=PutScheduledUpdateGroupAction',
    'POST',
  ] as const
}

export function getPostActionPutScheduledUpdateGroupActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutScheduledUpdateGroupActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$post']>,
    ) {
      return parseResponse(client['#Action=PutScheduledUpdateGroupAction'].$post(args, options))
    },
  })
}

export function injectPostActionPutScheduledUpdateGroupAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionPutScheduledUpdateGroupActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionPutWarmPoolQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutWarmPool']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutWarmPool', '/#Action=PutWarmPool', keyArgs] as const
}

export function getActionPutWarmPoolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutWarmPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutWarmPoolQueryKey>
  >({
    queryKey: getActionPutWarmPoolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutWarmPool'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionPutWarmPool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=PutWarmPool']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutWarmPoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionPutWarmPoolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionPutWarmPoolMutationKey() {
  return ['#Action=PutWarmPool', '/#Action=PutWarmPool', 'POST'] as const
}

export function getPostActionPutWarmPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutWarmPool']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutWarmPoolMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutWarmPool']['$post']>) {
      return parseResponse(client['#Action=PutWarmPool'].$post(args, options))
    },
  })
}

export function injectPostActionPutWarmPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutWarmPool']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionPutWarmPoolMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionRecordLifecycleActionHeartbeatQueryKey(
  args: InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RecordLifecycleActionHeartbeat',
    '/#Action=RecordLifecycleActionHeartbeat',
    keyArgs,
  ] as const
}

export function getActionRecordLifecycleActionHeartbeatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRecordLifecycleActionHeartbeatQueryKey>
  >({
    queryKey: getActionRecordLifecycleActionHeartbeatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RecordLifecycleActionHeartbeat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionRecordLifecycleActionHeartbeat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRecordLifecycleActionHeartbeatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionRecordLifecycleActionHeartbeatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionRecordLifecycleActionHeartbeatMutationKey() {
  return [
    '#Action=RecordLifecycleActionHeartbeat',
    '/#Action=RecordLifecycleActionHeartbeat',
    'POST',
  ] as const
}

export function getPostActionRecordLifecycleActionHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRecordLifecycleActionHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$post']>,
    ) {
      return parseResponse(client['#Action=RecordLifecycleActionHeartbeat'].$post(args, options))
    },
  })
}

export function injectPostActionRecordLifecycleActionHeartbeat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionRecordLifecycleActionHeartbeatMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionResumeProcessesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ResumeProcesses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ResumeProcesses', '/#Action=ResumeProcesses', keyArgs] as const
}

export function getActionResumeProcessesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResumeProcesses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ResumeProcesses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResumeProcesses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResumeProcessesQueryKey>
  >({
    queryKey: getActionResumeProcessesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ResumeProcesses'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionResumeProcesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResumeProcesses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ResumeProcesses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ResumeProcesses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionResumeProcessesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionResumeProcessesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionResumeProcessesMutationKey() {
  return ['#Action=ResumeProcesses', '/#Action=ResumeProcesses', 'POST'] as const
}

export function getPostActionResumeProcessesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResumeProcesses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ResumeProcesses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionResumeProcessesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ResumeProcesses']['$post']>) {
      return parseResponse(client['#Action=ResumeProcesses'].$post(args, options))
    },
  })
}

export function injectPostActionResumeProcesses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ResumeProcesses']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ResumeProcesses']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionResumeProcessesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionRollbackInstanceRefreshQueryKey(
  args: InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RollbackInstanceRefresh', '/#Action=RollbackInstanceRefresh', keyArgs] as const
}

export function getActionRollbackInstanceRefreshQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRollbackInstanceRefreshQueryKey>
  >({
    queryKey: getActionRollbackInstanceRefreshQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RollbackInstanceRefresh'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionRollbackInstanceRefresh<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRollbackInstanceRefreshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionRollbackInstanceRefreshQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionRollbackInstanceRefreshMutationKey() {
  return ['#Action=RollbackInstanceRefresh', '/#Action=RollbackInstanceRefresh', 'POST'] as const
}

export function getPostActionRollbackInstanceRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RollbackInstanceRefresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRollbackInstanceRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$post']>,
    ) {
      return parseResponse(client['#Action=RollbackInstanceRefresh'].$post(args, options))
    },
  })
}

export function injectPostActionRollbackInstanceRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RollbackInstanceRefresh']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionRollbackInstanceRefreshMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSetDesiredCapacityQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetDesiredCapacity', '/#Action=SetDesiredCapacity', keyArgs] as const
}

export function getActionSetDesiredCapacityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetDesiredCapacityQueryKey>
  >({
    queryKey: getActionSetDesiredCapacityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetDesiredCapacity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetDesiredCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetDesiredCapacityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSetDesiredCapacityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetDesiredCapacityMutationKey() {
  return ['#Action=SetDesiredCapacity', '/#Action=SetDesiredCapacity', 'POST'] as const
}

export function getPostActionSetDesiredCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetDesiredCapacity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetDesiredCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$post']>,
    ) {
      return parseResponse(client['#Action=SetDesiredCapacity'].$post(args, options))
    },
  })
}

export function injectPostActionSetDesiredCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetDesiredCapacity']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSetDesiredCapacityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSetInstanceHealthQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetInstanceHealth', '/#Action=SetInstanceHealth', keyArgs] as const
}

export function getActionSetInstanceHealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetInstanceHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetInstanceHealth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetInstanceHealthQueryKey>
  >({
    queryKey: getActionSetInstanceHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetInstanceHealth'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetInstanceHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetInstanceHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetInstanceHealth']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetInstanceHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSetInstanceHealthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetInstanceHealthMutationKey() {
  return ['#Action=SetInstanceHealth', '/#Action=SetInstanceHealth', 'POST'] as const
}

export function getPostActionSetInstanceHealthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetInstanceHealth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetInstanceHealthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$post']>,
    ) {
      return parseResponse(client['#Action=SetInstanceHealth'].$post(args, options))
    },
  })
}

export function injectPostActionSetInstanceHealth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetInstanceHealth']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSetInstanceHealthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSetInstanceProtectionQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetInstanceProtection', '/#Action=SetInstanceProtection', keyArgs] as const
}

export function getActionSetInstanceProtectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetInstanceProtection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetInstanceProtection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetInstanceProtectionQueryKey>
  >({
    queryKey: getActionSetInstanceProtectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetInstanceProtection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetInstanceProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetInstanceProtection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetInstanceProtection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetInstanceProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSetInstanceProtectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetInstanceProtectionMutationKey() {
  return ['#Action=SetInstanceProtection', '/#Action=SetInstanceProtection', 'POST'] as const
}

export function getPostActionSetInstanceProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetInstanceProtection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetInstanceProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$post']>,
    ) {
      return parseResponse(client['#Action=SetInstanceProtection'].$post(args, options))
    },
  })
}

export function injectPostActionSetInstanceProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetInstanceProtection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSetInstanceProtectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionStartInstanceRefreshQueryKey(
  args: InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartInstanceRefresh', '/#Action=StartInstanceRefresh', keyArgs] as const
}

export function getActionStartInstanceRefreshQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartInstanceRefreshQueryKey>
  >({
    queryKey: getActionStartInstanceRefreshQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StartInstanceRefresh'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionStartInstanceRefresh<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionStartInstanceRefreshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionStartInstanceRefreshQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionStartInstanceRefreshMutationKey() {
  return ['#Action=StartInstanceRefresh', '/#Action=StartInstanceRefresh', 'POST'] as const
}

export function getPostActionStartInstanceRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartInstanceRefresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStartInstanceRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$post']>,
    ) {
      return parseResponse(client['#Action=StartInstanceRefresh'].$post(args, options))
    },
  })
}

export function injectPostActionStartInstanceRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StartInstanceRefresh']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionStartInstanceRefreshMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSuspendProcessesQueryKey(
  args: InferRequestType<(typeof client)['#Action=SuspendProcesses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SuspendProcesses', '/#Action=SuspendProcesses', keyArgs] as const
}

export function getActionSuspendProcessesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SuspendProcesses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SuspendProcesses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SuspendProcesses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSuspendProcessesQueryKey>
  >({
    queryKey: getActionSuspendProcessesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SuspendProcesses'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSuspendProcesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SuspendProcesses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SuspendProcesses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SuspendProcesses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSuspendProcessesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSuspendProcessesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSuspendProcessesMutationKey() {
  return ['#Action=SuspendProcesses', '/#Action=SuspendProcesses', 'POST'] as const
}

export function getPostActionSuspendProcessesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SuspendProcesses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SuspendProcesses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSuspendProcessesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SuspendProcesses']['$post']>) {
      return parseResponse(client['#Action=SuspendProcesses'].$post(args, options))
    },
  })
}

export function injectPostActionSuspendProcesses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SuspendProcesses']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SuspendProcesses']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSuspendProcessesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionTerminateInstanceInAutoScalingGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=TerminateInstanceInAutoScalingGroup',
    '/#Action=TerminateInstanceInAutoScalingGroup',
    keyArgs,
  ] as const
}

export function getActionTerminateInstanceInAutoScalingGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTerminateInstanceInAutoScalingGroupQueryKey>
  >({
    queryKey: getActionTerminateInstanceInAutoScalingGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=TerminateInstanceInAutoScalingGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionTerminateInstanceInAutoScalingGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionTerminateInstanceInAutoScalingGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionTerminateInstanceInAutoScalingGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionTerminateInstanceInAutoScalingGroupMutationKey() {
  return [
    '#Action=TerminateInstanceInAutoScalingGroup',
    '/#Action=TerminateInstanceInAutoScalingGroup',
    'POST',
  ] as const
}

export function getPostActionTerminateInstanceInAutoScalingGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTerminateInstanceInAutoScalingGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=TerminateInstanceInAutoScalingGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostActionTerminateInstanceInAutoScalingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionTerminateInstanceInAutoScalingGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionUpdateAutoScalingGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateAutoScalingGroup', '/#Action=UpdateAutoScalingGroup', keyArgs] as const
}

export function getActionUpdateAutoScalingGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateAutoScalingGroupQueryKey>
  >({
    queryKey: getActionUpdateAutoScalingGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateAutoScalingGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateAutoScalingGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateAutoScalingGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionUpdateAutoScalingGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateAutoScalingGroupMutationKey() {
  return ['#Action=UpdateAutoScalingGroup', '/#Action=UpdateAutoScalingGroup', 'POST'] as const
}

export function getPostActionUpdateAutoScalingGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAutoScalingGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateAutoScalingGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateAutoScalingGroup'].$post(args, options))
    },
  })
}

export function injectPostActionUpdateAutoScalingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateAutoScalingGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUpdateAutoScalingGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
