import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getForecastSubmissionsKey() {
  return ['forecast-submissions'] as const
}

export function getForecastSubmissions202609EventsQueryKey(
  args: InferRequestType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>,
) {
  return ['forecast-submissions', '/forecast-submissions/2026-09/events', args] as const
}

export function getForecastSubmissions202609EventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getForecastSubmissions202609EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['forecast-submissions']['2026-09'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getForecastSubmissions202609EventsQueryKey>
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
      ...getForecastSubmissions202609EventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseForecastSubmissions202609Events<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getForecastSubmissions202609EventsQueryKey>
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
      ...getForecastSubmissions202609EventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
