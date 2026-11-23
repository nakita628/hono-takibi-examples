import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
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

export function getApiV1GamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.games.$get>>,
) {
  return ['api', '/api/v1/games', toValue(args)] as const
}

export function getApiV1GamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.games.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.games.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Games<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.games.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.games.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.games.$get>>>>
          >,
          ReturnType<typeof getApiV1GamesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.games.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1GamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.games.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1Games32881QueryKey() {
  return ['api', '/api/v1/games/32881'] as const
}

export function getApiV1Games32881QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1Games32881QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.games['32881'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Games32881<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.games)['32881']['$get']>>>
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
                Awaited<ReturnType<(typeof client.api.v1.games)['32881']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.games)['32881']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1Games32881QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.games)['32881']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Games32881QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1Games32881QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.games['32881'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.players.$get>>,
) {
  return ['api', '/api/v1/players', toValue(args)] as const
}

export function getApiV1PlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.players.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Players<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.players.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.players.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.players.$get>>>>
          >,
          ReturnType<typeof getApiV1PlayersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.players.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1Players237QueryKey() {
  return ['api', '/api/v1/players/237'] as const
}

export function getApiV1Players237QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1Players237QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.players['237'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Players237<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.players)['237']['$get']>>>
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
                Awaited<ReturnType<(typeof client.api.v1.players)['237']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.players)['237']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1Players237QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.players)['237']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Players237QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1Players237QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.players['237'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.stats.$get>>,
) {
  return ['api', '/api/v1/stats', toValue(args)] as const
}

export function getApiV1StatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.stats.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Stats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.stats.$get>>>>
          >,
          ReturnType<typeof getApiV1StatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1StatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TeamsQueryKey() {
  return ['api', '/api/v1/teams'] as const
}

export function getApiV1TeamsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1TeamsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.teams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Teams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.teams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.teams.$get>>>>
          >,
          ReturnType<typeof getApiV1TeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1TeamsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.teams.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1Teams1QueryKey() {
  return ['api', '/api/v1/teams/1'] as const
}

export function getApiV1Teams1QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1Teams1QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.teams['1'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Teams1<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.teams)['1']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.teams)['1']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.teams)['1']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1Teams1QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.teams)['1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Teams1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1Teams1QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.teams['1'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
