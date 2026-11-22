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

export function getCreatorRolesKey() {
  return ['creator-roles'] as const
}

export function getCreatorsKey() {
  return ['creators'] as const
}

export function getDevelopersKey() {
  return ['developers'] as const
}

export function getGamesKey() {
  return ['games'] as const
}

export function getGenresKey() {
  return ['genres'] as const
}

export function getPlatformsKey() {
  return ['platforms'] as const
}

export function getPublishersKey() {
  return ['publishers'] as const
}

export function getStoresKey() {
  return ['stores'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getCreatorRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['creator-roles']['$get']>>,
) {
  return ['creator-roles', '/creator-roles', toValue(args)] as const
}

export function getCreatorRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['creator-roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreatorRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['creator-roles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreatorRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['creator-roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>
            >
          >,
          ReturnType<typeof getCreatorRolesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreatorRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreatorRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['creator-roles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreatorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.creators.$get>>,
) {
  return ['creators', '/creators', toValue(args)] as const
}

export function getCreatorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.creators.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreatorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.creators.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCreators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.creators.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>
          >,
          ReturnType<typeof getCreatorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreatorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreatorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.creators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreatorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.creators)[':id']['$get']>>,
) {
  return ['creators', '/creators/:id', toValue(args)] as const
}

export function getCreatorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.creators)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreatorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.creators[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreatorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.creators)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCreatorsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreatorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreatorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.creators[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevelopersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.developers.$get>>,
) {
  return ['developers', '/developers', toValue(args)] as const
}

export function getDevelopersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.developers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevelopersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.developers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDevelopers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.developers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
          >,
          ReturnType<typeof getDevelopersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevelopersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevelopersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.developers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevelopersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.developers)[':id']['$get']>>,
) {
  return ['developers', '/developers/:id', toValue(args)] as const
}

export function getDevelopersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.developers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevelopersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.developers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevelopersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.developers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDevelopersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevelopersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevelopersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.developers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.$get>>,
) {
  return ['games', '/games', toValue(args)] as const
}

export function getGamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
          ReturnType<typeof getGamesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesGamePkAdditionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':game_pk']['additions']['$get']>>,
) {
  return ['games', '/games/:game_pk/additions', toValue(args)] as const
}

export function getGamesGamePkAdditionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':game_pk']['additions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesGamePkAdditionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':game_pk'].additions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesGamePkAdditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':game_pk']['additions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesGamePkAdditionsQueryKey>
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
          Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkAdditionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesGamePkAdditionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':game_pk'].additions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesGamePkDevelopmentTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['development-team']['$get']>
  >,
) {
  return ['games', '/games/:game_pk/development-team', toValue(args)] as const
}

export function getGamesGamePkDevelopmentTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['development-team']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesGamePkDevelopmentTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':game_pk']['development-team'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesGamePkDevelopmentTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['development-team']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesGamePkDevelopmentTeamQueryKey>
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
          Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkDevelopmentTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesGamePkDevelopmentTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':game_pk']['development-team'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesGamePkGameSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['game-series']['$get']>
  >,
) {
  return ['games', '/games/:game_pk/game-series', toValue(args)] as const
}

export function getGamesGamePkGameSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['game-series']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesGamePkGameSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':game_pk']['game-series'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesGamePkGameSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['game-series']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesGamePkGameSeriesQueryKey>
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
          Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkGameSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesGamePkGameSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':game_pk']['game-series'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesGamePkParentGamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['parent-games']['$get']>
  >,
) {
  return ['games', '/games/:game_pk/parent-games', toValue(args)] as const
}

export function getGamesGamePkParentGamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['parent-games']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesGamePkParentGamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':game_pk']['parent-games'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesGamePkParentGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['parent-games']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesGamePkParentGamesQueryKey>
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
          Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkParentGamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesGamePkParentGamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':game_pk']['parent-games'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesGamePkScreenshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['screenshots']['$get']>
  >,
) {
  return ['games', '/games/:game_pk/screenshots', toValue(args)] as const
}

export function getGamesGamePkScreenshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['screenshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesGamePkScreenshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':game_pk'].screenshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesGamePkScreenshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games)[':game_pk']['screenshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesGamePkScreenshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkScreenshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesGamePkScreenshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':game_pk'].screenshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesGamePkStoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':game_pk']['stores']['$get']>>,
) {
  return ['games', '/games/:game_pk/stores', toValue(args)] as const
}

export function getGamesGamePkStoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':game_pk']['stores']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesGamePkStoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':game_pk'].stores.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesGamePkStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':game_pk']['stores']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesGamePkStoresQueryKey>
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
          Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkStoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesGamePkStoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':game_pk'].stores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['$get']>>,
) {
  return ['games', '/games/:id', toValue(args)] as const
}

export function getGamesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGamesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGamesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesIdAchievementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['achievements']['$get']>>,
) {
  return ['games', '/games/:id/achievements', toValue(args)] as const
}

export function getGamesIdAchievementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['achievements']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesIdAchievementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':id'].achievements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesIdAchievements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['achievements']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesIdAchievementsQueryKey>
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
          Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdAchievementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesIdAchievementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':id'].achievements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesIdMoviesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['movies']['$get']>>,
) {
  return ['games', '/games/:id/movies', toValue(args)] as const
}

export function getGamesIdMoviesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['movies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesIdMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':id'].movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['movies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesIdMoviesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesIdMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':id'].movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesIdRedditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['reddit']['$get']>>,
) {
  return ['games', '/games/:id/reddit', toValue(args)] as const
}

export function getGamesIdRedditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['reddit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesIdRedditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':id'].reddit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesIdReddit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['reddit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesIdRedditQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdRedditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesIdRedditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':id'].reddit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesIdSuggestedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['suggested']['$get']>>,
) {
  return ['games', '/games/:id/suggested', toValue(args)] as const
}

export function getGamesIdSuggestedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['suggested']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesIdSuggestedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':id'].suggested.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesIdSuggested<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['suggested']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesIdSuggestedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdSuggestedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesIdSuggestedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':id'].suggested.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesIdTwitchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['twitch']['$get']>>,
) {
  return ['games', '/games/:id/twitch', toValue(args)] as const
}

export function getGamesIdTwitchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['twitch']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesIdTwitchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':id'].twitch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesIdTwitch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['twitch']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesIdTwitchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdTwitchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesIdTwitchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':id'].twitch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesIdYoutubeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['youtube']['$get']>>,
) {
  return ['games', '/games/:id/youtube', toValue(args)] as const
}

export function getGamesIdYoutubeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['youtube']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesIdYoutubeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games[':id'].youtube.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesIdYoutube<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games)[':id']['youtube']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesIdYoutubeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdYoutubeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesIdYoutubeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games[':id'].youtube.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.$get>>,
) {
  return ['genres', '/genres', toValue(args)] as const
}

export function getGenresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genres.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenres<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
          ReturnType<typeof getGenresQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenresIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genres)[':id']['$get']>>,
) {
  return ['genres', '/genres/:id', toValue(args)] as const
}

export function getGenresIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genres)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genres[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenresId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genres)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGenresIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGenresIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genres[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platforms.$get>>,
) {
  return ['platforms', '/platforms', toValue(args)] as const
}

export function getPlatformsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platforms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platforms.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlatforms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platforms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>
          >,
          ReturnType<typeof getPlatformsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlatformsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platforms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformsListsParentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platforms.lists.parents.$get>>,
) {
  return ['platforms', '/platforms/lists/parents', toValue(args)] as const
}

export function getPlatformsListsParentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platforms.lists.parents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformsListsParentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platforms.lists.parents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformsListsParents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platforms.lists.parents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
            >
          >,
          ReturnType<typeof getPlatformsListsParentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformsListsParentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformsListsParentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platforms.lists.parents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platforms)[':id']['$get']>>,
) {
  return ['platforms', '/platforms/:id', toValue(args)] as const
}

export function getPlatformsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platforms)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platforms[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platforms)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPlatformsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platforms[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublishersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.publishers.$get>>,
) {
  return ['publishers', '/publishers', toValue(args)] as const
}

export function getPublishersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.publishers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublishersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publishers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePublishers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.publishers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>
          >,
          ReturnType<typeof getPublishersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublishersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublishersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.publishers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublishersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.publishers)[':id']['$get']>>,
) {
  return ['publishers', '/publishers/:id', toValue(args)] as const
}

export function getPublishersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.publishers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublishersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publishers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublishersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.publishers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPublishersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublishersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.publishers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stores.$get>>,
) {
  return ['stores', '/stores', toValue(args)] as const
}

export function getStoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stores.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stores.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStores<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stores.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
          ReturnType<typeof getStoresQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoresIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stores)[':id']['$get']>>,
) {
  return ['stores', '/stores/:id', toValue(args)] as const
}

export function getStoresIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stores)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoresIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stores[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoresId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stores)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getStoresIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoresIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoresIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stores[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>) {
  return ['tags', '/tags', toValue(args)] as const
}

export function getTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
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
      queryKey: computed(() => getTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':id']['$get']>>,
) {
  return ['tags', '/tags/:id', toValue(args)] as const
}

export function getTagsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTagsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
