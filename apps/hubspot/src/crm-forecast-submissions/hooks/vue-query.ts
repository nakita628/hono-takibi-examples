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

export function getForecastSubmissionsKey() {
  return ['forecast-submissions'] as const
}

export function getForecastSubmissions202609EventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>
  >,
) {
  return ['forecast-submissions', '/forecast-submissions/2026-09/events', toValue(args)] as const
}

export function getForecastSubmissions202609EventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForecastSubmissions202609EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['forecast-submissions']['2026-09'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForecastSubmissions202609Events<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>
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
                  ReturnType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getForecastSubmissions202609EventsQueryKey>
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
          Awaited<ReturnType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForecastSubmissions202609EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForecastSubmissions202609EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['forecast-submissions']['2026-09'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
