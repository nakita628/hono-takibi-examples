import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRecordsKey() {
  return ['records'] as const
}

export function getRecordsFormatKey() {
  return ['records.{format}'] as const
}

export function getGetRecordsFormatKey(
  args: InferRequestType<(typeof client)['records.{format}']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['records.{format}', '/records.{format}', keyArgs] as const
}

export function useGetRecordsFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['records.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecordsFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['records.{format}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordsFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['records.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecordsFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['records.{format}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecordsRecordIdFormatKey(
  args: InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['records', '/records/:record_id.{format}', keyArgs] as const
}

export function useGetRecordsRecordIdFormat<TError = unknown>(
  args: InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
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
        ? getGetRecordsRecordIdFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.records[':record_id.{format}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordsRecordIdFormat<TError = unknown>(
  args: InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
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
        ? getGetRecordsRecordIdFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.records[':record_id.{format}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecordsRecordIdMoreLikeThisFormatKey(
  args: InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['records', '/records/:record_id/more_like_this.{format}', keyArgs] as const
}

export function useGetRecordsRecordIdMoreLikeThisFormat<TError = unknown>(
  args: InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
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
        ? getGetRecordsRecordIdMoreLikeThisFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.records[':record_id']['more_like_this.{format}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordsRecordIdMoreLikeThisFormat<TError = unknown>(
  args: InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
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
        ? getGetRecordsRecordIdMoreLikeThisFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.records[':record_id']['more_like_this.{format}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
