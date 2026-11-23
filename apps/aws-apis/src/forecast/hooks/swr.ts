import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAmazonForecastCreateAutoPredictorKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateAutoPredictor',
    '/#X-Amz-Target=AmazonForecast.CreateAutoPredictor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateAutoPredictor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateAutoPredictor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateAutoPredictorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateAutoPredictor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateAutoPredictor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateDatasetKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateDataset',
    '/#X-Amz-Target=AmazonForecast.CreateDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateDatasetGroupKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateDatasetGroup',
    '/#X-Amz-Target=AmazonForecast.CreateDatasetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateDatasetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateDatasetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateDatasetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateDatasetImportJobKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateDatasetImportJob',
    '/#X-Amz-Target=AmazonForecast.CreateDatasetImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateDatasetImportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateDatasetImportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateExplainabilityKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateExplainability',
    '/#X-Amz-Target=AmazonForecast.CreateExplainability',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateExplainability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainability']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateExplainabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainability']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateExplainability'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateExplainabilityExportKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateExplainabilityExport',
    '/#X-Amz-Target=AmazonForecast.CreateExplainabilityExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateExplainabilityExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateExplainabilityExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateForecastKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateForecast',
    '/#X-Amz-Target=AmazonForecast.CreateForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateForecast']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateForecast'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateForecastExportJobKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateForecastExportJob',
    '/#X-Amz-Target=AmazonForecast.CreateForecastExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateForecastExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecastExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateForecastExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecastExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateForecastExportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateMonitorKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateMonitor',
    '/#X-Amz-Target=AmazonForecast.CreateMonitor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateMonitor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateMonitor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateMonitor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreatePredictorKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreatePredictor',
    '/#X-Amz-Target=AmazonForecast.CreatePredictor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreatePredictor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreatePredictorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreatePredictor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreatePredictorBacktestExportJobKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob',
    '/#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreatePredictorBacktestExportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreatePredictorBacktestExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateWhatIfAnalysisKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis',
    '/#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateWhatIfAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateWhatIfAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateWhatIfForecastKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateWhatIfForecast',
    '/#X-Amz-Target=AmazonForecast.CreateWhatIfForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateWhatIfForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateWhatIfForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastCreateWhatIfForecastExportKey() {
  return [
    '#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport',
    '/#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastCreateWhatIfForecastExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastCreateWhatIfForecastExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteDatasetKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteDataset',
    '/#X-Amz-Target=AmazonForecast.DeleteDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteDatasetGroupKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteDatasetGroup',
    '/#X-Amz-Target=AmazonForecast.DeleteDatasetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteDatasetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteDatasetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteDatasetImportJobKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob',
    '/#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteDatasetImportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteDatasetImportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteExplainabilityKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteExplainability',
    '/#X-Amz-Target=AmazonForecast.DeleteExplainability',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteExplainability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainability']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteExplainabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainability']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteExplainability'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteExplainabilityExportKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport',
    '/#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteExplainabilityExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteExplainabilityExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteForecastKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteForecast',
    '/#X-Amz-Target=AmazonForecast.DeleteForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecast']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteForecast'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteForecastExportJobKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteForecastExportJob',
    '/#X-Amz-Target=AmazonForecast.DeleteForecastExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteForecastExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteForecastExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteMonitorKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteMonitor',
    '/#X-Amz-Target=AmazonForecast.DeleteMonitor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteMonitor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteMonitor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteMonitor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeletePredictorKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeletePredictor',
    '/#X-Amz-Target=AmazonForecast.DeletePredictor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeletePredictor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeletePredictorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeletePredictor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeletePredictorBacktestExportJobKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob',
    '/#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeletePredictorBacktestExportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeletePredictorBacktestExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteResourceTreeKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteResourceTree',
    '/#X-Amz-Target=AmazonForecast.DeleteResourceTree',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteResourceTree<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteResourceTree']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteResourceTreeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteResourceTree']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteResourceTree'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteWhatIfAnalysisKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis',
    '/#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteWhatIfAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteWhatIfAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteWhatIfForecastKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast',
    '/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteWhatIfForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteWhatIfForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDeleteWhatIfForecastExportKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport',
    '/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDeleteWhatIfForecastExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDeleteWhatIfForecastExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeAutoPredictorKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeAutoPredictor',
    '/#X-Amz-Target=AmazonForecast.DescribeAutoPredictor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeAutoPredictor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeAutoPredictorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeDatasetKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeDataset',
    '/#X-Amz-Target=AmazonForecast.DescribeDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeDatasetGroupKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeDatasetGroup',
    '/#X-Amz-Target=AmazonForecast.DescribeDatasetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeDatasetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeDatasetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeDatasetImportJobKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob',
    '/#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeDatasetImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeDatasetImportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeExplainabilityKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeExplainability',
    '/#X-Amz-Target=AmazonForecast.DescribeExplainability',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeExplainability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainability']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeExplainabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainability']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeExplainability'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeExplainabilityExportKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport',
    '/#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeExplainabilityExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeExplainabilityExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeForecastKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeForecast',
    '/#X-Amz-Target=AmazonForecast.DescribeForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecast']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeForecast'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeForecastExportJobKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeForecastExportJob',
    '/#X-Amz-Target=AmazonForecast.DescribeForecastExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeForecastExportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeForecastExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeMonitorKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeMonitor',
    '/#X-Amz-Target=AmazonForecast.DescribeMonitor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeMonitor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeMonitor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeMonitor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribePredictorKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribePredictor',
    '/#X-Amz-Target=AmazonForecast.DescribePredictor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribePredictor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribePredictorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribePredictor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribePredictorBacktestExportJobKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob',
    '/#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribePredictorBacktestExportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribePredictorBacktestExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeWhatIfAnalysisKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis',
    '/#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeWhatIfAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeWhatIfAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeWhatIfForecastKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast',
    '/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeWhatIfForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeWhatIfForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastDescribeWhatIfForecastExportKey() {
  return [
    '#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport',
    '/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastDescribeWhatIfForecastExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastDescribeWhatIfForecastExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastGetAccuracyMetricsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.GetAccuracyMetrics',
    '/#X-Amz-Target=AmazonForecast.GetAccuracyMetrics',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastGetAccuracyMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastGetAccuracyMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListDatasetGroupsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListDatasetGroups',
    '/#X-Amz-Target=AmazonForecast.ListDatasetGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListDatasetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListDatasetGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListDatasetGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListDatasetImportJobsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListDatasetImportJobs',
    '/#X-Amz-Target=AmazonForecast.ListDatasetImportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListDatasetImportJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListDatasetImportJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListDatasetsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListDatasets',
    '/#X-Amz-Target=AmazonForecast.ListDatasets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListDatasets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListExplainabilitiesKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListExplainabilities',
    '/#X-Amz-Target=AmazonForecast.ListExplainabilities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListExplainabilities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListExplainabilitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListExplainabilities'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListExplainabilityExportsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListExplainabilityExports',
    '/#X-Amz-Target=AmazonForecast.ListExplainabilityExports',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListExplainabilityExports<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilityExports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListExplainabilityExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilityExports']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListExplainabilityExports'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListForecastExportJobsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListForecastExportJobs',
    '/#X-Amz-Target=AmazonForecast.ListForecastExportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListForecastExportJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListForecastExportJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListForecastExportJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListForecastExportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListForecastExportJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListForecastsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListForecasts',
    '/#X-Amz-Target=AmazonForecast.ListForecasts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListForecasts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListForecasts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListForecastsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListForecasts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListForecasts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListMonitorEvaluationsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListMonitorEvaluations',
    '/#X-Amz-Target=AmazonForecast.ListMonitorEvaluations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListMonitorEvaluations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListMonitorEvaluationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListMonitorsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListMonitors',
    '/#X-Amz-Target=AmazonForecast.ListMonitors',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListMonitors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.ListMonitors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListMonitors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListMonitorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListMonitors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListMonitors'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListPredictorBacktestExportJobsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs',
    '/#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListPredictorBacktestExportJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListPredictorBacktestExportJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListPredictorsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListPredictors',
    '/#X-Amz-Target=AmazonForecast.ListPredictors',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListPredictors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListPredictors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListPredictorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListPredictors'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListTagsForResource',
    '/#X-Amz-Target=AmazonForecast.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListWhatIfAnalysesKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses',
    '/#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListWhatIfAnalyses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListWhatIfAnalysesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListWhatIfForecastExportsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports',
    '/#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListWhatIfForecastExports<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListWhatIfForecastExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastListWhatIfForecastsKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ListWhatIfForecasts',
    '/#X-Amz-Target=AmazonForecast.ListWhatIfForecasts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastListWhatIfForecasts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastListWhatIfForecastsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastResumeResourceKey() {
  return [
    '#X-Amz-Target=AmazonForecast.ResumeResource',
    '/#X-Amz-Target=AmazonForecast.ResumeResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastResumeResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ResumeResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastResumeResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.ResumeResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.ResumeResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastStopResourceKey() {
  return [
    '#X-Amz-Target=AmazonForecast.StopResource',
    '/#X-Amz-Target=AmazonForecast.StopResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastStopResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.StopResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.StopResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastStopResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.StopResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.StopResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastTagResourceKey() {
  return [
    '#X-Amz-Target=AmazonForecast.TagResource',
    '/#X-Amz-Target=AmazonForecast.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonForecast.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonForecast.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastUntagResourceKey() {
  return [
    '#X-Amz-Target=AmazonForecast.UntagResource',
    '/#X-Amz-Target=AmazonForecast.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastUpdateDatasetGroupKey() {
  return [
    '#X-Amz-Target=AmazonForecast.UpdateDatasetGroup',
    '/#X-Amz-Target=AmazonForecast.UpdateDatasetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastUpdateDatasetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastUpdateDatasetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
