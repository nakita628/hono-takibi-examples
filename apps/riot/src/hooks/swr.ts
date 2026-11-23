import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetRiotAccountV1AccountsByPuuidPuuidKey(
  args: InferRequestType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>,
) {
  return ['riot', '/riot/account/v1/accounts/by-puuid/:puuid', args] as const
}

export function useGetRiotAccountV1AccountsByPuuidPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1AccountsByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.riot.account.v1.accounts['by-puuid'][':puuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRiotAccountV1AccountsByPuuidPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1AccountsByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.riot.account.v1.accounts)['by-puuid'][':puuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.riot.account.v1.accounts['by-puuid'][':puuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRiotAccountV1AccountsByRiotIdGameNameTagLineKey(
  args: InferRequestType<
    (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
  >,
) {
  return ['riot', '/riot/account/v1/accounts/by-riot-id/:gameName/:tagLine', args] as const
}

export function useGetRiotAccountV1AccountsByRiotIdGameNameTagLine<TError = unknown>(
  args: InferRequestType<
    (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1AccountsByRiotIdGameNameTagLineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.riot.account.v1.accounts['by-riot-id'][':gameName'][':tagLine'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRiotAccountV1AccountsByRiotIdGameNameTagLine<TError = unknown>(
  args: InferRequestType<
    (typeof client.riot.account.v1.accounts)['by-riot-id'][':gameName'][':tagLine']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1AccountsByRiotIdGameNameTagLineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.riot.account.v1.accounts['by-riot-id'][':gameName'][':tagLine'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRiotAccountV1AccountsMeKey() {
  return ['riot', '/riot/account/v1/accounts/me'] as const
}

export function useGetRiotAccountV1AccountsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1AccountsMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.riot.account.v1.accounts.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRiotAccountV1AccountsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1AccountsMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.riot.account.v1.accounts.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.riot.account.v1.accounts.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRiotAccountV1ActiveShardsByGameGameByPuuidPuuidKey(
  args: InferRequestType<
    (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
) {
  return ['riot', '/riot/account/v1/active-shards/by-game/:game/by-puuid/:puuid', args] as const
}

export function useGetRiotAccountV1ActiveShardsByGameGameByPuuidPuuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1ActiveShardsByGameGameByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.riot.account.v1['active-shards']['by-game'][':game']['by-puuid'][':puuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRiotAccountV1ActiveShardsByGameGameByPuuidPuuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.riot.account.v1)['active-shards']['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1ActiveShardsByGameGameByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.riot.account.v1['active-shards']['by-game'][':game']['by-puuid'][':puuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRiotAccountV1RegionByGameGameByPuuidPuuidKey(
  args: InferRequestType<
    (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
) {
  return ['riot', '/riot/account/v1/region/by-game/:game/by-puuid/:puuid', args] as const
}

export function useGetRiotAccountV1RegionByGameGameByPuuidPuuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1RegionByGameGameByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.riot.account.v1.region['by-game'][':game']['by-puuid'][':puuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRiotAccountV1RegionByGameGameByPuuidPuuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.riot.account.v1.region)['by-game'][':game']['by-puuid'][':puuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiotAccountV1RegionByGameGameByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.riot.account.v1.region['by-game'][':game']['by-puuid'][':puuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDKey(
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

export function useGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][
            ':encryptedPUUID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][
            ':encryptedPUUID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdKey(
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

export function useGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'][
            'by-champion'
          ][':championId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['by-champion'][':championId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][':encryptedPUUID'][
            'by-champion'
          ][':championId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopKey(
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

export function useGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTop<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][
            ':encryptedPUUID'
          ].top.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTop<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['champion-masteries']['by-puuid'][':encryptedPUUID']['top']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['champion-mastery'].v4['champion-masteries']['by-puuid'][
            ':encryptedPUUID'
          ].top.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDKey(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/champion-mastery/v4/scores/by-puuid/:encryptedPUUID', args] as const
}

export function useGetLolChampionMasteryV4ScoresByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['champion-mastery'].v4.scores['by-puuid'][':encryptedPUUID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChampionMasteryV4ScoresByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['champion-mastery']['v4']['scores']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['champion-mastery'].v4.scores['by-puuid'][':encryptedPUUID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolPlatformV3ChampionRotationsKey() {
  return ['lol', '/lol/platform/v3/champion-rotations'] as const
}

export function useGetLolPlatformV3ChampionRotations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolPlatformV3ChampionRotationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.platform.v3['champion-rotations'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolPlatformV3ChampionRotations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolPlatformV3ChampionRotationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.platform.v3)['champion-rotations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.platform.v3['champion-rotations'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolClashV1PlayersByPuuidPuuidKey(
  args: InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>,
) {
  return ['lol', '/lol/clash/v1/players/by-puuid/:puuid', args] as const
}

export function useGetLolClashV1PlayersByPuuidPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1PlayersByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.clash.v1.players['by-puuid'][':puuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolClashV1PlayersByPuuidPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1PlayersByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.players)['by-puuid'][':puuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.clash.v1.players['by-puuid'][':puuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolClashV1TeamsTeamIdKey(
  args: InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>,
) {
  return ['lol', '/lol/clash/v1/teams/:teamId', args] as const
}

export function useGetLolClashV1TeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1TeamsTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.clash.v1.teams[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolClashV1TeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1TeamsTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.teams)[':teamId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.clash.v1.teams[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolClashV1TournamentsKey() {
  return ['lol', '/lol/clash/v1/tournaments'] as const
}

export function useGetLolClashV1Tournaments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1TournamentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.clash.v1.tournaments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolClashV1Tournaments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1TournamentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lol.clash.v1.tournaments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.clash.v1.tournaments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolClashV1TournamentsByTeamTeamIdKey(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>,
) {
  return ['lol', '/lol/clash/v1/tournaments/by-team/:teamId', args] as const
}

export function useGetLolClashV1TournamentsByTeamTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1TournamentsByTeamTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.clash.v1.tournaments['by-team'][':teamId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolClashV1TournamentsByTeamTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1TournamentsByTeamTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.clash.v1.tournaments)['by-team'][':teamId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.clash.v1.tournaments['by-team'][':teamId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolClashV1TournamentsTournamentIdKey(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>,
) {
  return ['lol', '/lol/clash/v1/tournaments/:tournamentId', args] as const
}

export function useGetLolClashV1TournamentsTournamentId<TError = unknown>(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1TournamentsTournamentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.clash.v1.tournaments[':tournamentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolClashV1TournamentsTournamentId<TError = unknown>(
  args: InferRequestType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolClashV1TournamentsTournamentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.clash.v1.tournaments)[':tournamentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.clash.v1.tournaments[':tournamentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolLeagueExpV4EntriesQueueTierDivisionKey(
  args: InferRequestType<
    (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
  >,
) {
  return ['lol', '/lol/league-exp/v4/entries/:queue/:tier/:division', args] as const
}

export function useGetLolLeagueExpV4EntriesQueueTierDivision<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueExpV4EntriesQueueTierDivisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['league-exp'].v4.entries[':queue'][':tier'][':division'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolLeagueExpV4EntriesQueueTierDivision<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['league-exp']['v4']['entries'][':queue'][':tier'][':division']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueExpV4EntriesQueueTierDivisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['league-exp'].v4.entries[':queue'][':tier'][':division'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolLeagueV4ChallengerleaguesByQueueQueueKey(
  args: InferRequestType<
    (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
  >,
) {
  return ['lol', '/lol/league/v4/challengerleagues/by-queue/:queue', args] as const
}

export function useGetLolLeagueV4ChallengerleaguesByQueueQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4ChallengerleaguesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.challengerleagues['by-queue'][':queue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolLeagueV4ChallengerleaguesByQueueQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.league.v4.challengerleagues)['by-queue'][':queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4ChallengerleaguesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.challengerleagues['by-queue'][':queue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolLeagueV4EntriesByPuuidEncryptedPUUIDKey(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/league/v4/entries/by-puuid/:encryptedPUUID', args] as const
}

export function useGetLolLeagueV4EntriesByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4EntriesByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.entries['by-puuid'][':encryptedPUUID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolLeagueV4EntriesByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4EntriesByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.entries['by-puuid'][':encryptedPUUID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolLeagueV4EntriesQueueTierDivisionKey(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
  >,
) {
  return ['lol', '/lol/league/v4/entries/:queue/:tier/:division', args] as const
}

export function useGetLolLeagueV4EntriesQueueTierDivision<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4EntriesQueueTierDivisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.entries[':queue'][':tier'][':division'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolLeagueV4EntriesQueueTierDivision<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.league.v4.entries)[':queue'][':tier'][':division']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4EntriesQueueTierDivisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.entries[':queue'][':tier'][':division'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolLeagueV4GrandmasterleaguesByQueueQueueKey(
  args: InferRequestType<
    (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
  >,
) {
  return ['lol', '/lol/league/v4/grandmasterleagues/by-queue/:queue', args] as const
}

export function useGetLolLeagueV4GrandmasterleaguesByQueueQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4GrandmasterleaguesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.grandmasterleagues['by-queue'][':queue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolLeagueV4GrandmasterleaguesByQueueQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.league.v4.grandmasterleagues)['by-queue'][':queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4GrandmasterleaguesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.grandmasterleagues['by-queue'][':queue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolLeagueV4MasterleaguesByQueueQueueKey(
  args: InferRequestType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>,
) {
  return ['lol', '/lol/league/v4/masterleagues/by-queue/:queue', args] as const
}

export function useGetLolLeagueV4MasterleaguesByQueueQueue<TError = unknown>(
  args: InferRequestType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4MasterleaguesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.masterleagues['by-queue'][':queue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolLeagueV4MasterleaguesByQueueQueue<TError = unknown>(
  args: InferRequestType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolLeagueV4MasterleaguesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.league.v4.masterleagues)['by-queue'][':queue']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.league.v4.masterleagues['by-queue'][':queue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolChallengesV1ChallengesConfigKey() {
  return ['lol', '/lol/challenges/v1/challenges/config'] as const
}

export function useGetLolChallengesV1ChallengesConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.challenges.v1.challenges.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChallengesV1ChallengesConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.config.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.challenges.v1.challenges.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolChallengesV1ChallengesPercentilesKey() {
  return ['lol', '/lol/challenges/v1/challenges/percentiles'] as const
}

export function useGetLolChallengesV1ChallengesPercentiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesPercentilesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.challenges.v1.challenges.percentiles.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChallengesV1ChallengesPercentiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesPercentilesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.lol.challenges.v1.challenges.percentiles.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.challenges.v1.challenges.percentiles.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolChallengesV1ChallengesChallengeIdConfigKey(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
  >,
) {
  return ['lol', '/lol/challenges/v1/challenges/:challengeId/config', args] as const
}

export function useGetLolChallengesV1ChallengesChallengeIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesChallengeIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.challenges.v1.challenges[':challengeId'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChallengesV1ChallengesChallengeIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesChallengeIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.challenges.v1.challenges[':challengeId'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelKey(
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

export function useGetLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevel<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.challenges.v1.challenges[':challengeId'].leaderboards['by-level'][
            ':level'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevel<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['leaderboards']['by-level'][':level']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.challenges.v1.challenges[':challengeId'].leaderboards['by-level'][
            ':level'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolChallengesV1ChallengesChallengeIdPercentilesKey(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
  >,
) {
  return ['lol', '/lol/challenges/v1/challenges/:challengeId/percentiles', args] as const
}

export function useGetLolChallengesV1ChallengesChallengeIdPercentiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesChallengeIdPercentilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.challenges.v1.challenges[':challengeId'].percentiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChallengesV1ChallengesChallengeIdPercentiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.challenges.v1.challenges)[':challengeId']['percentiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1ChallengesChallengeIdPercentilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.challenges.v1.challenges[':challengeId'].percentiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolChallengesV1PlayerDataPuuidKey(
  args: InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>,
) {
  return ['lol', '/lol/challenges/v1/player-data/:puuid', args] as const
}

export function useGetLolChallengesV1PlayerDataPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1PlayerDataPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.challenges.v1['player-data'][':puuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolChallengesV1PlayerDataPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolChallengesV1PlayerDataPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.challenges.v1)['player-data'][':puuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.challenges.v1['player-data'][':puuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolRsoMatchV1MatchesIdsKey(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>,
) {
  return ['lol', '/lol/rso-match/v1/matches/ids', args] as const
}

export function useGetLolRsoMatchV1MatchesIds<TError = unknown>(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolRsoMatchV1MatchesIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol['rso-match'].v1.matches.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolRsoMatchV1MatchesIds<TError = unknown>(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolRsoMatchV1MatchesIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol)['rso-match']['v1']['matches']['ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol['rso-match'].v1.matches.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolRsoMatchV1MatchesMatchIdKey(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>,
) {
  return ['lol', '/lol/rso-match/v1/matches/:matchId', args] as const
}

export function useGetLolRsoMatchV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolRsoMatchV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol['rso-match'].v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolRsoMatchV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolRsoMatchV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol)['rso-match']['v1']['matches'][':matchId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol['rso-match'].v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolRsoMatchV1MatchesMatchIdTimelineKey(
  args: InferRequestType<
    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
  >,
) {
  return ['lol', '/lol/rso-match/v1/matches/:matchId/timeline', args] as const
}

export function useGetLolRsoMatchV1MatchesMatchIdTimeline<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolRsoMatchV1MatchesMatchIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['rso-match'].v1.matches[':matchId'].timeline.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolRsoMatchV1MatchesMatchIdTimeline<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['rso-match']['v1']['matches'][':matchId']['timeline']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolRsoMatchV1MatchesMatchIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['rso-match'].v1.matches[':matchId'].timeline.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolStatusV4PlatformDataKey() {
  return ['lol', '/lol/status/v4/platform-data'] as const
}

export function useGetLolStatusV4PlatformData<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolStatusV4PlatformDataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.status.v4['platform-data'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolStatusV4PlatformData<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolStatusV4PlatformDataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.status.v4)['platform-data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.status.v4['platform-data'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLorDeckV1DecksMeKey() {
  return ['lor', '/lor/deck/v1/decks/me'] as const
}

export function useGetLorDeckV1DecksMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLorDeckV1DecksMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lor.deck.v1.decks.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLorDeckV1DecksMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLorDeckV1DecksMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lor.deck.v1.decks.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLorDeckV1DecksMeKey() {
  return ['lor', '/lor/deck/v1/decks/me', 'POST'] as const
}

export function usePostLorDeckV1DecksMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.deck.v1.decks.me.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lor.deck.v1.decks.me.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLorDeckV1DecksMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lor.deck.v1.decks.me.$post> },
      ) => parseResponse(client.lor.deck.v1.decks.me.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLorInventoryV1CardsMeKey() {
  return ['lor', '/lor/inventory/v1/cards/me'] as const
}

export function useGetLorInventoryV1CardsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorInventoryV1CardsMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lor.inventory.v1.cards.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLorInventoryV1CardsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorInventoryV1CardsMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lor.inventory.v1.cards.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lor.inventory.v1.cards.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLorMatchV1MatchesByPuuidPuuidIdsKey(
  args: InferRequestType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
) {
  return ['lor', '/lor/match/v1/matches/by-puuid/:puuid/ids', args] as const
}

export function useGetLorMatchV1MatchesByPuuidPuuidIds<TError = unknown>(
  args: InferRequestType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorMatchV1MatchesByPuuidPuuidIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lor.match.v1.matches['by-puuid'][':puuid'].ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLorMatchV1MatchesByPuuidPuuidIds<TError = unknown>(
  args: InferRequestType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorMatchV1MatchesByPuuidPuuidIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lor.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lor.match.v1.matches['by-puuid'][':puuid'].ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLorMatchV1MatchesMatchIdKey(
  args: InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>,
) {
  return ['lor', '/lor/match/v1/matches/:matchId', args] as const
}

export function useGetLorMatchV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorMatchV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lor.match.v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLorMatchV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorMatchV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lor.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lor.match.v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLorRankedV1LeaderboardsKey() {
  return ['lor', '/lor/ranked/v1/leaderboards'] as const
}

export function useGetLorRankedV1Leaderboards<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorRankedV1LeaderboardsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lor.ranked.v1.leaderboards.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLorRankedV1Leaderboards<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorRankedV1LeaderboardsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lor.ranked.v1.leaderboards.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lor.ranked.v1.leaderboards.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLorStatusV1PlatformDataKey() {
  return ['lor', '/lor/status/v1/platform-data'] as const
}

export function useGetLorStatusV1PlatformData<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorStatusV1PlatformDataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lor.status.v1['platform-data'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLorStatusV1PlatformData<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLorStatusV1PlatformDataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lor.status.v1)['platform-data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lor.status.v1['platform-data'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolMatchV5MatchesByPuuidPuuidIdsKey(
  args: InferRequestType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>,
) {
  return ['lol', '/lol/match/v5/matches/by-puuid/:puuid/ids', args] as const
}

export function useGetLolMatchV5MatchesByPuuidPuuidIds<TError = unknown>(
  args: InferRequestType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolMatchV5MatchesByPuuidPuuidIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.match.v5.matches['by-puuid'][':puuid'].ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolMatchV5MatchesByPuuidPuuidIds<TError = unknown>(
  args: InferRequestType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolMatchV5MatchesByPuuidPuuidIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.match.v5.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.match.v5.matches['by-puuid'][':puuid'].ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolMatchV5MatchesReplaysKey() {
  return ['lol', '/lol/match/v5/matches/replays'] as const
}

export function useGetLolMatchV5MatchesReplays<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolMatchV5MatchesReplaysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.match.v5.matches.replays.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolMatchV5MatchesReplays<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolMatchV5MatchesReplaysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lol.match.v5.matches.replays.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.match.v5.matches.replays.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolMatchV5MatchesMatchIdKey(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>,
) {
  return ['lol', '/lol/match/v5/matches/:matchId', args] as const
}

export function useGetLolMatchV5MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolMatchV5MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.match.v5.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolMatchV5MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolMatchV5MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.match.v5.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolMatchV5MatchesMatchIdTimelineKey(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>,
) {
  return ['lol', '/lol/match/v5/matches/:matchId/timeline', args] as const
}

export function useGetLolMatchV5MatchesMatchIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolMatchV5MatchesMatchIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.match.v5.matches[':matchId'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolMatchV5MatchesMatchIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolMatchV5MatchesMatchIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lol.match.v5.matches)[':matchId']['timeline']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.match.v5.matches[':matchId'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRiftboundContentV1ContentsKey(
  args: InferRequestType<typeof client.riftbound.content.v1.contents.$get>,
) {
  return ['riftbound', '/riftbound/content/v1/contents', args] as const
}

export function useGetRiftboundContentV1Contents<TError = unknown>(
  args: InferRequestType<typeof client.riftbound.content.v1.contents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiftboundContentV1ContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.riftbound.content.v1.contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRiftboundContentV1Contents<TError = unknown>(
  args: InferRequestType<typeof client.riftbound.content.v1.contents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRiftboundContentV1ContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.riftbound.content.v1.contents.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.riftbound.content.v1.contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDKey(
  args: InferRequestType<
    (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/spectator/tft/v5/active-games/by-puuid/:encryptedPUUID', args] as const
}

export function useGetLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.spectator.tft.v5['active-games']['by-puuid'][':encryptedPUUID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.spectator.tft.v5)['active-games']['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.spectator.tft.v5['active-games']['by-puuid'][':encryptedPUUID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDKey(
  args: InferRequestType<
    (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/spectator/v5/active-games/by-summoner/:encryptedPUUID', args] as const
}

export function useGetLolSpectatorV5ActiveGamesBySummonerEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.spectator.v5['active-games']['by-summoner'][':encryptedPUUID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolSpectatorV5ActiveGamesBySummonerEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.spectator.v5)['active-games']['by-summoner'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.spectator.v5['active-games']['by-summoner'][':encryptedPUUID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolSummonerV4SummonersByPuuidEncryptedPUUIDKey(
  args: InferRequestType<
    (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['lol', '/lol/summoner/v4/summoners/by-puuid/:encryptedPUUID', args] as const
}

export function useGetLolSummonerV4SummonersByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolSummonerV4SummonersByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.summoner.v4.summoners['by-puuid'][':encryptedPUUID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolSummonerV4SummonersByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.summoner.v4.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolSummonerV4SummonersByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.summoner.v4.summoners['by-puuid'][':encryptedPUUID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolSummonerV4SummonersMeKey() {
  return ['lol', '/lol/summoner/v4/summoners/me'] as const
}

export function useGetLolSummonerV4SummonersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolSummonerV4SummonersMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.summoner.v4.summoners.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolSummonerV4SummonersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolSummonerV4SummonersMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lol.summoner.v4.summoners.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lol.summoner.v4.summoners.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTftLeagueV1ByPuuidPuuidKey(
  args: InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>,
) {
  return ['tft', '/tft/league/v1/by-puuid/:puuid', args] as const
}

export function useGetTftLeagueV1ByPuuidPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1ByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tft.league.v1['by-puuid'][':puuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftLeagueV1ByPuuidPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1ByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.league.v1)['by-puuid'][':puuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tft.league.v1['by-puuid'][':puuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTftLeagueV1ChallengerKey(
  args: InferRequestType<typeof client.tft.league.v1.challenger.$get>,
) {
  return ['tft', '/tft/league/v1/challenger', args] as const
}

export function useGetTftLeagueV1Challenger<TError = unknown>(
  args: InferRequestType<typeof client.tft.league.v1.challenger.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1ChallengerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.league.v1.challenger.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftLeagueV1Challenger<TError = unknown>(
  args: InferRequestType<typeof client.tft.league.v1.challenger.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1ChallengerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.challenger.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.league.v1.challenger.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTftLeagueV1EntriesTierDivisionKey(
  args: InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>,
) {
  return ['tft', '/tft/league/v1/entries/:tier/:division', args] as const
}

export function useGetTftLeagueV1EntriesTierDivision<TError = unknown>(
  args: InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1EntriesTierDivisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tft.league.v1.entries[':tier'][':division'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftLeagueV1EntriesTierDivision<TError = unknown>(
  args: InferRequestType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1EntriesTierDivisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.league.v1.entries)[':tier'][':division']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tft.league.v1.entries[':tier'][':division'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTftLeagueV1GrandmasterKey(
  args: InferRequestType<typeof client.tft.league.v1.grandmaster.$get>,
) {
  return ['tft', '/tft/league/v1/grandmaster', args] as const
}

export function useGetTftLeagueV1Grandmaster<TError = unknown>(
  args: InferRequestType<typeof client.tft.league.v1.grandmaster.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1GrandmasterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.league.v1.grandmaster.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftLeagueV1Grandmaster<TError = unknown>(
  args: InferRequestType<typeof client.tft.league.v1.grandmaster.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1GrandmasterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.grandmaster.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.league.v1.grandmaster.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTftLeagueV1MasterKey(
  args: InferRequestType<typeof client.tft.league.v1.master.$get>,
) {
  return ['tft', '/tft/league/v1/master', args] as const
}

export function useGetTftLeagueV1Master<TError = unknown>(
  args: InferRequestType<typeof client.tft.league.v1.master.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1MasterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.league.v1.master.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftLeagueV1Master<TError = unknown>(
  args: InferRequestType<typeof client.tft.league.v1.master.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1MasterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.league.v1.master.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.league.v1.master.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTftLeagueV1RatedLaddersQueueTopKey(
  args: InferRequestType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>,
) {
  return ['tft', '/tft/league/v1/rated-ladders/:queue/top', args] as const
}

export function useGetTftLeagueV1RatedLaddersQueueTop<TError = unknown>(
  args: InferRequestType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1RatedLaddersQueueTopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tft.league.v1['rated-ladders'][':queue'].top.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftLeagueV1RatedLaddersQueueTop<TError = unknown>(
  args: InferRequestType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftLeagueV1RatedLaddersQueueTopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tft.league.v1)['rated-ladders'][':queue']['top']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tft.league.v1['rated-ladders'][':queue'].top.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTftMatchV1MatchesByPuuidPuuidIdsKey(
  args: InferRequestType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
) {
  return ['tft', '/tft/match/v1/matches/by-puuid/:puuid/ids', args] as const
}

export function useGetTftMatchV1MatchesByPuuidPuuidIds<TError = unknown>(
  args: InferRequestType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftMatchV1MatchesByPuuidPuuidIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tft.match.v1.matches['by-puuid'][':puuid'].ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftMatchV1MatchesByPuuidPuuidIds<TError = unknown>(
  args: InferRequestType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftMatchV1MatchesByPuuidPuuidIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tft.match.v1.matches)['by-puuid'][':puuid']['ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tft.match.v1.matches['by-puuid'][':puuid'].ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTftMatchV1MatchesMatchIdKey(
  args: InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>,
) {
  return ['tft', '/tft/match/v1/matches/:matchId', args] as const
}

export function useGetTftMatchV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftMatchV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.match.v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftMatchV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftMatchV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.match.v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTftStatusV1PlatformDataKey() {
  return ['tft', '/tft/status/v1/platform-data'] as const
}

export function useGetTftStatusV1PlatformData<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftStatusV1PlatformDataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tft.status.v1['platform-data'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftStatusV1PlatformData<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftStatusV1PlatformDataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tft.status.v1)['platform-data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tft.status.v1['platform-data'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTftSummonerV1SummonersByPuuidEncryptedPUUIDKey(
  args: InferRequestType<
    (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
) {
  return ['tft', '/tft/summoner/v1/summoners/by-puuid/:encryptedPUUID', args] as const
}

export function useGetTftSummonerV1SummonersByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftSummonerV1SummonersByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tft.summoner.v1.summoners['by-puuid'][':encryptedPUUID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftSummonerV1SummonersByPuuidEncryptedPUUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.tft.summoner.v1.summoners)['by-puuid'][':encryptedPUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftSummonerV1SummonersByPuuidEncryptedPUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tft.summoner.v1.summoners['by-puuid'][':encryptedPUUID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTftSummonerV1SummonersMeKey() {
  return ['tft', '/tft/summoner/v1/summoners/me'] as const
}

export function useGetTftSummonerV1SummonersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftSummonerV1SummonersMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.summoner.v1.summoners.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTftSummonerV1SummonersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTftSummonerV1SummonersMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tft.summoner.v1.summoners.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tft.summoner.v1.summoners.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLolTournamentStubV5CodesKey() {
  return ['lol', '/lol/tournament-stub/v5/codes', 'POST'] as const
}

export function usePostLolTournamentStubV5Codes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol)['tournament-stub']['v5']['codes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lol)['tournament-stub']['v5']['codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLolTournamentStubV5CodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lol)['tournament-stub']['v5']['codes']['$post']>
        },
      ) => parseResponse(client.lol['tournament-stub'].v5.codes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLolTournamentStubV5CodesTournamentCodeKey(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
  >,
) {
  return ['lol', '/lol/tournament-stub/v5/codes/:tournamentCode', args] as const
}

export function useGetLolTournamentStubV5CodesTournamentCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentStubV5CodesTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['tournament-stub'].v5.codes[':tournamentCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolTournamentStubV5CodesTournamentCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['codes'][':tournamentCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentStubV5CodesTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['tournament-stub'].v5.codes[':tournamentCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolTournamentStubV5LobbyEventsByCodeTournamentCodeKey(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
) {
  return ['lol', '/lol/tournament-stub/v5/lobby-events/by-code/:tournamentCode', args] as const
}

export function useGetLolTournamentStubV5LobbyEventsByCodeTournamentCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentStubV5LobbyEventsByCodeTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['tournament-stub'].v5['lobby-events']['by-code'][':tournamentCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolTournamentStubV5LobbyEventsByCodeTournamentCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol)['tournament-stub']['v5']['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentStubV5LobbyEventsByCodeTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol['tournament-stub'].v5['lobby-events']['by-code'][':tournamentCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLolTournamentStubV5ProvidersKey() {
  return ['lol', '/lol/tournament-stub/v5/providers', 'POST'] as const
}

export function usePostLolTournamentStubV5Providers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLolTournamentStubV5ProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lol)['tournament-stub']['v5']['providers']['$post']>
        },
      ) => parseResponse(client.lol['tournament-stub'].v5.providers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLolTournamentStubV5TournamentsKey() {
  return ['lol', '/lol/tournament-stub/v5/tournaments', 'POST'] as const
}

export function usePostLolTournamentStubV5Tournaments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLolTournamentStubV5TournamentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.lol)['tournament-stub']['v5']['tournaments']['$post']
          >
        },
      ) => parseResponse(client.lol['tournament-stub'].v5.tournaments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLolTournamentV5CodesKey() {
  return ['lol', '/lol/tournament/v5/codes', 'POST'] as const
}

export function usePostLolTournamentV5Codes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.tournament.v5.codes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lol.tournament.v5.codes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLolTournamentV5CodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lol.tournament.v5.codes.$post> },
      ) => parseResponse(client.lol.tournament.v5.codes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLolTournamentV5CodesTournamentCodeKey(
  args: InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>,
) {
  return ['lol', '/lol/tournament/v5/codes/:tournamentCode', args] as const
}

export function useGetLolTournamentV5CodesTournamentCode<TError = unknown>(
  args: InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentV5CodesTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.tournament.v5.codes[':tournamentCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolTournamentV5CodesTournamentCode<TError = unknown>(
  args: InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentV5CodesTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lol.tournament.v5.codes[':tournamentCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLolTournamentV5CodesTournamentCodeKey() {
  return ['lol', '/lol/tournament/v5/codes/:tournamentCode', 'PUT'] as const
}

export function usePutLolTournamentV5CodesTournamentCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLolTournamentV5CodesTournamentCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lol.tournament.v5.codes)[':tournamentCode']['$put']>
        },
      ) =>
        parseResponse(client.lol.tournament.v5.codes[':tournamentCode'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLolTournamentV5GamesByCodeTournamentCodeKey(
  args: InferRequestType<
    (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
  >,
) {
  return ['lol', '/lol/tournament/v5/games/by-code/:tournamentCode', args] as const
}

export function useGetLolTournamentV5GamesByCodeTournamentCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentV5GamesByCodeTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.tournament.v5.games['by-code'][':tournamentCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolTournamentV5GamesByCodeTournamentCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.tournament.v5.games)['by-code'][':tournamentCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentV5GamesByCodeTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.tournament.v5.games['by-code'][':tournamentCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLolTournamentV5LobbyEventsByCodeTournamentCodeKey(
  args: InferRequestType<
    (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
) {
  return ['lol', '/lol/tournament/v5/lobby-events/by-code/:tournamentCode', args] as const
}

export function useGetLolTournamentV5LobbyEventsByCodeTournamentCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentV5LobbyEventsByCodeTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.tournament.v5['lobby-events']['by-code'][':tournamentCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLolTournamentV5LobbyEventsByCodeTournamentCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.lol.tournament.v5)['lobby-events']['by-code'][':tournamentCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLolTournamentV5LobbyEventsByCodeTournamentCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lol.tournament.v5['lobby-events']['by-code'][':tournamentCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLolTournamentV5ProvidersKey() {
  return ['lol', '/lol/tournament/v5/providers', 'POST'] as const
}

export function usePostLolTournamentV5Providers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.tournament.v5.providers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lol.tournament.v5.providers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLolTournamentV5ProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lol.tournament.v5.providers.$post> },
      ) => parseResponse(client.lol.tournament.v5.providers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLolTournamentV5TournamentsKey() {
  return ['lol', '/lol/tournament/v5/tournaments', 'POST'] as const
}

export function usePostLolTournamentV5Tournaments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lol.tournament.v5.tournaments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lol.tournament.v5.tournaments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLolTournamentV5TournamentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lol.tournament.v5.tournaments.$post> },
      ) => parseResponse(client.lol.tournament.v5.tournaments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetValMatchConsoleV1MatchesMatchIdKey(
  args: InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>,
) {
  return ['val', '/val/match/console/v1/matches/:matchId', args] as const
}

export function useGetValMatchConsoleV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchConsoleV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.val.match.console.v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValMatchConsoleV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchConsoleV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.match.console.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.val.match.console.v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetValMatchConsoleV1MatchlistsByPuuidPuuidKey(
  args: InferRequestType<
    (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
  >,
) {
  return ['val', '/val/match/console/v1/matchlists/by-puuid/:puuid', args] as const
}

export function useGetValMatchConsoleV1MatchlistsByPuuidPuuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchConsoleV1MatchlistsByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.match.console.v1.matchlists['by-puuid'][':puuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValMatchConsoleV1MatchlistsByPuuidPuuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.val.match.console.v1.matchlists)['by-puuid'][':puuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchConsoleV1MatchlistsByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.match.console.v1.matchlists['by-puuid'][':puuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetValMatchConsoleV1RecentMatchesByQueueQueueKey(
  args: InferRequestType<
    (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
) {
  return ['val', '/val/match/console/v1/recent-matches/by-queue/:queue', args] as const
}

export function useGetValMatchConsoleV1RecentMatchesByQueueQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchConsoleV1RecentMatchesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.match.console.v1['recent-matches']['by-queue'][':queue'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValMatchConsoleV1RecentMatchesByQueueQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.val.match.console.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchConsoleV1RecentMatchesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.match.console.v1['recent-matches']['by-queue'][':queue'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetValConsoleRankedV1LeaderboardsByActActIdKey(
  args: InferRequestType<
    (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
  >,
) {
  return ['val', '/val/console/ranked/v1/leaderboards/by-act/:actId', args] as const
}

export function useGetValConsoleRankedV1LeaderboardsByActActId<TError = unknown>(
  args: InferRequestType<
    (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValConsoleRankedV1LeaderboardsByActActIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.console.ranked.v1.leaderboards['by-act'][':actId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValConsoleRankedV1LeaderboardsByActActId<TError = unknown>(
  args: InferRequestType<
    (typeof client.val.console.ranked.v1.leaderboards)['by-act'][':actId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValConsoleRankedV1LeaderboardsByActActIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.console.ranked.v1.leaderboards['by-act'][':actId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetValContentV1ContentsKey(
  args: InferRequestType<typeof client.val.content.v1.contents.$get>,
) {
  return ['val', '/val/content/v1/contents', args] as const
}

export function useGetValContentV1Contents<TError = unknown>(
  args: InferRequestType<typeof client.val.content.v1.contents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValContentV1ContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.val.content.v1.contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValContentV1Contents<TError = unknown>(
  args: InferRequestType<typeof client.val.content.v1.contents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValContentV1ContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.val.content.v1.contents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.val.content.v1.contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetValMatchV1MatchesMatchIdKey(
  args: InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>,
) {
  return ['val', '/val/match/v1/matches/:matchId', args] as const
}

export function useGetValMatchV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.val.match.v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValMatchV1MatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.val.match.v1.matches)[':matchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchV1MatchesMatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.match.v1.matches)[':matchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.val.match.v1.matches[':matchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetValMatchV1MatchlistsByPuuidPuuidKey(
  args: InferRequestType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>,
) {
  return ['val', '/val/match/v1/matchlists/by-puuid/:puuid', args] as const
}

export function useGetValMatchV1MatchlistsByPuuidPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchV1MatchlistsByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.match.v1.matchlists['by-puuid'][':puuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValMatchV1MatchlistsByPuuidPuuid<TError = unknown>(
  args: InferRequestType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchV1MatchlistsByPuuidPuuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.val.match.v1.matchlists)['by-puuid'][':puuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.match.v1.matchlists['by-puuid'][':puuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetValMatchV1RecentMatchesByQueueQueueKey(
  args: InferRequestType<
    (typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
) {
  return ['val', '/val/match/v1/recent-matches/by-queue/:queue', args] as const
}

export function useGetValMatchV1RecentMatchesByQueueQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchV1RecentMatchesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.match.v1['recent-matches']['by-queue'][':queue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValMatchV1RecentMatchesByQueueQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.val.match.v1)['recent-matches']['by-queue'][':queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValMatchV1RecentMatchesByQueueQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.match.v1['recent-matches']['by-queue'][':queue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetValRankedV1LeaderboardsByActActIdKey(
  args: InferRequestType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>,
) {
  return ['val', '/val/ranked/v1/leaderboards/by-act/:actId', args] as const
}

export function useGetValRankedV1LeaderboardsByActActId<TError = unknown>(
  args: InferRequestType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValRankedV1LeaderboardsByActActIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.ranked.v1.leaderboards['by-act'][':actId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValRankedV1LeaderboardsByActActId<TError = unknown>(
  args: InferRequestType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValRankedV1LeaderboardsByActActIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.val.ranked.v1.leaderboards)['by-act'][':actId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.val.ranked.v1.leaderboards['by-act'][':actId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetValStatusV1PlatformDataKey() {
  return ['val', '/val/status/v1/platform-data'] as const
}

export function useGetValStatusV1PlatformData<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValStatusV1PlatformDataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.val.status.v1['platform-data'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValStatusV1PlatformData<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetValStatusV1PlatformDataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.val.status.v1)['platform-data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.val.status.v1['platform-data'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
