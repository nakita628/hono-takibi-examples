import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getMigrateResultQueryKey() {
  return ['migrate', '/migrate/result'] as const
}

export function getMigrateResultQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMigrateResultQueryKey>
  >({
    queryKey: getMigrateResultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.migrate.result.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMigrateResult<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMigrateResultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMigrateResultQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDocsQueryKey() {
  return ['docs', '/docs'] as const
}

export function getDocsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocsQueryKey>
  >({
    queryKey: getDocsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.docs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDocs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDocsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDocsOpenapiJsonQueryKey() {
  return ['docs', '/docs/openapi.json'] as const
}

export function getDocsOpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocsOpenapiJsonQueryKey>
  >({
    queryKey: getDocsOpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.docs['openapi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDocsOpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocsOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocsOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDocsHealthQueryKey() {
  return ['docs', '/docs/health'] as const
}

export function getDocsHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocsHealthQueryKey>
  >({
    queryKey: getDocsHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.docs.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDocsHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocsHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocsHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getRouteQueryKey(args: InferRequestType<typeof client.route.$get>) {
  return ['route', '/route', args] as const
}

export function getRouteQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.route.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRouteQueryKey>
  >({
    queryKey: getRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.route.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRoute<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.route.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRouteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRouteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostRouteBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.route.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRouteBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUserToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.user.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUserDeviceQuit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.device_quit.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.device_quit.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserDeviceQuitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUserOnlinestatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.onlinestatus.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.onlinestatus.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserOnlinestatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserSystemuidsQueryKey() {
  return ['user', '/user/systemuids'] as const
}

export function getUserSystemuidsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserSystemuidsQueryKey>
  >({
    queryKey: getUserSystemuidsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.systemuids.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserSystemuids<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserSystemuidsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserSystemuidsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUserSystemuidsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_add.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.systemuids_add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserSystemuidsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUserSystemuidsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.systemuids_remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserSystemuidsRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUserSystemuidsAddToCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserSystemuidsAddToCacheMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUserSystemuidsRemoveFromCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserSystemuidsRemoveFromCacheMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUserUpdatePluginNo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.update_plugin_no.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.update_plugin_no.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserUpdatePluginNoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConnRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conn.remove.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.conn.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConnRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConnKick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conn.kick.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.conn.kick.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConnKickMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$post>>>>>,
        TError,
        InferRequestType<typeof client.channel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.info.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channel.info.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channel.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelSubscriberAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.subscriber_add.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channel.subscriber_add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelSubscriberAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelSubscriberRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.subscriber_remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channel.subscriber_remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelSubscriberRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelSubscriberRemoveAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelSubscriberRemoveAllMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTmpchannelSubscriberSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tmpchannel.subscriber_set.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tmpchannel.subscriber_set.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTmpchannelSubscriberSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessageSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.message.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessageSendbatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.message.sendbatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.message.sendbatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageSendbatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessageSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.sync.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.message.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessageSyncack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.syncack.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.message.syncack.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageSyncackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.messages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.$post>>>>>,
        TError,
        InferRequestType<typeof client.message.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessageEvent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.event.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.message.event.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageEventMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessageEventsync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.message.eventsync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.message.eventsync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageEventsyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelMessagesync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.messagesync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channel.messagesync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelMessagesyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChannelMaxMessageSeqQueryKey(
  args: InferRequestType<typeof client.channel.max_message_seq.$get>,
) {
  return ['channel', '/channel/max_message_seq', args] as const
}

export function getChannelMaxMessageSeqQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.channel.max_message_seq.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelMaxMessageSeqQueryKey>
  >({
    queryKey: getChannelMaxMessageSeqQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel.max_message_seq.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChannelMaxMessageSeq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channel.max_message_seq.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelMaxMessageSeqQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelMaxMessageSeqQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getChannelLastMessageQueryKey(
  args: InferRequestType<typeof client.channel.last_message.$get>,
) {
  return ['channel', '/channel/last_message', args] as const
}

export function getChannelLastMessageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channel.last_message.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelLastMessageQueryKey>
  >({
    queryKey: getChannelLastMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel.last_message.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannelLastMessage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channel.last_message.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelLastMessageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelLastMessageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostConversationsClearUnread<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.clearUnread.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.clearUnread.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsClearUnreadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationsSetUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.setUnread.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.setUnread.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsSetUnreadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversation.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversation.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversation.sync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversation.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationsActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.activate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.activate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnzQueryKey(args: InferRequestType<typeof client.connz.$get>) {
  return ['connz', '/connz', args] as const
}

export function getConnzQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connz.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnzQueryKey>
  >({
    queryKey: getConnzQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connz.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnz<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connz.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConnzQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnzQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getVarzQueryKey(args: InferRequestType<typeof client.varz.$get>) {
  return ['varz', '/varz', args] as const
}

export function getVarzQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.varz.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVarzQueryKey>
  >({
    queryKey: getVarzQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.varz.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVarz<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.varz.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVarzQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVarzQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostChannelBlacklistAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_add.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channel.blacklist_add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelBlacklistAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelBlacklistSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_set.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channel.blacklist_set.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelBlacklistSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelBlacklistRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channel.blacklist_remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelBlacklistRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelBlacklistRemoveAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelBlacklistRemoveAllMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelWhitelistAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_add.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channel.whitelist_add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelWhitelistAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelWhitelistSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_set.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channel.whitelist_set.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelWhitelistSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelWhitelistRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channel.whitelist_remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelWhitelistRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChannelWhitelistRemoveAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelWhitelistRemoveAllMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChannelWhitelistQueryKey(
  args: InferRequestType<typeof client.channel.whitelist.$get>,
) {
  return ['channel', '/channel/whitelist', args] as const
}

export function getChannelWhitelistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channel.whitelist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelWhitelistQueryKey>
  >({
    queryKey: getChannelWhitelistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel.whitelist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannelWhitelist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channel.whitelist.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelWhitelistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelWhitelistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTagQueryKey(args: InferRequestType<typeof client.tag.$get>) {
  return ['tag', '/tag', args] as const
}

export function getTagQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tag.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagQueryKey>
  >({
    queryKey: getTagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tag.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTag<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tag.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTagRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.remove.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tag.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagRemoveMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTagsQueryKey() {
  return ['tags', '/tags'] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostManagerLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manager.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.manager.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostManagerLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVarzSettingQueryKey() {
  return ['varz', '/varz/setting'] as const
}

export function getVarzSettingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVarzSettingQueryKey>
  >({
    queryKey: getVarzSettingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.varz.setting.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVarzSetting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVarzSettingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVarzSettingQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
