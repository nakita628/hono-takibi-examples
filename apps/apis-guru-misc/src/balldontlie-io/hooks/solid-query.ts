import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1GamesQueryKey(args: InferRequestType<typeof client.api.v1.games.$get>) {
  return ['api', '/api/v1/games', args] as const
}

export function getApiV1GamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.games.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.games.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.games.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1GamesQueryKey>
  >({
    queryKey: getApiV1GamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.games.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Games<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.games.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.games.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1GamesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1Games32881QueryKey() {
  return ['api', '/api/v1/games/32881'] as const
}

export function getApiV1Games32881QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.games)['32881']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.games)['32881']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Games32881QueryKey>
  >({
    queryKey: getApiV1Games32881QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.games['32881'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Games32881<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.games)['32881']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.games)['32881']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1Games32881QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1Games32881QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1PlayersQueryKey(args: InferRequestType<typeof client.api.v1.players.$get>) {
  return ['api', '/api/v1/players', args] as const
}

export function getApiV1PlayersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.players.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.players.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.players.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlayersQueryKey>
  >({
    queryKey: getApiV1PlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.players.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Players<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.players.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.players.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PlayersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PlayersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1Players237QueryKey() {
  return ['api', '/api/v1/players/237'] as const
}

export function getApiV1Players237QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.players)['237']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.players)['237']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Players237QueryKey>
  >({
    queryKey: getApiV1Players237QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.players['237'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Players237<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.players)['237']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.players)['237']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1Players237QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1Players237QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1StatsQueryKey(args: InferRequestType<typeof client.api.v1.stats.$get>) {
  return ['api', '/api/v1/stats', args] as const
}

export function getApiV1StatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1StatsQueryKey>
  >({
    queryKey: getApiV1StatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Stats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.stats.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.stats.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1StatsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1StatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1TeamsQueryKey() {
  return ['api', '/api/v1/teams'] as const
}

export function getApiV1TeamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.teams.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsQueryKey>
  >({
    queryKey: getApiV1TeamsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.teams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Teams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.teams.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1TeamsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TeamsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1Teams1QueryKey() {
  return ['api', '/api/v1/teams/1'] as const
}

export function getApiV1Teams1QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.teams)['1']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.teams)['1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Teams1QueryKey>
  >({
    queryKey: getApiV1Teams1QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.teams['1'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Teams1<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.teams)['1']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.teams)['1']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1Teams1QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1Teams1QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
