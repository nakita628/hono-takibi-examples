import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiCardKey(args: InferRequestType<typeof client.api.Card.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Card', keyArgs] as const
}

export function useGetApiCard<TError = unknown>(
  args: InferRequestType<typeof client.api.Card.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.Card.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiCard<TError = unknown>(
  args: InferRequestType<typeof client.api.Card.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.Card.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetApiCardTypesKey(args: InferRequestType<typeof client.api.Card.Types.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Card/Types', keyArgs] as const
}

export function useGetApiCardTypes<TError = unknown>(
  args: InferRequestType<typeof client.api.Card.Types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCardTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Card.Types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCardTypes<TError = unknown>(
  args: InferRequestType<typeof client.api.Card.Types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCardTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Card.Types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Card.Types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFinanceCountriesKey(
  args: InferRequestType<typeof client.api.Finance.Countries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Finance/Countries', keyArgs] as const
}

export function useGetApiFinanceCountries<TError = unknown>(
  args: InferRequestType<typeof client.api.Finance.Countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
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
        ? getGetApiFinanceCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Finance.Countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFinanceCountries<TError = unknown>(
  args: InferRequestType<typeof client.api.Finance.Countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
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
        ? getGetApiFinanceCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Finance.Countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFinanceCryptoAddressKey(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Finance/CryptoAddress', keyArgs] as const
}

export function useGetApiFinanceCryptoAddress<TError = unknown>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
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
        ? getGetApiFinanceCryptoAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Finance.CryptoAddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFinanceCryptoAddress<TError = unknown>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
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
        ? getGetApiFinanceCryptoAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Finance.CryptoAddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFinanceCryptoAddressTypesKey(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Finance/CryptoAddress/Types', keyArgs] as const
}

export function useGetApiFinanceCryptoAddressTypes<TError = unknown>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>
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
        ? getGetApiFinanceCryptoAddressTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Finance.CryptoAddress.Types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFinanceCryptoAddressTypes<TError = unknown>(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>
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
        ? getGetApiFinanceCryptoAddressTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Finance.CryptoAddress.Types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Finance.CryptoAddress.Types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFinanceIbanCountryCodeKey(
  args: InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Finance/Iban/:countryCode', keyArgs] as const
}

export function useGetApiFinanceIbanCountryCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
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
        ? getGetApiFinanceIbanCountryCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Finance.Iban[':countryCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFinanceIbanCountryCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
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
        ? getGetApiFinanceIbanCountryCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Finance.Iban[':countryCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFinanceVatValidatorKey() {
  return ['api', '/api/Finance/Vat/Validator', 'POST'] as const
}

export function usePostApiFinanceVatValidator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Finance.Vat.Validator.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Finance.Vat.Validator.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFinanceVatValidatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.Finance.Vat.Validator.$post> },
      ) => parseResponse(client.api.Finance.Vat.Validator.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiMiscCulturesKey(
  args: InferRequestType<typeof client.api.Misc.Cultures.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Misc/Cultures', keyArgs] as const
}

export function useGetApiMiscCultures<TError = unknown>(
  args: InferRequestType<typeof client.api.Misc.Cultures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
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
        ? getGetApiMiscCulturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Misc.Cultures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMiscCultures<TError = unknown>(
  args: InferRequestType<typeof client.api.Misc.Cultures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
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
        ? getGetApiMiscCulturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Misc.Cultures.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Misc.Cultures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMiscRandomAddressKey(
  args: InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Misc/Random-Address', keyArgs] as const
}

export function useGetApiMiscRandomAddress<TError = unknown>(
  args: InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>
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
        ? getGetApiMiscRandomAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Misc['Random-Address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMiscRandomAddress<TError = unknown>(
  args: InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>
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
        ? getGetApiMiscRandomAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Misc)['Random-Address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Misc['Random-Address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiNameKey(args: InferRequestType<typeof client.api.Name.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Name', keyArgs] as const
}

export function useGetApiName<TError = unknown>(
  args: InferRequestType<typeof client.api.Name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.Name.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiName<TError = unknown>(
  args: InferRequestType<typeof client.api.Name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.Name.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostApiNameBrandNameKey() {
  return ['api', '/api/Name/BrandName', 'POST'] as const
}

export function usePostApiNameBrandName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.BrandName.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Name.BrandName.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiNameBrandNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Name.BrandName.$post> }) =>
        parseResponse(client.api.Name.BrandName.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiNameBusinessNameKey() {
  return ['api', '/api/Name/BusinessName', 'POST'] as const
}

export function usePostApiNameBusinessName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.BusinessName.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Name.BusinessName.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiNameBusinessNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.Name.BusinessName.$post> },
      ) => parseResponse(client.api.Name.BusinessName.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiNameCulturesKey(
  args: InferRequestType<typeof client.api.Name.Cultures.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Name/Cultures', keyArgs] as const
}

export function useGetApiNameCultures<TError = unknown>(
  args: InferRequestType<typeof client.api.Name.Cultures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
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
        ? getGetApiNameCulturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Name.Cultures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiNameCultures<TError = unknown>(
  args: InferRequestType<typeof client.api.Name.Cultures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
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
        ? getGetApiNameCulturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Cultures.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Name.Cultures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiNameSuggestionsKey(
  args: InferRequestType<typeof client.api.Name.Suggestions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Name/Suggestions', keyArgs] as const
}

export function useGetApiNameSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.api.Name.Suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>
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
        ? getGetApiNameSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Name.Suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiNameSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.api.Name.Suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>
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
        ? getGetApiNameSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Name.Suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Name.Suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPhoneCountriesKey(
  args: InferRequestType<typeof client.api.Phone.Countries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Phone/Countries', keyArgs] as const
}

export function useGetApiPhoneCountries<TError = unknown>(
  args: InferRequestType<typeof client.api.Phone.Countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>
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
        ? getGetApiPhoneCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Phone.Countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPhoneCountries<TError = unknown>(
  args: InferRequestType<typeof client.api.Phone.Countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>
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
        ? getGetApiPhoneCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Phone.Countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPhoneGenerateKey(
  args: InferRequestType<typeof client.api.Phone.Generate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Phone/Generate', keyArgs] as const
}

export function useGetApiPhoneGenerate<TError = unknown>(
  args: InferRequestType<typeof client.api.Phone.Generate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
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
        ? getGetApiPhoneGenerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Phone.Generate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPhoneGenerate<TError = unknown>(
  args: InferRequestType<typeof client.api.Phone.Generate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
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
        ? getGetApiPhoneGenerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Generate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Phone.Generate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPhoneIMEIKey(args: InferRequestType<typeof client.api.Phone.IMEI.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Phone/IMEI', keyArgs] as const
}

export function useGetApiPhoneIMEI<TError = unknown>(
  args: InferRequestType<typeof client.api.Phone.IMEI.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPhoneIMEIKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Phone.IMEI.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPhoneIMEI<TError = unknown>(
  args: InferRequestType<typeof client.api.Phone.IMEI.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPhoneIMEIKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.IMEI.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Phone.IMEI.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPhoneValidateKey(
  args: InferRequestType<typeof client.api.Phone.Validate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Phone/Validate', keyArgs] as const
}

export function useGetApiPhoneValidate<TError = unknown>(
  args: InferRequestType<typeof client.api.Phone.Validate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
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
        ? getGetApiPhoneValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Phone.Validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPhoneValidate<TError = unknown>(
  args: InferRequestType<typeof client.api.Phone.Validate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
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
        ? getGetApiPhoneValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Phone.Validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Phone.Validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSocialNumberKey(
  args: InferRequestType<typeof client.api.SocialNumber.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/SocialNumber', keyArgs] as const
}

export function useGetApiSocialNumber<TError = unknown>(
  args: InferRequestType<typeof client.api.SocialNumber.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
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
        ? getGetApiSocialNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.SocialNumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSocialNumber<TError = unknown>(
  args: InferRequestType<typeof client.api.SocialNumber.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
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
        ? getGetApiSocialNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.SocialNumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSocialNumberKey() {
  return ['api', '/api/SocialNumber', 'POST'] as const
}

export function usePostApiSocialNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SocialNumber.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.SocialNumber.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSocialNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.SocialNumber.$post> }) =>
        parseResponse(client.api.SocialNumber.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTextHumanizeKey() {
  return ['api', '/api/Text/Humanize', 'POST'] as const
}

export function usePostApiTextHumanize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Humanize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Text.Humanize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTextHumanizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Text.Humanize.$post> }) =>
        parseResponse(client.api.Text.Humanize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTextLoremIpsumKey(
  args: InferRequestType<typeof client.api.Text.LoremIpsum.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Text/LoremIpsum', keyArgs] as const
}

export function useGetApiTextLoremIpsum<TError = unknown>(
  args: InferRequestType<typeof client.api.Text.LoremIpsum.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>
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
        ? getGetApiTextLoremIpsumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Text.LoremIpsum.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTextLoremIpsum<TError = unknown>(
  args: InferRequestType<typeof client.api.Text.LoremIpsum.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>
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
        ? getGetApiTextLoremIpsumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.LoremIpsum.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Text.LoremIpsum.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTextPasswordKey(
  args: InferRequestType<typeof client.api.Text.Password.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/Text/Password', keyArgs] as const
}

export function useGetApiTextPassword<TError = unknown>(
  args: InferRequestType<typeof client.api.Text.Password.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
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
        ? getGetApiTextPasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Text.Password.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTextPassword<TError = unknown>(
  args: InferRequestType<typeof client.api.Text.Password.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
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
        ? getGetApiTextPasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Password.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Text.Password.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiTextReviewKey() {
  return ['api', '/api/Text/Review', 'POST'] as const
}

export function usePostApiTextReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Review.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Text.Review.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTextReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Text.Review.$post> }) =>
        parseResponse(client.api.Text.Review.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTextTransformKey() {
  return ['api', '/api/Text/Transform', 'POST'] as const
}

export function usePostApiTextTransform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Text.Transform.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Text.Transform.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTextTransformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Text.Transform.$post> }) =>
        parseResponse(client.api.Text.Transform.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
