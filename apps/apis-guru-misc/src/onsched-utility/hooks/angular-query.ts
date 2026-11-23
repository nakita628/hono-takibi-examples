import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUtilityKey() {
  return ['utility'] as const
}

export function getUtilityV1HealthHeartbeatQueryKey() {
  return ['utility', '/utility/v1/health/heartbeat'] as const
}

export function getUtilityV1HealthHeartbeatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUtilityV1HealthHeartbeatQueryKey>
  >({
    queryKey: getUtilityV1HealthHeartbeatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.utility.v1.health.heartbeat.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUtilityV1HealthHeartbeat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUtilityV1HealthHeartbeatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUtilityV1HealthHeartbeatQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getUtilityV1HealthThreadinfoQueryKey() {
  return ['utility', '/utility/v1/health/threadinfo'] as const
}

export function getUtilityV1HealthThreadinfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUtilityV1HealthThreadinfoQueryKey>
  >({
    queryKey: getUtilityV1HealthThreadinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.utility.v1.health.threadinfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUtilityV1HealthThreadinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUtilityV1HealthThreadinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUtilityV1HealthThreadinfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
