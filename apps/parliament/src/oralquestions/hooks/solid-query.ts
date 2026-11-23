import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createEarlyDayMotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEarlyDayMotionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarlyDayMotionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEarlyDayMotionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.EarlyDayMotions.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEarlyDayMotionsListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarlyDayMotionsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createOralquestionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.oralquestions.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOralquestionsListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOralquestionsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createOralquestiontimesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.oralquestiontimes.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOralquestiontimesListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOralquestiontimesListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
