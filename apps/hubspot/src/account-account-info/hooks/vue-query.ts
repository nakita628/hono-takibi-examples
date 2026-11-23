import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountInfoKey() {
  return ['account-info'] as const
}

export function getAccountInfo202609ApiUsageDailyPrivateAppsQueryKey() {
  return ['account-info', '/account-info/2026-09/api-usage/daily/private-apps'] as const
}

export function getAccountInfo202609ApiUsageDailyPrivateAppsQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getAccountInfo202609ApiUsageDailyPrivateAppsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account-info']['2026-09']['api-usage'].daily['private-apps'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInfo202609ApiUsageDailyPrivateApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['account-info']['2026-09']['api-usage']['daily']['private-apps']['$get']
          >
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
                    (typeof client)['account-info']['2026-09']['api-usage']['daily']['private-apps']['$get']
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
                    (typeof client)['account-info']['2026-09']['api-usage']['daily']['private-apps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountInfo202609ApiUsageDailyPrivateAppsQueryKey>
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
              (typeof client)['account-info']['2026-09']['api-usage']['daily']['private-apps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInfo202609ApiUsageDailyPrivateAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountInfo202609ApiUsageDailyPrivateAppsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['account-info']['2026-09']['api-usage'].daily['private-apps'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInfo202609DetailsQueryKey() {
  return ['account-info', '/account-info/2026-09/details'] as const
}

export function getAccountInfo202609DetailsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountInfo202609DetailsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account-info']['2026-09'].details.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInfo202609Details<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account-info']['2026-09']['details']['$get']>>
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
                Awaited<ReturnType<(typeof client)['account-info']['2026-09']['details']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account-info']['2026-09']['details']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountInfo202609DetailsQueryKey>
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
          Awaited<ReturnType<(typeof client)['account-info']['2026-09']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInfo202609DetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountInfo202609DetailsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['account-info']['2026-09'].details.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
