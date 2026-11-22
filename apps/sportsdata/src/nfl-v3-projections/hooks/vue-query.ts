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

export function getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/DfsSlateOwnershipProjectionsBySlateID/:slateId',
    toValue(args),
  ] as const
}

export function getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DfsSlateOwnershipProjectionsBySlateID[':slateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDfsSlateOwnershipProjectionsBySlateIDSlateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
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
                    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
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
                    (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryKey>
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
              (typeof client)[':format']['DfsSlateOwnershipProjectionsBySlateID'][':slateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DfsSlateOwnershipProjectionsBySlateID[':slateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function getFormatDfsSlatesByWeekSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
  >,
) {
  return [':format', '/:format/DfsSlatesByWeek/:season/:week', toValue(args)] as const
}

export function getFormatDfsSlatesByWeekSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDfsSlatesByWeekSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DfsSlatesByWeek[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDfsSlatesByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
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
                    (typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatDfsSlatesByWeekSeasonWeekQueryKey>
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
            ReturnType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlatesByWeekSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDfsSlatesByWeekSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DfsSlatesByWeek[':season'][':week'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/FantasyDefenseProjectionsByGame/:season/:week',
    toValue(args),
  ] as const
}

export function getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FantasyDefenseProjectionsByGame[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFantasyDefenseProjectionsByGameSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
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
                    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
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
                    (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryKey>
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
              (typeof client)[':format']['FantasyDefenseProjectionsByGame'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFantasyDefenseProjectionsByGameSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FantasyDefenseProjectionsByGame[':season'][':week'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatFantasyDefenseProjectionsBySeasonSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
    >
  >,
) {
  return [':format', '/:format/FantasyDefenseProjectionsBySeason/:season', toValue(args)] as const
}

export function getFormatFantasyDefenseProjectionsBySeasonSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatFantasyDefenseProjectionsBySeasonSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].FantasyDefenseProjectionsBySeason[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatFantasyDefenseProjectionsBySeasonSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
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
                    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
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
                    (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatFantasyDefenseProjectionsBySeasonSeasonQueryKey>
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
              (typeof client)[':format']['FantasyDefenseProjectionsBySeason'][':season']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatFantasyDefenseProjectionsBySeasonSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatFantasyDefenseProjectionsBySeasonSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].FantasyDefenseProjectionsBySeason[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/IdpPlayerGameProjectionStatsByPlayerID/:season/:week/:playerid',
    toValue(args),
  ] as const
}

export function getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].IdpPlayerGameProjectionStatsByPlayerID[':season'][':week'][
          ':playerid'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
                    (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
                    (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey
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
              (typeof client)[':format']['IdpPlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].IdpPlayerGameProjectionStatsByPlayerID[':season'][':week'][
            ':playerid'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/IdpPlayerGameProjectionStatsByTeam/:season/:week/:team',
    toValue(args),
  ] as const
}

export function getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].IdpPlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey>
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
              (typeof client)[':format']['IdpPlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].IdpPlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/IdpPlayerGameProjectionStatsByWeek/:season/:week',
    toValue(args),
  ] as const
}

export function getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].IdpPlayerGameProjectionStatsByWeek[':season'][':week'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatIdpPlayerGameProjectionStatsByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryKey>
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
              (typeof client)[':format']['IdpPlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].IdpPlayerGameProjectionStatsByWeek[':season'][':week'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatInjuredPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>>,
) {
  return [':format', '/:format/InjuredPlayers', toValue(args)] as const
}

export function getFormatInjuredPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatInjuredPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].InjuredPlayers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatInjuredPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatInjuredPlayersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['InjuredPlayers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatInjuredPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatInjuredPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].InjuredPlayers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameProjectionStatsByPlayerID/:season/:week/:playerid',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameProjectionStatsByPlayerID[':season'][':week'][':playerid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey>
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
              (typeof client)[':format']['PlayerGameProjectionStatsByPlayerID'][':season'][':week'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameProjectionStatsByPlayerID[':season'][':week'][
            ':playerid'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameProjectionStatsByTeam/:season/:week/:team',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerGameProjectionStatsByTeamSeasonWeekTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey>
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
              (typeof client)[':format']['PlayerGameProjectionStatsByTeam'][':season'][':week'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameProjectionStatsByTeam[':season'][':week'][':team'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerGameProjectionStatsByWeek/:season/:week',
    toValue(args),
  ] as const
}

export function getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameProjectionStatsByWeek[':season'][':week'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameProjectionStatsByWeekSeasonWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
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
                    (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryKey>
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
              (typeof client)[':format']['PlayerGameProjectionStatsByWeek'][':season'][':week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameProjectionStatsByWeekSeasonWeekQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameProjectionStatsByWeek[':season'][':week'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonProjectionStatsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']>
  >,
) {
  return [':format', '/:format/PlayerSeasonProjectionStats/:season', toValue(args)] as const
}

export function getFormatPlayerSeasonProjectionStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonProjectionStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonProjectionStats[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonProjectionStatsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']>
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
                    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
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
                    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonProjectionStatsSeasonQueryKey>
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
            ReturnType<(typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonProjectionStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonProjectionStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonProjectionStats[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerSeasonProjectionStatsByPlayerID/:season/:playerid',
    toValue(args),
  ] as const
}

export function getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonProjectionStatsByPlayerID[':season'][':playerid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryKey>
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
              (typeof client)[':format']['PlayerSeasonProjectionStatsByPlayerID'][':season'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonProjectionStatsByPlayerID[':season'][':playerid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerSeasonProjectionStatsByTeam/:season/:team',
    toValue(args),
  ] as const
}

export function getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonProjectionStatsByTeam[':season'][':team'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatPlayerSeasonProjectionStatsByTeamSeasonTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
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
                    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
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
                    (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryKey>
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
              (typeof client)[':format']['PlayerSeasonProjectionStatsByTeam'][':season'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonProjectionStatsByTeam[':season'][':team'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatUpcomingDfsSlateOwnershipProjectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
  >,
) {
  return [':format', '/:format/UpcomingDfsSlateOwnershipProjections', toValue(args)] as const
}

export function getFormatUpcomingDfsSlateOwnershipProjectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatUpcomingDfsSlateOwnershipProjectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].UpcomingDfsSlateOwnershipProjections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatUpcomingDfsSlateOwnershipProjections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
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
                    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
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
                    (typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatUpcomingDfsSlateOwnershipProjectionsQueryKey>
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
            ReturnType<(typeof client)[':format']['UpcomingDfsSlateOwnershipProjections']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingDfsSlateOwnershipProjectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatUpcomingDfsSlateOwnershipProjectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].UpcomingDfsSlateOwnershipProjections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
