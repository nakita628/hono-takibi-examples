import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetActionDeleteAlarmsKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteAlarms', '/#Action=DeleteAlarms', keyArgs] as const
}

export function useGetActionDeleteAlarms<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAlarmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAlarms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteAlarms<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAlarmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAlarms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteAlarmsKey() {
  return ['#Action=DeleteAlarms', '/#Action=DeleteAlarms', 'POST'] as const
}

export function usePostActionDeleteAlarms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAlarms']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteAlarms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteAlarmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$post']> },
      ) => parseResponse(client['#Action=DeleteAlarms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteAnomalyDetectorKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteAnomalyDetector', '/#Action=DeleteAnomalyDetector', keyArgs] as const
}

export function useGetActionDeleteAnomalyDetector<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAnomalyDetectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAnomalyDetector'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteAnomalyDetector<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAnomalyDetectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAnomalyDetector'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteAnomalyDetectorKey() {
  return ['#Action=DeleteAnomalyDetector', '/#Action=DeleteAnomalyDetector', 'POST'] as const
}

export function usePostActionDeleteAnomalyDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAnomalyDetector']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteAnomalyDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$post']> },
      ) => parseResponse(client['#Action=DeleteAnomalyDetector'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDashboardsKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDashboards', '/#Action=DeleteDashboards', keyArgs] as const
}

export function useGetActionDeleteDashboards<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDashboards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDashboards<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDashboards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDashboardsKey() {
  return ['#Action=DeleteDashboards', '/#Action=DeleteDashboards', 'POST'] as const
}

export function usePostActionDeleteDashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDashboards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDashboards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDashboardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$post']> },
      ) => parseResponse(client['#Action=DeleteDashboards'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteInsightRulesKey(
  args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteInsightRules', '/#Action=DeleteInsightRules', keyArgs] as const
}

export function useGetActionDeleteInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteInsightRulesKey() {
  return ['#Action=DeleteInsightRules', '/#Action=DeleteInsightRules', 'POST'] as const
}

export function usePostActionDeleteInsightRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteInsightRules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteInsightRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$post']> },
      ) => parseResponse(client['#Action=DeleteInsightRules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteMetricStreamKey(
  args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteMetricStream', '/#Action=DeleteMetricStream', keyArgs] as const
}

export function useGetActionDeleteMetricStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteMetricStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteMetricStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteMetricStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteMetricStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteMetricStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteMetricStreamKey() {
  return ['#Action=DeleteMetricStream', '/#Action=DeleteMetricStream', 'POST'] as const
}

export function usePostActionDeleteMetricStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteMetricStream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteMetricStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$post']> },
      ) => parseResponse(client['#Action=DeleteMetricStream'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAlarmHistoryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAlarmHistory', '/#Action=DescribeAlarmHistory', keyArgs] as const
}

export function useGetActionDescribeAlarmHistory<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAlarmHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeAlarmHistory'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAlarmHistory<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAlarmHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeAlarmHistory'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAlarmHistoryKey() {
  return ['#Action=DescribeAlarmHistory', '/#Action=DescribeAlarmHistory', 'POST'] as const
}

export function usePostActionDescribeAlarmHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmHistory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAlarmHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$post']> },
      ) => parseResponse(client['#Action=DescribeAlarmHistory'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAlarmsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAlarms', '/#Action=DescribeAlarms', keyArgs] as const
}

export function useGetActionDescribeAlarms<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAlarmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeAlarms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAlarms<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAlarmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeAlarms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAlarmsKey() {
  return ['#Action=DescribeAlarms', '/#Action=DescribeAlarms', 'POST'] as const
}

export function usePostActionDescribeAlarms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAlarms']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAlarms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAlarmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$post']> },
      ) => parseResponse(client['#Action=DescribeAlarms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAlarmsForMetricKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAlarmsForMetric', '/#Action=DescribeAlarmsForMetric', keyArgs] as const
}

export function useGetActionDescribeAlarmsForMetric<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAlarmsForMetricKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAlarmsForMetric'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAlarmsForMetric<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAlarmsForMetricKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAlarmsForMetric'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAlarmsForMetricKey() {
  return ['#Action=DescribeAlarmsForMetric', '/#Action=DescribeAlarmsForMetric', 'POST'] as const
}

export function usePostActionDescribeAlarmsForMetric<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAlarmsForMetric']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAlarmsForMetricKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$post']> },
      ) => parseResponse(client['#Action=DescribeAlarmsForMetric'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAnomalyDetectorsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAnomalyDetectors', '/#Action=DescribeAnomalyDetectors', keyArgs] as const
}

export function useGetActionDescribeAnomalyDetectors<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAnomalyDetectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAnomalyDetectors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAnomalyDetectors<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAnomalyDetectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAnomalyDetectors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAnomalyDetectorsKey() {
  return ['#Action=DescribeAnomalyDetectors', '/#Action=DescribeAnomalyDetectors', 'POST'] as const
}

export function usePostActionDescribeAnomalyDetectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAnomalyDetectors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAnomalyDetectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$post']> },
      ) => parseResponse(client['#Action=DescribeAnomalyDetectors'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeInsightRulesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeInsightRules', '/#Action=DescribeInsightRules', keyArgs] as const
}

export function useGetActionDescribeInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeInsightRulesKey() {
  return ['#Action=DescribeInsightRules', '/#Action=DescribeInsightRules', 'POST'] as const
}

export function usePostActionDescribeInsightRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeInsightRules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeInsightRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$post']> },
      ) => parseResponse(client['#Action=DescribeInsightRules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDisableAlarmActionsKey(
  args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DisableAlarmActions', '/#Action=DisableAlarmActions', keyArgs] as const
}

export function useGetActionDisableAlarmActions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDisableAlarmActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DisableAlarmActions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDisableAlarmActions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDisableAlarmActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DisableAlarmActions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDisableAlarmActionsKey() {
  return ['#Action=DisableAlarmActions', '/#Action=DisableAlarmActions', 'POST'] as const
}

export function usePostActionDisableAlarmActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableAlarmActions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDisableAlarmActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$post']> },
      ) => parseResponse(client['#Action=DisableAlarmActions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDisableInsightRulesKey(
  args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DisableInsightRules', '/#Action=DisableInsightRules', keyArgs] as const
}

export function useGetActionDisableInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDisableInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DisableInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDisableInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDisableInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DisableInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDisableInsightRulesKey() {
  return ['#Action=DisableInsightRules', '/#Action=DisableInsightRules', 'POST'] as const
}

export function usePostActionDisableInsightRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableInsightRules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DisableInsightRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDisableInsightRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$post']> },
      ) => parseResponse(client['#Action=DisableInsightRules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionEnableAlarmActionsKey(
  args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EnableAlarmActions', '/#Action=EnableAlarmActions', keyArgs] as const
}

export function useGetActionEnableAlarmActions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionEnableAlarmActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableAlarmActions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionEnableAlarmActions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionEnableAlarmActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableAlarmActions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionEnableAlarmActionsKey() {
  return ['#Action=EnableAlarmActions', '/#Action=EnableAlarmActions', 'POST'] as const
}

export function usePostActionEnableAlarmActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableAlarmActions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionEnableAlarmActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$post']> },
      ) => parseResponse(client['#Action=EnableAlarmActions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionEnableInsightRulesKey(
  args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EnableInsightRules', '/#Action=EnableInsightRules', keyArgs] as const
}

export function useGetActionEnableInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionEnableInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionEnableInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionEnableInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionEnableInsightRulesKey() {
  return ['#Action=EnableInsightRules', '/#Action=EnableInsightRules', 'POST'] as const
}

export function usePostActionEnableInsightRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableInsightRules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=EnableInsightRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionEnableInsightRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$post']> },
      ) => parseResponse(client['#Action=EnableInsightRules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetDashboardKey(
  args: InferRequestType<(typeof client)['#Action=GetDashboard']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetDashboard', '/#Action=GetDashboard', keyArgs] as const
}

export function useGetActionGetDashboard<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetDashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetDashboard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetDashboard<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetDashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetDashboard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetDashboardKey() {
  return ['#Action=GetDashboard', '/#Action=GetDashboard', 'POST'] as const
}

export function usePostActionGetDashboard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetDashboard']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetDashboard']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetDashboardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetDashboard']['$post']> },
      ) => parseResponse(client['#Action=GetDashboard'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetInsightRuleReportKey(
  args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetInsightRuleReport', '/#Action=GetInsightRuleReport', keyArgs] as const
}

export function useGetActionGetInsightRuleReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetInsightRuleReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetInsightRuleReport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetInsightRuleReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetInsightRuleReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetInsightRuleReport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetInsightRuleReportKey() {
  return ['#Action=GetInsightRuleReport', '/#Action=GetInsightRuleReport', 'POST'] as const
}

export function usePostActionGetInsightRuleReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetInsightRuleReport']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetInsightRuleReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$post']> },
      ) => parseResponse(client['#Action=GetInsightRuleReport'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetMetricDataKey(
  args: InferRequestType<(typeof client)['#Action=GetMetricData']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetMetricData', '/#Action=GetMetricData', keyArgs] as const
}

export function useGetActionGetMetricData<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMetricData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMetricDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMetricData'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetMetricData<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMetricData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMetricDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMetricData'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetMetricDataKey() {
  return ['#Action=GetMetricData', '/#Action=GetMetricData', 'POST'] as const
}

export function usePostActionGetMetricData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMetricData']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetMetricData']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetMetricDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetMetricData']['$post']> },
      ) => parseResponse(client['#Action=GetMetricData'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetMetricStatisticsKey(
  args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetMetricStatistics', '/#Action=GetMetricStatistics', keyArgs] as const
}

export function useGetActionGetMetricStatistics<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMetricStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMetricStatistics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetMetricStatistics<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMetricStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMetricStatistics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetMetricStatisticsKey() {
  return ['#Action=GetMetricStatistics', '/#Action=GetMetricStatistics', 'POST'] as const
}

export function usePostActionGetMetricStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetMetricStatistics']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetMetricStatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$post']> },
      ) => parseResponse(client['#Action=GetMetricStatistics'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetMetricStreamKey(
  args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetMetricStream', '/#Action=GetMetricStream', keyArgs] as const
}

export function useGetActionGetMetricStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMetricStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMetricStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetMetricStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMetricStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMetricStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetMetricStreamKey() {
  return ['#Action=GetMetricStream', '/#Action=GetMetricStream', 'POST'] as const
}

export function usePostActionGetMetricStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetMetricStream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetMetricStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetMetricStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetMetricStream']['$post']> },
      ) => parseResponse(client['#Action=GetMetricStream'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetMetricWidgetImageKey(
  args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetMetricWidgetImage', '/#Action=GetMetricWidgetImage', keyArgs] as const
}

export function useGetActionGetMetricWidgetImage<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMetricWidgetImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMetricWidgetImage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetMetricWidgetImage<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMetricWidgetImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMetricWidgetImage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetMetricWidgetImageKey() {
  return ['#Action=GetMetricWidgetImage', '/#Action=GetMetricWidgetImage', 'POST'] as const
}

export function usePostActionGetMetricWidgetImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetMetricWidgetImage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetMetricWidgetImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$post']> },
      ) => parseResponse(client['#Action=GetMetricWidgetImage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListDashboardsKey(
  args: InferRequestType<(typeof client)['#Action=ListDashboards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListDashboards', '/#Action=ListDashboards', keyArgs] as const
}

export function useGetActionListDashboards<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListDashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListDashboards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListDashboards<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListDashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListDashboards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListDashboardsKey() {
  return ['#Action=ListDashboards', '/#Action=ListDashboards', 'POST'] as const
}

export function usePostActionListDashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListDashboards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListDashboards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListDashboardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListDashboards']['$post']> },
      ) => parseResponse(client['#Action=ListDashboards'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListManagedInsightRulesKey(
  args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListManagedInsightRules', '/#Action=ListManagedInsightRules', keyArgs] as const
}

export function useGetActionListManagedInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListManagedInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListManagedInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListManagedInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListManagedInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListManagedInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListManagedInsightRulesKey() {
  return ['#Action=ListManagedInsightRules', '/#Action=ListManagedInsightRules', 'POST'] as const
}

export function usePostActionListManagedInsightRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListManagedInsightRules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListManagedInsightRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$post']> },
      ) => parseResponse(client['#Action=ListManagedInsightRules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListMetricStreamsKey(
  args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListMetricStreams', '/#Action=ListMetricStreams', keyArgs] as const
}

export function useGetActionListMetricStreams<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListMetricStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMetricStreams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListMetricStreams<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListMetricStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMetricStreams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListMetricStreamsKey() {
  return ['#Action=ListMetricStreams', '/#Action=ListMetricStreams', 'POST'] as const
}

export function usePostActionListMetricStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMetricStreams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListMetricStreams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListMetricStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$post']> },
      ) => parseResponse(client['#Action=ListMetricStreams'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListMetricsKey(
  args: InferRequestType<(typeof client)['#Action=ListMetrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListMetrics', '/#Action=ListMetrics', keyArgs] as const
}

export function useGetActionListMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMetrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMetrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListMetricsKey() {
  return ['#Action=ListMetrics', '/#Action=ListMetrics', 'POST'] as const
}

export function usePostActionListMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMetrics']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListMetrics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListMetrics']['$post']> },
      ) => parseResponse(client['#Action=ListMetrics'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListTagsForResourceKey(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', keyArgs] as const
}

export function useGetActionListTagsForResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListTagsForResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTagsForResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListTagsForResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListTagsForResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTagsForResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListTagsForResourceKey() {
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', 'POST'] as const
}

export function usePostActionListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']> },
      ) => parseResponse(client['#Action=ListTagsForResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutAnomalyDetectorKey(
  args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutAnomalyDetector', '/#Action=PutAnomalyDetector', keyArgs] as const
}

export function useGetActionPutAnomalyDetector<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutAnomalyDetectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutAnomalyDetector'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutAnomalyDetector<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutAnomalyDetectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutAnomalyDetector'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutAnomalyDetectorKey() {
  return ['#Action=PutAnomalyDetector', '/#Action=PutAnomalyDetector', 'POST'] as const
}

export function usePostActionPutAnomalyDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutAnomalyDetector']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutAnomalyDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$post']> },
      ) => parseResponse(client['#Action=PutAnomalyDetector'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutCompositeAlarmKey(
  args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutCompositeAlarm', '/#Action=PutCompositeAlarm', keyArgs] as const
}

export function useGetActionPutCompositeAlarm<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutCompositeAlarmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutCompositeAlarm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutCompositeAlarm<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutCompositeAlarmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutCompositeAlarm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutCompositeAlarmKey() {
  return ['#Action=PutCompositeAlarm', '/#Action=PutCompositeAlarm', 'POST'] as const
}

export function usePostActionPutCompositeAlarm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutCompositeAlarm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutCompositeAlarmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$post']> },
      ) => parseResponse(client['#Action=PutCompositeAlarm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutDashboardKey(
  args: InferRequestType<(typeof client)['#Action=PutDashboard']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutDashboard', '/#Action=PutDashboard', keyArgs] as const
}

export function useGetActionPutDashboard<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutDashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutDashboard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutDashboard<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutDashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutDashboard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutDashboardKey() {
  return ['#Action=PutDashboard', '/#Action=PutDashboard', 'POST'] as const
}

export function usePostActionPutDashboard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutDashboard']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutDashboard']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutDashboardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutDashboard']['$post']> },
      ) => parseResponse(client['#Action=PutDashboard'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutInsightRuleKey(
  args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutInsightRule', '/#Action=PutInsightRule', keyArgs] as const
}

export function useGetActionPutInsightRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutInsightRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutInsightRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutInsightRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutInsightRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutInsightRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutInsightRuleKey() {
  return ['#Action=PutInsightRule', '/#Action=PutInsightRule', 'POST'] as const
}

export function usePostActionPutInsightRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutInsightRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutInsightRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutInsightRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutInsightRule']['$post']> },
      ) => parseResponse(client['#Action=PutInsightRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutManagedInsightRulesKey(
  args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutManagedInsightRules', '/#Action=PutManagedInsightRules', keyArgs] as const
}

export function useGetActionPutManagedInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutManagedInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutManagedInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutManagedInsightRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutManagedInsightRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutManagedInsightRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutManagedInsightRulesKey() {
  return ['#Action=PutManagedInsightRules', '/#Action=PutManagedInsightRules', 'POST'] as const
}

export function usePostActionPutManagedInsightRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutManagedInsightRules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutManagedInsightRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$post']> },
      ) => parseResponse(client['#Action=PutManagedInsightRules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutMetricAlarmKey(
  args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutMetricAlarm', '/#Action=PutMetricAlarm', keyArgs] as const
}

export function useGetActionPutMetricAlarm<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutMetricAlarmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutMetricAlarm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutMetricAlarm<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutMetricAlarmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutMetricAlarm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutMetricAlarmKey() {
  return ['#Action=PutMetricAlarm', '/#Action=PutMetricAlarm', 'POST'] as const
}

export function usePostActionPutMetricAlarm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutMetricAlarm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutMetricAlarmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$post']> },
      ) => parseResponse(client['#Action=PutMetricAlarm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutMetricDataKey(
  args: InferRequestType<(typeof client)['#Action=PutMetricData']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutMetricData', '/#Action=PutMetricData', keyArgs] as const
}

export function useGetActionPutMetricData<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutMetricData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutMetricDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutMetricData'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutMetricData<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutMetricData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutMetricDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutMetricData'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutMetricDataKey() {
  return ['#Action=PutMetricData', '/#Action=PutMetricData', 'POST'] as const
}

export function usePostActionPutMetricData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutMetricData']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutMetricData']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutMetricDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutMetricData']['$post']> },
      ) => parseResponse(client['#Action=PutMetricData'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutMetricStreamKey(
  args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutMetricStream', '/#Action=PutMetricStream', keyArgs] as const
}

export function useGetActionPutMetricStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutMetricStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutMetricStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutMetricStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutMetricStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutMetricStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutMetricStreamKey() {
  return ['#Action=PutMetricStream', '/#Action=PutMetricStream', 'POST'] as const
}

export function usePostActionPutMetricStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutMetricStream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutMetricStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutMetricStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutMetricStream']['$post']> },
      ) => parseResponse(client['#Action=PutMetricStream'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetAlarmStateKey(
  args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetAlarmState', '/#Action=SetAlarmState', keyArgs] as const
}

export function useGetActionSetAlarmState<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetAlarmStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetAlarmState'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetAlarmState<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetAlarmStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetAlarmState'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetAlarmStateKey() {
  return ['#Action=SetAlarmState', '/#Action=SetAlarmState', 'POST'] as const
}

export function usePostActionSetAlarmState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetAlarmState']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetAlarmState']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetAlarmStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SetAlarmState']['$post']> },
      ) => parseResponse(client['#Action=SetAlarmState'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStartMetricStreamsKey(
  args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartMetricStreams', '/#Action=StartMetricStreams', keyArgs] as const
}

export function useGetActionStartMetricStreams<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionStartMetricStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartMetricStreams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStartMetricStreams<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionStartMetricStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartMetricStreams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStartMetricStreamsKey() {
  return ['#Action=StartMetricStreams', '/#Action=StartMetricStreams', 'POST'] as const
}

export function usePostActionStartMetricStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartMetricStreams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StartMetricStreams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStartMetricStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$post']> },
      ) => parseResponse(client['#Action=StartMetricStreams'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStopMetricStreamsKey(
  args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StopMetricStreams', '/#Action=StopMetricStreams', keyArgs] as const
}

export function useGetActionStopMetricStreams<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionStopMetricStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StopMetricStreams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStopMetricStreams<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionStopMetricStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StopMetricStreams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStopMetricStreamsKey() {
  return ['#Action=StopMetricStreams', '/#Action=StopMetricStreams', 'POST'] as const
}

export function usePostActionStopMetricStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StopMetricStreams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StopMetricStreams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStopMetricStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$post']> },
      ) => parseResponse(client['#Action=StopMetricStreams'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagResourceKey(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagResource', '/#Action=TagResource', keyArgs] as const
}

export function useGetActionTagResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagResourceKey() {
  return ['#Action=TagResource', '/#Action=TagResource', 'POST'] as const
}

export function usePostActionTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TagResource']['$post']> },
      ) => parseResponse(client['#Action=TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagResourceKey(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagResource', '/#Action=UntagResource', keyArgs] as const
}

export function useGetActionUntagResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagResourceKey() {
  return ['#Action=UntagResource', '/#Action=UntagResource', 'POST'] as const
}

export function usePostActionUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UntagResource']['$post']> },
      ) => parseResponse(client['#Action=UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
