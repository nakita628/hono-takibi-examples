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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>
  >,
) {
  return ['aquifer-codes', '/aquifer-codes/demand/', toValue(args)] as const
}

export function getAquiferCodesDemandIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquiferCodesDemandIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['aquifer-codes'].demand.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAquiferCodesDemandIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['aquifer-codes']['demand']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesDemandIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquiferCodesDemandIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['aquifer-codes'].demand.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquiferCodesMaterialsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>
  >,
) {
  return ['aquifer-codes', '/aquifer-codes/materials/', toValue(args)] as const
}

export function getAquiferCodesMaterialsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquiferCodesMaterialsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['aquifer-codes'].materials.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAquiferCodesMaterialsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['aquifer-codes']['materials']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesMaterialsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquiferCodesMaterialsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['aquifer-codes'].materials.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquiferCodesProductivityIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>
  >,
) {
  return ['aquifer-codes', '/aquifer-codes/productivity/', toValue(args)] as const
}

export function getAquiferCodesProductivityIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquiferCodesProductivityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['aquifer-codes'].productivity.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>
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
                  ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAquiferCodesProductivityIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesProductivityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquiferCodesProductivityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['aquifer-codes'].productivity.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquiferCodesQualityConcernsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>
  >,
) {
  return ['aquifer-codes', '/aquifer-codes/quality-concerns/', toValue(args)] as const
}

export function getAquiferCodesQualityConcernsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquiferCodesQualityConcernsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['aquifer-codes']['quality-concerns'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAquiferCodesQualityConcernsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesQualityConcernsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquiferCodesQualityConcernsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['aquifer-codes']['quality-concerns'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquiferCodesSubtypesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>
  >,
) {
  return ['aquifer-codes', '/aquifer-codes/subtypes/', toValue(args)] as const
}

export function getAquiferCodesSubtypesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquiferCodesSubtypesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['aquifer-codes'].subtypes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAquiferCodesSubtypesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesSubtypesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquiferCodesSubtypesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['aquifer-codes'].subtypes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquiferCodesVulnerabilityIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>
  >,
) {
  return ['aquifer-codes', '/aquifer-codes/vulnerability/', toValue(args)] as const
}

export function getAquiferCodesVulnerabilityIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquiferCodesVulnerabilityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['aquifer-codes'].vulnerability.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAquiferCodesVulnerabilityIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesVulnerabilityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquiferCodesVulnerabilityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['aquifer-codes'].vulnerability.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquiferCodesWaterUseIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>
  >,
) {
  return ['aquifer-codes', '/aquifer-codes/water-use/', toValue(args)] as const
}

export function getAquiferCodesWaterUseIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquiferCodesWaterUseIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['aquifer-codes']['water-use'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAquiferCodesWaterUseIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquiferCodesWaterUseIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquiferCodesWaterUseIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['aquifer-codes']['water-use'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquifersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aquifers.index.$get>>,
) {
  return ['aquifers', '/aquifers/', toValue(args)] as const
}

export function getAquifersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aquifers.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquifersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aquifers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAquifersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aquifers.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
          >,
          ReturnType<typeof getAquifersIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAquifersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquifersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aquifers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquifersNamesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aquifers.names.index.$get>>,
) {
  return ['aquifers', '/aquifers/names/', toValue(args)] as const
}

export function getAquifersNamesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aquifers.names.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquifersNamesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aquifers.names.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAquifersNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aquifers.names.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>
            >
          >,
          ReturnType<typeof getAquifersNamesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aquifers.names.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAquifersNamesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquifersNamesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aquifers.names.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquifersAquiferIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>
  >,
) {
  return ['aquifers', '/aquifers/:aquifer_id/', toValue(args)] as const
}

export function getAquifersAquiferIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquifersAquiferIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aquifers[':aquifer_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAquifersAquiferIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquifersAquiferIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquifersAquiferIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aquifers[':aquifer_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAquifersAquiferIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>
  >,
) {
  return ['aquifers', '/aquifers/:aquifer_id/files', toValue(args)] as const
}

export function getAquifersAquiferIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAquifersAquiferIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aquifers[':aquifer_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAquifersAquiferIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAquifersAquiferIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAquifersAquiferIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aquifers[':aquifer_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCitiesDrillersIndexQueryKey() {
  return ['cities', '/cities/drillers/'] as const
}

export function getCitiesDrillersIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCitiesDrillersIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cities.drillers.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCitiesDrillersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>
            >
          >,
          ReturnType<typeof getCitiesDrillersIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.cities.drillers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCitiesDrillersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCitiesDrillersIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cities.drillers.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCitiesInstallersIndexQueryKey() {
  return ['cities', '/cities/installers/'] as const
}

export function getCitiesInstallersIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCitiesInstallersIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cities.installers.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
            >
          >,
          ReturnType<typeof getCitiesInstallersIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.cities.installers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCitiesInstallersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCitiesInstallersIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cities.installers.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDrillersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drillers.index.$get>>,
) {
  return ['drillers', '/drillers/', toValue(args)] as const
}

export function getDrillersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drillers.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDrillersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.drillers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDrillersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drillers.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
          >,
          ReturnType<typeof getDrillersIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDrillersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDrillersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.drillers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDrillersNamesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drillers.names.index.$get>>,
) {
  return ['drillers', '/drillers/names/', toValue(args)] as const
}

export function getDrillersNamesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drillers.names.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDrillersNamesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.drillers.names.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDrillersNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drillers.names.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>
            >
          >,
          ReturnType<typeof getDrillersNamesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drillers.names.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDrillersNamesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDrillersNamesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.drillers.names.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDrillersPersonGuidFilesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>
  >,
) {
  return ['drillers', '/drillers/:person_guid/files/', toValue(args)] as const
}

export function getDrillersPersonGuidFilesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDrillersPersonGuidFilesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.drillers[':person_guid'].files.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDrillersPersonGuidFilesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDrillersPersonGuidFilesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDrillersPersonGuidFilesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.drillers[':person_guid'].files.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeycloakQueryKey() {
  return ['keycloak', '/keycloak'] as const
}

export function getKeycloakQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getKeycloakQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keycloak.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeycloak<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>
          >,
          ReturnType<typeof getKeycloakQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeycloakQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getKeycloakQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.keycloak.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubmissionsOptionsIndexQueryKey() {
  return ['submissions', '/submissions/options/'] as const
}

export function getSubmissionsOptionsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSubmissionsOptionsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.submissions.options.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.submissions.options.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.submissions.options.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSubmissionsOptionsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.submissions.options.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubmissionsOptionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSubmissionsOptionsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.submissions.options.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSurveysIndexQueryKey() {
  return ['surveys', '/surveys/'] as const
}

export function getSurveysIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSurveysIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.surveys.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSurveysIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
          >,
          ReturnType<typeof getSurveysIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.surveys.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSurveysIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSurveysIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.surveys.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWellsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wells.index.$get>>,
) {
  return ['wells', '/wells/', toValue(args)] as const
}

export function getWellsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wells.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWellsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wells.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWellsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wells.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>
          >,
          ReturnType<typeof getWellsIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWellsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWellsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wells.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWellsTagsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wells.tags.index.$get>>,
) {
  return ['wells', '/wells/tags/', toValue(args)] as const
}

export function getWellsTagsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wells.tags.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWellsTagsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wells.tags.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWellsTagsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wells.tags.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>
            >
          >,
          ReturnType<typeof getWellsTagsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wells.tags.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWellsTagsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWellsTagsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wells.tags.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWellsTagFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wells)[':tag']['files']['$get']>>,
) {
  return ['wells', '/wells/:tag/files', toValue(args)] as const
}

export function getWellsTagFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wells)[':tag']['files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWellsTagFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wells[':tag'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWellsTagFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wells)[':tag']['files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWellsTagFilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':tag']['files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellsTagFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWellsTagFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wells[':tag'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWellsWellTagNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>>,
) {
  return ['wells', '/wells/:well_tag_number', toValue(args)] as const
}

export function getWellsWellTagNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWellsWellTagNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wells[':well_tag_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWellsWellTagNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWellsWellTagNumberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.wells)[':well_tag_number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellsWellTagNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWellsWellTagNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wells[':well_tag_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
