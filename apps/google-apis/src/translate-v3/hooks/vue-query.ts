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

export function getV3Key() {
  return ['v3'] as const
}

export function getPostV3DatasetExportDataMutationKey() {
  return ['v3', '/v3/:dataset:exportData', 'POST'] as const
}

export function getPostV3DatasetExportDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':dataset:exportData']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':dataset:exportData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3DatasetExportDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':dataset:exportData']['$post']>) {
      return parseResponse(client.v3[':dataset:exportData'].$post(args, options))
    },
  })
}

export function usePostV3DatasetExportData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':dataset:exportData']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':dataset:exportData']['$post']>,
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
  const mutationDefaults = getPostV3DatasetExportDataMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3DatasetImportDataMutationKey() {
  return ['v3', '/v3/:dataset:importData', 'POST'] as const
}

export function getPostV3DatasetImportDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':dataset:importData']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':dataset:importData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3DatasetImportDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':dataset:importData']['$post']>) {
      return parseResponse(client.v3[':dataset:importData'].$post(args, options))
    },
  })
}

export function usePostV3DatasetImportData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':dataset:importData']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':dataset:importData']['$post']>,
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
  const mutationDefaults = getPostV3DatasetImportDataMutationOptions<TError, TOnMutateResult>(
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

export function getV3NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['$get']>>,
) {
  return ['v3', '/v3/:name', toValue(args)] as const
}

export function getV3NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV3NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV3NameMutationKey() {
  return ['v3', '/v3/:name', 'DELETE'] as const
}

export function getDeleteV3NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name']['$delete']>) {
      return parseResponse(client.v3[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV3NameMutationKey() {
  return ['v3', '/v3/:name', 'PATCH'] as const
}

export function getPatchV3NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name']['$patch']>) {
      return parseResponse(client.v3[':name'].$patch(args, options))
    },
  })
}

export function usePatchV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['locations']['$get']>>,
) {
  return ['v3', '/v3/:name/locations', toValue(args)] as const
}

export function getV3NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3NameLocationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['operations']['$get']>>,
) {
  return ['v3', '/v3/:name/operations', toValue(args)] as const
}

export function getV3NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3NameOperationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3NameCancelMutationKey() {
  return ['v3', '/v3/:name:cancel', 'POST'] as const
}

export function getPostV3NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name:cancel']['$post']>) {
      return parseResponse(client.v3[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV3NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:cancel']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV3NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3NameWaitMutationKey() {
  return ['v3', '/v3/:name:wait', 'POST'] as const
}

export function getPostV3NameWaitMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:wait']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name:wait']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3NameWaitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name:wait']['$post']>) {
      return parseResponse(client.v3[':name:wait'].$post(args, options))
    },
  })
}

export function usePostV3NameWait<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:wait']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name:wait']['$post']>,
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
  const mutationDefaults = getPostV3NameWaitMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3ParentAdaptiveMtDatasetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/adaptiveMtDatasets', toValue(args)] as const
}

export function getV3ParentAdaptiveMtDatasetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentAdaptiveMtDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].adaptiveMtDatasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentAdaptiveMtDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentAdaptiveMtDatasetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentAdaptiveMtDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentAdaptiveMtDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].adaptiveMtDatasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentAdaptiveMtDatasetsMutationKey() {
  return ['v3', '/v3/:parent/adaptiveMtDatasets', 'POST'] as const
}

export function getPostV3ParentAdaptiveMtDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentAdaptiveMtDatasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$post']>,
    ) {
      return parseResponse(client.v3[':parent'].adaptiveMtDatasets.$post(args, options))
    },
  })
}

export function usePostV3ParentAdaptiveMtDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$post']>,
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
  const mutationDefaults = getPostV3ParentAdaptiveMtDatasetsMutationOptions<
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

export function getV3ParentAdaptiveMtFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/adaptiveMtFiles', toValue(args)] as const
}

export function getV3ParentAdaptiveMtFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentAdaptiveMtFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].adaptiveMtFiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentAdaptiveMtFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentAdaptiveMtFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentAdaptiveMtFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentAdaptiveMtFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].adaptiveMtFiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentAdaptiveMtSentencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/adaptiveMtSentences', toValue(args)] as const
}

export function getV3ParentAdaptiveMtSentencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentAdaptiveMtSentencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].adaptiveMtSentences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentAdaptiveMtSentences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentAdaptiveMtSentencesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentAdaptiveMtSentencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentAdaptiveMtSentencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].adaptiveMtSentences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['datasets']['$get']>>,
) {
  return ['v3', '/v3/:parent/datasets', toValue(args)] as const
}

export function getV3ParentDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['datasets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['datasets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentDatasetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentDatasetsMutationKey() {
  return ['v3', '/v3/:parent/datasets', 'POST'] as const
}

export function getPostV3ParentDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['datasets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentDatasetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':parent']['datasets']['$post']>) {
      return parseResponse(client.v3[':parent'].datasets.$post(args, options))
    },
  })
}

export function usePostV3ParentDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['datasets']['$post']>,
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
  const mutationDefaults = getPostV3ParentDatasetsMutationOptions<TError, TOnMutateResult>(
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

export function getV3ParentExamplesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['examples']['$get']>>,
) {
  return ['v3', '/v3/:parent/examples', toValue(args)] as const
}

export function getV3ParentExamplesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['examples']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['examples']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['examples']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['examples']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['examples']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentExamplesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['examples']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentGlossariesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['glossaries']['$get']>>,
) {
  return ['v3', '/v3/:parent/glossaries', toValue(args)] as const
}

export function getV3ParentGlossariesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['glossaries']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentGlossariesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].glossaries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentGlossaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['glossaries']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentGlossariesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentGlossariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentGlossariesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].glossaries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentGlossariesMutationKey() {
  return ['v3', '/v3/:parent/glossaries', 'POST'] as const
}

export function getPostV3ParentGlossariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['glossaries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentGlossariesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':parent']['glossaries']['$post']>) {
      return parseResponse(client.v3[':parent'].glossaries.$post(args, options))
    },
  })
}

export function usePostV3ParentGlossaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['glossaries']['$post']>,
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
  const mutationDefaults = getPostV3ParentGlossariesMutationOptions<TError, TOnMutateResult>(
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

export function getV3ParentGlossaryEntriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/glossaryEntries', toValue(args)] as const
}

export function getV3ParentGlossaryEntriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentGlossaryEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].glossaryEntries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentGlossaryEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentGlossaryEntriesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentGlossaryEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentGlossaryEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].glossaryEntries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentGlossaryEntriesMutationKey() {
  return ['v3', '/v3/:parent/glossaryEntries', 'POST'] as const
}

export function getPostV3ParentGlossaryEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentGlossaryEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$post']>,
    ) {
      return parseResponse(client.v3[':parent'].glossaryEntries.$post(args, options))
    },
  })
}

export function usePostV3ParentGlossaryEntries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$post']>,
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
  const mutationDefaults = getPostV3ParentGlossaryEntriesMutationOptions<TError, TOnMutateResult>(
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

export function getV3ParentModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['models']['$get']>>,
) {
  return ['v3', '/v3/:parent/models', toValue(args)] as const
}

export function getV3ParentModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['models']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['models']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentModelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentModelsMutationKey() {
  return ['v3', '/v3/:parent/models', 'POST'] as const
}

export function getPostV3ParentModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentModelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':parent']['models']['$post']>) {
      return parseResponse(client.v3[':parent'].models.$post(args, options))
    },
  })
}

export function usePostV3ParentModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['models']['$post']>,
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
  const mutationDefaults = getPostV3ParentModelsMutationOptions<TError, TOnMutateResult>(
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

export function getV3ParentSupportedLanguagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/supportedLanguages', toValue(args)] as const
}

export function getV3ParentSupportedLanguagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentSupportedLanguagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].supportedLanguages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentSupportedLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentSupportedLanguagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentSupportedLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentSupportedLanguagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].supportedLanguages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentAdaptiveMtTranslateMutationKey() {
  return ['v3', '/v3/:parent:adaptiveMtTranslate', 'POST'] as const
}

export function getPostV3ParentAdaptiveMtTranslateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:adaptiveMtTranslate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent:adaptiveMtTranslate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentAdaptiveMtTranslateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent:adaptiveMtTranslate']['$post']>,
    ) {
      return parseResponse(client.v3[':parent:adaptiveMtTranslate'].$post(args, options))
    },
  })
}

export function usePostV3ParentAdaptiveMtTranslate<
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
                Awaited<ReturnType<(typeof client.v3)[':parent:adaptiveMtTranslate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent:adaptiveMtTranslate']['$post']>,
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
  const mutationDefaults = getPostV3ParentAdaptiveMtTranslateMutationOptions<
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

export function getPostV3ParentBatchTranslateDocumentMutationKey() {
  return ['v3', '/v3/:parent:batchTranslateDocument', 'POST'] as const
}

export function getPostV3ParentBatchTranslateDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:batchTranslateDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent:batchTranslateDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentBatchTranslateDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent:batchTranslateDocument']['$post']>,
    ) {
      return parseResponse(client.v3[':parent:batchTranslateDocument'].$post(args, options))
    },
  })
}

export function usePostV3ParentBatchTranslateDocument<
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
                Awaited<ReturnType<(typeof client.v3)[':parent:batchTranslateDocument']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent:batchTranslateDocument']['$post']>,
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
  const mutationDefaults = getPostV3ParentBatchTranslateDocumentMutationOptions<
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

export function getPostV3ParentBatchTranslateTextMutationKey() {
  return ['v3', '/v3/:parent:batchTranslateText', 'POST'] as const
}

export function getPostV3ParentBatchTranslateTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:batchTranslateText']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent:batchTranslateText']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentBatchTranslateTextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent:batchTranslateText']['$post']>,
    ) {
      return parseResponse(client.v3[':parent:batchTranslateText'].$post(args, options))
    },
  })
}

export function usePostV3ParentBatchTranslateText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent:batchTranslateText']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent:batchTranslateText']['$post']>,
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
  const mutationDefaults = getPostV3ParentBatchTranslateTextMutationOptions<
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

export function getPostV3ParentDetectLanguageMutationKey() {
  return ['v3', '/v3/:parent:detectLanguage', 'POST'] as const
}

export function getPostV3ParentDetectLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:detectLanguage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent:detectLanguage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentDetectLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent:detectLanguage']['$post']>,
    ) {
      return parseResponse(client.v3[':parent:detectLanguage'].$post(args, options))
    },
  })
}

export function usePostV3ParentDetectLanguage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent:detectLanguage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent:detectLanguage']['$post']>,
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
  const mutationDefaults = getPostV3ParentDetectLanguageMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3ParentImportAdaptiveMtFileMutationKey() {
  return ['v3', '/v3/:parent:importAdaptiveMtFile', 'POST'] as const
}

export function getPostV3ParentImportAdaptiveMtFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:importAdaptiveMtFile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent:importAdaptiveMtFile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentImportAdaptiveMtFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent:importAdaptiveMtFile']['$post']>,
    ) {
      return parseResponse(client.v3[':parent:importAdaptiveMtFile'].$post(args, options))
    },
  })
}

export function usePostV3ParentImportAdaptiveMtFile<
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
                Awaited<ReturnType<(typeof client.v3)[':parent:importAdaptiveMtFile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent:importAdaptiveMtFile']['$post']>,
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
  const mutationDefaults = getPostV3ParentImportAdaptiveMtFileMutationOptions<
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

export function getPostV3ParentRomanizeTextMutationKey() {
  return ['v3', '/v3/:parent:romanizeText', 'POST'] as const
}

export function getPostV3ParentRomanizeTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:romanizeText']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent:romanizeText']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentRomanizeTextMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':parent:romanizeText']['$post']>) {
      return parseResponse(client.v3[':parent:romanizeText'].$post(args, options))
    },
  })
}

export function usePostV3ParentRomanizeText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent:romanizeText']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent:romanizeText']['$post']>,
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
  const mutationDefaults = getPostV3ParentRomanizeTextMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3ParentTranslateDocumentMutationKey() {
  return ['v3', '/v3/:parent:translateDocument', 'POST'] as const
}

export function getPostV3ParentTranslateDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:translateDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent:translateDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentTranslateDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent:translateDocument']['$post']>,
    ) {
      return parseResponse(client.v3[':parent:translateDocument'].$post(args, options))
    },
  })
}

export function usePostV3ParentTranslateDocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent:translateDocument']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent:translateDocument']['$post']>,
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
  const mutationDefaults = getPostV3ParentTranslateDocumentMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3ParentTranslateTextMutationKey() {
  return ['v3', '/v3/:parent:translateText', 'POST'] as const
}

export function getPostV3ParentTranslateTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:translateText']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent:translateText']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentTranslateTextMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':parent:translateText']['$post']>) {
      return parseResponse(client.v3[':parent:translateText'].$post(args, options))
    },
  })
}

export function usePostV3ParentTranslateText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent:translateText']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent:translateText']['$post']>,
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
  const mutationDefaults = getPostV3ParentTranslateTextMutationOptions<TError, TOnMutateResult>(
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
