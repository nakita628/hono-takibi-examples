import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachInstances']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AttachInstances', '/#Action=AttachInstances', keyArgs] as const
}

export function getActionAttachInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachInstances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAttachInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AttachInstances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAttachInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AttachInstances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachInstances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachInstances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachInstances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAttachInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAttachInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AttachInstances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionAttachInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAttachInstancesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAttachLoadBalancerTargetGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AttachLoadBalancerTargetGroups',
    '/#Action=AttachLoadBalancerTargetGroups',
    keyArgs,
  ] as const
}

export function getActionAttachLoadBalancerTargetGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAttachLoadBalancerTargetGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AttachLoadBalancerTargetGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAttachLoadBalancerTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=AttachLoadBalancerTargetGroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionAttachLoadBalancerTargetGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAttachLoadBalancerTargetGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AttachLoadBalancerTargetGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionAttachLoadBalancerTargetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAttachLoadBalancerTargetGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAttachLoadBalancersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AttachLoadBalancers', '/#Action=AttachLoadBalancers', keyArgs] as const
}

export function getActionAttachLoadBalancersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAttachLoadBalancersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AttachLoadBalancers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAttachLoadBalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAttachLoadBalancersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAttachLoadBalancersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AttachLoadBalancers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionAttachLoadBalancers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAttachLoadBalancersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAttachTrafficSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AttachTrafficSources', '/#Action=AttachTrafficSources', keyArgs] as const
}

export function getActionAttachTrafficSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAttachTrafficSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AttachTrafficSources'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAttachTrafficSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachTrafficSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachTrafficSources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachTrafficSources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachTrafficSources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAttachTrafficSourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAttachTrafficSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AttachTrafficSources'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionAttachTrafficSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAttachTrafficSourcesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionBatchDeleteScheduledActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=BatchDeleteScheduledAction',
    '/#Action=BatchDeleteScheduledAction',
    keyArgs,
  ] as const
}

export function getActionBatchDeleteScheduledActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBatchDeleteScheduledActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BatchDeleteScheduledAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionBatchDeleteScheduledAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchDeleteScheduledAction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionBatchDeleteScheduledActionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBatchDeleteScheduledActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BatchDeleteScheduledAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionBatchDeleteScheduledAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionBatchDeleteScheduledActionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionBatchPutScheduledUpdateGroupActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=BatchPutScheduledUpdateGroupAction',
    '/#Action=BatchPutScheduledUpdateGroupAction',
    keyArgs,
  ] as const
}

export function getActionBatchPutScheduledUpdateGroupActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBatchPutScheduledUpdateGroupActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BatchPutScheduledUpdateGroupAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionBatchPutScheduledUpdateGroupAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=BatchPutScheduledUpdateGroupAction']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionBatchPutScheduledUpdateGroupActionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBatchPutScheduledUpdateGroupActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BatchPutScheduledUpdateGroupAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionBatchPutScheduledUpdateGroupAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionBatchPutScheduledUpdateGroupActionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCancelInstanceRefreshQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CancelInstanceRefresh', '/#Action=CancelInstanceRefresh', keyArgs] as const
}

export function getActionCancelInstanceRefreshQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCancelInstanceRefreshQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CancelInstanceRefresh'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCancelInstanceRefresh<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelInstanceRefresh']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCancelInstanceRefreshQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCancelInstanceRefreshQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CancelInstanceRefresh'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCancelInstanceRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCancelInstanceRefreshMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCompleteLifecycleActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CompleteLifecycleAction', '/#Action=CompleteLifecycleAction', keyArgs] as const
}

export function getActionCompleteLifecycleActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCompleteLifecycleActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CompleteLifecycleAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCompleteLifecycleAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CompleteLifecycleAction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCompleteLifecycleActionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCompleteLifecycleActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CompleteLifecycleAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCompleteLifecycleAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCompleteLifecycleActionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateAutoScalingGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateAutoScalingGroup', '/#Action=CreateAutoScalingGroup', keyArgs] as const
}

export function getActionCreateAutoScalingGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateAutoScalingGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateAutoScalingGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateAutoScalingGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAutoScalingGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateAutoScalingGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateAutoScalingGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateAutoScalingGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateAutoScalingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateAutoScalingGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateLaunchConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateLaunchConfiguration',
    '/#Action=CreateLaunchConfiguration',
    keyArgs,
  ] as const
}

export function getActionCreateLaunchConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateLaunchConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateLaunchConfiguration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateLaunchConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLaunchConfiguration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateLaunchConfigurationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateLaunchConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateLaunchConfiguration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateLaunchConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateLaunchConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateOrUpdateTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateOrUpdateTags', '/#Action=CreateOrUpdateTags', keyArgs] as const
}

export function getActionCreateOrUpdateTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateOrUpdateTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateOrUpdateTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateOrUpdateTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateOrUpdateTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateOrUpdateTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateOrUpdateTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateOrUpdateTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateOrUpdateTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateOrUpdateTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteAutoScalingGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteAutoScalingGroup', '/#Action=DeleteAutoScalingGroup', keyArgs] as const
}

export function getActionDeleteAutoScalingGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteAutoScalingGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteAutoScalingGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteAutoScalingGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAutoScalingGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteAutoScalingGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteAutoScalingGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteAutoScalingGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteAutoScalingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteAutoScalingGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteLaunchConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteLaunchConfiguration',
    '/#Action=DeleteLaunchConfiguration',
    keyArgs,
  ] as const
}

export function getActionDeleteLaunchConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteLaunchConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteLaunchConfiguration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteLaunchConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLaunchConfiguration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteLaunchConfigurationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteLaunchConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteLaunchConfiguration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteLaunchConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteLaunchConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteLifecycleHookQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteLifecycleHook', '/#Action=DeleteLifecycleHook', keyArgs] as const
}

export function getActionDeleteLifecycleHookQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteLifecycleHookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteLifecycleHook'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteLifecycleHook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLifecycleHook']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteLifecycleHookQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteLifecycleHookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteLifecycleHook'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteLifecycleHook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteLifecycleHookMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteNotificationConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteNotificationConfiguration',
    '/#Action=DeleteNotificationConfiguration',
    keyArgs,
  ] as const
}

export function getActionDeleteNotificationConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteNotificationConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteNotificationConfiguration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteNotificationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteNotificationConfiguration']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteNotificationConfigurationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteNotificationConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteNotificationConfiguration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteNotificationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteNotificationConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeletePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeletePolicy', '/#Action=DeletePolicy', keyArgs] as const
}

export function getActionDeletePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeletePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeletePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeletePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeletePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeletePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeletePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeletePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeletePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeletePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteScheduledActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteScheduledAction', '/#Action=DeleteScheduledAction', keyArgs] as const
}

export function getActionDeleteScheduledActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteScheduledActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteScheduledAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteScheduledAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteScheduledActionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteScheduledActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteScheduledAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteScheduledAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteScheduledActionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteTags', '/#Action=DeleteTags', keyArgs] as const
}

export function getActionDeleteTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteWarmPoolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteWarmPool', '/#Action=DeleteWarmPool', keyArgs] as const
}

export function getActionDeleteWarmPoolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteWarmPoolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteWarmPool'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteWarmPool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteWarmPool']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteWarmPoolQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteWarmPool']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteWarmPoolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteWarmPoolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteWarmPool'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteWarmPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteWarmPoolMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeAccountLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', keyArgs] as const
}

export function getActionDescribeAccountLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAccountLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAccountLimits'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAccountLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAccountLimitsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAccountLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAccountLimits'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeAccountLimits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeAccountLimitsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeAdjustmentTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeAdjustmentTypes', '/#Action=DescribeAdjustmentTypes', keyArgs] as const
}

export function getActionDescribeAdjustmentTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAdjustmentTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAdjustmentTypes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAdjustmentTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAdjustmentTypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAdjustmentTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAdjustmentTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAdjustmentTypes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeAdjustmentTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeAdjustmentTypesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeAutoScalingGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeAutoScalingGroups',
    '/#Action=DescribeAutoScalingGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeAutoScalingGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAutoScalingGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAutoScalingGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAutoScalingGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAutoScalingGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAutoScalingGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAutoScalingGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeAutoScalingGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeAutoScalingGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeAutoScalingInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeAutoScalingInstances',
    '/#Action=DescribeAutoScalingInstances',
    keyArgs,
  ] as const
}

export function getActionDescribeAutoScalingInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAutoScalingInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAutoScalingInstances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAutoScalingInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAutoScalingInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAutoScalingInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAutoScalingInstances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeAutoScalingInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeAutoScalingInstances']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAutoScalingInstances']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeAutoScalingInstancesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeAutoScalingNotificationTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeAutoScalingNotificationTypes',
    '/#Action=DescribeAutoScalingNotificationTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeAutoScalingNotificationTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAutoScalingNotificationTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAutoScalingNotificationTypes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAutoScalingNotificationTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeAutoScalingNotificationTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAutoScalingNotificationTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAutoScalingNotificationTypes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeAutoScalingNotificationTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=DescribeAutoScalingNotificationTypes']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeAutoScalingNotificationTypesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeInstanceRefreshesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeInstanceRefreshes',
    '/#Action=DescribeInstanceRefreshes',
    keyArgs,
  ] as const
}

export function getActionDescribeInstanceRefreshesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeInstanceRefreshesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeInstanceRefreshes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeInstanceRefreshes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceRefreshes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeInstanceRefreshesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeInstanceRefreshesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeInstanceRefreshes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeInstanceRefreshes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeInstanceRefreshesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeLaunchConfigurationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeLaunchConfigurations',
    '/#Action=DescribeLaunchConfigurations',
    keyArgs,
  ] as const
}

export function getActionDescribeLaunchConfigurationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLaunchConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLaunchConfigurations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLaunchConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeLaunchConfigurationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLaunchConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLaunchConfigurations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeLaunchConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeLaunchConfigurations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLaunchConfigurations']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeLaunchConfigurationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeLifecycleHookTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeLifecycleHookTypes',
    '/#Action=DescribeLifecycleHookTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeLifecycleHookTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLifecycleHookTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLifecycleHookTypes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLifecycleHookTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHookTypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeLifecycleHookTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLifecycleHookTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLifecycleHookTypes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeLifecycleHookTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeLifecycleHookTypesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeLifecycleHooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeLifecycleHooks', '/#Action=DescribeLifecycleHooks', keyArgs] as const
}

export function getActionDescribeLifecycleHooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLifecycleHooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLifecycleHooks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLifecycleHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLifecycleHooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeLifecycleHooksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLifecycleHooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLifecycleHooks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeLifecycleHooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeLifecycleHooksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeLoadBalancerTargetGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeLoadBalancerTargetGroups',
    '/#Action=DescribeLoadBalancerTargetGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeLoadBalancerTargetGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLoadBalancerTargetGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLoadBalancerTargetGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLoadBalancerTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerTargetGroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeLoadBalancerTargetGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLoadBalancerTargetGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLoadBalancerTargetGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeLoadBalancerTargetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeLoadBalancerTargetGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeLoadBalancersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeLoadBalancers', '/#Action=DescribeLoadBalancers', keyArgs] as const
}

export function getActionDescribeLoadBalancersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLoadBalancersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLoadBalancers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLoadBalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeLoadBalancersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLoadBalancersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLoadBalancers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeLoadBalancers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeLoadBalancersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeMetricCollectionTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeMetricCollectionTypes',
    '/#Action=DescribeMetricCollectionTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeMetricCollectionTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeMetricCollectionTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeMetricCollectionTypes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeMetricCollectionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeMetricCollectionTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeMetricCollectionTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeMetricCollectionTypes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeMetricCollectionTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeMetricCollectionTypes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeMetricCollectionTypesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeNotificationConfigurationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeNotificationConfigurations',
    '/#Action=DescribeNotificationConfigurations',
    keyArgs,
  ] as const
}

export function getActionDescribeNotificationConfigurationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeNotificationConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeNotificationConfigurations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeNotificationConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeNotificationConfigurations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeNotificationConfigurationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeNotificationConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeNotificationConfigurations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeNotificationConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeNotificationConfigurationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribePoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribePolicies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribePolicies', '/#Action=DescribePolicies', keyArgs] as const
}

export function getActionDescribePoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribePolicies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribePoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribePolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribePolicies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribePolicies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribePolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribePolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribePoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribePoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribePolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribePoliciesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeScalingActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeScalingActivities',
    '/#Action=DescribeScalingActivities',
    keyArgs,
  ] as const
}

export function getActionDescribeScalingActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeScalingActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeScalingActivities'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeScalingActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScalingActivities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScalingActivities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScalingActivities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScalingActivities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeScalingActivitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeScalingActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeScalingActivities'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeScalingActivities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeScalingActivitiesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeScalingProcessTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeScalingProcessTypes',
    '/#Action=DescribeScalingProcessTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeScalingProcessTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeScalingProcessTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeScalingProcessTypes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeScalingProcessTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScalingProcessTypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeScalingProcessTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeScalingProcessTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeScalingProcessTypes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeScalingProcessTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeScalingProcessTypesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeScheduledActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeScheduledActions', '/#Action=DescribeScheduledActions', keyArgs] as const
}

export function getActionDescribeScheduledActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeScheduledActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeScheduledActions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeScheduledActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeScheduledActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeScheduledActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeScheduledActions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeScheduledActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeScheduledActionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeTags', '/#Action=DescribeTags', keyArgs] as const
}

export function getActionDescribeTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeTerminationPolicyTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeTerminationPolicyTypes',
    '/#Action=DescribeTerminationPolicyTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeTerminationPolicyTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeTerminationPolicyTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeTerminationPolicyTypes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeTerminationPolicyTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeTerminationPolicyTypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeTerminationPolicyTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeTerminationPolicyTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeTerminationPolicyTypes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeTerminationPolicyTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeTerminationPolicyTypesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeTrafficSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeTrafficSources', '/#Action=DescribeTrafficSources', keyArgs] as const
}

export function getActionDescribeTrafficSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeTrafficSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeTrafficSources'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeTrafficSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTrafficSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTrafficSources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTrafficSources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTrafficSources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeTrafficSourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeTrafficSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeTrafficSources'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeTrafficSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeTrafficSourcesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeWarmPoolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeWarmPool', '/#Action=DescribeWarmPool', keyArgs] as const
}

export function getActionDescribeWarmPoolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeWarmPoolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeWarmPool'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeWarmPool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeWarmPool']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeWarmPool']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeWarmPool']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeWarmPool']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeWarmPoolQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeWarmPoolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeWarmPool'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeWarmPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeWarmPoolMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDetachInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachInstances']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DetachInstances', '/#Action=DetachInstances', keyArgs] as const
}

export function getActionDetachInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachInstances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDetachInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DetachInstances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDetachInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DetachInstances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachInstances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachInstances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachInstances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDetachInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDetachInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DetachInstances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDetachInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDetachInstancesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDetachLoadBalancerTargetGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DetachLoadBalancerTargetGroups',
    '/#Action=DetachLoadBalancerTargetGroups',
    keyArgs,
  ] as const
}

export function getActionDetachLoadBalancerTargetGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDetachLoadBalancerTargetGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DetachLoadBalancerTargetGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDetachLoadBalancerTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DetachLoadBalancerTargetGroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDetachLoadBalancerTargetGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDetachLoadBalancerTargetGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DetachLoadBalancerTargetGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDetachLoadBalancerTargetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDetachLoadBalancerTargetGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDetachLoadBalancersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DetachLoadBalancers', '/#Action=DetachLoadBalancers', keyArgs] as const
}

export function getActionDetachLoadBalancersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDetachLoadBalancersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DetachLoadBalancers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDetachLoadBalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDetachLoadBalancersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDetachLoadBalancersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DetachLoadBalancers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDetachLoadBalancers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDetachLoadBalancersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDetachTrafficSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DetachTrafficSources', '/#Action=DetachTrafficSources', keyArgs] as const
}

export function getActionDetachTrafficSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDetachTrafficSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DetachTrafficSources'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDetachTrafficSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachTrafficSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachTrafficSources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachTrafficSources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachTrafficSources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDetachTrafficSourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDetachTrafficSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DetachTrafficSources'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDetachTrafficSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDetachTrafficSourcesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDisableMetricsCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DisableMetricsCollection', '/#Action=DisableMetricsCollection', keyArgs] as const
}

export function getActionDisableMetricsCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDisableMetricsCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DisableMetricsCollection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDisableMetricsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableMetricsCollection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisableMetricsCollection']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DisableMetricsCollection']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DisableMetricsCollection']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDisableMetricsCollectionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDisableMetricsCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DisableMetricsCollection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDisableMetricsCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDisableMetricsCollectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionEnableMetricsCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=EnableMetricsCollection', '/#Action=EnableMetricsCollection', keyArgs] as const
}

export function getActionEnableMetricsCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionEnableMetricsCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=EnableMetricsCollection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionEnableMetricsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableMetricsCollection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=EnableMetricsCollection']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableMetricsCollection']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableMetricsCollection']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionEnableMetricsCollectionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionEnableMetricsCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=EnableMetricsCollection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionEnableMetricsCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionEnableMetricsCollectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionEnterStandbyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnterStandby']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=EnterStandby', '/#Action=EnterStandby', keyArgs] as const
}

export function getActionEnterStandbyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnterStandby']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionEnterStandbyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=EnterStandby'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionEnterStandby<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnterStandby']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionEnterStandbyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnterStandby']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnterStandbyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionEnterStandbyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=EnterStandby'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionEnterStandby<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionEnterStandbyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionExecutePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ExecutePolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ExecutePolicy', '/#Action=ExecutePolicy', keyArgs] as const
}

export function getActionExecutePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ExecutePolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionExecutePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ExecutePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionExecutePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ExecutePolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionExecutePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExecutePolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionExecutePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionExecutePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ExecutePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionExecutePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionExecutePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionExitStandbyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ExitStandby']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ExitStandby', '/#Action=ExitStandby', keyArgs] as const
}

export function getActionExitStandbyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ExitStandby']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionExitStandbyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ExitStandby'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionExitStandby<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ExitStandby']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionExitStandbyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExitStandby']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionExitStandbyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionExitStandbyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ExitStandby'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionExitStandby<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionExitStandbyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetPredictiveScalingForecastQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetPredictiveScalingForecast',
    '/#Action=GetPredictiveScalingForecast',
    keyArgs,
  ] as const
}

export function getActionGetPredictiveScalingForecastQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetPredictiveScalingForecastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetPredictiveScalingForecast'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetPredictiveScalingForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetPredictiveScalingForecastQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetPredictiveScalingForecastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetPredictiveScalingForecast'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetPredictiveScalingForecast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetPredictiveScalingForecast']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetPredictiveScalingForecast']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetPredictiveScalingForecastMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutLifecycleHookQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=PutLifecycleHook', '/#Action=PutLifecycleHook', keyArgs] as const
}

export function getActionPutLifecycleHookQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutLifecycleHookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutLifecycleHook'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutLifecycleHook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutLifecycleHook']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutLifecycleHook']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutLifecycleHook']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutLifecycleHook']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutLifecycleHookQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutLifecycleHookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutLifecycleHook'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionPutLifecycleHook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutLifecycleHookMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutNotificationConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=PutNotificationConfiguration',
    '/#Action=PutNotificationConfiguration',
    keyArgs,
  ] as const
}

export function getActionPutNotificationConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutNotificationConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutNotificationConfiguration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutNotificationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutNotificationConfigurationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutNotificationConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutNotificationConfiguration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionPutNotificationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=PutNotificationConfiguration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PutNotificationConfiguration']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutNotificationConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutScalingPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=PutScalingPolicy', '/#Action=PutScalingPolicy', keyArgs] as const
}

export function getActionPutScalingPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutScalingPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutScalingPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutScalingPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutScalingPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutScalingPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutScalingPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutScalingPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutScalingPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutScalingPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutScalingPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionPutScalingPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutScalingPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutScheduledUpdateGroupActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=PutScheduledUpdateGroupAction',
    '/#Action=PutScheduledUpdateGroupAction',
    keyArgs,
  ] as const
}

export function getActionPutScheduledUpdateGroupActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutScheduledUpdateGroupActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutScheduledUpdateGroupAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutScheduledUpdateGroupAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionPutScheduledUpdateGroupActionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutScheduledUpdateGroupActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutScheduledUpdateGroupAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionPutScheduledUpdateGroupAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PutScheduledUpdateGroupAction']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutScheduledUpdateGroupActionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutWarmPoolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutWarmPool']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=PutWarmPool', '/#Action=PutWarmPool', keyArgs] as const
}

export function getActionPutWarmPoolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutWarmPool']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutWarmPoolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutWarmPool'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutWarmPool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutWarmPool']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutWarmPoolQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutWarmPool']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutWarmPoolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutWarmPoolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutWarmPool'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionPutWarmPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutWarmPoolMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRecordLifecycleActionHeartbeatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RecordLifecycleActionHeartbeat',
    '/#Action=RecordLifecycleActionHeartbeat',
    keyArgs,
  ] as const
}

export function getActionRecordLifecycleActionHeartbeatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRecordLifecycleActionHeartbeatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RecordLifecycleActionHeartbeat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRecordLifecycleActionHeartbeat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RecordLifecycleActionHeartbeat']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionRecordLifecycleActionHeartbeatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRecordLifecycleActionHeartbeatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RecordLifecycleActionHeartbeat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionRecordLifecycleActionHeartbeat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionRecordLifecycleActionHeartbeatMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionResumeProcessesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResumeProcesses']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ResumeProcesses', '/#Action=ResumeProcesses', keyArgs] as const
}

export function getActionResumeProcessesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResumeProcesses']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResumeProcessesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ResumeProcesses'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResumeProcesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResumeProcesses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResumeProcesses']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResumeProcesses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResumeProcesses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionResumeProcessesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResumeProcessesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ResumeProcesses'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionResumeProcesses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionResumeProcessesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRollbackInstanceRefreshQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RollbackInstanceRefresh', '/#Action=RollbackInstanceRefresh', keyArgs] as const
}

export function getActionRollbackInstanceRefreshQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRollbackInstanceRefreshQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RollbackInstanceRefresh'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRollbackInstanceRefresh<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RollbackInstanceRefresh']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRollbackInstanceRefreshQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRollbackInstanceRefreshQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RollbackInstanceRefresh'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionRollbackInstanceRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionRollbackInstanceRefreshMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetDesiredCapacityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetDesiredCapacity', '/#Action=SetDesiredCapacity', keyArgs] as const
}

export function getActionSetDesiredCapacityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetDesiredCapacityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetDesiredCapacity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetDesiredCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetDesiredCapacity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetDesiredCapacityQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetDesiredCapacityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetDesiredCapacity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetDesiredCapacity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetDesiredCapacityMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetInstanceHealthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetInstanceHealth', '/#Action=SetInstanceHealth', keyArgs] as const
}

export function getActionSetInstanceHealthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetInstanceHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetInstanceHealth'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetInstanceHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetInstanceHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetInstanceHealth']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetInstanceHealth']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetInstanceHealth']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetInstanceHealthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetInstanceHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetInstanceHealth'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetInstanceHealth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetInstanceHealthMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetInstanceProtectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetInstanceProtection', '/#Action=SetInstanceProtection', keyArgs] as const
}

export function getActionSetInstanceProtectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetInstanceProtectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetInstanceProtection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetInstanceProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetInstanceProtection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetInstanceProtection']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetInstanceProtection']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetInstanceProtection']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetInstanceProtectionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetInstanceProtectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetInstanceProtection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetInstanceProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetInstanceProtectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionStartInstanceRefreshQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StartInstanceRefresh', '/#Action=StartInstanceRefresh', keyArgs] as const
}

export function getActionStartInstanceRefreshQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStartInstanceRefreshQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StartInstanceRefresh'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStartInstanceRefresh<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartInstanceRefresh']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStartInstanceRefreshQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStartInstanceRefreshQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StartInstanceRefresh'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionStartInstanceRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionStartInstanceRefreshMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSuspendProcessesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SuspendProcesses']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SuspendProcesses', '/#Action=SuspendProcesses', keyArgs] as const
}

export function getActionSuspendProcessesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SuspendProcesses']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSuspendProcessesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SuspendProcesses'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSuspendProcesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SuspendProcesses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SuspendProcesses']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SuspendProcesses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SuspendProcesses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSuspendProcessesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSuspendProcessesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SuspendProcesses'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSuspendProcesses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSuspendProcessesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTerminateInstanceInAutoScalingGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=TerminateInstanceInAutoScalingGroup',
    '/#Action=TerminateInstanceInAutoScalingGroup',
    keyArgs,
  ] as const
}

export function getActionTerminateInstanceInAutoScalingGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTerminateInstanceInAutoScalingGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TerminateInstanceInAutoScalingGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTerminateInstanceInAutoScalingGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionTerminateInstanceInAutoScalingGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTerminateInstanceInAutoScalingGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TerminateInstanceInAutoScalingGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionTerminateInstanceInAutoScalingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TerminateInstanceInAutoScalingGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTerminateInstanceInAutoScalingGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateAutoScalingGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateAutoScalingGroup', '/#Action=UpdateAutoScalingGroup', keyArgs] as const
}

export function getActionUpdateAutoScalingGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateAutoScalingGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateAutoScalingGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateAutoScalingGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAutoScalingGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateAutoScalingGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateAutoScalingGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateAutoScalingGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateAutoScalingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateAutoScalingGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
