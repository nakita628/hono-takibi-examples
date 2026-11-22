import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getGetFormatRotoBallerPremiumNewsKey(
  args: InferRequestType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>,
) {
  return [':format', '/:format/RotoBallerPremiumNews', args] as const
}

export function useGetFormatRotoBallerPremiumNews<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>>
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
        ? getGetFormatRotoBallerPremiumNewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].RotoBallerPremiumNews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatRotoBallerPremiumNews<TError = unknown>(
  args: InferRequestType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>>
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
        ? getGetFormatRotoBallerPremiumNewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':format'].RotoBallerPremiumNews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatRotoBallerPremiumNewsByDateDateKey(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']
  >,
) {
  return [':format', '/:format/RotoBallerPremiumNewsByDate/:date', args] as const
}

export function useGetFormatRotoBallerPremiumNewsByDateDate<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']>
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
        ? getGetFormatRotoBallerPremiumNewsByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].RotoBallerPremiumNewsByDate[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatRotoBallerPremiumNewsByDateDate<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']>
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
        ? getGetFormatRotoBallerPremiumNewsByDateDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].RotoBallerPremiumNewsByDate[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatRotoBallerPremiumNewsByPlayerIDPlayeridKey(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/RotoBallerPremiumNewsByPlayerID/:playerid', args] as const
}

export function useGetFormatRotoBallerPremiumNewsByPlayerIDPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
              >
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
        ? getGetFormatRotoBallerPremiumNewsByPlayerIDPlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].RotoBallerPremiumNewsByPlayerID[':playerid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatRotoBallerPremiumNewsByPlayerIDPlayerid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
              >
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
        ? getGetFormatRotoBallerPremiumNewsByPlayerIDPlayeridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].RotoBallerPremiumNewsByPlayerID[':playerid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
