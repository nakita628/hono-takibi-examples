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

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatAllTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['AllTeams']['$get']>>,
) {
  return [':format', '/:format/AllTeams', toValue(args)] as const
}

export function getFormatAllTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['AllTeams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatAllTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].AllTeams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatAllTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['AllTeams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatAllTeamsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['AllTeams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatAllTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatAllTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].AllTeams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatAreAnyGamesInProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>
  >,
) {
  return [':format', '/:format/AreAnyGamesInProgress', toValue(args)] as const
}

export function getFormatAreAnyGamesInProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatAreAnyGamesInProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].AreAnyGamesInProgress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatAreAnyGamesInProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatAreAnyGamesInProgressQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatAreAnyGamesInProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatAreAnyGamesInProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].AreAnyGamesInProgress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatCurrentSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>>,
) {
  return [':format', '/:format/CurrentSeason', toValue(args)] as const
}

export function getFormatCurrentSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatCurrentSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].CurrentSeason.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatCurrentSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatCurrentSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['CurrentSeason']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCurrentSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatCurrentSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].CurrentSeason.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatDepthChartsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['DepthCharts']['$get']>>,
) {
  return [':format', '/:format/DepthCharts', toValue(args)] as const
}

export function getFormatDepthChartsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['DepthCharts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDepthChartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DepthCharts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDepthCharts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['DepthCharts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['DepthCharts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['DepthCharts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['DepthCharts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatDepthChartsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['DepthCharts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDepthChartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDepthChartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DepthCharts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFreeAgentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>>,
) {
  return [':format', '/:format/FreeAgents', toValue(args)] as const
}

export function getFormatFreeAgentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFreeAgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FreeAgents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFreeAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatFreeAgentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['FreeAgents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFreeAgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFreeAgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FreeAgents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatGamesSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>>,
) {
  return [':format', '/:format/Games/:season', toValue(args)] as const
}

export function getFormatGamesSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatGamesSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Games[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatGamesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatGamesSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Games'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGamesSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatGamesSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Games[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatGamesByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/GamesByDate/:date', toValue(args)] as const
}

export function getFormatGamesByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatGamesByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].GamesByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatGamesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatGamesByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGamesByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatGamesByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].GamesByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatNewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['News']['$get']>>,
) {
  return [':format', '/:format/News', toValue(args)] as const
}

export function getFormatNewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['News']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatNewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].News.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['News']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
            >
          >,
          ReturnType<typeof getFormatNewsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['News']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatNewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].News.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatNewsByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/NewsByDate/:date', toValue(args)] as const
}

export function getFormatNewsByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatNewsByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].NewsByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatNewsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatNewsByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['NewsByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatNewsByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].NewsByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatNewsByPlayerIDPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
  >,
) {
  return [':format', '/:format/NewsByPlayerID/:playerid', toValue(args)] as const
}

export function getFormatNewsByPlayerIDPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatNewsByPlayerIDPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].NewsByPlayerID[':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatNewsByPlayerIDPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
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
                  ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatNewsByPlayerIDPlayeridQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatNewsByPlayerIDPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatNewsByPlayerIDPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].NewsByPlayerID[':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>
  >,
) {
  return [':format', '/:format/Player/:playerid', toValue(args)] as const
}

export function getFormatPlayerPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Player[':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatPlayerPlayeridQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Player[':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players']['$get']>>,
) {
  return [':format', '/:format/Players', toValue(args)] as const
}

export function getFormatPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatPlayersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayersTeamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>>,
) {
  return [':format', '/:format/Players/:team', toValue(args)] as const
}

export function getFormatPlayersTeamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayersTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Players[':team'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayersTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatPlayersTeamQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Players'][':team']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayersTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Players[':team'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRefereesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Referees']['$get']>>,
) {
  return [':format', '/:format/Referees', toValue(args)] as const
}

export function getFormatRefereesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Referees']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRefereesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Referees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatReferees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Referees']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Referees']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Referees']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Referees']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatRefereesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Referees']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRefereesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRefereesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Referees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatStadiumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Stadiums']['$get']>>,
) {
  return [':format', '/:format/Stadiums', toValue(args)] as const
}

export function getFormatStadiumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Stadiums']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatStadiumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Stadiums.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatStadiums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Stadiums']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatStadiumsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Stadiums']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatStadiumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatStadiumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Stadiums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatStandingsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>
  >,
) {
  return [':format', '/:format/Standings/:season', toValue(args)] as const
}

export function getFormatStandingsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatStandingsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Standings[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatStandingsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatStandingsSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Standings'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatStandingsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatStandingsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Standings[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamGameStatsByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/TeamGameStatsByDate/:date', toValue(args)] as const
}

export function getFormatTeamGameStatsByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamGameStatsByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].TeamGameStatsByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeamGameStatsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
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
                  ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatTeamGameStatsByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamGameStatsByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].TeamGameStatsByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/TeamGameStatsBySeason/:season/:teamid/:numberofgames',
    toValue(args),
  ] as const
}

export function getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].TeamGameStatsBySeason[':season'][':teamid'][':numberofgames'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatTeamGameStatsBySeasonSeasonTeamidNumberofgames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
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
                    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
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
                    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey>
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
              (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].TeamGameStatsBySeason[':season'][':teamid'][':numberofgames'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamSeasonStatsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
  >,
) {
  return [':format', '/:format/TeamSeasonStats/:season', toValue(args)] as const
}

export function getFormatTeamSeasonStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamSeasonStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].TeamSeasonStats[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeamSeasonStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
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
                  ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatTeamSeasonStatsSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamSeasonStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamSeasonStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].TeamSeasonStats[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['teams']['$get']>>,
) {
  return [':format', '/:format/teams', toValue(args)] as const
}

export function getFormatTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['teams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['teams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
            >
          >,
          ReturnType<typeof getFormatTeamsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['teams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
