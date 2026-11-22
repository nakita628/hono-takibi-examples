import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getForecastSettingsKey() {
  return ['forecast-settings'] as const
}

export function getForecastSettings202609ForecastTypesQueryKey() {
  return ['forecast-settings', '/forecast-settings/2026-09/forecast-types'] as const
}

export function getForecastSettings202609ForecastTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getForecastSettings202609ForecastTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['forecast-settings']['2026-09']['forecast-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForecastSettings202609ForecastTypes<
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
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getForecastSettings202609ForecastTypesQueryKey>
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
          Awaited<
            ReturnType<(typeof client)['forecast-settings']['2026-09']['forecast-types']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForecastSettings202609ForecastTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getForecastSettings202609ForecastTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['forecast-settings']['2026-09']['forecast-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForecastSettings202609ForecastTypesForecastTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
    >
  >,
) {
  return [
    'forecast-settings',
    '/forecast-settings/2026-09/forecast-types/:forecastTypeId',
    toValue(args),
  ] as const
}

export function getForecastSettings202609ForecastTypesForecastTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForecastSettings202609ForecastTypesForecastTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useForecastSettings202609ForecastTypesForecastTypeId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getForecastSettings202609ForecastTypesForecastTypeIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForecastSettings202609ForecastTypesForecastTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
