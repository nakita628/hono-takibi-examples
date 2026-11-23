import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getForecastSettingsKey() {
  return ['forecast-settings'] as const
}

export function getGetForecastSettings202609ForecastTypesKey() {
  return ['forecast-settings', '/forecast-settings/2026-09/forecast-types'] as const
}

export function useGetForecastSettings202609ForecastTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['forecast-settings']['2026-09']['forecast-types']['$get']>
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
        ? getGetForecastSettings202609ForecastTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['forecast-settings']['2026-09']['forecast-types']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['forecast-settings']['2026-09']['forecast-types'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForecastSettings202609ForecastTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['forecast-settings']['2026-09']['forecast-types']['$get']>
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
        ? getGetForecastSettings202609ForecastTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['forecast-settings']['2026-09']['forecast-types']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['forecast-settings']['2026-09']['forecast-types'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetForecastSettings202609ForecastTypesForecastTypeIdKey(
  args: InferRequestType<
    (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
  >,
) {
  return [
    'forecast-settings',
    '/forecast-settings/2026-09/forecast-types/:forecastTypeId',
    args,
  ] as const
}

export function useGetForecastSettings202609ForecastTypesForecastTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
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
        ? getGetForecastSettings202609ForecastTypesForecastTypeIdKey(args)
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
                (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
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
          client['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForecastSettings202609ForecastTypesForecastTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
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
        ? getGetForecastSettings202609ForecastTypesForecastTypeIdKey(args)
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
                (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
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
          client['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
