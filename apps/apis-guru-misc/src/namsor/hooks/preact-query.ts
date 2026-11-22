import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApi2Key() {
  return ['api2'] as const
}

export function getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
  >,
) {
  return ['api2', '/api2/json/anonymize/:source/:anonymized/:token', args] as const
}

export function getApi2JsonAnonymizeSourceAnonymizedTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey>
  >({
    queryKey: getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.anonymize[':source'][':anonymized'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonAnonymizeSourceAnonymizedToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey>
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
      ...getApi2JsonAnonymizeSourceAnonymizedTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonAnonymizeSourceAnonymizedToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey>
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
      ...getApi2JsonAnonymizeSourceAnonymizedTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonApiKeyInfoQueryKey() {
  return ['api2', '/api2/json/apiKeyInfo'] as const
}

export function getApi2JsonApiKeyInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiKeyInfoQueryKey>
  >({
    queryKey: getApi2JsonApiKeyInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.apiKeyInfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonApiKeyInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiKeyInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApi2JsonApiKeyInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi2JsonApiKeyInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiKeyInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApi2JsonApiKeyInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApi2JsonApiServicesQueryKey() {
  return ['api2', '/api2/json/apiServices'] as const
}

export function getApi2JsonApiServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiServicesQueryKey>
  >({
    queryKey: getApi2JsonApiServicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.apiServices.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonApiServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApi2JsonApiServicesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi2JsonApiServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApi2JsonApiServicesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApi2JsonApiStatusQueryKey() {
  return ['api2', '/api2/json/apiStatus'] as const
}

export function getApi2JsonApiStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiStatusQueryKey>
  >({
    queryKey: getApi2JsonApiStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.apiStatus.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApi2JsonApiStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi2JsonApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApi2JsonApiStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApi2JsonApiUsageQueryKey() {
  return ['api2', '/api2/json/apiUsage'] as const
}

export function getApi2JsonApiUsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiUsageQueryKey>
  >({
    queryKey: getApi2JsonApiUsageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.apiUsage.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonApiUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApi2JsonApiUsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi2JsonApiUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApi2JsonApiUsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApi2JsonApiUsageHistoryQueryKey() {
  return ['api2', '/api2/json/apiUsageHistory'] as const
}

export function getApi2JsonApiUsageHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiUsageHistoryQueryKey>
  >({
    queryKey: getApi2JsonApiUsageHistoryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.apiUsageHistory.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonApiUsageHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiUsageHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApi2JsonApiUsageHistoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi2JsonApiUsageHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiUsageHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApi2JsonApiUsageHistoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApi2JsonApiUsageHistoryAggregateQueryKey() {
  return ['api2', '/api2/json/apiUsageHistoryAggregate'] as const
}

export function getApi2JsonApiUsageHistoryAggregateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiUsageHistoryAggregateQueryKey>
  >({
    queryKey: getApi2JsonApiUsageHistoryAggregateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.apiUsageHistoryAggregate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonApiUsageHistoryAggregate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiUsageHistoryAggregateQueryKey>
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
      ...getApi2JsonApiUsageHistoryAggregateQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonApiUsageHistoryAggregate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonApiUsageHistoryAggregateQueryKey>
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
      ...getApi2JsonApiUsageHistoryAggregateQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/castegroupIndianFull/:subDivisionIso31662/:personalNameFull',
    args,
  ] as const
}

export function getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey>
  >({
    queryKey: getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.castegroupIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey
        >
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
      ...getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey
        >
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
      ...getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonCastegroupIndianFullBatchMutationKey() {
  return ['api2', '/api2/json/castegroupIndianFullBatch', 'POST'] as const
}

export function getPostApi2JsonCastegroupIndianFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.castegroupIndianFullBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.castegroupIndianFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonCastegroupIndianFullBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.castegroupIndianFullBatch.$post>,
    ) {
      return parseResponse(client.api2.json.castegroupIndianFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonCastegroupIndianFullBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.castegroupIndianFullBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.castegroupIndianFullBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonCastegroupIndianFullBatchMutationOptions<
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

export function getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/chineseNameCandidates/:chineseSurnameLatin/:chineseGivenNameLatin',
    args,
  ] as const
}

export function getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey
    >
  >({
    queryKey:
      getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.chineseNameCandidates[':chineseSurnameLatin'][
          ':chineseGivenNameLatin'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey
        >
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
      ...getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey
        >
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
      ...getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonChineseNameCandidatesBatchMutationKey() {
  return ['api2', '/api2/json/chineseNameCandidatesBatch', 'POST'] as const
}

export function getPostApi2JsonChineseNameCandidatesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.chineseNameCandidatesBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonChineseNameCandidatesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.chineseNameCandidatesBatch.$post>,
    ) {
      return parseResponse(client.api2.json.chineseNameCandidatesBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonChineseNameCandidatesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.chineseNameCandidatesBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonChineseNameCandidatesBatchMutationOptions<
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

export function getPostApi2JsonChineseNameCandidatesGenderBatchMutationKey() {
  return ['api2', '/api2/json/chineseNameCandidatesGenderBatch', 'POST'] as const
}

export function getPostApi2JsonChineseNameCandidatesGenderBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonChineseNameCandidatesGenderBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>,
    ) {
      return parseResponse(client.api2.json.chineseNameCandidatesGenderBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonChineseNameCandidatesGenderBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonChineseNameCandidatesGenderBatchMutationOptions<
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

export function getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/chineseNameGenderCandidates/:chineseSurnameLatin/:chineseGivenNameLatin/:knownGender',
    args,
  ] as const
}

export function getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey
    >
  >({
    queryKey:
      getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.chineseNameGenderCandidates[':chineseSurnameLatin'][
          ':chineseGivenNameLatin'
        ][':knownGender'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGender<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey
        >
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
      ...getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGender<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey
        >
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
      ...getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/chineseNameMatch/:chineseSurnameLatin/:chineseGivenNameLatin/:chineseName',
    args,
  ] as const
}

export function getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey
    >
  >({
    queryKey:
      getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.chineseNameMatch[':chineseSurnameLatin'][':chineseGivenNameLatin'][
          ':chineseName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey
        >
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
      ...getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey
        >
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
      ...getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonChineseNameMatchBatchMutationKey() {
  return ['api2', '/api2/json/chineseNameMatchBatch', 'POST'] as const
}

export function getPostApi2JsonChineseNameMatchBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.chineseNameMatchBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.chineseNameMatchBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonChineseNameMatchBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.chineseNameMatchBatch.$post>) {
      return parseResponse(client.api2.json.chineseNameMatchBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonChineseNameMatchBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.chineseNameMatchBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.chineseNameMatchBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonChineseNameMatchBatchMutationOptions<
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

export function getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/corridor/:countryIso2From/:firstNameFrom/:lastNameFrom/:countryIso2To/:firstNameTo/:lastNameTo',
    args,
  ] as const
}

export function getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey
    >
  >({
    queryKey:
      getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.corridor[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][
          ':countryIso2To'
        ][':firstNameTo'][':lastNameTo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey
        >
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
      ...getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey
        >
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
      ...getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonCorridorBatchMutationKey() {
  return ['api2', '/api2/json/corridorBatch', 'POST'] as const
}

export function getPostApi2JsonCorridorBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.corridorBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.corridorBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonCorridorBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.corridorBatch.$post>) {
      return parseResponse(client.api2.json.corridorBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonCorridorBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.corridorBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.corridorBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonCorridorBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonCountryPersonalNameFullQueryKey(
  args: InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>,
) {
  return ['api2', '/api2/json/country/:personalNameFull', args] as const
}

export function getApi2JsonCountryPersonalNameFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonCountryPersonalNameFullQueryKey>
  >({
    queryKey: getApi2JsonCountryPersonalNameFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.country[':personalNameFull'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonCountryPersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonCountryPersonalNameFullQueryKey>
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
      ...getApi2JsonCountryPersonalNameFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonCountryPersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonCountryPersonalNameFullQueryKey>
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
      ...getApi2JsonCountryPersonalNameFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonCountryBatchMutationKey() {
  return ['api2', '/api2/json/countryBatch', 'POST'] as const
}

export function getPostApi2JsonCountryBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.countryBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.countryBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonCountryBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.countryBatch.$post>) {
      return parseResponse(client.api2.json.countryBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonCountryBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.countryBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.countryBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonCountryBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
) {
  return ['api2', '/api2/json/diaspora/:countryIso2/:firstName/:lastName', args] as const
}

export function getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey>
  >({
    queryKey: getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.diaspora[':countryIso2'][':firstName'][':lastName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonDiasporaCountryIso2FirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey>
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
      ...getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonDiasporaCountryIso2FirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey>
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
      ...getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonDiasporaBatchMutationKey() {
  return ['api2', '/api2/json/diasporaBatch', 'POST'] as const
}

export function getPostApi2JsonDiasporaBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.diasporaBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.diasporaBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonDiasporaBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.diasporaBatch.$post>) {
      return parseResponse(client.api2.json.diasporaBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonDiasporaBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.diasporaBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.diasporaBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonDiasporaBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonGenderFirstNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>,
) {
  return ['api2', '/api2/json/gender/:firstName', args] as const
}

export function getApi2JsonGenderFirstNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderFirstNameQueryKey>
  >({
    queryKey: getApi2JsonGenderFirstNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.gender[':firstName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonGenderFirstName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderFirstNameQueryKey>
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
      ...getApi2JsonGenderFirstNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonGenderFirstName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderFirstNameQueryKey>
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
      ...getApi2JsonGenderFirstNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonGenderFirstNameLastNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>,
) {
  return ['api2', '/api2/json/gender/:firstName/:lastName', args] as const
}

export function getApi2JsonGenderFirstNameLastNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderFirstNameLastNameQueryKey>
  >({
    queryKey: getApi2JsonGenderFirstNameLastNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.gender[':firstName'][':lastName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonGenderFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderFirstNameLastNameQueryKey>
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
      ...getApi2JsonGenderFirstNameLastNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonGenderFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderFirstNameLastNameQueryKey>
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
      ...getApi2JsonGenderFirstNameLastNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderBatchMutationKey() {
  return ['api2', '/api2/json/genderBatch', 'POST'] as const
}

export function getPostApi2JsonGenderBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderBatch.$post>) {
      return parseResponse(client.api2.json.genderBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.genderBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonGenderBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonGenderChineseNameChineseNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>,
) {
  return ['api2', '/api2/json/genderChineseName/:chineseName', args] as const
}

export function getApi2JsonGenderChineseNameChineseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderChineseNameChineseNameQueryKey>
  >({
    queryKey: getApi2JsonGenderChineseNameChineseNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.genderChineseName[':chineseName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonGenderChineseNameChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderChineseNameChineseNameQueryKey>
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
      ...getApi2JsonGenderChineseNameChineseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonGenderChineseNameChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderChineseNameChineseNameQueryKey>
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
      ...getApi2JsonGenderChineseNameChineseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderChineseNameBatchMutationKey() {
  return ['api2', '/api2/json/genderChineseNameBatch', 'POST'] as const
}

export function getPostApi2JsonGenderChineseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderChineseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderChineseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderChineseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderChineseNameBatch.$post>) {
      return parseResponse(client.api2.json.genderChineseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderChineseNameBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.genderChineseNameBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.genderChineseNameBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonGenderChineseNameBatchMutationOptions<
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

export function getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/genderChineseNamePinyin/:chineseSurnameLatin/:chineseGivenNameLatin',
    args,
  ] as const
}

export function getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey
    >
  >({
    queryKey:
      getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.genderChineseNamePinyin[':chineseSurnameLatin'][
          ':chineseGivenNameLatin'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey
        >
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
      ...getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey
        >
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
      ...getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderChineseNamePinyinBatchMutationKey() {
  return ['api2', '/api2/json/genderChineseNamePinyinBatch', 'POST'] as const
}

export function getPostApi2JsonGenderChineseNamePinyinBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderChineseNamePinyinBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>,
    ) {
      return parseResponse(client.api2.json.genderChineseNamePinyinBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderChineseNamePinyinBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonGenderChineseNamePinyinBatchMutationOptions<
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

export function getApi2JsonGenderFullFullNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>,
) {
  return ['api2', '/api2/json/genderFull/:fullName', args] as const
}

export function getApi2JsonGenderFullFullNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderFullFullNameQueryKey>
  >({
    queryKey: getApi2JsonGenderFullFullNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.genderFull[':fullName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonGenderFullFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderFullFullNameQueryKey>
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
      ...getApi2JsonGenderFullFullNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonGenderFullFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderFullFullNameQueryKey>
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
      ...getApi2JsonGenderFullFullNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderFullBatchMutationKey() {
  return ['api2', '/api2/json/genderFullBatch', 'POST'] as const
}

export function getPostApi2JsonGenderFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderFullBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderFullBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderFullBatch.$post>) {
      return parseResponse(client.api2.json.genderFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderFullBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderFullBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.genderFullBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonGenderFullBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey(
  args: InferRequestType<
    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
  >,
) {
  return ['api2', '/api2/json/genderFullGeo/:fullName/:countryIso2', args] as const
}

export function getApi2JsonGenderFullGeoFullNameCountryIso2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey>
  >({
    queryKey: getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.genderFullGeo[':fullName'][':countryIso2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonGenderFullGeoFullNameCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey>
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
      ...getApi2JsonGenderFullGeoFullNameCountryIso2QueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonGenderFullGeoFullNameCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey>
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
      ...getApi2JsonGenderFullGeoFullNameCountryIso2QueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderFullGeoBatchMutationKey() {
  return ['api2', '/api2/json/genderFullGeoBatch', 'POST'] as const
}

export function getPostApi2JsonGenderFullGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderFullGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderFullGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderFullGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderFullGeoBatch.$post>) {
      return parseResponse(client.api2.json.genderFullGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderFullGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.genderFullGeoBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.genderFullGeoBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonGenderFullGeoBatchMutationOptions<
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

export function getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey(
  args: InferRequestType<
    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
  >,
) {
  return ['api2', '/api2/json/genderGeo/:firstName/:lastName/:countryIso2', args] as const
}

export function getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey>
  >({
    queryKey: getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.genderGeo[':firstName'][':lastName'][':countryIso2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonGenderGeoFirstNameLastNameCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey>
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
      ...getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonGenderGeoFirstNameLastNameCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey>
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
      ...getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderGeoBatchMutationKey() {
  return ['api2', '/api2/json/genderGeoBatch', 'POST'] as const
}

export function getPostApi2JsonGenderGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderGeoBatch.$post>) {
      return parseResponse(client.api2.json.genderGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderGeoBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.genderGeoBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonGenderGeoBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/genderJapaneseName/:japaneseSurname/:japaneseGivenName',
    args,
  ] as const
}

export function getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey>
  >({
    queryKey: getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.genderJapaneseName[':japaneseSurname'][':japaneseGivenName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey>
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
      ...getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey>
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
      ...getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderJapaneseNameBatchMutationKey() {
  return ['api2', '/api2/json/genderJapaneseNameBatch', 'POST'] as const
}

export function getPostApi2JsonGenderJapaneseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderJapaneseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderJapaneseNameBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.genderJapaneseNameBatch.$post>,
    ) {
      return parseResponse(client.api2.json.genderJapaneseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderJapaneseNameBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.genderJapaneseNameBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonGenderJapaneseNameBatchMutationOptions<
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

export function getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>,
) {
  return ['api2', '/api2/json/genderJapaneseNameFull/:japaneseName', args] as const
}

export function getApi2JsonGenderJapaneseNameFullJapaneseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey>
  >({
    queryKey: getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.genderJapaneseNameFull[':japaneseName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonGenderJapaneseNameFullJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey>
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
      ...getApi2JsonGenderJapaneseNameFullJapaneseNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonGenderJapaneseNameFullJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey>
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
      ...getApi2JsonGenderJapaneseNameFullJapaneseNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderJapaneseNameFullBatchMutationKey() {
  return ['api2', '/api2/json/genderJapaneseNameFullBatch', 'POST'] as const
}

export function getPostApi2JsonGenderJapaneseNameFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderJapaneseNameFullBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>,
    ) {
      return parseResponse(client.api2.json.genderJapaneseNameFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderJapaneseNameFullBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonGenderJapaneseNameFullBatchMutationOptions<
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

export function getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchMutationKey() {
  return ['api2', '/api2/json/japaneseNameGenderKanjiCandidatesBatch', 'POST'] as const
}

export function getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>,
    ) {
      return parseResponse(
        client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post(args, options),
      )
    },
  })
}

export function usePostApi2JsonJapaneseNameGenderKanjiCandidatesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchMutationOptions<
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

export function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameKanjiCandidates/:japaneseSurnameLatin/:japaneseGivenNameLatin',
    args,
  ] as const
}

export function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey
    >
  >({
    queryKey:
      getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
          ':japaneseGivenNameLatin'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey
        >
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
      ...getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey
        >
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
      ...getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameKanjiCandidates/:japaneseSurnameLatin/:japaneseGivenNameLatin/:knownGender',
    args,
  ] as const
}

export function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey
    >
  >({
    queryKey:
      getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
          ':japaneseGivenNameLatin'
        ][':knownGender'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGender<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey
        >
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
      ...getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGender<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey
        >
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
      ...getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonJapaneseNameKanjiCandidatesBatchMutationKey() {
  return ['api2', '/api2/json/japaneseNameKanjiCandidatesBatch', 'POST'] as const
}

export function getPostApi2JsonJapaneseNameKanjiCandidatesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonJapaneseNameKanjiCandidatesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>,
    ) {
      return parseResponse(client.api2.json.japaneseNameKanjiCandidatesBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonJapaneseNameKanjiCandidatesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonJapaneseNameKanjiCandidatesBatchMutationOptions<
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

export function getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameLatinCandidates/:japaneseSurnameKanji/:japaneseGivenNameKanji',
    args,
  ] as const
}

export function getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey
    >
  >({
    queryKey:
      getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.japaneseNameLatinCandidates[':japaneseSurnameKanji'][
          ':japaneseGivenNameKanji'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey
        >
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
      ...getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey
        >
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
      ...getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonJapaneseNameLatinCandidatesBatchMutationKey() {
  return ['api2', '/api2/json/japaneseNameLatinCandidatesBatch', 'POST'] as const
}

export function getPostApi2JsonJapaneseNameLatinCandidatesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonJapaneseNameLatinCandidatesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>,
    ) {
      return parseResponse(client.api2.json.japaneseNameLatinCandidatesBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonJapaneseNameLatinCandidatesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonJapaneseNameLatinCandidatesBatchMutationOptions<
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

export function getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameMatch/:japaneseSurnameLatin/:japaneseGivenNameLatin/:japaneseName',
    args,
  ] as const
}

export function getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
    >
  >({
    queryKey:
      getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.japaneseNameMatch[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][
          ':japaneseName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
        >
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
      ...getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
        >
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
      ...getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonJapaneseNameMatchBatchMutationKey() {
  return ['api2', '/api2/json/japaneseNameMatchBatch', 'POST'] as const
}

export function getPostApi2JsonJapaneseNameMatchBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameMatchBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.japaneseNameMatchBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonJapaneseNameMatchBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.japaneseNameMatchBatch.$post>) {
      return parseResponse(client.api2.json.japaneseNameMatchBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonJapaneseNameMatchBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.japaneseNameMatchBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.japaneseNameMatchBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonJapaneseNameMatchBatchMutationOptions<
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

export function getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameMatchFeedbackLoop/:japaneseSurnameLatin/:japaneseGivenNameLatin/:japaneseName',
    args,
  ] as const
}

export function getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
    >
  >({
    queryKey:
      getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.japaneseNameMatchFeedbackLoop[':japaneseSurnameLatin'][
          ':japaneseGivenNameLatin'
        ][':japaneseName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
        >
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
      ...getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
        >
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
      ...getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonLearnableSourceLearnableTokenQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
  >,
) {
  return ['api2', '/api2/json/learnable/:source/:learnable/:token', args] as const
}

export function getApi2JsonLearnableSourceLearnableTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonLearnableSourceLearnableTokenQueryKey>
  >({
    queryKey: getApi2JsonLearnableSourceLearnableTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.learnable[':source'][':learnable'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonLearnableSourceLearnableToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonLearnableSourceLearnableTokenQueryKey>
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
      ...getApi2JsonLearnableSourceLearnableTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonLearnableSourceLearnableToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonLearnableSourceLearnableTokenQueryKey>
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
      ...getApi2JsonLearnableSourceLearnableTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonNameTypeProperNounQueryKey(
  args: InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>,
) {
  return ['api2', '/api2/json/nameType/:properNoun', args] as const
}

export function getApi2JsonNameTypeProperNounQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonNameTypeProperNounQueryKey>
  >({
    queryKey: getApi2JsonNameTypeProperNounQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.nameType[':properNoun'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonNameTypeProperNoun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonNameTypeProperNounQueryKey>
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
      ...getApi2JsonNameTypeProperNounQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonNameTypeProperNoun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonNameTypeProperNounQueryKey>
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
      ...getApi2JsonNameTypeProperNounQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonNameTypeBatchMutationKey() {
  return ['api2', '/api2/json/nameTypeBatch', 'POST'] as const
}

export function getPostApi2JsonNameTypeBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.nameTypeBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.nameTypeBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonNameTypeBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.nameTypeBatch.$post>) {
      return parseResponse(client.api2.json.nameTypeBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonNameTypeBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.nameTypeBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.nameTypeBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonNameTypeBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey(
  args: InferRequestType<
    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
  >,
) {
  return ['api2', '/api2/json/nameTypeGeo/:properNoun/:countryIso2', args] as const
}

export function getApi2JsonNameTypeGeoProperNounCountryIso2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey>
  >({
    queryKey: getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.nameTypeGeo[':properNoun'][':countryIso2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonNameTypeGeoProperNounCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey>
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
      ...getApi2JsonNameTypeGeoProperNounCountryIso2QueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonNameTypeGeoProperNounCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey>
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
      ...getApi2JsonNameTypeGeoProperNounCountryIso2QueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonNameTypeGeoBatchMutationKey() {
  return ['api2', '/api2/json/nameTypeGeoBatch', 'POST'] as const
}

export function getPostApi2JsonNameTypeGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.nameTypeGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.nameTypeGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonNameTypeGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.nameTypeGeoBatch.$post>) {
      return parseResponse(client.api2.json.nameTypeGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonNameTypeGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.nameTypeGeoBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.nameTypeGeoBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonNameTypeGeoBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonOriginFirstNameLastNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>,
) {
  return ['api2', '/api2/json/origin/:firstName/:lastName', args] as const
}

export function getApi2JsonOriginFirstNameLastNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonOriginFirstNameLastNameQueryKey>
  >({
    queryKey: getApi2JsonOriginFirstNameLastNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.origin[':firstName'][':lastName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonOriginFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonOriginFirstNameLastNameQueryKey>
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
      ...getApi2JsonOriginFirstNameLastNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonOriginFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonOriginFirstNameLastNameQueryKey>
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
      ...getApi2JsonOriginFirstNameLastNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonOriginBatchMutationKey() {
  return ['api2', '/api2/json/originBatch', 'POST'] as const
}

export function getPostApi2JsonOriginBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.originBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.originBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonOriginBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.originBatch.$post>) {
      return parseResponse(client.api2.json.originBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonOriginBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.originBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.originBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonOriginBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonParseChineseNameChineseNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>,
) {
  return ['api2', '/api2/json/parseChineseName/:chineseName', args] as const
}

export function getApi2JsonParseChineseNameChineseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonParseChineseNameChineseNameQueryKey>
  >({
    queryKey: getApi2JsonParseChineseNameChineseNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.parseChineseName[':chineseName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonParseChineseNameChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonParseChineseNameChineseNameQueryKey>
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
      ...getApi2JsonParseChineseNameChineseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonParseChineseNameChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonParseChineseNameChineseNameQueryKey>
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
      ...getApi2JsonParseChineseNameChineseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonParseChineseNameBatchMutationKey() {
  return ['api2', '/api2/json/parseChineseNameBatch', 'POST'] as const
}

export function getPostApi2JsonParseChineseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.parseChineseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.parseChineseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonParseChineseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.parseChineseNameBatch.$post>) {
      return parseResponse(client.api2.json.parseChineseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonParseChineseNameBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.parseChineseNameBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.parseChineseNameBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonParseChineseNameBatchMutationOptions<
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

export function getApi2JsonParseJapaneseNameJapaneseNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>,
) {
  return ['api2', '/api2/json/parseJapaneseName/:japaneseName', args] as const
}

export function getApi2JsonParseJapaneseNameJapaneseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonParseJapaneseNameJapaneseNameQueryKey>
  >({
    queryKey: getApi2JsonParseJapaneseNameJapaneseNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.parseJapaneseName[':japaneseName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonParseJapaneseNameJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonParseJapaneseNameJapaneseNameQueryKey>
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
      ...getApi2JsonParseJapaneseNameJapaneseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonParseJapaneseNameJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonParseJapaneseNameJapaneseNameQueryKey>
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
      ...getApi2JsonParseJapaneseNameJapaneseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonParseJapaneseNameBatchMutationKey() {
  return ['api2', '/api2/json/parseJapaneseNameBatch', 'POST'] as const
}

export function getPostApi2JsonParseJapaneseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.parseJapaneseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.parseJapaneseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonParseJapaneseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.parseJapaneseNameBatch.$post>) {
      return parseResponse(client.api2.json.parseJapaneseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonParseJapaneseNameBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.parseJapaneseNameBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.parseJapaneseNameBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonParseJapaneseNameBatchMutationOptions<
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

export function getApi2JsonParseNameNameFullQueryKey(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>,
) {
  return ['api2', '/api2/json/parseName/:nameFull', args] as const
}

export function getApi2JsonParseNameNameFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonParseNameNameFullQueryKey>
  >({
    queryKey: getApi2JsonParseNameNameFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.parseName[':nameFull'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonParseNameNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonParseNameNameFullQueryKey>
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
      ...getApi2JsonParseNameNameFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonParseNameNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonParseNameNameFullQueryKey>
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
      ...getApi2JsonParseNameNameFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonParseNameNameFullCountryIso2QueryKey(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>,
) {
  return ['api2', '/api2/json/parseName/:nameFull/:countryIso2', args] as const
}

export function getApi2JsonParseNameNameFullCountryIso2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonParseNameNameFullCountryIso2QueryKey>
  >({
    queryKey: getApi2JsonParseNameNameFullCountryIso2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.parseName[':nameFull'][':countryIso2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonParseNameNameFullCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonParseNameNameFullCountryIso2QueryKey>
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
      ...getApi2JsonParseNameNameFullCountryIso2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonParseNameNameFullCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonParseNameNameFullCountryIso2QueryKey>
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
      ...getApi2JsonParseNameNameFullCountryIso2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonParseNameBatchMutationKey() {
  return ['api2', '/api2/json/parseNameBatch', 'POST'] as const
}

export function getPostApi2JsonParseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.parseNameBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.parseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonParseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.parseNameBatch.$post>) {
      return parseResponse(client.api2.json.parseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonParseNameBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.parseNameBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.parseNameBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonParseNameBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostApi2JsonParseNameGeoBatchMutationKey() {
  return ['api2', '/api2/json/parseNameGeoBatch', 'POST'] as const
}

export function getPostApi2JsonParseNameGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.parseNameGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.parseNameGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonParseNameGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.parseNameGeoBatch.$post>) {
      return parseResponse(client.api2.json.parseNameGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonParseNameGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.parseNameGeoBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.parseNameGeoBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonParseNameGeoBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
  >,
) {
  return ['api2', '/api2/json/phoneCode/:firstName/:lastName/:phoneNumber', args] as const
}

export function getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey>
  >({
    queryKey: getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.phoneCode[':firstName'][':lastName'][':phoneNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonPhoneCodeFirstNameLastNamePhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey>
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
      ...getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonPhoneCodeFirstNameLastNamePhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey>
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
      ...getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonPhoneCodeBatchMutationKey() {
  return ['api2', '/api2/json/phoneCodeBatch', 'POST'] as const
}

export function getPostApi2JsonPhoneCodeBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.phoneCodeBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.phoneCodeBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonPhoneCodeBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.phoneCodeBatch.$post>) {
      return parseResponse(client.api2.json.phoneCodeBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonPhoneCodeBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.phoneCodeBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.phoneCodeBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonPhoneCodeBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/phoneCodeGeo/:firstName/:lastName/:phoneNumber/:countryIso2',
    args,
  ] as const
}

export function getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey>
  >({
    queryKey: getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.phoneCodeGeo[':firstName'][':lastName'][':phoneNumber'][
          ':countryIso2'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey>
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
      ...getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey>
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
      ...getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonPhoneCodeGeoBatchMutationKey() {
  return ['api2', '/api2/json/phoneCodeGeoBatch', 'POST'] as const
}

export function getPostApi2JsonPhoneCodeGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.phoneCodeGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.phoneCodeGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonPhoneCodeGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.phoneCodeGeoBatch.$post>) {
      return parseResponse(client.api2.json.phoneCodeGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonPhoneCodeGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.phoneCodeGeoBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.phoneCodeGeoBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonPhoneCodeGeoBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/phoneCodeGeoFeedbackLoop/:firstName/:lastName/:phoneNumber/:phoneNumberE164/:countryIso2',
    args,
  ] as const
}

export function getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey
    >
  >({
    queryKey:
      getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.phoneCodeGeoFeedbackLoop[':firstName'][':lastName'][':phoneNumber'][
          ':phoneNumberE164'
        ][':countryIso2'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey
        >
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
      ...getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey
        >
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
      ...getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonPinyinChineseNameChineseNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>,
) {
  return ['api2', '/api2/json/pinyinChineseName/:chineseName', args] as const
}

export function getApi2JsonPinyinChineseNameChineseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonPinyinChineseNameChineseNameQueryKey>
  >({
    queryKey: getApi2JsonPinyinChineseNameChineseNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.pinyinChineseName[':chineseName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonPinyinChineseNameChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonPinyinChineseNameChineseNameQueryKey>
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
      ...getApi2JsonPinyinChineseNameChineseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonPinyinChineseNameChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonPinyinChineseNameChineseNameQueryKey>
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
      ...getApi2JsonPinyinChineseNameChineseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonPinyinChineseNameBatchMutationKey() {
  return ['api2', '/api2/json/pinyinChineseNameBatch', 'POST'] as const
}

export function getPostApi2JsonPinyinChineseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.pinyinChineseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.pinyinChineseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonPinyinChineseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.pinyinChineseNameBatch.$post>) {
      return parseResponse(client.api2.json.pinyinChineseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonPinyinChineseNameBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.pinyinChineseNameBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.pinyinChineseNameBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonPinyinChineseNameBatchMutationOptions<
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

export function getApi2JsonRegionsQueryKey() {
  return ['api2', '/api2/json/regions'] as const
}

export function getApi2JsonRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonRegionsQueryKey>
  >({
    queryKey: getApi2JsonRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.regions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApi2JsonRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi2JsonRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApi2JsonRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/religionFull/:countryIso2/:subDivisionIso31662/:personalNameFull',
    args,
  ] as const
}

export function getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey>
  >({
    queryKey: getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.religionFull[':countryIso2'][':subDivisionIso31662'][
          ':personalNameFull'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey
        >
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
      ...getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey
        >
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
      ...getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonReligionFullBatchMutationKey() {
  return ['api2', '/api2/json/religionFullBatch', 'POST'] as const
}

export function getPostApi2JsonReligionFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.religionFullBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.religionFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonReligionFullBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.religionFullBatch.$post>) {
      return parseResponse(client.api2.json.religionFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonReligionFullBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.religionFullBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.religionFullBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonReligionFullBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/religionIndianFull/:subDivisionIso31662/:personalNameFull',
    args,
  ] as const
}

export function getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey>
  >({
    queryKey: getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.religionIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey>
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
      ...getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey>
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
      ...getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonReligionIndianFullBatchMutationKey() {
  return ['api2', '/api2/json/religionIndianFullBatch', 'POST'] as const
}

export function getPostApi2JsonReligionIndianFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.religionIndianFullBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.religionIndianFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonReligionIndianFullBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.religionIndianFullBatch.$post>,
    ) {
      return parseResponse(client.api2.json.religionIndianFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonReligionIndianFullBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.religionIndianFullBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.religionIndianFullBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonReligionIndianFullBatchMutationOptions<
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

export function getApi2JsonSoftwareVersionQueryKey() {
  return ['api2', '/api2/json/softwareVersion'] as const
}

export function getApi2JsonSoftwareVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonSoftwareVersionQueryKey>
  >({
    queryKey: getApi2JsonSoftwareVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.softwareVersion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonSoftwareVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonSoftwareVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApi2JsonSoftwareVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi2JsonSoftwareVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonSoftwareVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApi2JsonSoftwareVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
) {
  return ['api2', '/api2/json/subclassification/:countryIso2/:firstName/:lastName', args] as const
}

export function getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey>
  >({
    queryKey: getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.subclassification[':countryIso2'][':firstName'][':lastName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonSubclassificationCountryIso2FirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey>
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
      ...getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonSubclassificationCountryIso2FirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey>
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
      ...getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonSubclassificationBatchMutationKey() {
  return ['api2', '/api2/json/subclassificationBatch', 'POST'] as const
}

export function getPostApi2JsonSubclassificationBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.subclassificationBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.subclassificationBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonSubclassificationBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.subclassificationBatch.$post>) {
      return parseResponse(client.api2.json.subclassificationBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonSubclassificationBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.subclassificationBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.subclassificationBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonSubclassificationBatchMutationOptions<
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

export function getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
  >,
) {
  return ['api2', '/api2/json/subclassificationIndian/:firstName/:lastName', args] as const
}

export function getApi2JsonSubclassificationIndianFirstNameLastNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey>
  >({
    queryKey: getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.subclassificationIndian[':firstName'][':lastName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonSubclassificationIndianFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey>
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
      ...getApi2JsonSubclassificationIndianFirstNameLastNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonSubclassificationIndianFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey>
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
      ...getApi2JsonSubclassificationIndianFirstNameLastNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonSubclassificationIndianBatchMutationKey() {
  return ['api2', '/api2/json/subclassificationIndianBatch', 'POST'] as const
}

export function getPostApi2JsonSubclassificationIndianBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.subclassificationIndianBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.subclassificationIndianBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonSubclassificationIndianBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.subclassificationIndianBatch.$post>,
    ) {
      return parseResponse(client.api2.json.subclassificationIndianBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonSubclassificationIndianBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.subclassificationIndianBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.subclassificationIndianBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonSubclassificationIndianBatchMutationOptions<
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

export function getApi2JsonTaxonomyClassesClassifierNameQueryKey(
  args: InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>,
) {
  return ['api2', '/api2/json/taxonomyClasses/:classifierName', args] as const
}

export function getApi2JsonTaxonomyClassesClassifierNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonTaxonomyClassesClassifierNameQueryKey>
  >({
    queryKey: getApi2JsonTaxonomyClassesClassifierNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.taxonomyClasses[':classifierName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonTaxonomyClassesClassifierName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonTaxonomyClassesClassifierNameQueryKey>
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
      ...getApi2JsonTaxonomyClassesClassifierNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonTaxonomyClassesClassifierName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonTaxonomyClassesClassifierNameQueryKey>
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
      ...getApi2JsonTaxonomyClassesClassifierNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
  >,
) {
  return ['api2', '/api2/json/usRaceEthnicity/:firstName/:lastName', args] as const
}

export function getApi2JsonUsRaceEthnicityFirstNameLastNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey>
  >({
    queryKey: getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.usRaceEthnicity[':firstName'][':lastName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonUsRaceEthnicityFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey>
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
      ...getApi2JsonUsRaceEthnicityFirstNameLastNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonUsRaceEthnicityFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey>
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
      ...getApi2JsonUsRaceEthnicityFirstNameLastNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonUsRaceEthnicityBatchMutationKey() {
  return ['api2', '/api2/json/usRaceEthnicityBatch', 'POST'] as const
}

export function getPostApi2JsonUsRaceEthnicityBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.usRaceEthnicityBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.usRaceEthnicityBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonUsRaceEthnicityBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.usRaceEthnicityBatch.$post>) {
      return parseResponse(client.api2.json.usRaceEthnicityBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonUsRaceEthnicityBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.usRaceEthnicityBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.usRaceEthnicityBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonUsRaceEthnicityBatchMutationOptions<
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

export function getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
  >,
) {
  return ['api2', '/api2/json/usRaceEthnicityZIP5/:firstName/:lastName/:zip5Code', args] as const
}

export function getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey>
  >({
    queryKey: getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api2.json.usRaceEthnicityZIP5[':firstName'][':lastName'][':zip5Code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5Code<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey>
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
      ...getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5Code<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey>
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
      ...getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApi2JsonUsZipRaceEthnicityBatchMutationKey() {
  return ['api2', '/api2/json/usZipRaceEthnicityBatch', 'POST'] as const
}

export function getPostApi2JsonUsZipRaceEthnicityBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonUsZipRaceEthnicityBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>,
    ) {
      return parseResponse(client.api2.json.usZipRaceEthnicityBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonUsZipRaceEthnicityBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi2JsonUsZipRaceEthnicityBatchMutationOptions<
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
