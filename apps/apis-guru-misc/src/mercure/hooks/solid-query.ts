import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createWellKnownMercure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['.well-known']['mercure']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getWellKnownMercureQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWellKnownMercure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWellKnownMercureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createWellKnownMercureSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getWellKnownMercureSubscriptionsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createWellKnownMercureSubscriptionsTopic<
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
  args: () => InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getWellKnownMercureSubscriptionsTopicQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createWellKnownMercureSubscriptionsTopicSubscriber<
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
  args: () => InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getWellKnownMercureSubscriptionsTopicSubscriberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
