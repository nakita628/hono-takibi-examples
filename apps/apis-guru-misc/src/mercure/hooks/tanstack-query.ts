import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWellKnownKey() {
  return ['.well-known'] as const
}

export function getWellKnownMercureQueryKey(
  args: InferRequestType<(typeof client)['.well-known']['mercure']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['.well-known', '/.well-known/mercure', keyArgs] as const
}

export function getWellKnownMercureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['.well-known']['mercure']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownMercureQueryKey>
  >({
    queryKey: getWellKnownMercureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known'].mercure.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownMercure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['.well-known']['mercure']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownMercureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWellKnownMercureQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWellKnownMercure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['.well-known']['mercure']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownMercureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWellKnownMercureQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWellKnownMercureMutationKey() {
  return ['.well-known', '/.well-known/mercure', 'POST'] as const
}

export function getPostWellKnownMercureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['.well-known']['mercure']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWellKnownMercureMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['.well-known']['mercure']['$post']>) {
      return parseResponse(client['.well-known'].mercure.$post(args, options))
    },
  })
}

export function usePostWellKnownMercure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['.well-known']['mercure']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWellKnownMercureMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWellKnownMercureSubscriptionsQueryKey() {
  return ['.well-known', '/.well-known/mercure/subscriptions'] as const
}

export function getWellKnownMercureSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownMercureSubscriptionsQueryKey>
  >({
    queryKey: getWellKnownMercureSubscriptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known'].mercure.subscriptions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownMercureSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownMercureSubscriptionsQueryKey>
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
      ...getWellKnownMercureSubscriptionsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWellKnownMercureSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownMercureSubscriptionsQueryKey>
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
      ...getWellKnownMercureSubscriptionsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWellKnownMercureSubscriptionsTopicQueryKey(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
  >,
) {
  return ['.well-known', '/.well-known/mercure/subscriptions/:topic', args] as const
}

export function getWellKnownMercureSubscriptionsTopicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownMercureSubscriptionsTopicQueryKey>
  >({
    queryKey: getWellKnownMercureSubscriptionsTopicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known'].mercure.subscriptions[':topic'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownMercureSubscriptionsTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownMercureSubscriptionsTopicQueryKey>
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
      ...getWellKnownMercureSubscriptionsTopicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWellKnownMercureSubscriptionsTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownMercureSubscriptionsTopicQueryKey>
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
      ...getWellKnownMercureSubscriptionsTopicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWellKnownMercureSubscriptionsTopicSubscriberQueryKey(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
  >,
) {
  return ['.well-known', '/.well-known/mercure/subscriptions/:topic/:subscriber', args] as const
}

export function getWellKnownMercureSubscriptionsTopicSubscriberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownMercureSubscriptionsTopicSubscriberQueryKey>
  >({
    queryKey: getWellKnownMercureSubscriptionsTopicSubscriberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known'].mercure.subscriptions[':topic'][':subscriber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownMercureSubscriptionsTopicSubscriber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownMercureSubscriptionsTopicSubscriberQueryKey>
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
      ...getWellKnownMercureSubscriptionsTopicSubscriberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWellKnownMercureSubscriptionsTopicSubscriber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownMercureSubscriptionsTopicSubscriberQueryKey>
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
      ...getWellKnownMercureSubscriptionsTopicSubscriberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
