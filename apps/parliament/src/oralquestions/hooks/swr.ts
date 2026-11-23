import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEarlyDayMotionKey() {
  return ['EarlyDayMotion'] as const
}

export function getEarlyDayMotionsKey() {
  return ['EarlyDayMotions'] as const
}

export function getOralquestionsKey() {
  return ['oralquestions'] as const
}

export function getOralquestiontimesKey() {
  return ['oralquestiontimes'] as const
}

export function getGetEarlyDayMotionIdKey(
  args: InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>,
) {
  return ['EarlyDayMotion', '/EarlyDayMotion/:id', args] as const
}

export function useGetEarlyDayMotionId<TError = unknown>(
  args: InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
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
        ? getGetEarlyDayMotionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.EarlyDayMotion[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEarlyDayMotionId<TError = unknown>(
  args: InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
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
        ? getGetEarlyDayMotionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.EarlyDayMotion[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEarlyDayMotionsListKey(
  args: InferRequestType<typeof client.EarlyDayMotions.list.$get>,
) {
  return ['EarlyDayMotions', '/EarlyDayMotions/list', args] as const
}

export function useGetEarlyDayMotionsList<TError = unknown>(
  args: InferRequestType<typeof client.EarlyDayMotions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>
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
        ? getGetEarlyDayMotionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.EarlyDayMotions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEarlyDayMotionsList<TError = unknown>(
  args: InferRequestType<typeof client.EarlyDayMotions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>
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
        ? getGetEarlyDayMotionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.EarlyDayMotions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOralquestionsListKey(
  args: InferRequestType<typeof client.oralquestions.list.$get>,
) {
  return ['oralquestions', '/oralquestions/list', args] as const
}

export function useGetOralquestionsList<TError = unknown>(
  args: InferRequestType<typeof client.oralquestions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
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
        ? getGetOralquestionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oralquestions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOralquestionsList<TError = unknown>(
  args: InferRequestType<typeof client.oralquestions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
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
        ? getGetOralquestionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oralquestions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOralquestiontimesListKey(
  args: InferRequestType<typeof client.oralquestiontimes.list.$get>,
) {
  return ['oralquestiontimes', '/oralquestiontimes/list', args] as const
}

export function useGetOralquestiontimesList<TError = unknown>(
  args: InferRequestType<typeof client.oralquestiontimes.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
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
        ? getGetOralquestiontimesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oralquestiontimes.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOralquestiontimesList<TError = unknown>(
  args: InferRequestType<typeof client.oralquestiontimes.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
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
        ? getGetOralquestiontimesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oralquestiontimes.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
