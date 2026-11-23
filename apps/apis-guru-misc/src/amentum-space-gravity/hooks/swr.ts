import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEgm2008Key() {
  return ['egm2008'] as const
}

export function getGetEgm2008GeoidHeightKey(
  args: InferRequestType<typeof client.egm2008.geoid_height.$get>,
) {
  return ['egm2008', '/egm2008/geoid_height', args] as const
}

export function useGetEgm2008GeoidHeight<TError = unknown>(
  args: InferRequestType<typeof client.egm2008.geoid_height.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>
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
        ? getGetEgm2008GeoidHeightKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.egm2008.geoid_height.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEgm2008GeoidHeight<TError = unknown>(
  args: InferRequestType<typeof client.egm2008.geoid_height.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>
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
        ? getGetEgm2008GeoidHeightKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.egm2008.geoid_height.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEgm2008GravityAnomalyKey(
  args: InferRequestType<typeof client.egm2008.gravity_anomaly.$get>,
) {
  return ['egm2008', '/egm2008/gravity_anomaly', args] as const
}

export function useGetEgm2008GravityAnomaly<TError = unknown>(
  args: InferRequestType<typeof client.egm2008.gravity_anomaly.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
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
        ? getGetEgm2008GravityAnomalyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.egm2008.gravity_anomaly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEgm2008GravityAnomaly<TError = unknown>(
  args: InferRequestType<typeof client.egm2008.gravity_anomaly.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
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
        ? getGetEgm2008GravityAnomalyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.egm2008.gravity_anomaly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
