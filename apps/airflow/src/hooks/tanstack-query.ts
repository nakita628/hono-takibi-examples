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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2AssetsQueryKey(args: InferRequestType<typeof client.api.v2.assets.$get>) {
  return ['api', '/api/v2/assets', args] as const
}

export function getApiV2AssetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsQueryKey>
  >({
    queryKey: getApiV2AssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.assets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2AssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.assets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2AssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2AssetsAliasesQueryKey(
  args: InferRequestType<typeof client.api.v2.assets.aliases.$get>,
) {
  return ['api', '/api/v2/assets/aliases', args] as const
}

export function getApiV2AssetsAliasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.assets.aliases.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAliasesQueryKey>
  >({
    queryKey: getApiV2AssetsAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.assets.aliases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2AssetsAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.assets.aliases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2AssetsAliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2AssetsAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.assets.aliases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2AssetsAliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2AssetsAliasesAssetAliasIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>,
) {
  return ['api', '/api/v2/assets/aliases/:asset_alias_id', args] as const
}

export function getApiV2AssetsAliasesAssetAliasIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAliasesAssetAliasIdQueryKey>
  >({
    queryKey: getApiV2AssetsAliasesAssetAliasIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.assets.aliases[':asset_alias_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AssetsAliasesAssetAliasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAliasesAssetAliasIdQueryKey>
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
      ...getApiV2AssetsAliasesAssetAliasIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AssetsAliasesAssetAliasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAliasesAssetAliasIdQueryKey>
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
      ...getApiV2AssetsAliasesAssetAliasIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AssetsEventsQueryKey(
  args: InferRequestType<typeof client.api.v2.assets.events.$get>,
) {
  return ['api', '/api/v2/assets/events', args] as const
}

export function getApiV2AssetsEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.assets.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsEventsQueryKey>
  >({
    queryKey: getApiV2AssetsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.assets.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2AssetsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.assets.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2AssetsEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2AssetsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.assets.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2AssetsEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV2AssetsEventsMutationKey() {
  return ['api', '/api/v2/assets/events', 'POST'] as const
}

export function getPostApiV2AssetsEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.assets.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AssetsEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.assets.events.$post>) {
      return parseResponse(client.api.v2.assets.events.$post(args, options))
    },
  })
}

export function usePostApiV2AssetsEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.assets.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2AssetsEventsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV2AssetsAssetIdMaterializeMutationKey() {
  return ['api', '/api/v2/assets/:asset_id/materialize', 'POST'] as const
}

export function getPostApiV2AssetsAssetIdMaterializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['materialize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['materialize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AssetsAssetIdMaterializeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['materialize']['$post']>,
    ) {
      return parseResponse(client.api.v2.assets[':asset_id'].materialize.$post(args, options))
    },
  })
}

export function usePostApiV2AssetsAssetIdMaterialize<
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
                ReturnType<(typeof client.api.v2.assets)[':asset_id']['materialize']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.assets)[':asset_id']['materialize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2AssetsAssetIdMaterializeMutationOptions<
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

export function getApiV2AssetsAssetIdQueuedEventsQueryKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>,
) {
  return ['api', '/api/v2/assets/:asset_id/queuedEvents', args] as const
}

export function getApiV2AssetsAssetIdQueuedEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAssetIdQueuedEventsQueryKey>
  >({
    queryKey: getApiV2AssetsAssetIdQueuedEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.assets[':asset_id'].queuedEvents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AssetsAssetIdQueuedEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAssetIdQueuedEventsQueryKey>
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
      ...getApiV2AssetsAssetIdQueuedEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AssetsAssetIdQueuedEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAssetIdQueuedEventsQueryKey>
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
      ...getApiV2AssetsAssetIdQueuedEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2AssetsAssetIdQueuedEventsMutationKey() {
  return ['api', '/api/v2/assets/:asset_id/queuedEvents', 'DELETE'] as const
}

export function getDeleteApiV2AssetsAssetIdQueuedEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AssetsAssetIdQueuedEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']>,
    ) {
      return parseResponse(client.api.v2.assets[':asset_id'].queuedEvents.$delete(args, options))
    },
  })
}

export function useDeleteApiV2AssetsAssetIdQueuedEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV2AssetsAssetIdQueuedEventsMutationOptions<
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

export function getApiV2AssetsAssetIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>,
) {
  return ['api', '/api/v2/assets/:asset_id', args] as const
}

export function getApiV2AssetsAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAssetIdQueryKey>
  >({
    queryKey: getApiV2AssetsAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.assets[':asset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAssetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2AssetsAssetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2AssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAssetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2AssetsAssetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2DagsDagIdAssetsQueuedEventsQueryKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/assets/queuedEvents', args] as const
}

export function getApiV2DagsDagIdAssetsQueuedEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdAssetsQueuedEventsQueryKey>
  >({
    queryKey: getApiV2DagsDagIdAssetsQueuedEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].assets.queuedEvents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdAssetsQueuedEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdAssetsQueuedEventsQueryKey>
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
      ...getApiV2DagsDagIdAssetsQueuedEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdAssetsQueuedEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdAssetsQueuedEventsQueryKey>
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
      ...getApiV2DagsDagIdAssetsQueuedEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2DagsDagIdAssetsQueuedEventsMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/assets/queuedEvents', 'DELETE'] as const
}

export function getDeleteApiV2DagsDagIdAssetsQueuedEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2DagsDagIdAssetsQueuedEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$delete']
      >,
    ) {
      return parseResponse(client.api.v2.dags[':dag_id'].assets.queuedEvents.$delete(args, options))
    },
  })
}

export function useDeleteApiV2DagsDagIdAssetsQueuedEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$delete']
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
  const mutationDefaults = getDeleteApiV2DagsDagIdAssetsQueuedEventsMutationOptions<
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

export function getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/assets/:asset_id/queuedEvents', args] as const
}

export function getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryKey>
  >({
    queryKey: getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].assets[':asset_id'].queuedEvents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdAssetsAssetIdQueuedEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryKey>
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
      ...getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdAssetsAssetIdQueuedEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryKey>
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
      ...getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2DagsDagIdAssetsAssetIdQueuedEventsMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/assets/:asset_id/queuedEvents', 'DELETE'] as const
}

export function getDeleteApiV2DagsDagIdAssetsAssetIdQueuedEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2DagsDagIdAssetsAssetIdQueuedEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].assets[':asset_id'].queuedEvents.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV2DagsDagIdAssetsAssetIdQueuedEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$delete']
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
  const mutationDefaults = getDeleteApiV2DagsDagIdAssetsAssetIdQueuedEventsMutationOptions<
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

export function getApiV2BackfillsQueryKey(
  args: InferRequestType<typeof client.api.v2.backfills.$get>,
) {
  return ['api', '/api/v2/backfills', args] as const
}

export function getApiV2BackfillsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.backfills.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BackfillsQueryKey>
  >({
    queryKey: getApiV2BackfillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.backfills.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Backfills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.backfills.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BackfillsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2BackfillsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Backfills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.backfills.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BackfillsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2BackfillsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV2BackfillsMutationKey() {
  return ['api', '/api/v2/backfills', 'POST'] as const
}

export function getPostApiV2BackfillsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.backfills.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2BackfillsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.backfills.$post>) {
      return parseResponse(client.api.v2.backfills.$post(args, options))
    },
  })
}

export function usePostApiV2Backfills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.backfills.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2BackfillsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2BackfillsBackfillIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>,
) {
  return ['api', '/api/v2/backfills/:backfill_id', args] as const
}

export function getApiV2BackfillsBackfillIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BackfillsBackfillIdQueryKey>
  >({
    queryKey: getApiV2BackfillsBackfillIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.backfills[':backfill_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2BackfillsBackfillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BackfillsBackfillIdQueryKey>
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
      ...getApiV2BackfillsBackfillIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2BackfillsBackfillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BackfillsBackfillIdQueryKey>
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
      ...getApiV2BackfillsBackfillIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2BackfillsBackfillIdDagRunsQueryKey(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>,
) {
  return ['api', '/api/v2/backfills/:backfill_id/dag_runs', args] as const
}

export function getApiV2BackfillsBackfillIdDagRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BackfillsBackfillIdDagRunsQueryKey>
  >({
    queryKey: getApiV2BackfillsBackfillIdDagRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.backfills[':backfill_id'].dag_runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2BackfillsBackfillIdDagRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BackfillsBackfillIdDagRunsQueryKey>
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
      ...getApiV2BackfillsBackfillIdDagRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2BackfillsBackfillIdDagRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BackfillsBackfillIdDagRunsQueryKey>
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
      ...getApiV2BackfillsBackfillIdDagRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV2BackfillsBackfillIdPauseMutationKey() {
  return ['api', '/api/v2/backfills/:backfill_id/pause', 'PUT'] as const
}

export function getPutApiV2BackfillsBackfillIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2BackfillsBackfillIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>,
    ) {
      return parseResponse(client.api.v2.backfills[':backfill_id'].pause.$put(args, options))
    },
  })
}

export function usePutApiV2BackfillsBackfillIdPause<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV2BackfillsBackfillIdPauseMutationOptions<
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

export function getPutApiV2BackfillsBackfillIdUnpauseMutationKey() {
  return ['api', '/api/v2/backfills/:backfill_id/unpause', 'PUT'] as const
}

export function getPutApiV2BackfillsBackfillIdUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['unpause']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['unpause']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2BackfillsBackfillIdUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['unpause']['$put']>,
    ) {
      return parseResponse(client.api.v2.backfills[':backfill_id'].unpause.$put(args, options))
    },
  })
}

export function usePutApiV2BackfillsBackfillIdUnpause<
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
                ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['unpause']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['unpause']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV2BackfillsBackfillIdUnpauseMutationOptions<
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

export function getPutApiV2BackfillsBackfillIdCancelMutationKey() {
  return ['api', '/api/v2/backfills/:backfill_id/cancel', 'PUT'] as const
}

export function getPutApiV2BackfillsBackfillIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2BackfillsBackfillIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['cancel']['$put']>,
    ) {
      return parseResponse(client.api.v2.backfills[':backfill_id'].cancel.$put(args, options))
    },
  })
}

export function usePutApiV2BackfillsBackfillIdCancel<
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
                ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['cancel']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['cancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV2BackfillsBackfillIdCancelMutationOptions<
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

export function getPostApiV2BackfillsDryRunMutationKey() {
  return ['api', '/api/v2/backfills/dry_run', 'POST'] as const
}

export function getPostApiV2BackfillsDryRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.dry_run.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.backfills.dry_run.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2BackfillsDryRunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.backfills.dry_run.$post>) {
      return parseResponse(client.api.v2.backfills.dry_run.$post(args, options))
    },
  })
}

export function usePostApiV2BackfillsDryRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.dry_run.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.backfills.dry_run.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2BackfillsDryRunMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ConnectionsConnectionIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>,
) {
  return ['api', '/api/v2/connections/:connection_id', args] as const
}

export function getApiV2ConnectionsConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ConnectionsConnectionIdQueryKey>
  >({
    queryKey: getApiV2ConnectionsConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.connections[':connection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2ConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConnectionsConnectionIdQueryKey>
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
      ...getApiV2ConnectionsConnectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2ConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConnectionsConnectionIdQueryKey>
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
      ...getApiV2ConnectionsConnectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2ConnectionsConnectionIdMutationKey() {
  return ['api', '/api/v2/connections/:connection_id', 'DELETE'] as const
}

export function getDeleteApiV2ConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2ConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$delete']>,
    ) {
      return parseResponse(client.api.v2.connections[':connection_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV2ConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV2ConnectionsConnectionIdMutationOptions<
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

export function getPatchApiV2ConnectionsConnectionIdMutationKey() {
  return ['api', '/api/v2/connections/:connection_id', 'PATCH'] as const
}

export function getPatchApiV2ConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2ConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$patch']>,
    ) {
      return parseResponse(client.api.v2.connections[':connection_id'].$patch(args, options))
    },
  })
}

export function usePatchApiV2ConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2ConnectionsConnectionIdMutationOptions<
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

export function getApiV2ConnectionsEnqueueTestQueryKey(
  args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/connections/enqueue-test', keyArgs] as const
}

export function getApiV2ConnectionsEnqueueTestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ConnectionsEnqueueTestQueryKey>
  >({
    queryKey: getApiV2ConnectionsEnqueueTestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.connections['enqueue-test'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2ConnectionsEnqueueTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConnectionsEnqueueTestQueryKey>
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
      ...getApiV2ConnectionsEnqueueTestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2ConnectionsEnqueueTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConnectionsEnqueueTestQueryKey>
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
      ...getApiV2ConnectionsEnqueueTestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV2ConnectionsEnqueueTestMutationKey() {
  return ['api', '/api/v2/connections/enqueue-test', 'POST'] as const
}

export function getPostApiV2ConnectionsEnqueueTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ConnectionsEnqueueTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$post']>,
    ) {
      return parseResponse(client.api.v2.connections['enqueue-test'].$post(args, options))
    },
  })
}

export function usePostApiV2ConnectionsEnqueueTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2ConnectionsEnqueueTestMutationOptions<
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

export function getApiV2ConnectionsQueryKey(
  args: InferRequestType<typeof client.api.v2.connections.$get>,
) {
  return ['api', '/api/v2/connections', args] as const
}

export function getApiV2ConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ConnectionsQueryKey>
  >({
    queryKey: getApiV2ConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Connections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.connections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2ConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Connections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.connections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2ConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV2ConnectionsMutationKey() {
  return ['api', '/api/v2/connections', 'POST'] as const
}

export function getPostApiV2ConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.connections.$post>) {
      return parseResponse(client.api.v2.connections.$post(args, options))
    },
  })
}

export function usePostApiV2Connections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.connections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2ConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV2ConnectionsMutationKey() {
  return ['api', '/api/v2/connections', 'PATCH'] as const
}

export function getPatchApiV2ConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.connections.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2ConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.connections.$patch>) {
      return parseResponse(client.api.v2.connections.$patch(args, options))
    },
  })
}

export function usePatchApiV2Connections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.connections.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2ConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV2ConnectionsTestMutationKey() {
  return ['api', '/api/v2/connections/test', 'POST'] as const
}

export function getPostApiV2ConnectionsTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.connections.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ConnectionsTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.connections.test.$post>) {
      return parseResponse(client.api.v2.connections.test.$post(args, options))
    },
  })
}

export function usePostApiV2ConnectionsTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.test.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.connections.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2ConnectionsTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV2ConnectionsDefaultsMutationKey() {
  return ['api', '/api/v2/connections/defaults', 'POST'] as const
}

export function getPostApiV2ConnectionsDefaultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.defaults.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ConnectionsDefaultsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v2.connections.defaults.$post(undefined, options))
    },
  })
}

export function usePostApiV2ConnectionsDefaults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.connections.defaults.$post>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2ConnectionsDefaultsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2DagsDagIdDagRunsDagRunIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id', args] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id', 'DELETE'] as const
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2DagsDagIdDagRunsDagRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']
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
  const mutationDefaults = getDeleteApiV2DagsDagIdDagRunsDagRunIdMutationOptions<
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

export function getPatchApiV2DagsDagIdDagRunsDagRunIdMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id', 'PATCH'] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdDagRunsDagRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunId<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']
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
  const mutationDefaults = getPatchApiV2DagsDagIdDagRunsDagRunIdMutationOptions<
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

export function getApiV2DagsDagIdDagRunsQueryKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns', args] as const
}

export function getApiV2DagsDagIdDagRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsQueryKey>
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
      ...getApiV2DagsDagIdDagRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsQueryKey>
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
      ...getApiV2DagsDagIdDagRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV2DagsDagIdDagRunsMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns', 'POST'] as const
}

export function getPostApiV2DagsDagIdDagRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdDagRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$post']>,
    ) {
      return parseResponse(client.api.v2.dags[':dag_id'].dagRuns.$post(args, options))
    },
  })
}

export function usePostApiV2DagsDagIdDagRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2DagsDagIdDagRunsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV2DagsDagIdDagRunsMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns', 'PATCH'] as const
}

export function getPatchApiV2DagsDagIdDagRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdDagRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$patch']>,
    ) {
      return parseResponse(client.api.v2.dags[':dag_id'].dagRuns.$patch(args, options))
    },
  })
}

export function usePatchApiV2DagsDagIdDagRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2DagsDagIdDagRunsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/upstreamAssetEvents', args] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamAssetEvents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV2DagsDagIdDagRunsDagRunIdClearMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/clear', 'POST'] as const
}

export function getPostApiV2DagsDagIdDagRunsDagRunIdClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdDagRunsDagRunIdClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].clear.$post(args, options),
      )
    },
  })
}

export function usePostApiV2DagsDagIdDagRunsDagRunIdClear<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
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
  const mutationDefaults = getPostApiV2DagsDagIdDagRunsDagRunIdClearMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdWaitQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/wait', args] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdWaitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdWaitQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdWaitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].wait.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdWait<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdWaitQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdWaitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdWait<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdWaitQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdWaitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV2DagsDagIdDagRunsListMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/list', 'POST'] as const
}

export function getPostApiV2DagsDagIdDagRunsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['list']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdDagRunsListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['list']['$post']>,
    ) {
      return parseResponse(client.api.v2.dags[':dag_id'].dagRuns.list.$post(args, options))
    },
  })
}

export function usePostApiV2DagsDagIdDagRunsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['list']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2DagsDagIdDagRunsListMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV2DagsDagIdClearDagRunsMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/clearDagRuns', 'POST'] as const
}

export function getPostApiV2DagsDagIdClearDagRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['clearDagRuns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearDagRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdClearDagRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearDagRuns']['$post']>,
    ) {
      return parseResponse(client.api.v2.dags[':dag_id'].clearDagRuns.$post(args, options))
    },
  })
}

export function usePostApiV2DagsDagIdClearDagRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['clearDagRuns']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearDagRuns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2DagsDagIdClearDagRunsMutationOptions<
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

export function getPostApiV2DagsDagIdClearPartitionsMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/clearPartitions', 'POST'] as const
}

export function getPostApiV2DagsDagIdClearPartitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['clearPartitions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearPartitions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdClearPartitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearPartitions']['$post']>,
    ) {
      return parseResponse(client.api.v2.dags[':dag_id'].clearPartitions.$post(args, options))
    },
  })
}

export function usePostApiV2DagsDagIdClearPartitions<
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
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['clearPartitions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearPartitions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2DagsDagIdClearPartitionsMutationOptions<
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

export function getApiV2DagSourcesDagIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/dagSources/:dag_id', keyArgs] as const
}

export function getApiV2DagSourcesDagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagSourcesDagIdQueryKey>
  >({
    queryKey: getApiV2DagSourcesDagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dagSources[':dag_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagSourcesDagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagSourcesDagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2DagSourcesDagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2DagSourcesDagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagSourcesDagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2DagSourcesDagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2DagBundlesQueryKey(
  args: InferRequestType<typeof client.api.v2.dagBundles.$get>,
) {
  return ['api', '/api/v2/dagBundles', args] as const
}

export function getApiV2DagBundlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.dagBundles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagBundlesQueryKey>
  >({
    queryKey: getApiV2DagBundlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dagBundles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagBundles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dagBundles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagBundlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2DagBundlesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2DagBundles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dagBundles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagBundlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2DagBundlesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2DagBundlesBundleNameQueryKey(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>,
) {
  return ['api', '/api/v2/dagBundles/:bundle_name', args] as const
}

export function getApiV2DagBundlesBundleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagBundlesBundleNameQueryKey>
  >({
    queryKey: getApiV2DagBundlesBundleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dagBundles[':bundle_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagBundlesBundleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagBundlesBundleNameQueryKey>
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
      ...getApiV2DagBundlesBundleNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagBundlesBundleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagBundlesBundleNameQueryKey>
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
      ...getApiV2DagBundlesBundleNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagBundlesBundleNameFilesQueryKey(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>,
) {
  return ['api', '/api/v2/dagBundles/:bundle_name/files', args] as const
}

export function getApiV2DagBundlesBundleNameFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagBundlesBundleNameFilesQueryKey>
  >({
    queryKey: getApiV2DagBundlesBundleNameFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dagBundles[':bundle_name'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagBundlesBundleNameFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagBundlesBundleNameFilesQueryKey>
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
      ...getApiV2DagBundlesBundleNameFilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagBundlesBundleNameFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagBundlesBundleNameFilesQueryKey>
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
      ...getApiV2DagBundlesBundleNameFilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagStatsQueryKey(
  args: InferRequestType<typeof client.api.v2.dagStats.$get>,
) {
  return ['api', '/api/v2/dagStats', args] as const
}

export function getApiV2DagStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.dagStats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagStatsQueryKey>
  >({
    queryKey: getApiV2DagStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dagStats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dagStats.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2DagStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2DagStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dagStats.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2DagStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2ConfigQueryKey(args: InferRequestType<typeof client.api.v2.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/config', keyArgs] as const
}

export function getApiV2ConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ConfigQueryKey>
  >({
    queryKey: getApiV2ConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.config.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2ConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.config.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2ConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2ConfigSectionSectionOptionOptionQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/config/section/:section/option/:option', keyArgs] as const
}

export function getApiV2ConfigSectionSectionOptionOptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.config.section)[':section']['option'][':option']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ConfigSectionSectionOptionOptionQueryKey>
  >({
    queryKey: getApiV2ConfigSectionSectionOptionOptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.config.section[':section'].option[':option'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2ConfigSectionSectionOptionOption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.config.section)[':section']['option'][':option']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConfigSectionSectionOptionOptionQueryKey>
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
      ...getApiV2ConfigSectionSectionOptionOptionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2ConfigSectionSectionOptionOption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.config.section)[':section']['option'][':option']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ConfigSectionSectionOptionOptionQueryKey>
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
      ...getApiV2ConfigSectionSectionOptionOptionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagWarningsQueryKey(
  args: InferRequestType<typeof client.api.v2.dagWarnings.$get>,
) {
  return ['api', '/api/v2/dagWarnings', args] as const
}

export function getApiV2DagWarningsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.dagWarnings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagWarningsQueryKey>
  >({
    queryKey: getApiV2DagWarningsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dagWarnings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagWarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dagWarnings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagWarningsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2DagWarningsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2DagWarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dagWarnings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagWarningsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2DagWarningsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2DagsQueryKey(args: InferRequestType<typeof client.api.v2.dags.$get>) {
  return ['api', '/api/v2/dags', args] as const
}

export function getApiV2DagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.dags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsQueryKey>
  >({
    queryKey: getApiV2DagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Dags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2DagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Dags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2DagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchApiV2DagsMutationKey() {
  return ['api', '/api/v2/dags', 'PATCH'] as const
}

export function getPatchApiV2DagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.dags.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.dags.$patch>) {
      return parseResponse(client.api.v2.dags.$patch(args, options))
    },
  })
}

export function usePatchApiV2Dags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v2.dags.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2DagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id', args] as const
}

export function getApiV2DagsDagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdQueryKey>
  >({
    queryKey: getApiV2DagsDagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2DagsDagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2DagsDagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV2DagsDagIdMutationKey() {
  return ['api', '/api/v2/dags/:dag_id', 'DELETE'] as const
}

export function getDeleteApiV2DagsDagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2DagsDagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$delete']>) {
      return parseResponse(client.api.v2.dags[':dag_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV2DagsDagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV2DagsDagIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV2DagsDagIdMutationKey() {
  return ['api', '/api/v2/dags/:dag_id', 'PATCH'] as const
}

export function getPatchApiV2DagsDagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$patch']>) {
      return parseResponse(client.api.v2.dags[':dag_id'].$patch(args, options))
    },
  })
}

export function usePatchApiV2DagsDagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2DagsDagIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2DagsDagIdDetailsQueryKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/details', args] as const
}

export function getApiV2DagsDagIdDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDetailsQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDetailsQueryKey>
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
      ...getApiV2DagsDagIdDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDetailsQueryKey>
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
      ...getApiV2DagsDagIdDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiV2DagsBulkMutationKey() {
  return ['api', '/api/v2/dags/bulk', 'PATCH'] as const
}

export function getPatchApiV2DagsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.bulk.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.dags.bulk.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.dags.bulk.$patch>) {
      return parseResponse(client.api.v2.dags.bulk.$patch(args, options))
    },
  })
}

export function usePatchApiV2DagsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.bulk.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.dags.bulk.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2DagsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV2DagsDagIdFavoriteMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/favorite', 'POST'] as const
}

export function getPostApiV2DagsDagIdFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['favorite']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['favorite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdFavoriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['favorite']['$post']>,
    ) {
      return parseResponse(client.api.v2.dags[':dag_id'].favorite.$post(args, options))
    },
  })
}

export function usePostApiV2DagsDagIdFavorite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['favorite']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['favorite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2DagsDagIdFavoriteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV2DagsDagIdUnfavoriteMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/unfavorite', 'POST'] as const
}

export function getPostApiV2DagsDagIdUnfavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['unfavorite']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['unfavorite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdUnfavoriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['unfavorite']['$post']>,
    ) {
      return parseResponse(client.api.v2.dags[':dag_id'].unfavorite.$post(args, options))
    },
  })
}

export function usePostApiV2DagsDagIdUnfavorite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['unfavorite']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['unfavorite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2DagsDagIdUnfavoriteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2EventLogsEventLogIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>,
) {
  return ['api', '/api/v2/eventLogs/:event_log_id', args] as const
}

export function getApiV2EventLogsEventLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EventLogsEventLogIdQueryKey>
  >({
    queryKey: getApiV2EventLogsEventLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.eventLogs[':event_log_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2EventLogsEventLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2EventLogsEventLogIdQueryKey>
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
      ...getApiV2EventLogsEventLogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2EventLogsEventLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2EventLogsEventLogIdQueryKey>
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
      ...getApiV2EventLogsEventLogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2EventLogsQueryKey(
  args: InferRequestType<typeof client.api.v2.eventLogs.$get>,
) {
  return ['api', '/api/v2/eventLogs', args] as const
}

export function getApiV2EventLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.eventLogs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EventLogsQueryKey>
  >({
    queryKey: getApiV2EventLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.eventLogs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2EventLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.eventLogs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2EventLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2EventLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2EventLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.eventLogs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2EventLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2EventLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/links',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2ImportErrorsImportErrorIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>,
) {
  return ['api', '/api/v2/importErrors/:import_error_id', args] as const
}

export function getApiV2ImportErrorsImportErrorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ImportErrorsImportErrorIdQueryKey>
  >({
    queryKey: getApiV2ImportErrorsImportErrorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.importErrors[':import_error_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2ImportErrorsImportErrorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ImportErrorsImportErrorIdQueryKey>
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
      ...getApiV2ImportErrorsImportErrorIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2ImportErrorsImportErrorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ImportErrorsImportErrorIdQueryKey>
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
      ...getApiV2ImportErrorsImportErrorIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2ImportErrorsQueryKey(
  args: InferRequestType<typeof client.api.v2.importErrors.$get>,
) {
  return ['api', '/api/v2/importErrors', args] as const
}

export function getApiV2ImportErrorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.importErrors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ImportErrorsQueryKey>
  >({
    queryKey: getApiV2ImportErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.importErrors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2ImportErrors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.importErrors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ImportErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2ImportErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2ImportErrors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.importErrors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ImportErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2ImportErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2JobsQueryKey(args: InferRequestType<typeof client.api.v2.jobs.$get>) {
  return ['api', '/api/v2/jobs', args] as const
}

export function getApiV2JobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2JobsQueryKey>
  >({
    queryKey: getApiV2JobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2JobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2JobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2JobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2JobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2PluginsQueryKey(args: InferRequestType<typeof client.api.v2.plugins.$get>) {
  return ['api', '/api/v2/plugins', args] as const
}

export function getApiV2PluginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.plugins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PluginsQueryKey>
  >({
    queryKey: getApiV2PluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.plugins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Plugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.plugins.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2PluginsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Plugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.plugins.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2PluginsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2PluginsImportErrorsQueryKey() {
  return ['api', '/api/v2/plugins/importErrors'] as const
}

export function getApiV2PluginsImportErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PluginsImportErrorsQueryKey>
  >({
    queryKey: getApiV2PluginsImportErrorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.plugins.importErrors.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2PluginsImportErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PluginsImportErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2PluginsImportErrorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2PluginsImportErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PluginsImportErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2PluginsImportErrorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2PoolsPoolNameQueryKey(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>,
) {
  return ['api', '/api/v2/pools/:pool_name', args] as const
}

export function getApiV2PoolsPoolNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PoolsPoolNameQueryKey>
  >({
    queryKey: getApiV2PoolsPoolNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.pools[':pool_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2PoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PoolsPoolNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2PoolsPoolNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2PoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PoolsPoolNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2PoolsPoolNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV2PoolsPoolNameMutationKey() {
  return ['api', '/api/v2/pools/:pool_name', 'DELETE'] as const
}

export function getDeleteApiV2PoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PoolsPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$delete']>,
    ) {
      return parseResponse(client.api.v2.pools[':pool_name'].$delete(args, options))
    },
  })
}

export function useDeleteApiV2PoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV2PoolsPoolNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV2PoolsPoolNameMutationKey() {
  return ['api', '/api/v2/pools/:pool_name', 'PATCH'] as const
}

export function getPatchApiV2PoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2PoolsPoolNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$patch']>) {
      return parseResponse(client.api.v2.pools[':pool_name'].$patch(args, options))
    },
  })
}

export function usePatchApiV2PoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2PoolsPoolNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2PoolsQueryKey(args: InferRequestType<typeof client.api.v2.pools.$get>) {
  return ['api', '/api/v2/pools', args] as const
}

export function getApiV2PoolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.pools.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2PoolsQueryKey>
  >({
    queryKey: getApiV2PoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.pools.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Pools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.pools.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2PoolsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Pools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.pools.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2PoolsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV2PoolsMutationKey() {
  return ['api', '/api/v2/pools', 'POST'] as const
}

export function getPostApiV2PoolsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.pools.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PoolsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.pools.$post>) {
      return parseResponse(client.api.v2.pools.$post(args, options))
    },
  })
}

export function usePostApiV2Pools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v2.pools.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2PoolsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiV2PoolsMutationKey() {
  return ['api', '/api/v2/pools', 'PATCH'] as const
}

export function getPatchApiV2PoolsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.pools.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2PoolsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.pools.$patch>) {
      return parseResponse(client.api.v2.pools.$patch(args, options))
    },
  })
}

export function usePatchApiV2Pools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v2.pools.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2PoolsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2ProvidersQueryKey(
  args: InferRequestType<typeof client.api.v2.providers.$get>,
) {
  return ['api', '/api/v2/providers', args] as const
}

export function getApiV2ProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.providers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ProvidersQueryKey>
  >({
    queryKey: getApiV2ProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Providers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2ProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Providers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2ProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2ProvidersProviderNameQueryKey(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>,
) {
  return ['api', '/api/v2/providers/:provider_name', args] as const
}

export function getApiV2ProvidersProviderNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ProvidersProviderNameQueryKey>
  >({
    queryKey: getApiV2ProvidersProviderNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.providers[':provider_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2ProvidersProviderName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ProvidersProviderNameQueryKey>
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
      ...getApiV2ProvidersProviderNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2ProvidersProviderName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ProvidersProviderNameQueryKey>
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
      ...getApiV2ProvidersProviderNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AssetsAssetIdStateStoreQueryKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>,
) {
  return ['api', '/api/v2/assets/:asset_id/state-store', args] as const
}

export function getApiV2AssetsAssetIdStateStoreQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAssetIdStateStoreQueryKey>
  >({
    queryKey: getApiV2AssetsAssetIdStateStoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.assets[':asset_id']['state-store'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AssetsAssetIdStateStore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAssetIdStateStoreQueryKey>
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
      ...getApiV2AssetsAssetIdStateStoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AssetsAssetIdStateStore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAssetIdStateStoreQueryKey>
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
      ...getApiV2AssetsAssetIdStateStoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2AssetsAssetIdStateStoreMutationKey() {
  return ['api', '/api/v2/assets/:asset_id/state-store', 'DELETE'] as const
}

export function getDeleteApiV2AssetsAssetIdStateStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AssetsAssetIdStateStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$delete']>,
    ) {
      return parseResponse(client.api.v2.assets[':asset_id']['state-store'].$delete(args, options))
    },
  })
}

export function useDeleteApiV2AssetsAssetIdStateStore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV2AssetsAssetIdStateStoreMutationOptions<
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

export function getApiV2AssetsAssetIdStateStoreKeyQueryKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>,
) {
  return ['api', '/api/v2/assets/:asset_id/state-store/:key', args] as const
}

export function getApiV2AssetsAssetIdStateStoreKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAssetIdStateStoreKeyQueryKey>
  >({
    queryKey: getApiV2AssetsAssetIdStateStoreKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.assets[':asset_id']['state-store'][':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AssetsAssetIdStateStoreKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAssetIdStateStoreKeyQueryKey>
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
      ...getApiV2AssetsAssetIdStateStoreKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AssetsAssetIdStateStoreKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AssetsAssetIdStateStoreKeyQueryKey>
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
      ...getApiV2AssetsAssetIdStateStoreKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV2AssetsAssetIdStateStoreKeyMutationKey() {
  return ['api', '/api/v2/assets/:asset_id/state-store/:key', 'PUT'] as const
}

export function getPutApiV2AssetsAssetIdStateStoreKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AssetsAssetIdStateStoreKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.assets[':asset_id']['state-store'][':key'].$put(args, options),
      )
    },
  })
}

export function usePutApiV2AssetsAssetIdStateStoreKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV2AssetsAssetIdStateStoreKeyMutationOptions<
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

export function getDeleteApiV2AssetsAssetIdStateStoreKeyMutationKey() {
  return ['api', '/api/v2/assets/:asset_id/state-store/:key', 'DELETE'] as const
}

export function getDeleteApiV2AssetsAssetIdStateStoreKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AssetsAssetIdStateStoreKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.assets[':asset_id']['state-store'][':key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV2AssetsAssetIdStateStoreKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$delete']
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
  const mutationDefaults = getDeleteApiV2AssetsAssetIdStateStoreKeyMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          'state-store'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store',
    'DELETE',
  ] as const
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          'state-store'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$delete']
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
    getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          'state-store'
        ][':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key',
    'PUT',
  ] as const
}

export function getPutApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          'state-store'
        ][':key'].$put(args, options),
      )
    },
  })
}

export function usePutApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$put']
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
    getPutApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationOptions<
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

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key',
    'DELETE',
  ] as const
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          'state-store'
        ][':key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$delete']
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
    getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationOptions<
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

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key',
    'PATCH',
  ] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          'state-store'
        ][':key'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$patch']
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
    getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
          ':xcom_key'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key',
    'DELETE',
  ] as const
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
          ':xcom_key'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$delete']
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
    getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyMutationOptions<
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

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key',
    'PATCH',
  ] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
          ':xcom_key'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$patch']
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
    getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].xcomEntries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries',
    'POST',
  ] as const
}

export function getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].xcomEntries.$post(args, options),
      )
    },
  })
}

export function usePostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$post']
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
    getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id', args] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id',
    'DELETE',
  ] as const
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$delete']
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
  const mutationDefaults = getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationOptions<
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

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id',
    'PATCH',
  ] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
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
  const mutationDefaults = getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/listMapped',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].listMapped.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMapped<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMapped<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/dependencies',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryKey
    >
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].dependencies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/dependencies',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].dependencies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/tries',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/tries',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].tries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index',
    'PATCH',
  ] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
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
    getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances', args] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances', 'PATCH'] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstances<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$patch']
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
  const mutationDefaults = getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesMutationOptions<
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

export function getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/list', 'POST'] as const
}

export function getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['list']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['list']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['list']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.list.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesList<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['list']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['list']['$post']
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
  const mutationDefaults = getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/tries/:task_try_number',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries[
          ':task_try_number'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/tries/:task_try_number',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryKey
    >
  >({
    queryKey:
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].tries[':task_try_number'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV2DagsDagIdClearTaskInstancesMutationKey() {
  return ['api', '/api/v2/dags/:dag_id/clearTaskInstances', 'POST'] as const
}

export function getPostApiV2DagsDagIdClearTaskInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['clearTaskInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearTaskInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2DagsDagIdClearTaskInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearTaskInstances']['$post']>,
    ) {
      return parseResponse(client.api.v2.dags[':dag_id'].clearTaskInstances.$post(args, options))
    },
  })
}

export function usePostApiV2DagsDagIdClearTaskInstances<
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
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['clearTaskInstances']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearTaskInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2DagsDagIdClearTaskInstancesMutationOptions<
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

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskGroupInstances/:group_id',
    'PATCH',
  ] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskGroupInstances[':group_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupId<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['$patch']
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
    getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdMutationOptions<
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

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskGroupInstances/:group_id/dry_run',
    'PATCH',
  ] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['dry_run']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['dry_run']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['dry_run']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskGroupInstances[
          ':group_id'
        ].dry_run.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRun<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['dry_run']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['dry_run']['$patch']
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
    getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunMutationOptions<
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

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/dry_run',
    'PATCH',
  ] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dry_run']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dry_run']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dry_run']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].dry_run.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRun<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dry_run']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dry_run']['$patch']
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
    getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunMutationOptions<
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

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/dry_run',
    'PATCH',
  ] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dry_run']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dry_run']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dry_run']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].dry_run.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRun<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dry_run']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dry_run']['$patch']
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
    getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunMutationOptions<
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

export function getApiV2DagsDagIdTasksQueryKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/tasks', args] as const
}

export function getApiV2DagsDagIdTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdTasksQueryKey>
  >({
    queryKey: getApiV2DagsDagIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2DagsDagIdTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2DagsDagIdTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2DagsDagIdTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/tasks/:task_id', args] as const
}

export function getApiV2DagsDagIdTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdTasksTaskIdQueryKey>
  >({
    queryKey: getApiV2DagsDagIdTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].tasks[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdTasksTaskIdQueryKey>
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
      ...getApiV2DagsDagIdTasksTaskIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdTasksTaskIdQueryKey>
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
      ...getApiV2DagsDagIdTasksTaskIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2TriggersQueryKey(
  args: InferRequestType<typeof client.api.v2.triggers.$get>,
) {
  return ['api', '/api/v2/triggers', args] as const
}

export function getApiV2TriggersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.triggers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TriggersQueryKey>
  >({
    queryKey: getApiV2TriggersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.triggers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Triggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.triggers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2TriggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2TriggersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Triggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.triggers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2TriggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2TriggersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2TriggersTriggerIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>,
) {
  return ['api', '/api/v2/triggers/:trigger_id', args] as const
}

export function getApiV2TriggersTriggerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TriggersTriggerIdQueryKey>
  >({
    queryKey: getApiV2TriggersTriggerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.triggers[':trigger_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2TriggersTriggerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2TriggersTriggerIdQueryKey>
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
      ...getApiV2TriggersTriggerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2TriggersTriggerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2TriggersTriggerIdQueryKey>
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
      ...getApiV2TriggersTriggerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2VariablesVariableKeyQueryKey(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>,
) {
  return ['api', '/api/v2/variables/:variable_key', args] as const
}

export function getApiV2VariablesVariableKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VariablesVariableKeyQueryKey>
  >({
    queryKey: getApiV2VariablesVariableKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.variables[':variable_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2VariablesVariableKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2VariablesVariableKeyQueryKey>
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
      ...getApiV2VariablesVariableKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2VariablesVariableKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2VariablesVariableKeyQueryKey>
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
      ...getApiV2VariablesVariableKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV2VariablesVariableKeyMutationKey() {
  return ['api', '/api/v2/variables/:variable_key', 'DELETE'] as const
}

export function getDeleteApiV2VariablesVariableKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2VariablesVariableKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$delete']>,
    ) {
      return parseResponse(client.api.v2.variables[':variable_key'].$delete(args, options))
    },
  })
}

export function useDeleteApiV2VariablesVariableKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV2VariablesVariableKeyMutationOptions<
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

export function getPatchApiV2VariablesVariableKeyMutationKey() {
  return ['api', '/api/v2/variables/:variable_key', 'PATCH'] as const
}

export function getPatchApiV2VariablesVariableKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2VariablesVariableKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$patch']>,
    ) {
      return parseResponse(client.api.v2.variables[':variable_key'].$patch(args, options))
    },
  })
}

export function usePatchApiV2VariablesVariableKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2VariablesVariableKeyMutationOptions<
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

export function getApiV2VariablesQueryKey(
  args: InferRequestType<typeof client.api.v2.variables.$get>,
) {
  return ['api', '/api/v2/variables', args] as const
}

export function getApiV2VariablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.variables.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VariablesQueryKey>
  >({
    queryKey: getApiV2VariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.variables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Variables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.variables.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2VariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2VariablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Variables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.variables.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2VariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2VariablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV2VariablesMutationKey() {
  return ['api', '/api/v2/variables', 'POST'] as const
}

export function getPostApiV2VariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.variables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2VariablesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.variables.$post>) {
      return parseResponse(client.api.v2.variables.$post(args, options))
    },
  })
}

export function usePostApiV2Variables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.variables.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2VariablesMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV2VariablesMutationKey() {
  return ['api', '/api/v2/variables', 'PATCH'] as const
}

export function getPatchApiV2VariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.variables.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2VariablesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.variables.$patch>) {
      return parseResponse(client.api.v2.variables.$patch(args, options))
    },
  })
}

export function usePatchApiV2Variables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.variables.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV2VariablesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/logs/:try_number',
    keyArgs,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
          ':try_number'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/externalLogUrl/:try_number',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryKey
    >
  >({
    queryKey:
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].externalLogUrl[':try_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV2ParseDagFileFileTokenMutationKey() {
  return ['api', '/api/v2/parseDagFile/:file_token', 'PUT'] as const
}

export function getPutApiV2ParseDagFileFileTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.parseDagFile)[':file_token']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.parseDagFile)[':file_token']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ParseDagFileFileTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.parseDagFile)[':file_token']['$put']>,
    ) {
      return parseResponse(client.api.v2.parseDagFile[':file_token'].$put(args, options))
    },
  })
}

export function usePutApiV2ParseDagFileFileToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.parseDagFile)[':file_token']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.parseDagFile)[':file_token']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV2ParseDagFileFileTokenMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2DagTagsQueryKey(args: InferRequestType<typeof client.api.v2.dagTags.$get>) {
  return ['api', '/api/v2/dagTags', args] as const
}

export function getApiV2DagTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.dagTags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagTagsQueryKey>
  >({
    queryKey: getApiV2DagTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dagTags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dagTags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2DagTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2DagTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.dagTags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2DagTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagVersionsDiffQueryKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/dagVersions/diff', args] as const
}

export function getApiV2DagsDagIdDagVersionsDiffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagVersionsDiffQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagVersionsDiffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagVersions.diff.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagVersionsDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagVersionsDiffQueryKey>
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
      ...getApiV2DagsDagIdDagVersionsDiffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagVersionsDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagVersionsDiffQueryKey>
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
      ...getApiV2DagsDagIdDagVersionsDiffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagVersionsVersionNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagVersions/:version_number', args] as const
}

export function getApiV2DagsDagIdDagVersionsVersionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagVersionsVersionNumberQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagVersionsVersionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagVersions[':version_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagVersionsVersionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagVersionsVersionNumberQueryKey>
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
      ...getApiV2DagsDagIdDagVersionsVersionNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagVersionsVersionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagVersionsVersionNumberQueryKey>
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
      ...getApiV2DagsDagIdDagVersionsVersionNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagVersionsQueryKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/dagVersions', args] as const
}

export function getApiV2DagsDagIdDagVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagVersionsQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagVersions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagVersionsQueryKey>
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
      ...getApiV2DagsDagIdDagVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagVersionsQueryKey>
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
      ...getApiV2DagsDagIdDagVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryKey
    >
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].hitlDetails.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsMutationKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails',
    'PATCH',
  ] as const
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].hitlDetails.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetails<
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
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$patch']
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
    getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsMutationOptions<
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

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails/tries/:try_number',
    args,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryKey
    >
  >({
    queryKey:
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].hitlDetails.tries[':try_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryKey
        >
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
      ...getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/hitlDetails', args] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryKey>
  >({
    queryKey: getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].hitlDetails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2DagsDagIdDagRunsDagRunIdHitlDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2DagsDagIdDagRunsDagRunIdHitlDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryKey>
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
      ...getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2MonitorHealthQueryKey() {
  return ['api', '/api/v2/monitor/health'] as const
}

export function getApiV2MonitorHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MonitorHealthQueryKey>
  >({
    queryKey: getApiV2MonitorHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.monitor.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2MonitorHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2MonitorHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2MonitorHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2MonitorHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2MonitorHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2MonitorHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2VersionQueryKey() {
  return ['api', '/api/v2/version'] as const
}

export function getApiV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionQueryKey>
  >({
    queryKey: getApiV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2VersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2VersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2VersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2VersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2AuthLoginQueryKey(
  args: InferRequestType<typeof client.api.v2.auth.login.$get>,
) {
  return ['api', '/api/v2/auth/login', args] as const
}

export function getApiV2AuthLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.auth.login.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthLoginQueryKey>
  >({
    queryKey: getApiV2AuthLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.auth.login.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2AuthLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.auth.login.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AuthLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2AuthLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2AuthLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.auth.login.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AuthLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2AuthLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2AuthCliMetadataQueryKey() {
  return ['api', '/api/v2/auth/cli/metadata'] as const
}

export function getApiV2AuthCliMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthCliMetadataQueryKey>
  >({
    queryKey: getApiV2AuthCliMetadataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.auth.cli.metadata.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AuthCliMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AuthCliMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2AuthCliMetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2AuthCliMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AuthCliMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2AuthCliMetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2AuthLogoutQueryKey() {
  return ['api', '/api/v2/auth/logout'] as const
}

export function getApiV2AuthLogoutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthLogoutQueryKey>
  >({
    queryKey: getApiV2AuthLogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.auth.logout.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AuthLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AuthLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2AuthLogoutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2AuthLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AuthLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2AuthLogoutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
