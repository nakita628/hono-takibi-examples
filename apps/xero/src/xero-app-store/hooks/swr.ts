import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getGetSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId', args] as const
}

export function useGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
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
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
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
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscriptionId/items/:subscriptionItemId/usage-records',
    'POST',
  ] as const
}

export function usePostSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecords<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscriptionId'].items[':subscriptionItemId'][
            'usage-records'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscriptionId/items/:subscriptionItemId/usage-records/:usageRecordId',
    'PUT',
  ] as const
}

export function usePutSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records'][':usageRecordId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records'][':usageRecordId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records'][':usageRecordId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':subscriptionId'].items[':subscriptionItemId']['usage-records'][
            ':usageRecordId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdUsageRecordsKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/usage-records', args] as const
}

export function useGetSubscriptionsSubscriptionIdUsageRecords<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>
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
        ? getGetSubscriptionsSubscriptionIdUsageRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':subscriptionId']['usage-records'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdUsageRecords<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>
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
        ? getGetSubscriptionsSubscriptionIdUsageRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':subscriptionId']['usage-records'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
