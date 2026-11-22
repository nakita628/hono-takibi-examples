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

export function getChannelKey() {
  return ['channel'] as const
}

export function getConnKey() {
  return ['conn'] as const
}

export function getConnzKey() {
  return ['connz'] as const
}

export function getConversationKey() {
  return ['conversation'] as const
}

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getDocsKey() {
  return ['docs'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getManagerKey() {
  return ['manager'] as const
}

export function getMessageKey() {
  return ['message'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getMigrateKey() {
  return ['migrate'] as const
}

export function getRouteKey() {
  return ['route'] as const
}

export function getTagKey() {
  return ['tag'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTmpchannelKey() {
  return ['tmpchannel'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getVarzKey() {
  return ['varz'] as const
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

export function getMigrateResultQueryKey() {
  return ['migrate', '/migrate/result'] as const
}

export function getMigrateResultQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMigrateResultQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.migrate.result.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMigrateResult<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
          >,
          ReturnType<typeof getMigrateResultQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMigrateResultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMigrateResultQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.migrate.result.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocsQueryKey() {
  return ['docs', '/docs'] as const
}

export function getDocsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDocsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDocs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
          ReturnType<typeof getDocsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDocsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.docs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocsOpenapiJsonQueryKey() {
  return ['docs', '/docs/openapi.json'] as const
}

export function getDocsOpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDocsOpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docs['openapi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocsOpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
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
                Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocsOpenapiJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocsOpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDocsOpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.docs['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocsHealthQueryKey() {
  return ['docs', '/docs/health'] as const
}

export function getDocsHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDocsHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docs.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDocsHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>
          >,
          ReturnType<typeof getDocsHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocsHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDocsHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.docs.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRouteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.$get>>,
) {
  return ['route', '/route', toValue(args)] as const
}

export function getRouteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoute<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
          ReturnType<typeof getRouteQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRouteBatchMutationKey() {
  return ['route', '/route/batch', 'POST'] as const
}

export function getPostRouteBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.route.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRouteBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.route.batch.$post>) {
      return parseResponse(client.route.batch.$post(args, options))
    },
  })
}

export function usePostRouteBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.route.batch.$post>,
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
  const mutationDefaults = getPostRouteBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserTokenMutationKey() {
  return ['user', '/user/token', 'POST'] as const
}

export function getPostUserTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.token.$post>) {
      return parseResponse(client.user.token.$post(args, options))
    },
  })
}

export function usePostUserToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user.token.$post>,
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
  const mutationDefaults = getPostUserTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserDeviceQuitMutationKey() {
  return ['user', '/user/device_quit', 'POST'] as const
}

export function getPostUserDeviceQuitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.device_quit.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.device_quit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserDeviceQuitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.device_quit.$post>) {
      return parseResponse(client.user.device_quit.$post(args, options))
    },
  })
}

export function usePostUserDeviceQuit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.device_quit.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.device_quit.$post>,
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
  const mutationDefaults = getPostUserDeviceQuitMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserOnlinestatusMutationKey() {
  return ['user', '/user/onlinestatus', 'POST'] as const
}

export function getPostUserOnlinestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.onlinestatus.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.onlinestatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserOnlinestatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.onlinestatus.$post>) {
      return parseResponse(client.user.onlinestatus.$post(args, options))
    },
  })
}

export function usePostUserOnlinestatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.onlinestatus.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.onlinestatus.$post>,
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
  const mutationDefaults = getPostUserOnlinestatusMutationOptions<TError, TOnMutateResult>(
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

export function getUserSystemuidsQueryKey() {
  return ['user', '/user/systemuids'] as const
}

export function getUserSystemuidsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserSystemuidsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.systemuids.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserSystemuids<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>
            >
          >,
          ReturnType<typeof getUserSystemuidsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserSystemuidsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserSystemuidsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.systemuids.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserSystemuidsAddMutationKey() {
  return ['user', '/user/systemuids_add', 'POST'] as const
}

export function getPostUserSystemuidsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.systemuids_add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserSystemuidsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.systemuids_add.$post>) {
      return parseResponse(client.user.systemuids_add.$post(args, options))
    },
  })
}

export function usePostUserSystemuidsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.systemuids_add.$post>,
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
  const mutationDefaults = getPostUserSystemuidsAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserSystemuidsRemoveMutationKey() {
  return ['user', '/user/systemuids_remove', 'POST'] as const
}

export function getPostUserSystemuidsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.systemuids_remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserSystemuidsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.systemuids_remove.$post>) {
      return parseResponse(client.user.systemuids_remove.$post(args, options))
    },
  })
}

export function usePostUserSystemuidsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_remove.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.systemuids_remove.$post>,
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
  const mutationDefaults = getPostUserSystemuidsRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserSystemuidsAddToCacheMutationKey() {
  return ['user', '/user/systemuids_add_to_cache', 'POST'] as const
}

export function getPostUserSystemuidsAddToCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_add_to_cache.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.systemuids_add_to_cache.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserSystemuidsAddToCacheMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.systemuids_add_to_cache.$post>) {
      return parseResponse(client.user.systemuids_add_to_cache.$post(args, options))
    },
  })
}

export function usePostUserSystemuidsAddToCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.systemuids_add_to_cache.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.systemuids_add_to_cache.$post>,
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
  const mutationDefaults = getPostUserSystemuidsAddToCacheMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserSystemuidsRemoveFromCacheMutationKey() {
  return ['user', '/user/systemuids_remove_from_cache', 'POST'] as const
}

export function getPostUserSystemuidsRemoveFromCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user.systemuids_remove_from_cache.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user.systemuids_remove_from_cache.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserSystemuidsRemoveFromCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.user.systemuids_remove_from_cache.$post>,
    ) {
      return parseResponse(client.user.systemuids_remove_from_cache.$post(args, options))
    },
  })
}

export function usePostUserSystemuidsRemoveFromCache<
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
                Awaited<ReturnType<typeof client.user.systemuids_remove_from_cache.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.systemuids_remove_from_cache.$post>,
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
  const mutationDefaults = getPostUserSystemuidsRemoveFromCacheMutationOptions<
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

export function getPostUserUpdatePluginNoMutationKey() {
  return ['user', '/user/update_plugin_no', 'POST'] as const
}

export function getPostUserUpdatePluginNoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.update_plugin_no.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.update_plugin_no.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUpdatePluginNoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.update_plugin_no.$post>) {
      return parseResponse(client.user.update_plugin_no.$post(args, options))
    },
  })
}

export function usePostUserUpdatePluginNo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.update_plugin_no.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.update_plugin_no.$post>,
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
  const mutationDefaults = getPostUserUpdatePluginNoMutationOptions<TError, TOnMutateResult>(
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

export function getPostConnRemoveMutationKey() {
  return ['conn', '/conn/remove', 'POST'] as const
}

export function getPostConnRemoveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conn.remove.$post>>>>>,
    TError,
    InferRequestType<typeof client.conn.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conn.remove.$post>) {
      return parseResponse(client.conn.remove.$post(args, options))
    },
  })
}

export function usePostConnRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conn.remove.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.conn.remove.$post>,
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
  const mutationDefaults = getPostConnRemoveMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConnKickMutationKey() {
  return ['conn', '/conn/kick', 'POST'] as const
}

export function getPostConnKickMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conn.kick.$post>>>>>,
    TError,
    InferRequestType<typeof client.conn.kick.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnKickMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conn.kick.$post>) {
      return parseResponse(client.conn.kick.$post(args, options))
    },
  })
}

export function usePostConnKick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conn.kick.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.conn.kick.$post>,
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
  const mutationDefaults = getPostConnKickMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostChannelMutationKey() {
  return ['channel', '/channel', 'POST'] as const
}

export function getPostChannelMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$post>>>>>,
    TError,
    InferRequestType<typeof client.channel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.$post>) {
      return parseResponse(client.channel.$post(args, options))
    },
  })
}

export function usePostChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channel.$post>,
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
  const mutationDefaults = getPostChannelMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostChannelInfoMutationKey() {
  return ['channel', '/channel/info', 'POST'] as const
}

export function getPostChannelInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channel.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.info.$post>) {
      return parseResponse(client.channel.info.$post(args, options))
    },
  })
}

export function usePostChannelInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.info.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channel.info.$post>,
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
  const mutationDefaults = getPostChannelInfoMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostChannelDeleteMutationKey() {
  return ['channel', '/channel/delete', 'POST'] as const
}

export function getPostChannelDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channel.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.delete.$post>) {
      return parseResponse(client.channel.delete.$post(args, options))
    },
  })
}

export function usePostChannelDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channel.delete.$post>,
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
  const mutationDefaults = getPostChannelDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelSubscriberAddMutationKey() {
  return ['channel', '/channel/subscriber_add', 'POST'] as const
}

export function getPostChannelSubscriberAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.subscriber_add.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.subscriber_add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelSubscriberAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.subscriber_add.$post>) {
      return parseResponse(client.channel.subscriber_add.$post(args, options))
    },
  })
}

export function usePostChannelSubscriberAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.subscriber_add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channel.subscriber_add.$post>,
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
  const mutationDefaults = getPostChannelSubscriberAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelSubscriberRemoveMutationKey() {
  return ['channel', '/channel/subscriber_remove', 'POST'] as const
}

export function getPostChannelSubscriberRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.subscriber_remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.subscriber_remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelSubscriberRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.subscriber_remove.$post>) {
      return parseResponse(client.channel.subscriber_remove.$post(args, options))
    },
  })
}

export function usePostChannelSubscriberRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel.subscriber_remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channel.subscriber_remove.$post>,
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
  const mutationDefaults = getPostChannelSubscriberRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelSubscriberRemoveAllMutationKey() {
  return ['channel', '/channel/subscriber_remove_all', 'POST'] as const
}

export function getPostChannelSubscriberRemoveAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.subscriber_remove_all.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.subscriber_remove_all.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelSubscriberRemoveAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.subscriber_remove_all.$post>) {
      return parseResponse(client.channel.subscriber_remove_all.$post(args, options))
    },
  })
}

export function usePostChannelSubscriberRemoveAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel.subscriber_remove_all.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channel.subscriber_remove_all.$post>,
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
  const mutationDefaults = getPostChannelSubscriberRemoveAllMutationOptions<
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

export function getPostTmpchannelSubscriberSetMutationKey() {
  return ['tmpchannel', '/tmpchannel/subscriber_set', 'POST'] as const
}

export function getPostTmpchannelSubscriberSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tmpchannel.subscriber_set.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tmpchannel.subscriber_set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTmpchannelSubscriberSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tmpchannel.subscriber_set.$post>) {
      return parseResponse(client.tmpchannel.subscriber_set.$post(args, options))
    },
  })
}

export function usePostTmpchannelSubscriberSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tmpchannel.subscriber_set.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.tmpchannel.subscriber_set.$post>,
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
  const mutationDefaults = getPostTmpchannelSubscriberSetMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessageSendMutationKey() {
  return ['message', '/message/send', 'POST'] as const
}

export function getPostMessageSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.send.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.message.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message.send.$post>) {
      return parseResponse(client.message.send.$post(args, options))
    },
  })
}

export function usePostMessageSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.message.send.$post>,
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
  const mutationDefaults = getPostMessageSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMessageSendbatchMutationKey() {
  return ['message', '/message/sendbatch', 'POST'] as const
}

export function getPostMessageSendbatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.sendbatch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.message.sendbatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageSendbatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message.sendbatch.$post>) {
      return parseResponse(client.message.sendbatch.$post(args, options))
    },
  })
}

export function usePostMessageSendbatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.message.sendbatch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.message.sendbatch.$post>,
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
  const mutationDefaults = getPostMessageSendbatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessageSyncMutationKey() {
  return ['message', '/message/sync', 'POST'] as const
}

export function getPostMessageSyncMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.message.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message.sync.$post>) {
      return parseResponse(client.message.sync.$post(args, options))
    },
  })
}

export function usePostMessageSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.sync.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.message.sync.$post>,
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
  const mutationDefaults = getPostMessageSyncMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMessageSyncackMutationKey() {
  return ['message', '/message/syncack', 'POST'] as const
}

export function getPostMessageSyncackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.syncack.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.message.syncack.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageSyncackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message.syncack.$post>) {
      return parseResponse(client.message.syncack.$post(args, options))
    },
  })
}

export function usePostMessageSyncack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.message.syncack.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.message.syncack.$post>,
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
  const mutationDefaults = getPostMessageSyncackMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessagesMutationKey() {
  return ['messages', '/messages', 'POST'] as const
}

export function getPostMessagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>>,
    TError,
    InferRequestType<typeof client.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.$post>) {
      return parseResponse(client.messages.$post(args, options))
    },
  })
}

export function usePostMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.messages.$post>,
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
  const mutationDefaults = getPostMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMessageMutationKey() {
  return ['message', '/message', 'POST'] as const
}

export function getPostMessageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.$post>>>>>,
    TError,
    InferRequestType<typeof client.message.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message.$post>) {
      return parseResponse(client.message.$post(args, options))
    },
  })
}

export function usePostMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.message.$post>,
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
  const mutationDefaults = getPostMessageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMessageEventMutationKey() {
  return ['message', '/message/event', 'POST'] as const
}

export function getPostMessageEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.event.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.message.event.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageEventMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message.event.$post>) {
      return parseResponse(client.message.event.$post(args, options))
    },
  })
}

export function usePostMessageEvent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.event.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.message.event.$post>,
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
  const mutationDefaults = getPostMessageEventMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessageEventsyncMutationKey() {
  return ['message', '/message/eventsync', 'POST'] as const
}

export function getPostMessageEventsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.eventsync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.message.eventsync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageEventsyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message.eventsync.$post>) {
      return parseResponse(client.message.eventsync.$post(args, options))
    },
  })
}

export function usePostMessageEventsync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.message.eventsync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.message.eventsync.$post>,
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
  const mutationDefaults = getPostMessageEventsyncMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelMessagesyncMutationKey() {
  return ['channel', '/channel/messagesync', 'POST'] as const
}

export function getPostChannelMessagesyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.messagesync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channel.messagesync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelMessagesyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.messagesync.$post>) {
      return parseResponse(client.channel.messagesync.$post(args, options))
    },
  })
}

export function usePostChannelMessagesync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.messagesync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channel.messagesync.$post>,
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
  const mutationDefaults = getPostChannelMessagesyncMutationOptions<TError, TOnMutateResult>(
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

export function getChannelMaxMessageSeqQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.max_message_seq.$get>>,
) {
  return ['channel', '/channel/max_message_seq', toValue(args)] as const
}

export function getChannelMaxMessageSeqQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.max_message_seq.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelMaxMessageSeqQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel.max_message_seq.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelMaxMessageSeq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.max_message_seq.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
            >
          >,
          ReturnType<typeof getChannelMaxMessageSeqQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelMaxMessageSeqQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelMaxMessageSeqQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel.max_message_seq.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelLastMessageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.last_message.$get>>,
) {
  return ['channel', '/channel/last_message', toValue(args)] as const
}

export function getChannelLastMessageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.last_message.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelLastMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel.last_message.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelLastMessage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.last_message.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>
            >
          >,
          ReturnType<typeof getChannelLastMessageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelLastMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelLastMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel.last_message.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsClearUnreadMutationKey() {
  return ['conversations', '/conversations/clearUnread', 'POST'] as const
}

export function getPostConversationsClearUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.clearUnread.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.clearUnread.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsClearUnreadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.clearUnread.$post>) {
      return parseResponse(client.conversations.clearUnread.$post(args, options))
    },
  })
}

export function usePostConversationsClearUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversations.clearUnread.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.clearUnread.$post>,
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
  const mutationDefaults = getPostConversationsClearUnreadMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsSetUnreadMutationKey() {
  return ['conversations', '/conversations/setUnread', 'POST'] as const
}

export function getPostConversationsSetUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.setUnread.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.setUnread.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsSetUnreadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.setUnread.$post>) {
      return parseResponse(client.conversations.setUnread.$post(args, options))
    },
  })
}

export function usePostConversationsSetUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.setUnread.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.setUnread.$post>,
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
  const mutationDefaults = getPostConversationsSetUnreadMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsDeleteMutationKey() {
  return ['conversations', '/conversations/delete', 'POST'] as const
}

export function getPostConversationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.delete.$post>) {
      return parseResponse(client.conversations.delete.$post(args, options))
    },
  })
}

export function usePostConversationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.delete.$post>,
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
  const mutationDefaults = getPostConversationsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationListMutationKey() {
  return ['conversation', '/conversation/list', 'POST'] as const
}

export function getPostConversationListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversation.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.conversation.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversation.list.$post>) {
      return parseResponse(client.conversation.list.$post(args, options))
    },
  })
}

export function usePostConversationList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversation.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversation.list.$post>,
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
  const mutationDefaults = getPostConversationListMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationSyncMutationKey() {
  return ['conversation', '/conversation/sync', 'POST'] as const
}

export function getPostConversationSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversation.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.conversation.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversation.sync.$post>) {
      return parseResponse(client.conversation.sync.$post(args, options))
    },
  })
}

export function usePostConversationSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversation.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversation.sync.$post>,
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
  const mutationDefaults = getPostConversationSyncMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsActivateMutationKey() {
  return ['conversations', '/conversations/activate', 'POST'] as const
}

export function getPostConversationsActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.activate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.activate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsActivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.activate.$post>) {
      return parseResponse(client.conversations.activate.$post(args, options))
    },
  })
}

export function usePostConversationsActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.activate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.activate.$post>,
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
  const mutationDefaults = getPostConversationsActivateMutationOptions<TError, TOnMutateResult>(
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

export function getConnzQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connz.$get>>,
) {
  return ['connz', '/connz', toValue(args)] as const
}

export function getConnzQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connz.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnzQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connz.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConnz<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connz.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
          ReturnType<typeof getConnzQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnzQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connz.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVarzQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.varz.$get>>) {
  return ['varz', '/varz', toValue(args)] as const
}

export function getVarzQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.varz.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVarzQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.varz.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVarz<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.varz.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
          ReturnType<typeof getVarzQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVarzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVarzQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.varz.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelBlacklistAddMutationKey() {
  return ['channel', '/channel/blacklist_add', 'POST'] as const
}

export function getPostChannelBlacklistAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_add.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.blacklist_add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelBlacklistAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.blacklist_add.$post>) {
      return parseResponse(client.channel.blacklist_add.$post(args, options))
    },
  })
}

export function usePostChannelBlacklistAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channel.blacklist_add.$post>,
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
  const mutationDefaults = getPostChannelBlacklistAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelBlacklistSetMutationKey() {
  return ['channel', '/channel/blacklist_set', 'POST'] as const
}

export function getPostChannelBlacklistSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_set.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.blacklist_set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelBlacklistSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.blacklist_set.$post>) {
      return parseResponse(client.channel.blacklist_set.$post(args, options))
    },
  })
}

export function usePostChannelBlacklistSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_set.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channel.blacklist_set.$post>,
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
  const mutationDefaults = getPostChannelBlacklistSetMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelBlacklistRemoveMutationKey() {
  return ['channel', '/channel/blacklist_remove', 'POST'] as const
}

export function getPostChannelBlacklistRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.blacklist_remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelBlacklistRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.blacklist_remove.$post>) {
      return parseResponse(client.channel.blacklist_remove.$post(args, options))
    },
  })
}

export function usePostChannelBlacklistRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel.blacklist_remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channel.blacklist_remove.$post>,
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
  const mutationDefaults = getPostChannelBlacklistRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelBlacklistRemoveAllMutationKey() {
  return ['channel', '/channel/blacklist_remove_all', 'POST'] as const
}

export function getPostChannelBlacklistRemoveAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_remove_all.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.blacklist_remove_all.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelBlacklistRemoveAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.blacklist_remove_all.$post>) {
      return parseResponse(client.channel.blacklist_remove_all.$post(args, options))
    },
  })
}

export function usePostChannelBlacklistRemoveAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel.blacklist_remove_all.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channel.blacklist_remove_all.$post>,
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
  const mutationDefaults = getPostChannelBlacklistRemoveAllMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelWhitelistAddMutationKey() {
  return ['channel', '/channel/whitelist_add', 'POST'] as const
}

export function getPostChannelWhitelistAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_add.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.whitelist_add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelWhitelistAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.whitelist_add.$post>) {
      return parseResponse(client.channel.whitelist_add.$post(args, options))
    },
  })
}

export function usePostChannelWhitelistAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channel.whitelist_add.$post>,
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
  const mutationDefaults = getPostChannelWhitelistAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelWhitelistSetMutationKey() {
  return ['channel', '/channel/whitelist_set', 'POST'] as const
}

export function getPostChannelWhitelistSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_set.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.whitelist_set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelWhitelistSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.whitelist_set.$post>) {
      return parseResponse(client.channel.whitelist_set.$post(args, options))
    },
  })
}

export function usePostChannelWhitelistSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_set.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channel.whitelist_set.$post>,
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
  const mutationDefaults = getPostChannelWhitelistSetMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelWhitelistRemoveMutationKey() {
  return ['channel', '/channel/whitelist_remove', 'POST'] as const
}

export function getPostChannelWhitelistRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.whitelist_remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelWhitelistRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.whitelist_remove.$post>) {
      return parseResponse(client.channel.whitelist_remove.$post(args, options))
    },
  })
}

export function usePostChannelWhitelistRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel.whitelist_remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channel.whitelist_remove.$post>,
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
  const mutationDefaults = getPostChannelWhitelistRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelWhitelistRemoveAllMutationKey() {
  return ['channel', '/channel/whitelist_remove_all', 'POST'] as const
}

export function getPostChannelWhitelistRemoveAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_remove_all.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel.whitelist_remove_all.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelWhitelistRemoveAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel.whitelist_remove_all.$post>) {
      return parseResponse(client.channel.whitelist_remove_all.$post(args, options))
    },
  })
}

export function usePostChannelWhitelistRemoveAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel.whitelist_remove_all.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channel.whitelist_remove_all.$post>,
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
  const mutationDefaults = getPostChannelWhitelistRemoveAllMutationOptions<TError, TOnMutateResult>(
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

export function getChannelWhitelistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.whitelist.$get>>,
) {
  return ['channel', '/channel/whitelist', toValue(args)] as const
}

export function getChannelWhitelistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.whitelist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelWhitelistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel.whitelist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelWhitelist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.whitelist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>
            >
          >,
          ReturnType<typeof getChannelWhitelistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelWhitelistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelWhitelistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel.whitelist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tag.$get>>) {
  return ['tag', '/tag', toValue(args)] as const
}

export function getTagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tag.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tag.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTag<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tag.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
          ReturnType<typeof getTagQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tag.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagRemoveMutationKey() {
  return ['tag', '/tag/remove', 'POST'] as const
}

export function getPostTagRemoveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.remove.$post>>>>>,
    TError,
    InferRequestType<typeof client.tag.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tag.remove.$post>) {
      return parseResponse(client.tag.remove.$post(args, options))
    },
  })
}

export function usePostTagRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.remove.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tag.remove.$post>,
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
  const mutationDefaults = getPostTagRemoveMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsQueryKey() {
  return ['tags', '/tags'] as const
}

export function getTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagerLoginMutationKey() {
  return ['manager', '/manager/login', 'POST'] as const
}

export function getPostManagerLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manager.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.manager.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostManagerLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.manager.login.$post>) {
      return parseResponse(client.manager.login.$post(args, options))
    },
  })
}

export function usePostManagerLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manager.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.manager.login.$post>,
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
  const mutationDefaults = getPostManagerLoginMutationOptions<TError, TOnMutateResult>(
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

export function getVarzSettingQueryKey() {
  return ['varz', '/varz/setting'] as const
}

export function getVarzSettingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVarzSettingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.varz.setting.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVarzSetting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>
          >,
          ReturnType<typeof getVarzSettingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVarzSettingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVarzSettingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.varz.setting.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
