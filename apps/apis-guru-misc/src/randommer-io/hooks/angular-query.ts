import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectApiCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Card.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiCardTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Card.Types.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCardTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiFinanceCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Finance.Countries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFinanceCountriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiFinanceCryptoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Finance.CryptoAddress.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFinanceCryptoAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectApiFinanceCryptoAddressTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFinanceCryptoAddressTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectApiFinanceIbanCountryCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFinanceIbanCountryCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiFinanceVatValidator<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFinanceVatValidatorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectApiMiscCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Misc.Cultures.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMiscCulturesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiMiscRandomAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiMiscRandomAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectApiName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Name.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiNameBrandName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiNameBrandNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostApiNameBusinessName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiNameBusinessNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectApiNameCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Name.Cultures.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNameCulturesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiNameSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Name.Suggestions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNameSuggestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPhoneCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Phone.Countries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPhoneCountriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPhoneGenerate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Phone.Generate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPhoneGenerateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPhoneIMEI<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Phone.IMEI.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPhoneIMEIQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPhoneValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Phone.Validate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPhoneValidateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiSocialNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.SocialNumber.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSocialNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiSocialNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSocialNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostApiTextHumanize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiTextHumanizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectApiTextLoremIpsum<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Text.LoremIpsum.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTextLoremIpsumQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiTextPassword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Text.Password.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTextPasswordQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiTextReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiTextReviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostApiTextTransform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiTextTransformMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
