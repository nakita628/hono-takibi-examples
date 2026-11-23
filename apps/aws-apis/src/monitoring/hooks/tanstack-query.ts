import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionDeleteAlarmsKey() {
  return ['#Action=DeleteAlarms'] as const
}

export function getActionDeleteAnomalyDetectorKey() {
  return ['#Action=DeleteAnomalyDetector'] as const
}

export function getActionDeleteDashboardsKey() {
  return ['#Action=DeleteDashboards'] as const
}

export function getActionDeleteInsightRulesKey() {
  return ['#Action=DeleteInsightRules'] as const
}

export function getActionDeleteMetricStreamKey() {
  return ['#Action=DeleteMetricStream'] as const
}

export function getActionDescribeAlarmHistoryKey() {
  return ['#Action=DescribeAlarmHistory'] as const
}

export function getActionDescribeAlarmsKey() {
  return ['#Action=DescribeAlarms'] as const
}

export function getActionDescribeAlarmsForMetricKey() {
  return ['#Action=DescribeAlarmsForMetric'] as const
}

export function getActionDescribeAnomalyDetectorsKey() {
  return ['#Action=DescribeAnomalyDetectors'] as const
}

export function getActionDescribeInsightRulesKey() {
  return ['#Action=DescribeInsightRules'] as const
}

export function getActionDisableAlarmActionsKey() {
  return ['#Action=DisableAlarmActions'] as const
}

export function getActionDisableInsightRulesKey() {
  return ['#Action=DisableInsightRules'] as const
}

export function getActionEnableAlarmActionsKey() {
  return ['#Action=EnableAlarmActions'] as const
}

export function getActionEnableInsightRulesKey() {
  return ['#Action=EnableInsightRules'] as const
}

export function getActionGetDashboardKey() {
  return ['#Action=GetDashboard'] as const
}

export function getActionGetInsightRuleReportKey() {
  return ['#Action=GetInsightRuleReport'] as const
}

export function getActionGetMetricDataKey() {
  return ['#Action=GetMetricData'] as const
}

export function getActionGetMetricStatisticsKey() {
  return ['#Action=GetMetricStatistics'] as const
}

export function getActionGetMetricStreamKey() {
  return ['#Action=GetMetricStream'] as const
}

export function getActionGetMetricWidgetImageKey() {
  return ['#Action=GetMetricWidgetImage'] as const
}

export function getActionListDashboardsKey() {
  return ['#Action=ListDashboards'] as const
}

export function getActionListManagedInsightRulesKey() {
  return ['#Action=ListManagedInsightRules'] as const
}

export function getActionListMetricStreamsKey() {
  return ['#Action=ListMetricStreams'] as const
}

export function getActionListMetricsKey() {
  return ['#Action=ListMetrics'] as const
}

export function getActionListTagsForResourceKey() {
  return ['#Action=ListTagsForResource'] as const
}

export function getActionPutAnomalyDetectorKey() {
  return ['#Action=PutAnomalyDetector'] as const
}

export function getActionPutCompositeAlarmKey() {
  return ['#Action=PutCompositeAlarm'] as const
}

export function getActionPutDashboardKey() {
  return ['#Action=PutDashboard'] as const
}

export function getActionPutInsightRuleKey() {
  return ['#Action=PutInsightRule'] as const
}

export function getActionPutManagedInsightRulesKey() {
  return ['#Action=PutManagedInsightRules'] as const
}

export function getActionPutMetricAlarmKey() {
  return ['#Action=PutMetricAlarm'] as const
}

export function getActionPutMetricDataKey() {
  return ['#Action=PutMetricData'] as const
}

export function getActionPutMetricStreamKey() {
  return ['#Action=PutMetricStream'] as const
}

export function getActionSetAlarmStateKey() {
  return ['#Action=SetAlarmState'] as const
}

export function getActionStartMetricStreamsKey() {
  return ['#Action=StartMetricStreams'] as const
}

export function getActionStopMetricStreamsKey() {
  return ['#Action=StopMetricStreams'] as const
}

export function getActionTagResourceKey() {
  return ['#Action=TagResource'] as const
}

export function getActionUntagResourceKey() {
  return ['#Action=UntagResource'] as const
}

export function getActionDeleteAlarmsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteAlarms', '/#Action=DeleteAlarms', keyArgs] as const
}

export function getActionDeleteAlarmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAlarmsQueryKey>
  >({
    queryKey: getActionDeleteAlarmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteAlarms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteAlarms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteAlarmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionDeleteAlarmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionDeleteAlarms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteAlarmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionDeleteAlarmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionDeleteAlarmsMutationKey() {
  return ['#Action=DeleteAlarms', '/#Action=DeleteAlarms', 'POST'] as const
}

export function getPostActionDeleteAlarmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteAlarms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteAlarmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$post']>) {
      return parseResponse(client['#Action=DeleteAlarms'].$post(args, options))
    },
  })
}

export function usePostActionDeleteAlarms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteAlarms']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteAlarmsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteAnomalyDetectorQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteAnomalyDetector', '/#Action=DeleteAnomalyDetector', keyArgs] as const
}

export function getActionDeleteAnomalyDetectorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAnomalyDetectorQueryKey>
  >({
    queryKey: getActionDeleteAnomalyDetectorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteAnomalyDetector'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteAnomalyDetector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteAnomalyDetectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDeleteAnomalyDetectorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteAnomalyDetector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteAnomalyDetectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDeleteAnomalyDetectorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteAnomalyDetectorMutationKey() {
  return ['#Action=DeleteAnomalyDetector', '/#Action=DeleteAnomalyDetector', 'POST'] as const
}

export function getPostActionDeleteAnomalyDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteAnomalyDetectorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteAnomalyDetector'].$post(args, options))
    },
  })
}

export function usePostActionDeleteAnomalyDetector<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteAnomalyDetectorMutationOptions<
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

export function getActionDeleteDashboardsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDashboards', '/#Action=DeleteDashboards', keyArgs] as const
}

export function getActionDeleteDashboardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDashboardsQueryKey>
  >({
    queryKey: getActionDeleteDashboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDashboards'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteDashboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDeleteDashboardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteDashboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDeleteDashboardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteDashboardsMutationKey() {
  return ['#Action=DeleteDashboards', '/#Action=DeleteDashboards', 'POST'] as const
}

export function getPostActionDeleteDashboardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDashboards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDashboardsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$post']>) {
      return parseResponse(client['#Action=DeleteDashboards'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDashboards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteDashboards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteDashboardsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteInsightRulesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteInsightRules', '/#Action=DeleteInsightRules', keyArgs] as const
}

export function getActionDeleteInsightRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteInsightRulesQueryKey>
  >({
    queryKey: getActionDeleteInsightRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteInsightRules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDeleteInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDeleteInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteInsightRulesMutationKey() {
  return ['#Action=DeleteInsightRules', '/#Action=DeleteInsightRules', 'POST'] as const
}

export function getPostActionDeleteInsightRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteInsightRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteInsightRules'].$post(args, options))
    },
  })
}

export function usePostActionDeleteInsightRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteInsightRulesMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteMetricStreamQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteMetricStream', '/#Action=DeleteMetricStream', keyArgs] as const
}

export function getActionDeleteMetricStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteMetricStreamQueryKey>
  >({
    queryKey: getActionDeleteMetricStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteMetricStream'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteMetricStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteMetricStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDeleteMetricStreamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteMetricStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteMetricStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDeleteMetricStreamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteMetricStreamMutationKey() {
  return ['#Action=DeleteMetricStream', '/#Action=DeleteMetricStream', 'POST'] as const
}

export function getPostActionDeleteMetricStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteMetricStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteMetricStream'].$post(args, options))
    },
  })
}

export function usePostActionDeleteMetricStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteMetricStreamMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeAlarmHistoryQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAlarmHistory', '/#Action=DescribeAlarmHistory', keyArgs] as const
}

export function getActionDescribeAlarmHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAlarmHistoryQueryKey>
  >({
    queryKey: getActionDescribeAlarmHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAlarmHistory'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeAlarmHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAlarmHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDescribeAlarmHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeAlarmHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAlarmHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDescribeAlarmHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeAlarmHistoryMutationKey() {
  return ['#Action=DescribeAlarmHistory', '/#Action=DescribeAlarmHistory', 'POST'] as const
}

export function getPostActionDescribeAlarmHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAlarmHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAlarmHistory'].$post(args, options))
    },
  })
}

export function usePostActionDescribeAlarmHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeAlarmHistoryMutationOptions<
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

export function getActionDescribeAlarmsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAlarms', '/#Action=DescribeAlarms', keyArgs] as const
}

export function getActionDescribeAlarmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAlarmsQueryKey>
  >({
    queryKey: getActionDescribeAlarmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAlarms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeAlarms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAlarmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionDescribeAlarmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionDescribeAlarms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAlarmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionDescribeAlarmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionDescribeAlarmsMutationKey() {
  return ['#Action=DescribeAlarms', '/#Action=DescribeAlarms', 'POST'] as const
}

export function getPostActionDescribeAlarmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAlarms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAlarmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$post']>) {
      return parseResponse(client['#Action=DescribeAlarms'].$post(args, options))
    },
  })
}

export function usePostActionDescribeAlarms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAlarms']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeAlarmsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeAlarmsForMetricQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAlarmsForMetric', '/#Action=DescribeAlarmsForMetric', keyArgs] as const
}

export function getActionDescribeAlarmsForMetricQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAlarmsForMetricQueryKey>
  >({
    queryKey: getActionDescribeAlarmsForMetricQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAlarmsForMetric'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeAlarmsForMetric<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAlarmsForMetricQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDescribeAlarmsForMetricQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeAlarmsForMetric<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAlarmsForMetricQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDescribeAlarmsForMetricQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeAlarmsForMetricMutationKey() {
  return ['#Action=DescribeAlarmsForMetric', '/#Action=DescribeAlarmsForMetric', 'POST'] as const
}

export function getPostActionDescribeAlarmsForMetricMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAlarmsForMetricMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAlarmsForMetric'].$post(args, options))
    },
  })
}

export function usePostActionDescribeAlarmsForMetric<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeAlarmsForMetricMutationOptions<
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

export function getActionDescribeAnomalyDetectorsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAnomalyDetectors', '/#Action=DescribeAnomalyDetectors', keyArgs] as const
}

export function getActionDescribeAnomalyDetectorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAnomalyDetectorsQueryKey>
  >({
    queryKey: getActionDescribeAnomalyDetectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAnomalyDetectors'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeAnomalyDetectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAnomalyDetectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDescribeAnomalyDetectorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeAnomalyDetectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAnomalyDetectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDescribeAnomalyDetectorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeAnomalyDetectorsMutationKey() {
  return ['#Action=DescribeAnomalyDetectors', '/#Action=DescribeAnomalyDetectors', 'POST'] as const
}

export function getPostActionDescribeAnomalyDetectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAnomalyDetectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAnomalyDetectors'].$post(args, options))
    },
  })
}

export function usePostActionDescribeAnomalyDetectors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeAnomalyDetectorsMutationOptions<
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

export function getActionDescribeInsightRulesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeInsightRules', '/#Action=DescribeInsightRules', keyArgs] as const
}

export function getActionDescribeInsightRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeInsightRulesQueryKey>
  >({
    queryKey: getActionDescribeInsightRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeInsightRules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDescribeInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDescribeInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeInsightRulesMutationKey() {
  return ['#Action=DescribeInsightRules', '/#Action=DescribeInsightRules', 'POST'] as const
}

export function getPostActionDescribeInsightRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeInsightRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeInsightRules'].$post(args, options))
    },
  })
}

export function usePostActionDescribeInsightRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeInsightRulesMutationOptions<
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

export function getActionDisableAlarmActionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DisableAlarmActions', '/#Action=DisableAlarmActions', keyArgs] as const
}

export function getActionDisableAlarmActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisableAlarmActionsQueryKey>
  >({
    queryKey: getActionDisableAlarmActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DisableAlarmActions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDisableAlarmActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDisableAlarmActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDisableAlarmActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDisableAlarmActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDisableAlarmActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDisableAlarmActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDisableAlarmActionsMutationKey() {
  return ['#Action=DisableAlarmActions', '/#Action=DisableAlarmActions', 'POST'] as const
}

export function getPostActionDisableAlarmActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDisableAlarmActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$post']>,
    ) {
      return parseResponse(client['#Action=DisableAlarmActions'].$post(args, options))
    },
  })
}

export function usePostActionDisableAlarmActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDisableAlarmActionsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDisableInsightRulesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DisableInsightRules', '/#Action=DisableInsightRules', keyArgs] as const
}

export function getActionDisableInsightRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisableInsightRulesQueryKey>
  >({
    queryKey: getActionDisableInsightRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DisableInsightRules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDisableInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDisableInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDisableInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDisableInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDisableInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDisableInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDisableInsightRulesMutationKey() {
  return ['#Action=DisableInsightRules', '/#Action=DisableInsightRules', 'POST'] as const
}

export function getPostActionDisableInsightRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DisableInsightRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDisableInsightRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$post']>,
    ) {
      return parseResponse(client['#Action=DisableInsightRules'].$post(args, options))
    },
  })
}

export function usePostActionDisableInsightRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DisableInsightRules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDisableInsightRulesMutationOptions<TError, TOnMutateResult>(
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

export function getActionEnableAlarmActionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EnableAlarmActions', '/#Action=EnableAlarmActions', keyArgs] as const
}

export function getActionEnableAlarmActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnableAlarmActionsQueryKey>
  >({
    queryKey: getActionEnableAlarmActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=EnableAlarmActions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionEnableAlarmActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionEnableAlarmActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionEnableAlarmActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionEnableAlarmActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionEnableAlarmActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionEnableAlarmActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionEnableAlarmActionsMutationKey() {
  return ['#Action=EnableAlarmActions', '/#Action=EnableAlarmActions', 'POST'] as const
}

export function getPostActionEnableAlarmActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionEnableAlarmActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$post']>,
    ) {
      return parseResponse(client['#Action=EnableAlarmActions'].$post(args, options))
    },
  })
}

export function usePostActionEnableAlarmActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionEnableAlarmActionsMutationOptions<TError, TOnMutateResult>(
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

export function getActionEnableInsightRulesQueryKey(
  args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EnableInsightRules', '/#Action=EnableInsightRules', keyArgs] as const
}

export function getActionEnableInsightRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnableInsightRulesQueryKey>
  >({
    queryKey: getActionEnableInsightRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=EnableInsightRules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionEnableInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionEnableInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionEnableInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionEnableInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionEnableInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionEnableInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionEnableInsightRulesMutationKey() {
  return ['#Action=EnableInsightRules', '/#Action=EnableInsightRules', 'POST'] as const
}

export function getPostActionEnableInsightRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=EnableInsightRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionEnableInsightRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$post']>,
    ) {
      return parseResponse(client['#Action=EnableInsightRules'].$post(args, options))
    },
  })
}

export function usePostActionEnableInsightRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=EnableInsightRules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionEnableInsightRulesMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetDashboardQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetDashboard']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetDashboard', '/#Action=GetDashboard', keyArgs] as const
}

export function getActionGetDashboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetDashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetDashboardQueryKey>
  >({
    queryKey: getActionGetDashboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetDashboard'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetDashboard']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetDashboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionGetDashboardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionGetDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetDashboard']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetDashboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionGetDashboardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionGetDashboardMutationKey() {
  return ['#Action=GetDashboard', '/#Action=GetDashboard', 'POST'] as const
}

export function getPostActionGetDashboardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetDashboard']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetDashboardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetDashboard']['$post']>) {
      return parseResponse(client['#Action=GetDashboard'].$post(args, options))
    },
  })
}

export function usePostActionGetDashboard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetDashboard']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetDashboardMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetInsightRuleReportQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetInsightRuleReport', '/#Action=GetInsightRuleReport', keyArgs] as const
}

export function getActionGetInsightRuleReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetInsightRuleReportQueryKey>
  >({
    queryKey: getActionGetInsightRuleReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetInsightRuleReport'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetInsightRuleReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetInsightRuleReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetInsightRuleReportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetInsightRuleReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetInsightRuleReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetInsightRuleReportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetInsightRuleReportMutationKey() {
  return ['#Action=GetInsightRuleReport', '/#Action=GetInsightRuleReport', 'POST'] as const
}

export function getPostActionGetInsightRuleReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetInsightRuleReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$post']>,
    ) {
      return parseResponse(client['#Action=GetInsightRuleReport'].$post(args, options))
    },
  })
}

export function usePostActionGetInsightRuleReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetInsightRuleReportMutationOptions<
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

export function getActionGetMetricDataQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetMetricData']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetMetricData', '/#Action=GetMetricData', keyArgs] as const
}

export function getActionGetMetricDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricData']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetMetricDataQueryKey>
  >({
    queryKey: getActionGetMetricDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetMetricData'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetMetricData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricData']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetMetricDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionGetMetricDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionGetMetricData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricData']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetMetricDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionGetMetricDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionGetMetricDataMutationKey() {
  return ['#Action=GetMetricData', '/#Action=GetMetricData', 'POST'] as const
}

export function getPostActionGetMetricDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetMetricData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetMetricDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetMetricData']['$post']>) {
      return parseResponse(client['#Action=GetMetricData'].$post(args, options))
    },
  })
}

export function usePostActionGetMetricData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetMetricData']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetMetricDataMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetMetricStatisticsQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetMetricStatistics', '/#Action=GetMetricStatistics', keyArgs] as const
}

export function getActionGetMetricStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetMetricStatisticsQueryKey>
  >({
    queryKey: getActionGetMetricStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetMetricStatistics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetMetricStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetMetricStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetMetricStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetMetricStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetMetricStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetMetricStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetMetricStatisticsMutationKey() {
  return ['#Action=GetMetricStatistics', '/#Action=GetMetricStatistics', 'POST'] as const
}

export function getPostActionGetMetricStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetMetricStatisticsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$post']>,
    ) {
      return parseResponse(client['#Action=GetMetricStatistics'].$post(args, options))
    },
  })
}

export function usePostActionGetMetricStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetMetricStatisticsMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetMetricStreamQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetMetricStream', '/#Action=GetMetricStream', keyArgs] as const
}

export function getActionGetMetricStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetMetricStreamQueryKey>
  >({
    queryKey: getActionGetMetricStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetMetricStream'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetMetricStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetMetricStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetMetricStreamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetMetricStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetMetricStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetMetricStreamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetMetricStreamMutationKey() {
  return ['#Action=GetMetricStream', '/#Action=GetMetricStream', 'POST'] as const
}

export function getPostActionGetMetricStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetMetricStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetMetricStreamMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$post']>) {
      return parseResponse(client['#Action=GetMetricStream'].$post(args, options))
    },
  })
}

export function usePostActionGetMetricStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetMetricStream']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetMetricStreamMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetMetricWidgetImageQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetMetricWidgetImage', '/#Action=GetMetricWidgetImage', keyArgs] as const
}

export function getActionGetMetricWidgetImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetMetricWidgetImageQueryKey>
  >({
    queryKey: getActionGetMetricWidgetImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetMetricWidgetImage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetMetricWidgetImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetMetricWidgetImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetMetricWidgetImageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetMetricWidgetImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetMetricWidgetImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetMetricWidgetImageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetMetricWidgetImageMutationKey() {
  return ['#Action=GetMetricWidgetImage', '/#Action=GetMetricWidgetImage', 'POST'] as const
}

export function getPostActionGetMetricWidgetImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetMetricWidgetImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$post']>,
    ) {
      return parseResponse(client['#Action=GetMetricWidgetImage'].$post(args, options))
    },
  })
}

export function usePostActionGetMetricWidgetImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetMetricWidgetImageMutationOptions<
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

export function getActionListDashboardsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListDashboards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListDashboards', '/#Action=ListDashboards', keyArgs] as const
}

export function getActionListDashboardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListDashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListDashboardsQueryKey>
  >({
    queryKey: getActionListDashboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListDashboards'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListDashboards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListDashboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionListDashboardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionListDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListDashboards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListDashboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionListDashboardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionListDashboardsMutationKey() {
  return ['#Action=ListDashboards', '/#Action=ListDashboards', 'POST'] as const
}

export function getPostActionListDashboardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListDashboards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListDashboardsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListDashboards']['$post']>) {
      return parseResponse(client['#Action=ListDashboards'].$post(args, options))
    },
  })
}

export function usePostActionListDashboards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListDashboards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListDashboardsMutationOptions<TError, TOnMutateResult>(
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

export function getActionListManagedInsightRulesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListManagedInsightRules', '/#Action=ListManagedInsightRules', keyArgs] as const
}

export function getActionListManagedInsightRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListManagedInsightRulesQueryKey>
  >({
    queryKey: getActionListManagedInsightRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListManagedInsightRules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListManagedInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListManagedInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListManagedInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListManagedInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListManagedInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListManagedInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListManagedInsightRulesMutationKey() {
  return ['#Action=ListManagedInsightRules', '/#Action=ListManagedInsightRules', 'POST'] as const
}

export function getPostActionListManagedInsightRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListManagedInsightRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$post']>,
    ) {
      return parseResponse(client['#Action=ListManagedInsightRules'].$post(args, options))
    },
  })
}

export function usePostActionListManagedInsightRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListManagedInsightRulesMutationOptions<
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

export function getActionListMetricStreamsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListMetricStreams', '/#Action=ListMetricStreams', keyArgs] as const
}

export function getActionListMetricStreamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListMetricStreamsQueryKey>
  >({
    queryKey: getActionListMetricStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListMetricStreams'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListMetricStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListMetricStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListMetricStreamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListMetricStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListMetricStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListMetricStreamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListMetricStreamsMutationKey() {
  return ['#Action=ListMetricStreams', '/#Action=ListMetricStreams', 'POST'] as const
}

export function getPostActionListMetricStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListMetricStreams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListMetricStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$post']>,
    ) {
      return parseResponse(client['#Action=ListMetricStreams'].$post(args, options))
    },
  })
}

export function usePostActionListMetricStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListMetricStreams']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListMetricStreamsMutationOptions<TError, TOnMutateResult>(
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

export function getActionListMetricsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListMetrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListMetrics', '/#Action=ListMetrics', keyArgs] as const
}

export function getActionListMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListMetricsQueryKey>
  >({
    queryKey: getActionListMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListMetrics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionListMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionListMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionListMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionListMetricsMutationKey() {
  return ['#Action=ListMetrics', '/#Action=ListMetrics', 'POST'] as const
}

export function getPostActionListMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListMetrics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListMetricsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListMetrics']['$post']>) {
      return parseResponse(client['#Action=ListMetrics'].$post(args, options))
    },
  })
}

export function usePostActionListMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListMetrics']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListMetricsMutationOptions<TError, TOnMutateResult>(
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

export function getActionListTagsForResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', keyArgs] as const
}

export function getActionListTagsForResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTagsForResourceQueryKey>
  >({
    queryKey: getActionListTagsForResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListTagsForResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTagsForResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListTagsForResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTagsForResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListTagsForResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListTagsForResourceMutationKey() {
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', 'POST'] as const
}

export function getPostActionListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
    ) {
      return parseResponse(client['#Action=ListTagsForResource'].$post(args, options))
    },
  })
}

export function usePostActionListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListTagsForResourceMutationOptions<TError, TOnMutateResult>(
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

export function getActionPutAnomalyDetectorQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutAnomalyDetector', '/#Action=PutAnomalyDetector', keyArgs] as const
}

export function getActionPutAnomalyDetectorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutAnomalyDetectorQueryKey>
  >({
    queryKey: getActionPutAnomalyDetectorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutAnomalyDetector'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPutAnomalyDetector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutAnomalyDetectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionPutAnomalyDetectorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionPutAnomalyDetector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutAnomalyDetectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionPutAnomalyDetectorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionPutAnomalyDetectorMutationKey() {
  return ['#Action=PutAnomalyDetector', '/#Action=PutAnomalyDetector', 'POST'] as const
}

export function getPostActionPutAnomalyDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutAnomalyDetectorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$post']>,
    ) {
      return parseResponse(client['#Action=PutAnomalyDetector'].$post(args, options))
    },
  })
}

export function usePostActionPutAnomalyDetector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutAnomalyDetectorMutationOptions<TError, TOnMutateResult>(
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

export function getActionPutCompositeAlarmQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutCompositeAlarm', '/#Action=PutCompositeAlarm', keyArgs] as const
}

export function getActionPutCompositeAlarmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutCompositeAlarmQueryKey>
  >({
    queryKey: getActionPutCompositeAlarmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutCompositeAlarm'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPutCompositeAlarm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutCompositeAlarmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionPutCompositeAlarmQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionPutCompositeAlarm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutCompositeAlarmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionPutCompositeAlarmQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionPutCompositeAlarmMutationKey() {
  return ['#Action=PutCompositeAlarm', '/#Action=PutCompositeAlarm', 'POST'] as const
}

export function getPostActionPutCompositeAlarmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutCompositeAlarmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$post']>,
    ) {
      return parseResponse(client['#Action=PutCompositeAlarm'].$post(args, options))
    },
  })
}

export function usePostActionPutCompositeAlarm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutCompositeAlarmMutationOptions<TError, TOnMutateResult>(
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

export function getActionPutDashboardQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutDashboard']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutDashboard', '/#Action=PutDashboard', keyArgs] as const
}

export function getActionPutDashboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutDashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutDashboardQueryKey>
  >({
    queryKey: getActionPutDashboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutDashboard'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPutDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutDashboard']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutDashboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionPutDashboardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionPutDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutDashboard']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutDashboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionPutDashboardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionPutDashboardMutationKey() {
  return ['#Action=PutDashboard', '/#Action=PutDashboard', 'POST'] as const
}

export function getPostActionPutDashboardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutDashboard']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutDashboardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutDashboard']['$post']>) {
      return parseResponse(client['#Action=PutDashboard'].$post(args, options))
    },
  })
}

export function usePostActionPutDashboard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutDashboard']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutDashboardMutationOptions<TError, TOnMutateResult>(
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

export function getActionPutInsightRuleQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutInsightRule', '/#Action=PutInsightRule', keyArgs] as const
}

export function getActionPutInsightRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutInsightRuleQueryKey>
  >({
    queryKey: getActionPutInsightRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutInsightRule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPutInsightRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutInsightRuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionPutInsightRuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionPutInsightRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutInsightRuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionPutInsightRuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionPutInsightRuleMutationKey() {
  return ['#Action=PutInsightRule', '/#Action=PutInsightRule', 'POST'] as const
}

export function getPostActionPutInsightRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutInsightRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutInsightRuleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$post']>) {
      return parseResponse(client['#Action=PutInsightRule'].$post(args, options))
    },
  })
}

export function usePostActionPutInsightRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutInsightRule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutInsightRuleMutationOptions<TError, TOnMutateResult>(
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

export function getActionPutManagedInsightRulesQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutManagedInsightRules', '/#Action=PutManagedInsightRules', keyArgs] as const
}

export function getActionPutManagedInsightRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutManagedInsightRulesQueryKey>
  >({
    queryKey: getActionPutManagedInsightRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutManagedInsightRules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPutManagedInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutManagedInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionPutManagedInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionPutManagedInsightRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutManagedInsightRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionPutManagedInsightRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionPutManagedInsightRulesMutationKey() {
  return ['#Action=PutManagedInsightRules', '/#Action=PutManagedInsightRules', 'POST'] as const
}

export function getPostActionPutManagedInsightRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutManagedInsightRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$post']>,
    ) {
      return parseResponse(client['#Action=PutManagedInsightRules'].$post(args, options))
    },
  })
}

export function usePostActionPutManagedInsightRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutManagedInsightRulesMutationOptions<
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

export function getActionPutMetricAlarmQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutMetricAlarm', '/#Action=PutMetricAlarm', keyArgs] as const
}

export function getActionPutMetricAlarmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutMetricAlarmQueryKey>
  >({
    queryKey: getActionPutMetricAlarmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutMetricAlarm'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPutMetricAlarm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutMetricAlarmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionPutMetricAlarmQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionPutMetricAlarm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutMetricAlarmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionPutMetricAlarmQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionPutMetricAlarmMutationKey() {
  return ['#Action=PutMetricAlarm', '/#Action=PutMetricAlarm', 'POST'] as const
}

export function getPostActionPutMetricAlarmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutMetricAlarmMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$post']>) {
      return parseResponse(client['#Action=PutMetricAlarm'].$post(args, options))
    },
  })
}

export function usePostActionPutMetricAlarm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutMetricAlarmMutationOptions<TError, TOnMutateResult>(
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

export function getActionPutMetricDataQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutMetricData']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutMetricData', '/#Action=PutMetricData', keyArgs] as const
}

export function getActionPutMetricDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutMetricData']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutMetricDataQueryKey>
  >({
    queryKey: getActionPutMetricDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutMetricData'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPutMetricData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutMetricData']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutMetricDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionPutMetricDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionPutMetricData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutMetricData']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutMetricDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionPutMetricDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionPutMetricDataMutationKey() {
  return ['#Action=PutMetricData', '/#Action=PutMetricData', 'POST'] as const
}

export function getPostActionPutMetricDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutMetricData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutMetricDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutMetricData']['$post']>) {
      return parseResponse(client['#Action=PutMetricData'].$post(args, options))
    },
  })
}

export function usePostActionPutMetricData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutMetricData']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutMetricDataMutationOptions<TError, TOnMutateResult>(
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

export function getActionPutMetricStreamQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutMetricStream', '/#Action=PutMetricStream', keyArgs] as const
}

export function getActionPutMetricStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutMetricStreamQueryKey>
  >({
    queryKey: getActionPutMetricStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutMetricStream'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPutMetricStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutMetricStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionPutMetricStreamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionPutMetricStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutMetricStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionPutMetricStreamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionPutMetricStreamMutationKey() {
  return ['#Action=PutMetricStream', '/#Action=PutMetricStream', 'POST'] as const
}

export function getPostActionPutMetricStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutMetricStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutMetricStreamMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$post']>) {
      return parseResponse(client['#Action=PutMetricStream'].$post(args, options))
    },
  })
}

export function usePostActionPutMetricStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutMetricStream']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutMetricStreamMutationOptions<TError, TOnMutateResult>(
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

export function getActionSetAlarmStateQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetAlarmState', '/#Action=SetAlarmState', keyArgs] as const
}

export function getActionSetAlarmStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetAlarmStateQueryKey>
  >({
    queryKey: getActionSetAlarmStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetAlarmState'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionSetAlarmState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetAlarmStateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionSetAlarmStateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionSetAlarmState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetAlarmStateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionSetAlarmStateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionSetAlarmStateMutationKey() {
  return ['#Action=SetAlarmState', '/#Action=SetAlarmState', 'POST'] as const
}

export function getPostActionSetAlarmStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetAlarmState']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetAlarmStateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$post']>) {
      return parseResponse(client['#Action=SetAlarmState'].$post(args, options))
    },
  })
}

export function usePostActionSetAlarmState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetAlarmState']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetAlarmStateMutationOptions<TError, TOnMutateResult>(
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

export function getActionStartMetricStreamsQueryKey(
  args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartMetricStreams', '/#Action=StartMetricStreams', keyArgs] as const
}

export function getActionStartMetricStreamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartMetricStreamsQueryKey>
  >({
    queryKey: getActionStartMetricStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StartMetricStreams'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionStartMetricStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionStartMetricStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionStartMetricStreamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionStartMetricStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionStartMetricStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionStartMetricStreamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionStartMetricStreamsMutationKey() {
  return ['#Action=StartMetricStreams', '/#Action=StartMetricStreams', 'POST'] as const
}

export function getPostActionStartMetricStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StartMetricStreams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStartMetricStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$post']>,
    ) {
      return parseResponse(client['#Action=StartMetricStreams'].$post(args, options))
    },
  })
}

export function usePostActionStartMetricStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=StartMetricStreams']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionStartMetricStreamsMutationOptions<TError, TOnMutateResult>(
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

export function getActionStopMetricStreamsQueryKey(
  args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StopMetricStreams', '/#Action=StopMetricStreams', keyArgs] as const
}

export function getActionStopMetricStreamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStopMetricStreamsQueryKey>
  >({
    queryKey: getActionStopMetricStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StopMetricStreams'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionStopMetricStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionStopMetricStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionStopMetricStreamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionStopMetricStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionStopMetricStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionStopMetricStreamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionStopMetricStreamsMutationKey() {
  return ['#Action=StopMetricStreams', '/#Action=StopMetricStreams', 'POST'] as const
}

export function getPostActionStopMetricStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StopMetricStreams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStopMetricStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$post']>,
    ) {
      return parseResponse(client['#Action=StopMetricStreams'].$post(args, options))
    },
  })
}

export function usePostActionStopMetricStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=StopMetricStreams']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionStopMetricStreamsMutationOptions<TError, TOnMutateResult>(
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

export function getActionTagResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagResource', '/#Action=TagResource', keyArgs] as const
}

export function getActionTagResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagResourceQueryKey>
  >({
    queryKey: getActionTagResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=TagResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionTagResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionTagResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionTagResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionTagResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionTagResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionTagResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionTagResourceMutationKey() {
  return ['#Action=TagResource', '/#Action=TagResource', 'POST'] as const
}

export function getPostActionTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagResourceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TagResource']['$post']>) {
      return parseResponse(client['#Action=TagResource'].$post(args, options))
    },
  })
}

export function usePostActionTagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagResourceMutationOptions<TError, TOnMutateResult>(
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

export function getActionUntagResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagResource', '/#Action=UntagResource', keyArgs] as const
}

export function getActionUntagResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagResourceQueryKey>
  >({
    queryKey: getActionUntagResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UntagResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionUntagResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUntagResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionUntagResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionUntagResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUntagResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionUntagResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionUntagResourceMutationKey() {
  return ['#Action=UntagResource', '/#Action=UntagResource', 'POST'] as const
}

export function getPostActionUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagResourceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UntagResource']['$post']>) {
      return parseResponse(client['#Action=UntagResource'].$post(args, options))
    },
  })
}

export function usePostActionUntagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagResourceMutationOptions<TError, TOnMutateResult>(
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
