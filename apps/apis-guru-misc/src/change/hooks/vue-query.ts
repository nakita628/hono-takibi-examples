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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1DonationsCarbonCalculateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.carbon_calculate.$get>>,
) {
  return ['api', '/api/v1/donations/carbon_calculate', toValue(args)] as const
}

export function getApiV1DonationsCarbonCalculateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.carbon_calculate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DonationsCarbonCalculateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.donations.carbon_calculate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.carbon_calculate.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.donations.carbon_calculate.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DonationsCarbonCalculateQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.donations.carbon_calculate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsCarbonCalculateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DonationsCarbonCalculateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.donations.carbon_calculate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DonationsCarbonStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.carbon_stats.$get>>,
) {
  return ['api', '/api/v1/donations/carbon_stats', toValue(args)] as const
}

export function getApiV1DonationsCarbonStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.carbon_stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DonationsCarbonStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.donations.carbon_stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DonationsCarbonStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.carbon_stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.carbon_stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.donations.carbon_stats.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DonationsCarbonStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.carbon_stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsCarbonStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DonationsCarbonStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.donations.carbon_stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.crypto_calculate.$get>>,
) {
  return ['api', '/api/v1/donations/crypto_calculate', toValue(args)] as const
}

export function getApiV1DonationsCryptoCalculateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.crypto_calculate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DonationsCryptoCalculateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.donations.crypto_calculate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.crypto_calculate.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.donations.crypto_calculate.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DonationsCryptoCalculateQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.donations.crypto_calculate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsCryptoCalculateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DonationsCryptoCalculateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.donations.crypto_calculate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DonationsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.index.$get>>,
) {
  return ['api', '/api/v1/donations/index', toValue(args)] as const
}

export function getApiV1DonationsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DonationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.donations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DonationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DonationsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DonationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.donations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DonationsShowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.show.$get>>,
) {
  return ['api', '/api/v1/donations/show', toValue(args)] as const
}

export function getApiV1DonationsShowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.show.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DonationsShowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.donations.show.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DonationsShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.donations.show.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DonationsShowQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.donations.show.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DonationsShowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DonationsShowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.donations.show.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NonprofitsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.nonprofits.list.$get>>,
) {
  return ['api', '/api/v1/nonprofits/list', toValue(args)] as const
}

export function getApiV1NonprofitsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.nonprofits.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NonprofitsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.nonprofits.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NonprofitsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.nonprofits.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>
            >
          >,
          ReturnType<typeof getApiV1NonprofitsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NonprofitsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NonprofitsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.nonprofits.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NonprofitsShowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.nonprofits.show.$get>>,
) {
  return ['api', '/api/v1/nonprofits/show', toValue(args)] as const
}

export function getApiV1NonprofitsShowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.nonprofits.show.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NonprofitsShowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.nonprofits.show.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NonprofitsShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.nonprofits.show.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>
            >
          >,
          ReturnType<typeof getApiV1NonprofitsShowQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nonprofits.show.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NonprofitsShowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NonprofitsShowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.nonprofits.show.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
