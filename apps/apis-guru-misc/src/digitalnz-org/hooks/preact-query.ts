import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRecordsKey() {
  return ['records'] as const
}

export function getRecordsFormatKey() {
  return ['records.{format}'] as const
}

export function getRecordsFormatQueryKey(
  args: InferRequestType<(typeof client)['records.{format}']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['records.{format}', '/records.{format}', keyArgs] as const
}

export function getRecordsFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['records.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsFormatQueryKey>
  >({
    queryKey: getRecordsFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['records.{format}'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecordsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['records.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecordsFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecordsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['records.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecordsFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecordsRecordIdFormatQueryKey(
  args: InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['records', '/records/:record_id.{format}', keyArgs] as const
}

export function getRecordsRecordIdFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsRecordIdFormatQueryKey>
  >({
    queryKey: getRecordsRecordIdFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.records[':record_id.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecordsRecordIdFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsRecordIdFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRecordsRecordIdFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecordsRecordIdFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsRecordIdFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRecordsRecordIdFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecordsRecordIdMoreLikeThisFormatQueryKey(
  args: InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['records', '/records/:record_id/more_like_this.{format}', keyArgs] as const
}

export function getRecordsRecordIdMoreLikeThisFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsRecordIdMoreLikeThisFormatQueryKey>
  >({
    queryKey: getRecordsRecordIdMoreLikeThisFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.records[':record_id']['more_like_this.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecordsRecordIdMoreLikeThisFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsRecordIdMoreLikeThisFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRecordsRecordIdMoreLikeThisFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecordsRecordIdMoreLikeThisFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsRecordIdMoreLikeThisFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRecordsRecordIdMoreLikeThisFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
