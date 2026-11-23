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

export function getFormatDfsSlatesByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/DfsSlatesByDate/:date', toValue(args)] as const
}

export function getFormatDfsSlatesByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDfsSlatesByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DfsSlatesByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDfsSlatesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDfsSlatesByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DfsSlatesByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatInjuredPlayersCompetitionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['InjuredPlayers'][':competition']['$get']>
  >,
) {
  return [':format', '/:format/InjuredPlayers/:competition', toValue(args)] as const
}

export function getFormatInjuredPlayersCompetitionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['InjuredPlayers'][':competition']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatInjuredPlayersCompetitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].InjuredPlayers[':competition'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatInjuredPlayersCompetition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers'][':competition']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['InjuredPlayers'][':competition']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['InjuredPlayers'][':competition']['$get']>
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
                  ReturnType<(typeof client)[':format']['InjuredPlayers'][':competition']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatInjuredPlayersCompetitionQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers'][':competition']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatInjuredPlayersCompetitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatInjuredPlayersCompetitionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].InjuredPlayers[':competition'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByCompetition'][':competition'][':date']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameProjectionStatsByCompetition/:competition/:date',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByCompetition'][':competition'][':date']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameProjectionStatsByCompetition[':competition'][':date'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerGameProjectionStatsByCompetitionCompetitionDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByCompetition'][':competition'][':date']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByCompetition'][':competition'][':date']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByCompetition'][':competition'][':date']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByCompetition'][':competition'][':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateQueryKey>
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
              (typeof client)[':format']['PlayerGameProjectionStatsByCompetition'][':competition'][':date']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameProjectionStatsByCompetition[':competition'][':date'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameProjectionStatsByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/PlayerGameProjectionStatsByDate/:date', toValue(args)] as const
}

export function getFormatPlayerGameProjectionStatsByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameProjectionStatsByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameProjectionStatsByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameProjectionStatsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']>
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameProjectionStatsByDateDateQueryKey>
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
              (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameProjectionStatsByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameProjectionStatsByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameProjectionStatsByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameProjectionStatsByPlayerDatePlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameProjectionStatsByPlayer/:date/:playerid',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameProjectionStatsByPlayerDatePlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameProjectionStatsByPlayerDatePlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameProjectionStatsByPlayer[':date'][':playerid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerGameProjectionStatsByPlayerDatePlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameProjectionStatsByPlayerDatePlayeridQueryKey>
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
              (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameProjectionStatsByPlayerDatePlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatPlayerGameProjectionStatsByPlayerDatePlayeridQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameProjectionStatsByPlayer[':date'][':playerid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/UpcomingDfsSlatesByCompetition/:competitionId',
    toValue(args),
  ] as const
}

export function getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].UpcomingDfsSlatesByCompetition[':competitionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatUpcomingDfsSlatesByCompetitionCompetitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
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
                    (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
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
                    (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey>
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
              (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].UpcomingDfsSlatesByCompetition[':competitionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
