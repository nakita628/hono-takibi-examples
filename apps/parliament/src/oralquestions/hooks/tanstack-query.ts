import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function getEarlyDayMotionIdQueryKey(
  args: InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>,
) {
  return ['EarlyDayMotion', '/EarlyDayMotion/:id', args] as const
}

export function getEarlyDayMotionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEarlyDayMotionIdQueryKey>
  >({
    queryKey: getEarlyDayMotionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.EarlyDayMotion[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEarlyDayMotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEarlyDayMotionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEarlyDayMotionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEarlyDayMotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEarlyDayMotionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEarlyDayMotionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEarlyDayMotionsListQueryKey(
  args: InferRequestType<typeof client.EarlyDayMotions.list.$get>,
) {
  return ['EarlyDayMotions', '/EarlyDayMotions/list', args] as const
}

export function getEarlyDayMotionsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.EarlyDayMotions.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarlyDayMotionsListQueryKey>
  >({
    queryKey: getEarlyDayMotionsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.EarlyDayMotions.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEarlyDayMotionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.EarlyDayMotions.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEarlyDayMotionsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEarlyDayMotionsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEarlyDayMotionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.EarlyDayMotions.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEarlyDayMotionsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEarlyDayMotionsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOralquestionsListQueryKey(
  args: InferRequestType<typeof client.oralquestions.list.$get>,
) {
  return ['oralquestions', '/oralquestions/list', args] as const
}

export function getOralquestionsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oralquestions.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOralquestionsListQueryKey>
  >({
    queryKey: getOralquestionsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oralquestions.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOralquestionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oralquestions.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOralquestionsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOralquestionsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOralquestionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oralquestions.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOralquestionsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOralquestionsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOralquestiontimesListQueryKey(
  args: InferRequestType<typeof client.oralquestiontimes.list.$get>,
) {
  return ['oralquestiontimes', '/oralquestiontimes/list', args] as const
}

export function getOralquestiontimesListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oralquestiontimes.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOralquestiontimesListQueryKey>
  >({
    queryKey: getOralquestiontimesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oralquestiontimes.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOralquestiontimesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oralquestiontimes.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOralquestiontimesListQueryKey>
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
      ...getOralquestiontimesListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOralquestiontimesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oralquestiontimes.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOralquestiontimesListQueryKey>
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
      ...getOralquestiontimesListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
