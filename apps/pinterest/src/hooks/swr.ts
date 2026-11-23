import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdAccountsKey() {
  return ['ad_accounts'] as const
}

export function getAdvancedAuctionKey() {
  return ['advanced_auction'] as const
}

export function getBoardsKey() {
  return ['boards'] as const
}

export function getBusinessAccessKey() {
  return ['business_access'] as const
}

export function getBusinessesKey() {
  return ['businesses'] as const
}

export function getCatalogsKey() {
  return ['catalogs'] as const
}

export function getCollaborativeCatalogsKey() {
  return ['collaborative_catalogs'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getMediaKey() {
  return ['media'] as const
}

export function getMediaLibraryKey() {
  return ['media_library'] as const
}

export function getMerchantKey() {
  return ['merchant'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getOverlayAssignmentRulesKey() {
  return ['overlay_assignment_rules'] as const
}

export function getOverlaysKey() {
  return ['overlays'] as const
}

export function getPinsKey() {
  return ['pins'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getTermsKey() {
  return ['terms'] as const
}

export function getTrendsKey() {
  return ['trends'] as const
}

export function getUserAccountKey() {
  return ['user_account'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getGetAdAccountsKey(args: InferRequestType<typeof client.ad_accounts.$get>) {
  return ['ad_accounts', '/ad_accounts', args] as const
}

export function useGetAdAccounts<TError = unknown>(
  args: InferRequestType<typeof client.ad_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccounts<TError = unknown>(
  args: InferRequestType<typeof client.ad_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsKey() {
  return ['ad_accounts', '/ad_accounts', 'POST'] as const
}

export function usePostAdAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ad_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ad_accounts.$post> }) =>
        parseResponse(client.ad_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsEntityHistoryKey(
  args: InferRequestType<typeof client.ad_accounts.entity_history.$get>,
) {
  return ['ad_accounts', '/ad_accounts/entity_history', args] as const
}

export function useGetAdAccountsEntityHistory<TError = unknown>(
  args: InferRequestType<typeof client.ad_accounts.entity_history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
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
        ? getGetAdAccountsEntityHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_accounts.entity_history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsEntityHistory<TError = unknown>(
  args: InferRequestType<typeof client.ad_accounts.entity_history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
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
        ? getGetAdAccountsEntityHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_accounts.entity_history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id', args] as const
}

export function useGetAdAccountsAdAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
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
        ? getGetAdAccountsAdAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_accounts[':ad_account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
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
        ? getGetAdAccountsAdAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_accounts[':ad_account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAbTestsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests', args] as const
}

export function useGetAdAccountsAdAccountIdAbTests<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAbTestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ab_tests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAbTests<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAbTestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ab_tests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdAbTestsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdAbTests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdAbTestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].ab_tests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdAbTestsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdAbTests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdAbTestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$patch']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].ab_tests.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAbTestsAbTestIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests/:ab_test_id', args] as const
}

export function useGetAdAccountsAdAccountIdAbTestsAbTestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
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
        ? getGetAdAccountsAdAccountIdAbTestsAbTestIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
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
          client.ad_accounts[':ad_account_id'].ab_tests[':ab_test_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAbTestsAbTestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
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
        ? getGetAdAccountsAdAccountIdAbTestsAbTestIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
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
          client.ad_accounts[':ad_account_id'].ab_tests[':ab_test_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdGroupsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups', args] as const
}

export function useGetAdAccountsAdAccountIdAdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ad_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ad_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdAdGroupsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdAdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdAdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].ad_groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdAdGroupsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdAdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdAdGroupsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$patch']
          >
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].ad_groups.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdGroupsAnalyticsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups/analytics', args] as const
}

export function useGetAdAccountsAdAccountIdAdGroupsAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups.analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdGroupsAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups.analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdAdGroupsAudienceSizingKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups/audience_sizing', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdAdGroupsAudienceSizing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['audience_sizing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['audience_sizing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdAdGroupsAudienceSizingKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['audience_sizing']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups.audience_sizing.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdGroupsTargetingAnalyticsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups/targeting_analytics', args] as const
}

export function useGetAdAccountsAdAccountIdAdGroupsTargetingAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsTargetingAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups.targeting_analytics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdGroupsTargetingAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsTargetingAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups.targeting_analytics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdGroupsAdGroupIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id', args] as const
}

export function useGetAdAccountsAdAccountIdAdGroupsAdGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdGroupsAdGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/dynamic_titles',
    'POST',
  ] as const
}

export function usePostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/dynamic_titles/csv',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsv<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.csv.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsv<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.csv.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/dynamic_titles/status',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/dynamic_titles/uploads',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploads<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[
            ':ad_group_id'
          ].dynamic_titles.uploads.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploads<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[
            ':ad_group_id'
          ].dynamic_titles.uploads.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/publisher_blocklists',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklists<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].publisher_blocklists.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklists<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
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
        ? getGetAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
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
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].publisher_blocklists.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/publisher_blocklists',
    'PATCH',
  ] as const
}

export function usePatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklists<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups[
            ':ad_group_id'
          ].publisher_blocklists.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdAdPreviewsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_previews', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdAdPreviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_previews']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_previews']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdAdPreviewsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['ad_previews']['$post']
          >
        },
      ) =>
        parseResponse(client.ad_accounts[':ad_account_id'].ad_previews.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads', args] as const
}

export function useGetAdAccountsAdAccountIdAds<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_accounts[':ad_account_id'].ads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAds<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_accounts[':ad_account_id'].ads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdAdsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdAds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdAdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$post']> },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].ads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdAdsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdAds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdAdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$patch']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].ads.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdsAnalyticsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads/analytics', args] as const
}

export function useGetAdAccountsAdAccountIdAdsAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
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
        ? getGetAdAccountsAdAccountIdAdsAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ads.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdsAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
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
        ? getGetAdAccountsAdAccountIdAdsAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ads.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdsTargetingAnalyticsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads/targeting_analytics', args] as const
}

export function useGetAdAccountsAdAccountIdAdsTargetingAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdAdsTargetingAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].ads.targeting_analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdsTargetingAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdAdsTargetingAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].ads.targeting_analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdsAdIdKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads/:ad_id', args] as const
}

export function useGetAdAccountsAdAccountIdAdsAdId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
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
        ? getGetAdAccountsAdAccountIdAdsAdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ads[':ad_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdsAdId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
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
        ? getGetAdAccountsAdAccountIdAdsAdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ads[':ad_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdsCreditDiscountsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads_credit/discounts', args] as const
}

export function useGetAdAccountsAdAccountIdAdsCreditDiscounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
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
        ? getGetAdAccountsAdAccountIdAdsCreditDiscountsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
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
          client.ad_accounts[':ad_account_id'].ads_credit.discounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdsCreditDiscounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
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
        ? getGetAdAccountsAdAccountIdAdsCreditDiscountsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
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
          client.ad_accounts[':ad_account_id'].ads_credit.discounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdAdsCreditRedeemKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads_credit/redeem', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdAdsCreditRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['redeem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads_credit']['redeem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdAdsCreditRedeemKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['redeem']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].ads_credit.redeem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAdvertiserDefinedEventsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/advertiser_defined_events', args] as const
}

export function useGetAdAccountsAdAccountIdAdvertiserDefinedEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
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
        ? getGetAdAccountsAdAccountIdAdvertiserDefinedEventsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
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
          client.ad_accounts[':ad_account_id'].advertiser_defined_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAdvertiserDefinedEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
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
        ? getGetAdAccountsAdAccountIdAdvertiserDefinedEventsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
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
          client.ad_accounts[':ad_account_id'].advertiser_defined_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdAdvertiserDefinedEventsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/advertiser_defined_events', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdAdvertiserDefinedEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdAdvertiserDefinedEventsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].advertiser_defined_events.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdAccountsAdAccountIdAdvertiserDefinedEventsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/advertiser_defined_events', 'DELETE'] as const
}

export function useDeleteAdAccountsAdAccountIdAdvertiserDefinedEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdAccountsAdAccountIdAdvertiserDefinedEventsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].advertiser_defined_events.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdAdvertiserDefinedEventsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/advertiser_defined_events', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdAdvertiserDefinedEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdAdvertiserDefinedEventsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].advertiser_defined_events.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAllowedDomainsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/allowed_domains', args] as const
}

export function useGetAdAccountsAdAccountIdAllowedDomains<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
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
        ? getGetAdAccountsAdAccountIdAllowedDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].allowed_domains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAllowedDomains<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
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
        ? getGetAdAccountsAdAccountIdAllowedDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].allowed_domains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAnalyticsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/analytics', args] as const
}

export function useGetAdAccountsAdAccountIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAudienceInsightsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audience_insights', args] as const
}

export function useGetAdAccountsAdAccountIdAudienceInsights<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
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
        ? getGetAdAccountsAdAccountIdAudienceInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].audience_insights.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAudienceInsights<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
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
        ? getGetAdAccountsAdAccountIdAudienceInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].audience_insights.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAudiencesKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences', args] as const
}

export function useGetAdAccountsAdAccountIdAudiences<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAudiences<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>>
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
        ? getGetAdAccountsAdAccountIdAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdAudiencesKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdAudiences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdAudiencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].audiences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdAudiencesAdAccountsSharedKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/audiences/ad_accounts/shared',
    'PATCH',
  ] as const
}

export function usePatchAdAccountsAdAccountIdAudiencesAdAccountsShared<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['audiences']['ad_accounts']['shared']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences']['ad_accounts']['shared']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdAudiencesAdAccountsSharedKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['audiences']['ad_accounts']['shared']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].audiences.ad_accounts.shared.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdAudiencesBusinessesSharedKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/audiences/businesses/shared',
    'PATCH',
  ] as const
}

export function usePatchAdAccountsAdAccountIdAudiencesBusinessesShared<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['audiences']['businesses']['shared']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences']['businesses']['shared']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdAudiencesBusinessesSharedKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['audiences']['businesses']['shared']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].audiences.businesses.shared.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAudiencesSharedAccountsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences/shared/accounts', args] as const
}

export function useGetAdAccountsAdAccountIdAudiencesSharedAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
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
        ? getGetAdAccountsAdAccountIdAudiencesSharedAccountsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
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
          client.ad_accounts[':ad_account_id'].audiences.shared.accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAudiencesSharedAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
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
        ? getGetAdAccountsAdAccountIdAudiencesSharedAccountsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
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
          client.ad_accounts[':ad_account_id'].audiences.shared.accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdAudiencesAudienceIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences/:audience_id', args] as const
}

export function useGetAdAccountsAdAccountIdAudiencesAudienceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
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
        ? getGetAdAccountsAdAccountIdAudiencesAudienceIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
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
          client.ad_accounts[':ad_account_id'].audiences[':audience_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdAudiencesAudienceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
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
        ? getGetAdAccountsAdAccountIdAudiencesAudienceIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
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
          client.ad_accounts[':ad_account_id'].audiences[':audience_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdAudiencesAudienceIdKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences/:audience_id', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdAudiencesAudienceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdAudiencesAudienceIdKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].audiences[':audience_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdBidFloorKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/bid_floor', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdBidFloor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['bid_floor']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bid_floor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdBidFloorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bid_floor']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].bid_floor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/billing_invoice/:billing_invoice_id/download',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
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
        ? getGetAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
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
          client.ad_accounts[':ad_account_id'].billing_invoice[':billing_invoice_id'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownload<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
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
        ? getGetAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
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
          client.ad_accounts[':ad_account_id'].billing_invoice[':billing_invoice_id'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdBillingInvoicesKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/billing_invoices', args] as const
}

export function useGetAdAccountsAdAccountIdBillingInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
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
        ? getGetAdAccountsAdAccountIdBillingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].billing_invoices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdBillingInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
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
        ? getGetAdAccountsAdAccountIdBillingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].billing_invoices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdBillingProfilesKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/billing_profiles', args] as const
}

export function useGetAdAccountsAdAccountIdBillingProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
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
        ? getGetAdAccountsAdAccountIdBillingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].billing_profiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdBillingProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
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
        ? getGetAdAccountsAdAccountIdBillingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].billing_profiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdBulkDownloadKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/bulk/download', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdBulkDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['bulk']['download']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bulk']['download']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdBulkDownloadKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['bulk']['download']['$post']
          >
        },
      ) =>
        parseResponse(client.ad_accounts[':ad_account_id'].bulk.download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdBulkUpsertKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/bulk/upsert', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdBulkUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['bulk']['upsert']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bulk']['upsert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdBulkUpsertKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['bulk']['upsert']['$post']
          >
        },
      ) =>
        parseResponse(client.ad_accounts[':ad_account_id'].bulk.upsert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdBulkBulkRequestIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/bulk/:bulk_request_id', args] as const
}

export function useGetAdAccountsAdAccountIdBulkBulkRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
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
        ? getGetAdAccountsAdAccountIdBulkBulkRequestIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
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
          client.ad_accounts[':ad_account_id'].bulk[':bulk_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdBulkBulkRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
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
        ? getGetAdAccountsAdAccountIdBulkBulkRequestIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
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
          client.ad_accounts[':ad_account_id'].bulk[':bulk_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdCampaignAdPreviewKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaign_ad_preview', args] as const
}

export function useGetAdAccountsAdAccountIdCampaignAdPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
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
        ? getGetAdAccountsAdAccountIdCampaignAdPreviewKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
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
          client.ad_accounts[':ad_account_id'].campaign_ad_preview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdCampaignAdPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
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
        ? getGetAdAccountsAdAccountIdCampaignAdPreviewKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
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
          client.ad_accounts[':ad_account_id'].campaign_ad_preview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdCampaignAdPreviewKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaign_ad_preview', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdCampaignAdPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdCampaignAdPreviewKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].campaign_ad_preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdAccountsAdAccountIdCampaignAdPreviewKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaign_ad_preview', 'DELETE'] as const
}

export function useDeleteAdAccountsAdAccountIdCampaignAdPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdAccountsAdAccountIdCampaignAdPreviewKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].campaign_ad_preview.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdCampaignsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns', args] as const
}

export function useGetAdAccountsAdAccountIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>>
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
        ? getGetAdAccountsAdAccountIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>>
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
        ? getGetAdAccountsAdAccountIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdCampaignsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdCampaignsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdCampaignsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['campaigns']['$patch']
          >
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].campaigns.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdCampaignsAnalyticsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns/analytics', args] as const
}

export function useGetAdAccountsAdAccountIdCampaignsAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdCampaignsAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].campaigns.analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdCampaignsAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdCampaignsAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].campaigns.analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdCampaignsDeliveryEstimatesKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/campaigns/delivery_estimates',
    'POST',
  ] as const
}

export function usePostAdAccountsAdAccountIdCampaignsDeliveryEstimates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['campaigns']['delivery_estimates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns']['delivery_estimates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdCampaignsDeliveryEstimatesKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['campaigns']['delivery_estimates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].campaigns.delivery_estimates.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdCampaignsTargetingAnalyticsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns/targeting_analytics', args] as const
}

export function useGetAdAccountsAdAccountIdCampaignsTargetingAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdCampaignsTargetingAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].campaigns.targeting_analytics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdCampaignsTargetingAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdCampaignsTargetingAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].campaigns.targeting_analytics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdCampaignsCampaignIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns/:campaign_id', args] as const
}

export function useGetAdAccountsAdAccountIdCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
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
        ? getGetAdAccountsAdAccountIdCampaignsCampaignIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
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
          client.ad_accounts[':ad_account_id'].campaigns[':campaign_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
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
        ? getGetAdAccountsAdAccountIdCampaignsCampaignIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
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
          client.ad_accounts[':ad_account_id'].campaigns[':campaign_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdConversionDeletionRequestsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_deletion_requests', args] as const
}

export function useGetAdAccountsAdAccountIdConversionDeletionRequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionDeletionRequestsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_deletion_requests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdConversionDeletionRequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionDeletionRequestsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_deletion_requests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdConversionDeletionRequestsKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_deletion_requests',
    'POST',
  ] as const
}

export function usePostAdAccountsAdAccountIdConversionDeletionRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdConversionDeletionRequestsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_deletion_requests.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdConversionDeletionRequestsRequestIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_deletion_requests/:request_id',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdConversionDeletionRequestsRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionDeletionRequestsRequestIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_deletion_requests[':request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdConversionDeletionRequestsRequestId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionDeletionRequestsRequestIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_deletion_requests[':request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_deletion_requests/:request_id',
    'DELETE',
  ] as const
}

export function useDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_deletion_requests[':request_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdConversionEqsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_eqs', args] as const
}

export function useGetAdAccountsAdAccountIdConversionEqs<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
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
        ? getGetAdAccountsAdAccountIdConversionEqsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_eqs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdConversionEqs<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
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
        ? getGetAdAccountsAdAccountIdConversionEqsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_eqs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdConversionSegmentsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_segments', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdConversionSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['conversion_segments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_segments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdConversionSegmentsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['conversion_segments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_segments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_segments/:conversion_segment_id',
    'DELETE',
  ] as const
}

export function useDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_segments[
            ':conversion_segment_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_segments/:conversion_segment_id',
    'PATCH',
  ] as const
}

export function usePatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_segments[':conversion_segment_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdConversionTagsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_tags', args] as const
}

export function useGetAdAccountsAdAccountIdConversionTags<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
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
        ? getGetAdAccountsAdAccountIdConversionTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdConversionTags<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
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
        ? getGetAdAccountsAdAccountIdConversionTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdConversionTagsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_tags', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdConversionTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdConversionTagsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_tags.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdConversionTagsOcpmEligibleKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_tags/ocpm_eligible', args] as const
}

export function useGetAdAccountsAdAccountIdConversionTagsOcpmEligible<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionTagsOcpmEligibleKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_tags.ocpm_eligible.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdConversionTagsOcpmEligible<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionTagsOcpmEligibleKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_tags.ocpm_eligible.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdConversionTagsPageVisitKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_tags/page_visit', args] as const
}

export function useGetAdAccountsAdAccountIdConversionTagsPageVisit<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionTagsPageVisitKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_tags.page_visit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdConversionTagsPageVisit<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionTagsPageVisitKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_tags.page_visit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdConversionTagsConversionTagIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_tags/:conversion_tag_id',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdConversionTagsConversionTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionTagsConversionTagIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_tags[':conversion_tag_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdConversionTagsConversionTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
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
        ? getGetAdAccountsAdAccountIdConversionTagsConversionTagIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
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
          client.ad_accounts[':ad_account_id'].conversion_tags[':conversion_tag_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdCustomerListsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_lists', args] as const
}

export function useGetAdAccountsAdAccountIdCustomerLists<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
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
        ? getGetAdAccountsAdAccountIdCustomerListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_lists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdCustomerLists<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
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
        ? getGetAdAccountsAdAccountIdCustomerListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_lists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdCustomerListsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_lists', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdCustomerLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdCustomerListsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_lists.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdCustomerListsCustomerListIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdCustomerListsCustomerListId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
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
        ? getGetAdAccountsAdAccountIdCustomerListsCustomerListIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
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
          client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdCustomerListsCustomerListId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
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
        ? getGetAdAccountsAdAccountIdCustomerListsCustomerListIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
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
          client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdCustomerListsCustomerListIdKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id',
    'PATCH',
  ] as const
}

export function usePatchAdAccountsAdAccountIdCustomerListsCustomerListId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdCustomerListsCustomerListIdKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id/uploads',
    'POST',
  ] as const
}

export function usePostAdAccountsAdAccountIdCustomerListsCustomerListIdUploads<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id/uploads/:customer_list_upload_id',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
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
        ? getGetAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
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
          client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads[
            ':customer_list_upload_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
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
        ? getGetAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
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
          client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads[
            ':customer_list_upload_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id/uploads/:customer_list_upload_id/run',
    'POST',
  ] as const
}

export function usePostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['run']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['run']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['run']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads[
            ':customer_list_upload_id'
          ].run.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdCustomerSegmentsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_segments', args] as const
}

export function useGetAdAccountsAdAccountIdCustomerSegments<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
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
        ? getGetAdAccountsAdAccountIdCustomerSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_segments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdCustomerSegments<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
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
        ? getGetAdAccountsAdAccountIdCustomerSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_segments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdCustomerSegmentsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_segments', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdCustomerSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdCustomerSegmentsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_segments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdCustomerSegmentsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_segments', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdCustomerSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdCustomerSegmentsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].customer_segments.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdEventsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/events', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdInsightsAudiencesKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/insights/audiences', args] as const
}

export function useGetAdAccountsAdAccountIdInsightsAudiences<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
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
        ? getGetAdAccountsAdAccountIdInsightsAudiencesKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
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
          client.ad_accounts[':ad_account_id'].insights.audiences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdInsightsAudiences<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
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
        ? getGetAdAccountsAdAccountIdInsightsAudiencesKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
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
          client.ad_accounts[':ad_account_id'].insights.audiences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdKeywordsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords', args] as const
}

export function useGetAdAccountsAdAccountIdKeywords<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
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
        ? getGetAdAccountsAdAccountIdKeywordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].keywords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdKeywords<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
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
        ? getGetAdAccountsAdAccountIdKeywordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].keywords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdKeywordsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdKeywords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdKeywordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].keywords.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdKeywordsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdKeywords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdKeywordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$patch']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].keywords.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdKeywordsMetricsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords/metrics', args] as const
}

export function useGetAdAccountsAdAccountIdKeywordsMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
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
        ? getGetAdAccountsAdAccountIdKeywordsMetricsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
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
          client.ad_accounts[':ad_account_id'].keywords.metrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdKeywordsMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
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
        ? getGetAdAccountsAdAccountIdKeywordsMetricsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
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
          client.ad_accounts[':ad_account_id'].keywords.metrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdLabelsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels', args] as const
}

export function useGetAdAccountsAdAccountIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
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
        ? getGetAdAccountsAdAccountIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
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
        ? getGetAdAccountsAdAccountIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdLabelsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdLabelsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].labels.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdLabelsLabelIdApplyKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels/:label_id/apply', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdLabelsLabelIdApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['apply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdLabelsLabelIdApplyKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['apply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].labels[':label_id'].apply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdLabelsLabelIdRemoveKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels/:label_id/remove', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdLabelsLabelIdRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdLabelsLabelIdRemoveKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].labels[':label_id'].remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdLeadFormsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/lead_forms', args] as const
}

export function useGetAdAccountsAdAccountIdLeadForms<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>>
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
        ? getGetAdAccountsAdAccountIdLeadFormsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].lead_forms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdLeadForms<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>>
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
        ? getGetAdAccountsAdAccountIdLeadFormsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].lead_forms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdLeadFormsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/lead_forms', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdLeadForms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdLeadFormsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$post']
          >
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].lead_forms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdLeadFormsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/lead_forms', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdLeadForms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdLeadFormsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$patch']
          >
        },
      ) =>
        parseResponse(client.ad_accounts[':ad_account_id'].lead_forms.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdLeadFormsLeadFormIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/lead_forms/:lead_form_id', args] as const
}

export function useGetAdAccountsAdAccountIdLeadFormsLeadFormId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
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
        ? getGetAdAccountsAdAccountIdLeadFormsLeadFormIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
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
          client.ad_accounts[':ad_account_id'].lead_forms[':lead_form_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdLeadFormsLeadFormId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
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
        ? getGetAdAccountsAdAccountIdLeadFormsLeadFormIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
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
          client.ad_accounts[':ad_account_id'].lead_forms[':lead_form_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdLeadFormsLeadFormIdTestKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/lead_forms/:lead_form_id/test',
    'POST',
  ] as const
}

export function usePostAdAccountsAdAccountIdLeadFormsLeadFormIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['test']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['test']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdLeadFormsLeadFormIdTestKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].lead_forms[':lead_form_id'].test.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdLeadsSubscriptionsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/leads/subscriptions', args] as const
}

export function useGetAdAccountsAdAccountIdLeadsSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
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
        ? getGetAdAccountsAdAccountIdLeadsSubscriptionsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
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
          client.ad_accounts[':ad_account_id'].leads.subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdLeadsSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
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
        ? getGetAdAccountsAdAccountIdLeadsSubscriptionsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
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
          client.ad_accounts[':ad_account_id'].leads.subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdLeadsSubscriptionsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/leads/subscriptions', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdLeadsSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdLeadsSubscriptionsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].leads.subscriptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/leads/subscriptions/:subscription_id',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
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
        ? getGetAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
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
          client.ad_accounts[':ad_account_id'].leads.subscriptions[':subscription_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
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
        ? getGetAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
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
          client.ad_accounts[':ad_account_id'].leads.subscriptions[':subscription_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/leads/subscriptions/:subscription_id',
    'DELETE',
  ] as const
}

export function useDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].leads.subscriptions[':subscription_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdLeadsExportKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/leads_export', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdLeadsExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['leads_export']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['leads_export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdLeadsExportKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['leads_export']['$post']
          >
        },
      ) =>
        parseResponse(client.ad_accounts[':ad_account_id'].leads_export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdLeadsExportLeadsExportIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/leads_export/:leads_export_id', args] as const
}

export function useGetAdAccountsAdAccountIdLeadsExportLeadsExportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
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
        ? getGetAdAccountsAdAccountIdLeadsExportLeadsExportIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
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
          client.ad_accounts[':ad_account_id'].leads_export[':leads_export_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdLeadsExportLeadsExportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
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
        ? getGetAdAccountsAdAccountIdLeadsExportLeadsExportIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
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
          client.ad_accounts[':ad_account_id'].leads_export[':leads_export_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdMmmReportsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/mmm_reports', args] as const
}

export function useGetAdAccountsAdAccountIdMmmReports<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>
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
        ? getGetAdAccountsAdAccountIdMmmReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].mmm_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdMmmReports<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>
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
        ? getGetAdAccountsAdAccountIdMmmReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].mmm_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdMmmReportsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/mmm_reports', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdMmmReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdMmmReportsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$post']
          >
        },
      ) =>
        parseResponse(client.ad_accounts[':ad_account_id'].mmm_reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdMsotEventsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/msot/events', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdMsotEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['msot']['events']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['msot']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdMsotEventsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['msot']['events']['$post']
          >
        },
      ) =>
        parseResponse(client.ad_accounts[':ad_account_id'].msot.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdOrderLinesKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/order_lines', args] as const
}

export function useGetAdAccountsAdAccountIdOrderLines<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>
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
        ? getGetAdAccountsAdAccountIdOrderLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].order_lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdOrderLines<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>
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
        ? getGetAdAccountsAdAccountIdOrderLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].order_lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdOrderLinesOrderLineIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/order_lines/:order_line_id', args] as const
}

export function useGetAdAccountsAdAccountIdOrderLinesOrderLineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
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
        ? getGetAdAccountsAdAccountIdOrderLinesOrderLineIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
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
          client.ad_accounts[':ad_account_id'].order_lines[':order_line_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdOrderLinesOrderLineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
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
        ? getGetAdAccountsAdAccountIdOrderLinesOrderLineIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
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
          client.ad_accounts[':ad_account_id'].order_lines[':order_line_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdPinsAnalyticsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/pins/analytics', args] as const
}

export function useGetAdAccountsAdAccountIdPinsAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
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
        ? getGetAdAccountsAdAccountIdPinsAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].pins.analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdPinsAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
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
        ? getGetAdAccountsAdAccountIdPinsAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].pins.analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdProductGroupPromotionsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/product_group_promotions', args] as const
}

export function useGetAdAccountsAdAccountIdProductGroupPromotions<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
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
        ? getGetAdAccountsAdAccountIdProductGroupPromotionsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
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
          client.ad_accounts[':ad_account_id'].product_group_promotions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdProductGroupPromotions<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
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
        ? getGetAdAccountsAdAccountIdProductGroupPromotionsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
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
          client.ad_accounts[':ad_account_id'].product_group_promotions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdProductGroupPromotionsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/product_group_promotions', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdProductGroupPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdProductGroupPromotionsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].product_group_promotions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdProductGroupPromotionsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/product_group_promotions', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdProductGroupPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdProductGroupPromotionsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].product_group_promotions.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/product_group_promotions/:product_group_promotion_id',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
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
        ? getGetAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
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
          client.ad_accounts[':ad_account_id'].product_group_promotions[
            ':product_group_promotion_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
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
        ? getGetAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
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
          client.ad_accounts[':ad_account_id'].product_group_promotions[
            ':product_group_promotion_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdProductGroupsAnalyticsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/product_groups/analytics', args] as const
}

export function useGetAdAccountsAdAccountIdProductGroupsAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdProductGroupsAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].product_groups.analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdProductGroupsAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdProductGroupsAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].product_groups.analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdPromotionAppliedEntitiesKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotion_applied_entities', args] as const
}

export function useGetAdAccountsAdAccountIdPromotionAppliedEntities<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
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
        ? getGetAdAccountsAdAccountIdPromotionAppliedEntitiesKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
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
          client.ad_accounts[':ad_account_id'].promotion_applied_entities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdPromotionAppliedEntities<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
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
        ? getGetAdAccountsAdAccountIdPromotionAppliedEntitiesKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
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
          client.ad_accounts[':ad_account_id'].promotion_applied_entities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdPromotionsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions', args] as const
}

export function useGetAdAccountsAdAccountIdPromotions<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>>
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
        ? getGetAdAccountsAdAccountIdPromotionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].promotions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdPromotions<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>>
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
        ? getGetAdAccountsAdAccountIdPromotionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].promotions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdPromotionsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdPromotionsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['promotions']['$post']
          >
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].promotions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdPromotionsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdPromotionsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['promotions']['$patch']
          >
        },
      ) =>
        parseResponse(client.ad_accounts[':ad_account_id'].promotions.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdPromotionsPromotionIdKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions/:promotion_id', args] as const
}

export function useGetAdAccountsAdAccountIdPromotionsPromotionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
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
        ? getGetAdAccountsAdAccountIdPromotionsPromotionIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
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
          client.ad_accounts[':ad_account_id'].promotions[':promotion_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdPromotionsPromotionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
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
        ? getGetAdAccountsAdAccountIdPromotionsPromotionIdKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
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
          client.ad_accounts[':ad_account_id'].promotions[':promotion_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdAccountsAdAccountIdPromotionsPromotionIdKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions/:promotion_id', 'DELETE'] as const
}

export function useDeleteAdAccountsAdAccountIdPromotionsPromotionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdAccountsAdAccountIdPromotionsPromotionIdKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].promotions[':promotion_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdPublisherBlocklistsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/publisher_blocklists', args] as const
}

export function useGetAdAccountsAdAccountIdPublisherBlocklists<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
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
        ? getGetAdAccountsAdAccountIdPublisherBlocklistsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
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
          client.ad_accounts[':ad_account_id'].publisher_blocklists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdPublisherBlocklists<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
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
        ? getGetAdAccountsAdAccountIdPublisherBlocklistsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
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
          client.ad_accounts[':ad_account_id'].publisher_blocklists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdPublisherBlocklistsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/publisher_blocklists', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdPublisherBlocklists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdPublisherBlocklistsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].publisher_blocklists.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdReportsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/reports', args] as const
}

export function useGetAdAccountsAdAccountIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
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
        ? getGetAdAccountsAdAccountIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
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
        ? getGetAdAccountsAdAccountIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdReportsKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/reports', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdReportsBrandCategorySkuKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/reports/brand_category_sku', args] as const
}

export function useGetAdAccountsAdAccountIdReportsBrandCategorySku<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
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
        ? getGetAdAccountsAdAccountIdReportsBrandCategorySkuKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
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
          client.ad_accounts[':ad_account_id'].reports.brand_category_sku.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdReportsBrandCategorySku<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
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
        ? getGetAdAccountsAdAccountIdReportsBrandCategorySkuKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
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
          client.ad_accounts[':ad_account_id'].reports.brand_category_sku.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdReportsBrandCategorySkuKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/reports/brand_category_sku', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdReportsBrandCategorySku<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdReportsBrandCategorySkuKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].reports.brand_category_sku.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdAccountsAdAccountIdSandboxKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/sandbox', 'DELETE'] as const
}

export function useDeleteAdAccountsAdAccountIdSandbox<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['sandbox']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['sandbox']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdAccountsAdAccountIdSandboxKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['sandbox']['$delete']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].sandbox.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdSchedulesKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/schedules', args] as const
}

export function useGetAdAccountsAdAccountIdSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>>
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
        ? getGetAdAccountsAdAccountIdSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>>
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
        ? getGetAdAccountsAdAccountIdSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdSchedulesKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/schedules', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$post']>
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdSchedulesKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/schedules', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdSchedulesKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['schedules']['$patch']
          >
        },
      ) => parseResponse(client.ad_accounts[':ad_account_id'].schedules.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdSsioAccountsKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/accounts', args] as const
}

export function useGetAdAccountsAdAccountIdSsioAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
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
        ? getGetAdAccountsAdAccountIdSsioAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ssio.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdSsioAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
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
        ? getGetAdAccountsAdAccountIdSsioAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].ssio.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdSsioInsertionOrdersKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/insertion_orders', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdSsioInsertionOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdSsioInsertionOrdersKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].ssio.insertion_orders.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdSsioInsertionOrdersKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/insertion_orders', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdSsioInsertionOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdSsioInsertionOrdersKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].ssio.insertion_orders.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdSsioInsertionOrdersStatusKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/insertion_orders/status', args] as const
}

export function useGetAdAccountsAdAccountIdSsioInsertionOrdersStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
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
        ? getGetAdAccountsAdAccountIdSsioInsertionOrdersStatusKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
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
          client.ad_accounts[':ad_account_id'].ssio.insertion_orders.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdSsioInsertionOrdersStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
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
        ? getGetAdAccountsAdAccountIdSsioInsertionOrdersStatusKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
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
          client.ad_accounts[':ad_account_id'].ssio.insertion_orders.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ssio/insertion_orders/:pin_order_id/status',
    args,
  ] as const
}

export function useGetAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
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
        ? getGetAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
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
          client.ad_accounts[':ad_account_id'].ssio.insertion_orders[':pin_order_id'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
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
        ? getGetAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
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
          client.ad_accounts[':ad_account_id'].ssio.insertion_orders[':pin_order_id'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdSsioOrderLinesKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/order_lines', args] as const
}

export function useGetAdAccountsAdAccountIdSsioOrderLines<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
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
        ? getGetAdAccountsAdAccountIdSsioOrderLinesKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
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
          client.ad_accounts[':ad_account_id'].ssio.order_lines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdSsioOrderLines<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
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
        ? getGetAdAccountsAdAccountIdSsioOrderLinesKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
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
          client.ad_accounts[':ad_account_id'].ssio.order_lines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdTargetingAnalyticsKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_analytics', args] as const
}

export function useGetAdAccountsAdAccountIdTargetingAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdTargetingAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].targeting_analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdTargetingAnalytics<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
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
        ? getGetAdAccountsAdAccountIdTargetingAnalyticsKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
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
          client.ad_accounts[':ad_account_id'].targeting_analytics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdTargetingTemplatesKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_templates', args] as const
}

export function useGetAdAccountsAdAccountIdTargetingTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
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
        ? getGetAdAccountsAdAccountIdTargetingTemplatesKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
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
          client.ad_accounts[':ad_account_id'].targeting_templates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdTargetingTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
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
        ? getGetAdAccountsAdAccountIdTargetingTemplatesKey(args)
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
                (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
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
          client.ad_accounts[':ad_account_id'].targeting_templates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdTargetingTemplatesKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_templates', 'POST'] as const
}

export function usePostAdAccountsAdAccountIdTargetingTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdTargetingTemplatesKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].targeting_templates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdAccountsAdAccountIdTargetingTemplatesKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_templates', 'PATCH'] as const
}

export function usePatchAdAccountsAdAccountIdTargetingTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdAccountsAdAccountIdTargetingTemplatesKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].targeting_templates.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdTemplatesKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/templates', args] as const
}

export function useGetAdAccountsAdAccountIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>>
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
        ? getGetAdAccountsAdAccountIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>>
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
        ? getGetAdAccountsAdAccountIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_accounts[':ad_account_id'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdAccountsAdAccountIdTemplatesTemplateIdReportsKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/templates/:template_id/reports',
    'POST',
  ] as const
}

export function usePostAdAccountsAdAccountIdTemplatesTemplateIdReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_accounts)[':ad_account_id']['templates'][':template_id']['reports']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['templates'][':template_id']['reports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdAccountsAdAccountIdTemplatesTemplateIdReportsKey()
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
            (typeof client.ad_accounts)[':ad_account_id']['templates'][':template_id']['reports']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].templates[':template_id'].reports.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdAccountsAdAccountIdTermsOfServiceKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/terms_of_service', args] as const
}

export function useGetAdAccountsAdAccountIdTermsOfService<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
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
        ? getGetAdAccountsAdAccountIdTermsOfServiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].terms_of_service.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdAccountsAdAccountIdTermsOfService<TError = unknown>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
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
        ? getGetAdAccountsAdAccountIdTermsOfServiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ad_accounts[':ad_account_id'].terms_of_service.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdvancedAuctionItemsGetKey() {
  return ['advanced_auction', '/advanced_auction/items/get', 'POST'] as const
}

export function usePostAdvancedAuctionItemsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.advanced_auction.items.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.advanced_auction.items.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdvancedAuctionItemsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.advanced_auction.items.get.$post> },
      ) => parseResponse(client.advanced_auction.items.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdvancedAuctionItemsSubmitKey() {
  return ['advanced_auction', '/advanced_auction/items/submit', 'POST'] as const
}

export function usePostAdvancedAuctionItemsSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.advanced_auction.items.submit.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.advanced_auction.items.submit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdvancedAuctionItemsSubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.advanced_auction.items.submit.$post> },
      ) => parseResponse(client.advanced_auction.items.submit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsKey(args: InferRequestType<typeof client.boards.$get>) {
  return ['boards', '/boards', args] as const
}

export function useGetBoards<TError = unknown>(
  args: InferRequestType<typeof client.boards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.boards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBoards<TError = unknown>(
  args: InferRequestType<typeof client.boards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.boards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostBoardsKey() {
  return ['boards', '/boards', 'POST'] as const
}

export function usePostBoards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.boards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.boards.$post> }) =>
        parseResponse(client.boards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsBoardIdKey(
  args: InferRequestType<(typeof client.boards)[':board_id']['$get']>,
) {
  return ['boards', '/boards/:board_id', args] as const
}

export function useGetBoardsBoardId<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':board_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBoardsBoardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':board_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsBoardId<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':board_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBoardsBoardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':board_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBoardsBoardIdKey() {
  return ['boards', '/boards/:board_id', 'DELETE'] as const
}

export function useDeleteBoardsBoardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':board_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBoardsBoardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':board_id']['$delete']> },
      ) => parseResponse(client.boards[':board_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBoardsBoardIdKey() {
  return ['boards', '/boards/:board_id', 'PATCH'] as const
}

export function usePatchBoardsBoardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':board_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBoardsBoardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':board_id']['$patch']> },
      ) => parseResponse(client.boards[':board_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsBoardIdPinsKey(
  args: InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>,
) {
  return ['boards', '/boards/:board_id/pins', args] as const
}

export function useGetBoardsBoardIdPins<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>
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
        ? getGetBoardsBoardIdPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':board_id'].pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsBoardIdPins<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>
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
        ? getGetBoardsBoardIdPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':board_id'].pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsBoardIdSectionsKey(
  args: InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>,
) {
  return ['boards', '/boards/:board_id/sections', args] as const
}

export function useGetBoardsBoardIdSections<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
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
        ? getGetBoardsBoardIdSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':board_id'].sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsBoardIdSections<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
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
        ? getGetBoardsBoardIdSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':board_id'].sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsBoardIdSectionsKey() {
  return ['boards', '/boards/:board_id/sections', 'POST'] as const
}

export function usePostBoardsBoardIdSections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':board_id']['sections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsBoardIdSectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.boards)[':board_id']['sections']['$post']> },
      ) => parseResponse(client.boards[':board_id'].sections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBoardsBoardIdSectionsSectionIdKey() {
  return ['boards', '/boards/:board_id/sections/:section_id', 'DELETE'] as const
}

export function useDeleteBoardsBoardIdSectionsSectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':board_id']['sections'][':section_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBoardsBoardIdSectionsSectionIdKey()
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
            (typeof client.boards)[':board_id']['sections'][':section_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.boards[':board_id'].sections[':section_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBoardsBoardIdSectionsSectionIdKey() {
  return ['boards', '/boards/:board_id/sections/:section_id', 'PATCH'] as const
}

export function usePatchBoardsBoardIdSectionsSectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':board_id']['sections'][':section_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBoardsBoardIdSectionsSectionIdKey()
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
            (typeof client.boards)[':board_id']['sections'][':section_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.boards[':board_id'].sections[':section_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsBoardIdSectionsSectionIdPinsKey(
  args: InferRequestType<
    (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
  >,
) {
  return ['boards', '/boards/:board_id/sections/:section_id/pins', args] as const
}

export function useGetBoardsBoardIdSectionsSectionIdPins<TError = unknown>(
  args: InferRequestType<
    (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
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
        ? getGetBoardsBoardIdSectionsSectionIdPinsKey(args)
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
                (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
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
          client.boards[':board_id'].sections[':section_id'].pins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsBoardIdSectionsSectionIdPins<TError = unknown>(
  args: InferRequestType<
    (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
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
        ? getGetBoardsBoardIdSectionsSectionIdPinsKey(args)
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
                (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
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
          client.boards[':board_id'].sections[':section_id'].pins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsKey() {
  return [
    'business_access',
    '/business_access/business_hierarchy/:business_hierarchy_id/brand_accounts',
    'POST',
  ] as const
}

export function usePostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccounts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsKey()
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
            (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_access.business_hierarchy[':business_hierarchy_id'].brand_accounts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdKey() {
  return [
    'business_access',
    '/business_access/business_hierarchy/:business_hierarchy_id/brand_accounts/:brand_account_id',
    'PATCH',
  ] as const
}

export function usePatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts'][':brand_account_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts'][':brand_account_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdKey()
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
            (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts'][':brand_account_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.business_access.business_hierarchy[':business_hierarchy_id'].brand_accounts[
            ':brand_account_id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionKey() {
  return [
    'business_access',
    '/business_access/business_rmn_invites/:business_relationship_invite_id/auth_process_action',
    'POST',
  ] as const
}

export function usePostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.business_access.business_rmn_invites)[':business_relationship_invite_id']['auth_process_action']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.business_access.business_rmn_invites)[':business_relationship_invite_id']['auth_process_action']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionKey()
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
            (typeof client.business_access.business_rmn_invites)[':business_relationship_invite_id']['auth_process_action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.business_access.business_rmn_invites[
            ':business_relationship_invite_id'
          ].auth_process_action.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesEmployersKey(
  args: InferRequestType<typeof client.businesses.employers.$get>,
) {
  return ['businesses', '/businesses/employers', args] as const
}

export function useGetBusinessesEmployers<TError = unknown>(
  args: InferRequestType<typeof client.businesses.employers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>
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
        ? getGetBusinessesEmployersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businesses.employers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesEmployers<TError = unknown>(
  args: InferRequestType<typeof client.businesses.employers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>
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
        ? getGetBusinessesEmployersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businesses.employers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchBusinessesInvitesKey() {
  return ['businesses', '/businesses/invites', 'PATCH'] as const
}

export function usePatchBusinessesInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.invites.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.businesses.invites.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.businesses.invites.$patch> }) =>
        parseResponse(client.businesses.invites.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdAdAccountRequestsKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/ad_account_requests', args] as const
}

export function useGetBusinessesBusinessIdAdAccountRequests<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
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
        ? getGetBusinessesBusinessIdAdAccountRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.businesses[':business_id'].ad_account_requests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdAdAccountRequests<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
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
        ? getGetBusinessesBusinessIdAdAccountRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.businesses[':business_id'].ad_account_requests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessesBusinessIdAdAccountRequestsAcceptKey() {
  return ['businesses', '/businesses/:business_id/ad_account_requests/accept', 'POST'] as const
}

export function usePostBusinessesBusinessIdAdAccountRequestsAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['ad_account_requests']['accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['ad_account_requests']['accept']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesBusinessIdAdAccountRequestsAcceptKey()
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
            (typeof client.businesses)[':business_id']['ad_account_requests']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].ad_account_requests.accept.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessesBusinessIdAdAccountRequestsRejectKey() {
  return ['businesses', '/businesses/:business_id/ad_account_requests/reject', 'POST'] as const
}

export function usePostBusinessesBusinessIdAdAccountRequestsReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['ad_account_requests']['reject']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['ad_account_requests']['reject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesBusinessIdAdAccountRequestsRejectKey()
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
            (typeof client.businesses)[':business_id']['ad_account_requests']['reject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].ad_account_requests.reject.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdAnalyticsKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/analytics', args] as const
}

export function useGetBusinessesBusinessIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
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
        ? getGetBusinessesBusinessIdAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
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
        ? getGetBusinessesBusinessIdAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdAnalyticsAggregatedTimelineKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/analytics/aggregated_timeline', args] as const
}

export function useGetBusinessesBusinessIdAnalyticsAggregatedTimeline<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
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
        ? getGetBusinessesBusinessIdAnalyticsAggregatedTimelineKey(args)
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
                (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
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
          client.businesses[':business_id'].analytics.aggregated_timeline.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdAnalyticsAggregatedTimeline<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
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
        ? getGetBusinessesBusinessIdAnalyticsAggregatedTimelineKey(args)
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
                (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
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
          client.businesses[':business_id'].analytics.aggregated_timeline.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessesBusinessIdAssetGroupsKey() {
  return ['businesses', '/businesses/:business_id/asset_groups', 'POST'] as const
}

export function usePostBusinessesBusinessIdAssetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['asset_groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesBusinessIdAssetGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$post']>
        },
      ) => parseResponse(client.businesses[':business_id'].asset_groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBusinessesBusinessIdAssetGroupsKey() {
  return ['businesses', '/businesses/:business_id/asset_groups', 'DELETE'] as const
}

export function useDeleteBusinessesBusinessIdAssetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['asset_groups']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessesBusinessIdAssetGroupsKey()
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
            (typeof client.businesses)[':business_id']['asset_groups']['$delete']
          >
        },
      ) =>
        parseResponse(client.businesses[':business_id'].asset_groups.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessesBusinessIdAssetGroupsKey() {
  return ['businesses', '/businesses/:business_id/asset_groups', 'PATCH'] as const
}

export function usePatchBusinessesBusinessIdAssetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['asset_groups']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesBusinessIdAssetGroupsKey()
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
            (typeof client.businesses)[':business_id']['asset_groups']['$patch']
          >
        },
      ) => parseResponse(client.businesses[':business_id'].asset_groups.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdAssetsKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/assets', args] as const
}

export function useGetBusinessesBusinessIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
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
        ? getGetBusinessesBusinessIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businesses[':business_id'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
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
        ? getGetBusinessesBusinessIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businesses[':business_id'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdAssetsAssetIdMembersKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/assets/:asset_id/members', args] as const
}

export function useGetBusinessesBusinessIdAssetsAssetIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
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
        ? getGetBusinessesBusinessIdAssetsAssetIdMembersKey(args)
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
                (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
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
          client.businesses[':business_id'].assets[':asset_id'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdAssetsAssetIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
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
        ? getGetBusinessesBusinessIdAssetsAssetIdMembersKey(args)
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
                (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
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
          client.businesses[':business_id'].assets[':asset_id'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdAssetsAssetIdPartnersKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/assets/:asset_id/partners', args] as const
}

export function useGetBusinessesBusinessIdAssetsAssetIdPartners<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
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
        ? getGetBusinessesBusinessIdAssetsAssetIdPartnersKey(args)
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
                (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
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
          client.businesses[':business_id'].assets[':asset_id'].partners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdAssetsAssetIdPartners<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
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
        ? getGetBusinessesBusinessIdAssetsAssetIdPartnersKey(args)
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
                (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
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
          client.businesses[':business_id'].assets[':asset_id'].partners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdAudiencesKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/audiences', args] as const
}

export function useGetBusinessesBusinessIdAudiences<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
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
        ? getGetBusinessesBusinessIdAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdAudiences<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
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
        ? getGetBusinessesBusinessIdAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchBusinessesBusinessIdAudiencesAdAccountsSharedKey() {
  return ['businesses', '/businesses/:business_id/audiences/ad_accounts/shared', 'PATCH'] as const
}

export function usePatchBusinessesBusinessIdAudiencesAdAccountsShared<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['audiences']['ad_accounts']['shared']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['audiences']['ad_accounts']['shared']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesBusinessIdAudiencesAdAccountsSharedKey()
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
            (typeof client.businesses)[':business_id']['audiences']['ad_accounts']['shared']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].audiences.ad_accounts.shared.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessesBusinessIdAudiencesBusinessesSharedKey() {
  return ['businesses', '/businesses/:business_id/audiences/businesses/shared', 'PATCH'] as const
}

export function usePatchBusinessesBusinessIdAudiencesBusinessesShared<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['audiences']['businesses']['shared']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['audiences']['businesses']['shared']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesBusinessIdAudiencesBusinessesSharedKey()
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
            (typeof client.businesses)[':business_id']['audiences']['businesses']['shared']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].audiences.businesses.shared.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdAudiencesSharedAccountsKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/audiences/shared/accounts', args] as const
}

export function useGetBusinessesBusinessIdAudiencesSharedAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
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
        ? getGetBusinessesBusinessIdAudiencesSharedAccountsKey(args)
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
                (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
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
          client.businesses[':business_id'].audiences.shared.accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdAudiencesSharedAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
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
        ? getGetBusinessesBusinessIdAudiencesSharedAccountsKey(args)
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
                (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
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
          client.businesses[':business_id'].audiences.shared.accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdInvitesKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/invites', args] as const
}

export function useGetBusinessesBusinessIdInvites<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
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
        ? getGetBusinessesBusinessIdInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdInvites<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
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
        ? getGetBusinessesBusinessIdInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessesBusinessIdInvitesKey() {
  return ['businesses', '/businesses/:business_id/invites', 'POST'] as const
}

export function usePostBusinessesBusinessIdInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['invites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesBusinessIdInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$post']>
        },
      ) => parseResponse(client.businesses[':business_id'].invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBusinessesBusinessIdInvitesKey() {
  return ['businesses', '/businesses/:business_id/invites', 'DELETE'] as const
}

export function useDeleteBusinessesBusinessIdInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['invites']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessesBusinessIdInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$delete']>
        },
      ) => parseResponse(client.businesses[':business_id'].invites.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessesBusinessIdInvitesAssetsAccessKey() {
  return ['businesses', '/businesses/:business_id/invites/assets/access', 'POST'] as const
}

export function usePostBusinessesBusinessIdInvitesAssetsAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['invites']['assets']['access']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['invites']['assets']['access']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesBusinessIdInvitesAssetsAccessKey()
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
            (typeof client.businesses)[':business_id']['invites']['assets']['access']['$post']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].invites.assets.access.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdMembersKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/members', args] as const
}

export function useGetBusinessesBusinessIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
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
        ? getGetBusinessesBusinessIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
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
        ? getGetBusinessesBusinessIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBusinessesBusinessIdMembersKey() {
  return ['businesses', '/businesses/:business_id/members', 'DELETE'] as const
}

export function useDeleteBusinessesBusinessIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['members']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessesBusinessIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.businesses)[':business_id']['members']['$delete']>
        },
      ) => parseResponse(client.businesses[':business_id'].members.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessesBusinessIdMembersKey() {
  return ['businesses', '/businesses/:business_id/members', 'PATCH'] as const
}

export function usePatchBusinessesBusinessIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['members']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesBusinessIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.businesses)[':business_id']['members']['$patch']>
        },
      ) => parseResponse(client.businesses[':business_id'].members.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBusinessesBusinessIdMembersAssetsAccessKey() {
  return ['businesses', '/businesses/:business_id/members/assets/access', 'DELETE'] as const
}

export function useDeleteBusinessesBusinessIdMembersAssetsAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['members']['assets']['access']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['members']['assets']['access']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessesBusinessIdMembersAssetsAccessKey()
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
            (typeof client.businesses)[':business_id']['members']['assets']['access']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].members.assets.access.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessesBusinessIdMembersAssetsAccessKey() {
  return ['businesses', '/businesses/:business_id/members/assets/access', 'PATCH'] as const
}

export function usePatchBusinessesBusinessIdMembersAssetsAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['members']['assets']['access']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['members']['assets']['access']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesBusinessIdMembersAssetsAccessKey()
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
            (typeof client.businesses)[':business_id']['members']['assets']['access']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].members.assets.access.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdMembersMemberIdAssetsKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/members/:member_id/assets', args] as const
}

export function useGetBusinessesBusinessIdMembersMemberIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
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
        ? getGetBusinessesBusinessIdMembersMemberIdAssetsKey(args)
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
                (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
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
          client.businesses[':business_id'].members[':member_id'].assets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdMembersMemberIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
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
        ? getGetBusinessesBusinessIdMembersMemberIdAssetsKey(args)
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
                (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
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
          client.businesses[':business_id'].members[':member_id'].assets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdPartnersKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/partners', args] as const
}

export function useGetBusinessesBusinessIdPartners<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
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
        ? getGetBusinessesBusinessIdPartnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].partners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdPartners<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
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
        ? getGetBusinessesBusinessIdPartnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.businesses[':business_id'].partners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBusinessesBusinessIdPartnersKey() {
  return ['businesses', '/businesses/:business_id/partners', 'DELETE'] as const
}

export function useDeleteBusinessesBusinessIdPartners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['partners']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessesBusinessIdPartnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.businesses)[':business_id']['partners']['$delete']>
        },
      ) => parseResponse(client.businesses[':business_id'].partners.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBusinessesBusinessIdPartnersAssetsKey() {
  return ['businesses', '/businesses/:business_id/partners/assets', 'DELETE'] as const
}

export function useDeleteBusinessesBusinessIdPartnersAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.businesses)[':business_id']['partners']['assets']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['partners']['assets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessesBusinessIdPartnersAssetsKey()
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
            (typeof client.businesses)[':business_id']['partners']['assets']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].partners.assets.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessesBusinessIdPartnersAssetsKey() {
  return ['businesses', '/businesses/:business_id/partners/assets', 'PATCH'] as const
}

export function usePatchBusinessesBusinessIdPartnersAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.businesses)[':business_id']['partners']['assets']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':business_id']['partners']['assets']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesBusinessIdPartnersAssetsKey()
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
            (typeof client.businesses)[':business_id']['partners']['assets']['$patch']
          >
        },
      ) =>
        parseResponse(client.businesses[':business_id'].partners.assets.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessesBusinessIdPartnersPartnerIdAdAccountRequestKey() {
  return [
    'businesses',
    '/businesses/:business_id/partners/:partner_id/ad_account_request',
    'POST',
  ] as const
}

export function usePostBusinessesBusinessIdPartnersPartnerIdAdAccountRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_request']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesBusinessIdPartnersPartnerIdAdAccountRequestKey()
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
            (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_request']['$post']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].partners[':partner_id'].ad_account_request.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdKey() {
  return [
    'businesses',
    '/businesses/:business_id/partners/:partner_id/ad_account_requests/:agency_owned_ad_account_request_id',
    'DELETE',
  ] as const
}

export function useDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdKey()
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
            (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].partners[':partner_id'].ad_account_requests[
            ':agency_owned_ad_account_request_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdKey() {
  return [
    'businesses',
    '/businesses/:business_id/partners/:partner_id/ad_account_requests/:agency_owned_ad_account_request_id',
    'PATCH',
  ] as const
}

export function usePatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdKey()
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
            (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].partners[':partner_id'].ad_account_requests[
            ':agency_owned_ad_account_request_id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdPartnersPartnerIdAssetsKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/partners/:partner_id/assets', args] as const
}

export function useGetBusinessesBusinessIdPartnersPartnerIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
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
        ? getGetBusinessesBusinessIdPartnersPartnerIdAssetsKey(args)
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
                (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
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
          client.businesses[':business_id'].partners[':partner_id'].assets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdPartnersPartnerIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
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
        ? getGetBusinessesBusinessIdPartnersPartnerIdAssetsKey(args)
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
                (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
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
          client.businesses[':business_id'].partners[':partner_id'].assets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessesBusinessIdRequestsAssetsAccessKey() {
  return ['businesses', '/businesses/:business_id/requests/assets/access', 'POST'] as const
}

export function usePostBusinessesBusinessIdRequestsAssetsAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['requests']['assets']['access']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['requests']['assets']['access']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesBusinessIdRequestsAssetsAccessKey()
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
            (typeof client.businesses)[':business_id']['requests']['assets']['access']['$post']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].requests.assets.access.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdRmnContractsContractIdKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/rmn/contracts/:contract_id', args] as const
}

export function useGetBusinessesBusinessIdRmnContractsContractId<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
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
        ? getGetBusinessesBusinessIdRmnContractsContractIdKey(args)
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
                (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
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
          client.businesses[':business_id'].rmn.contracts[':contract_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdRmnContractsContractId<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
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
        ? getGetBusinessesBusinessIdRmnContractsContractIdKey(args)
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
                (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
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
          client.businesses[':business_id'].rmn.contracts[':contract_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchBusinessesBusinessIdRmnContractsContractIdProcessKey() {
  return [
    'businesses',
    '/businesses/:business_id/rmn/contracts/:contract_id/process',
    'PATCH',
  ] as const
}

export function usePatchBusinessesBusinessIdRmnContractsContractIdProcess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['process']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['process']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesBusinessIdRmnContractsContractIdProcessKey()
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
            (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['process']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].rmn.contracts[':contract_id'].process.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/rmn/partners/:partner_id/allowed_domains',
    args,
  ] as const
}

export function useGetBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomains<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
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
        ? getGetBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsKey(args)
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
                (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
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
          client.businesses[':business_id'].rmn.partners[':partner_id'].allowed_domains.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomains<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
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
        ? getGetBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsKey(args)
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
                (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
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
          client.businesses[':business_id'].rmn.partners[':partner_id'].allowed_domains.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/rmn/partners/:partner_id/contracts/history',
    args,
  ] as const
}

export function useGetBusinessesBusinessIdRmnPartnersPartnerIdContractsHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
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
        ? getGetBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryKey(args)
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
                (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
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
          client.businesses[':business_id'].rmn.partners[':partner_id'].contracts.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesBusinessIdRmnPartnersPartnerIdContractsHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
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
        ? getGetBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryKey(args)
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
                (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
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
          client.businesses[':business_id'].rmn.partners[':partner_id'].contracts.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessesBusinessIdRmnPartnersPartnerIdInviteKey() {
  return ['businesses', '/businesses/:business_id/rmn/partners/:partner_id/invite', 'POST'] as const
}

export function usePostBusinessesBusinessIdRmnPartnersPartnerIdInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['invite']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['invite']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesBusinessIdRmnPartnersPartnerIdInviteKey()
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
            (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['invite']['$post']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].rmn.partners[':partner_id'].invite.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessesBusinessIdSystemUsersSystemUserIdKey() {
  return ['businesses', '/businesses/:business_id/system_users/:system_user_id', 'PATCH'] as const
}

export function usePatchBusinessesBusinessIdSystemUsersSystemUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.businesses)[':business_id']['system_users'][':system_user_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.businesses)[':business_id']['system_users'][':system_user_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesBusinessIdSystemUsersSystemUserIdKey()
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
            (typeof client.businesses)[':business_id']['system_users'][':system_user_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.businesses[':business_id'].system_users[':system_user_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsKey(args: InferRequestType<typeof client.catalogs.$get>) {
  return ['catalogs', '/catalogs', args] as const
}

export function useGetCatalogs<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.catalogs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCatalogs<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.catalogs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCatalogsKey() {
  return ['catalogs', '/catalogs', 'POST'] as const
}

export function usePostCatalogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.catalogs.$post> }) =>
        parseResponse(client.catalogs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsAvailableFilterValuesKey(
  args: InferRequestType<typeof client.catalogs.available_filter_values.$get>,
) {
  return ['catalogs', '/catalogs/available_filter_values', args] as const
}

export function useGetCatalogsAvailableFilterValues<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.available_filter_values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>
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
        ? getGetCatalogsAvailableFilterValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.available_filter_values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsAvailableFilterValues<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.available_filter_values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>
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
        ? getGetCatalogsAvailableFilterValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.available_filter_values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogsFeedsKey(args: InferRequestType<typeof client.catalogs.feeds.$get>) {
  return ['catalogs', '/catalogs/feeds', args] as const
}

export function useGetCatalogsFeeds<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.feeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsFeedsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.feeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsFeeds<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.feeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsFeedsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.feeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsFeedsKey() {
  return ['catalogs', '/catalogs/feeds', 'POST'] as const
}

export function usePostCatalogsFeeds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.feeds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsFeedsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.catalogs.feeds.$post> }) =>
        parseResponse(client.catalogs.feeds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsFeedsFeedIdKey(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>,
) {
  return ['catalogs', '/catalogs/feeds/:feed_id', args] as const
}

export function useGetCatalogsFeedsFeedId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>
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
        ? getGetCatalogsFeedsFeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.feeds[':feed_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsFeedsFeedId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>
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
        ? getGetCatalogsFeedsFeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.feeds[':feed_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCatalogsFeedsFeedIdKey() {
  return ['catalogs', '/catalogs/feeds/:feed_id', 'DELETE'] as const
}

export function useDeleteCatalogsFeedsFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCatalogsFeedsFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$delete']> },
      ) => parseResponse(client.catalogs.feeds[':feed_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCatalogsFeedsFeedIdKey() {
  return ['catalogs', '/catalogs/feeds/:feed_id', 'PATCH'] as const
}

export function usePatchCatalogsFeedsFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCatalogsFeedsFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$patch']> },
      ) => parseResponse(client.catalogs.feeds[':feed_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCatalogsFeedsFeedIdIngestKey() {
  return ['catalogs', '/catalogs/feeds/:feed_id/ingest', 'POST'] as const
}

export function usePostCatalogsFeedsFeedIdIngest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['ingest']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['ingest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsFeedsFeedIdIngestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['ingest']['$post']> },
      ) => parseResponse(client.catalogs.feeds[':feed_id'].ingest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsFeedsFeedIdProcessingResultsKey(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>,
) {
  return ['catalogs', '/catalogs/feeds/:feed_id/processing_results', args] as const
}

export function useGetCatalogsFeedsFeedIdProcessingResults<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
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
        ? getGetCatalogsFeedsFeedIdProcessingResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.catalogs.feeds[':feed_id'].processing_results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsFeedsFeedIdProcessingResults<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
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
        ? getGetCatalogsFeedsFeedIdProcessingResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.catalogs.feeds[':feed_id'].processing_results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsItemsKey() {
  return ['catalogs', '/catalogs/items', 'POST'] as const
}

export function usePostCatalogsItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.items.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.catalogs.items.$post> }) =>
        parseResponse(client.catalogs.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCatalogsItemsBatchKey() {
  return ['catalogs', '/catalogs/items/batch', 'POST'] as const
}

export function usePostCatalogsItemsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.items.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.items.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsItemsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.catalogs.items.batch.$post> },
      ) => parseResponse(client.catalogs.items.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsItemsBatchBatchIdKey(
  args: InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>,
) {
  return ['catalogs', '/catalogs/items/batch/:batch_id', args] as const
}

export function useGetCatalogsItemsBatchBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
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
        ? getGetCatalogsItemsBatchBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.items.batch[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsItemsBatchBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
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
        ? getGetCatalogsItemsBatchBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.items.batch[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogsProcessingResultsProcessingResultIdItemIssuesKey(
  args: InferRequestType<
    (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
  >,
) {
  return [
    'catalogs',
    '/catalogs/processing_results/:processing_result_id/item_issues',
    args,
  ] as const
}

export function useGetCatalogsProcessingResultsProcessingResultIdItemIssues<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
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
        ? getGetCatalogsProcessingResultsProcessingResultIdItemIssuesKey(args)
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
                (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
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
          client.catalogs.processing_results[':processing_result_id'].item_issues.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsProcessingResultsProcessingResultIdItemIssues<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
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
        ? getGetCatalogsProcessingResultsProcessingResultIdItemIssuesKey(args)
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
                (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
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
          client.catalogs.processing_results[':processing_result_id'].item_issues.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogsProductGroupsKey(
  args: InferRequestType<typeof client.catalogs.product_groups.$get>,
) {
  return ['catalogs', '/catalogs/product_groups', args] as const
}

export function useGetCatalogsProductGroups<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.product_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
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
        ? getGetCatalogsProductGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.product_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsProductGroups<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.product_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
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
        ? getGetCatalogsProductGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.product_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsProductGroupsKey() {
  return ['catalogs', '/catalogs/product_groups', 'POST'] as const
}

export function usePostCatalogsProductGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.product_groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsProductGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.catalogs.product_groups.$post> },
      ) => parseResponse(client.catalogs.product_groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCatalogsProductGroupsMultipleKey() {
  return ['catalogs', '/catalogs/product_groups/multiple', 'POST'] as const
}

export function usePostCatalogsProductGroupsMultiple<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.catalogs.product_groups.multiple.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.product_groups.multiple.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsProductGroupsMultipleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.catalogs.product_groups.multiple.$post> },
      ) => parseResponse(client.catalogs.product_groups.multiple.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCatalogsProductGroupsMultipleKey() {
  return ['catalogs', '/catalogs/product_groups/multiple', 'DELETE'] as const
}

export function useDeleteCatalogsProductGroupsMultiple<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.catalogs.product_groups.multiple.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.product_groups.multiple.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCatalogsProductGroupsMultipleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.catalogs.product_groups.multiple.$delete> },
      ) => parseResponse(client.catalogs.product_groups.multiple.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsProductGroupsProductGroupIdKey(
  args: InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>,
) {
  return ['catalogs', '/catalogs/product_groups/:product_group_id', args] as const
}

export function useGetCatalogsProductGroupsProductGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>
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
        ? getGetCatalogsProductGroupsProductGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.catalogs.product_groups[':product_group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsProductGroupsProductGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>
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
        ? getGetCatalogsProductGroupsProductGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.catalogs.product_groups[':product_group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCatalogsProductGroupsProductGroupIdKey() {
  return ['catalogs', '/catalogs/product_groups/:product_group_id', 'DELETE'] as const
}

export function useDeleteCatalogsProductGroupsProductGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCatalogsProductGroupsProductGroupIdKey()
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
            (typeof client.catalogs.product_groups)[':product_group_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.catalogs.product_groups[':product_group_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCatalogsProductGroupsProductGroupIdKey() {
  return ['catalogs', '/catalogs/product_groups/:product_group_id', 'PATCH'] as const
}

export function usePatchCatalogsProductGroupsProductGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCatalogsProductGroupsProductGroupIdKey()
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
            (typeof client.catalogs.product_groups)[':product_group_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.catalogs.product_groups[':product_group_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsProductGroupsProductGroupIdProductCountsKey(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
  >,
) {
  return ['catalogs', '/catalogs/product_groups/:product_group_id/product_counts', args] as const
}

export function useGetCatalogsProductGroupsProductGroupIdProductCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
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
        ? getGetCatalogsProductGroupsProductGroupIdProductCountsKey(args)
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
                (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
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
          client.catalogs.product_groups[':product_group_id'].product_counts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsProductGroupsProductGroupIdProductCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
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
        ? getGetCatalogsProductGroupsProductGroupIdProductCountsKey(args)
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
                (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
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
          client.catalogs.product_groups[':product_group_id'].product_counts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogsProductGroupsProductGroupIdProductsKey(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
  >,
) {
  return ['catalogs', '/catalogs/product_groups/:product_group_id/products', args] as const
}

export function useGetCatalogsProductGroupsProductGroupIdProducts<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
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
        ? getGetCatalogsProductGroupsProductGroupIdProductsKey(args)
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
                (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
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
          client.catalogs.product_groups[':product_group_id'].products.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsProductGroupsProductGroupIdProducts<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
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
        ? getGetCatalogsProductGroupsProductGroupIdProductsKey(args)
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
                (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
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
          client.catalogs.product_groups[':product_group_id'].products.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsProductsGetByProductGroupFiltersKey() {
  return ['catalogs', '/catalogs/products/get_by_product_group_filters', 'POST'] as const
}

export function usePostCatalogsProductsGetByProductGroupFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.catalogs.products.get_by_product_group_filters.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.products.get_by_product_group_filters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsProductsGetByProductGroupFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.catalogs.products.get_by_product_group_filters.$post>
        },
      ) =>
        parseResponse(
          client.catalogs.products.get_by_product_group_filters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsReportsKey(
  args: InferRequestType<typeof client.catalogs.reports.$get>,
) {
  return ['catalogs', '/catalogs/reports', args] as const
}

export function useGetCatalogsReports<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
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
        ? getGetCatalogsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsReports<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
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
        ? getGetCatalogsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsReportsKey() {
  return ['catalogs', '/catalogs/reports', 'POST'] as const
}

export function usePostCatalogsReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.catalogs.reports.$post> }) =>
        parseResponse(client.catalogs.reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsReportsStatsKey(
  args: InferRequestType<typeof client.catalogs.reports.stats.$get>,
) {
  return ['catalogs', '/catalogs/reports/stats', args] as const
}

export function useGetCatalogsReportsStats<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.reports.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>
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
        ? getGetCatalogsReportsStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.reports.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsReportsStats<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.reports.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>
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
        ? getGetCatalogsReportsStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.reports.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogsSupplementalFeedsKey(
  args: InferRequestType<typeof client.catalogs.supplemental_feeds.$get>,
) {
  return ['catalogs', '/catalogs/supplemental_feeds', args] as const
}

export function useGetCatalogsSupplementalFeeds<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.supplemental_feeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>>
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
        ? getGetCatalogsSupplementalFeedsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.supplemental_feeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsSupplementalFeeds<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.supplemental_feeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>>
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
        ? getGetCatalogsSupplementalFeedsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.supplemental_feeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsSupplementalFeedsKey() {
  return ['catalogs', '/catalogs/supplemental_feeds', 'POST'] as const
}

export function usePostCatalogsSupplementalFeeds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.supplemental_feeds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsSupplementalFeedsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.catalogs.supplemental_feeds.$post> },
      ) => parseResponse(client.catalogs.supplemental_feeds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsSupplementalFeedsFeedIdKey(
  args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>,
) {
  return ['catalogs', '/catalogs/supplemental_feeds/:feed_id', args] as const
}

export function useGetCatalogsSupplementalFeedsFeedId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
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
        ? getGetCatalogsSupplementalFeedsFeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.catalogs.supplemental_feeds[':feed_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsSupplementalFeedsFeedId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
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
        ? getGetCatalogsSupplementalFeedsFeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.catalogs.supplemental_feeds[':feed_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCatalogsSupplementalFeedsFeedIdKey() {
  return ['catalogs', '/catalogs/supplemental_feeds/:feed_id', 'DELETE'] as const
}

export function useDeleteCatalogsSupplementalFeedsFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCatalogsSupplementalFeedsFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$delete']>
        },
      ) =>
        parseResponse(client.catalogs.supplemental_feeds[':feed_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCatalogsSupplementalFeedsFeedIdKey() {
  return ['catalogs', '/catalogs/supplemental_feeds/:feed_id', 'PATCH'] as const
}

export function usePatchCatalogsSupplementalFeedsFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCatalogsSupplementalFeedsFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>
        },
      ) => parseResponse(client.catalogs.supplemental_feeds[':feed_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCatalogsCatalogIdKey() {
  return ['catalogs', '/catalogs/:catalog_id', 'PATCH'] as const
}

export function usePatchCatalogsCatalogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCatalogsCatalogIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.catalogs)[':catalog_id']['$patch']> },
      ) => parseResponse(client.catalogs[':catalog_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCatalogsCatalogIdAutoLocalizationConfigsKey() {
  return ['catalogs', '/catalogs/:catalog_id/auto_localization_configs', 'POST'] as const
}

export function usePostCatalogsCatalogIdAutoLocalizationConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalog_id']['auto_localization_configs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['auto_localization_configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsCatalogIdAutoLocalizationConfigsKey()
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
            (typeof client.catalogs)[':catalog_id']['auto_localization_configs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalog_id'].auto_localization_configs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
  >,
) {
  return [
    'catalogs',
    '/catalogs/:catalog_id/auto_localization_configs/:auto_localization_config_id',
    args,
  ] as const
}

export function useGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
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
        ? getGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdKey(args)
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
                (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
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
          client.catalogs[':catalog_id'].auto_localization_configs[
            ':auto_localization_config_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
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
        ? getGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdKey(args)
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
                (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
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
          client.catalogs[':catalog_id'].auto_localization_configs[
            ':auto_localization_config_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdKey() {
  return [
    'catalogs',
    '/catalogs/:catalog_id/auto_localization_configs/:auto_localization_config_id',
    'PUT',
  ] as const
}

export function usePutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdKey()
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
            (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalog_id'].auto_localization_configs[
            ':auto_localization_config_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
  >,
) {
  return [
    'catalogs',
    '/catalogs/:catalog_id/auto_localization_configs/:auto_localization_config_id/translations',
    args,
  ] as const
}

export function useGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
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
        ? getGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsKey(
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
                (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
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
          client.catalogs[':catalog_id'].auto_localization_configs[
            ':auto_localization_config_id'
          ].translations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
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
        ? getGetCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsKey(
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
                (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
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
          client.catalogs[':catalog_id'].auto_localization_configs[
            ':auto_localization_config_id'
          ].translations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewKey() {
  return [
    'catalogs',
    '/catalogs/:catalog_id/auto_localization_configs/:auto_localization_config_id/translations/review',
    'POST',
  ] as const
}

export function usePostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewKey()
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
            (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalog_id'].auto_localization_configs[
            ':auto_localization_config_id'
          ].translations.review.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsCatalogIdCountryLocaleMappingKey(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>,
) {
  return ['catalogs', '/catalogs/:catalog_id/country_locale_mapping', args] as const
}

export function useGetCatalogsCatalogIdCountryLocaleMapping<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
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
        ? getGetCatalogsCatalogIdCountryLocaleMappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.catalogs[':catalog_id'].country_locale_mapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogIdCountryLocaleMapping<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
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
        ? getGetCatalogsCatalogIdCountryLocaleMappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.catalogs[':catalog_id'].country_locale_mapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCatalogsCatalogIdCountryLocaleMappingKey() {
  return ['catalogs', '/catalogs/:catalog_id/country_locale_mapping', 'PUT'] as const
}

export function usePutCatalogsCatalogIdCountryLocaleMapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCatalogsCatalogIdCountryLocaleMappingKey()
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
            (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$put']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalog_id'].country_locale_mapping.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCatalogsCatalogIdCountryLocaleMappingKey() {
  return ['catalogs', '/catalogs/:catalog_id/country_locale_mapping', 'DELETE'] as const
}

export function useDeleteCatalogsCatalogIdCountryLocaleMapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCatalogsCatalogIdCountryLocaleMappingKey()
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
            (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalog_id'].country_locale_mapping.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCatalogsCatalogIdLocalInventoryItemsBatchKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_inventory_items/batch', 'POST'] as const
}

export function usePostCatalogsCatalogIdLocalInventoryItemsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalog_id']['local_inventory_items']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['local_inventory_items']['batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsCatalogIdLocalInventoryItemsBatchKey()
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
            (typeof client.catalogs)[':catalog_id']['local_inventory_items']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalog_id'].local_inventory_items.batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCatalogsCatalogIdLocalInventoryItemsQueryKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_inventory_items/query', 'POST'] as const
}

export function usePostCatalogsCatalogIdLocalInventoryItemsQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalog_id']['local_inventory_items']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['local_inventory_items']['query']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsCatalogIdLocalInventoryItemsQueryKey()
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
            (typeof client.catalogs)[':catalog_id']['local_inventory_items']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalog_id'].local_inventory_items.query.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsCatalogIdLocalStoresKey(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>,
) {
  return ['catalogs', '/catalogs/:catalog_id/local_stores', args] as const
}

export function useGetCatalogsCatalogIdLocalStores<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
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
        ? getGetCatalogsCatalogIdLocalStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.catalogs[':catalog_id'].local_stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogIdLocalStores<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
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
        ? getGetCatalogsCatalogIdLocalStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.catalogs[':catalog_id'].local_stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsCatalogIdLocalStoresKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_stores', 'POST'] as const
}

export function usePostCatalogsCatalogIdLocalStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsCatalogIdLocalStoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>
        },
      ) => parseResponse(client.catalogs[':catalog_id'].local_stores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCatalogsCatalogIdLocalStoresKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_stores', 'DELETE'] as const
}

export function useDeleteCatalogsCatalogIdLocalStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCatalogsCatalogIdLocalStoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$delete']>
        },
      ) => parseResponse(client.catalogs[':catalog_id'].local_stores.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCatalogsCatalogIdLocalStoresKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_stores', 'PATCH'] as const
}

export function usePatchCatalogsCatalogIdLocalStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCatalogsCatalogIdLocalStoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>
        },
      ) => parseResponse(client.catalogs[':catalog_id'].local_stores.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsCatalogIdSupplementalItemsBatchBatchIdKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
  >,
) {
  return ['catalogs', '/catalogs/:catalog_id/supplemental_items/batch/:batch_id', args] as const
}

export function useGetCatalogsCatalogIdSupplementalItemsBatchBatchId<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
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
        ? getGetCatalogsCatalogIdSupplementalItemsBatchBatchIdKey(args)
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
                (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
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
          client.catalogs[':catalog_id'].supplemental_items.batch[':batch_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogIdSupplementalItemsBatchBatchId<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
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
        ? getGetCatalogsCatalogIdSupplementalItemsBatchBatchIdKey(args)
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
                (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
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
          client.catalogs[':catalog_id'].supplemental_items.batch[':batch_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollaborativeCatalogsKey() {
  return ['collaborative_catalogs', '/collaborative_catalogs', 'POST'] as const
}

export function usePostCollaborativeCatalogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.collaborative_catalogs.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.collaborative_catalogs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollaborativeCatalogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.collaborative_catalogs.$post> },
      ) => parseResponse(client.collaborative_catalogs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsKey(args: InferRequestType<typeof client.integrations.$get>) {
  return ['integrations', '/integrations', args] as const
}

export function useGetIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIntegrationsCommerceKey() {
  return ['integrations', '/integrations/commerce', 'POST'] as const
}

export function usePostIntegrationsCommerce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.commerce.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.commerce.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsCommerceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.integrations.commerce.$post> },
      ) => parseResponse(client.integrations.commerce.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsCommerceExternalBusinessIdKey(
  args: InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$get']>,
) {
  return ['integrations', '/integrations/commerce/:external_business_id', args] as const
}

export function useGetIntegrationsCommerceExternalBusinessId<TError = unknown>(
  args: InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
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
        ? getGetIntegrationsCommerceExternalBusinessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations.commerce[':external_business_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsCommerceExternalBusinessId<TError = unknown>(
  args: InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
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
        ? getGetIntegrationsCommerceExternalBusinessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations.commerce[':external_business_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteIntegrationsCommerceExternalBusinessIdKey() {
  return ['integrations', '/integrations/commerce/:external_business_id', 'DELETE'] as const
}

export function useDeleteIntegrationsCommerceExternalBusinessId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIntegrationsCommerceExternalBusinessIdKey()
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
            (typeof client.integrations.commerce)[':external_business_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.integrations.commerce[':external_business_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchIntegrationsCommerceExternalBusinessIdKey() {
  return ['integrations', '/integrations/commerce/:external_business_id', 'PATCH'] as const
}

export function usePatchIntegrationsCommerceExternalBusinessId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIntegrationsCommerceExternalBusinessIdKey()
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
            (typeof client.integrations.commerce)[':external_business_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.integrations.commerce[':external_business_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostIntegrationsLogsKey() {
  return ['integrations', '/integrations/logs', 'POST'] as const
}

export function usePostIntegrationsLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.logs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.logs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.integrations.logs.$post> }) =>
        parseResponse(client.integrations.logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsIdKey(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
) {
  return ['integrations', '/integrations/:id', args] as const
}

export function useGetIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIntegrationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIntegrationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMediaKey(args: InferRequestType<typeof client.media.$get>) {
  return ['media', '/media', args] as const
}

export function useGetMedia<TError = unknown>(
  args: InferRequestType<typeof client.media.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.media.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMedia<TError = unknown>(
  args: InferRequestType<typeof client.media.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.media.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMediaKey() {
  return ['media', '/media', 'POST'] as const
}

export function usePostMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.media.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.media.$post> }) =>
        parseResponse(client.media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMediaMediaIdKey(
  args: InferRequestType<(typeof client.media)[':media_id']['$get']>,
) {
  return ['media', '/media/:media_id', args] as const
}

export function useGetMediaMediaId<TError = unknown>(
  args: InferRequestType<(typeof client.media)[':media_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMediaMediaIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media[':media_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaMediaId<TError = unknown>(
  args: InferRequestType<(typeof client.media)[':media_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMediaMediaIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media[':media_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMediaLibraryBusinessesBusinessIdAssetsKey(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$get']
  >,
) {
  return ['media_library', '/media_library/businesses/:business_id/assets', args] as const
}

export function useGetMediaLibraryBusinessesBusinessIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
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
        ? getGetMediaLibraryBusinessesBusinessIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.media_library.businesses[':business_id'].assets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaLibraryBusinessesBusinessIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
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
        ? getGetMediaLibraryBusinessesBusinessIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.media_library.businesses[':business_id'].assets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMediaLibraryBusinessesBusinessIdAssetsKey() {
  return ['media_library', '/media_library/businesses/:business_id/assets', 'POST'] as const
}

export function usePostMediaLibraryBusinessesBusinessIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.media_library.businesses)[':business_id']['assets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaLibraryBusinessesBusinessIdAssetsKey()
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
            (typeof client.media_library.businesses)[':business_id']['assets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.media_library.businesses[':business_id'].assets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMediaLibraryBusinessesBusinessIdAssetsKey() {
  return ['media_library', '/media_library/businesses/:business_id/assets', 'DELETE'] as const
}

export function useDeleteMediaLibraryBusinessesBusinessIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.media_library.businesses)[':business_id']['assets']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.media_library.businesses)[':business_id']['assets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMediaLibraryBusinessesBusinessIdAssetsKey()
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
            (typeof client.media_library.businesses)[':business_id']['assets']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.media_library.businesses[':business_id'].assets.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMediaLibraryBusinessesBusinessIdAssetsKey() {
  return ['media_library', '/media_library/businesses/:business_id/assets', 'PATCH'] as const
}

export function usePatchMediaLibraryBusinessesBusinessIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.media_library.businesses)[':business_id']['assets']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMediaLibraryBusinessesBusinessIdAssetsKey()
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
            (typeof client.media_library.businesses)[':business_id']['assets']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.media_library.businesses[':business_id'].assets.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaLibraryBusinessesBusinessIdAssetsAssetIdKey(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
  >,
) {
  return ['media_library', '/media_library/businesses/:business_id/assets/:asset_id', args] as const
}

export function useGetMediaLibraryBusinessesBusinessIdAssetsAssetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
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
        ? getGetMediaLibraryBusinessesBusinessIdAssetsAssetIdKey(args)
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
                (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
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
          client.media_library.businesses[':business_id'].assets[':asset_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaLibraryBusinessesBusinessIdAssetsAssetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
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
        ? getGetMediaLibraryBusinessesBusinessIdAssetsAssetIdKey(args)
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
                (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
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
          client.media_library.businesses[':business_id'].assets[':asset_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantMerchantIdStatusKey(
  args: InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>,
) {
  return ['merchant', '/merchant/:merchant_id/status', args] as const
}

export function useGetMerchantMerchantIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
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
        ? getGetMerchantMerchantIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchant[':merchant_id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantMerchantIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
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
        ? getGetMerchantMerchantIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchant[':merchant_id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsKey() {
  return ['notifications', '/notifications', 'POST'] as const
}

export function usePostNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.notifications.$post> }) =>
        parseResponse(client.notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthConversionTokenKey() {
  return ['oauth', '/oauth/conversion_token', 'POST'] as const
}

export function usePostOauthConversionToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.conversion_token.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthConversionTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.oauth.conversion_token.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function usePostOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.token.$post> }) =>
        parseResponse(client.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenRevokeKey() {
  return ['oauth', '/oauth/token/revoke', 'POST'] as const
}

export function usePostOauthTokenRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.token.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.token.revoke.$post> }) =>
        parseResponse(client.oauth.token.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOverlayAssignmentRulesKey() {
  return ['overlay_assignment_rules', '/overlay_assignment_rules'] as const
}

export function useGetOverlayAssignmentRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
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
        ? getGetOverlayAssignmentRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.overlay_assignment_rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOverlayAssignmentRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
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
        ? getGetOverlayAssignmentRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.overlay_assignment_rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOverlayAssignmentRulesKey() {
  return ['overlay_assignment_rules', '/overlay_assignment_rules', 'POST'] as const
}

export function usePostOverlayAssignmentRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.overlay_assignment_rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOverlayAssignmentRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.overlay_assignment_rules.$post> },
      ) => parseResponse(client.overlay_assignment_rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOverlayAssignmentRulesIdKey(
  args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>,
) {
  return ['overlay_assignment_rules', '/overlay_assignment_rules/:id', args] as const
}

export function useGetOverlayAssignmentRulesId<TError = unknown>(
  args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
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
        ? getGetOverlayAssignmentRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.overlay_assignment_rules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOverlayAssignmentRulesId<TError = unknown>(
  args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
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
        ? getGetOverlayAssignmentRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.overlay_assignment_rules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOverlayAssignmentRulesIdKey() {
  return ['overlay_assignment_rules', '/overlay_assignment_rules/:id', 'DELETE'] as const
}

export function useDeleteOverlayAssignmentRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOverlayAssignmentRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$delete']> },
      ) => parseResponse(client.overlay_assignment_rules[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOverlayAssignmentRulesIdKey() {
  return ['overlay_assignment_rules', '/overlay_assignment_rules/:id', 'PATCH'] as const
}

export function usePatchOverlayAssignmentRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOverlayAssignmentRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$patch']> },
      ) => parseResponse(client.overlay_assignment_rules[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOverlaysKey(args: InferRequestType<typeof client.overlays.$get>) {
  return ['overlays', '/overlays', args] as const
}

export function useGetOverlays<TError = unknown>(
  args: InferRequestType<typeof client.overlays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOverlaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.overlays.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOverlays<TError = unknown>(
  args: InferRequestType<typeof client.overlays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOverlaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.overlays.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostOverlaysKey() {
  return ['overlays', '/overlays', 'POST'] as const
}

export function usePostOverlays<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.overlays.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOverlaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.overlays.$post> }) =>
        parseResponse(client.overlays.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOverlaysIdKey(
  args: InferRequestType<(typeof client.overlays)[':id']['$get']>,
) {
  return ['overlays', '/overlays/:id', args] as const
}

export function useGetOverlaysId<TError = unknown>(
  args: InferRequestType<(typeof client.overlays)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOverlaysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.overlays[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOverlaysId<TError = unknown>(
  args: InferRequestType<(typeof client.overlays)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOverlaysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.overlays[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOverlaysIdKey() {
  return ['overlays', '/overlays/:id', 'DELETE'] as const
}

export function useDeleteOverlaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.overlays)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOverlaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.overlays)[':id']['$delete']> },
      ) => parseResponse(client.overlays[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOverlaysIdKey() {
  return ['overlays', '/overlays/:id', 'PATCH'] as const
}

export function usePatchOverlaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.overlays)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOverlaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.overlays)[':id']['$patch']> },
      ) => parseResponse(client.overlays[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPinsKey(args: InferRequestType<typeof client.pins.$get>) {
  return ['pins', '/pins', args] as const
}

export function useGetPins<TError = unknown>(
  args: InferRequestType<typeof client.pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPinsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pins.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPins<TError = unknown>(
  args: InferRequestType<typeof client.pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPinsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pins.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPinsKey() {
  return ['pins', '/pins', 'POST'] as const
}

export function usePostPins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pins.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pins.$post> }) =>
        parseResponse(client.pins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPinsAnalyticsKey(args: InferRequestType<typeof client.pins.analytics.$get>) {
  return ['pins', '/pins/analytics', args] as const
}

export function useGetPinsAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.pins.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPinsAnalyticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pins.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPinsAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.pins.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPinsAnalyticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pins.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPinsPinIdKey(
  args: InferRequestType<(typeof client.pins)[':pin_id']['$get']>,
) {
  return ['pins', '/pins/:pin_id', args] as const
}

export function useGetPinsPinId<TError = unknown>(
  args: InferRequestType<(typeof client.pins)[':pin_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPinsPinIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pins[':pin_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPinsPinId<TError = unknown>(
  args: InferRequestType<(typeof client.pins)[':pin_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPinsPinIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pins[':pin_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePinsPinIdKey() {
  return ['pins', '/pins/:pin_id', 'DELETE'] as const
}

export function useDeletePinsPinId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.pins)[':pin_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePinsPinIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pins)[':pin_id']['$delete']> },
      ) => parseResponse(client.pins[':pin_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPinsPinIdKey() {
  return ['pins', '/pins/:pin_id', 'PATCH'] as const
}

export function usePatchPinsPinId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pins)[':pin_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPinsPinIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pins)[':pin_id']['$patch']> },
      ) => parseResponse(client.pins[':pin_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPinsPinIdAnalyticsKey(
  args: InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>,
) {
  return ['pins', '/pins/:pin_id/analytics', args] as const
}

export function useGetPinsPinIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
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
        ? getGetPinsPinIdAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pins[':pin_id'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPinsPinIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
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
        ? getGetPinsPinIdAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pins[':pin_id'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPinsPinIdProductTagsKey(
  args: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>,
) {
  return ['pins', '/pins/:pin_id/product_tags', args] as const
}

export function useGetPinsPinIdProductTags<TError = unknown>(
  args: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
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
        ? getGetPinsPinIdProductTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pins[':pin_id'].product_tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPinsPinIdProductTags<TError = unknown>(
  args: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
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
        ? getGetPinsPinIdProductTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pins[':pin_id'].product_tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPinsPinIdProductTagsKey() {
  return ['pins', '/pins/:pin_id/product_tags', 'POST'] as const
}

export function usePostPinsPinIdProductTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsPinIdProductTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$post']> },
      ) => parseResponse(client.pins[':pin_id'].product_tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPinsPinIdProductTagsBulkDeleteKey() {
  return ['pins', '/pins/:pin_id/product_tags/bulk-delete', 'POST'] as const
}

export function usePostPinsPinIdProductTagsBulkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pins)[':pin_id']['product_tags']['bulk-delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['bulk-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsPinIdProductTagsBulkDeleteKey()
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
            (typeof client.pins)[':pin_id']['product_tags']['bulk-delete']['$post']
          >
        },
      ) =>
        parseResponse(client.pins[':pin_id'].product_tags['bulk-delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPinsPinIdSaveKey() {
  return ['pins', '/pins/:pin_id/save', 'POST'] as const
}

export function usePostPinsPinIdSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['save']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pins)[':pin_id']['save']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsPinIdSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pins)[':pin_id']['save']['$post']> },
      ) => parseResponse(client.pins[':pin_id'].save.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourcesAdAccountCountriesKey() {
  return ['resources', '/resources/ad_account_countries'] as const
}

export function useGetResourcesAdAccountCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>>
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
        ? getGetResourcesAdAccountCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.ad_account_countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesAdAccountCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>>
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
        ? getGetResourcesAdAccountCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.ad_account_countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesDeliveryMetricsKey(
  args: InferRequestType<typeof client.resources.delivery_metrics.$get>,
) {
  return ['resources', '/resources/delivery_metrics', args] as const
}

export function useGetResourcesDeliveryMetrics<TError = unknown>(
  args: InferRequestType<typeof client.resources.delivery_metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
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
        ? getGetResourcesDeliveryMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.delivery_metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesDeliveryMetrics<TError = unknown>(
  args: InferRequestType<typeof client.resources.delivery_metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
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
        ? getGetResourcesDeliveryMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.delivery_metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesLeadFormQuestionsKey() {
  return ['resources', '/resources/lead_form_questions'] as const
}

export function useGetResourcesLeadFormQuestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>>
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
        ? getGetResourcesLeadFormQuestionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.lead_form_questions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesLeadFormQuestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>>
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
        ? getGetResourcesLeadFormQuestionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.lead_form_questions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMetricsReadyStateKey(
  args: InferRequestType<typeof client.resources.metrics_ready_state.$get>,
) {
  return ['resources', '/resources/metrics_ready_state', args] as const
}

export function useGetResourcesMetricsReadyState<TError = unknown>(
  args: InferRequestType<typeof client.resources.metrics_ready_state.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>
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
        ? getGetResourcesMetricsReadyStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.metrics_ready_state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMetricsReadyState<TError = unknown>(
  args: InferRequestType<typeof client.resources.metrics_ready_state.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>
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
        ? getGetResourcesMetricsReadyStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.metrics_ready_state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesTargetingInterestsInterestIdKey(
  args: InferRequestType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>,
) {
  return ['resources', '/resources/targeting/interests/:interest_id', args] as const
}

export function useGetResourcesTargetingInterestsInterestId<TError = unknown>(
  args: InferRequestType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>
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
        ? getGetResourcesTargetingInterestsInterestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.targeting.interests[':interest_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesTargetingInterestsInterestId<TError = unknown>(
  args: InferRequestType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>
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
        ? getGetResourcesTargetingInterestsInterestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.targeting.interests[':interest_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesTargetingTargetingTypeKey(
  args: InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>,
) {
  return ['resources', '/resources/targeting/:targeting_type', args] as const
}

export function useGetResourcesTargetingTargetingType<TError = unknown>(
  args: InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
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
        ? getGetResourcesTargetingTargetingTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.targeting[':targeting_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesTargetingTargetingType<TError = unknown>(
  args: InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
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
        ? getGetResourcesTargetingTargetingTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.targeting[':targeting_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchBoardsKey(args: InferRequestType<typeof client.search.boards.$get>) {
  return ['search', '/search/boards', args] as const
}

export function useGetSearchBoards<TError = unknown>(
  args: InferRequestType<typeof client.search.boards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchBoardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchBoards<TError = unknown>(
  args: InferRequestType<typeof client.search.boards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchBoardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchPartnerPinsKey(
  args: InferRequestType<typeof client.search.partner.pins.$get>,
) {
  return ['search', '/search/partner/pins', args] as const
}

export function useGetSearchPartnerPins<TError = unknown>(
  args: InferRequestType<typeof client.search.partner.pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>
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
        ? getGetSearchPartnerPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.partner.pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchPartnerPins<TError = unknown>(
  args: InferRequestType<typeof client.search.partner.pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>
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
        ? getGetSearchPartnerPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.partner.pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchPinsKey(args: InferRequestType<typeof client.search.pins.$get>) {
  return ['search', '/search/pins', args] as const
}

export function useGetSearchPins<TError = unknown>(
  args: InferRequestType<typeof client.search.pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchPinsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchPins<TError = unknown>(
  args: InferRequestType<typeof client.search.pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchPinsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTermsRelatedKey(args: InferRequestType<typeof client.terms.related.$get>) {
  return ['terms', '/terms/related', args] as const
}

export function useGetTermsRelated<TError = unknown>(
  args: InferRequestType<typeof client.terms.related.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTermsRelatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terms.related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTermsRelated<TError = unknown>(
  args: InferRequestType<typeof client.terms.related.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTermsRelatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terms.related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTermsSuggestedKey(
  args: InferRequestType<typeof client.terms.suggested.$get>,
) {
  return ['terms', '/terms/suggested', args] as const
}

export function useGetTermsSuggested<TError = unknown>(
  args: InferRequestType<typeof client.terms.suggested.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTermsSuggestedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terms.suggested.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTermsSuggested<TError = unknown>(
  args: InferRequestType<typeof client.terms.suggested.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTermsSuggestedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terms.suggested.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrendsEditorialArticlesKey(
  args: InferRequestType<typeof client.trends.editorial_articles.$get>,
) {
  return ['trends', '/trends/editorial_articles', args] as const
}

export function useGetTrendsEditorialArticles<TError = unknown>(
  args: InferRequestType<typeof client.trends.editorial_articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
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
        ? getGetTrendsEditorialArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trends.editorial_articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrendsEditorialArticles<TError = unknown>(
  args: InferRequestType<typeof client.trends.editorial_articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
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
        ? getGetTrendsEditorialArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trends.editorial_articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrendsKeywordsRegionTopTrendTypeKey(
  args: InferRequestType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>,
) {
  return ['trends', '/trends/keywords/:region/top/:trend_type', args] as const
}

export function useGetTrendsKeywordsRegionTopTrendType<TError = unknown>(
  args: InferRequestType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
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
        ? getGetTrendsKeywordsRegionTopTrendTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.trends.keywords[':region'].top[':trend_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrendsKeywordsRegionTopTrendType<TError = unknown>(
  args: InferRequestType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
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
        ? getGetTrendsKeywordsRegionTopTrendTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.trends.keywords[':region'].top[':trend_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTrendsProductCategoriesDetailsKey(
  args: InferRequestType<typeof client.trends.product_categories.details.$get>,
) {
  return ['trends', '/trends/product_categories/details', args] as const
}

export function useGetTrendsProductCategoriesDetails<TError = unknown>(
  args: InferRequestType<typeof client.trends.product_categories.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
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
        ? getGetTrendsProductCategoriesDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trends.product_categories.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrendsProductCategoriesDetails<TError = unknown>(
  args: InferRequestType<typeof client.trends.product_categories.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
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
        ? getGetTrendsProductCategoriesDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trends.product_categories.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrendsProductCategoriesTrendingKey(
  args: InferRequestType<typeof client.trends.product_categories.trending.$get>,
) {
  return ['trends', '/trends/product_categories/trending', args] as const
}

export function useGetTrendsProductCategoriesTrending<TError = unknown>(
  args: InferRequestType<typeof client.trends.product_categories.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
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
        ? getGetTrendsProductCategoriesTrendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.trends.product_categories.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrendsProductCategoriesTrending<TError = unknown>(
  args: InferRequestType<typeof client.trends.product_categories.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
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
        ? getGetTrendsProductCategoriesTrendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.trends.product_categories.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrendsTopicsFeaturedKey(
  args: InferRequestType<typeof client.trends.topics.featured.$get>,
) {
  return ['trends', '/trends/topics/featured', args] as const
}

export function useGetTrendsTopicsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.trends.topics.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>
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
        ? getGetTrendsTopicsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trends.topics.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrendsTopicsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.trends.topics.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>
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
        ? getGetTrendsTopicsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trends.topics.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAccountKey(args: InferRequestType<typeof client.user_account.$get>) {
  return ['user_account', '/user_account', args] as const
}

export function useGetUserAccount<TError = unknown>(
  args: InferRequestType<typeof client.user_account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccount<TError = unknown>(
  args: InferRequestType<typeof client.user_account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAccountAnalyticsKey(
  args: InferRequestType<typeof client.user_account.analytics.$get>,
) {
  return ['user_account', '/user_account/analytics', args] as const
}

export function useGetUserAccountAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.user_account.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>
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
        ? getGetUserAccountAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.user_account.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>
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
        ? getGetUserAccountAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAccountAnalyticsTopPinsKey(
  args: InferRequestType<typeof client.user_account.analytics.top_pins.$get>,
) {
  return ['user_account', '/user_account/analytics/top_pins', args] as const
}

export function useGetUserAccountAnalyticsTopPins<TError = unknown>(
  args: InferRequestType<typeof client.user_account.analytics.top_pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>
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
        ? getGetUserAccountAnalyticsTopPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.analytics.top_pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountAnalyticsTopPins<TError = unknown>(
  args: InferRequestType<typeof client.user_account.analytics.top_pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>
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
        ? getGetUserAccountAnalyticsTopPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.analytics.top_pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAccountAnalyticsTopVideoPinsKey(
  args: InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>,
) {
  return ['user_account', '/user_account/analytics/top_video_pins', args] as const
}

export function useGetUserAccountAnalyticsTopVideoPins<TError = unknown>(
  args: InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
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
        ? getGetUserAccountAnalyticsTopVideoPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_account.analytics.top_video_pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountAnalyticsTopVideoPins<TError = unknown>(
  args: InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
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
        ? getGetUserAccountAnalyticsTopVideoPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_account.analytics.top_video_pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAccountBusinessesKey() {
  return ['user_account', '/user_account/businesses'] as const
}

export function useGetUserAccountBusinesses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
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
        ? getGetUserAccountBusinessesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.businesses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountBusinesses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
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
        ? getGetUserAccountBusinessesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.businesses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAccountFollowersKey(
  args: InferRequestType<typeof client.user_account.followers.$get>,
) {
  return ['user_account', '/user_account/followers', args] as const
}

export function useGetUserAccountFollowers<TError = unknown>(
  args: InferRequestType<typeof client.user_account.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>
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
        ? getGetUserAccountFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountFollowers<TError = unknown>(
  args: InferRequestType<typeof client.user_account.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>
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
        ? getGetUserAccountFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAccountFollowingKey(
  args: InferRequestType<typeof client.user_account.following.$get>,
) {
  return ['user_account', '/user_account/following', args] as const
}

export function useGetUserAccountFollowing<TError = unknown>(
  args: InferRequestType<typeof client.user_account.following.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>
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
        ? getGetUserAccountFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountFollowing<TError = unknown>(
  args: InferRequestType<typeof client.user_account.following.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>
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
        ? getGetUserAccountFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAccountFollowingBoardsKey(
  args: InferRequestType<typeof client.user_account.following.boards.$get>,
) {
  return ['user_account', '/user_account/following/boards', args] as const
}

export function useGetUserAccountFollowingBoards<TError = unknown>(
  args: InferRequestType<typeof client.user_account.following.boards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.following.boards.$get>>
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
        ? getGetUserAccountFollowingBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.following.boards.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.following.boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountFollowingBoards<TError = unknown>(
  args: InferRequestType<typeof client.user_account.following.boards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.following.boards.$get>>
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
        ? getGetUserAccountFollowingBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.following.boards.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.following.boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserAccountFollowingUsernameKey() {
  return ['user_account', '/user_account/following/:username', 'POST'] as const
}

export function usePostUserAccountFollowingUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_account.following)[':username']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_account.following)[':username']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserAccountFollowingUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user_account.following)[':username']['$post']> },
      ) => parseResponse(client.user_account.following[':username'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserAccountWebsitesKey(
  args: InferRequestType<typeof client.user_account.websites.$get>,
) {
  return ['user_account', '/user_account/websites', args] as const
}

export function useGetUserAccountWebsites<TError = unknown>(
  args: InferRequestType<typeof client.user_account.websites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>
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
        ? getGetUserAccountWebsitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.websites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountWebsites<TError = unknown>(
  args: InferRequestType<typeof client.user_account.websites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>
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
        ? getGetUserAccountWebsitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_account.websites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserAccountWebsitesKey() {
  return ['user_account', '/user_account/websites', 'POST'] as const
}

export function usePostUserAccountWebsites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_account.websites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserAccountWebsitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_account.websites.$post> },
      ) => parseResponse(client.user_account.websites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserAccountWebsitesKey() {
  return ['user_account', '/user_account/websites', 'DELETE'] as const
}

export function useDeleteUserAccountWebsites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.user_account.websites.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserAccountWebsitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_account.websites.$delete> },
      ) => parseResponse(client.user_account.websites.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserAccountWebsitesVerificationKey(
  args: InferRequestType<typeof client.user_account.websites.verification.$get>,
) {
  return ['user_account', '/user_account/websites/verification', args] as const
}

export function useGetUserAccountWebsitesVerification<TError = unknown>(
  args: InferRequestType<typeof client.user_account.websites.verification.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
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
        ? getGetUserAccountWebsitesVerificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_account.websites.verification.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountWebsitesVerification<TError = unknown>(
  args: InferRequestType<typeof client.user_account.websites.verification.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
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
        ? getGetUserAccountWebsitesVerificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_account.websites.verification.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUsernameInterestsFollowKey(
  args: InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>,
) {
  return ['users', '/users/:username/interests/follow', args] as const
}

export function useGetUsersUsernameInterestsFollow<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
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
        ? getGetUsersUsernameInterestsFollowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':username'].interests.follow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUsernameInterestsFollow<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
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
        ? getGetUsersUsernameInterestsFollowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':username'].interests.follow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
