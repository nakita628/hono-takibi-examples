import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUtilityKey() {
  return ['utility'] as const
}

export function getGetUtilityV1HealthHeartbeatKey() {
  return ['utility', '/utility/v1/health/heartbeat'] as const
}

export function useGetUtilityV1HealthHeartbeat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>>
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
        ? getGetUtilityV1HealthHeartbeatKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utility.v1.health.heartbeat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUtilityV1HealthHeartbeat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>>
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
        ? getGetUtilityV1HealthHeartbeatKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.heartbeat.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utility.v1.health.heartbeat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUtilityV1HealthThreadinfoKey() {
  return ['utility', '/utility/v1/health/threadinfo'] as const
}

export function useGetUtilityV1HealthThreadinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>>
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
        ? getGetUtilityV1HealthThreadinfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utility.v1.health.threadinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUtilityV1HealthThreadinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>>
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
        ? getGetUtilityV1HealthThreadinfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.utility.v1.health.threadinfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utility.v1.health.threadinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
