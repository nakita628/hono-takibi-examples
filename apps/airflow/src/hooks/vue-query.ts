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

export function getApiV2AssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.assets.$get>>,
) {
  return ['api', '/api/v2/assets', toValue(args)] as const
}

export function getApiV2AssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
          >,
          ReturnType<typeof getApiV2AssetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AssetsAliasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.assets.aliases.$get>>,
) {
  return ['api', '/api/v2/assets/aliases', toValue(args)] as const
}

export function getApiV2AssetsAliasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.assets.aliases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AssetsAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.assets.aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AssetsAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.assets.aliases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AssetsAliasesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AssetsAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.assets.aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AssetsAliasesAssetAliasIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>
  >,
) {
  return ['api', '/api/v2/assets/aliases/:asset_alias_id', toValue(args)] as const
}

export function getApiV2AssetsAliasesAssetAliasIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AssetsAliasesAssetAliasIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.assets.aliases[':asset_alias_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>
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
                  ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AssetsAliasesAssetAliasIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAliasesAssetAliasIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AssetsAliasesAssetAliasIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.assets.aliases[':asset_alias_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AssetsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.assets.events.$get>>,
) {
  return ['api', '/api/v2/assets/events', toValue(args)] as const
}

export function getApiV2AssetsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.assets.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AssetsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.assets.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AssetsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.assets.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AssetsEventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AssetsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.assets.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>
  >,
) {
  return ['api', '/api/v2/assets/:asset_id/queuedEvents', toValue(args)] as const
}

export function getApiV2AssetsAssetIdQueuedEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AssetsAssetIdQueuedEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.assets[':asset_id'].queuedEvents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AssetsAssetIdQueuedEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAssetIdQueuedEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AssetsAssetIdQueuedEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.assets[':asset_id'].queuedEvents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>>,
) {
  return ['api', '/api/v2/assets/:asset_id', toValue(args)] as const
}

export function getApiV2AssetsAssetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AssetsAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.assets[':asset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2AssetsAssetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AssetsAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.assets[':asset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdAssetsQueuedEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/assets/queuedEvents', toValue(args)] as const
}

export function getApiV2DagsDagIdAssetsQueuedEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdAssetsQueuedEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].assets.queuedEvents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2DagsDagIdAssetsQueuedEventsQueryKey>
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
            ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdAssetsQueuedEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdAssetsQueuedEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].assets.queuedEvents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
    >
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/assets/:asset_id/queuedEvents', toValue(args)] as const
}

export function getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].assets[':asset_id'].queuedEvents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdAssetsAssetIdQueuedEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].assets[':asset_id'].queuedEvents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.backfills.$get>>,
) {
  return ['api', '/api/v2/backfills', toValue(args)] as const
}

export function getApiV2BackfillsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.backfills.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BackfillsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.backfills.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Backfills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.backfills.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>
            >
          >,
          ReturnType<typeof getApiV2BackfillsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BackfillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BackfillsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.backfills.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>
  >,
) {
  return ['api', '/api/v2/backfills/:backfill_id', toValue(args)] as const
}

export function getApiV2BackfillsBackfillIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BackfillsBackfillIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.backfills[':backfill_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BackfillsBackfillIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BackfillsBackfillIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BackfillsBackfillIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.backfills[':backfill_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BackfillsBackfillIdDagRunsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
  >,
) {
  return ['api', '/api/v2/backfills/:backfill_id/dag_runs', toValue(args)] as const
}

export function getApiV2BackfillsBackfillIdDagRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BackfillsBackfillIdDagRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.backfills[':backfill_id'].dag_runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2BackfillsBackfillIdDagRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BackfillsBackfillIdDagRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BackfillsBackfillIdDagRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.backfills[':backfill_id'].dag_runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.backfills.dry_run.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.backfills.dry_run.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>
  >,
) {
  return ['api', '/api/v2/connections/:connection_id', toValue(args)] as const
}

export function getApiV2ConnectionsConnectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ConnectionsConnectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.connections[':connection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ConnectionsConnectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ConnectionsConnectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ConnectionsConnectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.connections[':connection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.connections)[':connection_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/connections/enqueue-test', keyArgs] as const
}

export function getApiV2ConnectionsEnqueueTestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ConnectionsEnqueueTestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.connections['enqueue-test'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ConnectionsEnqueueTestQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ConnectionsEnqueueTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ConnectionsEnqueueTestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.connections['enqueue-test'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.connections.$get>>,
) {
  return ['api', '/api/v2/connections', toValue(args)] as const
}

export function getApiV2ConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Connections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ConnectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id', toValue(args)] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdQueryKey>
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
            ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns', toValue(args)] as const
}

export function getApiV2DagsDagIdDagRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2DagsDagIdDagRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/upstreamAssetEvents',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamAssetEvents.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamAssetEvents.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
    >
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/wait', toValue(args)] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdWaitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdWaitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].wait.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdWaitQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdWaitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].wait.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/dagSources/:dag_id', keyArgs] as const
}

export function getApiV2DagSourcesDagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagSourcesDagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dagSources[':dag_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2DagSourcesDagIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagSourcesDagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagSourcesDagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dagSources[':dag_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagBundlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagBundles.$get>>,
) {
  return ['api', '/api/v2/dagBundles', toValue(args)] as const
}

export function getApiV2DagBundlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagBundles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagBundlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dagBundles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2DagBundles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagBundles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>
            >
          >,
          ReturnType<typeof getApiV2DagBundlesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagBundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagBundlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dagBundles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagBundlesBundleNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>
  >,
) {
  return ['api', '/api/v2/dagBundles/:bundle_name', toValue(args)] as const
}

export function getApiV2DagBundlesBundleNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagBundlesBundleNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dagBundles[':bundle_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2DagBundlesBundleNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagBundlesBundleNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagBundlesBundleNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dagBundles[':bundle_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagBundlesBundleNameFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>
  >,
) {
  return ['api', '/api/v2/dagBundles/:bundle_name/files', toValue(args)] as const
}

export function getApiV2DagBundlesBundleNameFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagBundlesBundleNameFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dagBundles[':bundle_name'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2DagBundlesBundleNameFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagBundlesBundleNameFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagBundlesBundleNameFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dagBundles[':bundle_name'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagStats.$get>>,
) {
  return ['api', '/api/v2/dagStats', toValue(args)] as const
}

export function getApiV2DagStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagStats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dagStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2DagStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagStats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>
            >
          >,
          ReturnType<typeof getApiV2DagStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dagStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/config', keyArgs] as const
}

export function getApiV2ConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
          >,
          ReturnType<typeof getApiV2ConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ConfigSectionSectionOptionOptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.config.section)[':section']['option'][':option']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/config/section/:section/option/:option', keyArgs] as const
}

export function getApiV2ConfigSectionSectionOptionOptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.config.section)[':section']['option'][':option']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ConfigSectionSectionOptionOptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.config.section[':section'].option[':option'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.config.section)[':section']['option'][':option']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2ConfigSectionSectionOptionOptionQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ConfigSectionSectionOptionOptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.config.section[':section'].option[':option'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagWarningsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagWarnings.$get>>,
) {
  return ['api', '/api/v2/dagWarnings', toValue(args)] as const
}

export function getApiV2DagWarningsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagWarnings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagWarningsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dagWarnings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2DagWarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagWarnings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>
            >
          >,
          ReturnType<typeof getApiV2DagWarningsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagWarningsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagWarningsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dagWarnings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dags.$get>>,
) {
  return ['api', '/api/v2/dags', toValue(args)] as const
}

export function getApiV2DagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Dags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
          >,
          ReturnType<typeof getApiV2DagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.dags.$patch>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>>,
) {
  return ['api', '/api/v2/dags/:dag_id', toValue(args)] as const
}

export function getApiV2DagsDagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2DagsDagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2DagsDagIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/details', toValue(args)] as const
}

export function getApiV2DagsDagIdDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2DagsDagIdDetailsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>
  >,
) {
  return ['api', '/api/v2/eventLogs/:event_log_id', toValue(args)] as const
}

export function getApiV2EventLogsEventLogIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EventLogsEventLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.eventLogs[':event_log_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EventLogsEventLogIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EventLogsEventLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EventLogsEventLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.eventLogs[':event_log_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EventLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.eventLogs.$get>>,
) {
  return ['api', '/api/v2/eventLogs', toValue(args)] as const
}

export function getApiV2EventLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.eventLogs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EventLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.eventLogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EventLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.eventLogs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>
            >
          >,
          ReturnType<typeof getApiV2EventLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EventLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EventLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.eventLogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/links',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ImportErrorsImportErrorIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>
  >,
) {
  return ['api', '/api/v2/importErrors/:import_error_id', toValue(args)] as const
}

export function getApiV2ImportErrorsImportErrorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ImportErrorsImportErrorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.importErrors[':import_error_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ImportErrorsImportErrorIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ImportErrorsImportErrorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ImportErrorsImportErrorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.importErrors[':import_error_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ImportErrorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.importErrors.$get>>,
) {
  return ['api', '/api/v2/importErrors', toValue(args)] as const
}

export function getApiV2ImportErrorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.importErrors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ImportErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.importErrors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ImportErrors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.importErrors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ImportErrorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ImportErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ImportErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.importErrors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2JobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.jobs.$get>>,
) {
  return ['api', '/api/v2/jobs', toValue(args)] as const
}

export function getApiV2JobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2JobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
          >,
          ReturnType<typeof getApiV2JobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2JobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2JobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PluginsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.plugins.$get>>,
) {
  return ['api', '/api/v2/plugins', toValue(args)] as const
}

export function getApiV2PluginsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.plugins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.plugins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Plugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.plugins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
          >,
          ReturnType<typeof getApiV2PluginsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PluginsImportErrorsQueryKey() {
  return ['api', '/api/v2/plugins/importErrors'] as const
}

export function getApiV2PluginsImportErrorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2PluginsImportErrorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.plugins.importErrors.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2PluginsImportErrorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PluginsImportErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2PluginsImportErrorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.plugins.importErrors.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PoolsPoolNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>>,
) {
  return ['api', '/api/v2/pools/:pool_name', toValue(args)] as const
}

export function getApiV2PoolsPoolNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PoolsPoolNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.pools[':pool_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PoolsPoolNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PoolsPoolNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PoolsPoolNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.pools[':pool_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV2PoolsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.pools.$get>>,
) {
  return ['api', '/api/v2/pools', toValue(args)] as const
}

export function getApiV2PoolsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.pools.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.pools.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Pools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.pools.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
          >,
          ReturnType<typeof getApiV2PoolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2PoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.pools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.pools.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.pools.$patch>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.providers.$get>>,
) {
  return ['api', '/api/v2/providers', toValue(args)] as const
}

export function getApiV2ProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Providers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ProvidersProviderNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>
  >,
) {
  return ['api', '/api/v2/providers/:provider_name', toValue(args)] as const
}

export function getApiV2ProvidersProviderNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ProvidersProviderNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.providers[':provider_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ProvidersProviderNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ProvidersProviderNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ProvidersProviderNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.providers[':provider_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AssetsAssetIdStateStoreQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>
  >,
) {
  return ['api', '/api/v2/assets/:asset_id/state-store', toValue(args)] as const
}

export function getApiV2AssetsAssetIdStateStoreQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AssetsAssetIdStateStoreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.assets[':asset_id']['state-store'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>
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
                  ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AssetsAssetIdStateStoreQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAssetIdStateStoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AssetsAssetIdStateStoreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.assets[':asset_id']['state-store'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
  >,
) {
  return ['api', '/api/v2/assets/:asset_id/state-store/:key', toValue(args)] as const
}

export function getApiV2AssetsAssetIdStateStoreKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AssetsAssetIdStateStoreKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.assets[':asset_id']['state-store'][':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2AssetsAssetIdStateStoreKeyQueryKey>
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
            ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AssetsAssetIdStateStoreKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AssetsAssetIdStateStoreKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.assets[':asset_id']['state-store'][':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']
          >,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          'state-store'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          'state-store'
        ][':key'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ][':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
          ':xcom_key'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].xcomEntries[':xcom_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].xcomEntries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].xcomEntries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/listMapped',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].listMapped.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].listMapped.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/dependencies',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].dependencies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].dependencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/dependencies',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].dependencies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].dependencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/tries',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/tries',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].tries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].tries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
    >
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances', toValue(args)] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/tries/:task_try_number',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries[
          ':task_try_number'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries[
            ':task_try_number'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/tries/:task_try_number',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].tries[':task_try_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].tries[':task_try_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>,
) {
  return ['api', '/api/v2/dags/:dag_id/tasks', toValue(args)] as const
}

export function getApiV2DagsDagIdTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2DagsDagIdTasksQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/tasks/:task_id', toValue(args)] as const
}

export function getApiV2DagsDagIdTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].tasks[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2DagsDagIdTasksTaskIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].tasks[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TriggersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.triggers.$get>>,
) {
  return ['api', '/api/v2/triggers', toValue(args)] as const
}

export function getApiV2TriggersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.triggers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TriggersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.triggers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Triggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.triggers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>
            >
          >,
          ReturnType<typeof getApiV2TriggersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TriggersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.triggers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TriggersTriggerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>,
) {
  return ['api', '/api/v2/triggers/:trigger_id', toValue(args)] as const
}

export function getApiV2TriggersTriggerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TriggersTriggerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.triggers[':trigger_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2TriggersTriggerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TriggersTriggerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TriggersTriggerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.triggers[':trigger_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2VariablesVariableKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>
  >,
) {
  return ['api', '/api/v2/variables/:variable_key', toValue(args)] as const
}

export function getApiV2VariablesVariableKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VariablesVariableKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.variables[':variable_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2VariablesVariableKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VariablesVariableKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VariablesVariableKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.variables[':variable_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.variables.$get>>,
) {
  return ['api', '/api/v2/variables', toValue(args)] as const
}

export function getApiV2VariablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.variables.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Variables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.variables.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>
            >
          >,
          ReturnType<typeof getApiV2VariablesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/logs/:try_number',
    keyArgs,
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
          ':try_number'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
            ':try_number'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/externalLogUrl/:try_number',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
          ':task_id'
        ].externalLogUrl[':try_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].externalLogUrl[':try_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV2DagTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagTags.$get>>,
) {
  return ['api', '/api/v2/dagTags', toValue(args)] as const
}

export function getApiV2DagTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagTags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dagTags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2DagTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.dagTags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
          >,
          ReturnType<typeof getApiV2DagTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dagTags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagVersionsDiffQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagVersions/diff', toValue(args)] as const
}

export function getApiV2DagsDagIdDagVersionsDiffQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagVersionsDiffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagVersions.diff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2DagsDagIdDagVersionsDiffQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagVersionsDiffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagVersionsDiffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagVersions.diff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagVersionsVersionNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
    >
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagVersions/:version_number', toValue(args)] as const
}

export function getApiV2DagsDagIdDagVersionsVersionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagVersionsVersionNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagVersions[':version_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagVersionsVersionNumberQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagVersionsVersionNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagVersions[':version_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagVersions', toValue(args)] as const
}

export function getApiV2DagsDagIdDagVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagVersions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2DagsDagIdDagVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DagsDagIdDagVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagVersions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].hitlDetails.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].hitlDetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails/tries/:try_number',
    toValue(args),
  ] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].hitlDetails.tries[':try_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].hitlDetails.tries[':try_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
    >
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/hitlDetails', toValue(args)] as const
}

export function getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].hitlDetails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].hitlDetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MonitorHealthQueryKey() {
  return ['api', '/api/v2/monitor/health'] as const
}

export function getApiV2MonitorHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2MonitorHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.monitor.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MonitorHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
            >
          >,
          ReturnType<typeof getApiV2MonitorHealthQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MonitorHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2MonitorHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.monitor.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2VersionQueryKey() {
  return ['api', '/api/v2/version'] as const
}

export function getApiV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
          >,
          ReturnType<typeof getApiV2VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AuthLoginQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.auth.login.$get>>,
) {
  return ['api', '/api/v2/auth/login', toValue(args)] as const
}

export function getApiV2AuthLoginQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.auth.login.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.auth.login.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.auth.login.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AuthLoginQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.auth.login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AuthCliMetadataQueryKey() {
  return ['api', '/api/v2/auth/cli/metadata'] as const
}

export function getApiV2AuthCliMetadataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2AuthCliMetadataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.auth.cli.metadata.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AuthCliMetadataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthCliMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2AuthCliMetadataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.auth.cli.metadata.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AuthLogoutQueryKey() {
  return ['api', '/api/v2/auth/logout'] as const
}

export function getApiV2AuthLogoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2AuthLogoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.auth.logout.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AuthLogoutQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2AuthLogoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.auth.logout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
