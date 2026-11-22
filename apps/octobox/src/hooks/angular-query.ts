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

export function injectPostApiNotificationsArchiveSelectedJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiNotificationsArchiveSelectedJsonMutationOptions<
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

export function injectDeleteApiNotificationsDeleteSelectedJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiNotificationsDeleteSelectedJsonMutationOptions<
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

export function getApiNotificationsJsonQueryKey(
  args: InferRequestType<(typeof client.api)['notifications.json']['$get']>,
) {
  return ['api', '/api/notifications.json', args] as const
}

export function getApiNotificationsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['notifications.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['notifications.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['notifications.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsJsonQueryKey>
  >({
    queryKey: getApiNotificationsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['notifications.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiNotificationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['notifications.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['notifications.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['notifications.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNotificationsJsonQueryKey>
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
      ...getApiNotificationsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiNotificationsLookupJsonQueryKey(
  args: InferRequestType<(typeof client.api.notifications)['lookup.json']['$get']>,
) {
  return ['api', '/api/notifications/lookup.json', args] as const
}

export function getApiNotificationsLookupJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['lookup.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.notifications)['lookup.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiNotificationsLookupJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.notifications['lookup.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiNotificationsLookupJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['lookup.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.notifications)['lookup.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiNotificationsLookupJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiNotificationsMarkReadSelectedJsonQueryKey(
  args: InferRequestType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>,
) {
  return ['api', '/api/notifications/mark_read_selected.json', args] as const
}

export function getApiNotificationsMarkReadSelectedJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiNotificationsMarkReadSelectedJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.notifications['mark_read_selected.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiNotificationsMarkReadSelectedJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.notifications)['mark_read_selected.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiNotificationsMarkReadSelectedJsonQueryKey>
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
      ...getApiNotificationsMarkReadSelectedJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiNotificationsMuteSelectedJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiNotificationsMuteSelectedJsonMutationOptions<
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

export function injectPostApiNotificationsIdStarJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiNotificationsIdStarJsonMutationOptions<
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

export function injectPostApiNotificationsSyncJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiNotificationsSyncJsonMutationOptions<
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

export function getApiNotificationsSyncingJsonQueryKey() {
  return ['api', '/api/notifications/syncing.json'] as const
}

export function getApiNotificationsSyncingJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['syncing.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApiNotificationsSyncingJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.notifications['syncing.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiNotificationsSyncingJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['syncing.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNotificationsSyncingJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiNotificationsUnreadCountJsonQueryKey() {
  return ['api', '/api/notifications/unread_count.json'] as const
}

export function getApiNotificationsUnreadCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['unread_count.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApiNotificationsUnreadCountJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.notifications['unread_count.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiNotificationsUnreadCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)['unread_count.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiNotificationsUnreadCountJsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPinnedSearchesJsonQueryKey() {
  return ['api', '/api/pinned_searches.json'] as const
}

export function getApiPinnedSearchesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['pinned_searches.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApiPinnedSearchesJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['pinned_searches.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPinnedSearchesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['pinned_searches.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPinnedSearchesJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiPinnedSearchesJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPinnedSearchesJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPinnedSearchesIdJsonQueryKey(
  args: InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$get']>,
) {
  return ['api', '/api/pinned_searches/:id.json', args] as const
}

export function getApiPinnedSearchesIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPinnedSearchesIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pinned_searches[':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPinnedSearchesIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pinned_searches)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPinnedSearchesIdJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteApiPinnedSearchesIdJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiPinnedSearchesIdJsonMutationOptions<
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

export function injectPatchApiPinnedSearchesIdJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiPinnedSearchesIdJsonMutationOptions<
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

export function getApiUsersProfileJsonQueryKey() {
  return ['api', '/api/users/profile.json'] as const
}

export function getApiUsersProfileJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)['profile.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)['profile.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersProfileJsonQueryKey>
  >({
    queryKey: getApiUsersProfileJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users['profile.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUsersProfileJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)['profile.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.users)['profile.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersProfileJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersProfileJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteApiUsersIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiUsersIdJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchApiUsersIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiUsersIdJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
