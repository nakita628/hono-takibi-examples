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

export function getApiKey() {
  return ['api'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getInternalKey() {
  return ['internal'] as const
}

export function getApiAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.assets.$get>>,
) {
  return ['api', '/api/assets', toValue(args)] as const
}

export function getApiAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAssets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>
          >,
          ReturnType<typeof getApiAssetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAssetsMutationKey() {
  return ['api', '/api/assets', 'POST'] as const
}

export function getPostApiAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.assets.$post>) {
      return parseResponse(client.api.assets.$post(args, options))
    },
  })
}

export function usePostApiAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.assets.$post>,
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
  const mutationDefaults = getPostApiAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAssetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.assets)[':id']['$get']>>,
) {
  return ['api', '/api/assets/:id', toValue(args)] as const
}

export function getApiAssetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.assets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAssetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.assets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAssetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.assets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiAssetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAssetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.assets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiAssetsIdMutationKey() {
  return ['api', '/api/assets/:id', 'PUT'] as const
}

export function getPutApiAssetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAssetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)[':id']['$put']>) {
      return parseResponse(client.api.assets[':id'].$put(args, options))
    },
  })
}

export function usePutApiAssetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.assets)[':id']['$put']>,
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
  const mutationDefaults = getPutApiAssetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiAssetsIdMutationKey() {
  return ['api', '/api/assets/:id', 'DELETE'] as const
}

export function getDeleteApiAssetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.assets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAssetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)[':id']['$delete']>) {
      return parseResponse(client.api.assets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAssetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.assets)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.assets)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiAssetsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAssetsIdContentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>>,
) {
  return ['api', '/api/assets/:id/content', toValue(args)] as const
}

export function getApiAssetsIdContentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAssetsIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.assets[':id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAssetsIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAssetsIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAssetsIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.assets[':id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAssetsIdTagsMutationKey() {
  return ['api', '/api/assets/:id/tags', 'POST'] as const
}

export function getPostApiAssetsIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets)[':id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsIdTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)[':id']['tags']['$post']>) {
      return parseResponse(client.api.assets[':id'].tags.$post(args, options))
    },
  })
}

export function usePostApiAssetsIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.assets)[':id']['tags']['$post']>,
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
  const mutationDefaults = getPostApiAssetsIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAssetsIdTagsMutationKey() {
  return ['api', '/api/assets/:id/tags', 'DELETE'] as const
}

export function getDeleteApiAssetsIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets)[':id']['tags']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAssetsIdTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)[':id']['tags']['$delete']>) {
      return parseResponse(client.api.assets[':id'].tags.$delete(args, options))
    },
  })
}

export function useDeleteApiAssetsIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.assets)[':id']['tags']['$delete']>,
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
  const mutationDefaults = getDeleteApiAssetsIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAssetsFromHashMutationKey() {
  return ['api', '/api/assets/from-hash', 'POST'] as const
}

export function getPostApiAssetsFromHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)['from-hash']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets)['from-hash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsFromHashMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)['from-hash']['$post']>) {
      return parseResponse(client.api.assets['from-hash'].$post(args, options))
    },
  })
}

export function usePostApiAssetsFromHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.assets)['from-hash']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.assets)['from-hash']['$post']>,
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
  const mutationDefaults = getPostApiAssetsFromHashMutationOptions<TError, TOnMutateResult>(
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

export function getHeadApiAssetsHashHashMutationKey() {
  return ['api', '/api/assets/hash/:hash', 'HEAD'] as const
}

export function getHeadApiAssetsHashHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets.hash)[':hash']['$head']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets.hash)[':hash']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadApiAssetsHashHashMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets.hash)[':hash']['$head']>) {
      return parseResponse(client.api.assets.hash[':hash'].$head(args, options))
    },
  })
}

export function useHeadApiAssetsHashHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.assets.hash)[':hash']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.assets.hash)[':hash']['$head']>,
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
  const mutationDefaults = getHeadApiAssetsHashHashMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAssetsPruneMutationKey() {
  return ['api', '/api/assets/prune', 'POST'] as const
}

export function getPostApiAssetsPruneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.prune.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsPruneMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.assets.prune.$post(undefined, options))
    },
  })
}

export function usePostApiAssetsPrune<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.prune.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiAssetsPruneMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAssetsSeedMutationKey() {
  return ['api', '/api/assets/seed', 'POST'] as const
}

export function getPostApiAssetsSeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.assets.seed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsSeedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.assets.seed.$post>) {
      return parseResponse(client.api.assets.seed.$post(args, options))
    },
  })
}

export function usePostApiAssetsSeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.assets.seed.$post>,
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
  const mutationDefaults = getPostApiAssetsSeedMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAssetsSeedCancelMutationKey() {
  return ['api', '/api/assets/seed/cancel', 'POST'] as const
}

export function getPostApiAssetsSeedCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.cancel.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsSeedCancelMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.assets.seed.cancel.$post(undefined, options))
    },
  })
}

export function usePostApiAssetsSeedCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.cancel.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiAssetsSeedCancelMutationOptions<TError, TOnMutateResult>(
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

export function getApiAssetsSeedStatusQueryKey() {
  return ['api', '/api/assets/seed/status'] as const
}

export function getApiAssetsSeedStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAssetsSeedStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.assets.seed.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAssetsSeedStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>
            >
          >,
          ReturnType<typeof getApiAssetsSeedStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsSeedStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAssetsSeedStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.assets.seed.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAssetsTagsRefineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.assets.tags.refine.$get>>,
) {
  return ['api', '/api/assets/tags/refine', toValue(args)] as const
}

export function getApiAssetsTagsRefineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.assets.tags.refine.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAssetsTagsRefineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.assets.tags.refine.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAssetsTagsRefine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.assets.tags.refine.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>
            >
          >,
          ReturnType<typeof getApiAssetsTagsRefineQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsTagsRefineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAssetsTagsRefineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.assets.tags.refine.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBillingChurnkeyAuthQueryKey() {
  return ['api', '/api/billing/churnkey/auth'] as const
}

export function getApiBillingChurnkeyAuthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiBillingChurnkeyAuthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.billing.churnkey.auth.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBillingChurnkeyAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>
              >
            >
          >,
          ReturnType<typeof getApiBillingChurnkeyAuthQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBillingChurnkeyAuthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiBillingChurnkeyAuthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.billing.churnkey.auth.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDefaultWorkflowQueryKey() {
  return ['api', '/api/default_workflow'] as const
}

export function getApiDefaultWorkflowQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiDefaultWorkflowQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.default_workflow.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDefaultWorkflow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>
            >
          >,
          ReturnType<typeof getApiDefaultWorkflowQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDefaultWorkflowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiDefaultWorkflowQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.default_workflow.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiDeployBundleMutationKey() {
  return ['api', '/api/deploy/bundle', 'POST'] as const
}

export function getPostApiDeployBundleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.bundle.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.deploy.bundle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDeployBundleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.deploy.bundle.$post>) {
      return parseResponse(client.api.deploy.bundle.$post(args, options))
    },
  })
}

export function usePostApiDeployBundle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.bundle.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.deploy.bundle.$post>,
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
  const mutationDefaults = getPostApiDeployBundleMutationOptions<TError, TOnMutateResult>(
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

export function getApiDeploySummaryQueryKey() {
  return ['api', '/api/deploy/summary'] as const
}

export function getApiDeploySummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiDeploySummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.deploy.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDeploySummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>
            >
          >,
          ReturnType<typeof getApiDeploySummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDeploySummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiDeploySummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.deploy.summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEmbeddingsQueryKey() {
  return ['api', '/api/embeddings'] as const
}

export function getApiEmbeddingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiEmbeddingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.embeddings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiEmbeddings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
          >,
          ReturnType<typeof getApiEmbeddingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmbeddingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiEmbeddingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.embeddings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiExperimentModelsQueryKey() {
  return ['api', '/api/experiment/models'] as const
}

export function getApiExperimentModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiExperimentModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.experiment.models.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiExperimentModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>
            >
          >,
          ReturnType<typeof getApiExperimentModelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExperimentModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiExperimentModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.experiment.models.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiExperimentModelsFolderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>
  >,
) {
  return ['api', '/api/experiment/models/:folder', toValue(args)] as const
}

export function getApiExperimentModelsFolderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiExperimentModelsFolderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.experiment.models[':folder'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiExperimentModelsFolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiExperimentModelsFolderQueryKey>
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
          Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExperimentModelsFolderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiExperimentModelsFolderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.experiment.models[':folder'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiExtensionsQueryKey() {
  return ['api', '/api/extensions'] as const
}

export function getApiExtensionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiExtensionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.extensions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
          >,
          ReturnType<typeof getApiExtensionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiExtensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiExtensionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.extensions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFeaturesQueryKey() {
  return ['api', '/api/features'] as const
}

export function getApiFeaturesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiFeaturesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.features.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>
          >,
          ReturnType<typeof getApiFeaturesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiFeaturesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.features.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiFeedbackMutationKey() {
  return ['api', '/api/feedback', 'POST'] as const
}

export function getPostApiFeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.feedback.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.feedback.$post>) {
      return parseResponse(client.api.feedback.$post(args, options))
    },
  })
}

export function usePostApiFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.feedback.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.feedback.$post>,
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
  const mutationDefaults = getPostApiFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiFilesMaskLayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.files)['mask-layers']['$get']>>,
) {
  return ['api', '/api/files/mask-layers', toValue(args)] as const
}

export function getApiFilesMaskLayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.files)['mask-layers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFilesMaskLayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.files['mask-layers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFilesMaskLayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.files)['mask-layers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFilesMaskLayersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFilesMaskLayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFilesMaskLayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.files['mask-layers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiFreeMutationKey() {
  return ['api', '/api/free', 'POST'] as const
}

export function getPostApiFreeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.free.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.free.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFreeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.free.$post>) {
      return parseResponse(client.api.free.$post(args, options))
    },
  })
}

export function usePostApiFree<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.free.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.free.$post>,
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
  const mutationDefaults = getPostApiFreeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiGlobalSubgraphsQueryKey() {
  return ['api', '/api/global_subgraphs'] as const
}

export function getApiGlobalSubgraphsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiGlobalSubgraphsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.global_subgraphs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGlobalSubgraphs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>
            >
          >,
          ReturnType<typeof getApiGlobalSubgraphsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiGlobalSubgraphsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiGlobalSubgraphsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.global_subgraphs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGlobalSubgraphsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>>,
) {
  return ['api', '/api/global_subgraphs/:id', toValue(args)] as const
}

export function getApiGlobalSubgraphsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGlobalSubgraphsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.global_subgraphs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGlobalSubgraphsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiGlobalSubgraphsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGlobalSubgraphsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGlobalSubgraphsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.global_subgraphs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiHistoryMutationKey() {
  return ['api', '/api/history', 'POST'] as const
}

export function getPostApiHistoryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.history.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiHistoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.history.$post>) {
      return parseResponse(client.api.history.$post(args, options))
    },
  })
}

export function usePostApiHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.history.$post>,
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
  const mutationDefaults = getPostApiHistoryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiHistoryV2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.history_v2.$get>>,
) {
  return ['api', '/api/history_v2', toValue(args)] as const
}

export function getApiHistoryV2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.history_v2.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiHistoryV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.history_v2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiHistoryV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.history_v2.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
          >,
          ReturnType<typeof getApiHistoryV2QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiHistoryV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiHistoryV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.history_v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiHistoryV2PromptIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>>,
) {
  return ['api', '/api/history_v2/:prompt_id', toValue(args)] as const
}

export function getApiHistoryV2PromptIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiHistoryV2PromptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.history_v2[':prompt_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiHistoryV2PromptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiHistoryV2PromptIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiHistoryV2PromptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiHistoryV2PromptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.history_v2[':prompt_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiI18nQueryKey() {
  return ['api', '/api/i18n'] as const
}

export function getApiI18nQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiI18nQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.i18n.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiI18n<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>
          >,
          ReturnType<typeof getApiI18nQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiI18nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiI18nQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.i18n.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInterruptMutationKey() {
  return ['api', '/api/interrupt', 'POST'] as const
}

export function getPostApiInterruptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.interrupt.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiInterruptMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.interrupt.$post(undefined, options))
    },
  })
}

export function usePostApiInterrupt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.interrupt.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiInterruptMutationOptions<TError, TOnMutateResult>(
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

export function getApiJobJobIdStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>>,
) {
  return ['api', '/api/job/:job_id/status', toValue(args)] as const
}

export function getApiJobJobIdStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobJobIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.job[':job_id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobJobIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobJobIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobJobIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.job[':job_id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.jobs.$get>>,
) {
  return ['api', '/api/jobs', toValue(args)] as const
}

export function getApiJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
          >,
          ReturnType<typeof getApiJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>>,
) {
  return ['api', '/api/jobs/:job_id', toValue(args)] as const
}

export function getApiJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiJobsJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJobsJobIdAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>,
) {
  return ['api', '/api/jobs/:job_id/assets', toValue(args)] as const
}

export function getApiJobsJobIdAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsJobIdAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':job_id'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsJobIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobsJobIdAssetsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsJobIdAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsJobIdAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':job_id'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiJobsJobIdCancelMutationKey() {
  return ['api', '/api/jobs/:job_id/cancel', 'POST'] as const
}

export function getPostApiJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.jobs[':job_id'].cancel.$post(args, options))
    },
  })
}

export function usePostApiJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostApiJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiJobsCancelMutationKey() {
  return ['api', '/api/jobs/cancel', 'POST'] as const
}

export function getPostApiJobsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.jobs.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.jobs.cancel.$post>) {
      return parseResponse(client.api.jobs.cancel.$post(args, options))
    },
  })
}

export function usePostApiJobsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.cancel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.jobs.cancel.$post>,
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
  const mutationDefaults = getPostApiJobsCancelMutationOptions<TError, TOnMutateResult>(
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

export function getApiNodeReplacementsQueryKey() {
  return ['api', '/api/node_replacements'] as const
}

export function getApiNodeReplacementsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiNodeReplacementsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.node_replacements.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNodeReplacements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>
            >
          >,
          ReturnType<typeof getApiNodeReplacementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNodeReplacementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiNodeReplacementsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.node_replacements.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiObjectInfoQueryKey() {
  return ['api', '/api/object_info'] as const
}

export function getApiObjectInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiObjectInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.object_info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiObjectInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>
            >
          >,
          ReturnType<typeof getApiObjectInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiObjectInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiObjectInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.object_info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPromptQueryKey() {
  return ['api', '/api/prompt'] as const
}

export function getApiPromptQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPromptQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.prompt.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPrompt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>
          >,
          ReturnType<typeof getApiPromptQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPromptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPromptQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.prompt.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPromptMutationKey() {
  return ['api', '/api/prompt', 'POST'] as const
}

export function getPostApiPromptMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.prompt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPromptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.prompt.$post>) {
      return parseResponse(client.api.prompt.$post(args, options))
    },
  })
}

export function usePostApiPrompt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.prompt.$post>,
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
  const mutationDefaults = getPostApiPromptMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiQueueQueryKey() {
  return ['api', '/api/queue'] as const
}

export function getApiQueueQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiQueueQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.queue.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiQueue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>
          >,
          ReturnType<typeof getApiQueueQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiQueueQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.queue.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiQueueMutationKey() {
  return ['api', '/api/queue', 'POST'] as const
}

export function getPostApiQueueMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.queue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiQueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.queue.$post>) {
      return parseResponse(client.api.queue.$post(args, options))
    },
  })
}

export function usePostApiQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.queue.$post>,
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
  const mutationDefaults = getPostApiQueueMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSettingsQueryKey() {
  return ['api', '/api/settings'] as const
}

export function getApiSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>
          >,
          ReturnType<typeof getApiSettingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSettingsMutationKey() {
  return ['api', '/api/settings', 'POST'] as const
}

export function getPostApiSettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.settings.$post>) {
      return parseResponse(client.api.settings.$post(args, options))
    },
  })
}

export function usePostApiSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.settings.$post>,
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
  const mutationDefaults = getPostApiSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSettingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.settings)[':id']['$get']>>,
) {
  return ['api', '/api/settings/:id', toValue(args)] as const
}

export function getApiSettingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.settings)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSettingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.settings[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.settings)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiSettingsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSettingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.settings[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSettingsIdMutationKey() {
  return ['api', '/api/settings/:id', 'POST'] as const
}

export function getPostApiSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.settings)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.settings)[':id']['$post']>) {
      return parseResponse(client.api.settings[':id'].$post(args, options))
    },
  })
}

export function usePostApiSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.settings)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.settings)[':id']['$post']>,
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
  const mutationDefaults = getPostApiSettingsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiSystemStatsQueryKey() {
  return ['api', '/api/system_stats'] as const
}

export function getApiSystemStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSystemStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.system_stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSystemStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>
            >
          >,
          ReturnType<typeof getApiSystemStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSystemStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.system_stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.$get>>,
) {
  return ['api', '/api/tags', toValue(args)] as const
}

export function getApiTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
          >,
          ReturnType<typeof getApiTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tasks.$get>>,
) {
  return ['api', '/api/tasks', toValue(args)] as const
}

export function getApiTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
          >,
          ReturnType<typeof getApiTasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>>,
) {
  return ['api', '/api/tasks/:task_id', toValue(args)] as const
}

export function getApiTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTasksTaskIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUploadImageMutationKey() {
  return ['api', '/api/upload/image', 'POST'] as const
}

export function getPostApiUploadImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.image.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.upload.image.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUploadImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.upload.image.$post>) {
      return parseResponse(client.api.upload.image.$post(args, options))
    },
  })
}

export function usePostApiUploadImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.image.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.upload.image.$post>,
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
  const mutationDefaults = getPostApiUploadImageMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiUploadMaskMutationKey() {
  return ['api', '/api/upload/mask', 'POST'] as const
}

export function getPostApiUploadMaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.mask.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.upload.mask.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUploadMaskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.upload.mask.$post>) {
      return parseResponse(client.api.upload.mask.$post(args, options))
    },
  })
}

export function usePostApiUploadMask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.mask.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.upload.mask.$post>,
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
  const mutationDefaults = getPostApiUploadMaskMutationOptions<TError, TOnMutateResult>(
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

export function getApiUserQueryKey() {
  return ['api', '/api/user'] as const
}

export function getApiUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>
          >,
          ReturnType<typeof getApiUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserdataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.userdata.$get>>,
) {
  return ['api', '/api/userdata', toValue(args)] as const
}

export function getApiUserdataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.userdata.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.userdata.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUserdata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.userdata.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
          >,
          ReturnType<typeof getApiUserdataQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUserdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.userdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserdataFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.userdata)[':file']['$get']>>,
) {
  return ['api', '/api/userdata/:file', toValue(args)] as const
}

export function getApiUserdataFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.userdata)[':file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserdataFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.userdata[':file'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserdataFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.userdata)[':file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserdataFileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserdataFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserdataFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.userdata[':file'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUserdataFileMutationKey() {
  return ['api', '/api/userdata/:file', 'POST'] as const
}

export function getPostApiUserdataFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.userdata)[':file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserdataFileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.userdata)[':file']['$post']>) {
      return parseResponse(client.api.userdata[':file'].$post(args, options))
    },
  })
}

export function usePostApiUserdataFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.userdata)[':file']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.userdata)[':file']['$post']>,
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
  const mutationDefaults = getPostApiUserdataFileMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiUserdataFileMutationKey() {
  return ['api', '/api/userdata/:file', 'DELETE'] as const
}

export function getDeleteApiUserdataFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.userdata)[':file']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.userdata)[':file']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserdataFileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.userdata)[':file']['$delete']>) {
      return parseResponse(client.api.userdata[':file'].$delete(args, options))
    },
  })
}

export function useDeleteApiUserdataFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.userdata)[':file']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.userdata)[':file']['$delete']>,
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
  const mutationDefaults = getDeleteApiUserdataFileMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiUserdataFileMoveDestMutationKey() {
  return ['api', '/api/userdata/:file/move/:dest', 'POST'] as const
}

export function getPostApiUserdataFileMoveDestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserdataFileMoveDestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>,
    ) {
      return parseResponse(client.api.userdata[':file'].move[':dest'].$post(args, options))
    },
  })
}

export function usePostApiUserdataFileMoveDest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>,
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
  const mutationDefaults = getPostApiUserdataFileMoveDestMutationOptions<TError, TOnMutateResult>(
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

export function getApiUserdataFilePublishQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>
  >,
) {
  return ['api', '/api/userdata/:file/publish', toValue(args)] as const
}

export function getApiUserdataFilePublishQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserdataFilePublishQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.userdata[':file'].publish.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserdataFilePublish<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserdataFilePublishQueryKey>
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
          Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserdataFilePublishQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserdataFilePublishQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.userdata[':file'].publish.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUserdataFilePublishMutationKey() {
  return ['api', '/api/userdata/:file/publish', 'POST'] as const
}

export function getPostApiUserdataFilePublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.userdata)[':file']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserdataFilePublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$post']>,
    ) {
      return parseResponse(client.api.userdata[':file'].publish.$post(args, options))
    },
  })
}

export function usePostApiUserdataFilePublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.userdata)[':file']['publish']['$post']>,
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
  const mutationDefaults = getPostApiUserdataFilePublishMutationOptions<TError, TOnMutateResult>(
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

export function getApiUsersQueryKey() {
  return ['api', '/api/users'] as const
}

export function getApiUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          ReturnType<typeof getApiUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVhsQueryvideoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.vhs.queryvideo.$get>>,
) {
  return ['api', '/api/vhs/queryvideo', toValue(args)] as const
}

export function getApiVhsQueryvideoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.vhs.queryvideo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVhsQueryvideoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.vhs.queryvideo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVhsQueryvideo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.vhs.queryvideo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>
            >
          >,
          ReturnType<typeof getApiVhsQueryvideoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVhsQueryvideoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVhsQueryvideoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.vhs.queryvideo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiViewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.view.$get>>,
) {
  return ['api', '/api/view', toValue(args)] as const
}

export function getApiViewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.view.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiViewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.view.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiView<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.view.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>
          >,
          ReturnType<typeof getApiViewQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiViewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiViewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.view.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWorkflowTemplatesQueryKey() {
  return ['api', '/api/workflow_templates'] as const
}

export function getApiWorkflowTemplatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiWorkflowTemplatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.workflow_templates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWorkflowTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>
            >
          >,
          ReturnType<typeof getApiWorkflowTemplatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiWorkflowTemplatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.workflow_templates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWorkflowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.workflows.$get>>,
) {
  return ['api', '/api/workflows', toValue(args)] as const
}

export function getApiWorkflowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.workflows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.workflows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.workflows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
          >,
          ReturnType<typeof getApiWorkflowsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiWorkflowsMutationKey() {
  return ['api', '/api/workflows', 'POST'] as const
}

export function getPostApiWorkflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.workflows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorkflowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.workflows.$post>) {
      return parseResponse(client.api.workflows.$post(args, options))
    },
  })
}

export function usePostApiWorkflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.workflows.$post>,
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
  const mutationDefaults = getPostApiWorkflowsMutationOptions<TError, TOnMutateResult>(
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

export function getApiWorkflowsWorkflowIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>>,
) {
  return ['api', '/api/workflows/:workflow_id', toValue(args)] as const
}

export function getApiWorkflowsWorkflowIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWorkflowsWorkflowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.workflows[':workflow_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiWorkflowsWorkflowIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowsWorkflowIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWorkflowsWorkflowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.workflows[':workflow_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiWorkflowsWorkflowIdMutationKey() {
  return ['api', '/api/workflows/:workflow_id', 'DELETE'] as const
}

export function getDeleteApiWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiWorkflowsWorkflowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$delete']>,
    ) {
      return parseResponse(client.api.workflows[':workflow_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.workflows)[':workflow_id']['$delete']>,
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
  const mutationDefaults = getDeleteApiWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiWorkflowsWorkflowIdMutationKey() {
  return ['api', '/api/workflows/:workflow_id', 'PATCH'] as const
}

export function getPatchApiWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiWorkflowsWorkflowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$patch']>,
    ) {
      return parseResponse(client.api.workflows[':workflow_id'].$patch(args, options))
    },
  })
}

export function usePatchApiWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.workflows)[':workflow_id']['$patch']>,
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
  const mutationDefaults = getPatchApiWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiWorkflowsWorkflowIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>
  >,
) {
  return ['api', '/api/workflows/:workflow_id/content', toValue(args)] as const
}

export function getApiWorkflowsWorkflowIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWorkflowsWorkflowIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.workflows[':workflow_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWorkflowsWorkflowIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>
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
                  ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiWorkflowsWorkflowIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowsWorkflowIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWorkflowsWorkflowIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.workflows[':workflow_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiWorkflowsWorkflowIdForkMutationKey() {
  return ['api', '/api/workflows/:workflow_id/fork', 'POST'] as const
}

export function getPostApiWorkflowsWorkflowIdForkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorkflowsWorkflowIdForkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>,
    ) {
      return parseResponse(client.api.workflows[':workflow_id'].fork.$post(args, options))
    },
  })
}

export function usePostApiWorkflowsWorkflowIdFork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>,
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
  const mutationDefaults = getPostApiWorkflowsWorkflowIdForkMutationOptions<
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

export function getPostApiWorkflowsWorkflowIdVersionsMutationKey() {
  return ['api', '/api/workflows/:workflow_id/versions', 'POST'] as const
}

export function getPostApiWorkflowsWorkflowIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorkflowsWorkflowIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>,
    ) {
      return parseResponse(client.api.workflows[':workflow_id'].versions.$post(args, options))
    },
  })
}

export function usePostApiWorkflowsWorkflowIdVersions<
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
                  ReturnType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>,
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
  const mutationDefaults = getPostApiWorkflowsWorkflowIdVersionsMutationOptions<
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

export function getApiWorkflowsPublishedShareIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>
  >,
) {
  return ['api', '/api/workflows/published/:share_id', toValue(args)] as const
}

export function getApiWorkflowsPublishedShareIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWorkflowsPublishedShareIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.workflows.published[':share_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWorkflowsPublishedShareId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiWorkflowsPublishedShareIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowsPublishedShareIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWorkflowsPublishedShareIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.workflows.published[':share_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInternalFolderPathsQueryKey() {
  return ['internal', '/internal/folder_paths'] as const
}

export function getInternalFolderPathsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInternalFolderPathsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.internal.folder_paths.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInternalFolderPaths<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>
            >
          >,
          ReturnType<typeof getInternalFolderPathsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternalFolderPathsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInternalFolderPathsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.internal.folder_paths.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInternalLogsQueryKey() {
  return ['internal', '/internal/logs'] as const
}

export function getInternalLogsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInternalLogsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.internal.logs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInternalLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
          >,
          ReturnType<typeof getInternalLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInternalLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInternalLogsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.internal.logs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInternalLogsRawQueryKey() {
  return ['internal', '/internal/logs/raw'] as const
}

export function getInternalLogsRawQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInternalLogsRawQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.internal.logs.raw.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInternalLogsRaw<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>
            >
          >,
          ReturnType<typeof getInternalLogsRawQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInternalLogsRawQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInternalLogsRawQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.internal.logs.raw.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchInternalLogsSubscribeMutationKey() {
  return ['internal', '/internal/logs/subscribe', 'PATCH'] as const
}

export function getPatchInternalLogsSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.subscribe.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.internal.logs.subscribe.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchInternalLogsSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.internal.logs.subscribe.$patch>) {
      return parseResponse(client.internal.logs.subscribe.$patch(args, options))
    },
  })
}

export function usePatchInternalLogsSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.internal.logs.subscribe.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.internal.logs.subscribe.$patch>,
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
  const mutationDefaults = getPatchInternalLogsSubscribeMutationOptions<TError, TOnMutateResult>(
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
