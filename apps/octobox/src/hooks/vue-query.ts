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

export function getPostApiNotificationsArchiveSelectedJsonMutationKey() {
  return ['api', '/api/notifications/archive_selected.json', 'POST'] as const
}

export function getPostApiNotificationsArchiveSelectedJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.notifications)['archive_selected.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.notifications)['archive_selected.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiNotificationsArchiveSelectedJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.notifications)['archive_selected.json']['$post']>,
    ) {
      return parseResponse(client.api.notifications['archive_selected.json'].$post(args, options))
    },
  })
}

export function usePostApiNotificationsArchiveSelectedJson<
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
                  ReturnType<(typeof client.api.notifications)['archive_selected.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.notifications)['archive_selected.json']['$post']>,
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
  const mutationDefaults = getPostApiNotificationsArchiveSelectedJsonMutationOptions<
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

export function getDeleteApiNotificationsDeleteSelectedJsonMutationKey() {
  return ['api', '/api/notifications/delete_selected.json', 'DELETE'] as const
}

export function getDeleteApiNotificationsDeleteSelectedJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.notifications)['delete_selected.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.notifications)['delete_selected.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiNotificationsDeleteSelectedJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.notifications)['delete_selected.json']['$delete']>,
    ) {
      return parseResponse(client.api.notifications['delete_selected.json'].$delete(args, options))
    },
  })
}

export function useDeleteApiNotificationsDeleteSelectedJson<
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
                  ReturnType<(typeof client.api.notifications)['delete_selected.json']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.notifications)['delete_selected.json']['$delete']>,
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
  const mutationDefaults = getDeleteApiNotificationsDeleteSelectedJsonMutationOptions<
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

export function getApiNotificationsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['notifications.json']['$get']>>,
) {
  return ['api', '/api/notifications.json', toValue(args)] as const
}

export function getApiNotificationsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['notifications.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNotificationsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['notifications.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotificationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['notifications.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['notifications.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['notifications.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['notifications.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiNotificationsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['notifications.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNotificationsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['notifications.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNotificationsLookupJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.notifications)['lookup.json']['$get']>
  >,
) {
  return ['api', '/api/notifications/lookup.json', toValue(args)] as const
}

export function getApiNotificationsLookupJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.notifications)['lookup.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNotificationsLookupJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.notifications['lookup.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotificationsLookupJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['lookup.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.notifications)['lookup.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)['lookup.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)['lookup.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiNotificationsLookupJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.api.notifications)['lookup.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsLookupJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNotificationsLookupJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.notifications['lookup.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNotificationsMarkReadSelectedJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>
  >,
) {
  return ['api', '/api/notifications/mark_read_selected.json', toValue(args)] as const
}

export function getApiNotificationsMarkReadSelectedJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNotificationsMarkReadSelectedJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.notifications['mark_read_selected.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotificationsMarkReadSelectedJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>
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
                  ReturnType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiNotificationsMarkReadSelectedJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsMarkReadSelectedJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNotificationsMarkReadSelectedJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.notifications['mark_read_selected.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiNotificationsMuteSelectedJsonMutationKey() {
  return ['api', '/api/notifications/mute_selected.json', 'POST'] as const
}

export function getPostApiNotificationsMuteSelectedJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.notifications)['mute_selected.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.notifications)['mute_selected.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiNotificationsMuteSelectedJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.notifications)['mute_selected.json']['$post']>,
    ) {
      return parseResponse(client.api.notifications['mute_selected.json'].$post(args, options))
    },
  })
}

export function usePostApiNotificationsMuteSelectedJson<
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
                  ReturnType<(typeof client.api.notifications)['mute_selected.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.notifications)['mute_selected.json']['$post']>,
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
  const mutationDefaults = getPostApiNotificationsMuteSelectedJsonMutationOptions<
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

export function getPostApiNotificationsIdStarJsonMutationKey() {
  return ['api', '/api/notifications/:id/star.json', 'POST'] as const
}

export function getPostApiNotificationsIdStarJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.notifications)[':id']['star.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.notifications)[':id']['star.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiNotificationsIdStarJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.notifications)[':id']['star.json']['$post']>,
    ) {
      return parseResponse(client.api.notifications[':id']['star.json'].$post(args, options))
    },
  })
}

export function usePostApiNotificationsIdStarJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)[':id']['star.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.notifications)[':id']['star.json']['$post']>,
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
  const mutationDefaults = getPostApiNotificationsIdStarJsonMutationOptions<
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

export function getPostApiNotificationsSyncJsonMutationKey() {
  return ['api', '/api/notifications/sync.json', 'POST'] as const
}

export function getPostApiNotificationsSyncJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.notifications)['sync.json']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiNotificationsSyncJsonMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.notifications['sync.json'].$post(undefined, options))
    },
  })
}

export function usePostApiNotificationsSyncJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)['sync.json']['$post']>>
              >
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
  const mutationDefaults = getPostApiNotificationsSyncJsonMutationOptions<TError, TOnMutateResult>(
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

export function getApiNotificationsSyncingJsonQueryKey() {
  return ['api', '/api/notifications/syncing.json'] as const
}

export function getApiNotificationsSyncingJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiNotificationsSyncingJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.notifications['syncing.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotificationsSyncingJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['syncing.json']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.api.notifications)['syncing.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)['syncing.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiNotificationsSyncingJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.api.notifications)['syncing.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsSyncingJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiNotificationsSyncingJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.notifications['syncing.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNotificationsUnreadCountJsonQueryKey() {
  return ['api', '/api/notifications/unread_count.json'] as const
}

export function getApiNotificationsUnreadCountJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiNotificationsUnreadCountJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.notifications['unread_count.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotificationsUnreadCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['unread_count.json']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.api.notifications)['unread_count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)['unread_count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiNotificationsUnreadCountJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.api.notifications)['unread_count.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsUnreadCountJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiNotificationsUnreadCountJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.notifications['unread_count.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPinnedSearchesJsonQueryKey() {
  return ['api', '/api/pinned_searches.json'] as const
}

export function getApiPinnedSearchesJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPinnedSearchesJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['pinned_searches.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPinnedSearchesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['pinned_searches.json']['$get']>>>
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
                Awaited<ReturnType<(typeof client.api)['pinned_searches.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['pinned_searches.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPinnedSearchesJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['pinned_searches.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPinnedSearchesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPinnedSearchesJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['pinned_searches.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPinnedSearchesJsonMutationKey() {
  return ['api', '/api/pinned_searches.json', 'POST'] as const
}

export function getPostApiPinnedSearchesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['pinned_searches.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['pinned_searches.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPinnedSearchesJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['pinned_searches.json']['$post']>) {
      return parseResponse(client.api['pinned_searches.json'].$post(args, options))
    },
  })
}

export function usePostApiPinnedSearchesJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['pinned_searches.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['pinned_searches.json']['$post']>,
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
  const mutationDefaults = getPostApiPinnedSearchesJsonMutationOptions<TError, TOnMutateResult>(
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

export function getApiPinnedSearchesIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$get']>>,
) {
  return ['api', '/api/pinned_searches/:id.json', toValue(args)] as const
}

export function getApiPinnedSearchesIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPinnedSearchesIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pinned_searches[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPinnedSearchesIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPinnedSearchesIdJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPinnedSearchesIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPinnedSearchesIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pinned_searches[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiPinnedSearchesIdJsonMutationKey() {
  return ['api', '/api/pinned_searches/:id.json', 'DELETE'] as const
}

export function getDeleteApiPinnedSearchesIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPinnedSearchesIdJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$delete']>,
    ) {
      return parseResponse(client.api.pinned_searches[':id.json'].$delete(args, options))
    },
  })
}

export function useDeleteApiPinnedSearchesIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$delete']>,
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
  const mutationDefaults = getDeleteApiPinnedSearchesIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiPinnedSearchesIdJsonMutationKey() {
  return ['api', '/api/pinned_searches/:id.json', 'PATCH'] as const
}

export function getPatchApiPinnedSearchesIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPinnedSearchesIdJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$patch']>,
    ) {
      return parseResponse(client.api.pinned_searches[':id.json'].$patch(args, options))
    },
  })
}

export function usePatchApiPinnedSearchesIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$patch']>,
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
  const mutationDefaults = getPatchApiPinnedSearchesIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getApiUsersProfileJsonQueryKey() {
  return ['api', '/api/users/profile.json'] as const
}

export function getApiUsersProfileJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUsersProfileJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users['profile.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersProfileJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)['profile.json']['$get']>>>
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
                Awaited<ReturnType<(typeof client.api.users)['profile.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)['profile.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersProfileJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)['profile.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersProfileJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUsersProfileJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users['profile.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiUsersIdJsonMutationKey() {
  return ['api', '/api/users/:id.json', 'DELETE'] as const
}

export function getDeleteApiUsersIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':id.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':id.json']['$delete']>) {
      return parseResponse(client.api.users[':id.json'].$delete(args, options))
    },
  })
}

export function useDeleteApiUsersIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':id.json']['$delete']>,
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
  const mutationDefaults = getDeleteApiUsersIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiUsersIdJsonMutationKey() {
  return ['api', '/api/users/:id.json', 'PATCH'] as const
}

export function getPatchApiUsersIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id.json']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':id.json']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUsersIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':id.json']['$patch']>) {
      return parseResponse(client.api.users[':id.json'].$patch(args, options))
    },
  })
}

export function usePatchApiUsersIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id.json']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':id.json']['$patch']>,
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
  const mutationDefaults = getPatchApiUsersIdJsonMutationOptions<TError, TOnMutateResult>(
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
