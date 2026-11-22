import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMostemailedKey() {
  return ['mostemailed'] as const
}

export function getMostsharedKey() {
  return ['mostshared'] as const
}

export function getMostviewedKey() {
  return ['mostviewed'] as const
}

export function getGetMostemailedSectionTimePeriodJsonKey(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
) {
  return ['mostemailed', '/mostemailed/:section/:time-period.json', args] as const
}

export function useGetMostemailedSectionTimePeriodJson<TError = unknown>(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
            >
          >
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
        ? getGetMostemailedSectionTimePeriodJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mostemailed[':section'][':time-period.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMostemailedSectionTimePeriodJson<TError = unknown>(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
            >
          >
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
        ? getGetMostemailedSectionTimePeriodJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mostemailed[':section'][':time-period.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMostsharedSectionTimePeriodJsonKey(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
) {
  return ['mostshared', '/mostshared/:section/:time-period.json', args] as const
}

export function useGetMostsharedSectionTimePeriodJson<TError = unknown>(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
          >
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
        ? getGetMostsharedSectionTimePeriodJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mostshared[':section'][':time-period.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMostsharedSectionTimePeriodJson<TError = unknown>(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
          >
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
        ? getGetMostsharedSectionTimePeriodJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mostshared[':section'][':time-period.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMostviewedSectionTimePeriodJsonKey(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
) {
  return ['mostviewed', '/mostviewed/:section/:time-period.json', args] as const
}

export function useGetMostviewedSectionTimePeriodJson<TError = unknown>(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
          >
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
        ? getGetMostviewedSectionTimePeriodJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mostviewed[':section'][':time-period.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMostviewedSectionTimePeriodJson<TError = unknown>(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
          >
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
        ? getGetMostviewedSectionTimePeriodJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mostviewed[':section'][':time-period.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
