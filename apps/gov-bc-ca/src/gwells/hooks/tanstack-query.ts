import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useAquiferCodesDemandIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAquiferCodesDemandIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAquiferCodesDemandIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAquiferCodesDemandIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAquiferCodesMaterialsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAquiferCodesMaterialsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAquiferCodesMaterialsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAquiferCodesMaterialsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAquiferCodesProductivityIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAquiferCodesProductivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAquiferCodesProductivityIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAquiferCodesProductivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAquiferCodesQualityConcernsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAquiferCodesQualityConcernsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAquiferCodesQualityConcernsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAquiferCodesQualityConcernsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAquiferCodesSubtypesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAquiferCodesSubtypesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAquiferCodesSubtypesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAquiferCodesSubtypesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAquiferCodesVulnerabilityIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAquiferCodesVulnerabilityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAquiferCodesVulnerabilityIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAquiferCodesVulnerabilityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAquiferCodesWaterUseIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAquiferCodesWaterUseIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAquiferCodesWaterUseIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAquiferCodesWaterUseIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAquifersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aquifers.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAquifersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAquifersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aquifers.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAquifersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAquifersNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aquifers.names.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAquifersNamesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAquifersNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aquifers.names.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAquifersNamesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAquifersAquiferIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAquifersAquiferIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAquifersAquiferIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAquifersAquiferIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAquifersAquiferIdFiles<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAquifersAquiferIdFilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAquifersAquiferIdFiles<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAquifersAquiferIdFilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCitiesDrillersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCitiesDrillersIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCitiesDrillersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCitiesDrillersIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCitiesInstallersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCitiesInstallersIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCitiesInstallersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCitiesInstallersIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDrillersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.drillers.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDrillersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDrillersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.drillers.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDrillersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDrillersNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.drillers.names.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDrillersNamesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDrillersNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.drillers.names.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDrillersNamesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDrillersPersonGuidFilesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDrillersPersonGuidFilesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDrillersPersonGuidFilesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDrillersPersonGuidFilesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useKeycloak<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeycloakQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKeycloakQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKeycloak<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeycloakQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKeycloakQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSubmissionsOptionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubmissionsOptionsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubmissionsOptionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubmissionsOptionsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSurveysIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSurveysIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSurveysIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSurveysIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWellsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wells.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWellsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWellsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wells.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWellsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWellsTagsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wells.tags.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWellsTagsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWellsTagsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wells.tags.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWellsTagsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWellsTagFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wells)[':tag']['files']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWellsTagFilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWellsTagFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wells)[':tag']['files']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWellsTagFilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWellsWellTagNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWellsWellTagNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWellsWellTagNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWellsWellTagNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
