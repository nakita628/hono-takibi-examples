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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2ApiusageQueryKey() {
  return ['v2', '/v2/apiusage'] as const
}

export function getV2ApiusageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2ApiusageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apiusage.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Apiusage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
          >,
          ReturnType<typeof getV2ApiusageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ApiusageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2ApiusageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apiusage.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LanguageDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.language.datasets.$get>>,
) {
  return ['v2', '/v2/language/datasets', toValue(args)] as const
}

export function getV2LanguageDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.language.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LanguageDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.language.datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LanguageDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.language.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>
            >
          >,
          ReturnType<typeof getV2LanguageDatasetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LanguageDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.language.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>
  >,
) {
  return ['v2', '/v2/language/datasets/:datasetId', toValue(args)] as const
}

export function getV2LanguageDatasetsDatasetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LanguageDatasetsDatasetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.language.datasets[':datasetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LanguageDatasetsDatasetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDatasetsDatasetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LanguageDatasetsDatasetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.language.datasets[':datasetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
  >,
) {
  return ['v2', '/v2/language/datasets/:datasetId/examples', toValue(args)] as const
}

export function getV2LanguageDatasetsDatasetIdExamplesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LanguageDatasetsDatasetIdExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.language.datasets[':datasetId'].examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2LanguageDatasetsDatasetIdExamplesQueryKey>
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
            ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDatasetsDatasetIdExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LanguageDatasetsDatasetIdExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.language.datasets[':datasetId'].examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LanguageDatasetsDatasetIdModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
  >,
) {
  return ['v2', '/v2/language/datasets/:datasetId/models', toValue(args)] as const
}

export function getV2LanguageDatasetsDatasetIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LanguageDatasetsDatasetIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.language.datasets[':datasetId'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2LanguageDatasetsDatasetIdModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDatasetsDatasetIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LanguageDatasetsDatasetIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.language.datasets[':datasetId'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>>,
) {
  return ['v2', '/v2/language/deletion/:id', toValue(args)] as const
}

export function getV2LanguageDeletionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LanguageDeletionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.language.deletion[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LanguageDeletionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LanguageDeletionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageDeletionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LanguageDeletionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.language.deletion[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LanguageExamplesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.language.examples.$get>>,
) {
  return ['v2', '/v2/language/examples', toValue(args)] as const
}

export function getV2LanguageExamplesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.language.examples.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LanguageExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.language.examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LanguageExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.language.examples.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>
            >
          >,
          ReturnType<typeof getV2LanguageExamplesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LanguageExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.language.examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>>,
) {
  return ['v2', '/v2/language/models/:modelId', toValue(args)] as const
}

export function getV2LanguageModelsModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LanguageModelsModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.language.models[':modelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LanguageModelsModelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageModelsModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LanguageModelsModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.language.models[':modelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>
  >,
) {
  return ['v2', '/v2/language/models/:modelId/lc', toValue(args)] as const
}

export function getV2LanguageModelsModelIdLcQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LanguageModelsModelIdLcQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.language.models[':modelId'].lc.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LanguageModelsModelIdLcQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageModelsModelIdLcQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LanguageModelsModelIdLcQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.language.models[':modelId'].lc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>>,
) {
  return ['v2', '/v2/language/train/:modelId', toValue(args)] as const
}

export function getV2LanguageTrainModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LanguageTrainModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.language.train[':modelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LanguageTrainModelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LanguageTrainModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LanguageTrainModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.language.train[':modelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth2.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.oauth2.token.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.vision.datasets.$get>>,
) {
  return ['v2', '/v2/vision/datasets', toValue(args)] as const
}

export function getV2VisionDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.vision.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VisionDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vision.datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VisionDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.vision.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>
            >
          >,
          ReturnType<typeof getV2VisionDatasetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VisionDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vision.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.vision.datasets.upload.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.vision.datasets.upload.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>
  >,
) {
  return ['v2', '/v2/vision/datasets/:datasetId', toValue(args)] as const
}

export function getV2VisionDatasetsDatasetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VisionDatasetsDatasetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vision.datasets[':datasetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VisionDatasetsDatasetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDatasetsDatasetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VisionDatasetsDatasetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vision.datasets[':datasetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
  >,
) {
  return ['v2', '/v2/vision/datasets/:datasetId/examples', toValue(args)] as const
}

export function getV2VisionDatasetsDatasetIdExamplesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VisionDatasetsDatasetIdExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vision.datasets[':datasetId'].examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2VisionDatasetsDatasetIdExamplesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDatasetsDatasetIdExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VisionDatasetsDatasetIdExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vision.datasets[':datasetId'].examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>
  >,
) {
  return ['v2', '/v2/vision/datasets/:datasetId/models', toValue(args)] as const
}

export function getV2VisionDatasetsDatasetIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VisionDatasetsDatasetIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vision.datasets[':datasetId'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2VisionDatasetsDatasetIdModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDatasetsDatasetIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VisionDatasetsDatasetIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vision.datasets[':datasetId'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>>,
) {
  return ['v2', '/v2/vision/deletion/:id', toValue(args)] as const
}

export function getV2VisionDeletionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VisionDeletionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vision.deletion[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VisionDeletionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VisionDeletionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionDeletionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VisionDeletionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vision.deletion[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.vision.examples.$get>>,
) {
  return ['v2', '/v2/vision/examples', toValue(args)] as const
}

export function getV2VisionExamplesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.vision.examples.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VisionExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vision.examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VisionExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.vision.examples.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>
            >
          >,
          ReturnType<typeof getV2VisionExamplesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VisionExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vision.examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>>,
) {
  return ['v2', '/v2/vision/models/:modelId', toValue(args)] as const
}

export function getV2VisionModelsModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VisionModelsModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vision.models[':modelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VisionModelsModelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionModelsModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VisionModelsModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vision.models[':modelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>
  >,
) {
  return ['v2', '/v2/vision/models/:modelId/lc', toValue(args)] as const
}

export function getV2VisionModelsModelIdLcQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VisionModelsModelIdLcQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vision.models[':modelId'].lc.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VisionModelsModelIdLcQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionModelsModelIdLcQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VisionModelsModelIdLcQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vision.models[':modelId'].lc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.ocr.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.vision.ocr.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.train.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.vision.train.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>>,
) {
  return ['v2', '/v2/vision/train/:modelId', toValue(args)] as const
}

export function getV2VisionTrainModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VisionTrainModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vision.train[':modelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VisionTrainModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VisionTrainModelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VisionTrainModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VisionTrainModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vision.train[':modelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
