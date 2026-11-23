import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getForecastSettingsKey() {
  return ['forecast-settings'] as const
}

export function getForecastSettings202609ForecastTypesQueryKey() {
  return ['forecast-settings', '/forecast-settings/2026-09/forecast-types'] as const
}

export function getForecastSettings202609ForecastTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['forecast-settings']['2026-09']['forecast-types']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['forecast-settings']['2026-09']['forecast-types']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForecastSettings202609ForecastTypesQueryKey>
  >({
    queryKey: getForecastSettings202609ForecastTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['forecast-settings']['2026-09']['forecast-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createForecastSettings202609ForecastTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['forecast-settings']['2026-09']['forecast-types']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['forecast-settings']['2026-09']['forecast-types']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getForecastSettings202609ForecastTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getForecastSettings202609ForecastTypesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getForecastSettings202609ForecastTypesForecastTypeIdQueryKey(
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

export function getForecastSettings202609ForecastTypesForecastTypeIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getForecastSettings202609ForecastTypesForecastTypeIdQueryKey>
  >({
    queryKey: getForecastSettings202609ForecastTypesForecastTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createForecastSettings202609ForecastTypesForecastTypeId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getForecastSettings202609ForecastTypesForecastTypeIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getForecastSettings202609ForecastTypesForecastTypeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
