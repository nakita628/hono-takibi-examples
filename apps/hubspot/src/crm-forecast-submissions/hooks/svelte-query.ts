import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createForecastSubmissions202609Events<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['forecast-submissions']['2026-09']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getForecastSubmissions202609EventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
