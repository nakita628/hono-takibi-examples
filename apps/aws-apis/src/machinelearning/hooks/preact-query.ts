import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonML_20141212AddTagsKey() {
  return ['#X-Amz-Target=AmazonML_20141212.AddTags'] as const
}

export function getXAmzTargetAmazonML_20141212CreateBatchPredictionKey() {
  return ['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction'] as const
}

export function getXAmzTargetAmazonML_20141212CreateDataSourceFromRDSKey() {
  return ['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS'] as const
}

export function getXAmzTargetAmazonML_20141212CreateDataSourceFromRedshiftKey() {
  return ['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift'] as const
}

export function getXAmzTargetAmazonML_20141212CreateDataSourceFromS3Key() {
  return ['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3'] as const
}

export function getXAmzTargetAmazonML_20141212CreateEvaluationKey() {
  return ['#X-Amz-Target=AmazonML_20141212.CreateEvaluation'] as const
}

export function getXAmzTargetAmazonML_20141212CreateMLModelKey() {
  return ['#X-Amz-Target=AmazonML_20141212.CreateMLModel'] as const
}

export function getXAmzTargetAmazonML_20141212CreateRealtimeEndpointKey() {
  return ['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint'] as const
}

export function getXAmzTargetAmazonML_20141212DeleteBatchPredictionKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction'] as const
}

export function getXAmzTargetAmazonML_20141212DeleteDataSourceKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DeleteDataSource'] as const
}

export function getXAmzTargetAmazonML_20141212DeleteEvaluationKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation'] as const
}

export function getXAmzTargetAmazonML_20141212DeleteMLModelKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DeleteMLModel'] as const
}

export function getXAmzTargetAmazonML_20141212DeleteRealtimeEndpointKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint'] as const
}

export function getXAmzTargetAmazonML_20141212DeleteTagsKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DeleteTags'] as const
}

export function getXAmzTargetAmazonML_20141212DescribeBatchPredictionsKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions'] as const
}

export function getXAmzTargetAmazonML_20141212DescribeDataSourcesKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DescribeDataSources'] as const
}

export function getXAmzTargetAmazonML_20141212DescribeEvaluationsKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations'] as const
}

export function getXAmzTargetAmazonML_20141212DescribeMLModelsKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DescribeMLModels'] as const
}

export function getXAmzTargetAmazonML_20141212DescribeTagsKey() {
  return ['#X-Amz-Target=AmazonML_20141212.DescribeTags'] as const
}

export function getXAmzTargetAmazonML_20141212GetBatchPredictionKey() {
  return ['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction'] as const
}

export function getXAmzTargetAmazonML_20141212GetDataSourceKey() {
  return ['#X-Amz-Target=AmazonML_20141212.GetDataSource'] as const
}

export function getXAmzTargetAmazonML_20141212GetEvaluationKey() {
  return ['#X-Amz-Target=AmazonML_20141212.GetEvaluation'] as const
}

export function getXAmzTargetAmazonML_20141212GetMLModelKey() {
  return ['#X-Amz-Target=AmazonML_20141212.GetMLModel'] as const
}

export function getXAmzTargetAmazonML_20141212PredictKey() {
  return ['#X-Amz-Target=AmazonML_20141212.Predict'] as const
}

export function getXAmzTargetAmazonML_20141212UpdateBatchPredictionKey() {
  return ['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction'] as const
}

export function getXAmzTargetAmazonML_20141212UpdateDataSourceKey() {
  return ['#X-Amz-Target=AmazonML_20141212.UpdateDataSource'] as const
}

export function getXAmzTargetAmazonML_20141212UpdateEvaluationKey() {
  return ['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation'] as const
}

export function getXAmzTargetAmazonML_20141212UpdateMLModelKey() {
  return ['#X-Amz-Target=AmazonML_20141212.UpdateMLModel'] as const
}

export function getPostXAmzTargetAmazonML20141212AddTagsMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.AddTags',
    '/#X-Amz-Target=AmazonML_20141212.AddTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212AddTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.AddTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.AddTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212AddTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.AddTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonML_20141212.AddTags'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonML20141212AddTags<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.AddTags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.AddTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212AddTagsMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212CreateBatchPredictionMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction',
    '/#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212CreateBatchPredictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212CreateBatchPredictionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212CreateBatchPrediction<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212CreateBatchPredictionMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212CreateDataSourceFromRDSMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS',
    '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212CreateDataSourceFromRDSMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212CreateDataSourceFromRDSMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212CreateDataSourceFromRDS<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212CreateDataSourceFromRDSMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212CreateDataSourceFromRedshiftMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift',
    '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212CreateDataSourceFromRedshiftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212CreateDataSourceFromRedshiftMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212CreateDataSourceFromRedshift<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift']['$post']
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
    getPostXAmzTargetAmazonML20141212CreateDataSourceFromRedshiftMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212CreateDataSourceFromS3MutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3',
    '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212CreateDataSourceFromS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212CreateDataSourceFromS3MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212CreateDataSourceFromS3<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212CreateDataSourceFromS3MutationOptions<
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

export function getPostXAmzTargetAmazonML20141212CreateEvaluationMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateEvaluation',
    '/#X-Amz-Target=AmazonML_20141212.CreateEvaluation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212CreateEvaluationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.CreateEvaluation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.CreateEvaluation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212CreateEvaluationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateEvaluation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.CreateEvaluation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212CreateEvaluation<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateEvaluation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateEvaluation']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212CreateEvaluationMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212CreateMLModelMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateMLModel',
    '/#X-Amz-Target=AmazonML_20141212.CreateMLModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212CreateMLModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.CreateMLModel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.CreateMLModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212CreateMLModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateMLModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.CreateMLModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212CreateMLModel<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateMLModel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.CreateMLModel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212CreateMLModelMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212CreateRealtimeEndpointMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint',
    '/#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212CreateRealtimeEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212CreateRealtimeEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212CreateRealtimeEndpoint<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212CreateRealtimeEndpointMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DeleteBatchPredictionMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction',
    '/#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DeleteBatchPredictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DeleteBatchPredictionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DeleteBatchPrediction<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DeleteBatchPredictionMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DeleteDataSourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteDataSource',
    '/#X-Amz-Target=AmazonML_20141212.DeleteDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DeleteDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteDataSource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteDataSource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DeleteDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DeleteDataSource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DeleteDataSource<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteDataSource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteDataSource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DeleteDataSourceMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DeleteEvaluationMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteEvaluation',
    '/#X-Amz-Target=AmazonML_20141212.DeleteEvaluation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DeleteEvaluationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DeleteEvaluationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DeleteEvaluation<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DeleteEvaluationMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DeleteMLModelMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteMLModel',
    '/#X-Amz-Target=AmazonML_20141212.DeleteMLModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DeleteMLModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteMLModel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteMLModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DeleteMLModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteMLModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DeleteMLModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DeleteMLModel<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteMLModel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteMLModel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DeleteMLModelMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DeleteRealtimeEndpointMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint',
    '/#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DeleteRealtimeEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DeleteRealtimeEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DeleteRealtimeEndpoint<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DeleteRealtimeEndpointMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DeleteTagsMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteTags',
    '/#X-Amz-Target=AmazonML_20141212.DeleteTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DeleteTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteTags']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DeleteTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DeleteTags'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DeleteTags<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteTags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DeleteTagsMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DescribeBatchPredictionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions',
    '/#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DescribeBatchPredictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DescribeBatchPredictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DescribeBatchPredictions<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DescribeBatchPredictionsMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DescribeDataSourcesMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeDataSources',
    '/#X-Amz-Target=AmazonML_20141212.DescribeDataSources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DescribeDataSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeDataSources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeDataSources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DescribeDataSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeDataSources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DescribeDataSources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DescribeDataSources<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeDataSources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeDataSources']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DescribeDataSourcesMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DescribeEvaluationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeEvaluations',
    '/#X-Amz-Target=AmazonML_20141212.DescribeEvaluations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DescribeEvaluationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DescribeEvaluationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DescribeEvaluations<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DescribeEvaluationsMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DescribeMLModelsMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeMLModels',
    '/#X-Amz-Target=AmazonML_20141212.DescribeMLModels',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DescribeMLModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeMLModels']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeMLModels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DescribeMLModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeMLModels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DescribeMLModels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DescribeMLModels<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeMLModels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeMLModels']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DescribeMLModelsMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212DescribeTagsMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeTags',
    '/#X-Amz-Target=AmazonML_20141212.DescribeTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212DescribeTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeTags']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212DescribeTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.DescribeTags'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212DescribeTags<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeTags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212DescribeTagsMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212GetBatchPredictionMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.GetBatchPrediction',
    '/#X-Amz-Target=AmazonML_20141212.GetBatchPrediction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212GetBatchPredictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212GetBatchPredictionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212GetBatchPrediction<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212GetBatchPredictionMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212GetDataSourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.GetDataSource',
    '/#X-Amz-Target=AmazonML_20141212.GetDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212GetDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetDataSource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetDataSource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212GetDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.GetDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.GetDataSource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212GetDataSource<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.GetDataSource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetDataSource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212GetDataSourceMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212GetEvaluationMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.GetEvaluation',
    '/#X-Amz-Target=AmazonML_20141212.GetEvaluation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212GetEvaluationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetEvaluation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetEvaluation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212GetEvaluationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.GetEvaluation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.GetEvaluation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212GetEvaluation<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.GetEvaluation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetEvaluation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212GetEvaluationMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212GetMLModelMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.GetMLModel',
    '/#X-Amz-Target=AmazonML_20141212.GetMLModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212GetMLModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetMLModel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetMLModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212GetMLModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.GetMLModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.GetMLModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212GetMLModel<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetMLModel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetMLModel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212GetMLModelMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212PredictMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.Predict',
    '/#X-Amz-Target=AmazonML_20141212.Predict',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212PredictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.Predict']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.Predict']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212PredictMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.Predict']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonML_20141212.Predict'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonML20141212Predict<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.Predict']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.Predict']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212PredictMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212UpdateBatchPredictionMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction',
    '/#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212UpdateBatchPredictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212UpdateBatchPredictionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212UpdateBatchPrediction<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212UpdateBatchPredictionMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212UpdateDataSourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.UpdateDataSource',
    '/#X-Amz-Target=AmazonML_20141212.UpdateDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212UpdateDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateDataSource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateDataSource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212UpdateDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.UpdateDataSource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212UpdateDataSource<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateDataSource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateDataSource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212UpdateDataSourceMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212UpdateEvaluationMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.UpdateEvaluation',
    '/#X-Amz-Target=AmazonML_20141212.UpdateEvaluation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212UpdateEvaluationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212UpdateEvaluationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212UpdateEvaluation<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonML20141212UpdateEvaluationMutationOptions<
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

export function getPostXAmzTargetAmazonML20141212UpdateMLModelMutationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.UpdateMLModel',
    '/#X-Amz-Target=AmazonML_20141212.UpdateMLModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonML20141212UpdateMLModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateMLModel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateMLModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonML20141212UpdateMLModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateMLModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonML_20141212.UpdateMLModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonML20141212UpdateMLModel<
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
                  (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateMLModel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateMLModel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonML20141212UpdateMLModelMutationOptions<
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
