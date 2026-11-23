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

export function getUtilityKey() {
  return ['utility'] as const
}

export function getUtilityV1HealthHeartbeatQueryKey() {
  return ['utility', '/utility/v1/health/heartbeat'] as const
}

export function getUtilityV1HealthHeartbeatQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUtilityV1HealthHeartbeatQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.utility.v1.health.heartbeat.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUtilityV1HealthHeartbeat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>>
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
                Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>
              >
            >
          >,
          ReturnType<typeof getUtilityV1HealthHeartbeatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUtilityV1HealthHeartbeatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUtilityV1HealthHeartbeatQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.utility.v1.health.heartbeat.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUtilityV1HealthThreadinfoQueryKey() {
  return ['utility', '/utility/v1/health/threadinfo'] as const
}

export function getUtilityV1HealthThreadinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUtilityV1HealthThreadinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.utility.v1.health.threadinfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUtilityV1HealthThreadinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>>
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
                Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>
              >
            >
          >,
          ReturnType<typeof getUtilityV1HealthThreadinfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUtilityV1HealthThreadinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUtilityV1HealthThreadinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.utility.v1.health.threadinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
