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

export function getGetSubscriptionsKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function useGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsKey() {
  return ['subscriptions', '/subscriptions', 'PUT'] as const
}

export function usePutSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subscriptions.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subscriptions.$put> }) =>
        parseResponse(client.subscriptions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsMeKey(
  args: InferRequestType<typeof client.subscriptions.me.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/me', keyArgs] as const
}

export function useGetSubscriptionsMe<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
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
        ? getGetSubscriptionsMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsMe<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
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
        ? getGetSubscriptionsMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsSettingsKey(
  args: InferRequestType<typeof client.subscriptions.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/settings', keyArgs] as const
}

export function useGetSubscriptionsSettings<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>
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
        ? getGetSubscriptionsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSettings<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>
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
        ? getGetSubscriptionsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsSettingsKey() {
  return ['subscriptions', '/subscriptions/settings', 'PUT'] as const
}

export function usePutSubscriptionsSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.subscriptions.settings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.subscriptions.settings.$put> },
      ) => parseResponse(client.subscriptions.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsRecurrenceIdKey(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:recurrenceId', keyArgs] as const
}

export function useGetSubscriptionsRecurrenceId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
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
        ? getGetSubscriptionsRecurrenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':recurrenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsRecurrenceId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
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
        ? getGetSubscriptionsRecurrenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':recurrenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSubscriptionsRecurrenceIdKey() {
  return ['subscriptions', '/subscriptions/:recurrenceId', 'PATCH'] as const
}

export function usePatchSubscriptionsRecurrenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSubscriptionsRecurrenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$patch']> },
      ) => parseResponse(client.subscriptions[':recurrenceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsRecurrenceIdAddressesKey(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:recurrenceId/addresses', keyArgs] as const
}

export function useGetSubscriptionsRecurrenceIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>>
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
        ? getGetSubscriptionsRecurrenceIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':recurrenceId'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsRecurrenceIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>>
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
        ? getGetSubscriptionsRecurrenceIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':recurrenceId'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsRecurrenceIdItemsKey() {
  return ['subscriptions', '/subscriptions/:recurrenceId/items', 'POST'] as const
}

export function usePostSubscriptionsRecurrenceIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsRecurrenceIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>
        },
      ) => parseResponse(client.subscriptions[':recurrenceId'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSubscriptionsRecurrenceIdReindexKey() {
  return ['subscriptions', '/subscriptions/:recurrenceId/reindex', 'PATCH'] as const
}

export function usePatchSubscriptionsRecurrenceIdReindex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSubscriptionsRecurrenceIdReindexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>
        },
      ) => parseResponse(client.subscriptions[':recurrenceId'].reindex.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsRecurrenceidAccountsKey(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:recurrenceid/accounts', keyArgs] as const
}

export function useGetSubscriptionsRecurrenceidAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>>
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
        ? getGetSubscriptionsRecurrenceidAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':recurrenceid'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsRecurrenceidAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>>
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
        ? getGetSubscriptionsRecurrenceidAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':recurrenceid'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
