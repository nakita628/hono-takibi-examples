import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAquiferCodesDemandIndexQueryKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/demand/', args] as const
}

export function getAquiferCodesDemandIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesDemandIndexQueryKey>
  >({
    queryKey: getAquiferCodesDemandIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['aquifer-codes'].demand.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAquiferCodesDemandIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquiferCodesDemandIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAquiferCodesDemandIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAquiferCodesMaterialsIndexQueryKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/materials/', args] as const
}

export function getAquiferCodesMaterialsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesMaterialsIndexQueryKey>
  >({
    queryKey: getAquiferCodesMaterialsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['aquifer-codes'].materials.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAquiferCodesMaterialsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquiferCodesMaterialsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAquiferCodesMaterialsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAquiferCodesProductivityIndexQueryKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/productivity/', args] as const
}

export function getAquiferCodesProductivityIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesProductivityIndexQueryKey>
  >({
    queryKey: getAquiferCodesProductivityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['aquifer-codes'].productivity.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAquiferCodesProductivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquiferCodesProductivityIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAquiferCodesProductivityIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAquiferCodesQualityConcernsIndexQueryKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/quality-concerns/', args] as const
}

export function getAquiferCodesQualityConcernsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesQualityConcernsIndexQueryKey>
  >({
    queryKey: getAquiferCodesQualityConcernsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['aquifer-codes']['quality-concerns'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAquiferCodesQualityConcernsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['aquifer-codes']['quality-concerns']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquiferCodesQualityConcernsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAquiferCodesQualityConcernsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAquiferCodesSubtypesIndexQueryKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/subtypes/', args] as const
}

export function getAquiferCodesSubtypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesSubtypesIndexQueryKey>
  >({
    queryKey: getAquiferCodesSubtypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['aquifer-codes'].subtypes.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAquiferCodesSubtypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquiferCodesSubtypesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAquiferCodesSubtypesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAquiferCodesVulnerabilityIndexQueryKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/vulnerability/', args] as const
}

export function getAquiferCodesVulnerabilityIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesVulnerabilityIndexQueryKey>
  >({
    queryKey: getAquiferCodesVulnerabilityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['aquifer-codes'].vulnerability.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAquiferCodesVulnerabilityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquiferCodesVulnerabilityIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAquiferCodesVulnerabilityIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAquiferCodesWaterUseIndexQueryKey(
  args: InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>,
) {
  return ['aquifer-codes', '/aquifer-codes/water-use/', args] as const
}

export function getAquiferCodesWaterUseIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesWaterUseIndexQueryKey>
  >({
    queryKey: getAquiferCodesWaterUseIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['aquifer-codes']['water-use'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAquiferCodesWaterUseIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquiferCodesWaterUseIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAquiferCodesWaterUseIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAquifersIndexQueryKey(
  args: InferRequestType<typeof client.aquifers.index.$get>,
) {
  return ['aquifers', '/aquifers/', args] as const
}

export function getAquifersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aquifers.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAquifersIndexQueryKey>
  >({
    queryKey: getAquifersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aquifers.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAquifersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aquifers.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAquifersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAquifersIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAquifersNamesIndexQueryKey(
  args: InferRequestType<typeof client.aquifers.names.index.$get>,
) {
  return ['aquifers', '/aquifers/names/', args] as const
}

export function getAquifersNamesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aquifers.names.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAquifersNamesIndexQueryKey>
  >({
    queryKey: getAquifersNamesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aquifers.names.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAquifersNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aquifers.names.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquifersNamesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAquifersNamesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAquifersAquiferIdIndexQueryKey(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>,
) {
  return ['aquifers', '/aquifers/:aquifer_id/', args] as const
}

export function getAquifersAquiferIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquifersAquiferIdIndexQueryKey>
  >({
    queryKey: getAquifersAquiferIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aquifers[':aquifer_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAquifersAquiferIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquifersAquiferIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAquifersAquiferIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAquifersAquiferIdFilesQueryKey(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>,
) {
  return ['aquifers', '/aquifers/:aquifer_id/files', args] as const
}

export function getAquifersAquiferIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquifersAquiferIdFilesQueryKey>
  >({
    queryKey: getAquifersAquiferIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aquifers[':aquifer_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAquifersAquiferIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAquifersAquiferIdFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAquifersAquiferIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCitiesDrillersIndexQueryKey() {
  return ['cities', '/cities/drillers/'] as const
}

export function getCitiesDrillersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCitiesDrillersIndexQueryKey>
  >({
    queryKey: getCitiesDrillersIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cities.drillers.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCitiesDrillersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCitiesDrillersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCitiesDrillersIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCitiesInstallersIndexQueryKey() {
  return ['cities', '/cities/installers/'] as const
}

export function getCitiesInstallersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCitiesInstallersIndexQueryKey>
  >({
    queryKey: getCitiesInstallersIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cities.installers.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCitiesInstallersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCitiesInstallersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCitiesInstallersIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDrillersIndexQueryKey(
  args: InferRequestType<typeof client.drillers.index.$get>,
) {
  return ['drillers', '/drillers/', args] as const
}

export function getDrillersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.drillers.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDrillersIndexQueryKey>
  >({
    queryKey: getDrillersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.drillers.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDrillersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.drillers.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDrillersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDrillersIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDrillersNamesIndexQueryKey(
  args: InferRequestType<typeof client.drillers.names.index.$get>,
) {
  return ['drillers', '/drillers/names/', args] as const
}

export function getDrillersNamesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.drillers.names.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDrillersNamesIndexQueryKey>
  >({
    queryKey: getDrillersNamesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.drillers.names.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDrillersNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.drillers.names.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDrillersNamesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDrillersNamesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDrillersPersonGuidFilesIndexQueryKey(
  args: InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>,
) {
  return ['drillers', '/drillers/:person_guid/files/', args] as const
}

export function getDrillersPersonGuidFilesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDrillersPersonGuidFilesIndexQueryKey>
  >({
    queryKey: getDrillersPersonGuidFilesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.drillers[':person_guid'].files.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDrillersPersonGuidFilesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDrillersPersonGuidFilesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDrillersPersonGuidFilesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKeycloakQueryKey() {
  return ['keycloak', '/keycloak'] as const
}

export function getKeycloakQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeycloakQueryKey>
  >({
    queryKey: getKeycloakQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.keycloak.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeycloak<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeycloakQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeycloakQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSubmissionsOptionsIndexQueryKey() {
  return ['submissions', '/submissions/options/'] as const
}

export function getSubmissionsOptionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubmissionsOptionsIndexQueryKey>
  >({
    queryKey: getSubmissionsOptionsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.submissions.options.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSubmissionsOptionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubmissionsOptionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubmissionsOptionsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSurveysIndexQueryKey() {
  return ['surveys', '/surveys/'] as const
}

export function getSurveysIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSurveysIndexQueryKey>
  >({
    queryKey: getSurveysIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.surveys.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSurveysIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSurveysIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSurveysIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getWellsIndexQueryKey(args: InferRequestType<typeof client.wells.index.$get>) {
  return ['wells', '/wells/', args] as const
}

export function getWellsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wells.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWellsIndexQueryKey>
  >({
    queryKey: getWellsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wells.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWellsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wells.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWellsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWellsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWellsTagsIndexQueryKey(
  args: InferRequestType<typeof client.wells.tags.index.$get>,
) {
  return ['wells', '/wells/tags/', args] as const
}

export function getWellsTagsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wells.tags.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWellsTagsIndexQueryKey>
  >({
    queryKey: getWellsTagsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wells.tags.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWellsTagsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wells.tags.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWellsTagsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWellsTagsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWellsTagFilesQueryKey(
  args: InferRequestType<(typeof client.wells)[':tag']['files']['$get']>,
) {
  return ['wells', '/wells/:tag/files', args] as const
}

export function getWellsTagFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wells)[':tag']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellsTagFilesQueryKey>
  >({
    queryKey: getWellsTagFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wells[':tag'].files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWellsTagFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wells)[':tag']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellsTagFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWellsTagFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWellsWellTagNumberQueryKey(
  args: InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>,
) {
  return ['wells', '/wells/:well_tag_number', args] as const
}

export function getWellsWellTagNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellsWellTagNumberQueryKey>
  >({
    queryKey: getWellsWellTagNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wells[':well_tag_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWellsWellTagNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellsWellTagNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWellsWellTagNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
