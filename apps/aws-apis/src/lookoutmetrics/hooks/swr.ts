import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActivateAnomalyDetectorKey() {
  return ['ActivateAnomalyDetector'] as const
}

export function getBackTestAnomalyDetectorKey() {
  return ['BackTestAnomalyDetector'] as const
}

export function getCreateAlertKey() {
  return ['CreateAlert'] as const
}

export function getCreateAnomalyDetectorKey() {
  return ['CreateAnomalyDetector'] as const
}

export function getCreateMetricSetKey() {
  return ['CreateMetricSet'] as const
}

export function getDeactivateAnomalyDetectorKey() {
  return ['DeactivateAnomalyDetector'] as const
}

export function getDeleteAlertKey() {
  return ['DeleteAlert'] as const
}

export function getDeleteAnomalyDetectorKey() {
  return ['DeleteAnomalyDetector'] as const
}

export function getDescribeAlertKey() {
  return ['DescribeAlert'] as const
}

export function getDescribeAnomalyDetectionExecutionsKey() {
  return ['DescribeAnomalyDetectionExecutions'] as const
}

export function getDescribeAnomalyDetectorKey() {
  return ['DescribeAnomalyDetector'] as const
}

export function getDescribeMetricSetKey() {
  return ['DescribeMetricSet'] as const
}

export function getDetectMetricSetConfigKey() {
  return ['DetectMetricSetConfig'] as const
}

export function getGetAnomalyGroupKey() {
  return ['GetAnomalyGroup'] as const
}

export function getGetDataQualityMetricsKey() {
  return ['GetDataQualityMetrics'] as const
}

export function getGetFeedbackKey() {
  return ['GetFeedback'] as const
}

export function getGetSampleDataKey() {
  return ['GetSampleData'] as const
}

export function getListAlertsKey() {
  return ['ListAlerts'] as const
}

export function getListAnomalyDetectorsKey() {
  return ['ListAnomalyDetectors'] as const
}

export function getListAnomalyGroupRelatedMetricsKey() {
  return ['ListAnomalyGroupRelatedMetrics'] as const
}

export function getListAnomalyGroupSummariesKey() {
  return ['ListAnomalyGroupSummaries'] as const
}

export function getListAnomalyGroupTimeSeriesKey() {
  return ['ListAnomalyGroupTimeSeries'] as const
}

export function getListMetricSetsKey() {
  return ['ListMetricSets'] as const
}

export function getPutFeedbackKey() {
  return ['PutFeedback'] as const
}

export function getUpdateAlertKey() {
  return ['UpdateAlert'] as const
}

export function getUpdateAnomalyDetectorKey() {
  return ['UpdateAnomalyDetector'] as const
}

export function getUpdateMetricSetKey() {
  return ['UpdateMetricSet'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPostActivateAnomalyDetectorKey() {
  return ['ActivateAnomalyDetector', '/ActivateAnomalyDetector', 'POST'] as const
}

export function usePostActivateAnomalyDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ActivateAnomalyDetector.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ActivateAnomalyDetector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActivateAnomalyDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ActivateAnomalyDetector.$post> },
      ) => parseResponse(client.ActivateAnomalyDetector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackTestAnomalyDetectorKey() {
  return ['BackTestAnomalyDetector', '/BackTestAnomalyDetector', 'POST'] as const
}

export function usePostBackTestAnomalyDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.BackTestAnomalyDetector.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.BackTestAnomalyDetector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackTestAnomalyDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.BackTestAnomalyDetector.$post> },
      ) => parseResponse(client.BackTestAnomalyDetector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateAlertKey() {
  return ['CreateAlert', '/CreateAlert', 'POST'] as const
}

export function usePostCreateAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateAlert.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.CreateAlert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateAlertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateAlert.$post> }) =>
        parseResponse(client.CreateAlert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateAnomalyDetectorKey() {
  return ['CreateAnomalyDetector', '/CreateAnomalyDetector', 'POST'] as const
}

export function usePostCreateAnomalyDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CreateAnomalyDetector.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateAnomalyDetector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateAnomalyDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CreateAnomalyDetector.$post> },
      ) => parseResponse(client.CreateAnomalyDetector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateMetricSetKey() {
  return ['CreateMetricSet', '/CreateMetricSet', 'POST'] as const
}

export function usePostCreateMetricSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateMetricSet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateMetricSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateMetricSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateMetricSet.$post> }) =>
        parseResponse(client.CreateMetricSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeactivateAnomalyDetectorKey() {
  return ['DeactivateAnomalyDetector', '/DeactivateAnomalyDetector', 'POST'] as const
}

export function usePostDeactivateAnomalyDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeactivateAnomalyDetector.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeactivateAnomalyDetector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeactivateAnomalyDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DeactivateAnomalyDetector.$post> },
      ) => parseResponse(client.DeactivateAnomalyDetector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteAlertKey() {
  return ['DeleteAlert', '/DeleteAlert', 'POST'] as const
}

export function usePostDeleteAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteAlert.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.DeleteAlert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteAlertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteAlert.$post> }) =>
        parseResponse(client.DeleteAlert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteAnomalyDetectorKey() {
  return ['DeleteAnomalyDetector', '/DeleteAnomalyDetector', 'POST'] as const
}

export function usePostDeleteAnomalyDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteAnomalyDetector.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeleteAnomalyDetector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteAnomalyDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DeleteAnomalyDetector.$post> },
      ) => parseResponse(client.DeleteAnomalyDetector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeAlertKey() {
  return ['DescribeAlert', '/DescribeAlert', 'POST'] as const
}

export function usePostDescribeAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeAlert.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeAlert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeAlertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DescribeAlert.$post> }) =>
        parseResponse(client.DescribeAlert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeAnomalyDetectionExecutionsKey() {
  return [
    'DescribeAnomalyDetectionExecutions',
    '/DescribeAnomalyDetectionExecutions',
    'POST',
  ] as const
}

export function usePostDescribeAnomalyDetectionExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.DescribeAnomalyDetectionExecutions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeAnomalyDetectionExecutions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeAnomalyDetectionExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DescribeAnomalyDetectionExecutions.$post> },
      ) => parseResponse(client.DescribeAnomalyDetectionExecutions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeAnomalyDetectorKey() {
  return ['DescribeAnomalyDetector', '/DescribeAnomalyDetector', 'POST'] as const
}

export function usePostDescribeAnomalyDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeAnomalyDetector.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeAnomalyDetector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeAnomalyDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DescribeAnomalyDetector.$post> },
      ) => parseResponse(client.DescribeAnomalyDetector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeMetricSetKey() {
  return ['DescribeMetricSet', '/DescribeMetricSet', 'POST'] as const
}

export function usePostDescribeMetricSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeMetricSet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeMetricSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeMetricSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DescribeMetricSet.$post> }) =>
        parseResponse(client.DescribeMetricSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectMetricSetConfigKey() {
  return ['DetectMetricSetConfig', '/DetectMetricSetConfig', 'POST'] as const
}

export function usePostDetectMetricSetConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DetectMetricSetConfig.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DetectMetricSetConfig.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectMetricSetConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DetectMetricSetConfig.$post> },
      ) => parseResponse(client.DetectMetricSetConfig.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetAnomalyGroupKey() {
  return ['GetAnomalyGroup', '/GetAnomalyGroup', 'POST'] as const
}

export function usePostGetAnomalyGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetAnomalyGroup.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetAnomalyGroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetAnomalyGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetAnomalyGroup.$post> }) =>
        parseResponse(client.GetAnomalyGroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetDataQualityMetricsKey() {
  return ['GetDataQualityMetrics', '/GetDataQualityMetrics', 'POST'] as const
}

export function usePostGetDataQualityMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetDataQualityMetrics.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetDataQualityMetrics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetDataQualityMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.GetDataQualityMetrics.$post> },
      ) => parseResponse(client.GetDataQualityMetrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetFeedbackKey() {
  return ['GetFeedback', '/GetFeedback', 'POST'] as const
}

export function usePostGetFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetFeedback.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.GetFeedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetFeedback.$post> }) =>
        parseResponse(client.GetFeedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetSampleDataKey() {
  return ['GetSampleData', '/GetSampleData', 'POST'] as const
}

export function usePostGetSampleData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetSampleData.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetSampleData.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSampleDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetSampleData.$post> }) =>
        parseResponse(client.GetSampleData.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListAlertsKey() {
  return ['ListAlerts', '/ListAlerts', 'POST'] as const
}

export function usePostListAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListAlerts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ListAlerts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListAlerts.$post> }) =>
        parseResponse(client.ListAlerts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListAnomalyDetectorsKey() {
  return ['ListAnomalyDetectors', '/ListAnomalyDetectors', 'POST'] as const
}

export function usePostListAnomalyDetectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListAnomalyDetectors.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListAnomalyDetectors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListAnomalyDetectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListAnomalyDetectors.$post> },
      ) => parseResponse(client.ListAnomalyDetectors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListAnomalyGroupRelatedMetricsKey() {
  return ['ListAnomalyGroupRelatedMetrics', '/ListAnomalyGroupRelatedMetrics', 'POST'] as const
}

export function usePostListAnomalyGroupRelatedMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ListAnomalyGroupRelatedMetrics.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListAnomalyGroupRelatedMetrics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListAnomalyGroupRelatedMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListAnomalyGroupRelatedMetrics.$post> },
      ) => parseResponse(client.ListAnomalyGroupRelatedMetrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListAnomalyGroupSummariesKey() {
  return ['ListAnomalyGroupSummaries', '/ListAnomalyGroupSummaries', 'POST'] as const
}

export function usePostListAnomalyGroupSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListAnomalyGroupSummaries.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListAnomalyGroupSummaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListAnomalyGroupSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListAnomalyGroupSummaries.$post> },
      ) => parseResponse(client.ListAnomalyGroupSummaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListAnomalyGroupTimeSeriesKey() {
  return ['ListAnomalyGroupTimeSeries', '/ListAnomalyGroupTimeSeries', 'POST'] as const
}

export function usePostListAnomalyGroupTimeSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListAnomalyGroupTimeSeries.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListAnomalyGroupTimeSeries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListAnomalyGroupTimeSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListAnomalyGroupTimeSeries.$post> },
      ) => parseResponse(client.ListAnomalyGroupTimeSeries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListMetricSetsKey() {
  return ['ListMetricSets', '/ListMetricSets', 'POST'] as const
}

export function usePostListMetricSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListMetricSets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListMetricSets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListMetricSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListMetricSets.$post> }) =>
        parseResponse(client.ListMetricSets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutFeedbackKey() {
  return ['PutFeedback', '/PutFeedback', 'POST'] as const
}

export function usePostPutFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutFeedback.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.PutFeedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutFeedback.$post> }) =>
        parseResponse(client.PutFeedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateAlertKey() {
  return ['UpdateAlert', '/UpdateAlert', 'POST'] as const
}

export function usePostUpdateAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateAlert.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.UpdateAlert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateAlertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateAlert.$post> }) =>
        parseResponse(client.UpdateAlert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateAnomalyDetectorKey() {
  return ['UpdateAnomalyDetector', '/UpdateAnomalyDetector', 'POST'] as const
}

export function usePostUpdateAnomalyDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UpdateAnomalyDetector.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateAnomalyDetector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateAnomalyDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UpdateAnomalyDetector.$post> },
      ) => parseResponse(client.UpdateAnomalyDetector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateMetricSetKey() {
  return ['UpdateMetricSet', '/UpdateMetricSet', 'POST'] as const
}

export function usePostUpdateMetricSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateMetricSet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateMetricSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateMetricSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateMetricSet.$post> }) =>
        parseResponse(client.UpdateMetricSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
