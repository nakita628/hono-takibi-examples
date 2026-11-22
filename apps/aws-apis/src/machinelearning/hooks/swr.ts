import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAmazonML20141212AddTagsKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.AddTags',
    '/#X-Amz-Target=AmazonML_20141212.AddTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212AddTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.AddTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.AddTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212AddTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.AddTags']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonML_20141212.AddTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212CreateBatchPredictionKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction',
    '/#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212CreateBatchPrediction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212CreateBatchPredictionKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212CreateDataSourceFromRDSKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS',
    '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212CreateDataSourceFromRDS<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212CreateDataSourceFromRDSKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212CreateDataSourceFromRedshiftKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift',
    '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212CreateDataSourceFromRedshift<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212CreateDataSourceFromRedshiftKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212CreateDataSourceFromS3Key() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3',
    '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212CreateDataSourceFromS3<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212CreateDataSourceFromS3Key()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212CreateEvaluationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateEvaluation',
    '/#X-Amz-Target=AmazonML_20141212.CreateEvaluation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212CreateEvaluation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.CreateEvaluation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212CreateEvaluationKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateEvaluation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.CreateEvaluation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212CreateMLModelKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateMLModel',
    '/#X-Amz-Target=AmazonML_20141212.CreateMLModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212CreateMLModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.CreateMLModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212CreateMLModelKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateMLModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.CreateMLModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212CreateRealtimeEndpointKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint',
    '/#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212CreateRealtimeEndpoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212CreateRealtimeEndpointKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DeleteBatchPredictionKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction',
    '/#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DeleteBatchPrediction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DeleteBatchPredictionKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DeleteDataSourceKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteDataSource',
    '/#X-Amz-Target=AmazonML_20141212.DeleteDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DeleteDataSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteDataSource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DeleteDataSourceKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DeleteDataSource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DeleteEvaluationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteEvaluation',
    '/#X-Amz-Target=AmazonML_20141212.DeleteEvaluation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DeleteEvaluation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DeleteEvaluationKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DeleteMLModelKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteMLModel',
    '/#X-Amz-Target=AmazonML_20141212.DeleteMLModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DeleteMLModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteMLModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DeleteMLModelKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteMLModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DeleteMLModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DeleteRealtimeEndpointKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint',
    '/#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DeleteRealtimeEndpoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DeleteRealtimeEndpointKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DeleteTagsKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DeleteTags',
    '/#X-Amz-Target=AmazonML_20141212.DeleteTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DeleteTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DeleteTagsKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DeleteTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DescribeBatchPredictionsKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions',
    '/#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DescribeBatchPredictions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DescribeBatchPredictionsKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DescribeDataSourcesKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeDataSources',
    '/#X-Amz-Target=AmazonML_20141212.DescribeDataSources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DescribeDataSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeDataSources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DescribeDataSourcesKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeDataSources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DescribeDataSources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DescribeEvaluationsKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeEvaluations',
    '/#X-Amz-Target=AmazonML_20141212.DescribeEvaluations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DescribeEvaluations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DescribeEvaluationsKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DescribeMLModelsKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeMLModels',
    '/#X-Amz-Target=AmazonML_20141212.DescribeMLModels',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DescribeMLModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeMLModels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DescribeMLModelsKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeMLModels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DescribeMLModels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212DescribeTagsKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.DescribeTags',
    '/#X-Amz-Target=AmazonML_20141212.DescribeTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212DescribeTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212DescribeTagsKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.DescribeTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212GetBatchPredictionKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.GetBatchPrediction',
    '/#X-Amz-Target=AmazonML_20141212.GetBatchPrediction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212GetBatchPrediction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212GetBatchPredictionKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212GetDataSourceKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.GetDataSource',
    '/#X-Amz-Target=AmazonML_20141212.GetDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212GetDataSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetDataSource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212GetDataSourceKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.GetDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.GetDataSource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212GetEvaluationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.GetEvaluation',
    '/#X-Amz-Target=AmazonML_20141212.GetEvaluation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212GetEvaluation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetEvaluation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212GetEvaluationKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.GetEvaluation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.GetEvaluation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212GetMLModelKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.GetMLModel',
    '/#X-Amz-Target=AmazonML_20141212.GetMLModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212GetMLModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetMLModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212GetMLModelKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.GetMLModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.GetMLModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212PredictKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.Predict',
    '/#X-Amz-Target=AmazonML_20141212.Predict',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212Predict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonML_20141212.Predict']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.Predict']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212PredictKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.Predict']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonML_20141212.Predict'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212UpdateBatchPredictionKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction',
    '/#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212UpdateBatchPrediction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212UpdateBatchPredictionKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212UpdateDataSourceKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.UpdateDataSource',
    '/#X-Amz-Target=AmazonML_20141212.UpdateDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212UpdateDataSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateDataSource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212UpdateDataSourceKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.UpdateDataSource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212UpdateEvaluationKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.UpdateEvaluation',
    '/#X-Amz-Target=AmazonML_20141212.UpdateEvaluation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212UpdateEvaluation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212UpdateEvaluationKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonML20141212UpdateMLModelKey() {
  return [
    '#X-Amz-Target=AmazonML_20141212.UpdateMLModel',
    '/#X-Amz-Target=AmazonML_20141212.UpdateMLModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonML20141212UpdateMLModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateMLModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonML20141212UpdateMLModelKey()
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
            (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateMLModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonML_20141212.UpdateMLModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
