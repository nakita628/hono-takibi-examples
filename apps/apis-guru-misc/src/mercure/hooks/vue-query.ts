import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWellKnownKey() {
  return ['.well-known'] as const
}

export function getWellKnownMercureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['.well-known']['mercure']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['.well-known', '/.well-known/mercure', keyArgs] as const
}

export function getWellKnownMercureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['.well-known']['mercure']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWellKnownMercureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['.well-known'].mercure.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWellKnownMercure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['.well-known']['mercure']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWellKnownMercureQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownMercureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWellKnownMercureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['.well-known'].mercure.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getWellKnownMercureSubscriptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWellKnownMercureSubscriptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['.well-known'].mercure.subscriptions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWellKnownMercureSubscriptionsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownMercureSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWellKnownMercureSubscriptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['.well-known'].mercure.subscriptions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWellKnownMercureSubscriptionsTopicQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']>
  >,
) {
  return ['.well-known', '/.well-known/mercure/subscriptions/:topic', toValue(args)] as const
}

export function getWellKnownMercureSubscriptionsTopicQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWellKnownMercureSubscriptionsTopicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['.well-known'].mercure.subscriptions[':topic'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getWellKnownMercureSubscriptionsTopicQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWellKnownMercureSubscriptionsTopicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['.well-known'].mercure.subscriptions[':topic'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWellKnownMercureSubscriptionsTopicSubscriberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
    >
  >,
) {
  return [
    '.well-known',
    '/.well-known/mercure/subscriptions/:topic/:subscriber',
    toValue(args),
  ] as const
}

export function getWellKnownMercureSubscriptionsTopicSubscriberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWellKnownMercureSubscriptionsTopicSubscriberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['.well-known'].mercure.subscriptions[':topic'][':subscriber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getWellKnownMercureSubscriptionsTopicSubscriberQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWellKnownMercureSubscriptionsTopicSubscriberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['.well-known'].mercure.subscriptions[':topic'][':subscriber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
