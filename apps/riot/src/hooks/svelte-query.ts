import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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
  args: InferRequestType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>,
) {
  return ['riot', '/riot/account/v1/accounts/by-puuid/:puuid', args] as const
}

export function getRiotAccountV1AccountsByPuuidPuuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRiotAccountV1AccountsByPuuidPuuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.riot.account.v1.accounts['by-puuid'][':puuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRiotAccountV1AccountsByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRiotAccountV1AccountsByPuuidPuuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryKey(
  args: InferRequestType<
    (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
  >,
) {
  return ['riot', '/riot/account/v1/accounts/by-riot-id/:gameName/:tagLine', args] as const
}

export function getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryOptions<
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
  args: InferRequestType<
    (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.riot.account.v1.accounts['by-riot-id'][':gameName'][':tagLine'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRiotAccountV1AccountsByRiotIdGameNameTagLine<
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
  args: () => InferRequestType<
    (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRiotAccountV1AccountsByRiotIdGameNameTagLineQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRiotAccountV1AccountsMeQueryKey() {
  return ['riot', '/riot/account/v1/accounts/me'] as const
}

export function getRiotAccountV1AccountsMeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRiotAccountV1AccountsMeQueryKey>
  >({
    queryKey: getRiotAccountV1AccountsMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.riot.account.v1.accounts.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRiotAccountV1AccountsMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>>
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
              Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRiotAccountV1AccountsMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRiotAccountV1AccountsMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryKey(
  args: InferRequestType<
    (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
) {
  return ['riot', '/riot/account/v1/active-shards/by-game/:game/by-puuid/:puuid', args] as const
}

export function getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.riot.account.v1['active-shards']['by-game'][':game']['by-puuid'][':puuid'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRiotAccountV1ActiveShardsByGameGameByPuuidPuuid<
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
  args: () => InferRequestType<
    (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRiotAccountV1RegionByGameGameByPuuidPuuidQueryKey(
  args: InferRequestType<
    (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
) {
  return ['riot', '/riot/account/v1/region/by-game/:game/by-puuid/:puuid', args] as const
}

export function getRiotAccountV1RegionByGameGameByPuuidPuuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRiotAccountV1RegionByGameGameByPuuidPuuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.riot.account.v1.region['by-game'][':game']['by-puuid'][':puuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRiotAccountV1RegionByGameGameByPuuidPuuid<
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
  args: () => InferRequestType<
    (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRiotAccountV1RegionByGameGameByPuuidPuuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryKey(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return [
    'lol',
    '/lol/champion-mastery/v4/champion-masteries/by-puuid/:encryptedPUUID',
    args,
  ] as const
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUID<
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
  args: () => InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryKey(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
  >,
) {
  return [
    'lol',
    '/lol/champion-mastery/v4/champion-masteries/by-puuid/:encryptedPUUID/by-champion/:championId',
    args,
  ] as const
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'][
          'by-champion'
        ][':championId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionId<
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
  args: () => InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryKey(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
  >,
) {
  return [
    'lol',
    '/lol/champion-mastery/v4/champion-masteries/by-puuid/:encryptedPUUID/top',
    args,
  ] as const
}

export function getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][
          ':encryptedPUUID'
        ].top.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTop<
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
  args: () => InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryKey(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/champion-mastery/v4/scores/by-puuid/:encryptedPUUID', args] as const
}

export function getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['champion-mastery'].v4.scores['by-puuid'][':encryptedPUUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolChampionMasteryV4ScoresByPuuidEncryptedPUUID<
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
  args: () => InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolPlatformV3ChampionRotationsQueryKey() {
  return ['lol', '/lol/platform/v3/champion-rotations'] as const
}

export function getLolPlatformV3ChampionRotationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getLolPlatformV3ChampionRotationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.platform.v3['champion-rotations'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolPlatformV3ChampionRotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
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
              Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLolPlatformV3ChampionRotationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolPlatformV3ChampionRotationsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolClashV1PlayersByPuuidPuuidQueryKey(
  args: InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>,
) {
  return ['lol', '/lol/clash/v1/players/by-puuid/:puuid', args] as const
}

export function getLolClashV1PlayersByPuuidPuuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolClashV1PlayersByPuuidPuuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.clash.v1.players['by-puuid'][':puuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolClashV1PlayersByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLolClashV1PlayersByPuuidPuuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolClashV1PlayersByPuuidPuuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolClashV1TeamsTeamIdQueryKey(
  args: InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>,
) {
  return ['lol', '/lol/clash/v1/teams/:teamId', args] as const
}

export function getLolClashV1TeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolClashV1TeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.clash.v1.teams[':teamId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolClashV1TeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolClashV1TeamsTeamIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolClashV1TournamentsQueryKey() {
  return ['lol', '/lol/clash/v1/tournaments'] as const
}

export function getLolClashV1TournamentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolClashV1TournamentsQueryKey>
  >({
    queryKey: getLolClashV1TournamentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.clash.v1.tournaments.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolClashV1Tournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLolClashV1TournamentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLolClashV1TournamentsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLolClashV1TournamentsByTeamTeamIdQueryKey(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>,
) {
  return ['lol', '/lol/clash/v1/tournaments/by-team/:teamId', args] as const
}

export function getLolClashV1TournamentsByTeamTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolClashV1TournamentsByTeamTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.clash.v1.tournaments['by-team'][':teamId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolClashV1TournamentsByTeamTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolClashV1TournamentsByTeamTeamIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolClashV1TournamentsTournamentIdQueryKey(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>,
) {
  return ['lol', '/lol/clash/v1/tournaments/:tournamentId', args] as const
}

export function getLolClashV1TournamentsTournamentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolClashV1TournamentsTournamentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.clash.v1.tournaments[':tournamentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolClashV1TournamentsTournamentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolClashV1TournamentsTournamentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolLeagueExpV4EntriesQueueTierDivisionQueryKey(
  args: InferRequestType<
    (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
  >,
) {
  return ['lol', '/lol/league-exp/v4/entries/:queue/:tier/:division', args] as const
}

export function getLolLeagueExpV4EntriesQueueTierDivisionQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolLeagueExpV4EntriesQueueTierDivisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['league-exp'].v4.entries[':queue'][':tier'][':division'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolLeagueExpV4EntriesQueueTierDivision<
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
  args: () => InferRequestType<
    (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolLeagueExpV4EntriesQueueTierDivisionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolLeagueV4ChallengerleaguesByQueueQueueQueryKey(
  args: InferRequestType<
    (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
  >,
) {
  return ['lol', '/lol/league/v4/challengerleagues/by-queue/:queue', args] as const
}

export function getLolLeagueV4ChallengerleaguesByQueueQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolLeagueV4ChallengerleaguesByQueueQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.league.v4.challengerleagues['by-queue'][':queue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolLeagueV4ChallengerleaguesByQueueQueue<
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
  args: () => InferRequestType<
    (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolLeagueV4ChallengerleaguesByQueueQueueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryKey(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/league/v4/entries/by-puuid/:encryptedPUUID', args] as const
}

export function getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.league.v4.entries['by-puuid'][':encryptedPUUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolLeagueV4EntriesByPuuidEncryptedPUUID<
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
  args: () => InferRequestType<
    (typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolLeagueV4EntriesByPuuidEncryptedPUUIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolLeagueV4EntriesQueueTierDivisionQueryKey(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
  >,
) {
  return ['lol', '/lol/league/v4/entries/:queue/:tier/:division', args] as const
}

export function getLolLeagueV4EntriesQueueTierDivisionQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolLeagueV4EntriesQueueTierDivisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.league.v4.entries[':queue'][':tier'][':division'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolLeagueV4EntriesQueueTierDivision<
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
  args: () => InferRequestType<
    (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolLeagueV4EntriesQueueTierDivisionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolLeagueV4GrandmasterleaguesByQueueQueueQueryKey(
  args: InferRequestType<
    (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
  >,
) {
  return ['lol', '/lol/league/v4/grandmasterleagues/by-queue/:queue', args] as const
}

export function getLolLeagueV4GrandmasterleaguesByQueueQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolLeagueV4GrandmasterleaguesByQueueQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.league.v4.grandmasterleagues['by-queue'][':queue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolLeagueV4GrandmasterleaguesByQueueQueue<
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
  args: () => InferRequestType<
    (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolLeagueV4GrandmasterleaguesByQueueQueueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolLeagueV4MasterleaguesByQueueQueueQueryKey(
  args: InferRequestType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>,
) {
  return ['lol', '/lol/league/v4/masterleagues/by-queue/:queue', args] as const
}

export function getLolLeagueV4MasterleaguesByQueueQueueQueryOptions<
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
  args: InferRequestType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolLeagueV4MasterleaguesByQueueQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.league.v4.masterleagues['by-queue'][':queue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolLeagueV4MasterleaguesByQueueQueue<
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
  args: () => InferRequestType<
    (typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLolLeagueV4MasterleaguesByQueueQueueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolLeagueV4MasterleaguesByQueueQueueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolChallengesV1ChallengesConfigQueryKey() {
  return ['lol', '/lol/challenges/v1/challenges/config'] as const
}

export function getLolChallengesV1ChallengesConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getLolChallengesV1ChallengesConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.challenges.v1.challenges.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolChallengesV1ChallengesConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
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
              Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLolChallengesV1ChallengesConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChallengesV1ChallengesConfigQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolChallengesV1ChallengesPercentilesQueryKey() {
  return ['lol', '/lol/challenges/v1/challenges/percentiles'] as const
}

export function getLolChallengesV1ChallengesPercentilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getLolChallengesV1ChallengesPercentilesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.challenges.v1.challenges.percentiles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolChallengesV1ChallengesPercentiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
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
              Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLolChallengesV1ChallengesPercentilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChallengesV1ChallengesPercentilesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolChallengesV1ChallengesChallengeIdConfigQueryKey(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
  >,
) {
  return ['lol', '/lol/challenges/v1/challenges/:challengeId/config', args] as const
}

export function getLolChallengesV1ChallengesChallengeIdConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolChallengesV1ChallengesChallengeIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.challenges.v1.challenges[':challengeId'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolChallengesV1ChallengesChallengeIdConfig<
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
  args: () => InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChallengesV1ChallengesChallengeIdConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryKey(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
  >,
) {
  return [
    'lol',
    '/lol/challenges/v1/challenges/:challengeId/leaderboards/by-level/:level',
    args,
  ] as const
}

export function getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.challenges.v1.challenges[':challengeId'].leaderboards['by-level'][':level'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevel<
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
  args: () => InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolChallengesV1ChallengesChallengeIdPercentilesQueryKey(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
  >,
) {
  return ['lol', '/lol/challenges/v1/challenges/:challengeId/percentiles', args] as const
}

export function getLolChallengesV1ChallengesChallengeIdPercentilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolChallengesV1ChallengesChallengeIdPercentilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.challenges.v1.challenges[':challengeId'].percentiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolChallengesV1ChallengesChallengeIdPercentiles<
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
  args: () => InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChallengesV1ChallengesChallengeIdPercentilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolChallengesV1PlayerDataPuuidQueryKey(
  args: InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>,
) {
  return ['lol', '/lol/challenges/v1/player-data/:puuid', args] as const
}

export function getLolChallengesV1PlayerDataPuuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolChallengesV1PlayerDataPuuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.challenges.v1['player-data'][':puuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolChallengesV1PlayerDataPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLolChallengesV1PlayerDataPuuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolChallengesV1PlayerDataPuuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolRsoMatchV1MatchesIdsQueryKey(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>,
) {
  return ['lol', '/lol/rso-match/v1/matches/ids', args] as const
}

export function getLolRsoMatchV1MatchesIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolRsoMatchV1MatchesIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['rso-match'].v1.matches.ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolRsoMatchV1MatchesIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolRsoMatchV1MatchesIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolRsoMatchV1MatchesMatchIdQueryKey(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>,
) {
  return ['lol', '/lol/rso-match/v1/matches/:matchId', args] as const
}

export function getLolRsoMatchV1MatchesMatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolRsoMatchV1MatchesMatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['rso-match'].v1.matches[':matchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolRsoMatchV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLolRsoMatchV1MatchesMatchIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolRsoMatchV1MatchesMatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolRsoMatchV1MatchesMatchIdTimelineQueryKey(
  args: InferRequestType<
    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
  >,
) {
  return ['lol', '/lol/rso-match/v1/matches/:matchId/timeline', args] as const
}

export function getLolRsoMatchV1MatchesMatchIdTimelineQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolRsoMatchV1MatchesMatchIdTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['rso-match'].v1.matches[':matchId'].timeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolRsoMatchV1MatchesMatchIdTimeline<
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
  args: () => InferRequestType<
    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolRsoMatchV1MatchesMatchIdTimelineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolStatusV4PlatformDataQueryKey() {
  return ['lol', '/lol/status/v4/platform-data'] as const
}

export function getLolStatusV4PlatformDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getLolStatusV4PlatformDataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.status.v4['platform-data'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolStatusV4PlatformData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
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
              Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLolStatusV4PlatformDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLolStatusV4PlatformDataQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLorDeckV1DecksMeQueryKey() {
  return ['lor', '/lor/deck/v1/decks/me'] as const
}

export function getLorDeckV1DecksMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLorDeckV1DecksMeQueryKey>
  >({
    queryKey: getLorDeckV1DecksMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lor.deck.v1.decks.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLorDeckV1DecksMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLorDeckV1DecksMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLorDeckV1DecksMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLorDeckV1DecksMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lor.deck.v1.decks.me.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLorDeckV1DecksMeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLorInventoryV1CardsMeQueryKey() {
  return ['lor', '/lor/inventory/v1/cards/me'] as const
}

export function getLorInventoryV1CardsMeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLorInventoryV1CardsMeQueryKey>
  >({
    queryKey: getLorInventoryV1CardsMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lor.inventory.v1.cards.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLorInventoryV1CardsMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLorInventoryV1CardsMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLorInventoryV1CardsMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLorMatchV1MatchesByPuuidPuuidIdsQueryKey(
  args: InferRequestType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
) {
  return ['lor', '/lor/match/v1/matches/by-puuid/:puuid/ids', args] as const
}

export function getLorMatchV1MatchesByPuuidPuuidIdsQueryOptions<
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
  args: InferRequestType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLorMatchV1MatchesByPuuidPuuidIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lor.match.v1.matches['by-puuid'][':puuid'].ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLorMatchV1MatchesByPuuidPuuidIds<
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
  args: () => InferRequestType<
    (typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLorMatchV1MatchesByPuuidPuuidIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLorMatchV1MatchesByPuuidPuuidIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLorMatchV1MatchesMatchIdQueryKey(
  args: InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>,
) {
  return ['lor', '/lor/match/v1/matches/:matchId', args] as const
}

export function getLorMatchV1MatchesMatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLorMatchV1MatchesMatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lor.match.v1.matches[':matchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLorMatchV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLorMatchV1MatchesMatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLorRankedV1LeaderboardsQueryKey() {
  return ['lor', '/lor/ranked/v1/leaderboards'] as const
}

export function getLorRankedV1LeaderboardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLorRankedV1LeaderboardsQueryKey>
  >({
    queryKey: getLorRankedV1LeaderboardsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lor.ranked.v1.leaderboards.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLorRankedV1Leaderboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLorRankedV1LeaderboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLorRankedV1LeaderboardsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLorStatusV1PlatformDataQueryKey() {
  return ['lor', '/lor/status/v1/platform-data'] as const
}

export function getLorStatusV1PlatformDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getLorStatusV1PlatformDataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lor.status.v1['platform-data'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLorStatusV1PlatformData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
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
              Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLorStatusV1PlatformDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLorStatusV1PlatformDataQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLolMatchV5MatchesByPuuidPuuidIdsQueryKey(
  args: InferRequestType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>,
) {
  return ['lol', '/lol/match/v5/matches/by-puuid/:puuid/ids', args] as const
}

export function getLolMatchV5MatchesByPuuidPuuidIdsQueryOptions<
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
  args: InferRequestType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolMatchV5MatchesByPuuidPuuidIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.match.v5.matches['by-puuid'][':puuid'].ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolMatchV5MatchesByPuuidPuuidIds<
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
  args: () => InferRequestType<
    (typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLolMatchV5MatchesByPuuidPuuidIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolMatchV5MatchesByPuuidPuuidIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolMatchV5MatchesReplaysQueryKey() {
  return ['lol', '/lol/match/v5/matches/replays'] as const
}

export function getLolMatchV5MatchesReplaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolMatchV5MatchesReplaysQueryKey>
  >({
    queryKey: getLolMatchV5MatchesReplaysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.match.v5.matches.replays.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolMatchV5MatchesReplays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>>
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
              Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLolMatchV5MatchesReplaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLolMatchV5MatchesReplaysQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLolMatchV5MatchesMatchIdQueryKey(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>,
) {
  return ['lol', '/lol/match/v5/matches/:matchId', args] as const
}

export function getLolMatchV5MatchesMatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolMatchV5MatchesMatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.match.v5.matches[':matchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolMatchV5MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolMatchV5MatchesMatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolMatchV5MatchesMatchIdTimelineQueryKey(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>,
) {
  return ['lol', '/lol/match/v5/matches/:matchId/timeline', args] as const
}

export function getLolMatchV5MatchesMatchIdTimelineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolMatchV5MatchesMatchIdTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.match.v5.matches[':matchId'].timeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolMatchV5MatchesMatchIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLolMatchV5MatchesMatchIdTimelineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolMatchV5MatchesMatchIdTimelineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRiftboundContentV1ContentsQueryKey(
  args: InferRequestType<typeof client.riftbound.content.v1.contents.$get>,
) {
  return ['riftbound', '/riftbound/content/v1/contents', args] as const
}

export function getRiftboundContentV1ContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.riftbound.content.v1.contents.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRiftboundContentV1ContentsQueryKey>
  >({
    queryKey: getRiftboundContentV1ContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.riftbound.content.v1.contents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRiftboundContentV1Contents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.riftbound.content.v1.contents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRiftboundContentV1ContentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRiftboundContentV1ContentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryKey(
  args: InferRequestType<
    (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/spectator/tft/v5/active-games/by-puuid/:encryptedPUUID', args] as const
}

export function getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.spectator.tft.v5['active-games']['by-puuid'][':encryptedPUUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUID<
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
  args: () => InferRequestType<
    (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryKey(
  args: InferRequestType<
    (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/spectator/v5/active-games/by-summoner/:encryptedPUUID', args] as const
}

export function getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.spectator.v5['active-games']['by-summoner'][':encryptedPUUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolSpectatorV5ActiveGamesBySummonerEncryptedPUUID<
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
  args: () => InferRequestType<
    (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryKey(
  args: InferRequestType<
    (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/summoner/v4/summoners/by-puuid/:encryptedPUUID', args] as const
}

export function getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.summoner.v4.summoners['by-puuid'][':encryptedPUUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolSummonerV4SummonersByPuuidEncryptedPUUID<
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
  args: () => InferRequestType<
    (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolSummonerV4SummonersByPuuidEncryptedPUUIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolSummonerV4SummonersMeQueryKey() {
  return ['lol', '/lol/summoner/v4/summoners/me'] as const
}

export function getLolSummonerV4SummonersMeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLolSummonerV4SummonersMeQueryKey>
  >({
    queryKey: getLolSummonerV4SummonersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.summoner.v4.summoners.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolSummonerV4SummonersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>>
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
              Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLolSummonerV4SummonersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLolSummonerV4SummonersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTftLeagueV1ByPuuidPuuidQueryKey(
  args: InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>,
) {
  return ['tft', '/tft/league/v1/by-puuid/:puuid', args] as const
}

export function getTftLeagueV1ByPuuidPuuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTftLeagueV1ByPuuidPuuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.league.v1['by-puuid'][':puuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftLeagueV1ByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTftLeagueV1ByPuuidPuuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTftLeagueV1ChallengerQueryKey(
  args: InferRequestType<typeof client.tft.league.v1.challenger.$get>,
) {
  return ['tft', '/tft/league/v1/challenger', args] as const
}

export function getTftLeagueV1ChallengerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tft.league.v1.challenger.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftLeagueV1ChallengerQueryKey>
  >({
    queryKey: getTftLeagueV1ChallengerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.league.v1.challenger.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftLeagueV1Challenger<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tft.league.v1.challenger.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTftLeagueV1ChallengerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTftLeagueV1ChallengerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTftLeagueV1EntriesTierDivisionQueryKey(
  args: InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>,
) {
  return ['tft', '/tft/league/v1/entries/:tier/:division', args] as const
}

export function getTftLeagueV1EntriesTierDivisionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTftLeagueV1EntriesTierDivisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.league.v1.entries[':tier'][':division'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftLeagueV1EntriesTierDivision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTftLeagueV1EntriesTierDivisionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTftLeagueV1EntriesTierDivisionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTftLeagueV1GrandmasterQueryKey(
  args: InferRequestType<typeof client.tft.league.v1.grandmaster.$get>,
) {
  return ['tft', '/tft/league/v1/grandmaster', args] as const
}

export function getTftLeagueV1GrandmasterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tft.league.v1.grandmaster.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftLeagueV1GrandmasterQueryKey>
  >({
    queryKey: getTftLeagueV1GrandmasterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.league.v1.grandmaster.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftLeagueV1Grandmaster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tft.league.v1.grandmaster.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTftLeagueV1GrandmasterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTftLeagueV1GrandmasterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTftLeagueV1MasterQueryKey(
  args: InferRequestType<typeof client.tft.league.v1.master.$get>,
) {
  return ['tft', '/tft/league/v1/master', args] as const
}

export function getTftLeagueV1MasterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tft.league.v1.master.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTftLeagueV1MasterQueryKey>
  >({
    queryKey: getTftLeagueV1MasterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.league.v1.master.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTftLeagueV1Master<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tft.league.v1.master.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTftLeagueV1MasterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTftLeagueV1MasterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTftLeagueV1RatedLaddersQueueTopQueryKey(
  args: InferRequestType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>,
) {
  return ['tft', '/tft/league/v1/rated-ladders/:queue/top', args] as const
}

export function getTftLeagueV1RatedLaddersQueueTopQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTftLeagueV1RatedLaddersQueueTopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.league.v1['rated-ladders'][':queue'].top.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftLeagueV1RatedLaddersQueueTop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTftLeagueV1RatedLaddersQueueTopQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTftMatchV1MatchesByPuuidPuuidIdsQueryKey(
  args: InferRequestType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
) {
  return ['tft', '/tft/match/v1/matches/by-puuid/:puuid/ids', args] as const
}

export function getTftMatchV1MatchesByPuuidPuuidIdsQueryOptions<
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
  args: InferRequestType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTftMatchV1MatchesByPuuidPuuidIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.match.v1.matches['by-puuid'][':puuid'].ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftMatchV1MatchesByPuuidPuuidIds<
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
  args: () => InferRequestType<
    (typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTftMatchV1MatchesByPuuidPuuidIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTftMatchV1MatchesByPuuidPuuidIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTftMatchV1MatchesMatchIdQueryKey(
  args: InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>,
) {
  return ['tft', '/tft/match/v1/matches/:matchId', args] as const
}

export function getTftMatchV1MatchesMatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTftMatchV1MatchesMatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.match.v1.matches[':matchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftMatchV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTftMatchV1MatchesMatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTftStatusV1PlatformDataQueryKey() {
  return ['tft', '/tft/status/v1/platform-data'] as const
}

export function getTftStatusV1PlatformDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getTftStatusV1PlatformDataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.status.v1['platform-data'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftStatusV1PlatformData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
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
              Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTftStatusV1PlatformDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTftStatusV1PlatformDataQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryKey(
  args: InferRequestType<
    (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['tft', '/tft/summoner/v1/summoners/by-puuid/:encryptedPUUID', args] as const
}

export function getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.summoner.v1.summoners['by-puuid'][':encryptedPUUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftSummonerV1SummonersByPuuidEncryptedPUUID<
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
  args: () => InferRequestType<
    (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTftSummonerV1SummonersByPuuidEncryptedPUUIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTftSummonerV1SummonersMeQueryKey() {
  return ['tft', '/tft/summoner/v1/summoners/me'] as const
}

export function getTftSummonerV1SummonersMeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTftSummonerV1SummonersMeQueryKey>
  >({
    queryKey: getTftSummonerV1SummonersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tft.summoner.v1.summoners.me.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTftSummonerV1SummonersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>>
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
              Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTftSummonerV1SummonersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTftSummonerV1SummonersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLolTournamentStubV5Codes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLolTournamentStubV5CodesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLolTournamentStubV5CodesTournamentCodeQueryKey(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
  >,
) {
  return ['lol', '/lol/tournament-stub/v5/codes/:tournamentCode', args] as const
}

export function getLolTournamentStubV5CodesTournamentCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolTournamentStubV5CodesTournamentCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['tournament-stub'].v5.codes[':tournamentCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolTournamentStubV5CodesTournamentCode<
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
  args: () => InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolTournamentStubV5CodesTournamentCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryKey(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
) {
  return ['lol', '/lol/tournament-stub/v5/lobby-events/by-code/:tournamentCode', args] as const
}

export function getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol['tournament-stub'].v5['lobby-events']['by-code'][':tournamentCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolTournamentStubV5LobbyEventsByCodeTournamentCode<
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
  args: () => InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolTournamentStubV5LobbyEventsByCodeTournamentCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostLolTournamentStubV5Providers<
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
                ReturnType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLolTournamentStubV5ProvidersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLolTournamentStubV5Tournaments<
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
                ReturnType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLolTournamentStubV5TournamentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLolTournamentV5Codes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lol.tournament.v5.codes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lol.tournament.v5.codes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLolTournamentV5CodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLolTournamentV5CodesTournamentCodeQueryKey(
  args: InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>,
) {
  return ['lol', '/lol/tournament/v5/codes/:tournamentCode', args] as const
}

export function getLolTournamentV5CodesTournamentCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolTournamentV5CodesTournamentCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.tournament.v5.codes[':tournamentCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolTournamentV5CodesTournamentCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLolTournamentV5CodesTournamentCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolTournamentV5CodesTournamentCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutLolTournamentV5CodesTournamentCode<
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
                ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLolTournamentV5CodesTournamentCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLolTournamentV5GamesByCodeTournamentCodeQueryKey(
  args: InferRequestType<
    (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
  >,
) {
  return ['lol', '/lol/tournament/v5/games/by-code/:tournamentCode', args] as const
}

export function getLolTournamentV5GamesByCodeTournamentCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolTournamentV5GamesByCodeTournamentCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.tournament.v5.games['by-code'][':tournamentCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolTournamentV5GamesByCodeTournamentCode<
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
  args: () => InferRequestType<
    (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolTournamentV5GamesByCodeTournamentCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryKey(
  args: InferRequestType<
    (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
) {
  return ['lol', '/lol/tournament/v5/lobby-events/by-code/:tournamentCode', args] as const
}

export function getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lol.tournament.v5['lobby-events']['by-code'][':tournamentCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLolTournamentV5LobbyEventsByCodeTournamentCode<
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
  args: () => InferRequestType<
    (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLolTournamentV5LobbyEventsByCodeTournamentCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostLolTournamentV5Providers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLolTournamentV5ProvidersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLolTournamentV5Tournaments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLolTournamentV5TournamentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getValMatchConsoleV1MatchesMatchIdQueryKey(
  args: InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>,
) {
  return ['val', '/val/match/console/v1/matches/:matchId', args] as const
}

export function getValMatchConsoleV1MatchesMatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getValMatchConsoleV1MatchesMatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.val.match.console.v1.matches[':matchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValMatchConsoleV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getValMatchConsoleV1MatchesMatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getValMatchConsoleV1MatchlistsByPuuidPuuidQueryKey(
  args: InferRequestType<
    (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
  >,
) {
  return ['val', '/val/match/console/v1/matchlists/by-puuid/:puuid', args] as const
}

export function getValMatchConsoleV1MatchlistsByPuuidPuuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getValMatchConsoleV1MatchlistsByPuuidPuuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.val.match.console.v1.matchlists['by-puuid'][':puuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValMatchConsoleV1MatchlistsByPuuidPuuid<
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
  args: () => InferRequestType<
    (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getValMatchConsoleV1MatchlistsByPuuidPuuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getValMatchConsoleV1RecentMatchesByQueueQueueQueryKey(
  args: InferRequestType<
    (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
) {
  return ['val', '/val/match/console/v1/recent-matches/by-queue/:queue', args] as const
}

export function getValMatchConsoleV1RecentMatchesByQueueQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getValMatchConsoleV1RecentMatchesByQueueQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.val.match.console.v1['recent-matches']['by-queue'][':queue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValMatchConsoleV1RecentMatchesByQueueQueue<
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
  args: () => InferRequestType<
    (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getValMatchConsoleV1RecentMatchesByQueueQueueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getValConsoleRankedV1LeaderboardsByActActIdQueryKey(
  args: InferRequestType<
    (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
  >,
) {
  return ['val', '/val/console/ranked/v1/leaderboards/by-act/:actId', args] as const
}

export function getValConsoleRankedV1LeaderboardsByActActIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getValConsoleRankedV1LeaderboardsByActActIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.val.console.ranked.v1.leaderboards['by-act'][':actId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValConsoleRankedV1LeaderboardsByActActId<
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
  args: () => InferRequestType<
    (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getValConsoleRankedV1LeaderboardsByActActIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getValContentV1ContentsQueryKey(
  args: InferRequestType<typeof client.val.content.v1.contents.$get>,
) {
  return ['val', '/val/content/v1/contents', args] as const
}

export function getValContentV1ContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.val.content.v1.contents.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValContentV1ContentsQueryKey>
  >({
    queryKey: getValContentV1ContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.val.content.v1.contents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValContentV1Contents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.val.content.v1.contents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getValContentV1ContentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getValContentV1ContentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getValMatchV1MatchesMatchIdQueryKey(
  args: InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>,
) {
  return ['val', '/val/match/v1/matches/:matchId', args] as const
}

export function getValMatchV1MatchesMatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getValMatchV1MatchesMatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.val.match.v1.matches[':matchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValMatchV1MatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getValMatchV1MatchesMatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getValMatchV1MatchlistsByPuuidPuuidQueryKey(
  args: InferRequestType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>,
) {
  return ['val', '/val/match/v1/matchlists/by-puuid/:puuid', args] as const
}

export function getValMatchV1MatchlistsByPuuidPuuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getValMatchV1MatchlistsByPuuidPuuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.val.match.v1.matchlists['by-puuid'][':puuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValMatchV1MatchlistsByPuuidPuuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getValMatchV1MatchlistsByPuuidPuuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getValMatchV1MatchlistsByPuuidPuuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getValMatchV1RecentMatchesByQueueQueueQueryKey(
  args: InferRequestType<
    (typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
) {
  return ['val', '/val/match/v1/recent-matches/by-queue/:queue', args] as const
}

export function getValMatchV1RecentMatchesByQueueQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getValMatchV1RecentMatchesByQueueQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.val.match.v1['recent-matches']['by-queue'][':queue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValMatchV1RecentMatchesByQueueQueue<
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
  args: () => InferRequestType<
    (typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getValMatchV1RecentMatchesByQueueQueueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getValMatchV1RecentMatchesByQueueQueueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getValRankedV1LeaderboardsByActActIdQueryKey(
  args: InferRequestType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>,
) {
  return ['val', '/val/ranked/v1/leaderboards/by-act/:actId', args] as const
}

export function getValRankedV1LeaderboardsByActActIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getValRankedV1LeaderboardsByActActIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.val.ranked.v1.leaderboards['by-act'][':actId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValRankedV1LeaderboardsByActActId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getValRankedV1LeaderboardsByActActIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getValStatusV1PlatformDataQueryKey() {
  return ['val', '/val/status/v1/platform-data'] as const
}

export function getValStatusV1PlatformDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getValStatusV1PlatformDataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.val.status.v1['platform-data'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValStatusV1PlatformData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
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
              Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getValStatusV1PlatformDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getValStatusV1PlatformDataQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
