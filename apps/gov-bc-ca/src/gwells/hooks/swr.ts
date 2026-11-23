import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiTokenAuthKey() {
  return ['api-token-auth'] as const
}

export function getAquiferCodesKey() {
  return ['aquifer-codes'] as const
}

export function getAquifersKey() {
  return ['aquifers'] as const
}

export function getCitiesKey() {
  return ['cities'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getDrillersKey() {
  return ['drillers'] as const
}

export function getKeycloakKey() {
  return ['keycloak'] as const
}

export function getSubmissionsKey() {
  return ['submissions'] as const
}

export function getSurveysKey() {
  return ['surveys'] as const
}

export function getWellsKey() {
  return ['wells'] as const
}

export function getGetAquiferCodesDemandIndexKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/demand/', args] as const
}

export function useGetAquiferCodesDemandIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
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
        ? getGetAquiferCodesDemandIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['aquifer-codes'].demand.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquiferCodesDemandIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
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
        ? getGetAquiferCodesDemandIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['aquifer-codes'].demand.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquiferCodesMaterialsIndexKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/materials/', args] as const
}

export function useGetAquiferCodesMaterialsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
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
        ? getGetAquiferCodesMaterialsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['aquifer-codes'].materials.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquiferCodesMaterialsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
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
        ? getGetAquiferCodesMaterialsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['aquifer-codes'].materials.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquiferCodesProductivityIndexKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/productivity/', args] as const
}

export function useGetAquiferCodesProductivityIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>>
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
        ? getGetAquiferCodesProductivityIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['aquifer-codes'].productivity.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquiferCodesProductivityIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>>
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
        ? getGetAquiferCodesProductivityIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['aquifer-codes'].productivity.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquiferCodesQualityConcernsIndexKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/quality-concerns/', args] as const
}

export function useGetAquiferCodesQualityConcernsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>
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
        ? getGetAquiferCodesQualityConcernsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['aquifer-codes']['quality-concerns'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquiferCodesQualityConcernsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>
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
        ? getGetAquiferCodesQualityConcernsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['aquifer-codes']['quality-concerns'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquiferCodesSubtypesIndexKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/subtypes/', args] as const
}

export function useGetAquiferCodesSubtypesIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
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
        ? getGetAquiferCodesSubtypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['aquifer-codes'].subtypes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquiferCodesSubtypesIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
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
        ? getGetAquiferCodesSubtypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['aquifer-codes'].subtypes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquiferCodesVulnerabilityIndexKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/vulnerability/', args] as const
}

export function useGetAquiferCodesVulnerabilityIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>>
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
        ? getGetAquiferCodesVulnerabilityIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['aquifer-codes'].vulnerability.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquiferCodesVulnerabilityIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>>
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
        ? getGetAquiferCodesVulnerabilityIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['aquifer-codes'].vulnerability.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquiferCodesWaterUseIndexKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/water-use/', args] as const
}

export function useGetAquiferCodesWaterUseIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
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
        ? getGetAquiferCodesWaterUseIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['aquifer-codes']['water-use'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquiferCodesWaterUseIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
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
        ? getGetAquiferCodesWaterUseIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['aquifer-codes']['water-use'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquifersIndexKey(args: InferRequestType<typeof client.aquifers.index.$get>) {
  return ['aquifers', '/aquifers/', args] as const
}

export function useGetAquifersIndex<TError = unknown>(
  args: InferRequestType<typeof client.aquifers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAquifersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aquifers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquifersIndex<TError = unknown>(
  args: InferRequestType<typeof client.aquifers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAquifersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aquifers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquifersNamesIndexKey(
  args: InferRequestType<typeof client.aquifers.names.index.$get>,
) {
  return ['aquifers', '/aquifers/names/', args] as const
}

export function useGetAquifersNamesIndex<TError = unknown>(
  args: InferRequestType<typeof client.aquifers.names.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>
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
        ? getGetAquifersNamesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aquifers.names.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquifersNamesIndex<TError = unknown>(
  args: InferRequestType<typeof client.aquifers.names.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>
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
        ? getGetAquifersNamesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aquifers.names.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquifersAquiferIdIndexKey(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>,
) {
  return ['aquifers', '/aquifers/:aquifer_id/', args] as const
}

export function useGetAquifersAquiferIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
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
        ? getGetAquifersAquiferIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aquifers[':aquifer_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquifersAquiferIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
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
        ? getGetAquifersAquiferIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aquifers[':aquifer_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAquifersAquiferIdFilesKey(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>,
) {
  return ['aquifers', '/aquifers/:aquifer_id/files', args] as const
}

export function useGetAquifersAquiferIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
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
        ? getGetAquifersAquiferIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aquifers[':aquifer_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAquifersAquiferIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
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
        ? getGetAquifersAquiferIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aquifers[':aquifer_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCitiesDrillersIndexKey() {
  return ['cities', '/cities/drillers/'] as const
}

export function useGetCitiesDrillersIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>
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
        ? getGetCitiesDrillersIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cities.drillers.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCitiesDrillersIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>
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
        ? getGetCitiesDrillersIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cities.drillers.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCitiesInstallersIndexKey() {
  return ['cities', '/cities/installers/'] as const
}

export function useGetCitiesInstallersIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
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
        ? getGetCitiesInstallersIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cities.installers.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCitiesInstallersIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
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
        ? getGetCitiesInstallersIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cities.installers.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigKey() {
  return ['config', '/config'] as const
}

export function useGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDrillersIndexKey(args: InferRequestType<typeof client.drillers.index.$get>) {
  return ['drillers', '/drillers/', args] as const
}

export function useGetDrillersIndex<TError = unknown>(
  args: InferRequestType<typeof client.drillers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDrillersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.drillers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDrillersIndex<TError = unknown>(
  args: InferRequestType<typeof client.drillers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDrillersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.drillers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDrillersNamesIndexKey(
  args: InferRequestType<typeof client.drillers.names.index.$get>,
) {
  return ['drillers', '/drillers/names/', args] as const
}

export function useGetDrillersNamesIndex<TError = unknown>(
  args: InferRequestType<typeof client.drillers.names.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>
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
        ? getGetDrillersNamesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.drillers.names.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDrillersNamesIndex<TError = unknown>(
  args: InferRequestType<typeof client.drillers.names.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>
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
        ? getGetDrillersNamesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.drillers.names.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDrillersPersonGuidFilesIndexKey(
  args: InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>,
) {
  return ['drillers', '/drillers/:person_guid/files/', args] as const
}

export function useGetDrillersPersonGuidFilesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>>
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
        ? getGetDrillersPersonGuidFilesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.drillers[':person_guid'].files.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDrillersPersonGuidFilesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>>
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
        ? getGetDrillersPersonGuidFilesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.drillers[':person_guid'].files.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKeycloakKey() {
  return ['keycloak', '/keycloak'] as const
}

export function useGetKeycloak<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeycloakKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keycloak.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeycloak<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeycloakKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keycloak.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubmissionsOptionsIndexKey() {
  return ['submissions', '/submissions/options/'] as const
}

export function useGetSubmissionsOptionsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
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
        ? getGetSubmissionsOptionsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.submissions.options.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubmissionsOptionsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
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
        ? getGetSubmissionsOptionsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.submissions.options.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSurveysIndexKey() {
  return ['surveys', '/surveys/'] as const
}

export function useGetSurveysIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSurveysIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.surveys.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSurveysIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSurveysIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.surveys.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWellsIndexKey(args: InferRequestType<typeof client.wells.index.$get>) {
  return ['wells', '/wells/', args] as const
}

export function useGetWellsIndex<TError = unknown>(
  args: InferRequestType<typeof client.wells.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWellsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wells.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellsIndex<TError = unknown>(
  args: InferRequestType<typeof client.wells.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWellsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wells.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWellsTagsIndexKey(
  args: InferRequestType<typeof client.wells.tags.index.$get>,
) {
  return ['wells', '/wells/tags/', args] as const
}

export function useGetWellsTagsIndex<TError = unknown>(
  args: InferRequestType<typeof client.wells.tags.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWellsTagsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wells.tags.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellsTagsIndex<TError = unknown>(
  args: InferRequestType<typeof client.wells.tags.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWellsTagsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wells.tags.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWellsTagFilesKey(
  args: InferRequestType<(typeof client.wells)[':tag']['files']['$get']>,
) {
  return ['wells', '/wells/:tag/files', args] as const
}

export function useGetWellsTagFiles<TError = unknown>(
  args: InferRequestType<(typeof client.wells)[':tag']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWellsTagFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wells[':tag'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellsTagFiles<TError = unknown>(
  args: InferRequestType<(typeof client.wells)[':tag']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWellsTagFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wells[':tag'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWellsWellTagNumberKey(
  args: InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>,
) {
  return ['wells', '/wells/:well_tag_number', args] as const
}

export function useGetWellsWellTagNumber<TError = unknown>(
  args: InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>
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
        ? getGetWellsWellTagNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wells[':well_tag_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellsWellTagNumber<TError = unknown>(
  args: InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>
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
        ? getGetWellsWellTagNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wells[':well_tag_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
