import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getV2ApiusageQueryKey() {
  return ['v2', '/v2/apiusage'] as const
}

export function getV2ApiusageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ApiusageQueryKey>
  >({
    queryKey: getV2ApiusageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apiusage.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Apiusage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApiusageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ApiusageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Apiusage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApiusageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ApiusageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LanguageDatasetsQueryKey(
  args: InferRequestType<typeof client.v2.language.datasets.$get>,
) {
  return ['v2', '/v2/language/datasets', args] as const
}

export function getV2LanguageDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.language.datasets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDatasetsQueryKey>
  >({
    queryKey: getV2LanguageDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.language.datasets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2LanguageDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.language.datasets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LanguageDatasetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LanguageDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.language.datasets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LanguageDatasetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2LanguageDatasetsUploadMutationKey() {
  return ['v2', '/v2/language/datasets/upload', 'POST'] as const
}

export function getPostV2LanguageDatasetsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.upload.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.language.datasets.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LanguageDatasetsUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.language.datasets.upload.$post>) {
      return parseResponse(client.v2.language.datasets.upload.$post(args, options))
    },
  })
}

export function usePostV2LanguageDatasetsUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.language.datasets.upload.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.language.datasets.upload.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LanguageDatasetsUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LanguageDatasetsUploadSyncMutationKey() {
  return ['v2', '/v2/language/datasets/upload/sync', 'POST'] as const
}

export function getPostV2LanguageDatasetsUploadSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.language.datasets.upload.sync.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.language.datasets.upload.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LanguageDatasetsUploadSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.language.datasets.upload.sync.$post>) {
      return parseResponse(client.v2.language.datasets.upload.sync.$post(args, options))
    },
  })
}

export function usePostV2LanguageDatasetsUploadSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.language.datasets.upload.sync.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.language.datasets.upload.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LanguageDatasetsUploadSyncMutationOptions<
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

export function getV2LanguageDatasetsDatasetIdQueryKey(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>,
) {
  return ['v2', '/v2/language/datasets/:datasetId', args] as const
}

export function getV2LanguageDatasetsDatasetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDatasetsDatasetIdQueryKey>
  >({
    queryKey: getV2LanguageDatasetsDatasetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.language.datasets[':datasetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LanguageDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDatasetsDatasetIdQueryKey>
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
      ...getV2LanguageDatasetsDatasetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LanguageDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDatasetsDatasetIdQueryKey>
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
      ...getV2LanguageDatasetsDatasetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2LanguageDatasetsDatasetIdMutationKey() {
  return ['v2', '/v2/language/datasets/:datasetId', 'DELETE'] as const
}

export function getDeleteV2LanguageDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LanguageDatasetsDatasetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$delete']>,
    ) {
      return parseResponse(client.v2.language.datasets[':datasetId'].$delete(args, options))
    },
  })
}

export function useDeleteV2LanguageDatasetsDatasetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2LanguageDatasetsDatasetIdMutationOptions<
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

export function getV2LanguageDatasetsDatasetIdExamplesQueryKey(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>,
) {
  return ['v2', '/v2/language/datasets/:datasetId/examples', args] as const
}

export function getV2LanguageDatasetsDatasetIdExamplesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDatasetsDatasetIdExamplesQueryKey>
  >({
    queryKey: getV2LanguageDatasetsDatasetIdExamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.language.datasets[':datasetId'].examples.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LanguageDatasetsDatasetIdExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDatasetsDatasetIdExamplesQueryKey>
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
      ...getV2LanguageDatasetsDatasetIdExamplesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LanguageDatasetsDatasetIdExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDatasetsDatasetIdExamplesQueryKey>
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
      ...getV2LanguageDatasetsDatasetIdExamplesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2LanguageDatasetsDatasetIdModelsQueryKey(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>,
) {
  return ['v2', '/v2/language/datasets/:datasetId/models', args] as const
}

export function getV2LanguageDatasetsDatasetIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDatasetsDatasetIdModelsQueryKey>
  >({
    queryKey: getV2LanguageDatasetsDatasetIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.language.datasets[':datasetId'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LanguageDatasetsDatasetIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDatasetsDatasetIdModelsQueryKey>
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
      ...getV2LanguageDatasetsDatasetIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LanguageDatasetsDatasetIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDatasetsDatasetIdModelsQueryKey>
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
      ...getV2LanguageDatasetsDatasetIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2LanguageDatasetsDatasetIdUploadMutationKey() {
  return ['v2', '/v2/language/datasets/:datasetId/upload', 'PUT'] as const
}

export function getPutV2LanguageDatasetsDatasetIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['upload']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['upload']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2LanguageDatasetsDatasetIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['upload']['$put']>,
    ) {
      return parseResponse(client.v2.language.datasets[':datasetId'].upload.$put(args, options))
    },
  })
}

export function usePutV2LanguageDatasetsDatasetIdUpload<
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
                ReturnType<(typeof client.v2.language.datasets)[':datasetId']['upload']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['upload']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2LanguageDatasetsDatasetIdUploadMutationOptions<
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

export function getV2LanguageDeletionIdQueryKey(
  args: InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>,
) {
  return ['v2', '/v2/language/deletion/:id', args] as const
}

export function getV2LanguageDeletionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDeletionIdQueryKey>
  >({
    queryKey: getV2LanguageDeletionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.language.deletion[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LanguageDeletionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDeletionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LanguageDeletionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LanguageDeletionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageDeletionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LanguageDeletionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LanguageExamplesQueryKey(
  args: InferRequestType<typeof client.v2.language.examples.$get>,
) {
  return ['v2', '/v2/language/examples', args] as const
}

export function getV2LanguageExamplesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.language.examples.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageExamplesQueryKey>
  >({
    queryKey: getV2LanguageExamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.language.examples.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2LanguageExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.language.examples.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageExamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LanguageExamplesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LanguageExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.language.examples.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageExamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LanguageExamplesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2LanguageFeedbackMutationKey() {
  return ['v2', '/v2/language/feedback', 'POST'] as const
}

export function getPostV2LanguageFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.feedback.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.language.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LanguageFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.language.feedback.$post>) {
      return parseResponse(client.v2.language.feedback.$post(args, options))
    },
  })
}

export function usePostV2LanguageFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.feedback.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.language.feedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LanguageFeedbackMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LanguageIntentMutationKey() {
  return ['v2', '/v2/language/intent', 'POST'] as const
}

export function getPostV2LanguageIntentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.intent.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.language.intent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LanguageIntentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.language.intent.$post>) {
      return parseResponse(client.v2.language.intent.$post(args, options))
    },
  })
}

export function usePostV2LanguageIntent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.intent.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.language.intent.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LanguageIntentMutationOptions<TError, TOnMutateResult>(
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

export function getV2LanguageModelsModelIdQueryKey(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>,
) {
  return ['v2', '/v2/language/models/:modelId', args] as const
}

export function getV2LanguageModelsModelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageModelsModelIdQueryKey>
  >({
    queryKey: getV2LanguageModelsModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.language.models[':modelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LanguageModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageModelsModelIdQueryKey>
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
      ...getV2LanguageModelsModelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LanguageModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageModelsModelIdQueryKey>
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
      ...getV2LanguageModelsModelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2LanguageModelsModelIdMutationKey() {
  return ['v2', '/v2/language/models/:modelId', 'DELETE'] as const
}

export function getDeleteV2LanguageModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.language.models)[':modelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LanguageModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$delete']>,
    ) {
      return parseResponse(client.v2.language.models[':modelId'].$delete(args, options))
    },
  })
}

export function useDeleteV2LanguageModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.language.models)[':modelId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2LanguageModelsModelIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2LanguageModelsModelIdLcQueryKey(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>,
) {
  return ['v2', '/v2/language/models/:modelId/lc', args] as const
}

export function getV2LanguageModelsModelIdLcQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageModelsModelIdLcQueryKey>
  >({
    queryKey: getV2LanguageModelsModelIdLcQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.language.models[':modelId'].lc.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LanguageModelsModelIdLc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageModelsModelIdLcQueryKey>
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
      ...getV2LanguageModelsModelIdLcQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LanguageModelsModelIdLc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageModelsModelIdLcQueryKey>
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
      ...getV2LanguageModelsModelIdLcQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2LanguageRetrainMutationKey() {
  return ['v2', '/v2/language/retrain', 'POST'] as const
}

export function getPostV2LanguageRetrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.retrain.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.language.retrain.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LanguageRetrainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.language.retrain.$post>) {
      return parseResponse(client.v2.language.retrain.$post(args, options))
    },
  })
}

export function usePostV2LanguageRetrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.retrain.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.language.retrain.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LanguageRetrainMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LanguageSentimentMutationKey() {
  return ['v2', '/v2/language/sentiment', 'POST'] as const
}

export function getPostV2LanguageSentimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.sentiment.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.language.sentiment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LanguageSentimentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.language.sentiment.$post>) {
      return parseResponse(client.v2.language.sentiment.$post(args, options))
    },
  })
}

export function usePostV2LanguageSentiment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.sentiment.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.language.sentiment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LanguageSentimentMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LanguageTrainMutationKey() {
  return ['v2', '/v2/language/train', 'POST'] as const
}

export function getPostV2LanguageTrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.train.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.language.train.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LanguageTrainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.language.train.$post>) {
      return parseResponse(client.v2.language.train.$post(args, options))
    },
  })
}

export function usePostV2LanguageTrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.train.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.language.train.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LanguageTrainMutationOptions<TError, TOnMutateResult>(
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

export function getV2LanguageTrainModelIdQueryKey(
  args: InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>,
) {
  return ['v2', '/v2/language/train/:modelId', args] as const
}

export function getV2LanguageTrainModelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageTrainModelIdQueryKey>
  >({
    queryKey: getV2LanguageTrainModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.language.train[':modelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LanguageTrainModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageTrainModelIdQueryKey>
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
      ...getV2LanguageTrainModelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LanguageTrainModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LanguageTrainModelIdQueryKey>
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
      ...getV2LanguageTrainModelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2Oauth2TokenMutationKey() {
  return ['v2', '/v2/oauth2/token', 'POST'] as const
}

export function getPostV2Oauth2TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth2.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.oauth2.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2Oauth2TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.oauth2.token.$post>) {
      return parseResponse(client.v2.oauth2.token.$post(args, options))
    },
  })
}

export function usePostV2Oauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth2.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.oauth2.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2Oauth2TokenMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2Oauth2TokensTokenMutationKey() {
  return ['v2', '/v2/oauth2/tokens/:token', 'DELETE'] as const
}

export function getDeleteV2Oauth2TokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.oauth2.tokens)[':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.oauth2.tokens)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2Oauth2TokensTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.oauth2.tokens)[':token']['$delete']>,
    ) {
      return parseResponse(client.v2.oauth2.tokens[':token'].$delete(args, options))
    },
  })
}

export function useDeleteV2Oauth2TokensToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.oauth2.tokens)[':token']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.oauth2.tokens)[':token']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2Oauth2TokensTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPutV2VisionBulkfeedbackMutationKey() {
  return ['v2', '/v2/vision/bulkfeedback', 'PUT'] as const
}

export function getPutV2VisionBulkfeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.bulkfeedback.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.vision.bulkfeedback.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2VisionBulkfeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.bulkfeedback.$put>) {
      return parseResponse(client.v2.vision.bulkfeedback.$put(args, options))
    },
  })
}

export function usePutV2VisionBulkfeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.bulkfeedback.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.vision.bulkfeedback.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2VisionBulkfeedbackMutationOptions<TError, TOnMutateResult>(
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

export function getV2VisionDatasetsQueryKey(
  args: InferRequestType<typeof client.v2.vision.datasets.$get>,
) {
  return ['v2', '/v2/vision/datasets', args] as const
}

export function getV2VisionDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.vision.datasets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDatasetsQueryKey>
  >({
    queryKey: getV2VisionDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vision.datasets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2VisionDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.vision.datasets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2VisionDatasetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2VisionDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.vision.datasets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2VisionDatasetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2VisionDatasetsMutationKey() {
  return ['v2', '/v2/vision/datasets', 'POST'] as const
}

export function getPostV2VisionDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.vision.datasets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionDatasetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.datasets.$post>) {
      return parseResponse(client.v2.vision.datasets.$post(args, options))
    },
  })
}

export function usePostV2VisionDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.vision.datasets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionDatasetsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2VisionDatasetsUploadMutationKey() {
  return ['v2', '/v2/vision/datasets/upload', 'POST'] as const
}

export function getPostV2VisionDatasetsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.upload.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.vision.datasets.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionDatasetsUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.datasets.upload.$post>) {
      return parseResponse(client.v2.vision.datasets.upload.$post(args, options))
    },
  })
}

export function usePostV2VisionDatasetsUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.upload.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.vision.datasets.upload.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionDatasetsUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2VisionDatasetsUploadSyncMutationKey() {
  return ['v2', '/v2/vision/datasets/upload/sync', 'POST'] as const
}

export function getPostV2VisionDatasetsUploadSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.vision.datasets.upload.sync.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.vision.datasets.upload.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionDatasetsUploadSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.datasets.upload.sync.$post>) {
      return parseResponse(client.v2.vision.datasets.upload.sync.$post(args, options))
    },
  })
}

export function usePostV2VisionDatasetsUploadSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.vision.datasets.upload.sync.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.vision.datasets.upload.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionDatasetsUploadSyncMutationOptions<
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

export function getV2VisionDatasetsDatasetIdQueryKey(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>,
) {
  return ['v2', '/v2/vision/datasets/:datasetId', args] as const
}

export function getV2VisionDatasetsDatasetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDatasetsDatasetIdQueryKey>
  >({
    queryKey: getV2VisionDatasetsDatasetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vision.datasets[':datasetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2VisionDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDatasetsDatasetIdQueryKey>
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
      ...getV2VisionDatasetsDatasetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2VisionDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDatasetsDatasetIdQueryKey>
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
      ...getV2VisionDatasetsDatasetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2VisionDatasetsDatasetIdMutationKey() {
  return ['v2', '/v2/vision/datasets/:datasetId', 'DELETE'] as const
}

export function getDeleteV2VisionDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VisionDatasetsDatasetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$delete']>,
    ) {
      return parseResponse(client.v2.vision.datasets[':datasetId'].$delete(args, options))
    },
  })
}

export function useDeleteV2VisionDatasetsDatasetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2VisionDatasetsDatasetIdMutationOptions<
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

export function getV2VisionDatasetsDatasetIdExamplesQueryKey(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>,
) {
  return ['v2', '/v2/vision/datasets/:datasetId/examples', args] as const
}

export function getV2VisionDatasetsDatasetIdExamplesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDatasetsDatasetIdExamplesQueryKey>
  >({
    queryKey: getV2VisionDatasetsDatasetIdExamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vision.datasets[':datasetId'].examples.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2VisionDatasetsDatasetIdExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDatasetsDatasetIdExamplesQueryKey>
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
      ...getV2VisionDatasetsDatasetIdExamplesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2VisionDatasetsDatasetIdExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDatasetsDatasetIdExamplesQueryKey>
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
      ...getV2VisionDatasetsDatasetIdExamplesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2VisionDatasetsDatasetIdExamplesMutationKey() {
  return ['v2', '/v2/vision/datasets/:datasetId/examples', 'POST'] as const
}

export function getPostV2VisionDatasetsDatasetIdExamplesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionDatasetsDatasetIdExamplesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$post']>,
    ) {
      return parseResponse(client.v2.vision.datasets[':datasetId'].examples.$post(args, options))
    },
  })
}

export function usePostV2VisionDatasetsDatasetIdExamples<
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
                ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionDatasetsDatasetIdExamplesMutationOptions<
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

export function getV2VisionDatasetsDatasetIdModelsQueryKey(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>,
) {
  return ['v2', '/v2/vision/datasets/:datasetId/models', args] as const
}

export function getV2VisionDatasetsDatasetIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDatasetsDatasetIdModelsQueryKey>
  >({
    queryKey: getV2VisionDatasetsDatasetIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vision.datasets[':datasetId'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2VisionDatasetsDatasetIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDatasetsDatasetIdModelsQueryKey>
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
      ...getV2VisionDatasetsDatasetIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2VisionDatasetsDatasetIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDatasetsDatasetIdModelsQueryKey>
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
      ...getV2VisionDatasetsDatasetIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2VisionDatasetsDatasetIdUploadMutationKey() {
  return ['v2', '/v2/vision/datasets/:datasetId/upload', 'PUT'] as const
}

export function getPutV2VisionDatasetsDatasetIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['upload']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['upload']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2VisionDatasetsDatasetIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['upload']['$put']>,
    ) {
      return parseResponse(client.v2.vision.datasets[':datasetId'].upload.$put(args, options))
    },
  })
}

export function usePutV2VisionDatasetsDatasetIdUpload<
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
                ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['upload']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['upload']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2VisionDatasetsDatasetIdUploadMutationOptions<
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

export function getV2VisionDeletionIdQueryKey(
  args: InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>,
) {
  return ['v2', '/v2/vision/deletion/:id', args] as const
}

export function getV2VisionDeletionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDeletionIdQueryKey>
  >({
    queryKey: getV2VisionDeletionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vision.deletion[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2VisionDeletionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDeletionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2VisionDeletionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2VisionDeletionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionDeletionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2VisionDeletionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2VisionDetectMutationKey() {
  return ['v2', '/v2/vision/detect', 'POST'] as const
}

export function getPostV2VisionDetectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.detect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.vision.detect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionDetectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.detect.$post>) {
      return parseResponse(client.v2.vision.detect.$post(args, options))
    },
  })
}

export function usePostV2VisionDetect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.detect.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.vision.detect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionDetectMutationOptions<TError, TOnMutateResult>(
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

export function getV2VisionExamplesQueryKey(
  args: InferRequestType<typeof client.v2.vision.examples.$get>,
) {
  return ['v2', '/v2/vision/examples', args] as const
}

export function getV2VisionExamplesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.vision.examples.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionExamplesQueryKey>
  >({
    queryKey: getV2VisionExamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vision.examples.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2VisionExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.vision.examples.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionExamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2VisionExamplesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2VisionExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.vision.examples.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionExamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2VisionExamplesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2VisionFeedbackMutationKey() {
  return ['v2', '/v2/vision/feedback', 'POST'] as const
}

export function getPostV2VisionFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.feedback.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.vision.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.feedback.$post>) {
      return parseResponse(client.v2.vision.feedback.$post(args, options))
    },
  })
}

export function usePostV2VisionFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.feedback.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.vision.feedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionFeedbackMutationOptions<TError, TOnMutateResult>(
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

export function getV2VisionModelsModelIdQueryKey(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>,
) {
  return ['v2', '/v2/vision/models/:modelId', args] as const
}

export function getV2VisionModelsModelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionModelsModelIdQueryKey>
  >({
    queryKey: getV2VisionModelsModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vision.models[':modelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2VisionModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionModelsModelIdQueryKey>
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
      ...getV2VisionModelsModelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2VisionModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionModelsModelIdQueryKey>
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
      ...getV2VisionModelsModelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2VisionModelsModelIdMutationKey() {
  return ['v2', '/v2/vision/models/:modelId', 'DELETE'] as const
}

export function getDeleteV2VisionModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vision.models)[':modelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VisionModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$delete']>,
    ) {
      return parseResponse(client.v2.vision.models[':modelId'].$delete(args, options))
    },
  })
}

export function useDeleteV2VisionModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.vision.models)[':modelId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2VisionModelsModelIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2VisionModelsModelIdLcQueryKey(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>,
) {
  return ['v2', '/v2/vision/models/:modelId/lc', args] as const
}

export function getV2VisionModelsModelIdLcQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionModelsModelIdLcQueryKey>
  >({
    queryKey: getV2VisionModelsModelIdLcQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vision.models[':modelId'].lc.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2VisionModelsModelIdLc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionModelsModelIdLcQueryKey>
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
      ...getV2VisionModelsModelIdLcQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2VisionModelsModelIdLc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionModelsModelIdLcQueryKey>
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
      ...getV2VisionModelsModelIdLcQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2VisionOcrMutationKey() {
  return ['v2', '/v2/vision/ocr', 'POST'] as const
}

export function getPostV2VisionOcrMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.ocr.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.vision.ocr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionOcrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.ocr.$post>) {
      return parseResponse(client.v2.vision.ocr.$post(args, options))
    },
  })
}

export function usePostV2VisionOcr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.ocr.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.vision.ocr.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionOcrMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2VisionPredictMutationKey() {
  return ['v2', '/v2/vision/predict', 'POST'] as const
}

export function getPostV2VisionPredictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.predict.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.vision.predict.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionPredictMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.predict.$post>) {
      return parseResponse(client.v2.vision.predict.$post(args, options))
    },
  })
}

export function usePostV2VisionPredict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.predict.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.vision.predict.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionPredictMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2VisionRetrainMutationKey() {
  return ['v2', '/v2/vision/retrain', 'POST'] as const
}

export function getPostV2VisionRetrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.retrain.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.vision.retrain.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionRetrainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.retrain.$post>) {
      return parseResponse(client.v2.vision.retrain.$post(args, options))
    },
  })
}

export function usePostV2VisionRetrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.retrain.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.vision.retrain.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionRetrainMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2VisionTrainMutationKey() {
  return ['v2', '/v2/vision/train', 'POST'] as const
}

export function getPostV2VisionTrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.train.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.vision.train.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VisionTrainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vision.train.$post>) {
      return parseResponse(client.v2.vision.train.$post(args, options))
    },
  })
}

export function usePostV2VisionTrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.train.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.vision.train.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VisionTrainMutationOptions<TError, TOnMutateResult>(
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

export function getV2VisionTrainModelIdQueryKey(
  args: InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>,
) {
  return ['v2', '/v2/vision/train/:modelId', args] as const
}

export function getV2VisionTrainModelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionTrainModelIdQueryKey>
  >({
    queryKey: getV2VisionTrainModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vision.train[':modelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2VisionTrainModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionTrainModelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2VisionTrainModelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2VisionTrainModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VisionTrainModelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2VisionTrainModelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
