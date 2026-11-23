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

export function getApiCardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Card.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Card', keyArgs] as const
}

export function getApiCardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Card.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Card.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Card.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>
          >,
          ReturnType<typeof getApiCardQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Card.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCardTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Card.Types.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Card/Types', keyArgs] as const
}

export function getApiCardTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Card.Types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCardTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Card.Types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCardTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Card.Types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
          >,
          ReturnType<typeof getApiCardTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCardTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCardTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Card.Types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFinanceCountriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Finance.Countries.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Finance/Countries', keyArgs] as const
}

export function getApiFinanceCountriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Finance.Countries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFinanceCountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Finance.Countries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFinanceCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Finance.Countries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
            >
          >,
          ReturnType<typeof getApiFinanceCountriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFinanceCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFinanceCountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Finance.Countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFinanceCryptoAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Finance.CryptoAddress.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Finance/CryptoAddress', keyArgs] as const
}

export function getApiFinanceCryptoAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Finance.CryptoAddress.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFinanceCryptoAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Finance.CryptoAddress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFinanceCryptoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Finance.CryptoAddress.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>
              >
            >
          >,
          ReturnType<typeof getApiFinanceCryptoAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFinanceCryptoAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFinanceCryptoAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Finance.CryptoAddress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFinanceCryptoAddressTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Finance/CryptoAddress/Types', keyArgs] as const
}

export function getApiFinanceCryptoAddressTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFinanceCryptoAddressTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Finance.CryptoAddress.Types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFinanceCryptoAddressTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>
              >
            >
          >,
          ReturnType<typeof getApiFinanceCryptoAddressTypesQueryKey>
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
          Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFinanceCryptoAddressTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFinanceCryptoAddressTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Finance.CryptoAddress.Types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFinanceIbanCountryCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Finance/Iban/:countryCode', keyArgs] as const
}

export function getApiFinanceIbanCountryCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFinanceIbanCountryCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Finance.Iban[':countryCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFinanceIbanCountryCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFinanceIbanCountryCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFinanceIbanCountryCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Finance.Iban[':countryCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.Finance.Vat.Validator.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.Finance.Vat.Validator.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Misc.Cultures.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Misc/Cultures', keyArgs] as const
}

export function getApiMiscCulturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Misc.Cultures.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMiscCulturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Misc.Cultures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMiscCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Misc.Cultures.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>
            >
          >,
          ReturnType<typeof getApiMiscCulturesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMiscCulturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMiscCulturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Misc.Cultures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMiscRandomAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Misc/Random-Address', keyArgs] as const
}

export function getApiMiscRandomAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMiscRandomAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Misc['Random-Address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMiscRandomAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMiscRandomAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMiscRandomAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMiscRandomAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Misc['Random-Address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Name.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Name', keyArgs] as const
}

export function getApiNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Name.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Name.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Name.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>
          >,
          ReturnType<typeof getApiNameQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Name.Cultures.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Name/Cultures', keyArgs] as const
}

export function getApiNameCulturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Name.Cultures.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNameCulturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Name.Cultures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNameCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Name.Cultures.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>
            >
          >,
          ReturnType<typeof getApiNameCulturesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNameCulturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNameCulturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Name.Cultures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNameSuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Name.Suggestions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Name/Suggestions', keyArgs] as const
}

export function getApiNameSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Name.Suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNameSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Name.Suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNameSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Name.Suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>
            >
          >,
          ReturnType<typeof getApiNameSuggestionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNameSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNameSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Name.Suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPhoneCountriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.Countries.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Phone/Countries', keyArgs] as const
}

export function getApiPhoneCountriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.Countries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPhoneCountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Phone.Countries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPhoneCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.Countries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>
            >
          >,
          ReturnType<typeof getApiPhoneCountriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPhoneCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPhoneCountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Phone.Countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPhoneGenerateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.Generate.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Phone/Generate', keyArgs] as const
}

export function getApiPhoneGenerateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.Generate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPhoneGenerateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Phone.Generate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPhoneGenerate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.Generate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>
            >
          >,
          ReturnType<typeof getApiPhoneGenerateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPhoneGenerateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPhoneGenerateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Phone.Generate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPhoneIMEIQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.IMEI.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Phone/IMEI', keyArgs] as const
}

export function getApiPhoneIMEIQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.IMEI.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPhoneIMEIQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Phone.IMEI.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPhoneIMEI<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.IMEI.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
          >,
          ReturnType<typeof getApiPhoneIMEIQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPhoneIMEIQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPhoneIMEIQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Phone.IMEI.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPhoneValidateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.Validate.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Phone/Validate', keyArgs] as const
}

export function getApiPhoneValidateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.Validate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPhoneValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Phone.Validate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPhoneValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Phone.Validate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>
            >
          >,
          ReturnType<typeof getApiPhoneValidateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPhoneValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPhoneValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Phone.Validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSocialNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.SocialNumber.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/SocialNumber', keyArgs] as const
}

export function getApiSocialNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.SocialNumber.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSocialNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.SocialNumber.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSocialNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.SocialNumber.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>
            >
          >,
          ReturnType<typeof getApiSocialNumberQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSocialNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSocialNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.SocialNumber.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Text.LoremIpsum.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Text/LoremIpsum', keyArgs] as const
}

export function getApiTextLoremIpsumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Text.LoremIpsum.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTextLoremIpsumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Text.LoremIpsum.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTextLoremIpsum<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Text.LoremIpsum.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>
            >
          >,
          ReturnType<typeof getApiTextLoremIpsumQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTextLoremIpsumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTextLoremIpsumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Text.LoremIpsum.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTextPasswordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Text.Password.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/Text/Password', keyArgs] as const
}

export function getApiTextPasswordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Text.Password.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTextPasswordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Text.Password.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTextPassword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Text.Password.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>
            >
          >,
          ReturnType<typeof getApiTextPasswordQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTextPasswordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTextPasswordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Text.Password.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Review.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.Text.Review.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
