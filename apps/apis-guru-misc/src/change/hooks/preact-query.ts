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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1DonationsCarbonCalculateQueryKey(
  args: InferRequestType<typeof client.api.v1.donations.carbon_calculate.$get>,
) {
  return ['api', '/api/v1/donations/carbon_calculate', args] as const
}

export function getApiV1DonationsCarbonCalculateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.donations.carbon_calculate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.carbon_calculate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.donations.carbon_calculate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsCarbonCalculateQueryKey>
  >({
    queryKey: getApiV1DonationsCarbonCalculateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.donations.carbon_calculate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DonationsCarbonCalculate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.donations.carbon_calculate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.carbon_calculate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.donations.carbon_calculate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsCarbonCalculateQueryKey>
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
      ...getApiV1DonationsCarbonCalculateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DonationsCarbonCalculate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.donations.carbon_calculate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.carbon_calculate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.donations.carbon_calculate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsCarbonCalculateQueryKey>
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
      ...getApiV1DonationsCarbonCalculateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DonationsCarbonStatsQueryKey(
  args: InferRequestType<typeof client.api.v1.donations.carbon_stats.$get>,
) {
  return ['api', '/api/v1/donations/carbon_stats', args] as const
}

export function getApiV1DonationsCarbonStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.carbon_stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.carbon_stats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.carbon_stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsCarbonStatsQueryKey>
  >({
    queryKey: getApiV1DonationsCarbonStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.donations.carbon_stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DonationsCarbonStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.carbon_stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.carbon_stats.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.donations.carbon_stats.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsCarbonStatsQueryKey>
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
      ...getApiV1DonationsCarbonStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DonationsCarbonStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.carbon_stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.carbon_stats.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.donations.carbon_stats.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsCarbonStatsQueryKey>
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
      ...getApiV1DonationsCarbonStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DonationsCreateMutationKey() {
  return ['api', '/api/v1/donations/create', 'POST'] as const
}

export function getPostApiV1DonationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.donations.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DonationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.donations.create.$post>) {
      return parseResponse(client.api.v1.donations.create.$post(args, options))
    },
  })
}

export function usePostApiV1DonationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.donations.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DonationsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DonationsCryptoCalculateQueryKey(
  args: InferRequestType<typeof client.api.v1.donations.crypto_calculate.$get>,
) {
  return ['api', '/api/v1/donations/crypto_calculate', args] as const
}

export function getApiV1DonationsCryptoCalculateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.donations.crypto_calculate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.crypto_calculate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.donations.crypto_calculate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsCryptoCalculateQueryKey>
  >({
    queryKey: getApiV1DonationsCryptoCalculateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.donations.crypto_calculate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DonationsCryptoCalculate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.donations.crypto_calculate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.crypto_calculate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.donations.crypto_calculate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsCryptoCalculateQueryKey>
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
      ...getApiV1DonationsCryptoCalculateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DonationsCryptoCalculate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.donations.crypto_calculate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.crypto_calculate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.donations.crypto_calculate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsCryptoCalculateQueryKey>
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
      ...getApiV1DonationsCryptoCalculateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DonationsIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.donations.index.$get>,
) {
  return ['api', '/api/v1/donations/index', args] as const
}

export function getApiV1DonationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsIndexQueryKey>
  >({
    queryKey: getApiV1DonationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.donations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DonationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DonationsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DonationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DonationsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DonationsShowQueryKey(
  args: InferRequestType<typeof client.api.v1.donations.show.$get>,
) {
  return ['api', '/api/v1/donations/show', args] as const
}

export function getApiV1DonationsShowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.show.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsShowQueryKey>
  >({
    queryKey: getApiV1DonationsShowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.donations.show.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1DonationsShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.show.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsShowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DonationsShowQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DonationsShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.donations.show.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DonationsShowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DonationsShowQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1NonprofitsListQueryKey(
  args: InferRequestType<typeof client.api.v1.nonprofits.list.$get>,
) {
  return ['api', '/api/v1/nonprofits/list', args] as const
}

export function getApiV1NonprofitsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.nonprofits.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NonprofitsListQueryKey>
  >({
    queryKey: getApiV1NonprofitsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.nonprofits.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1NonprofitsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.nonprofits.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NonprofitsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NonprofitsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1NonprofitsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.nonprofits.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NonprofitsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NonprofitsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1NonprofitsShowQueryKey(
  args: InferRequestType<typeof client.api.v1.nonprofits.show.$get>,
) {
  return ['api', '/api/v1/nonprofits/show', args] as const
}

export function getApiV1NonprofitsShowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.nonprofits.show.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NonprofitsShowQueryKey>
  >({
    queryKey: getApiV1NonprofitsShowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.nonprofits.show.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1NonprofitsShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.nonprofits.show.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NonprofitsShowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NonprofitsShowQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1NonprofitsShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.nonprofits.show.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NonprofitsShowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NonprofitsShowQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
