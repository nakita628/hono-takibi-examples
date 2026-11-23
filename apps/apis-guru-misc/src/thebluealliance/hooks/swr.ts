import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDistrictKey() {
  return ['district'] as const
}

export function getDistrictsKey() {
  return ['districts'] as const
}

export function getEventKey() {
  return ['event'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getMatchKey() {
  return ['match'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getTeamKey() {
  return ['team'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getGetDistrictDistrictKeyEventsKey(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/events', keyArgs] as const
}

export function useGetDistrictDistrictKeyEvents<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
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
        ? getGetDistrictDistrictKeyEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.district[':district_key'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistrictDistrictKeyEvents<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
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
        ? getGetDistrictDistrictKeyEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.district[':district_key'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDistrictDistrictKeyEventsKeysKey(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/events/keys', keyArgs] as const
}

export function useGetDistrictDistrictKeyEventsKeys<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
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
        ? getGetDistrictDistrictKeyEventsKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].events.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistrictDistrictKeyEventsKeys<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
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
        ? getGetDistrictDistrictKeyEventsKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['events']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].events.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDistrictDistrictKeyEventsSimpleKey(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/events/simple', keyArgs] as const
}

export function useGetDistrictDistrictKeyEventsSimple<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>
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
        ? getGetDistrictDistrictKeyEventsSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].events.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistrictDistrictKeyEventsSimple<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['events']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>
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
        ? getGetDistrictDistrictKeyEventsSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.district)[':district_key']['events']['simple']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].events.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDistrictDistrictKeyRankingsKey(
  args: InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/rankings', keyArgs] as const
}

export function useGetDistrictDistrictKeyRankings<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
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
        ? getGetDistrictDistrictKeyRankingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].rankings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistrictDistrictKeyRankings<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['rankings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
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
        ? getGetDistrictDistrictKeyRankingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['rankings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].rankings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDistrictDistrictKeyTeamsKey(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/teams', keyArgs] as const
}

export function useGetDistrictDistrictKeyTeams<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
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
        ? getGetDistrictDistrictKeyTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.district[':district_key'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistrictDistrictKeyTeams<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
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
        ? getGetDistrictDistrictKeyTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.district[':district_key'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDistrictDistrictKeyTeamsKeysKey(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/teams/keys', keyArgs] as const
}

export function useGetDistrictDistrictKeyTeamsKeys<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
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
        ? getGetDistrictDistrictKeyTeamsKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].teams.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistrictDistrictKeyTeamsKeys<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
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
        ? getGetDistrictDistrictKeyTeamsKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.district)[':district_key']['teams']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].teams.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDistrictDistrictKeyTeamsSimpleKey(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['district', '/district/:district_key/teams/simple', keyArgs] as const
}

export function useGetDistrictDistrictKeyTeamsSimple<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
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
        ? getGetDistrictDistrictKeyTeamsSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].teams.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistrictDistrictKeyTeamsSimple<TError = unknown>(
  args: InferRequestType<(typeof client.district)[':district_key']['teams']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
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
        ? getGetDistrictDistrictKeyTeamsSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.district)[':district_key']['teams']['simple']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.district[':district_key'].teams.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDistrictsYearKey(
  args: InferRequestType<(typeof client.districts)[':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['districts', '/districts/:year', keyArgs] as const
}

export function useGetDistrictsYear<TError = unknown>(
  args: InferRequestType<(typeof client.districts)[':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDistrictsYearKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.districts[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistrictsYear<TError = unknown>(
  args: InferRequestType<(typeof client.districts)[':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDistrictsYearKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':year']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.districts[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyKey(
  args: InferRequestType<(typeof client.event)[':event_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key', keyArgs] as const
}

export function useGetEventEventKey<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventEventKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKey<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventEventKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyAlliancesKey(
  args: InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/alliances', keyArgs] as const
}

export function useGetEventEventKeyAlliances<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
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
        ? getGetEventEventKeyAlliancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].alliances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyAlliances<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['alliances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
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
        ? getGetEventEventKeyAlliancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['alliances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].alliances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyAwardsKey(
  args: InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/awards', keyArgs] as const
}

export function useGetEventEventKeyAwards<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
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
        ? getGetEventEventKeyAwardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].awards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyAwards<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['awards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
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
        ? getGetEventEventKeyAwardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['awards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].awards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyDistrictPointsKey(
  args: InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/district_points', keyArgs] as const
}

export function useGetEventEventKeyDistrictPoints<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
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
        ? getGetEventEventKeyDistrictPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event[':event_key'].district_points.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyDistrictPoints<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['district_points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
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
        ? getGetEventEventKeyDistrictPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['district_points']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event[':event_key'].district_points.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyInsightsKey(
  args: InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/insights', keyArgs] as const
}

export function useGetEventEventKeyInsights<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
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
        ? getGetEventEventKeyInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].insights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyInsights<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['insights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
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
        ? getGetEventEventKeyInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['insights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].insights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyMatchesKey(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/matches', keyArgs] as const
}

export function useGetEventEventKeyMatches<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
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
        ? getGetEventEventKeyMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyMatches<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
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
        ? getGetEventEventKeyMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyMatchesKeysKey(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/matches/keys', keyArgs] as const
}

export function useGetEventEventKeyMatchesKeys<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
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
        ? getGetEventEventKeyMatchesKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].matches.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyMatchesKeys<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
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
        ? getGetEventEventKeyMatchesKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].matches.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyMatchesSimpleKey(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/matches/simple', keyArgs] as const
}

export function useGetEventEventKeyMatchesSimple<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
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
        ? getGetEventEventKeyMatchesSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event[':event_key'].matches.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyMatchesSimple<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
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
        ? getGetEventEventKeyMatchesSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['matches']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event[':event_key'].matches.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyMatchesTimeseriesKey(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/matches/timeseries', keyArgs] as const
}

export function useGetEventEventKeyMatchesTimeseries<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
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
        ? getGetEventEventKeyMatchesTimeseriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event[':event_key'].matches.timeseries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyMatchesTimeseries<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
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
        ? getGetEventEventKeyMatchesTimeseriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event)[':event_key']['matches']['timeseries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event[':event_key'].matches.timeseries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyOprsKey(
  args: InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/oprs', keyArgs] as const
}

export function useGetEventEventKeyOprs<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>
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
        ? getGetEventEventKeyOprsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].oprs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyOprs<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['oprs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>
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
        ? getGetEventEventKeyOprsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['oprs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].oprs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyPredictionsKey(
  args: InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/predictions', keyArgs] as const
}

export function useGetEventEventKeyPredictions<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
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
        ? getGetEventEventKeyPredictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].predictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyPredictions<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['predictions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
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
        ? getGetEventEventKeyPredictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['predictions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].predictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyRankingsKey(
  args: InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/rankings', keyArgs] as const
}

export function useGetEventEventKeyRankings<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
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
        ? getGetEventEventKeyRankingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].rankings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyRankings<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['rankings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
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
        ? getGetEventEventKeyRankingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['rankings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].rankings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeySimpleKey(
  args: InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/simple', keyArgs] as const
}

export function useGetEventEventKeySimple<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
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
        ? getGetEventEventKeySimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeySimple<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
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
        ? getGetEventEventKeySimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyTeamsKey(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/teams', keyArgs] as const
}

export function useGetEventEventKeyTeams<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
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
        ? getGetEventEventKeyTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyTeams<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
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
        ? getGetEventEventKeyTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyTeamsKeysKey(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/teams/keys', keyArgs] as const
}

export function useGetEventEventKeyTeamsKeys<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
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
        ? getGetEventEventKeyTeamsKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].teams.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyTeamsKeys<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
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
        ? getGetEventEventKeyTeamsKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].teams.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyTeamsSimpleKey(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/teams/simple', keyArgs] as const
}

export function useGetEventEventKeyTeamsSimple<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
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
        ? getGetEventEventKeyTeamsSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].teams.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyTeamsSimple<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
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
        ? getGetEventEventKeyTeamsSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_key'].teams.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventEventKeyTeamsStatusesKey(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_key/teams/statuses', keyArgs] as const
}

export function useGetEventEventKeyTeamsStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
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
        ? getGetEventEventKeyTeamsStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event[':event_key'].teams.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventKeyTeamsStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
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
        ? getGetEventEventKeyTeamsStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.event)[':event_key']['teams']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.event[':event_key'].teams.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsYearKey(
  args: InferRequestType<(typeof client.events)[':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/:year', keyArgs] as const
}

export function useGetEventsYear<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsYearKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsYear<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsYearKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsYearKeysKey(
  args: InferRequestType<(typeof client.events)[':year']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/:year/keys', keyArgs] as const
}

export function useGetEventsYearKeys<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':year']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsYearKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':year'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsYearKeys<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':year']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsYearKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':year']['keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':year'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsYearSimpleKey(
  args: InferRequestType<(typeof client.events)[':year']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/:year/simple', keyArgs] as const
}

export function useGetEventsYearSimple<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':year']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>
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
        ? getGetEventsYearSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':year'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsYearSimple<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':year']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>
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
        ? getGetEventsYearSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':year']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':year'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMatchMatchKeyKey(
  args: InferRequestType<(typeof client.match)[':match_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['match', '/match/:match_key', keyArgs] as const
}

export function useGetMatchMatchKey<TError = unknown>(
  args: InferRequestType<(typeof client.match)[':match_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMatchMatchKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.match[':match_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchMatchKey<TError = unknown>(
  args: InferRequestType<(typeof client.match)[':match_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMatchMatchKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.match)[':match_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.match[':match_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMatchMatchKeySimpleKey(
  args: InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['match', '/match/:match_key/simple', keyArgs] as const
}

export function useGetMatchMatchKeySimple<TError = unknown>(
  args: InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
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
        ? getGetMatchMatchKeySimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.match[':match_key'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchMatchKeySimple<TError = unknown>(
  args: InferRequestType<(typeof client.match)[':match_key']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
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
        ? getGetMatchMatchKeySimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.match[':match_key'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMatchMatchKeyTimeseriesKey(
  args: InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['match', '/match/:match_key/timeseries', keyArgs] as const
}

export function useGetMatchMatchKeyTimeseries<TError = unknown>(
  args: InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
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
        ? getGetMatchMatchKeyTimeseriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.match[':match_key'].timeseries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchMatchKeyTimeseries<TError = unknown>(
  args: InferRequestType<(typeof client.match)[':match_key']['timeseries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
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
        ? getGetMatchMatchKeyTimeseriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['timeseries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.match[':match_key'].timeseries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMatchMatchKeyZebraMotionworksKey(
  args: InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['match', '/match/:match_key/zebra_motionworks', keyArgs] as const
}

export function useGetMatchMatchKeyZebraMotionworks<TError = unknown>(
  args: InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
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
        ? getGetMatchMatchKeyZebraMotionworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.match[':match_key'].zebra_motionworks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchMatchKeyZebraMotionworks<TError = unknown>(
  args: InferRequestType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
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
        ? getGetMatchMatchKeyZebraMotionworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.match)[':match_key']['zebra_motionworks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.match[':match_key'].zebra_motionworks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusKey(args: InferRequestType<typeof client.status.$get>) {
  const { header: _, ...keyArgs } = args
  return ['status', '/status', keyArgs] as const
}

export function useGetStatus<TError = unknown>(
  args: InferRequestType<typeof client.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.status.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStatus<TError = unknown>(
  args: InferRequestType<typeof client.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.status.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTeamTeamKeyKey(
  args: InferRequestType<(typeof client.team)[':team_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key', keyArgs] as const
}

export function useGetTeamTeamKey<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamTeamKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKey<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamTeamKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':team_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyAwardsKey(
  args: InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/awards', keyArgs] as const
}

export function useGetTeamTeamKeyAwards<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>
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
        ? getGetTeamTeamKeyAwardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].awards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyAwards<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>
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
        ? getGetTeamTeamKeyAwardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['awards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].awards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyAwardsYearKey(
  args: InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/awards/:year', keyArgs] as const
}

export function useGetTeamTeamKeyAwardsYear<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
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
        ? getGetTeamTeamKeyAwardsYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].awards[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyAwardsYear<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['awards'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
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
        ? getGetTeamTeamKeyAwardsYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['awards'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].awards[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyDistrictsKey(
  args: InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/districts', keyArgs] as const
}

export function useGetTeamTeamKeyDistricts<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
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
        ? getGetTeamTeamKeyDistrictsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].districts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyDistricts<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['districts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
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
        ? getGetTeamTeamKeyDistrictsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['districts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].districts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventEventKeyAwardsKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/awards', keyArgs] as const
}

export function useGetTeamTeamKeyEventEventKeyAwards<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
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
        ? getGetTeamTeamKeyEventEventKeyAwardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.team[':team_key'].event[':event_key'].awards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventEventKeyAwards<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
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
        ? getGetTeamTeamKeyEventEventKeyAwardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['awards']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.team[':team_key'].event[':event_key'].awards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventEventKeyMatchesKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/matches', keyArgs] as const
}

export function useGetTeamTeamKeyEventEventKeyMatches<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
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
        ? getGetTeamTeamKeyEventEventKeyMatchesKey(args)
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
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
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
          client.team[':team_key'].event[':event_key'].matches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventEventKeyMatches<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
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
        ? getGetTeamTeamKeyEventEventKeyMatchesKey(args)
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
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['$get']
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
          client.team[':team_key'].event[':event_key'].matches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventEventKeyMatchesKeysKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/matches/keys', keyArgs] as const
}

export function useGetTeamTeamKeyEventEventKeyMatchesKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
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
        ? getGetTeamTeamKeyEventEventKeyMatchesKeysKey(args)
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
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
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
          client.team[':team_key'].event[':event_key'].matches.keys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventEventKeyMatchesKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
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
        ? getGetTeamTeamKeyEventEventKeyMatchesKeysKey(args)
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
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['keys']['$get']
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
          client.team[':team_key'].event[':event_key'].matches.keys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventEventKeyMatchesSimpleKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/matches/simple', keyArgs] as const
}

export function useGetTeamTeamKeyEventEventKeyMatchesSimple<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
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
        ? getGetTeamTeamKeyEventEventKeyMatchesSimpleKey(args)
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
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
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
          client.team[':team_key'].event[':event_key'].matches.simple.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventEventKeyMatchesSimple<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
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
        ? getGetTeamTeamKeyEventEventKeyMatchesSimpleKey(args)
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
                (typeof client.team)[':team_key']['event'][':event_key']['matches']['simple']['$get']
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
          client.team[':team_key'].event[':event_key'].matches.simple.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventEventKeyStatusKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/event/:event_key/status', keyArgs] as const
}

export function useGetTeamTeamKeyEventEventKeyStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
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
        ? getGetTeamTeamKeyEventEventKeyStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.team[':team_key'].event[':event_key'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventEventKeyStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['event'][':event_key']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
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
        ? getGetTeamTeamKeyEventEventKeyStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['event'][':event_key']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.team[':team_key'].event[':event_key'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventsKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events', keyArgs] as const
}

export function useGetTeamTeamKeyEvents<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>
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
        ? getGetTeamTeamKeyEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEvents<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>
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
        ? getGetTeamTeamKeyEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventsKeysKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/keys', keyArgs] as const
}

export function useGetTeamTeamKeyEventsKeys<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
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
        ? getGetTeamTeamKeyEventsKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].events.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventsKeys<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
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
        ? getGetTeamTeamKeyEventsKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].events.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventsSimpleKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/simple', keyArgs] as const
}

export function useGetTeamTeamKeyEventsSimple<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
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
        ? getGetTeamTeamKeyEventsSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].events.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventsSimple<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
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
        ? getGetTeamTeamKeyEventsSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].events.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventsYearKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/:year', keyArgs] as const
}

export function useGetTeamTeamKeyEventsYear<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
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
        ? getGetTeamTeamKeyEventsYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].events[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventsYear<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
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
        ? getGetTeamTeamKeyEventsYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['events'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].events[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventsYearKeysKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/:year/keys', keyArgs] as const
}

export function useGetTeamTeamKeyEventsYearKeys<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
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
        ? getGetTeamTeamKeyEventsYearKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].events[':year'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventsYearKeys<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
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
        ? getGetTeamTeamKeyEventsYearKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].events[':year'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventsYearSimpleKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/:year/simple', keyArgs] as const
}

export function useGetTeamTeamKeyEventsYearSimple<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
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
        ? getGetTeamTeamKeyEventsYearSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].events[':year'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventsYearSimple<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
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
        ? getGetTeamTeamKeyEventsYearSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['simple']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].events[':year'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyEventsYearStatusesKey(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/events/:year/statuses', keyArgs] as const
}

export function useGetTeamTeamKeyEventsYearStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
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
        ? getGetTeamTeamKeyEventsYearStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].events[':year'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyEventsYearStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
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
        ? getGetTeamTeamKeyEventsYearStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['events'][':year']['statuses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].events[':year'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyMatchesYearKey(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/matches/:year', keyArgs] as const
}

export function useGetTeamTeamKeyMatchesYear<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
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
        ? getGetTeamTeamKeyMatchesYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].matches[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyMatchesYear<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
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
        ? getGetTeamTeamKeyMatchesYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['matches'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].matches[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyMatchesYearKeysKey(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/matches/:year/keys', keyArgs] as const
}

export function useGetTeamTeamKeyMatchesYearKeys<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
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
        ? getGetTeamTeamKeyMatchesYearKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].matches[':year'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyMatchesYearKeys<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
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
        ? getGetTeamTeamKeyMatchesYearKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['matches'][':year']['keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].matches[':year'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyMatchesYearSimpleKey(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/matches/:year/simple', keyArgs] as const
}

export function useGetTeamTeamKeyMatchesYearSimple<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
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
        ? getGetTeamTeamKeyMatchesYearSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].matches[':year'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyMatchesYearSimple<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
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
        ? getGetTeamTeamKeyMatchesYearSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['matches'][':year']['simple']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].matches[':year'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyMediaTagMediaTagKey(
  args: InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/media/tag/:media_tag', keyArgs] as const
}

export function useGetTeamTeamKeyMediaTagMediaTag<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
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
        ? getGetTeamTeamKeyMediaTagMediaTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].media.tag[':media_tag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyMediaTagMediaTag<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
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
        ? getGetTeamTeamKeyMediaTagMediaTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.team)[':team_key']['media']['tag'][':media_tag']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].media.tag[':media_tag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyMediaTagMediaTagYearKey(
  args: InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/media/tag/:media_tag/:year', keyArgs] as const
}

export function useGetTeamTeamKeyMediaTagMediaTagYear<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
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
        ? getGetTeamTeamKeyMediaTagMediaTagYearKey(args)
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
                (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
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
          client.team[':team_key'].media.tag[':media_tag'][':year'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyMediaTagMediaTagYear<TError = unknown>(
  args: InferRequestType<
    (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
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
        ? getGetTeamTeamKeyMediaTagMediaTagYearKey(args)
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
                (typeof client.team)[':team_key']['media']['tag'][':media_tag'][':year']['$get']
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
          client.team[':team_key'].media.tag[':media_tag'][':year'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyMediaYearKey(
  args: InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/media/:year', keyArgs] as const
}

export function useGetTeamTeamKeyMediaYear<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
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
        ? getGetTeamTeamKeyMediaYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].media[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyMediaYear<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['media'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
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
        ? getGetTeamTeamKeyMediaYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['media'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].media[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyRobotsKey(
  args: InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/robots', keyArgs] as const
}

export function useGetTeamTeamKeyRobots<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>
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
        ? getGetTeamTeamKeyRobotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].robots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyRobots<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['robots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>
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
        ? getGetTeamTeamKeyRobotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['robots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].robots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeySimpleKey(
  args: InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/simple', keyArgs] as const
}

export function useGetTeamTeamKeySimple<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>
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
        ? getGetTeamTeamKeySimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeySimple<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>
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
        ? getGetTeamTeamKeySimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeySocialMediaKey(
  args: InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/social_media', keyArgs] as const
}

export function useGetTeamTeamKeySocialMedia<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
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
        ? getGetTeamTeamKeySocialMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].social_media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeySocialMedia<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['social_media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
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
        ? getGetTeamTeamKeySocialMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['social_media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':team_key'].social_media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamKeyYearsParticipatedKey(
  args: InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team', '/team/:team_key/years_participated', keyArgs] as const
}

export function useGetTeamTeamKeyYearsParticipated<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
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
        ? getGetTeamTeamKeyYearsParticipatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].years_participated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamKeyYearsParticipated<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':team_key']['years_participated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
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
        ? getGetTeamTeamKeyYearsParticipatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)[':team_key']['years_participated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team[':team_key'].years_participated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsPageNumKey(
  args: InferRequestType<(typeof client.teams)[':page_num']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:page_num', keyArgs] as const
}

export function useGetTeamsPageNum<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':page_num']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamsPageNumKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':page_num'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsPageNum<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':page_num']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamsPageNumKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':page_num']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':page_num'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsPageNumKeysKey(
  args: InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:page_num/keys', keyArgs] as const
}

export function useGetTeamsPageNumKeys<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>
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
        ? getGetTeamsPageNumKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':page_num'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsPageNumKeys<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':page_num']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>
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
        ? getGetTeamsPageNumKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':page_num']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':page_num'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsPageNumSimpleKey(
  args: InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:page_num/simple', keyArgs] as const
}

export function useGetTeamsPageNumSimple<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
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
        ? getGetTeamsPageNumSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':page_num'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsPageNumSimple<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':page_num']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
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
        ? getGetTeamsPageNumSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':page_num']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':page_num'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsYearPageNumKey(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:year/:page_num', keyArgs] as const
}

export function useGetTeamsYearPageNum<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>
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
        ? getGetTeamsYearPageNumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':year'][':page_num'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsYearPageNum<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>
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
        ? getGetTeamsYearPageNumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':year'][':page_num'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsYearPageNumKeysKey(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:year/:page_num/keys', keyArgs] as const
}

export function useGetTeamsYearPageNumKeys<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
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
        ? getGetTeamsYearPageNumKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':year'][':page_num'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsYearPageNumKeys<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
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
        ? getGetTeamsYearPageNumKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':year'][':page_num'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsYearPageNumSimpleKey(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:year/:page_num/simple', keyArgs] as const
}

export function useGetTeamsYearPageNumSimple<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
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
        ? getGetTeamsYearPageNumSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':year'][':page_num'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsYearPageNumSimple<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
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
        ? getGetTeamsYearPageNumSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':year'][':page_num']['simple']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':year'][':page_num'].simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
