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

export function getLolKey() {
  return ['lol'] as const
}

export function getLorKey() {
  return ['lor'] as const
}

export function getRiftboundKey() {
  return ['riftbound'] as const
}

export function getRiotKey() {
  return ['riot'] as const
}

export function getTftKey() {
  return ['tft'] as const
}

export function getValKey() {
  return ['val'] as const
}

export function getRiotAccountV1AccountsByPuuidPuuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
  >,
) {
  return ['riot', '/riot/account/v1/accounts/by-puuid/:puuid', toValue(args)] as const
}

export function getRiotAccountV1AccountsByPuuidPuuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRiotAccountV1AccountsByPuuidPuuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.riot.account.v1.accounts['by-puuid'][':puuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRiotAccountV1AccountsByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
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
                  ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRiotAccountV1AccountsByPuuidPuuidQueryKey>
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
            ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRiotAccountV1AccountsByPuuidPuuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRiotAccountV1AccountsByPuuidPuuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.riot.account.v1.accounts['by-puuid'][':puuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
    >
  >,
) {
  return ['riot', '/riot/account/v1/accounts/by-riot-id/:gameName/:tagLine', toValue(args)] as const
}

export function getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.riot.account.v1.accounts['by-riot-id'][':gameName'][':tagLine'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRiotAccountV1AccountsByRiotIdGameNameTagLine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
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
                    (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
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
                    (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryKey>
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
              (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.riot.account.v1.accounts['by-riot-id'][':gameName'][':tagLine'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRiotAccountV1AccountsMeQueryKey() {
  return ['riot', '/riot/account/v1/accounts/me'] as const
}

export function getRiotAccountV1AccountsMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRiotAccountV1AccountsMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.riot.account.v1.accounts.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRiotAccountV1AccountsMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>>
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
                Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>
              >
            >
          >,
          ReturnType<typeof getRiotAccountV1AccountsMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRiotAccountV1AccountsMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRiotAccountV1AccountsMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.riot.account.v1.accounts.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
    >
  >,
) {
  return [
    'riot',
    '/riot/account/v1/active-shards/by-game/:game/by-puuid/:puuid',
    toValue(args),
  ] as const
}

export function getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.riot.account.v1['active-shards']['by-game'][':game']['by-puuid'][':puuid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRiotAccountV1ActiveShardsByGameGameByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
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
                    (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
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
                    (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryKey>
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
              (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.riot.account.v1['active-shards']['by-game'][':game']['by-puuid'][':puuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRiotAccountV1RegionByGameGameByPuuidPuuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
    >
  >,
) {
  return ['riot', '/riot/account/v1/region/by-game/:game/by-puuid/:puuid', toValue(args)] as const
}

export function getRiotAccountV1RegionByGameGameByPuuidPuuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRiotAccountV1RegionByGameGameByPuuidPuuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.riot.account.v1.region['by-game'][':game']['by-puuid'][':puuid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRiotAccountV1RegionByGameGameByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
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
                    (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
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
                    (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRiotAccountV1RegionByGameGameByPuuidPuuidQueryKey>
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
              (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRiotAccountV1RegionByGameGameByPuuidPuuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRiotAccountV1RegionByGameGameByPuuidPuuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.riot.account.v1.region['by-game'][':game']['by-puuid'][':puuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
) {
  return [
    'lol',
    '/lol/champion-mastery/v4/champion-masteries/by-puuid/:encryptedPUUID',
    toValue(args),
  ] as const
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryKey>
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
              (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][
            ':encryptedPUUID'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
    >
  >,
) {
  return [
    'lol',
    '/lol/champion-mastery/v4/champion-masteries/by-puuid/:encryptedPUUID/by-champion/:championId',
    toValue(args),
  ] as const
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'][
          'by-champion'
        ][':championId'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
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
                    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
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
                    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryKey
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
              (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'][
            'by-champion'
          ][':championId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
    >
  >,
) {
  return [
    'lol',
    '/lol/champion-mastery/v4/champion-masteries/by-puuid/:encryptedPUUID/top',
    toValue(args),
  ] as const
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][
          ':encryptedPUUID'
        ].top.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
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
                    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
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
                    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryKey
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
              (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][
            ':encryptedPUUID'
          ].top.$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
) {
  return ['lol', '/lol/champion-mastery/v4/scores/by-puuid/:encryptedPUUID', toValue(args)] as const
}

export function getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['champion-mastery'].v4.scores['by-puuid'][':encryptedPUUID'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useLolChampionMasteryV4ScoresByPuuidEncryptedPUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryKey>
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
              (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['champion-mastery'].v4.scores['by-puuid'][':encryptedPUUID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getLolPlatformV3ChampionRotationsQueryKey() {
  return ['lol', '/lol/platform/v3/champion-rotations'] as const
}

export function getLolPlatformV3ChampionRotationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLolPlatformV3ChampionRotationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.platform.v3['champion-rotations'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolPlatformV3ChampionRotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
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
                Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLolPlatformV3ChampionRotationsQueryKey>
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
          Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolPlatformV3ChampionRotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLolPlatformV3ChampionRotationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.platform.v3['champion-rotations'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolClashV1PlayersByPuuidPuuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>
  >,
) {
  return ['lol', '/lol/clash/v1/players/by-puuid/:puuid', toValue(args)] as const
}

export function getLolClashV1PlayersByPuuidPuuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolClashV1PlayersByPuuidPuuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.clash.v1.players['by-puuid'][':puuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolClashV1PlayersByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>
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
                  ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLolClashV1PlayersByPuuidPuuidQueryKey>
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
          Awaited<ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolClashV1PlayersByPuuidPuuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolClashV1PlayersByPuuidPuuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.clash.v1.players['by-puuid'][':puuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolClashV1TeamsTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>,
) {
  return ['lol', '/lol/clash/v1/teams/:teamId', toValue(args)] as const
}

export function getLolClashV1TeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolClashV1TeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.clash.v1.teams[':teamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolClashV1TeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLolClashV1TeamsTeamIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolClashV1TeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolClashV1TeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.clash.v1.teams[':teamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolClashV1TournamentsQueryKey() {
  return ['lol', '/lol/clash/v1/tournaments'] as const
}

export function getLolClashV1TournamentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLolClashV1TournamentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.clash.v1.tournaments.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolClashV1Tournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
            >
          >,
          ReturnType<typeof getLolClashV1TournamentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolClashV1TournamentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLolClashV1TournamentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.clash.v1.tournaments.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolClashV1TournamentsByTeamTeamIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
  >,
) {
  return ['lol', '/lol/clash/v1/tournaments/by-team/:teamId', toValue(args)] as const
}

export function getLolClashV1TournamentsByTeamTeamIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolClashV1TournamentsByTeamTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.clash.v1.tournaments['by-team'][':teamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolClashV1TournamentsByTeamTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
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
                  ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLolClashV1TournamentsByTeamTeamIdQueryKey>
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
            ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolClashV1TournamentsByTeamTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolClashV1TournamentsByTeamTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.clash.v1.tournaments['by-team'][':teamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolClashV1TournamentsTournamentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>
  >,
) {
  return ['lol', '/lol/clash/v1/tournaments/:tournamentId', toValue(args)] as const
}

export function getLolClashV1TournamentsTournamentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolClashV1TournamentsTournamentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.clash.v1.tournaments[':tournamentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolClashV1TournamentsTournamentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>
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
                  ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLolClashV1TournamentsTournamentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolClashV1TournamentsTournamentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolClashV1TournamentsTournamentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.clash.v1.tournaments[':tournamentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolLeagueExpV4EntriesQueueTierDivisionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
    >
  >,
) {
  return ['lol', '/lol/league-exp/v4/entries/:queue/:tier/:division', toValue(args)] as const
}

export function getLolLeagueExpV4EntriesQueueTierDivisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolLeagueExpV4EntriesQueueTierDivisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['league-exp'].v4.entries[':queue'][':tier'][':division'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolLeagueExpV4EntriesQueueTierDivision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
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
                    (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
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
                    (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolLeagueExpV4EntriesQueueTierDivisionQueryKey>
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
              (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolLeagueExpV4EntriesQueueTierDivisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolLeagueExpV4EntriesQueueTierDivisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['league-exp'].v4.entries[':queue'][':tier'][':division'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolLeagueV4ChallengerleaguesByQueueQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']>
  >,
) {
  return ['lol', '/lol/league/v4/challengerleagues/by-queue/:queue', toValue(args)] as const
}

export function getLolLeagueV4ChallengerleaguesByQueueQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolLeagueV4ChallengerleaguesByQueueQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.league.v4.challengerleagues['by-queue'][':queue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolLeagueV4ChallengerleaguesByQueueQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']>
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
                    (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
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
                    (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolLeagueV4ChallengerleaguesByQueueQueueQueryKey>
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
              (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolLeagueV4ChallengerleaguesByQueueQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolLeagueV4ChallengerleaguesByQueueQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.league.v4.challengerleagues['by-queue'][':queue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']>
  >,
) {
  return ['lol', '/lol/league/v4/entries/by-puuid/:encryptedPUUID', toValue(args)] as const
}

export function getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.league.v4.entries['by-puuid'][':encryptedPUUID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolLeagueV4EntriesByPuuidEncryptedPUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']>
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
                    (typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryKey>
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
            ReturnType<(typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.league.v4.entries['by-puuid'][':encryptedPUUID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolLeagueV4EntriesQueueTierDivisionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']>
  >,
) {
  return ['lol', '/lol/league/v4/entries/:queue/:tier/:division', toValue(args)] as const
}

export function getLolLeagueV4EntriesQueueTierDivisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolLeagueV4EntriesQueueTierDivisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.league.v4.entries[':queue'][':tier'][':division'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolLeagueV4EntriesQueueTierDivision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']>
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
                    (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
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
                    (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolLeagueV4EntriesQueueTierDivisionQueryKey>
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
              (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolLeagueV4EntriesQueueTierDivisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolLeagueV4EntriesQueueTierDivisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.league.v4.entries[':queue'][':tier'][':division'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolLeagueV4GrandmasterleaguesByQueueQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']>
  >,
) {
  return ['lol', '/lol/league/v4/grandmasterleagues/by-queue/:queue', toValue(args)] as const
}

export function getLolLeagueV4GrandmasterleaguesByQueueQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolLeagueV4GrandmasterleaguesByQueueQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.league.v4.grandmasterleagues['by-queue'][':queue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolLeagueV4GrandmasterleaguesByQueueQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']>
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
                    (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
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
                    (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolLeagueV4GrandmasterleaguesByQueueQueueQueryKey>
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
              (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolLeagueV4GrandmasterleaguesByQueueQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolLeagueV4GrandmasterleaguesByQueueQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.league.v4.grandmasterleagues['by-queue'][':queue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolLeagueV4MasterleaguesByQueueQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>
  >,
) {
  return ['lol', '/lol/league/v4/masterleagues/by-queue/:queue', toValue(args)] as const
}

export function getLolLeagueV4MasterleaguesByQueueQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolLeagueV4MasterleaguesByQueueQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.league.v4.masterleagues['by-queue'][':queue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolLeagueV4MasterleaguesByQueueQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>
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
                    (typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']
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
                    (typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolLeagueV4MasterleaguesByQueueQueueQueryKey>
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
            ReturnType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolLeagueV4MasterleaguesByQueueQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolLeagueV4MasterleaguesByQueueQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.league.v4.masterleagues['by-queue'][':queue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolChallengesV1ChallengesConfigQueryKey() {
  return ['lol', '/lol/challenges/v1/challenges/config'] as const
}

export function getLolChallengesV1ChallengesConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLolChallengesV1ChallengesConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.challenges.v1.challenges.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolChallengesV1ChallengesConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
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
                Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
              >
            >
          >,
          ReturnType<typeof getLolChallengesV1ChallengesConfigQueryKey>
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
          Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolChallengesV1ChallengesConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLolChallengesV1ChallengesConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.challenges.v1.challenges.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolChallengesV1ChallengesPercentilesQueryKey() {
  return ['lol', '/lol/challenges/v1/challenges/percentiles'] as const
}

export function getLolChallengesV1ChallengesPercentilesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getLolChallengesV1ChallengesPercentilesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.challenges.v1.challenges.percentiles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolChallengesV1ChallengesPercentiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
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
                Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
              >
            >
          >,
          ReturnType<typeof getLolChallengesV1ChallengesPercentilesQueryKey>
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
          Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolChallengesV1ChallengesPercentilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLolChallengesV1ChallengesPercentilesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.challenges.v1.challenges.percentiles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolChallengesV1ChallengesChallengeIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']>
  >,
) {
  return ['lol', '/lol/challenges/v1/challenges/:challengeId/config', toValue(args)] as const
}

export function getLolChallengesV1ChallengesChallengeIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolChallengesV1ChallengesChallengeIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.challenges.v1.challenges[':challengeId'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolChallengesV1ChallengesChallengeIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']>
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
                    (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
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
                    (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolChallengesV1ChallengesChallengeIdConfigQueryKey>
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
              (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolChallengesV1ChallengesChallengeIdConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolChallengesV1ChallengesChallengeIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.challenges.v1.challenges[':challengeId'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
    >
  >,
) {
  return [
    'lol',
    '/lol/challenges/v1/challenges/:challengeId/leaderboards/by-level/:level',
    toValue(args),
  ] as const
}

export function getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.challenges.v1.challenges[':challengeId'].leaderboards['by-level'][':level'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
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
                    (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
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
                    (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryKey>
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
              (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.challenges.v1.challenges[':challengeId'].leaderboards['by-level'][
            ':level'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getLolChallengesV1ChallengesChallengeIdPercentilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
    >
  >,
) {
  return ['lol', '/lol/challenges/v1/challenges/:challengeId/percentiles', toValue(args)] as const
}

export function getLolChallengesV1ChallengesChallengeIdPercentilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolChallengesV1ChallengesChallengeIdPercentilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.challenges.v1.challenges[':challengeId'].percentiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolChallengesV1ChallengesChallengeIdPercentiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
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
                    (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
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
                    (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolChallengesV1ChallengesChallengeIdPercentilesQueryKey>
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
              (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolChallengesV1ChallengesChallengeIdPercentilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolChallengesV1ChallengesChallengeIdPercentilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.challenges.v1.challenges[':challengeId'].percentiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolChallengesV1PlayerDataPuuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>
  >,
) {
  return ['lol', '/lol/challenges/v1/player-data/:puuid', toValue(args)] as const
}

export function getLolChallengesV1PlayerDataPuuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolChallengesV1PlayerDataPuuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.challenges.v1['player-data'][':puuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolChallengesV1PlayerDataPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>
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
                  ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLolChallengesV1PlayerDataPuuidQueryKey>
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
          Awaited<ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolChallengesV1PlayerDataPuuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolChallengesV1PlayerDataPuuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.challenges.v1['player-data'][':puuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolRsoMatchV1MatchesIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>
  >,
) {
  return ['lol', '/lol/rso-match/v1/matches/ids', toValue(args)] as const
}

export function getLolRsoMatchV1MatchesIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolRsoMatchV1MatchesIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['rso-match'].v1.matches.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolRsoMatchV1MatchesIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>
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
                  ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLolRsoMatchV1MatchesIdsQueryKey>
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
          Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolRsoMatchV1MatchesIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolRsoMatchV1MatchesIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['rso-match'].v1.matches.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolRsoMatchV1MatchesMatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>
  >,
) {
  return ['lol', '/lol/rso-match/v1/matches/:matchId', toValue(args)] as const
}

export function getLolRsoMatchV1MatchesMatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolRsoMatchV1MatchesMatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['rso-match'].v1.matches[':matchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolRsoMatchV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>
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
                  ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLolRsoMatchV1MatchesMatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolRsoMatchV1MatchesMatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolRsoMatchV1MatchesMatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['rso-match'].v1.matches[':matchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolRsoMatchV1MatchesMatchIdTimelineQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
    >
  >,
) {
  return ['lol', '/lol/rso-match/v1/matches/:matchId/timeline', toValue(args)] as const
}

export function getLolRsoMatchV1MatchesMatchIdTimelineQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolRsoMatchV1MatchesMatchIdTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['rso-match'].v1.matches[':matchId'].timeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolRsoMatchV1MatchesMatchIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
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
                    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
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
                    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolRsoMatchV1MatchesMatchIdTimelineQueryKey>
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
              (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolRsoMatchV1MatchesMatchIdTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolRsoMatchV1MatchesMatchIdTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['rso-match'].v1.matches[':matchId'].timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolStatusV4PlatformDataQueryKey() {
  return ['lol', '/lol/status/v4/platform-data'] as const
}

export function getLolStatusV4PlatformDataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLolStatusV4PlatformDataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.status.v4['platform-data'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolStatusV4PlatformData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
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
                Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLolStatusV4PlatformDataQueryKey>
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
          Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolStatusV4PlatformDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLolStatusV4PlatformDataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.status.v4['platform-data'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLorDeckV1DecksMeQueryKey() {
  return ['lor', '/lor/deck/v1/decks/me'] as const
}

export function getLorDeckV1DecksMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLorDeckV1DecksMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lor.deck.v1.decks.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLorDeckV1DecksMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>
            >
          >,
          ReturnType<typeof getLorDeckV1DecksMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLorDeckV1DecksMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLorDeckV1DecksMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lor.deck.v1.decks.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLorDeckV1DecksMeMutationKey() {
  return ['lor', '/lor/deck/v1/decks/me', 'POST'] as const
}

export function getPostLorDeckV1DecksMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.lor.deck.v1.decks.me.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLorDeckV1DecksMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lor.deck.v1.decks.me.$post>) {
      return parseResponse(client.lor.deck.v1.decks.me.$post(args, options))
    },
  })
}

export function usePostLorDeckV1DecksMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.lor.deck.v1.decks.me.$post>,
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
  const mutationDefaults = getPostLorDeckV1DecksMeMutationOptions<TError, TOnMutateResult>(
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

export function getLorInventoryV1CardsMeQueryKey() {
  return ['lor', '/lor/inventory/v1/cards/me'] as const
}

export function getLorInventoryV1CardsMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLorInventoryV1CardsMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lor.inventory.v1.cards.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLorInventoryV1CardsMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
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
                Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>
              >
            >
          >,
          ReturnType<typeof getLorInventoryV1CardsMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLorInventoryV1CardsMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLorInventoryV1CardsMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lor.inventory.v1.cards.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLorMatchV1MatchesByPuuidPuuidIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
  >,
) {
  return ['lor', '/lor/match/v1/matches/by-puuid/:puuid/ids', toValue(args)] as const
}

export function getLorMatchV1MatchesByPuuidPuuidIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLorMatchV1MatchesByPuuidPuuidIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lor.match.v1.matches['by-puuid'][':puuid'].ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLorMatchV1MatchesByPuuidPuuidIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
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
                    (typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']
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
                    (typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLorMatchV1MatchesByPuuidPuuidIdsQueryKey>
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
            ReturnType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLorMatchV1MatchesByPuuidPuuidIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLorMatchV1MatchesByPuuidPuuidIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lor.match.v1.matches['by-puuid'][':puuid'].ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLorMatchV1MatchesMatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>
  >,
) {
  return ['lor', '/lor/match/v1/matches/:matchId', toValue(args)] as const
}

export function getLorMatchV1MatchesMatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLorMatchV1MatchesMatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lor.match.v1.matches[':matchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLorMatchV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLorMatchV1MatchesMatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLorMatchV1MatchesMatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLorMatchV1MatchesMatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lor.match.v1.matches[':matchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLorRankedV1LeaderboardsQueryKey() {
  return ['lor', '/lor/ranked/v1/leaderboards'] as const
}

export function getLorRankedV1LeaderboardsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLorRankedV1LeaderboardsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lor.ranked.v1.leaderboards.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLorRankedV1Leaderboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
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
                Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>
              >
            >
          >,
          ReturnType<typeof getLorRankedV1LeaderboardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLorRankedV1LeaderboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLorRankedV1LeaderboardsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lor.ranked.v1.leaderboards.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLorStatusV1PlatformDataQueryKey() {
  return ['lor', '/lor/status/v1/platform-data'] as const
}

export function getLorStatusV1PlatformDataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLorStatusV1PlatformDataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lor.status.v1['platform-data'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLorStatusV1PlatformData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
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
                Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLorStatusV1PlatformDataQueryKey>
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
          Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLorStatusV1PlatformDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLorStatusV1PlatformDataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lor.status.v1['platform-data'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolMatchV5MatchesByPuuidPuuidIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>
  >,
) {
  return ['lol', '/lol/match/v5/matches/by-puuid/:puuid/ids', toValue(args)] as const
}

export function getLolMatchV5MatchesByPuuidPuuidIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolMatchV5MatchesByPuuidPuuidIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.match.v5.matches['by-puuid'][':puuid'].ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolMatchV5MatchesByPuuidPuuidIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>
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
                    (typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']
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
                    (typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolMatchV5MatchesByPuuidPuuidIdsQueryKey>
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
            ReturnType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolMatchV5MatchesByPuuidPuuidIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolMatchV5MatchesByPuuidPuuidIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.match.v5.matches['by-puuid'][':puuid'].ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolMatchV5MatchesReplaysQueryKey() {
  return ['lol', '/lol/match/v5/matches/replays'] as const
}

export function getLolMatchV5MatchesReplaysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLolMatchV5MatchesReplaysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.match.v5.matches.replays.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolMatchV5MatchesReplays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>>
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
                Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>
              >
            >
          >,
          ReturnType<typeof getLolMatchV5MatchesReplaysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolMatchV5MatchesReplaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLolMatchV5MatchesReplaysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.match.v5.matches.replays.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolMatchV5MatchesMatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>
  >,
) {
  return ['lol', '/lol/match/v5/matches/:matchId', toValue(args)] as const
}

export function getLolMatchV5MatchesMatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolMatchV5MatchesMatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.match.v5.matches[':matchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolMatchV5MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLolMatchV5MatchesMatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolMatchV5MatchesMatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolMatchV5MatchesMatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.match.v5.matches[':matchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolMatchV5MatchesMatchIdTimelineQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>
  >,
) {
  return ['lol', '/lol/match/v5/matches/:matchId/timeline', toValue(args)] as const
}

export function getLolMatchV5MatchesMatchIdTimelineQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolMatchV5MatchesMatchIdTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.match.v5.matches[':matchId'].timeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolMatchV5MatchesMatchIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>
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
                  ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLolMatchV5MatchesMatchIdTimelineQueryKey>
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
          Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolMatchV5MatchesMatchIdTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolMatchV5MatchesMatchIdTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.match.v5.matches[':matchId'].timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRiftboundContentV1ContentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riftbound.content.v1.contents.$get>>,
) {
  return ['riftbound', '/riftbound/content/v1/contents', toValue(args)] as const
}

export function getRiftboundContentV1ContentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riftbound.content.v1.contents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRiftboundContentV1ContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.riftbound.content.v1.contents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRiftboundContentV1Contents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riftbound.content.v1.contents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>
              >
            >
          >,
          ReturnType<typeof getRiftboundContentV1ContentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRiftboundContentV1ContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRiftboundContentV1ContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.riftbound.content.v1.contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
) {
  return [
    'lol',
    '/lol/spectator/tft/v5/active-games/by-puuid/:encryptedPUUID',
    toValue(args),
  ] as const
}

export function getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.spectator.tft.v5['active-games']['by-puuid'][':encryptedPUUID'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryKey>
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
              (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.spectator.tft.v5['active-games']['by-puuid'][':encryptedPUUID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
    >
  >,
) {
  return [
    'lol',
    '/lol/spectator/v5/active-games/by-summoner/:encryptedPUUID',
    toValue(args),
  ] as const
}

export function getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.spectator.v5['active-games']['by-summoner'][':encryptedPUUID'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useLolSpectatorV5ActiveGamesBySummonerEncryptedPUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
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
                    (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
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
                    (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryKey>
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
              (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.spectator.v5['active-games']['by-summoner'][':encryptedPUUID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
) {
  return ['lol', '/lol/summoner/v4/summoners/by-puuid/:encryptedPUUID', toValue(args)] as const
}

export function getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.summoner.v4.summoners['by-puuid'][':encryptedPUUID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolSummonerV4SummonersByPuuidEncryptedPUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryKey>
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
              (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.summoner.v4.summoners['by-puuid'][':encryptedPUUID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolSummonerV4SummonersMeQueryKey() {
  return ['lol', '/lol/summoner/v4/summoners/me'] as const
}

export function getLolSummonerV4SummonersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLolSummonerV4SummonersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.summoner.v4.summoners.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolSummonerV4SummonersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>>
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
                Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>
              >
            >
          >,
          ReturnType<typeof getLolSummonerV4SummonersMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolSummonerV4SummonersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLolSummonerV4SummonersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.summoner.v4.summoners.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftLeagueV1ByPuuidPuuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>
  >,
) {
  return ['tft', '/tft/league/v1/by-puuid/:puuid', toValue(args)] as const
}

export function getTftLeagueV1ByPuuidPuuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTftLeagueV1ByPuuidPuuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.league.v1['by-puuid'][':puuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftLeagueV1ByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTftLeagueV1ByPuuidPuuidQueryKey>
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
          Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftLeagueV1ByPuuidPuuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTftLeagueV1ByPuuidPuuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.league.v1['by-puuid'][':puuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftLeagueV1ChallengerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tft.league.v1.challenger.$get>>,
) {
  return ['tft', '/tft/league/v1/challenger', toValue(args)] as const
}

export function getTftLeagueV1ChallengerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tft.league.v1.challenger.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTftLeagueV1ChallengerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.league.v1.challenger.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftLeagueV1Challenger<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tft.league.v1.challenger.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
            >
          >,
          ReturnType<typeof getTftLeagueV1ChallengerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftLeagueV1ChallengerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTftLeagueV1ChallengerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.league.v1.challenger.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftLeagueV1EntriesTierDivisionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>
  >,
) {
  return ['tft', '/tft/league/v1/entries/:tier/:division', toValue(args)] as const
}

export function getTftLeagueV1EntriesTierDivisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTftLeagueV1EntriesTierDivisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.league.v1.entries[':tier'][':division'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftLeagueV1EntriesTierDivision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>
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
                  ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTftLeagueV1EntriesTierDivisionQueryKey>
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
          Awaited<ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftLeagueV1EntriesTierDivisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTftLeagueV1EntriesTierDivisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.league.v1.entries[':tier'][':division'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftLeagueV1GrandmasterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tft.league.v1.grandmaster.$get>>,
) {
  return ['tft', '/tft/league/v1/grandmaster', toValue(args)] as const
}

export function getTftLeagueV1GrandmasterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tft.league.v1.grandmaster.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTftLeagueV1GrandmasterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.league.v1.grandmaster.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftLeagueV1Grandmaster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tft.league.v1.grandmaster.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>
              >
            >
          >,
          ReturnType<typeof getTftLeagueV1GrandmasterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftLeagueV1GrandmasterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTftLeagueV1GrandmasterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.league.v1.grandmaster.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftLeagueV1MasterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tft.league.v1.master.$get>>,
) {
  return ['tft', '/tft/league/v1/master', toValue(args)] as const
}

export function getTftLeagueV1MasterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tft.league.v1.master.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTftLeagueV1MasterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.league.v1.master.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftLeagueV1Master<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tft.league.v1.master.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>
            >
          >,
          ReturnType<typeof getTftLeagueV1MasterQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTftLeagueV1MasterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTftLeagueV1MasterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.league.v1.master.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftLeagueV1RatedLaddersQueueTopQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>
  >,
) {
  return ['tft', '/tft/league/v1/rated-ladders/:queue/top', toValue(args)] as const
}

export function getTftLeagueV1RatedLaddersQueueTopQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTftLeagueV1RatedLaddersQueueTopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.league.v1['rated-ladders'][':queue'].top.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftLeagueV1RatedLaddersQueueTop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>
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
                    (typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']
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
                    (typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTftLeagueV1RatedLaddersQueueTopQueryKey>
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
            ReturnType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftLeagueV1RatedLaddersQueueTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTftLeagueV1RatedLaddersQueueTopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.league.v1['rated-ladders'][':queue'].top.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftMatchV1MatchesByPuuidPuuidIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
  >,
) {
  return ['tft', '/tft/match/v1/matches/by-puuid/:puuid/ids', toValue(args)] as const
}

export function getTftMatchV1MatchesByPuuidPuuidIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTftMatchV1MatchesByPuuidPuuidIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.match.v1.matches['by-puuid'][':puuid'].ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftMatchV1MatchesByPuuidPuuidIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
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
                    (typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']
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
                    (typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTftMatchV1MatchesByPuuidPuuidIdsQueryKey>
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
            ReturnType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftMatchV1MatchesByPuuidPuuidIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTftMatchV1MatchesByPuuidPuuidIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.match.v1.matches['by-puuid'][':puuid'].ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftMatchV1MatchesMatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>
  >,
) {
  return ['tft', '/tft/match/v1/matches/:matchId', toValue(args)] as const
}

export function getTftMatchV1MatchesMatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTftMatchV1MatchesMatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.match.v1.matches[':matchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftMatchV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTftMatchV1MatchesMatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftMatchV1MatchesMatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTftMatchV1MatchesMatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.match.v1.matches[':matchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftStatusV1PlatformDataQueryKey() {
  return ['tft', '/tft/status/v1/platform-data'] as const
}

export function getTftStatusV1PlatformDataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTftStatusV1PlatformDataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.status.v1['platform-data'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftStatusV1PlatformData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
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
                Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTftStatusV1PlatformDataQueryKey>
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
          Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftStatusV1PlatformDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTftStatusV1PlatformDataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.status.v1['platform-data'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
) {
  return ['tft', '/tft/summoner/v1/summoners/by-puuid/:encryptedPUUID', toValue(args)] as const
}

export function getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.summoner.v1.summoners['by-puuid'][':encryptedPUUID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftSummonerV1SummonersByPuuidEncryptedPUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
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
                    (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryKey>
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
              (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.summoner.v1.summoners['by-puuid'][':encryptedPUUID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTftSummonerV1SummonersMeQueryKey() {
  return ['tft', '/tft/summoner/v1/summoners/me'] as const
}

export function getTftSummonerV1SummonersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTftSummonerV1SummonersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tft.summoner.v1.summoners.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTftSummonerV1SummonersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>>
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
                Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>
              >
            >
          >,
          ReturnType<typeof getTftSummonerV1SummonersMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftSummonerV1SummonersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTftSummonerV1SummonersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tft.summoner.v1.summoners.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLolTournamentStubV5CodesMutationKey() {
  return ['lol', '/lol/tournament-stub/v5/codes', 'POST'] as const
}

export function getPostLolTournamentStubV5CodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol)['tournament-stub']['v5']['codes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lol)['tournament-stub']['v5']['codes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLolTournamentStubV5CodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lol)['tournament-stub']['v5']['codes']['$post']>,
    ) {
      return parseResponse(client.lol['tournament-stub'].v5.codes.$post(args, options))
    },
  })
}

export function usePostLolTournamentStubV5Codes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lol)['tournament-stub']['v5']['codes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lol)['tournament-stub']['v5']['codes']['$post']>,
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
  const mutationDefaults = getPostLolTournamentStubV5CodesMutationOptions<TError, TOnMutateResult>(
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

export function getLolTournamentStubV5CodesTournamentCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
    >
  >,
) {
  return ['lol', '/lol/tournament-stub/v5/codes/:tournamentCode', toValue(args)] as const
}

export function getLolTournamentStubV5CodesTournamentCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolTournamentStubV5CodesTournamentCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['tournament-stub'].v5.codes[':tournamentCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolTournamentStubV5CodesTournamentCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
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
                    (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
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
                    (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolTournamentStubV5CodesTournamentCodeQueryKey>
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
              (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolTournamentStubV5CodesTournamentCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolTournamentStubV5CodesTournamentCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['tournament-stub'].v5.codes[':tournamentCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
    >
  >,
) {
  return [
    'lol',
    '/lol/tournament-stub/v5/lobby-events/by-code/:tournamentCode',
    toValue(args),
  ] as const
}

export function getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol['tournament-stub'].v5['lobby-events']['by-code'][':tournamentCode'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useLolTournamentStubV5LobbyEventsByCodeTournamentCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
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
                    (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
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
                    (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryKey>
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
              (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol['tournament-stub'].v5['lobby-events']['by-code'][':tournamentCode'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostLolTournamentStubV5ProvidersMutationKey() {
  return ['lol', '/lol/tournament-stub/v5/providers', 'POST'] as const
}

export function getPostLolTournamentStubV5ProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLolTournamentStubV5ProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>,
    ) {
      return parseResponse(client.lol['tournament-stub'].v5.providers.$post(args, options))
    },
  })
}

export function usePostLolTournamentStubV5Providers<
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
                  ReturnType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>,
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
  const mutationDefaults = getPostLolTournamentStubV5ProvidersMutationOptions<
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

export function getPostLolTournamentStubV5TournamentsMutationKey() {
  return ['lol', '/lol/tournament-stub/v5/tournaments', 'POST'] as const
}

export function getPostLolTournamentStubV5TournamentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLolTournamentStubV5TournamentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>,
    ) {
      return parseResponse(client.lol['tournament-stub'].v5.tournaments.$post(args, options))
    },
  })
}

export function usePostLolTournamentStubV5Tournaments<
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
                  ReturnType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>,
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
  const mutationDefaults = getPostLolTournamentStubV5TournamentsMutationOptions<
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

export function getPostLolTournamentV5CodesMutationKey() {
  return ['lol', '/lol/tournament/v5/codes', 'POST'] as const
}

export function getPostLolTournamentV5CodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.tournament.v5.codes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.lol.tournament.v5.codes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLolTournamentV5CodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lol.tournament.v5.codes.$post>) {
      return parseResponse(client.lol.tournament.v5.codes.$post(args, options))
    },
  })
}

export function usePostLolTournamentV5Codes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lol.tournament.v5.codes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.lol.tournament.v5.codes.$post>,
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
  const mutationDefaults = getPostLolTournamentV5CodesMutationOptions<TError, TOnMutateResult>(
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

export function getLolTournamentV5CodesTournamentCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>
  >,
) {
  return ['lol', '/lol/tournament/v5/codes/:tournamentCode', toValue(args)] as const
}

export function getLolTournamentV5CodesTournamentCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolTournamentV5CodesTournamentCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.tournament.v5.codes[':tournamentCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolTournamentV5CodesTournamentCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>
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
                  ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLolTournamentV5CodesTournamentCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolTournamentV5CodesTournamentCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolTournamentV5CodesTournamentCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.tournament.v5.codes[':tournamentCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLolTournamentV5CodesTournamentCodeMutationKey() {
  return ['lol', '/lol/tournament/v5/codes/:tournamentCode', 'PUT'] as const
}

export function getPutLolTournamentV5CodesTournamentCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLolTournamentV5CodesTournamentCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>,
    ) {
      return parseResponse(client.lol.tournament.v5.codes[':tournamentCode'].$put(args, options))
    },
  })
}

export function usePutLolTournamentV5CodesTournamentCode<
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
                  ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>,
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
  const mutationDefaults = getPutLolTournamentV5CodesTournamentCodeMutationOptions<
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

export function getLolTournamentV5GamesByCodeTournamentCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']>
  >,
) {
  return ['lol', '/lol/tournament/v5/games/by-code/:tournamentCode', toValue(args)] as const
}

export function getLolTournamentV5GamesByCodeTournamentCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolTournamentV5GamesByCodeTournamentCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.tournament.v5.games['by-code'][':tournamentCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolTournamentV5GamesByCodeTournamentCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']>
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
                    (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
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
                    (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolTournamentV5GamesByCodeTournamentCodeQueryKey>
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
              (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolTournamentV5GamesByCodeTournamentCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolTournamentV5GamesByCodeTournamentCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.tournament.v5.games['by-code'][':tournamentCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
    >
  >,
) {
  return ['lol', '/lol/tournament/v5/lobby-events/by-code/:tournamentCode', toValue(args)] as const
}

export function getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lol.tournament.v5['lobby-events']['by-code'][':tournamentCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLolTournamentV5LobbyEventsByCodeTournamentCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
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
                    (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
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
                    (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryKey>
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
              (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lol.tournament.v5['lobby-events']['by-code'][':tournamentCode'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostLolTournamentV5ProvidersMutationKey() {
  return ['lol', '/lol/tournament/v5/providers', 'POST'] as const
}

export function getPostLolTournamentV5ProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.tournament.v5.providers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.lol.tournament.v5.providers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLolTournamentV5ProvidersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lol.tournament.v5.providers.$post>) {
      return parseResponse(client.lol.tournament.v5.providers.$post(args, options))
    },
  })
}

export function usePostLolTournamentV5Providers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.lol.tournament.v5.providers.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.lol.tournament.v5.providers.$post>,
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
  const mutationDefaults = getPostLolTournamentV5ProvidersMutationOptions<TError, TOnMutateResult>(
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

export function getPostLolTournamentV5TournamentsMutationKey() {
  return ['lol', '/lol/tournament/v5/tournaments', 'POST'] as const
}

export function getPostLolTournamentV5TournamentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.tournament.v5.tournaments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.lol.tournament.v5.tournaments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLolTournamentV5TournamentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lol.tournament.v5.tournaments.$post>) {
      return parseResponse(client.lol.tournament.v5.tournaments.$post(args, options))
    },
  })
}

export function usePostLolTournamentV5Tournaments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.lol.tournament.v5.tournaments.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.lol.tournament.v5.tournaments.$post>,
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
  const mutationDefaults = getPostLolTournamentV5TournamentsMutationOptions<
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

export function getValMatchConsoleV1MatchesMatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>
  >,
) {
  return ['val', '/val/match/console/v1/matches/:matchId', toValue(args)] as const
}

export function getValMatchConsoleV1MatchesMatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValMatchConsoleV1MatchesMatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.match.console.v1.matches[':matchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValMatchConsoleV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>
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
                  ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getValMatchConsoleV1MatchesMatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValMatchConsoleV1MatchesMatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValMatchConsoleV1MatchesMatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.val.match.console.v1.matches[':matchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValMatchConsoleV1MatchlistsByPuuidPuuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']>
  >,
) {
  return ['val', '/val/match/console/v1/matchlists/by-puuid/:puuid', toValue(args)] as const
}

export function getValMatchConsoleV1MatchlistsByPuuidPuuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValMatchConsoleV1MatchlistsByPuuidPuuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.match.console.v1.matchlists['by-puuid'][':puuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValMatchConsoleV1MatchlistsByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']>
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
                    (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
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
                    (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getValMatchConsoleV1MatchlistsByPuuidPuuidQueryKey>
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
              (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValMatchConsoleV1MatchlistsByPuuidPuuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValMatchConsoleV1MatchlistsByPuuidPuuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.val.match.console.v1.matchlists['by-puuid'][':puuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValMatchConsoleV1RecentMatchesByQueueQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
    >
  >,
) {
  return ['val', '/val/match/console/v1/recent-matches/by-queue/:queue', toValue(args)] as const
}

export function getValMatchConsoleV1RecentMatchesByQueueQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValMatchConsoleV1RecentMatchesByQueueQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.match.console.v1['recent-matches']['by-queue'][':queue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValMatchConsoleV1RecentMatchesByQueueQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
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
                    (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
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
                    (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getValMatchConsoleV1RecentMatchesByQueueQueueQueryKey>
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
              (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValMatchConsoleV1RecentMatchesByQueueQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValMatchConsoleV1RecentMatchesByQueueQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.val.match.console.v1['recent-matches']['by-queue'][':queue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValConsoleRankedV1LeaderboardsByActActIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
  >,
) {
  return ['val', '/val/console/ranked/v1/leaderboards/by-act/:actId', toValue(args)] as const
}

export function getValConsoleRankedV1LeaderboardsByActActIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValConsoleRankedV1LeaderboardsByActActIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.console.ranked.v1.leaderboards['by-act'][':actId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValConsoleRankedV1LeaderboardsByActActId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
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
                    (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
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
                    (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getValConsoleRankedV1LeaderboardsByActActIdQueryKey>
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
              (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValConsoleRankedV1LeaderboardsByActActIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValConsoleRankedV1LeaderboardsByActActIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.val.console.ranked.v1.leaderboards['by-act'][':actId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValContentV1ContentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.val.content.v1.contents.$get>>,
) {
  return ['val', '/val/content/v1/contents', toValue(args)] as const
}

export function getValContentV1ContentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.val.content.v1.contents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValContentV1ContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.content.v1.contents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValContentV1Contents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.val.content.v1.contents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
            >
          >,
          ReturnType<typeof getValContentV1ContentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValContentV1ContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValContentV1ContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.val.content.v1.contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValMatchV1MatchesMatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>
  >,
) {
  return ['val', '/val/match/v1/matches/:matchId', toValue(args)] as const
}

export function getValMatchV1MatchesMatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValMatchV1MatchesMatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.match.v1.matches[':matchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValMatchV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getValMatchV1MatchesMatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValMatchV1MatchesMatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValMatchV1MatchesMatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.val.match.v1.matches[':matchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValMatchV1MatchlistsByPuuidPuuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>
  >,
) {
  return ['val', '/val/match/v1/matchlists/by-puuid/:puuid', toValue(args)] as const
}

export function getValMatchV1MatchlistsByPuuidPuuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValMatchV1MatchlistsByPuuidPuuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.match.v1.matchlists['by-puuid'][':puuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValMatchV1MatchlistsByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>
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
                  ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getValMatchV1MatchlistsByPuuidPuuidQueryKey>
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
          Awaited<ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValMatchV1MatchlistsByPuuidPuuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValMatchV1MatchlistsByPuuidPuuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.val.match.v1.matchlists['by-puuid'][':puuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValMatchV1RecentMatchesByQueueQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']>
  >,
) {
  return ['val', '/val/match/v1/recent-matches/by-queue/:queue', toValue(args)] as const
}

export function getValMatchV1RecentMatchesByQueueQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValMatchV1RecentMatchesByQueueQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.match.v1['recent-matches']['by-queue'][':queue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValMatchV1RecentMatchesByQueueQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']>
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
                    (typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']
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
                    (typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getValMatchV1RecentMatchesByQueueQueueQueryKey>
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
            ReturnType<(typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValMatchV1RecentMatchesByQueueQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValMatchV1RecentMatchesByQueueQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.val.match.v1['recent-matches']['by-queue'][':queue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValRankedV1LeaderboardsByActActIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
  >,
) {
  return ['val', '/val/ranked/v1/leaderboards/by-act/:actId', toValue(args)] as const
}

export function getValRankedV1LeaderboardsByActActIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValRankedV1LeaderboardsByActActIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.ranked.v1.leaderboards['by-act'][':actId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValRankedV1LeaderboardsByActActId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
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
                  ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getValRankedV1LeaderboardsByActActIdQueryKey>
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
            ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValRankedV1LeaderboardsByActActIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValRankedV1LeaderboardsByActActIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.val.ranked.v1.leaderboards['by-act'][':actId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValStatusV1PlatformDataQueryKey() {
  return ['val', '/val/status/v1/platform-data'] as const
}

export function getValStatusV1PlatformDataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getValStatusV1PlatformDataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.val.status.v1['platform-data'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValStatusV1PlatformData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
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
                Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getValStatusV1PlatformDataQueryKey>
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
          Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValStatusV1PlatformDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getValStatusV1PlatformDataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.val.status.v1['platform-data'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
