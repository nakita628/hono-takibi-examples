import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonForecastCreateAutoPredictorKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateAutoPredictor'] as const
}

export function getXAmzTargetAmazonForecastCreateDatasetKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateDataset'] as const
}

export function getXAmzTargetAmazonForecastCreateDatasetGroupKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateDatasetGroup'] as const
}

export function getXAmzTargetAmazonForecastCreateDatasetImportJobKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob'] as const
}

export function getXAmzTargetAmazonForecastCreateExplainabilityKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateExplainability'] as const
}

export function getXAmzTargetAmazonForecastCreateExplainabilityExportKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport'] as const
}

export function getXAmzTargetAmazonForecastCreateForecastKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateForecast'] as const
}

export function getXAmzTargetAmazonForecastCreateForecastExportJobKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateForecastExportJob'] as const
}

export function getXAmzTargetAmazonForecastCreateMonitorKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateMonitor'] as const
}

export function getXAmzTargetAmazonForecastCreatePredictorKey() {
  return ['#X-Amz-Target=AmazonForecast.CreatePredictor'] as const
}

export function getXAmzTargetAmazonForecastCreatePredictorBacktestExportJobKey() {
  return ['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob'] as const
}

export function getXAmzTargetAmazonForecastCreateWhatIfAnalysisKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis'] as const
}

export function getXAmzTargetAmazonForecastCreateWhatIfForecastKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast'] as const
}

export function getXAmzTargetAmazonForecastCreateWhatIfForecastExportKey() {
  return ['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport'] as const
}

export function getXAmzTargetAmazonForecastDeleteDatasetKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteDataset'] as const
}

export function getXAmzTargetAmazonForecastDeleteDatasetGroupKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup'] as const
}

export function getXAmzTargetAmazonForecastDeleteDatasetImportJobKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob'] as const
}

export function getXAmzTargetAmazonForecastDeleteExplainabilityKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteExplainability'] as const
}

export function getXAmzTargetAmazonForecastDeleteExplainabilityExportKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport'] as const
}

export function getXAmzTargetAmazonForecastDeleteForecastKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteForecast'] as const
}

export function getXAmzTargetAmazonForecastDeleteForecastExportJobKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob'] as const
}

export function getXAmzTargetAmazonForecastDeleteMonitorKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteMonitor'] as const
}

export function getXAmzTargetAmazonForecastDeletePredictorKey() {
  return ['#X-Amz-Target=AmazonForecast.DeletePredictor'] as const
}

export function getXAmzTargetAmazonForecastDeletePredictorBacktestExportJobKey() {
  return ['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob'] as const
}

export function getXAmzTargetAmazonForecastDeleteResourceTreeKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteResourceTree'] as const
}

export function getXAmzTargetAmazonForecastDeleteWhatIfAnalysisKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis'] as const
}

export function getXAmzTargetAmazonForecastDeleteWhatIfForecastKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast'] as const
}

export function getXAmzTargetAmazonForecastDeleteWhatIfForecastExportKey() {
  return ['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport'] as const
}

export function getXAmzTargetAmazonForecastDescribeAutoPredictorKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor'] as const
}

export function getXAmzTargetAmazonForecastDescribeDatasetKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeDataset'] as const
}

export function getXAmzTargetAmazonForecastDescribeDatasetGroupKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup'] as const
}

export function getXAmzTargetAmazonForecastDescribeDatasetImportJobKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob'] as const
}

export function getXAmzTargetAmazonForecastDescribeExplainabilityKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeExplainability'] as const
}

export function getXAmzTargetAmazonForecastDescribeExplainabilityExportKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport'] as const
}

export function getXAmzTargetAmazonForecastDescribeForecastKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeForecast'] as const
}

export function getXAmzTargetAmazonForecastDescribeForecastExportJobKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob'] as const
}

export function getXAmzTargetAmazonForecastDescribeMonitorKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeMonitor'] as const
}

export function getXAmzTargetAmazonForecastDescribePredictorKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribePredictor'] as const
}

export function getXAmzTargetAmazonForecastDescribePredictorBacktestExportJobKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob'] as const
}

export function getXAmzTargetAmazonForecastDescribeWhatIfAnalysisKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis'] as const
}

export function getXAmzTargetAmazonForecastDescribeWhatIfForecastKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast'] as const
}

export function getXAmzTargetAmazonForecastDescribeWhatIfForecastExportKey() {
  return ['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport'] as const
}

export function getXAmzTargetAmazonForecastGetAccuracyMetricsKey() {
  return ['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics'] as const
}

export function getXAmzTargetAmazonForecastListDatasetGroupsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListDatasetGroups'] as const
}

export function getXAmzTargetAmazonForecastListDatasetImportJobsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs'] as const
}

export function getXAmzTargetAmazonForecastListDatasetsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListDatasets'] as const
}

export function getXAmzTargetAmazonForecastListExplainabilitiesKey() {
  return ['#X-Amz-Target=AmazonForecast.ListExplainabilities'] as const
}

export function getXAmzTargetAmazonForecastListExplainabilityExportsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListExplainabilityExports'] as const
}

export function getXAmzTargetAmazonForecastListForecastExportJobsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListForecastExportJobs'] as const
}

export function getXAmzTargetAmazonForecastListForecastsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListForecasts'] as const
}

export function getXAmzTargetAmazonForecastListMonitorEvaluationsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations'] as const
}

export function getXAmzTargetAmazonForecastListMonitorsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListMonitors'] as const
}

export function getXAmzTargetAmazonForecastListPredictorBacktestExportJobsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs'] as const
}

export function getXAmzTargetAmazonForecastListPredictorsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListPredictors'] as const
}

export function getXAmzTargetAmazonForecastListTagsForResourceKey() {
  return ['#X-Amz-Target=AmazonForecast.ListTagsForResource'] as const
}

export function getXAmzTargetAmazonForecastListWhatIfAnalysesKey() {
  return ['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses'] as const
}

export function getXAmzTargetAmazonForecastListWhatIfForecastExportsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports'] as const
}

export function getXAmzTargetAmazonForecastListWhatIfForecastsKey() {
  return ['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts'] as const
}

export function getXAmzTargetAmazonForecastResumeResourceKey() {
  return ['#X-Amz-Target=AmazonForecast.ResumeResource'] as const
}

export function getXAmzTargetAmazonForecastStopResourceKey() {
  return ['#X-Amz-Target=AmazonForecast.StopResource'] as const
}

export function getXAmzTargetAmazonForecastTagResourceKey() {
  return ['#X-Amz-Target=AmazonForecast.TagResource'] as const
}

export function getXAmzTargetAmazonForecastUntagResourceKey() {
  return ['#X-Amz-Target=AmazonForecast.UntagResource'] as const
}

export function getXAmzTargetAmazonForecastUpdateDatasetGroupKey() {
  return ['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup'] as const
}

export function getPostXAmzTargetAmazonForecastCreateAutoPredictorMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateAutoPredictor',
    '/#X-Amz-Target=AmazonForecast.CreateAutoPredictor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateAutoPredictorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateAutoPredictor']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateAutoPredictor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateAutoPredictorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateAutoPredictor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateAutoPredictor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateAutoPredictor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreateAutoPredictor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreateAutoPredictor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateAutoPredictorMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateDatasetMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateDataset',
    '/#X-Amz-Target=AmazonForecast.CreateDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateDataset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateDataset'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateDataset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateDataset']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateDataset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateDatasetMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateDatasetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateDatasetGroup',
    '/#X-Amz-Target=AmazonForecast.CreateDatasetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateDatasetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateDatasetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateDatasetGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateDatasetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateDatasetGroupMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateDatasetImportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateDatasetImportJob',
    '/#X-Amz-Target=AmazonForecast.CreateDatasetImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateDatasetImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateDatasetImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateDatasetImportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateDatasetImportJobMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateExplainabilityMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateExplainability',
    '/#X-Amz-Target=AmazonForecast.CreateExplainability',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateExplainabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainability']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainability']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateExplainabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainability']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateExplainability'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateExplainability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainability']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainability']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateExplainabilityMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateExplainabilityExportMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateExplainabilityExport',
    '/#X-Amz-Target=AmazonForecast.CreateExplainabilityExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateExplainabilityExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateExplainabilityExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateExplainabilityExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateExplainabilityExportMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateForecastMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateForecast',
    '/#X-Amz-Target=AmazonForecast.CreateForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateForecast']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateForecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateForecast'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateForecast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateForecast']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateForecast']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateForecastMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateForecastExportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateForecastExportJob',
    '/#X-Amz-Target=AmazonForecast.CreateForecastExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateForecastExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecastExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecastExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateForecastExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecastExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateForecastExportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateForecastExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecastExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecastExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateForecastExportJobMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateMonitorMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateMonitor',
    '/#X-Amz-Target=AmazonForecast.CreateMonitor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateMonitor']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateMonitor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateMonitorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateMonitor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateMonitor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateMonitor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateMonitor']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateMonitor']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateMonitorMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreatePredictorMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreatePredictor',
    '/#X-Amz-Target=AmazonForecast.CreatePredictor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreatePredictorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictor']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreatePredictorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreatePredictor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreatePredictor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictor']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictor']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreatePredictorMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreatePredictorBacktestExportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob',
    '/#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreatePredictorBacktestExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreatePredictorBacktestExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreatePredictorBacktestExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonForecastCreatePredictorBacktestExportJobMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateWhatIfAnalysisMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis',
    '/#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateWhatIfAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateWhatIfAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateWhatIfAnalysis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateWhatIfAnalysisMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateWhatIfForecastMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateWhatIfForecast',
    '/#X-Amz-Target=AmazonForecast.CreateWhatIfForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateWhatIfForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateWhatIfForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateWhatIfForecast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateWhatIfForecastMutationOptions<
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

export function getPostXAmzTargetAmazonForecastCreateWhatIfForecastExportMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport',
    '/#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastCreateWhatIfForecastExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastCreateWhatIfForecastExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastCreateWhatIfForecastExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastCreateWhatIfForecastExportMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteDatasetMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteDataset',
    '/#X-Amz-Target=AmazonForecast.DeleteDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteDataset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteDataset'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteDataset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteDataset']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteDataset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteDatasetMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteDatasetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteDatasetGroup',
    '/#X-Amz-Target=AmazonForecast.DeleteDatasetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteDatasetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteDatasetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteDatasetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteDatasetGroupMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteDatasetImportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob',
    '/#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteDatasetImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteDatasetImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteDatasetImportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteDatasetImportJobMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteExplainabilityMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteExplainability',
    '/#X-Amz-Target=AmazonForecast.DeleteExplainability',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteExplainabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainability']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainability']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteExplainabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainability']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteExplainability'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteExplainability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainability']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainability']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteExplainabilityMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteExplainabilityExportMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport',
    '/#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteExplainabilityExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteExplainabilityExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteExplainabilityExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteExplainabilityExportMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteForecastMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteForecast',
    '/#X-Amz-Target=AmazonForecast.DeleteForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecast']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteForecast'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteForecast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecast']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecast']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteForecastMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteForecastExportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteForecastExportJob',
    '/#X-Amz-Target=AmazonForecast.DeleteForecastExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteForecastExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteForecastExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteForecastExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteForecastExportJobMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteMonitorMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteMonitor',
    '/#X-Amz-Target=AmazonForecast.DeleteMonitor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteMonitor']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteMonitor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteMonitorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteMonitor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteMonitor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteMonitor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteMonitor']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteMonitor']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteMonitorMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeletePredictorMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeletePredictor',
    '/#X-Amz-Target=AmazonForecast.DeletePredictor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeletePredictorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictor']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeletePredictorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeletePredictor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeletePredictor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictor']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictor']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeletePredictorMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeletePredictorBacktestExportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob',
    '/#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeletePredictorBacktestExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeletePredictorBacktestExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeletePredictorBacktestExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonForecastDeletePredictorBacktestExportJobMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteResourceTreeMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteResourceTree',
    '/#X-Amz-Target=AmazonForecast.DeleteResourceTree',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteResourceTreeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteResourceTree']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteResourceTree']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteResourceTreeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteResourceTree']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteResourceTree'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteResourceTree<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeleteResourceTree']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeleteResourceTree']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteResourceTreeMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteWhatIfAnalysisMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis',
    '/#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteWhatIfAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteWhatIfAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteWhatIfAnalysis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteWhatIfAnalysisMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteWhatIfForecastMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast',
    '/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteWhatIfForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteWhatIfForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteWhatIfForecast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteWhatIfForecastMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDeleteWhatIfForecastExportMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport',
    '/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDeleteWhatIfForecastExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDeleteWhatIfForecastExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDeleteWhatIfForecastExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDeleteWhatIfForecastExportMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeAutoPredictorMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeAutoPredictor',
    '/#X-Amz-Target=AmazonForecast.DescribeAutoPredictor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeAutoPredictorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeAutoPredictorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeAutoPredictor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeAutoPredictorMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeDatasetMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeDataset',
    '/#X-Amz-Target=AmazonForecast.DescribeDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeDataset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeDataset'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeDataset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeDataset']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeDataset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeDatasetMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeDatasetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeDatasetGroup',
    '/#X-Amz-Target=AmazonForecast.DescribeDatasetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeDatasetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeDatasetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeDatasetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeDatasetGroupMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeDatasetImportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob',
    '/#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeDatasetImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeDatasetImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeDatasetImportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeDatasetImportJobMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeExplainabilityMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeExplainability',
    '/#X-Amz-Target=AmazonForecast.DescribeExplainability',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeExplainabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainability']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainability']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeExplainabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainability']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeExplainability'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeExplainability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainability']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainability']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeExplainabilityMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeExplainabilityExportMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport',
    '/#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeExplainabilityExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeExplainabilityExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeExplainabilityExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonForecastDescribeExplainabilityExportMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeForecastMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeForecast',
    '/#X-Amz-Target=AmazonForecast.DescribeForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecast']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeForecast'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeForecast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecast']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecast']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeForecastMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeForecastExportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeForecastExportJob',
    '/#X-Amz-Target=AmazonForecast.DescribeForecastExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeForecastExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeForecastExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeForecastExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeForecastExportJobMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeMonitorMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeMonitor',
    '/#X-Amz-Target=AmazonForecast.DescribeMonitor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeMonitor']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeMonitor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeMonitorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeMonitor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeMonitor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeMonitor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeMonitor']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeMonitor']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeMonitorMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribePredictorMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribePredictor',
    '/#X-Amz-Target=AmazonForecast.DescribePredictor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribePredictorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictor']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribePredictorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribePredictor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribePredictor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribePredictorMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribePredictorBacktestExportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob',
    '/#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribePredictorBacktestExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribePredictorBacktestExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribePredictorBacktestExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonForecastDescribePredictorBacktestExportJobMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeWhatIfAnalysisMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis',
    '/#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeWhatIfAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeWhatIfAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeWhatIfAnalysis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeWhatIfAnalysisMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeWhatIfForecastMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast',
    '/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeWhatIfForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeWhatIfForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeWhatIfForecast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastDescribeWhatIfForecastMutationOptions<
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

export function getPostXAmzTargetAmazonForecastDescribeWhatIfForecastExportMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport',
    '/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastDescribeWhatIfForecastExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastDescribeWhatIfForecastExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastDescribeWhatIfForecastExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonForecastDescribeWhatIfForecastExportMutationOptions<
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

export function getPostXAmzTargetAmazonForecastGetAccuracyMetricsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.GetAccuracyMetrics',
    '/#X-Amz-Target=AmazonForecast.GetAccuracyMetrics',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastGetAccuracyMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastGetAccuracyMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastGetAccuracyMetrics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastGetAccuracyMetricsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListDatasetGroupsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListDatasetGroups',
    '/#X-Amz-Target=AmazonForecast.ListDatasetGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListDatasetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetGroups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListDatasetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListDatasetGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListDatasetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListDatasetGroupsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListDatasetImportJobsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListDatasetImportJobs',
    '/#X-Amz-Target=AmazonForecast.ListDatasetImportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListDatasetImportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListDatasetImportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListDatasetImportJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListDatasetImportJobsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListDatasetsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListDatasets',
    '/#X-Amz-Target=AmazonForecast.ListDatasets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListDatasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasets']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonForecast.ListDatasets'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonForecastListDatasets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListDatasetsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListExplainabilitiesMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListExplainabilities',
    '/#X-Amz-Target=AmazonForecast.ListExplainabilities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListExplainabilitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListExplainabilitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListExplainabilities'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListExplainabilities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListExplainabilitiesMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListExplainabilityExportsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListExplainabilityExports',
    '/#X-Amz-Target=AmazonForecast.ListExplainabilityExports',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListExplainabilityExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilityExports']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilityExports']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListExplainabilityExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilityExports']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListExplainabilityExports'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListExplainabilityExports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilityExports']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilityExports']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListExplainabilityExportsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListForecastExportJobsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListForecastExportJobs',
    '/#X-Amz-Target=AmazonForecast.ListForecastExportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListForecastExportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.ListForecastExportJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListForecastExportJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListForecastExportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListForecastExportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListForecastExportJobs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListForecastExportJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListForecastExportJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListForecastExportJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListForecastExportJobsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListForecastsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListForecasts',
    '/#X-Amz-Target=AmazonForecast.ListForecasts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListForecastsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListForecasts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListForecasts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListForecastsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListForecasts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListForecasts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListForecasts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListForecasts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListForecasts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListForecastsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListMonitorEvaluationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListMonitorEvaluations',
    '/#X-Amz-Target=AmazonForecast.ListMonitorEvaluations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListMonitorEvaluationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListMonitorEvaluationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListMonitorEvaluations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListMonitorEvaluationsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListMonitorsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListMonitors',
    '/#X-Amz-Target=AmazonForecast.ListMonitors',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListMonitorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListMonitors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListMonitors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListMonitorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListMonitors']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonForecast.ListMonitors'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonForecastListMonitors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListMonitors']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListMonitors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListMonitorsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListPredictorBacktestExportJobsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs',
    '/#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListPredictorBacktestExportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListPredictorBacktestExportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListPredictorBacktestExportJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonForecastListPredictorBacktestExportJobsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListPredictorsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListPredictors',
    '/#X-Amz-Target=AmazonForecast.ListPredictors',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListPredictorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListPredictors']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListPredictors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListPredictorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictors']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListPredictors'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListPredictors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListPredictors']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListPredictors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListPredictorsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListTagsForResource',
    '/#X-Amz-Target=AmazonForecast.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListWhatIfAnalysesMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses',
    '/#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListWhatIfAnalysesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListWhatIfAnalysesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListWhatIfAnalyses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListWhatIfAnalysesMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListWhatIfForecastExportsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports',
    '/#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListWhatIfForecastExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListWhatIfForecastExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListWhatIfForecastExports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListWhatIfForecastExportsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastListWhatIfForecastsMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListWhatIfForecasts',
    '/#X-Amz-Target=AmazonForecast.ListWhatIfForecasts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastListWhatIfForecastsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastListWhatIfForecastsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastListWhatIfForecasts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastListWhatIfForecastsMutationOptions<
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

export function getPostXAmzTargetAmazonForecastResumeResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ResumeResource',
    '/#X-Amz-Target=AmazonForecast.ResumeResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastResumeResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ResumeResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ResumeResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastResumeResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.ResumeResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.ResumeResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastResumeResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ResumeResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ResumeResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastResumeResourceMutationOptions<
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

export function getPostXAmzTargetAmazonForecastStopResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.StopResource',
    '/#X-Amz-Target=AmazonForecast.StopResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastStopResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.StopResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.StopResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastStopResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.StopResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonForecast.StopResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonForecastStopResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.StopResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.StopResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastStopResourceMutationOptions<
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

export function getPostXAmzTargetAmazonForecastTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.TagResource',
    '/#X-Amz-Target=AmazonForecast.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonForecast.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonForecastTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastTagResourceMutationOptions<
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

export function getPostXAmzTargetAmazonForecastUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.UntagResource',
    '/#X-Amz-Target=AmazonForecast.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastUntagResourceMutationOptions<
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

export function getPostXAmzTargetAmazonForecastUpdateDatasetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecast.UpdateDatasetGroup',
    '/#X-Amz-Target=AmazonForecast.UpdateDatasetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastUpdateDatasetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastUpdateDatasetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonForecastUpdateDatasetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonForecastUpdateDatasetGroupMutationOptions<
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
