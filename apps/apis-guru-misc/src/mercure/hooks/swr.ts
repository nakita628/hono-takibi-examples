import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWellKnownKey() {
  return ['.well-known'] as const
}

export function getGetWellKnownMercureKey(
  args: InferRequestType<(typeof client)['.well-known']['mercure']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['.well-known', '/.well-known/mercure', keyArgs] as const
}

export function useGetWellKnownMercure<TError = unknown>(
  args: InferRequestType<(typeof client)['.well-known']['mercure']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>
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
        ? getGetWellKnownMercureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['.well-known'].mercure.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellKnownMercure<TError = unknown>(
  args: InferRequestType<(typeof client)['.well-known']['mercure']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>
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
        ? getGetWellKnownMercureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['.well-known'].mercure.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWellKnownMercureKey() {
  return ['.well-known', '/.well-known/mercure', 'POST'] as const
}

export function usePostWellKnownMercure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['mercure']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['.well-known']['mercure']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWellKnownMercureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['.well-known']['mercure']['$post']> },
      ) => parseResponse(client['.well-known'].mercure.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWellKnownMercureSubscriptionsKey() {
  return ['.well-known', '/.well-known/mercure/subscriptions'] as const
}

export function useGetWellKnownMercureSubscriptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWellKnownMercureSubscriptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['.well-known'].mercure.subscriptions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellKnownMercureSubscriptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWellKnownMercureSubscriptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['mercure']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['.well-known'].mercure.subscriptions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWellKnownMercureSubscriptionsTopicKey(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
  >,
) {
  return ['.well-known', '/.well-known/mercure/subscriptions/:topic', args] as const
}

export function useGetWellKnownMercureSubscriptionsTopic<TError = unknown>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWellKnownMercureSubscriptionsTopicKey(args)
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
                (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
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
          client['.well-known'].mercure.subscriptions[':topic'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellKnownMercureSubscriptionsTopic<TError = unknown>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWellKnownMercureSubscriptionsTopicKey(args)
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
                (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
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
          client['.well-known'].mercure.subscriptions[':topic'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWellKnownMercureSubscriptionsTopicSubscriberKey(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
  >,
) {
  return ['.well-known', '/.well-known/mercure/subscriptions/:topic/:subscriber', args] as const
}

export function useGetWellKnownMercureSubscriptionsTopicSubscriber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWellKnownMercureSubscriptionsTopicSubscriberKey(args)
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
                (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
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
          client['.well-known'].mercure.subscriptions[':topic'][':subscriber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellKnownMercureSubscriptionsTopicSubscriber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWellKnownMercureSubscriptionsTopicSubscriberKey(args)
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
                (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
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
          client['.well-known'].mercure.subscriptions[':topic'][':subscriber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
