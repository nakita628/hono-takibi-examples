import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSettingsKey() {
  return ['settings'] as const
}

export function getPostSettingsCurrencies202609CentralFxRatesAddCurrencyKey() {
  return ['settings', '/settings/currencies/2026-09/central-fx-rates/add-currency', 'POST'] as const
}

export function usePostSettingsCurrencies202609CentralFxRatesAddCurrency<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['central-fx-rates']['add-currency']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['central-fx-rates']['add-currency']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsCurrencies202609CentralFxRatesAddCurrencyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.currencies)['2026-09']['central-fx-rates']['add-currency']['$post']
          >
        },
      ) =>
        parseResponse(
          client.settings.currencies['2026-09']['central-fx-rates']['add-currency'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsCurrencies202609CentralFxRatesInformationKey() {
  return ['settings', '/settings/currencies/2026-09/central-fx-rates/information'] as const
}

export function useGetSettingsCurrencies202609CentralFxRatesInformation<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609CentralFxRatesInformationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['central-fx-rates'].information.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsCurrencies202609CentralFxRatesInformation<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609CentralFxRatesInformationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['central-fx-rates'].information.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesKey() {
  return [
    'settings',
    '/settings/currencies/2026-09/central-fx-rates/unsupported-currencies',
  ] as const
}

export function useGetSettingsCurrencies202609CentralFxRatesUnsupportedCurrencies<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['central-fx-rates']['unsupported-currencies'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsCurrencies202609CentralFxRatesUnsupportedCurrencies<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['central-fx-rates']['unsupported-currencies'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsCurrencies202609CodesKey() {
  return ['settings', '/settings/currencies/2026-09/codes'] as const
}

export function useGetSettingsCurrencies202609Codes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609CodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.currencies['2026-09'].codes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsCurrencies202609Codes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609CodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.currencies['2026-09'].codes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsCurrencies202609CompanyCurrencyKey() {
  return ['settings', '/settings/currencies/2026-09/company-currency'] as const
}

export function useGetSettingsCurrencies202609CompanyCurrency<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609CompanyCurrencyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['company-currency'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsCurrencies202609CompanyCurrency<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609CompanyCurrencyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['company-currency'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSettingsCurrencies202609CompanyCurrencyKey() {
  return ['settings', '/settings/currencies/2026-09/company-currency', 'PUT'] as const
}

export function usePutSettingsCurrencies202609CompanyCurrency<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.currencies)['2026-09']['company-currency']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsCurrencies202609CompanyCurrencyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.currencies)['2026-09']['company-currency']['$put']
          >
        },
      ) =>
        parseResponse(
          client.settings.currencies['2026-09']['company-currency'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsCurrencies202609ExchangeRatesKey(
  args: InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>,
) {
  return ['settings', '/settings/currencies/2026-09/exchange-rates', args] as const
}

export function useGetSettingsCurrencies202609ExchangeRates<TError = unknown>(
  args: InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
            >
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
        ? getGetSettingsCurrencies202609ExchangeRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsCurrencies202609ExchangeRates<TError = unknown>(
  args: InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
            >
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
        ? getGetSettingsCurrencies202609ExchangeRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsCurrencies202609ExchangeRatesKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates', 'POST'] as const
}

export function usePostSettingsCurrencies202609ExchangeRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsCurrencies202609ExchangeRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsCurrencies202609ExchangeRatesBatchCreateKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/batch/create', 'POST'] as const
}

export function usePostSettingsCurrencies202609ExchangeRatesBatchCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsCurrencies202609ExchangeRatesBatchCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'].batch.create.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsCurrencies202609ExchangeRatesBatchReadKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/batch/read', 'POST'] as const
}

export function usePostSettingsCurrencies202609ExchangeRatesBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsCurrencies202609ExchangeRatesBatchReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'].batch.read.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsCurrencies202609ExchangeRatesBatchUpdateKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/batch/update', 'POST'] as const
}

export function usePostSettingsCurrencies202609ExchangeRatesBatchUpdate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsCurrencies202609ExchangeRatesBatchUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'].batch.update.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsCurrencies202609ExchangeRatesCurrentKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/current'] as const
}

export function useGetSettingsCurrencies202609ExchangeRatesCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609ExchangeRatesCurrentKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'].current.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsCurrencies202609ExchangeRatesCurrent<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsCurrencies202609ExchangeRatesCurrentKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'].current.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsCurrencies202609ExchangeRatesUpdateVisibilityKey() {
  return [
    'settings',
    '/settings/currencies/2026-09/exchange-rates/update-visibility',
    'POST',
  ] as const
}

export function usePostSettingsCurrencies202609ExchangeRatesUpdateVisibility<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['exchange-rates']['update-visibility']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates']['update-visibility']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsCurrencies202609ExchangeRatesUpdateVisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates']['update-visibility']['$post']
          >
        },
      ) =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates']['update-visibility'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsCurrencies202609ExchangeRatesExchangeRateIdKey(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
  >,
) {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/:exchangeRateId', args] as const
}

export function useGetSettingsCurrencies202609ExchangeRatesExchangeRateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
              >
            >
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
        ? getGetSettingsCurrencies202609ExchangeRatesExchangeRateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'][':exchangeRateId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsCurrencies202609ExchangeRatesExchangeRateId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
              >
            >
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
        ? getGetSettingsCurrencies202609ExchangeRatesExchangeRateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'][':exchangeRateId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchSettingsCurrencies202609ExchangeRatesExchangeRateIdKey() {
  return [
    'settings',
    '/settings/currencies/2026-09/exchange-rates/:exchangeRateId',
    'PATCH',
  ] as const
}

export function usePatchSettingsCurrencies202609ExchangeRatesExchangeRateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSettingsCurrencies202609ExchangeRatesExchangeRateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.settings.currencies['2026-09']['exchange-rates'][':exchangeRateId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
