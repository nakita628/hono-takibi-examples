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

export function getApiCardQueryKey(args: InferRequestType<typeof client.api.Card.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Card', keyArgs] as const
}

export function getApiCardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Card.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCardQueryKey>
  >({
    queryKey: getApiCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Card.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Card.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Card.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiCardTypesQueryKey(args: InferRequestType<typeof client.api.Card.Types.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Card/Types', keyArgs] as const
}

export function getApiCardTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Card.Types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCardTypesQueryKey>
  >({
    queryKey: getApiCardTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Card.Types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiCardTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Card.Types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCardTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCardTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiCardTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Card.Types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCardTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCardTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFinanceCountriesQueryKey(
  args: InferRequestType<typeof client.api.Finance.Countries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Finance/Countries', keyArgs] as const
}

export function getApiFinanceCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Finance.Countries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFinanceCountriesQueryKey>
  >({
    queryKey: getApiFinanceCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Finance.Countries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiFinanceCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Finance.Countries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFinanceCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFinanceCountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFinanceCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Finance.Countries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFinanceCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFinanceCountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFinanceCryptoAddressQueryKey(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Finance/CryptoAddress', keyArgs] as const
}

export function getApiFinanceCryptoAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFinanceCryptoAddressQueryKey>
  >({
    queryKey: getApiFinanceCryptoAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Finance.CryptoAddress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFinanceCryptoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFinanceCryptoAddressQueryKey>
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
      ...getApiFinanceCryptoAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFinanceCryptoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFinanceCryptoAddressQueryKey>
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
      ...getApiFinanceCryptoAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFinanceCryptoAddressTypesQueryKey(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Finance/CryptoAddress/Types', keyArgs] as const
}

export function getApiFinanceCryptoAddressTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFinanceCryptoAddressTypesQueryKey>
  >({
    queryKey: getApiFinanceCryptoAddressTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Finance.CryptoAddress.Types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFinanceCryptoAddressTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFinanceCryptoAddressTypesQueryKey>
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
      ...getApiFinanceCryptoAddressTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFinanceCryptoAddressTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFinanceCryptoAddressTypesQueryKey>
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
      ...getApiFinanceCryptoAddressTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFinanceIbanCountryCodeQueryKey(
  args: InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Finance/Iban/:countryCode', keyArgs] as const
}

export function getApiFinanceIbanCountryCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFinanceIbanCountryCodeQueryKey>
  >({
    queryKey: getApiFinanceIbanCountryCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Finance.Iban[':countryCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFinanceIbanCountryCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFinanceIbanCountryCodeQueryKey>
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
      ...getApiFinanceIbanCountryCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFinanceIbanCountryCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFinanceIbanCountryCodeQueryKey>
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
      ...getApiFinanceIbanCountryCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiFinanceVatValidatorMutationKey() {
  return ['api', '/api/Finance/Vat/Validator', 'POST'] as const
}

export function getPostApiFinanceVatValidatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Vat.Validator.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.Finance.Vat.Validator.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFinanceVatValidatorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Finance.Vat.Validator.$post>) {
      return parseResponse(client.api.Finance.Vat.Validator.$post(args, options))
    },
  })
}

export function usePostApiFinanceVatValidator<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Vat.Validator.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.Finance.Vat.Validator.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFinanceVatValidatorMutationOptions<TError, TOnMutateResult>(
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

export function getApiMiscCulturesQueryKey(
  args: InferRequestType<typeof client.api.Misc.Cultures.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Misc/Cultures', keyArgs] as const
}

export function getApiMiscCulturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Misc.Cultures.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMiscCulturesQueryKey>
  >({
    queryKey: getApiMiscCulturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Misc.Cultures.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiMiscCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Misc.Cultures.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMiscCulturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMiscCulturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMiscCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Misc.Cultures.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMiscCulturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMiscCulturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMiscRandomAddressQueryKey(
  args: InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Misc/Random-Address', keyArgs] as const
}

export function getApiMiscRandomAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMiscRandomAddressQueryKey>
  >({
    queryKey: getApiMiscRandomAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Misc['Random-Address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMiscRandomAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMiscRandomAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMiscRandomAddressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMiscRandomAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMiscRandomAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMiscRandomAddressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiNameQueryKey(args: InferRequestType<typeof client.api.Name.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Name', keyArgs] as const
}

export function getApiNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Name.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiNameQueryKey>
  >({
    queryKey: getApiNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Name.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Name.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Name.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiNameBrandNameMutationKey() {
  return ['api', '/api/Name/BrandName', 'POST'] as const
}

export function getPostApiNameBrandNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.BrandName.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.Name.BrandName.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiNameBrandNameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Name.BrandName.$post>) {
      return parseResponse(client.api.Name.BrandName.$post(args, options))
    },
  })
}

export function usePostApiNameBrandName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.BrandName.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.Name.BrandName.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiNameBrandNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiNameBusinessNameMutationKey() {
  return ['api', '/api/Name/BusinessName', 'POST'] as const
}

export function getPostApiNameBusinessNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.BusinessName.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.Name.BusinessName.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiNameBusinessNameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Name.BusinessName.$post>) {
      return parseResponse(client.api.Name.BusinessName.$post(args, options))
    },
  })
}

export function usePostApiNameBusinessName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.BusinessName.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.Name.BusinessName.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiNameBusinessNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiNameCulturesQueryKey(
  args: InferRequestType<typeof client.api.Name.Cultures.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Name/Cultures', keyArgs] as const
}

export function getApiNameCulturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Name.Cultures.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNameCulturesQueryKey>
  >({
    queryKey: getApiNameCulturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Name.Cultures.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiNameCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Name.Cultures.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNameCulturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiNameCulturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiNameCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Name.Cultures.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNameCulturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiNameCulturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiNameSuggestionsQueryKey(
  args: InferRequestType<typeof client.api.Name.Suggestions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Name/Suggestions', keyArgs] as const
}

export function getApiNameSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Name.Suggestions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNameSuggestionsQueryKey>
  >({
    queryKey: getApiNameSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Name.Suggestions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiNameSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Name.Suggestions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNameSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiNameSuggestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiNameSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Name.Suggestions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNameSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiNameSuggestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPhoneCountriesQueryKey(
  args: InferRequestType<typeof client.api.Phone.Countries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Phone/Countries', keyArgs] as const
}

export function getApiPhoneCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Phone.Countries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPhoneCountriesQueryKey>
  >({
    queryKey: getApiPhoneCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Phone.Countries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPhoneCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Phone.Countries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPhoneCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPhoneCountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPhoneCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Phone.Countries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPhoneCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPhoneCountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPhoneGenerateQueryKey(
  args: InferRequestType<typeof client.api.Phone.Generate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Phone/Generate', keyArgs] as const
}

export function getApiPhoneGenerateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Phone.Generate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPhoneGenerateQueryKey>
  >({
    queryKey: getApiPhoneGenerateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Phone.Generate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPhoneGenerate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Phone.Generate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPhoneGenerateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPhoneGenerateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPhoneGenerate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Phone.Generate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPhoneGenerateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPhoneGenerateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPhoneIMEIQueryKey(args: InferRequestType<typeof client.api.Phone.IMEI.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Phone/IMEI', keyArgs] as const
}

export function getApiPhoneIMEIQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Phone.IMEI.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPhoneIMEIQueryKey>
  >({
    queryKey: getApiPhoneIMEIQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Phone.IMEI.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPhoneIMEI<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Phone.IMEI.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPhoneIMEIQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPhoneIMEIQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPhoneIMEI<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Phone.IMEI.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPhoneIMEIQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPhoneIMEIQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPhoneValidateQueryKey(
  args: InferRequestType<typeof client.api.Phone.Validate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Phone/Validate', keyArgs] as const
}

export function getApiPhoneValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Phone.Validate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPhoneValidateQueryKey>
  >({
    queryKey: getApiPhoneValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Phone.Validate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPhoneValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Phone.Validate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPhoneValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPhoneValidateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPhoneValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Phone.Validate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPhoneValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPhoneValidateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSocialNumberQueryKey(
  args: InferRequestType<typeof client.api.SocialNumber.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/SocialNumber', keyArgs] as const
}

export function getApiSocialNumberQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.SocialNumber.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSocialNumberQueryKey>
  >({
    queryKey: getApiSocialNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.SocialNumber.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSocialNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.SocialNumber.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSocialNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSocialNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSocialNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.SocialNumber.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSocialNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSocialNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiSocialNumberMutationKey() {
  return ['api', '/api/SocialNumber', 'POST'] as const
}

export function getPostApiSocialNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.SocialNumber.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSocialNumberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.SocialNumber.$post>) {
      return parseResponse(client.api.SocialNumber.$post(args, options))
    },
  })
}

export function usePostApiSocialNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.SocialNumber.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSocialNumberMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiTextHumanizeMutationKey() {
  return ['api', '/api/Text/Humanize', 'POST'] as const
}

export function getPostApiTextHumanizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Humanize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.Text.Humanize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTextHumanizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Text.Humanize.$post>) {
      return parseResponse(client.api.Text.Humanize.$post(args, options))
    },
  })
}

export function usePostApiTextHumanize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Humanize.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.Text.Humanize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTextHumanizeMutationOptions<TError, TOnMutateResult>(
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

export function getApiTextLoremIpsumQueryKey(
  args: InferRequestType<typeof client.api.Text.LoremIpsum.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Text/LoremIpsum', keyArgs] as const
}

export function getApiTextLoremIpsumQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Text.LoremIpsum.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTextLoremIpsumQueryKey>
  >({
    queryKey: getApiTextLoremIpsumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Text.LoremIpsum.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTextLoremIpsum<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Text.LoremIpsum.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTextLoremIpsumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTextLoremIpsumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTextLoremIpsum<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Text.LoremIpsum.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTextLoremIpsumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTextLoremIpsumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTextPasswordQueryKey(
  args: InferRequestType<typeof client.api.Text.Password.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Text/Password', keyArgs] as const
}

export function getApiTextPasswordQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Text.Password.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTextPasswordQueryKey>
  >({
    queryKey: getApiTextPasswordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Text.Password.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTextPassword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Text.Password.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTextPasswordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTextPasswordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTextPassword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Text.Password.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTextPasswordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTextPasswordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiTextReviewMutationKey() {
  return ['api', '/api/Text/Review', 'POST'] as const
}

export function getPostApiTextReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Review.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.Text.Review.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTextReviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Text.Review.$post>) {
      return parseResponse(client.api.Text.Review.$post(args, options))
    },
  })
}

export function usePostApiTextReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Review.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.Text.Review.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTextReviewMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiTextTransformMutationKey() {
  return ['api', '/api/Text/Transform', 'POST'] as const
}

export function getPostApiTextTransformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Transform.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.Text.Transform.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTextTransformMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Text.Transform.$post>) {
      return parseResponse(client.api.Text.Transform.$post(args, options))
    },
  })
}

export function usePostApiTextTransform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Transform.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.Text.Transform.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTextTransformMutationOptions<TError, TOnMutateResult>(
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
