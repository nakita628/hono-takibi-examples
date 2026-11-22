import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDataKey() {
  return ['data'] as const
}

export function getManagementKey() {
  return ['management'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getProvisioningKey() {
  return ['provisioning'] as const
}

export function getUserDeletionKey() {
  return ['userDeletion'] as const
}

export function getGetDataGaKey(args: InferRequestType<typeof client.data.ga.$get>) {
  return ['data', '/data/ga', args] as const
}

export function useGetDataGa<TError = unknown>(
  args: InferRequestType<typeof client.data.ga.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataGaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.data.ga.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDataGa<TError = unknown>(
  args: InferRequestType<typeof client.data.ga.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataGaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.data.ga.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDataMcfKey(args: InferRequestType<typeof client.data.mcf.$get>) {
  return ['data', '/data/mcf', args] as const
}

export function useGetDataMcf<TError = unknown>(
  args: InferRequestType<typeof client.data.mcf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataMcfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.data.mcf.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDataMcf<TError = unknown>(
  args: InferRequestType<typeof client.data.mcf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataMcfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.data.mcf.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDataRealtimeKey(args: InferRequestType<typeof client.data.realtime.$get>) {
  return ['data', '/data/realtime', args] as const
}

export function useGetDataRealtime<TError = unknown>(
  args: InferRequestType<typeof client.data.realtime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataRealtimeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.realtime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataRealtime<TError = unknown>(
  args: InferRequestType<typeof client.data.realtime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataRealtimeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.realtime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagementAccountSummariesKey(
  args: InferRequestType<typeof client.management.accountSummaries.$get>,
) {
  return ['management', '/management/accountSummaries', args] as const
}

export function useGetManagementAccountSummaries<TError = unknown>(
  args: InferRequestType<typeof client.management.accountSummaries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
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
        ? getGetManagementAccountSummariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.management.accountSummaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountSummaries<TError = unknown>(
  args: InferRequestType<typeof client.management.accountSummaries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
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
        ? getGetManagementAccountSummariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.management.accountSummaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagementAccountsKey(
  args: InferRequestType<typeof client.management.accounts.$get>,
) {
  return ['management', '/management/accounts', args] as const
}

export function useGetManagementAccounts<TError = unknown>(
  args: InferRequestType<typeof client.management.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>
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
        ? getGetManagementAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.management.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccounts<TError = unknown>(
  args: InferRequestType<typeof client.management.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>
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
        ? getGetManagementAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.management.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdEntityUserLinksKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
  >,
) {
  return ['management', '/management/accounts/:accountId/entityUserLinks', args] as const
}

export function useGetManagementAccountsAccountIdEntityUserLinks<TError = unknown>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
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
        ? getGetManagementAccountsAccountIdEntityUserLinksKey(args)
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
                (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
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
          client.management.accounts[':accountId'].entityUserLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdEntityUserLinks<TError = unknown>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
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
        ? getGetManagementAccountsAccountIdEntityUserLinksKey(args)
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
                (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
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
          client.management.accounts[':accountId'].entityUserLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdEntityUserLinksKey() {
  return ['management', '/management/accounts/:accountId/entityUserLinks', 'POST'] as const
}

export function usePostManagementAccountsAccountIdEntityUserLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['entityUserLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.management.accounts)[':accountId']['entityUserLinks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagementAccountsAccountIdEntityUserLinksKey()
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
            (typeof client.management.accounts)[':accountId']['entityUserLinks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].entityUserLinks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdEntityUserLinksLinkIdKey() {
  return ['management', '/management/accounts/:accountId/entityUserLinks/:linkId', 'PUT'] as const
}

export function usePutManagementAccountsAccountIdEntityUserLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManagementAccountsAccountIdEntityUserLinksLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].entityUserLinks[':linkId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdEntityUserLinksLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/entityUserLinks/:linkId',
    'DELETE',
  ] as const
}

export function useDeleteManagementAccountsAccountIdEntityUserLinksLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteManagementAccountsAccountIdEntityUserLinksLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].entityUserLinks[':linkId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdFiltersKey(
  args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>,
) {
  return ['management', '/management/accounts/:accountId/filters', args] as const
}

export function useGetManagementAccountsAccountIdFilters<TError = unknown>(
  args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>
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
        ? getGetManagementAccountsAccountIdFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.management.accounts[':accountId'].filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdFilters<TError = unknown>(
  args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>
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
        ? getGetManagementAccountsAccountIdFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.management.accounts[':accountId'].filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdFiltersKey() {
  return ['management', '/management/accounts/:accountId/filters', 'POST'] as const
}

export function usePostManagementAccountsAccountIdFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagementAccountsAccountIdFiltersKey()
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
            (typeof client.management.accounts)[':accountId']['filters']['$post']
          >
        },
      ) =>
        parseResponse(client.management.accounts[':accountId'].filters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdFiltersFilterIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
  >,
) {
  return ['management', '/management/accounts/:accountId/filters/:filterId', args] as const
}

export function useGetManagementAccountsAccountIdFiltersFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
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
        ? getGetManagementAccountsAccountIdFiltersFilterIdKey(args)
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
                (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
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
          client.management.accounts[':accountId'].filters[':filterId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdFiltersFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
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
        ? getGetManagementAccountsAccountIdFiltersFilterIdKey(args)
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
                (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
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
          client.management.accounts[':accountId'].filters[':filterId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdFiltersFilterIdKey() {
  return ['management', '/management/accounts/:accountId/filters/:filterId', 'PUT'] as const
}

export function usePutManagementAccountsAccountIdFiltersFilterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManagementAccountsAccountIdFiltersFilterIdKey()
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
            (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].filters[':filterId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdFiltersFilterIdKey() {
  return ['management', '/management/accounts/:accountId/filters/:filterId', 'DELETE'] as const
}

export function useDeleteManagementAccountsAccountIdFiltersFilterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteManagementAccountsAccountIdFiltersFilterIdKey()
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
            (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].filters[':filterId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdFiltersFilterIdKey() {
  return ['management', '/management/accounts/:accountId/filters/:filterId', 'PATCH'] as const
}

export function usePatchManagementAccountsAccountIdFiltersFilterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchManagementAccountsAccountIdFiltersFilterIdKey()
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
            (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].filters[':filterId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
  >,
) {
  return ['management', '/management/accounts/:accountId/webproperties', args] as const
}

export function useGetManagementAccountsAccountIdWebproperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.management.accounts)[':accountId']['webproperties']['$get']>
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
        ? getGetManagementAccountsAccountIdWebpropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.management.accounts)[':accountId']['webproperties']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebproperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.management.accounts)[':accountId']['webproperties']['$get']>
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
        ? getGetManagementAccountsAccountIdWebpropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.management.accounts)[':accountId']['webproperties']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesKey() {
  return ['management', '/management/accounts/:accountId/webproperties', 'POST'] as const
}

export function usePostManagementAccountsAccountIdWebproperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.management.accounts)[':accountId']['webproperties']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.management.accounts)[':accountId']['webproperties']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagementAccountsAccountIdWebpropertiesKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId',
    'PATCH',
  ] as const
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/deleteUploadData',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['deleteUploadData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['deleteUploadData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['deleteUploadData']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources[':customDataSourceId'].deleteUploadData.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploads<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources[':customDataSourceId'].uploads.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploads<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources[':customDataSourceId'].uploads.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploads<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources[':customDataSourceId'].uploads.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads/:uploadId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources[':customDataSourceId'].uploads[':uploadId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources[':customDataSourceId'].uploads[':uploadId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDimensions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDimensions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDimensions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions/:customDimensionId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
            ':customDimensionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
            ':customDimensionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions/:customDimensionId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
            ':customDimensionId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions/:customDimensionId',
    'PATCH',
  ] as const
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
            ':customDimensionId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customMetrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customMetrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetrics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customMetrics.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics/:customMetricId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
            ':customMetricId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
            ':customMetricId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics/:customMetricId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
            ':customMetricId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics/:customMetricId',
    'PATCH',
  ] as const
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
            ':customMetricId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks[':webPropertyAdWordsLinkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks[':webPropertyAdWordsLinkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks[':webPropertyAdWordsLinkId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId',
    'DELETE',
  ] as const
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks[':webPropertyAdWordsLinkId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId',
    'PATCH',
  ] as const
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks[':webPropertyAdWordsLinkId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityUserLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityUserLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityUserLinks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks/:linkId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityUserLinks[
            ':linkId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks/:linkId',
    'DELETE',
  ] as const
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityUserLinks[
            ':linkId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfiles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfiles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfiles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId',
    'DELETE',
  ] as const
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId',
    'PATCH',
  ] as const
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].entityUserLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].entityUserLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].entityUserLinks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks/:linkId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].entityUserLinks[':linkId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks/:linkId',
    'DELETE',
  ] as const
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].entityUserLinks[':linkId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperiments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperiments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperiments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments[':experimentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments[':experimentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments[':experimentId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId',
    'DELETE',
  ] as const
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments[':experimentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId',
    'PATCH',
  ] as const
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments[':experimentId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoals<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].goals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoals<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].goals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoals<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].goals.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals/:goalId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].goals[':goalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].goals[':goalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals/:goalId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].goals[':goalId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals/:goalId',
    'PATCH',
  ] as const
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].goals[':goalId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks[':linkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks[':linkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks[':linkId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId',
    'DELETE',
  ] as const
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks[':linkId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId',
    'PATCH',
  ] as const
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks[':linkId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReports<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].unsampledReports.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReports<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].unsampledReports.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReports<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].unsampledReports.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports/:unsampledReportId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].unsampledReports[':unsampledReportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
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
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].unsampledReports[':unsampledReportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports/:unsampledReportId',
    'DELETE',
  ] as const
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].unsampledReports[':unsampledReportId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiences<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiences<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesKey(args)
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences',
    'POST',
  ] as const
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$post']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId',
    args,
  ] as const
}

export function useGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences[':remarketingAudienceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
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
        ? getGetManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdKey(
            args,
          )
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
                (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
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
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences[':remarketingAudienceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId',
    'PUT',
  ] as const
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences[':remarketingAudienceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId',
    'DELETE',
  ] as const
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences[':remarketingAudienceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId',
    'PATCH',
  ] as const
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdKey()
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
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences[':remarketingAudienceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostManagementClientIdHashClientIdKey() {
  return ['management', '/management/clientId:hashClientId', 'POST'] as const
}

export function usePostManagementClientIdHashClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.management)['clientId:hashClientId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.management)['clientId:hashClientId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagementClientIdHashClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.management)['clientId:hashClientId']['$post']> },
      ) => parseResponse(client.management['clientId:hashClientId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagementSegmentsKey(
  args: InferRequestType<typeof client.management.segments.$get>,
) {
  return ['management', '/management/segments', args] as const
}

export function useGetManagementSegments<TError = unknown>(
  args: InferRequestType<typeof client.management.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>
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
        ? getGetManagementSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.management.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagementSegments<TError = unknown>(
  args: InferRequestType<typeof client.management.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>
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
        ? getGetManagementSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.management.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataReportTypeColumnsKey(
  args: InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>,
) {
  return ['metadata', '/metadata/:reportType/columns', args] as const
}

export function useGetMetadataReportTypeColumns<TError = unknown>(
  args: InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
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
        ? getGetMetadataReportTypeColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata[':reportType'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataReportTypeColumns<TError = unknown>(
  args: InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
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
        ? getGetMetadataReportTypeColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata[':reportType'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProvisioningCreateAccountTicketKey() {
  return ['provisioning', '/provisioning/createAccountTicket', 'POST'] as const
}

export function usePostProvisioningCreateAccountTicket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.provisioning.createAccountTicket.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.provisioning.createAccountTicket.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProvisioningCreateAccountTicketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.provisioning.createAccountTicket.$post> },
      ) => parseResponse(client.provisioning.createAccountTicket.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProvisioningCreateAccountTreeKey() {
  return ['provisioning', '/provisioning/createAccountTree', 'POST'] as const
}

export function usePostProvisioningCreateAccountTree<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.provisioning.createAccountTree.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.provisioning.createAccountTree.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProvisioningCreateAccountTreeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.provisioning.createAccountTree.$post> },
      ) => parseResponse(client.provisioning.createAccountTree.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserDeletionUserDeletionRequestsUpsertKey() {
  return ['userDeletion', '/userDeletion/userDeletionRequests:upsert', 'POST'] as const
}

export function usePostUserDeletionUserDeletionRequestsUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userDeletion)['userDeletionRequests:upsert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userDeletion)['userDeletionRequests:upsert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserDeletionUserDeletionRequestsUpsertKey()
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
            (typeof client.userDeletion)['userDeletionRequests:upsert']['$post']
          >
        },
      ) =>
        parseResponse(client.userDeletion['userDeletionRequests:upsert'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
