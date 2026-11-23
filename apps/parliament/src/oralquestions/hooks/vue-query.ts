import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>>,
) {
  return ['EarlyDayMotion', '/EarlyDayMotion/:id', toValue(args)] as const
}

export function getEarlyDayMotionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarlyDayMotionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.EarlyDayMotion[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEarlyDayMotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.EarlyDayMotion)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEarlyDayMotionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.EarlyDayMotion)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEarlyDayMotionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarlyDayMotionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.EarlyDayMotion[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEarlyDayMotionsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.EarlyDayMotions.list.$get>>,
) {
  return ['EarlyDayMotions', '/EarlyDayMotions/list', toValue(args)] as const
}

export function getEarlyDayMotionsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.EarlyDayMotions.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarlyDayMotionsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.EarlyDayMotions.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEarlyDayMotionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.EarlyDayMotions.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>
            >
          >,
          ReturnType<typeof getEarlyDayMotionsListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarlyDayMotions.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarlyDayMotionsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarlyDayMotionsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.EarlyDayMotions.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOralquestionsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oralquestions.list.$get>>,
) {
  return ['oralquestions', '/oralquestions/list', toValue(args)] as const
}

export function getOralquestionsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oralquestions.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOralquestionsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oralquestions.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOralquestionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oralquestions.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>
            >
          >,
          ReturnType<typeof getOralquestionsListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestions.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOralquestionsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOralquestionsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oralquestions.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOralquestiontimesListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oralquestiontimes.list.$get>>,
) {
  return ['oralquestiontimes', '/oralquestiontimes/list', toValue(args)] as const
}

export function getOralquestiontimesListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oralquestiontimes.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOralquestiontimesListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oralquestiontimes.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOralquestiontimesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oralquestiontimes.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
            >
          >,
          ReturnType<typeof getOralquestiontimesListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oralquestiontimes.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOralquestiontimesListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOralquestiontimesListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oralquestiontimes.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
