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

export function getPostActivateAnomalyDetectorMutationKey() {
  return ['ActivateAnomalyDetector', '/ActivateAnomalyDetector', 'POST'] as const
}

export function getPostActivateAnomalyDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ActivateAnomalyDetector.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ActivateAnomalyDetector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActivateAnomalyDetectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ActivateAnomalyDetector.$post>) {
      return parseResponse(client.ActivateAnomalyDetector.$post(args, options))
    },
  })
}

export function usePostActivateAnomalyDetector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ActivateAnomalyDetector.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ActivateAnomalyDetector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActivateAnomalyDetectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostBackTestAnomalyDetectorMutationKey() {
  return ['BackTestAnomalyDetector', '/BackTestAnomalyDetector', 'POST'] as const
}

export function getPostBackTestAnomalyDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.BackTestAnomalyDetector.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.BackTestAnomalyDetector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBackTestAnomalyDetectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BackTestAnomalyDetector.$post>) {
      return parseResponse(client.BackTestAnomalyDetector.$post(args, options))
    },
  })
}

export function usePostBackTestAnomalyDetector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.BackTestAnomalyDetector.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.BackTestAnomalyDetector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBackTestAnomalyDetectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateAlertMutationKey() {
  return ['CreateAlert', '/CreateAlert', 'POST'] as const
}

export function getPostCreateAlertMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateAlert.$post>>>>>,
    TError,
    InferRequestType<typeof client.CreateAlert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateAlertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateAlert.$post>) {
      return parseResponse(client.CreateAlert.$post(args, options))
    },
  })
}

export function usePostCreateAlert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateAlert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CreateAlert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateAlertMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreateAnomalyDetectorMutationKey() {
  return ['CreateAnomalyDetector', '/CreateAnomalyDetector', 'POST'] as const
}

export function getPostCreateAnomalyDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CreateAnomalyDetector.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CreateAnomalyDetector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateAnomalyDetectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateAnomalyDetector.$post>) {
      return parseResponse(client.CreateAnomalyDetector.$post(args, options))
    },
  })
}

export function usePostCreateAnomalyDetector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CreateAnomalyDetector.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CreateAnomalyDetector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateAnomalyDetectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateMetricSetMutationKey() {
  return ['CreateMetricSet', '/CreateMetricSet', 'POST'] as const
}

export function getPostCreateMetricSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateMetricSet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CreateMetricSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateMetricSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateMetricSet.$post>) {
      return parseResponse(client.CreateMetricSet.$post(args, options))
    },
  })
}

export function usePostCreateMetricSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateMetricSet.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CreateMetricSet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateMetricSetMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeactivateAnomalyDetectorMutationKey() {
  return ['DeactivateAnomalyDetector', '/DeactivateAnomalyDetector', 'POST'] as const
}

export function getPostDeactivateAnomalyDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeactivateAnomalyDetector.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DeactivateAnomalyDetector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeactivateAnomalyDetectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeactivateAnomalyDetector.$post>) {
      return parseResponse(client.DeactivateAnomalyDetector.$post(args, options))
    },
  })
}

export function usePostDeactivateAnomalyDetector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DeactivateAnomalyDetector.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DeactivateAnomalyDetector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeactivateAnomalyDetectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteAlertMutationKey() {
  return ['DeleteAlert', '/DeleteAlert', 'POST'] as const
}

export function getPostDeleteAlertMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteAlert.$post>>>>>,
    TError,
    InferRequestType<typeof client.DeleteAlert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteAlertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteAlert.$post>) {
      return parseResponse(client.DeleteAlert.$post(args, options))
    },
  })
}

export function usePostDeleteAlert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteAlert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.DeleteAlert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteAlertMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteAnomalyDetectorMutationKey() {
  return ['DeleteAnomalyDetector', '/DeleteAnomalyDetector', 'POST'] as const
}

export function getPostDeleteAnomalyDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteAnomalyDetector.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DeleteAnomalyDetector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteAnomalyDetectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteAnomalyDetector.$post>) {
      return parseResponse(client.DeleteAnomalyDetector.$post(args, options))
    },
  })
}

export function usePostDeleteAnomalyDetector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DeleteAnomalyDetector.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DeleteAnomalyDetector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteAnomalyDetectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeAlertMutationKey() {
  return ['DescribeAlert', '/DescribeAlert', 'POST'] as const
}

export function getPostDescribeAlertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeAlert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DescribeAlert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeAlertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeAlert.$post>) {
      return parseResponse(client.DescribeAlert.$post(args, options))
    },
  })
}

export function usePostDescribeAlert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeAlert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.DescribeAlert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeAlertMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeAnomalyDetectionExecutionsMutationKey() {
  return [
    'DescribeAnomalyDetectionExecutions',
    '/DescribeAnomalyDetectionExecutions',
    'POST',
  ] as const
}

export function getPostDescribeAnomalyDetectionExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.DescribeAnomalyDetectionExecutions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.DescribeAnomalyDetectionExecutions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeAnomalyDetectionExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.DescribeAnomalyDetectionExecutions.$post>,
    ) {
      return parseResponse(client.DescribeAnomalyDetectionExecutions.$post(args, options))
    },
  })
}

export function usePostDescribeAnomalyDetectionExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.DescribeAnomalyDetectionExecutions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.DescribeAnomalyDetectionExecutions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeAnomalyDetectionExecutionsMutationOptions<
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

export function getPostDescribeAnomalyDetectorMutationKey() {
  return ['DescribeAnomalyDetector', '/DescribeAnomalyDetector', 'POST'] as const
}

export function getPostDescribeAnomalyDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeAnomalyDetector.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DescribeAnomalyDetector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeAnomalyDetectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeAnomalyDetector.$post>) {
      return parseResponse(client.DescribeAnomalyDetector.$post(args, options))
    },
  })
}

export function usePostDescribeAnomalyDetector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DescribeAnomalyDetector.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DescribeAnomalyDetector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeAnomalyDetectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeMetricSetMutationKey() {
  return ['DescribeMetricSet', '/DescribeMetricSet', 'POST'] as const
}

export function getPostDescribeMetricSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeMetricSet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DescribeMetricSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeMetricSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeMetricSet.$post>) {
      return parseResponse(client.DescribeMetricSet.$post(args, options))
    },
  })
}

export function usePostDescribeMetricSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DescribeMetricSet.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DescribeMetricSet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeMetricSetMutationOptions<TError, TOnMutateResult>(
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

export function getPostDetectMetricSetConfigMutationKey() {
  return ['DetectMetricSetConfig', '/DetectMetricSetConfig', 'POST'] as const
}

export function getPostDetectMetricSetConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DetectMetricSetConfig.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DetectMetricSetConfig.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectMetricSetConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DetectMetricSetConfig.$post>) {
      return parseResponse(client.DetectMetricSetConfig.$post(args, options))
    },
  })
}

export function usePostDetectMetricSetConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DetectMetricSetConfig.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DetectMetricSetConfig.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDetectMetricSetConfigMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetAnomalyGroupMutationKey() {
  return ['GetAnomalyGroup', '/GetAnomalyGroup', 'POST'] as const
}

export function getPostGetAnomalyGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetAnomalyGroup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetAnomalyGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetAnomalyGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetAnomalyGroup.$post>) {
      return parseResponse(client.GetAnomalyGroup.$post(args, options))
    },
  })
}

export function usePostGetAnomalyGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetAnomalyGroup.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetAnomalyGroup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetAnomalyGroupMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetDataQualityMetricsMutationKey() {
  return ['GetDataQualityMetrics', '/GetDataQualityMetrics', 'POST'] as const
}

export function getPostGetDataQualityMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetDataQualityMetrics.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.GetDataQualityMetrics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetDataQualityMetricsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetDataQualityMetrics.$post>) {
      return parseResponse(client.GetDataQualityMetrics.$post(args, options))
    },
  })
}

export function usePostGetDataQualityMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetDataQualityMetrics.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetDataQualityMetrics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetDataQualityMetricsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetFeedbackMutationKey() {
  return ['GetFeedback', '/GetFeedback', 'POST'] as const
}

export function getPostGetFeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetFeedback.$post>>>>>,
    TError,
    InferRequestType<typeof client.GetFeedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetFeedback.$post>) {
      return parseResponse(client.GetFeedback.$post(args, options))
    },
  })
}

export function usePostGetFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetFeedback.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetFeedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetSampleDataMutationKey() {
  return ['GetSampleData', '/GetSampleData', 'POST'] as const
}

export function getPostGetSampleDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetSampleData.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetSampleData.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSampleDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetSampleData.$post>) {
      return parseResponse(client.GetSampleData.$post(args, options))
    },
  })
}

export function usePostGetSampleData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetSampleData.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetSampleData.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetSampleDataMutationOptions<TError, TOnMutateResult>(
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

export function getPostListAlertsMutationKey() {
  return ['ListAlerts', '/ListAlerts', 'POST'] as const
}

export function getPostListAlertsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListAlerts.$post>>>>>,
    TError,
    InferRequestType<typeof client.ListAlerts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListAlertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListAlerts.$post>) {
      return parseResponse(client.ListAlerts.$post(args, options))
    },
  })
}

export function usePostListAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListAlerts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListAlerts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListAlertsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListAnomalyDetectorsMutationKey() {
  return ['ListAnomalyDetectors', '/ListAnomalyDetectors', 'POST'] as const
}

export function getPostListAnomalyDetectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListAnomalyDetectors.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListAnomalyDetectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListAnomalyDetectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListAnomalyDetectors.$post>) {
      return parseResponse(client.ListAnomalyDetectors.$post(args, options))
    },
  })
}

export function usePostListAnomalyDetectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListAnomalyDetectors.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListAnomalyDetectors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListAnomalyDetectorsMutationOptions<TError, TOnMutateResult>(
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

export function getPostListAnomalyGroupRelatedMetricsMutationKey() {
  return ['ListAnomalyGroupRelatedMetrics', '/ListAnomalyGroupRelatedMetrics', 'POST'] as const
}

export function getPostListAnomalyGroupRelatedMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ListAnomalyGroupRelatedMetrics.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ListAnomalyGroupRelatedMetrics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListAnomalyGroupRelatedMetricsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListAnomalyGroupRelatedMetrics.$post>) {
      return parseResponse(client.ListAnomalyGroupRelatedMetrics.$post(args, options))
    },
  })
}

export function usePostListAnomalyGroupRelatedMetrics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ListAnomalyGroupRelatedMetrics.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ListAnomalyGroupRelatedMetrics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListAnomalyGroupRelatedMetricsMutationOptions<
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

export function getPostListAnomalyGroupSummariesMutationKey() {
  return ['ListAnomalyGroupSummaries', '/ListAnomalyGroupSummaries', 'POST'] as const
}

export function getPostListAnomalyGroupSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListAnomalyGroupSummaries.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListAnomalyGroupSummaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListAnomalyGroupSummariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListAnomalyGroupSummaries.$post>) {
      return parseResponse(client.ListAnomalyGroupSummaries.$post(args, options))
    },
  })
}

export function usePostListAnomalyGroupSummaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListAnomalyGroupSummaries.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListAnomalyGroupSummaries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListAnomalyGroupSummariesMutationOptions<TError, TOnMutateResult>(
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

export function getPostListAnomalyGroupTimeSeriesMutationKey() {
  return ['ListAnomalyGroupTimeSeries', '/ListAnomalyGroupTimeSeries', 'POST'] as const
}

export function getPostListAnomalyGroupTimeSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListAnomalyGroupTimeSeries.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListAnomalyGroupTimeSeries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListAnomalyGroupTimeSeriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListAnomalyGroupTimeSeries.$post>) {
      return parseResponse(client.ListAnomalyGroupTimeSeries.$post(args, options))
    },
  })
}

export function usePostListAnomalyGroupTimeSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ListAnomalyGroupTimeSeries.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ListAnomalyGroupTimeSeries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListAnomalyGroupTimeSeriesMutationOptions<
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

export function getPostListMetricSetsMutationKey() {
  return ['ListMetricSets', '/ListMetricSets', 'POST'] as const
}

export function getPostListMetricSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListMetricSets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListMetricSets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListMetricSetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListMetricSets.$post>) {
      return parseResponse(client.ListMetricSets.$post(args, options))
    },
  })
}

export function usePostListMetricSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListMetricSets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListMetricSets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListMetricSetsMutationOptions<TError, TOnMutateResult>(
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

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostPutFeedbackMutationKey() {
  return ['PutFeedback', '/PutFeedback', 'POST'] as const
}

export function getPostPutFeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutFeedback.$post>>>>>,
    TError,
    InferRequestType<typeof client.PutFeedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPutFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutFeedback.$post>) {
      return parseResponse(client.PutFeedback.$post(args, options))
    },
  })
}

export function usePostPutFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutFeedback.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.PutFeedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPutFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateAlertMutationKey() {
  return ['UpdateAlert', '/UpdateAlert', 'POST'] as const
}

export function getPostUpdateAlertMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateAlert.$post>>>>>,
    TError,
    InferRequestType<typeof client.UpdateAlert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateAlertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateAlert.$post>) {
      return parseResponse(client.UpdateAlert.$post(args, options))
    },
  })
}

export function usePostUpdateAlert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateAlert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.UpdateAlert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateAlertMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateAnomalyDetectorMutationKey() {
  return ['UpdateAnomalyDetector', '/UpdateAnomalyDetector', 'POST'] as const
}

export function getPostUpdateAnomalyDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UpdateAnomalyDetector.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateAnomalyDetector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateAnomalyDetectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateAnomalyDetector.$post>) {
      return parseResponse(client.UpdateAnomalyDetector.$post(args, options))
    },
  })
}

export function usePostUpdateAnomalyDetector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.UpdateAnomalyDetector.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateAnomalyDetector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateAnomalyDetectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateMetricSetMutationKey() {
  return ['UpdateMetricSet', '/UpdateMetricSet', 'POST'] as const
}

export function getPostUpdateMetricSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateMetricSet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UpdateMetricSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateMetricSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateMetricSet.$post>) {
      return parseResponse(client.UpdateMetricSet.$post(args, options))
    },
  })
}

export function usePostUpdateMetricSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateMetricSet.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.UpdateMetricSet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateMetricSetMutationOptions<TError, TOnMutateResult>(
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
