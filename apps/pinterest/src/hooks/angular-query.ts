import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAdAccountsQueryKey(args: InferRequestType<typeof client.ad_accounts.$get>) {
  return ['ad_accounts', '/ad_accounts', args] as const
}

export function getAdAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ad_accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdAccountsQueryKey>
  >({
    queryKey: getAdAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ad_accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdAccountsMutationKey() {
  return ['ad_accounts', '/ad_accounts', 'POST'] as const
}

export function getPostAdAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.ad_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ad_accounts.$post>) {
      return parseResponse(client.ad_accounts.$post(args, options))
    },
  })
}

export function injectPostAdAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ad_accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsEntityHistoryQueryKey(
  args: InferRequestType<typeof client.ad_accounts.entity_history.$get>,
) {
  return ['ad_accounts', '/ad_accounts/entity_history', args] as const
}

export function getAdAccountsEntityHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_accounts.entity_history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsEntityHistoryQueryKey>
  >({
    queryKey: getAdAccountsEntityHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts.entity_history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsEntityHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ad_accounts.entity_history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsEntityHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsEntityHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id', args] as const
}

export function getAdAccountsAdAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAbTestsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests', args] as const
}

export function getAdAccountsAdAccountIdAbTestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAbTestsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAbTestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ab_tests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAbTests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAbTestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAbTestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdAbTestsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdAbTestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdAbTestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].ab_tests.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdAbTests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdAbTestsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdAbTestsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdAbTestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdAbTestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$patch']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].ab_tests.$patch(args, options))
    },
  })
}

export function injectPatchAdAccountsAdAccountIdAbTests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdAbTestsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAbTestsAbTestIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests/:ab_test_id', args] as const
}

export function getAdAccountsAdAccountIdAbTestsAbTestIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAbTestsAbTestIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAbTestsAbTestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ab_tests[':ab_test_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAbTestsAbTestId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAbTestsAbTestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAbTestsAbTestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdGroupsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups', args] as const
}

export function getAdAccountsAdAccountIdAdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdAdGroupsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdAdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdAdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].ad_groups.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdAdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdAdGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdAdGroupsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdAdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdAdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$patch']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].ad_groups.$patch(args, options))
    },
  })
}

export function injectPatchAdAccountsAdAccountIdAdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdAdGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdGroupsAnalyticsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups/analytics', args] as const
}

export function getAdAccountsAdAccountIdAdGroupsAnalyticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdGroupsAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups.analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdGroupsAnalytics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdGroupsAnalyticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdAdGroupsAudienceSizingMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups/audience_sizing', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdAdGroupsAudienceSizingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['audience_sizing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdAdGroupsAudienceSizingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['audience_sizing']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups.audience_sizing.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdAdGroupsAudienceSizing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['audience_sizing']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdAdGroupsAudienceSizingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups/targeting_analytics', args] as const
}

export function getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups.targeting_analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdGroupsTargetingAnalytics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id', args] as const
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdGroupsAdGroupId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/dynamic_titles',
    'POST',
  ] as const
}

export function getPostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryKey(
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

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.csv.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsv<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryKey(
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

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.status.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatus<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryKey(
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

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.uploads.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploads<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryKey(
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

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].publisher_blocklists.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklists<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/publisher_blocklists',
    'PATCH',
  ] as const
}

export function getPatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].publisher_blocklists.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdAdPreviewsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_previews', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdAdPreviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_previews']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_previews']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdAdPreviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_previews']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].ad_previews.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdAdPreviews<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_previews']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_previews']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdAdPreviewsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads', args] as const
}

export function getAdAccountsAdAccountIdAdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdAdsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdAdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdAdsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].ads.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdAds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdAdsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdAdsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdAdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdAdsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$patch']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].ads.$patch(args, options))
    },
  })
}

export function injectPatchAdAccountsAdAccountIdAds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdAdsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdsAnalyticsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads/analytics', args] as const
}

export function getAdAccountsAdAccountIdAdsAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdsAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads.analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdsAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdsAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdsAnalyticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads/targeting_analytics', args] as const
}

export function getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads.targeting_analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdsTargetingAnalytics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdsAdIdQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads/:ad_id', args] as const
}

export function getAdAccountsAdAccountIdAdsAdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsAdIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdsAdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads[':ad_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdsAdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdsAdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdsAdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdsCreditDiscountsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads_credit/discounts', args] as const
}

export function getAdAccountsAdAccountIdAdsCreditDiscountsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsCreditDiscountsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdsCreditDiscountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads_credit.discounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdsCreditDiscounts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdsCreditDiscountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdsCreditDiscountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdAdsCreditRedeemMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads_credit/redeem', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdAdsCreditRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['redeem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdAdsCreditRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['redeem']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads_credit.redeem.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdAdsCreditRedeem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['redeem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdAdsCreditRedeemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/advertiser_defined_events', args] as const
}

export function getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].advertiser_defined_events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAdvertiserDefinedEvents<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdAdvertiserDefinedEventsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/advertiser_defined_events', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdAdvertiserDefinedEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdAdvertiserDefinedEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].advertiser_defined_events.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdAdvertiserDefinedEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdAdvertiserDefinedEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdAccountsAdAccountIdAdvertiserDefinedEventsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/advertiser_defined_events', 'DELETE'] as const
}

export function getDeleteAdAccountsAdAccountIdAdvertiserDefinedEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdAccountsAdAccountIdAdvertiserDefinedEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$delete']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].advertiser_defined_events.$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdAccountsAdAccountIdAdvertiserDefinedEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdAccountsAdAccountIdAdvertiserDefinedEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdAdvertiserDefinedEventsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/advertiser_defined_events', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdAdvertiserDefinedEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdAdvertiserDefinedEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].advertiser_defined_events.$patch(args, options),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdAdvertiserDefinedEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdAdvertiserDefinedEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAllowedDomainsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/allowed_domains', args] as const
}

export function getAdAccountsAdAccountIdAllowedDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAllowedDomainsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAllowedDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].allowed_domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAllowedDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAllowedDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAllowedDomainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAnalyticsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/analytics', args] as const
}

export function getAdAccountsAdAccountIdAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAnalyticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAudienceInsightsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audience_insights', args] as const
}

export function getAdAccountsAdAccountIdAudienceInsightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAudienceInsightsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAudienceInsightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audience_insights.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAudienceInsights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAudienceInsightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAudienceInsightsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAudiencesQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences', args] as const
}

export function getAdAccountsAdAccountIdAudiencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAudiencesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audiences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAudiences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAudiencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdAudiencesMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdAudiencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdAudiencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].audiences.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdAudiences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdAudiencesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdAudiencesAdAccountsSharedMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/audiences/ad_accounts/shared',
    'PATCH',
  ] as const
}

export function getPatchAdAccountsAdAccountIdAudiencesAdAccountsSharedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences']['ad_accounts']['shared']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdAudiencesAdAccountsSharedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['audiences']['ad_accounts']['shared']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audiences.ad_accounts.shared.$patch(args, options),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdAudiencesAdAccountsShared<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['audiences']['ad_accounts']['shared']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdAudiencesAdAccountsSharedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdAudiencesBusinessesSharedMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/audiences/businesses/shared',
    'PATCH',
  ] as const
}

export function getPatchAdAccountsAdAccountIdAudiencesBusinessesSharedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences']['businesses']['shared']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdAudiencesBusinessesSharedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['audiences']['businesses']['shared']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audiences.businesses.shared.$patch(args, options),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdAudiencesBusinessesShared<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['audiences']['businesses']['shared']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdAudiencesBusinessesSharedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAudiencesSharedAccountsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences/shared/accounts', args] as const
}

export function getAdAccountsAdAccountIdAudiencesSharedAccountsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAudiencesSharedAccountsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAudiencesSharedAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audiences.shared.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAudiencesSharedAccounts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAudiencesSharedAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAudiencesSharedAccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdAudiencesAudienceIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences/:audience_id', args] as const
}

export function getAdAccountsAdAccountIdAudiencesAudienceIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAudiencesAudienceIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdAudiencesAudienceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audiences[':audience_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdAudiencesAudienceId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdAudiencesAudienceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdAudiencesAudienceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdAudiencesAudienceIdMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences/:audience_id', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdAudiencesAudienceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdAudiencesAudienceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audiences[':audience_id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdAudiencesAudienceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdAudiencesAudienceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdBidFloorMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/bid_floor', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdBidFloorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['bid_floor']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bid_floor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdBidFloorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bid_floor']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].bid_floor.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdBidFloor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['bid_floor']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bid_floor']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdBidFloorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryKey(
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

export function getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].billing_invoice[':billing_invoice_id'].download.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownload<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdBillingInvoicesQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/billing_invoices', args] as const
}

export function getAdAccountsAdAccountIdBillingInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdBillingInvoicesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdBillingInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].billing_invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdBillingInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdBillingInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdBillingInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdBillingProfilesQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/billing_profiles', args] as const
}

export function getAdAccountsAdAccountIdBillingProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdBillingProfilesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdBillingProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].billing_profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdBillingProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdBillingProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdBillingProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdBulkDownloadMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/bulk/download', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdBulkDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bulk']['download']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdBulkDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['bulk']['download']['$post']
      >,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].bulk.download.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdBulkDownload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['bulk']['download']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['bulk']['download']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdBulkDownloadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdBulkUpsertMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/bulk/upsert', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdBulkUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bulk']['upsert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdBulkUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['bulk']['upsert']['$post']
      >,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].bulk.upsert.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdBulkUpsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bulk']['upsert']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdBulkUpsertMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdBulkBulkRequestIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/bulk/:bulk_request_id', args] as const
}

export function getAdAccountsAdAccountIdBulkBulkRequestIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdBulkBulkRequestIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdBulkBulkRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].bulk[':bulk_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdBulkBulkRequestId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdBulkBulkRequestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdBulkBulkRequestIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdCampaignAdPreviewQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaign_ad_preview', args] as const
}

export function getAdAccountsAdAccountIdCampaignAdPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignAdPreviewQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdCampaignAdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaign_ad_preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdCampaignAdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdCampaignAdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdCampaignAdPreviewQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdCampaignAdPreviewMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaign_ad_preview', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdCampaignAdPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdCampaignAdPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaign_ad_preview.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdCampaignAdPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdCampaignAdPreviewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdAccountsAdAccountIdCampaignAdPreviewMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaign_ad_preview', 'DELETE'] as const
}

export function getDeleteAdAccountsAdAccountIdCampaignAdPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdAccountsAdAccountIdCampaignAdPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$delete']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaign_ad_preview.$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdAccountsAdAccountIdCampaignAdPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdAccountsAdAccountIdCampaignAdPreviewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdCampaignsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns', args] as const
}

export function getAdAccountsAdAccountIdCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaigns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdCampaignsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdCampaignsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].campaigns.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdCampaignsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdCampaignsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$patch']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].campaigns.$patch(args, options))
    },
  })
}

export function injectPatchAdAccountsAdAccountIdCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdCampaignsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdCampaignsAnalyticsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns/analytics', args] as const
}

export function getAdAccountsAdAccountIdCampaignsAnalyticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignsAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdCampaignsAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaigns.analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdCampaignsAnalytics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdCampaignsAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdCampaignsAnalyticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdCampaignsDeliveryEstimatesMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/campaigns/delivery_estimates',
    'POST',
  ] as const
}

export function getPostAdAccountsAdAccountIdCampaignsDeliveryEstimatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns']['delivery_estimates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdCampaignsDeliveryEstimatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['campaigns']['delivery_estimates']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaigns.delivery_estimates.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdCampaignsDeliveryEstimates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['campaigns']['delivery_estimates']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdCampaignsDeliveryEstimatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns/targeting_analytics', args] as const
}

export function getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaigns.targeting_analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdCampaignsTargetingAnalytics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdCampaignsCampaignIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns/:campaign_id', args] as const
}

export function getAdAccountsAdAccountIdCampaignsCampaignIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignsCampaignIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdCampaignsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaigns[':campaign_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdCampaignsCampaignId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdCampaignsCampaignIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdCampaignsCampaignIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdConversionDeletionRequestsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_deletion_requests', args] as const
}

export function getAdAccountsAdAccountIdConversionDeletionRequestsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionDeletionRequestsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdConversionDeletionRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_deletion_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdConversionDeletionRequests<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdConversionDeletionRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdConversionDeletionRequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdConversionDeletionRequestsMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_deletion_requests',
    'POST',
  ] as const
}

export function getPostAdAccountsAdAccountIdConversionDeletionRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdConversionDeletionRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_deletion_requests.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdConversionDeletionRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdConversionDeletionRequestsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryKey(
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

export function getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_deletion_requests[':request_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdConversionDeletionRequestsRequestId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_deletion_requests/:request_id',
    'DELETE',
  ] as const
}

export function getDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_deletion_requests[':request_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdConversionEqsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_eqs', args] as const
}

export function getAdAccountsAdAccountIdConversionEqsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionEqsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdConversionEqsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_eqs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdConversionEqs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdConversionEqsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdConversionEqsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdConversionSegmentsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_segments', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdConversionSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_segments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdConversionSegmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['conversion_segments']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_segments.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdConversionSegments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['conversion_segments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdConversionSegmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_segments/:conversion_segment_id',
    'DELETE',
  ] as const
}

export function getDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_segments[':conversion_segment_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_segments/:conversion_segment_id',
    'PATCH',
  ] as const
}

export function getPatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_segments[':conversion_segment_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdConversionTagsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_tags', args] as const
}

export function getAdAccountsAdAccountIdConversionTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionTagsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdConversionTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdConversionTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdConversionTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdConversionTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdConversionTagsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_tags', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdConversionTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdConversionTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_tags.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdConversionTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdConversionTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_tags/ocpm_eligible', args] as const
}

export function getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_tags.ocpm_eligible.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdConversionTagsOcpmEligible<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdConversionTagsPageVisitQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_tags/page_visit', args] as const
}

export function getAdAccountsAdAccountIdConversionTagsPageVisitQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionTagsPageVisitQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdConversionTagsPageVisitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_tags.page_visit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdConversionTagsPageVisit<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdConversionTagsPageVisitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdConversionTagsPageVisitQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryKey(
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

export function getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_tags[':conversion_tag_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdConversionTagsConversionTagId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdCustomerListsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_lists', args] as const
}

export function getAdAccountsAdAccountIdCustomerListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCustomerListsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdCustomerListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdCustomerLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdCustomerListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdCustomerListsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdCustomerListsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_lists', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdCustomerListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdCustomerListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$post']
      >,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].customer_lists.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdCustomerLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdCustomerListsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryKey(
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

export function getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdCustomerListsCustomerListId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdCustomerListsCustomerListIdMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id',
    'PATCH',
  ] as const
}

export function getPatchAdAccountsAdAccountIdCustomerListsCustomerListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdCustomerListsCustomerListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdCustomerListsCustomerListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchAdAccountsAdAccountIdCustomerListsCustomerListIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id/uploads',
    'POST',
  ] as const
}

export function getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryKey(
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

export function getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryKey
    >
  >({
    queryKey:
      getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads[
          ':customer_list_upload_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id/uploads/:customer_list_upload_id/run',
    'POST',
  ] as const
}

export function getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['run']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['run']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads[
          ':customer_list_upload_id'
        ].run.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['run']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdCustomerSegmentsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_segments', args] as const
}

export function getAdAccountsAdAccountIdCustomerSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCustomerSegmentsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdCustomerSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_segments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdCustomerSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdCustomerSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdCustomerSegmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdCustomerSegmentsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_segments', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdCustomerSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdCustomerSegmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_segments.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdCustomerSegments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdCustomerSegmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdCustomerSegmentsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_segments', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdCustomerSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdCustomerSegmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_segments.$patch(args, options),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdCustomerSegments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdCustomerSegmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdEventsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/events', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].events.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdInsightsAudiencesQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/insights/audiences', args] as const
}

export function getAdAccountsAdAccountIdInsightsAudiencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdInsightsAudiencesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdInsightsAudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].insights.audiences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdInsightsAudiences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdInsightsAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdInsightsAudiencesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdKeywordsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords', args] as const
}

export function getAdAccountsAdAccountIdKeywordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdKeywordsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdKeywordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].keywords.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdKeywords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdKeywordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdKeywordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdKeywordsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdKeywordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdKeywordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].keywords.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdKeywords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdKeywordsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdKeywordsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdKeywordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdKeywordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$patch']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].keywords.$patch(args, options))
    },
  })
}

export function injectPatchAdAccountsAdAccountIdKeywords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdKeywordsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdKeywordsMetricsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords/metrics', args] as const
}

export function getAdAccountsAdAccountIdKeywordsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdKeywordsMetricsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdKeywordsMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].keywords.metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdKeywordsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdKeywordsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdKeywordsMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdLabelsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels', args] as const
}

export function getAdAccountsAdAccountIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLabelsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdLabelsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].labels.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdLabelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdLabelsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].labels.$patch(args, options))
    },
  })
}

export function injectPatchAdAccountsAdAccountIdLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdLabelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdLabelsLabelIdApplyMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels/:label_id/apply', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdLabelsLabelIdApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['apply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdLabelsLabelIdApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['apply']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].labels[':label_id'].apply.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdLabelsLabelIdApply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['apply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdLabelsLabelIdApplyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdLabelsLabelIdRemoveMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels/:label_id/remove', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdLabelsLabelIdRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdLabelsLabelIdRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].labels[':label_id'].remove.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdLabelsLabelIdRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['remove']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdLabelsLabelIdRemoveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdLeadFormsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/lead_forms', args] as const
}

export function getAdAccountsAdAccountIdLeadFormsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadFormsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdLeadFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].lead_forms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdLeadForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdLeadFormsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdLeadFormsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdLeadFormsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/lead_forms', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdLeadFormsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdLeadFormsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].lead_forms.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdLeadForms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdLeadFormsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdLeadFormsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/lead_forms', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdLeadFormsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdLeadFormsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$patch']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].lead_forms.$patch(args, options))
    },
  })
}

export function injectPatchAdAccountsAdAccountIdLeadForms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdLeadFormsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/lead_forms/:lead_form_id', args] as const
}

export function getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].lead_forms[':lead_form_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdLeadFormsLeadFormId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdLeadFormsLeadFormIdTestMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/lead_forms/:lead_form_id/test',
    'POST',
  ] as const
}

export function getPostAdAccountsAdAccountIdLeadFormsLeadFormIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['test']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdLeadFormsLeadFormIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].lead_forms[':lead_form_id'].test.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdLeadFormsLeadFormIdTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['test']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdLeadFormsLeadFormIdTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdLeadsSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/leads/subscriptions', args] as const
}

export function getAdAccountsAdAccountIdLeadsSubscriptionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadsSubscriptionsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdLeadsSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].leads.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdLeadsSubscriptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdLeadsSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdLeadsSubscriptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdLeadsSubscriptionsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/leads/subscriptions', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdLeadsSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdLeadsSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].leads.subscriptions.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdLeadsSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdLeadsSubscriptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryKey(
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

export function getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].leads.subscriptions[':subscription_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/leads/subscriptions/:subscription_id',
    'DELETE',
  ] as const
}

export function getDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].leads.subscriptions[':subscription_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdLeadsExportMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/leads_export', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdLeadsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['leads_export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdLeadsExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['leads_export']['$post']
      >,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].leads_export.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdLeadsExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['leads_export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdLeadsExportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/leads_export/:leads_export_id', args] as const
}

export function getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].leads_export[':leads_export_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdLeadsExportLeadsExportId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdMmmReportsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/mmm_reports', args] as const
}

export function getAdAccountsAdAccountIdMmmReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdMmmReportsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdMmmReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].mmm_reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdMmmReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdMmmReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdMmmReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdMmmReportsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/mmm_reports', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdMmmReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdMmmReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].mmm_reports.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdMmmReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdMmmReportsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdMsotEventsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/msot/events', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdMsotEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['msot']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdMsotEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['msot']['events']['$post']
      >,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].msot.events.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdMsotEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['msot']['events']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdMsotEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdOrderLinesQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/order_lines', args] as const
}

export function getAdAccountsAdAccountIdOrderLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdOrderLinesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdOrderLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].order_lines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdOrderLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdOrderLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdOrderLinesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/order_lines/:order_line_id', args] as const
}

export function getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].order_lines[':order_line_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdOrderLinesOrderLineId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdPinsAnalyticsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/pins/analytics', args] as const
}

export function getAdAccountsAdAccountIdPinsAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPinsAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdPinsAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].pins.analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdPinsAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdPinsAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdPinsAnalyticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdProductGroupPromotionsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/product_group_promotions', args] as const
}

export function getAdAccountsAdAccountIdProductGroupPromotionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdProductGroupPromotionsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdProductGroupPromotionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].product_group_promotions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdProductGroupPromotions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdProductGroupPromotionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdProductGroupPromotionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdProductGroupPromotionsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/product_group_promotions', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdProductGroupPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdProductGroupPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].product_group_promotions.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdProductGroupPromotions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdProductGroupPromotionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdProductGroupPromotionsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/product_group_promotions', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdProductGroupPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdProductGroupPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].product_group_promotions.$patch(args, options),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdProductGroupPromotions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdProductGroupPromotionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryKey(
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

export function getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].product_group_promotions[
          ':product_group_promotion_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdProductGroupsAnalyticsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/product_groups/analytics', args] as const
}

export function getAdAccountsAdAccountIdProductGroupsAnalyticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdProductGroupsAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdProductGroupsAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].product_groups.analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdProductGroupsAnalytics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdProductGroupsAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdProductGroupsAnalyticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotion_applied_entities', args] as const
}

export function getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].promotion_applied_entities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdPromotionAppliedEntities<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdPromotionsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions', args] as const
}

export function getAdAccountsAdAccountIdPromotionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPromotionsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdPromotionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].promotions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdPromotions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdPromotionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdPromotionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdPromotionsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].promotions.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdPromotions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdPromotionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdPromotionsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$patch']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].promotions.$patch(args, options))
    },
  })
}

export function injectPatchAdAccountsAdAccountIdPromotions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdPromotionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdPromotionsPromotionIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions/:promotion_id', args] as const
}

export function getAdAccountsAdAccountIdPromotionsPromotionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPromotionsPromotionIdQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdPromotionsPromotionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].promotions[':promotion_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdPromotionsPromotionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdPromotionsPromotionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdPromotionsPromotionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdAccountsAdAccountIdPromotionsPromotionIdMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions/:promotion_id', 'DELETE'] as const
}

export function getDeleteAdAccountsAdAccountIdPromotionsPromotionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdAccountsAdAccountIdPromotionsPromotionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].promotions[':promotion_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdAccountsAdAccountIdPromotionsPromotionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdAccountsAdAccountIdPromotionsPromotionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdPublisherBlocklistsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/publisher_blocklists', args] as const
}

export function getAdAccountsAdAccountIdPublisherBlocklistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPublisherBlocklistsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdPublisherBlocklistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].publisher_blocklists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdPublisherBlocklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdPublisherBlocklistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdPublisherBlocklistsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdPublisherBlocklistsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/publisher_blocklists', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdPublisherBlocklistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdPublisherBlocklistsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].publisher_blocklists.$patch(args, options),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdPublisherBlocklists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdPublisherBlocklistsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdReportsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/reports', args] as const
}

export function getAdAccountsAdAccountIdReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdReportsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdReportsMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/reports', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].reports.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdReportsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdReportsBrandCategorySkuQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/reports/brand_category_sku', args] as const
}

export function getAdAccountsAdAccountIdReportsBrandCategorySkuQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdReportsBrandCategorySkuQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdReportsBrandCategorySkuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].reports.brand_category_sku.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdReportsBrandCategorySku<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdReportsBrandCategorySkuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdReportsBrandCategorySkuQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdReportsBrandCategorySkuMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/reports/brand_category_sku', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdReportsBrandCategorySkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdReportsBrandCategorySkuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].reports.brand_category_sku.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdReportsBrandCategorySku<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdReportsBrandCategorySkuMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdAccountsAdAccountIdSandboxMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/sandbox', 'DELETE'] as const
}

export function getDeleteAdAccountsAdAccountIdSandboxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['sandbox']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['sandbox']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdAccountsAdAccountIdSandboxMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['sandbox']['$delete']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].sandbox.$delete(args, options))
    },
  })
}

export function injectDeleteAdAccountsAdAccountIdSandbox<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['sandbox']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['sandbox']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdAccountsAdAccountIdSandboxMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdSchedulesQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/schedules', args] as const
}

export function getAdAccountsAdAccountIdSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSchedulesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdSchedulesMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/schedules', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$post']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].schedules.$post(args, options))
    },
  })
}

export function injectPostAdAccountsAdAccountIdSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdSchedulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdSchedulesMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/schedules', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$patch']>,
    ) {
      return parseResponse(client.ad_accounts[':ad_account_id'].schedules.$patch(args, options))
    },
  })
}

export function injectPatchAdAccountsAdAccountIdSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdSchedulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdSsioAccountsQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/accounts', args] as const
}

export function getAdAccountsAdAccountIdSsioAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSsioAccountsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdSsioAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdSsioAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdSsioAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdSsioAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdSsioInsertionOrdersMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/insertion_orders', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdSsioInsertionOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdSsioInsertionOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.insertion_orders.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdSsioInsertionOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdSsioInsertionOrdersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdSsioInsertionOrdersMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/insertion_orders', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdSsioInsertionOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdSsioInsertionOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.insertion_orders.$patch(args, options),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdSsioInsertionOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdSsioInsertionOrdersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/insertion_orders/status', args] as const
}

export function getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.insertion_orders.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdSsioInsertionOrdersStatus<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryKey(
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

export function getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.insertion_orders[':pin_order_id'].status.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatus<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdSsioOrderLinesQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/order_lines', args] as const
}

export function getAdAccountsAdAccountIdSsioOrderLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSsioOrderLinesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdSsioOrderLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.order_lines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdSsioOrderLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdSsioOrderLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdSsioOrderLinesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdTargetingAnalyticsQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_analytics', args] as const
}

export function getAdAccountsAdAccountIdTargetingAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdTargetingAnalyticsQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdTargetingAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].targeting_analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdTargetingAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdTargetingAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdTargetingAnalyticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdTargetingTemplatesQueryKey(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_templates', args] as const
}

export function getAdAccountsAdAccountIdTargetingTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdTargetingTemplatesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdTargetingTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].targeting_templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdTargetingTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdTargetingTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdTargetingTemplatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdTargetingTemplatesMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_templates', 'POST'] as const
}

export function getPostAdAccountsAdAccountIdTargetingTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdTargetingTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].targeting_templates.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdTargetingTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdTargetingTemplatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdAccountsAdAccountIdTargetingTemplatesMutationKey() {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_templates', 'PATCH'] as const
}

export function getPatchAdAccountsAdAccountIdTargetingTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdAccountsAdAccountIdTargetingTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$patch']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].targeting_templates.$patch(args, options),
      )
    },
  })
}

export function injectPatchAdAccountsAdAccountIdTargetingTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdAccountsAdAccountIdTargetingTemplatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdTemplatesQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/templates', args] as const
}

export function getAdAccountsAdAccountIdTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdTemplatesQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdAccountsAdAccountIdTemplatesTemplateIdReportsMutationKey() {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/templates/:template_id/reports',
    'POST',
  ] as const
}

export function getPostAdAccountsAdAccountIdTemplatesTemplateIdReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['templates'][':template_id']['reports']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdAccountsAdAccountIdTemplatesTemplateIdReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_accounts)[':ad_account_id']['templates'][':template_id']['reports']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].templates[':template_id'].reports.$post(args, options),
      )
    },
  })
}

export function injectPostAdAccountsAdAccountIdTemplatesTemplateIdReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.ad_accounts)[':ad_account_id']['templates'][':template_id']['reports']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdAccountsAdAccountIdTemplatesTemplateIdReportsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdAccountsAdAccountIdTermsOfServiceQueryKey(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/terms_of_service', args] as const
}

export function getAdAccountsAdAccountIdTermsOfServiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdTermsOfServiceQueryKey>
  >({
    queryKey: getAdAccountsAdAccountIdTermsOfServiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].terms_of_service.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdAccountsAdAccountIdTermsOfService<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdAccountsAdAccountIdTermsOfServiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdAccountsAdAccountIdTermsOfServiceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdvancedAuctionItemsGetMutationKey() {
  return ['advanced_auction', '/advanced_auction/items/get', 'POST'] as const
}

export function getPostAdvancedAuctionItemsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.advanced_auction.items.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.advanced_auction.items.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdvancedAuctionItemsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.advanced_auction.items.get.$post>) {
      return parseResponse(client.advanced_auction.items.get.$post(args, options))
    },
  })
}

export function injectPostAdvancedAuctionItemsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.advanced_auction.items.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.advanced_auction.items.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdvancedAuctionItemsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdvancedAuctionItemsSubmitMutationKey() {
  return ['advanced_auction', '/advanced_auction/items/submit', 'POST'] as const
}

export function getPostAdvancedAuctionItemsSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.advanced_auction.items.submit.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.advanced_auction.items.submit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdvancedAuctionItemsSubmitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.advanced_auction.items.submit.$post>) {
      return parseResponse(client.advanced_auction.items.submit.$post(args, options))
    },
  })
}

export function injectPostAdvancedAuctionItemsSubmit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.advanced_auction.items.submit.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.advanced_auction.items.submit.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdvancedAuctionItemsSubmitMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsQueryKey(args: InferRequestType<typeof client.boards.$get>) {
  return ['boards', '/boards', args] as const
}

export function getBoardsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.boards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBoardsQueryKey>
  >({
    queryKey: getBoardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBoards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.boards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBoardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBoardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostBoardsMutationKey() {
  return ['boards', '/boards', 'POST'] as const
}

export function getPostBoardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$post>>>>>,
    TError,
    InferRequestType<typeof client.boards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.boards.$post>) {
      return parseResponse(client.boards.$post(args, options))
    },
  })
}

export function injectPostBoards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$post>>>>>,
        TError,
        InferRequestType<typeof client.boards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBoardsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsBoardIdQueryKey(
  args: InferRequestType<(typeof client.boards)[':board_id']['$get']>,
) {
  return ['boards', '/boards/:board_id', args] as const
}

export function getBoardsBoardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':board_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdQueryKey>
  >({
    queryKey: getBoardsBoardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':board_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBoardsBoardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':board_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsBoardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBoardsBoardIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteBoardsBoardIdMutationKey() {
  return ['boards', '/boards/:board_id', 'DELETE'] as const
}

export function getDeleteBoardsBoardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.boards)[':board_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsBoardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':board_id']['$delete']>) {
      return parseResponse(client.boards[':board_id'].$delete(args, options))
    },
  })
}

export function injectDeleteBoardsBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':board_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.boards)[':board_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBoardsBoardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBoardsBoardIdMutationKey() {
  return ['boards', '/boards/:board_id', 'PATCH'] as const
}

export function getPatchBoardsBoardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':board_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBoardsBoardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':board_id']['$patch']>) {
      return parseResponse(client.boards[':board_id'].$patch(args, options))
    },
  })
}

export function injectPatchBoardsBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':board_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBoardsBoardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsBoardIdPinsQueryKey(
  args: InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>,
) {
  return ['boards', '/boards/:board_id/pins', args] as const
}

export function getBoardsBoardIdPinsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdPinsQueryKey>
  >({
    queryKey: getBoardsBoardIdPinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':board_id'].pins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsBoardIdPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsBoardIdPinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBoardsBoardIdPinsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBoardsBoardIdSectionsQueryKey(
  args: InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>,
) {
  return ['boards', '/boards/:board_id/sections', args] as const
}

export function getBoardsBoardIdSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdSectionsQueryKey>
  >({
    queryKey: getBoardsBoardIdSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':board_id'].sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsBoardIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsBoardIdSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBoardsBoardIdSectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBoardsBoardIdSectionsMutationKey() {
  return ['boards', '/boards/:board_id/sections', 'POST'] as const
}

export function getPostBoardsBoardIdSectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':board_id']['sections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsBoardIdSectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':board_id']['sections']['$post']>,
    ) {
      return parseResponse(client.boards[':board_id'].sections.$post(args, options))
    },
  })
}

export function injectPostBoardsBoardIdSections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':board_id']['sections']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBoardsBoardIdSectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteBoardsBoardIdSectionsSectionIdMutationKey() {
  return ['boards', '/boards/:board_id/sections/:section_id', 'DELETE'] as const
}

export function getDeleteBoardsBoardIdSectionsSectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsBoardIdSectionsSectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':board_id']['sections'][':section_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.boards[':board_id'].sections[':section_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteBoardsBoardIdSectionsSectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.boards)[':board_id']['sections'][':section_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBoardsBoardIdSectionsSectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBoardsBoardIdSectionsSectionIdMutationKey() {
  return ['boards', '/boards/:board_id/sections/:section_id', 'PATCH'] as const
}

export function getPatchBoardsBoardIdSectionsSectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBoardsBoardIdSectionsSectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':board_id']['sections'][':section_id']['$patch']
      >,
    ) {
      return parseResponse(client.boards[':board_id'].sections[':section_id'].$patch(args, options))
    },
  })
}

export function injectPatchBoardsBoardIdSectionsSectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBoardsBoardIdSectionsSectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsBoardIdSectionsSectionIdPinsQueryKey(
  args: InferRequestType<
    (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
  >,
) {
  return ['boards', '/boards/:board_id/sections/:section_id/pins', args] as const
}

export function getBoardsBoardIdSectionsSectionIdPinsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdSectionsSectionIdPinsQueryKey>
  >({
    queryKey: getBoardsBoardIdSectionsSectionIdPinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':board_id'].sections[':section_id'].pins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsBoardIdSectionsSectionIdPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBoardsBoardIdSectionsSectionIdPinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBoardsBoardIdSectionsSectionIdPinsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsMutationKey() {
  return [
    'business_access',
    '/business_access/business_hierarchy/:business_hierarchy_id/brand_accounts',
    'POST',
  ] as const
}

export function getPostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts']['$post']
      >,
    ) {
      return parseResponse(
        client.business_access.business_hierarchy[':business_hierarchy_id'].brand_accounts.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdMutationKey() {
  return [
    'business_access',
    '/business_access/business_hierarchy/:business_hierarchy_id/brand_accounts/:brand_account_id',
    'PATCH',
  ] as const
}

export function getPatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts'][':brand_account_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts'][':brand_account_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.business_access.business_hierarchy[':business_hierarchy_id'].brand_accounts[
          ':brand_account_id'
        ].$patch(args, options),
      )
    },
  })
}

export function injectPatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts'][':brand_account_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionMutationKey() {
  return [
    'business_access',
    '/business_access/business_rmn_invites/:business_relationship_invite_id/auth_process_action',
    'POST',
  ] as const
}

export function getPostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.business_access.business_rmn_invites)[':business_relationship_invite_id']['auth_process_action']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.business_access.business_rmn_invites)[':business_relationship_invite_id']['auth_process_action']['$post']
      >,
    ) {
      return parseResponse(
        client.business_access.business_rmn_invites[
          ':business_relationship_invite_id'
        ].auth_process_action.$post(args, options),
      )
    },
  })
}

export function injectPostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.business_access.business_rmn_invites)[':business_relationship_invite_id']['auth_process_action']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesEmployersQueryKey(
  args: InferRequestType<typeof client.businesses.employers.$get>,
) {
  return ['businesses', '/businesses/employers', args] as const
}

export function getBusinessesEmployersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.businesses.employers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesEmployersQueryKey>
  >({
    queryKey: getBusinessesEmployersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses.employers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBusinessesEmployers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.businesses.employers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesEmployersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBusinessesEmployersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchBusinessesInvitesMutationKey() {
  return ['businesses', '/businesses/invites', 'PATCH'] as const
}

export function getPatchBusinessesInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.invites.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.businesses.invites.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.businesses.invites.$patch>) {
      return parseResponse(client.businesses.invites.$patch(args, options))
    },
  })
}

export function injectPatchBusinessesInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.businesses.invites.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.businesses.invites.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBusinessesInvitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdAdAccountRequestsQueryKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/ad_account_requests', args] as const
}

export function getBusinessesBusinessIdAdAccountRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAdAccountRequestsQueryKey>
  >({
    queryKey: getBusinessesBusinessIdAdAccountRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].ad_account_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdAdAccountRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['ad_account_requests']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.businesses)[':business_id']['ad_account_requests']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdAdAccountRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdAdAccountRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBusinessesBusinessIdAdAccountRequestsAcceptMutationKey() {
  return ['businesses', '/businesses/:business_id/ad_account_requests/accept', 'POST'] as const
}

export function getPostBusinessesBusinessIdAdAccountRequestsAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['ad_account_requests']['accept']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesBusinessIdAdAccountRequestsAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['ad_account_requests']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].ad_account_requests.accept.$post(args, options),
      )
    },
  })
}

export function injectPostBusinessesBusinessIdAdAccountRequestsAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['ad_account_requests']['accept']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesBusinessIdAdAccountRequestsAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBusinessesBusinessIdAdAccountRequestsRejectMutationKey() {
  return ['businesses', '/businesses/:business_id/ad_account_requests/reject', 'POST'] as const
}

export function getPostBusinessesBusinessIdAdAccountRequestsRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['ad_account_requests']['reject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesBusinessIdAdAccountRequestsRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['ad_account_requests']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].ad_account_requests.reject.$post(args, options),
      )
    },
  })
}

export function injectPostBusinessesBusinessIdAdAccountRequestsReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['ad_account_requests']['reject']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesBusinessIdAdAccountRequestsRejectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdAnalyticsQueryKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/analytics', args] as const
}

export function getBusinessesBusinessIdAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAnalyticsQueryKey>
  >({
    queryKey: getBusinessesBusinessIdAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdAnalyticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/analytics/aggregated_timeline', args] as const
}

export function getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryKey>
  >({
    queryKey: getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].analytics.aggregated_timeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdAnalyticsAggregatedTimeline<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostBusinessesBusinessIdAssetGroupsMutationKey() {
  return ['businesses', '/businesses/:business_id/asset_groups', 'POST'] as const
}

export function getPostBusinessesBusinessIdAssetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['asset_groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesBusinessIdAssetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$post']>,
    ) {
      return parseResponse(client.businesses[':business_id'].asset_groups.$post(args, options))
    },
  })
}

export function injectPostBusinessesBusinessIdAssetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.businesses)[':business_id']['asset_groups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesBusinessIdAssetGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteBusinessesBusinessIdAssetGroupsMutationKey() {
  return ['businesses', '/businesses/:business_id/asset_groups', 'DELETE'] as const
}

export function getDeleteBusinessesBusinessIdAssetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['asset_groups']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBusinessesBusinessIdAssetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$delete']>,
    ) {
      return parseResponse(client.businesses[':business_id'].asset_groups.$delete(args, options))
    },
  })
}

export function injectDeleteBusinessesBusinessIdAssetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.businesses)[':business_id']['asset_groups']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBusinessesBusinessIdAssetGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBusinessesBusinessIdAssetGroupsMutationKey() {
  return ['businesses', '/businesses/:business_id/asset_groups', 'PATCH'] as const
}

export function getPatchBusinessesBusinessIdAssetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['asset_groups']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesBusinessIdAssetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$patch']>,
    ) {
      return parseResponse(client.businesses[':business_id'].asset_groups.$patch(args, options))
    },
  })
}

export function injectPatchBusinessesBusinessIdAssetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.businesses)[':business_id']['asset_groups']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBusinessesBusinessIdAssetGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdAssetsQueryKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/assets', args] as const
}

export function getBusinessesBusinessIdAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAssetsQueryKey>
  >({
    queryKey: getBusinessesBusinessIdAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdAssetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdAssetsAssetIdMembersQueryKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/assets/:asset_id/members', args] as const
}

export function getBusinessesBusinessIdAssetsAssetIdMembersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAssetsAssetIdMembersQueryKey>
  >({
    queryKey: getBusinessesBusinessIdAssetsAssetIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].assets[':asset_id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdAssetsAssetIdMembers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdAssetsAssetIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdAssetsAssetIdMembersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdAssetsAssetIdPartnersQueryKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/assets/:asset_id/partners', args] as const
}

export function getBusinessesBusinessIdAssetsAssetIdPartnersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAssetsAssetIdPartnersQueryKey>
  >({
    queryKey: getBusinessesBusinessIdAssetsAssetIdPartnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].assets[':asset_id'].partners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdAssetsAssetIdPartners<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdAssetsAssetIdPartnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdAssetsAssetIdPartnersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdAudiencesQueryKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/audiences', args] as const
}

export function getBusinessesBusinessIdAudiencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAudiencesQueryKey>
  >({
    queryKey: getBusinessesBusinessIdAudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].audiences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdAudiences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdAudiencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchBusinessesBusinessIdAudiencesAdAccountsSharedMutationKey() {
  return ['businesses', '/businesses/:business_id/audiences/ad_accounts/shared', 'PATCH'] as const
}

export function getPatchBusinessesBusinessIdAudiencesAdAccountsSharedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['audiences']['ad_accounts']['shared']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesBusinessIdAudiencesAdAccountsSharedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['audiences']['ad_accounts']['shared']['$patch']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].audiences.ad_accounts.shared.$patch(args, options),
      )
    },
  })
}

export function injectPatchBusinessesBusinessIdAudiencesAdAccountsShared<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['audiences']['ad_accounts']['shared']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBusinessesBusinessIdAudiencesAdAccountsSharedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBusinessesBusinessIdAudiencesBusinessesSharedMutationKey() {
  return ['businesses', '/businesses/:business_id/audiences/businesses/shared', 'PATCH'] as const
}

export function getPatchBusinessesBusinessIdAudiencesBusinessesSharedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['audiences']['businesses']['shared']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesBusinessIdAudiencesBusinessesSharedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['audiences']['businesses']['shared']['$patch']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].audiences.businesses.shared.$patch(args, options),
      )
    },
  })
}

export function injectPatchBusinessesBusinessIdAudiencesBusinessesShared<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['audiences']['businesses']['shared']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBusinessesBusinessIdAudiencesBusinessesSharedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdAudiencesSharedAccountsQueryKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/audiences/shared/accounts', args] as const
}

export function getBusinessesBusinessIdAudiencesSharedAccountsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAudiencesSharedAccountsQueryKey>
  >({
    queryKey: getBusinessesBusinessIdAudiencesSharedAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].audiences.shared.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdAudiencesSharedAccounts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdAudiencesSharedAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdAudiencesSharedAccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdInvitesQueryKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/invites', args] as const
}

export function getBusinessesBusinessIdInvitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdInvitesQueryKey>
  >({
    queryKey: getBusinessesBusinessIdInvitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].invites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdInvitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdInvitesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBusinessesBusinessIdInvitesMutationKey() {
  return ['businesses', '/businesses/:business_id/invites', 'POST'] as const
}

export function getPostBusinessesBusinessIdInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':business_id']['invites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesBusinessIdInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$post']>,
    ) {
      return parseResponse(client.businesses[':business_id'].invites.$post(args, options))
    },
  })
}

export function injectPostBusinessesBusinessIdInvites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':business_id']['invites']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesBusinessIdInvitesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteBusinessesBusinessIdInvitesMutationKey() {
  return ['businesses', '/businesses/:business_id/invites', 'DELETE'] as const
}

export function getDeleteBusinessesBusinessIdInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':business_id']['invites']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBusinessesBusinessIdInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$delete']>,
    ) {
      return parseResponse(client.businesses[':business_id'].invites.$delete(args, options))
    },
  })
}

export function injectDeleteBusinessesBusinessIdInvites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':business_id']['invites']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBusinessesBusinessIdInvitesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBusinessesBusinessIdInvitesAssetsAccessMutationKey() {
  return ['businesses', '/businesses/:business_id/invites/assets/access', 'POST'] as const
}

export function getPostBusinessesBusinessIdInvitesAssetsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['invites']['assets']['access']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesBusinessIdInvitesAssetsAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['invites']['assets']['access']['$post']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].invites.assets.access.$post(args, options),
      )
    },
  })
}

export function injectPostBusinessesBusinessIdInvitesAssetsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['invites']['assets']['access']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesBusinessIdInvitesAssetsAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdMembersQueryKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/members', args] as const
}

export function getBusinessesBusinessIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdMembersQueryKey>
  >({
    queryKey: getBusinessesBusinessIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteBusinessesBusinessIdMembersMutationKey() {
  return ['businesses', '/businesses/:business_id/members', 'DELETE'] as const
}

export function getDeleteBusinessesBusinessIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':business_id']['members']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBusinessesBusinessIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$delete']>,
    ) {
      return parseResponse(client.businesses[':business_id'].members.$delete(args, options))
    },
  })
}

export function injectDeleteBusinessesBusinessIdMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':business_id']['members']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBusinessesBusinessIdMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBusinessesBusinessIdMembersMutationKey() {
  return ['businesses', '/businesses/:business_id/members', 'PATCH'] as const
}

export function getPatchBusinessesBusinessIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':business_id']['members']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesBusinessIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$patch']>,
    ) {
      return parseResponse(client.businesses[':business_id'].members.$patch(args, options))
    },
  })
}

export function injectPatchBusinessesBusinessIdMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':business_id']['members']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBusinessesBusinessIdMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteBusinessesBusinessIdMembersAssetsAccessMutationKey() {
  return ['businesses', '/businesses/:business_id/members/assets/access', 'DELETE'] as const
}

export function getDeleteBusinessesBusinessIdMembersAssetsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['members']['assets']['access']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBusinessesBusinessIdMembersAssetsAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['members']['assets']['access']['$delete']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].members.assets.access.$delete(args, options),
      )
    },
  })
}

export function injectDeleteBusinessesBusinessIdMembersAssetsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['members']['assets']['access']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBusinessesBusinessIdMembersAssetsAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBusinessesBusinessIdMembersAssetsAccessMutationKey() {
  return ['businesses', '/businesses/:business_id/members/assets/access', 'PATCH'] as const
}

export function getPatchBusinessesBusinessIdMembersAssetsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['members']['assets']['access']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesBusinessIdMembersAssetsAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['members']['assets']['access']['$patch']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].members.assets.access.$patch(args, options),
      )
    },
  })
}

export function injectPatchBusinessesBusinessIdMembersAssetsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['members']['assets']['access']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBusinessesBusinessIdMembersAssetsAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdMembersMemberIdAssetsQueryKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/members/:member_id/assets', args] as const
}

export function getBusinessesBusinessIdMembersMemberIdAssetsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdMembersMemberIdAssetsQueryKey>
  >({
    queryKey: getBusinessesBusinessIdMembersMemberIdAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].members[':member_id'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdMembersMemberIdAssets<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdMembersMemberIdAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdMembersMemberIdAssetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdPartnersQueryKey(
  args: InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>,
) {
  return ['businesses', '/businesses/:business_id/partners', args] as const
}

export function getBusinessesBusinessIdPartnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdPartnersQueryKey>
  >({
    queryKey: getBusinessesBusinessIdPartnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].partners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdPartners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdPartnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdPartnersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteBusinessesBusinessIdPartnersMutationKey() {
  return ['businesses', '/businesses/:business_id/partners', 'DELETE'] as const
}

export function getDeleteBusinessesBusinessIdPartnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':business_id']['partners']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBusinessesBusinessIdPartnersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.businesses)[':business_id']['partners']['$delete']>,
    ) {
      return parseResponse(client.businesses[':business_id'].partners.$delete(args, options))
    },
  })
}

export function injectDeleteBusinessesBusinessIdPartners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':business_id']['partners']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBusinessesBusinessIdPartnersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteBusinessesBusinessIdPartnersAssetsMutationKey() {
  return ['businesses', '/businesses/:business_id/partners/assets', 'DELETE'] as const
}

export function getDeleteBusinessesBusinessIdPartnersAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.businesses)[':business_id']['partners']['assets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBusinessesBusinessIdPartnersAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['partners']['assets']['$delete']
      >,
    ) {
      return parseResponse(client.businesses[':business_id'].partners.assets.$delete(args, options))
    },
  })
}

export function injectDeleteBusinessesBusinessIdPartnersAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.businesses)[':business_id']['partners']['assets']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.businesses)[':business_id']['partners']['assets']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBusinessesBusinessIdPartnersAssetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBusinessesBusinessIdPartnersAssetsMutationKey() {
  return ['businesses', '/businesses/:business_id/partners/assets', 'PATCH'] as const
}

export function getPatchBusinessesBusinessIdPartnersAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.businesses)[':business_id']['partners']['assets']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesBusinessIdPartnersAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['partners']['assets']['$patch']
      >,
    ) {
      return parseResponse(client.businesses[':business_id'].partners.assets.$patch(args, options))
    },
  })
}

export function injectPatchBusinessesBusinessIdPartnersAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.businesses)[':business_id']['partners']['assets']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.businesses)[':business_id']['partners']['assets']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBusinessesBusinessIdPartnersAssetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBusinessesBusinessIdPartnersPartnerIdAdAccountRequestMutationKey() {
  return [
    'businesses',
    '/businesses/:business_id/partners/:partner_id/ad_account_request',
    'POST',
  ] as const
}

export function getPostBusinessesBusinessIdPartnersPartnerIdAdAccountRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesBusinessIdPartnersPartnerIdAdAccountRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_request']['$post']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].partners[':partner_id'].ad_account_request.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostBusinessesBusinessIdPartnersPartnerIdAdAccountRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_request']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostBusinessesBusinessIdPartnersPartnerIdAdAccountRequestMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationKey() {
  return [
    'businesses',
    '/businesses/:business_id/partners/:partner_id/ad_account_requests/:agency_owned_ad_account_request_id',
    'DELETE',
  ] as const
}

export function getDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].partners[':partner_id'].ad_account_requests[
          ':agency_owned_ad_account_request_id'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationKey() {
  return [
    'businesses',
    '/businesses/:business_id/partners/:partner_id/ad_account_requests/:agency_owned_ad_account_request_id',
    'PATCH',
  ] as const
}

export function getPatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].partners[':partner_id'].ad_account_requests[
          ':agency_owned_ad_account_request_id'
        ].$patch(args, options),
      )
    },
  })
}

export function injectPatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdPartnersPartnerIdAssetsQueryKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/partners/:partner_id/assets', args] as const
}

export function getBusinessesBusinessIdPartnersPartnerIdAssetsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdPartnersPartnerIdAssetsQueryKey>
  >({
    queryKey: getBusinessesBusinessIdPartnersPartnerIdAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].partners[':partner_id'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdPartnersPartnerIdAssets<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdPartnersPartnerIdAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdPartnersPartnerIdAssetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostBusinessesBusinessIdRequestsAssetsAccessMutationKey() {
  return ['businesses', '/businesses/:business_id/requests/assets/access', 'POST'] as const
}

export function getPostBusinessesBusinessIdRequestsAssetsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['requests']['assets']['access']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesBusinessIdRequestsAssetsAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['requests']['assets']['access']['$post']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].requests.assets.access.$post(args, options),
      )
    },
  })
}

export function injectPostBusinessesBusinessIdRequestsAssetsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['requests']['assets']['access']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesBusinessIdRequestsAssetsAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdRmnContractsContractIdQueryKey(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
  >,
) {
  return ['businesses', '/businesses/:business_id/rmn/contracts/:contract_id', args] as const
}

export function getBusinessesBusinessIdRmnContractsContractIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdRmnContractsContractIdQueryKey>
  >({
    queryKey: getBusinessesBusinessIdRmnContractsContractIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].rmn.contracts[':contract_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdRmnContractsContractId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdRmnContractsContractIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdRmnContractsContractIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchBusinessesBusinessIdRmnContractsContractIdProcessMutationKey() {
  return [
    'businesses',
    '/businesses/:business_id/rmn/contracts/:contract_id/process',
    'PATCH',
  ] as const
}

export function getPatchBusinessesBusinessIdRmnContractsContractIdProcessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['process']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesBusinessIdRmnContractsContractIdProcessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['process']['$patch']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].rmn.contracts[':contract_id'].process.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchBusinessesBusinessIdRmnContractsContractIdProcess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['process']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchBusinessesBusinessIdRmnContractsContractIdProcessMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryKey(
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

export function getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryKey>
  >({
    queryKey: getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].rmn.partners[':partner_id'].allowed_domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomains<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryKey(
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

export function getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryKey>
  >({
    queryKey: getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':business_id'].rmn.partners[':partner_id'].contracts.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBusinessesBusinessIdRmnPartnersPartnerIdContractsHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostBusinessesBusinessIdRmnPartnersPartnerIdInviteMutationKey() {
  return ['businesses', '/businesses/:business_id/rmn/partners/:partner_id/invite', 'POST'] as const
}

export function getPostBusinessesBusinessIdRmnPartnersPartnerIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['invite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesBusinessIdRmnPartnersPartnerIdInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['invite']['$post']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].rmn.partners[':partner_id'].invite.$post(args, options),
      )
    },
  })
}

export function injectPostBusinessesBusinessIdRmnPartnersPartnerIdInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['invite']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesBusinessIdRmnPartnersPartnerIdInviteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchBusinessesBusinessIdSystemUsersSystemUserIdMutationKey() {
  return ['businesses', '/businesses/:business_id/system_users/:system_user_id', 'PATCH'] as const
}

export function getPatchBusinessesBusinessIdSystemUsersSystemUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.businesses)[':business_id']['system_users'][':system_user_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesBusinessIdSystemUsersSystemUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.businesses)[':business_id']['system_users'][':system_user_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.businesses[':business_id'].system_users[':system_user_id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchBusinessesBusinessIdSystemUsersSystemUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.businesses)[':business_id']['system_users'][':system_user_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBusinessesBusinessIdSystemUsersSystemUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsQueryKey(args: InferRequestType<typeof client.catalogs.$get>) {
  return ['catalogs', '/catalogs', args] as const
}

export function getCatalogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.catalogs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCatalogsQueryKey>
  >({
    queryKey: getCatalogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCatalogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.catalogs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCatalogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCatalogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCatalogsMutationKey() {
  return ['catalogs', '/catalogs', 'POST'] as const
}

export function getPostCatalogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>>,
    TError,
    InferRequestType<typeof client.catalogs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.$post>) {
      return parseResponse(client.catalogs.$post(args, options))
    },
  })
}

export function injectPostCatalogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.catalogs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsAvailableFilterValuesQueryKey(
  args: InferRequestType<typeof client.catalogs.available_filter_values.$get>,
) {
  return ['catalogs', '/catalogs/available_filter_values', args] as const
}

export function getCatalogsAvailableFilterValuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.catalogs.available_filter_values.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsAvailableFilterValuesQueryKey>
  >({
    queryKey: getCatalogsAvailableFilterValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.available_filter_values.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsAvailableFilterValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.catalogs.available_filter_values.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsAvailableFilterValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsAvailableFilterValuesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCatalogsFeedsQueryKey(
  args: InferRequestType<typeof client.catalogs.feeds.$get>,
) {
  return ['catalogs', '/catalogs/feeds', args] as const
}

export function getCatalogsFeedsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.catalogs.feeds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsFeedsQueryKey>
  >({
    queryKey: getCatalogsFeedsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.feeds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCatalogsFeeds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.catalogs.feeds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsFeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCatalogsFeedsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCatalogsFeedsMutationKey() {
  return ['catalogs', '/catalogs/feeds', 'POST'] as const
}

export function getPostCatalogsFeedsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.catalogs.feeds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsFeedsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.feeds.$post>) {
      return parseResponse(client.catalogs.feeds.$post(args, options))
    },
  })
}

export function injectPostCatalogsFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.catalogs.feeds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsFeedsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsFeedsFeedIdQueryKey(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>,
) {
  return ['catalogs', '/catalogs/feeds/:feed_id', args] as const
}

export function getCatalogsFeedsFeedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsFeedsFeedIdQueryKey>
  >({
    queryKey: getCatalogsFeedsFeedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.feeds[':feed_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsFeedsFeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsFeedsFeedIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCatalogsFeedsFeedIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteCatalogsFeedsFeedIdMutationKey() {
  return ['catalogs', '/catalogs/feeds/:feed_id', 'DELETE'] as const
}

export function getDeleteCatalogsFeedsFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCatalogsFeedsFeedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$delete']>,
    ) {
      return parseResponse(client.catalogs.feeds[':feed_id'].$delete(args, options))
    },
  })
}

export function injectDeleteCatalogsFeedsFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCatalogsFeedsFeedIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCatalogsFeedsFeedIdMutationKey() {
  return ['catalogs', '/catalogs/feeds/:feed_id', 'PATCH'] as const
}

export function getPatchCatalogsFeedsFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCatalogsFeedsFeedIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$patch']>) {
      return parseResponse(client.catalogs.feeds[':feed_id'].$patch(args, options))
    },
  })
}

export function injectPatchCatalogsFeedsFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCatalogsFeedsFeedIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCatalogsFeedsFeedIdIngestMutationKey() {
  return ['catalogs', '/catalogs/feeds/:feed_id/ingest', 'POST'] as const
}

export function getPostCatalogsFeedsFeedIdIngestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['ingest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['ingest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsFeedsFeedIdIngestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['ingest']['$post']>,
    ) {
      return parseResponse(client.catalogs.feeds[':feed_id'].ingest.$post(args, options))
    },
  })
}

export function injectPostCatalogsFeedsFeedIdIngest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['ingest']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['ingest']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsFeedsFeedIdIngestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsFeedsFeedIdProcessingResultsQueryKey(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>,
) {
  return ['catalogs', '/catalogs/feeds/:feed_id/processing_results', args] as const
}

export function getCatalogsFeedsFeedIdProcessingResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsFeedsFeedIdProcessingResultsQueryKey>
  >({
    queryKey: getCatalogsFeedsFeedIdProcessingResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.feeds[':feed_id'].processing_results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsFeedsFeedIdProcessingResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsFeedsFeedIdProcessingResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsFeedsFeedIdProcessingResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCatalogsItemsMutationKey() {
  return ['catalogs', '/catalogs/items', 'POST'] as const
}

export function getPostCatalogsItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.items.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.catalogs.items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.items.$post>) {
      return parseResponse(client.catalogs.items.$post(args, options))
    },
  })
}

export function injectPostCatalogsItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.items.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.catalogs.items.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCatalogsItemsBatchMutationKey() {
  return ['catalogs', '/catalogs/items/batch', 'POST'] as const
}

export function getPostCatalogsItemsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.items.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.catalogs.items.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsItemsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.items.batch.$post>) {
      return parseResponse(client.catalogs.items.batch.$post(args, options))
    },
  })
}

export function injectPostCatalogsItemsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.items.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.catalogs.items.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsItemsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsItemsBatchBatchIdQueryKey(
  args: InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>,
) {
  return ['catalogs', '/catalogs/items/batch/:batch_id', args] as const
}

export function getCatalogsItemsBatchBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsItemsBatchBatchIdQueryKey>
  >({
    queryKey: getCatalogsItemsBatchBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.items.batch[':batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsItemsBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsItemsBatchBatchIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsItemsBatchBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryKey(
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

export function getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryKey>
  >({
    queryKey: getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.processing_results[':processing_result_id'].item_issues.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsProcessingResultsProcessingResultIdItemIssues<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCatalogsProductGroupsQueryKey(
  args: InferRequestType<typeof client.catalogs.product_groups.$get>,
) {
  return ['catalogs', '/catalogs/product_groups', args] as const
}

export function getCatalogsProductGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.catalogs.product_groups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsProductGroupsQueryKey>
  >({
    queryKey: getCatalogsProductGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.product_groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsProductGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.catalogs.product_groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsProductGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsProductGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCatalogsProductGroupsMutationKey() {
  return ['catalogs', '/catalogs/product_groups', 'POST'] as const
}

export function getPostCatalogsProductGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.catalogs.product_groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsProductGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.product_groups.$post>) {
      return parseResponse(client.catalogs.product_groups.$post(args, options))
    },
  })
}

export function injectPostCatalogsProductGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.catalogs.product_groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsProductGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCatalogsProductGroupsMultipleMutationKey() {
  return ['catalogs', '/catalogs/product_groups/multiple', 'POST'] as const
}

export function getPostCatalogsProductGroupsMultipleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.catalogs.product_groups.multiple.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.catalogs.product_groups.multiple.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsProductGroupsMultipleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.product_groups.multiple.$post>) {
      return parseResponse(client.catalogs.product_groups.multiple.$post(args, options))
    },
  })
}

export function injectPostCatalogsProductGroupsMultiple<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.catalogs.product_groups.multiple.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.catalogs.product_groups.multiple.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsProductGroupsMultipleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteCatalogsProductGroupsMultipleMutationKey() {
  return ['catalogs', '/catalogs/product_groups/multiple', 'DELETE'] as const
}

export function getDeleteCatalogsProductGroupsMultipleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.catalogs.product_groups.multiple.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.catalogs.product_groups.multiple.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCatalogsProductGroupsMultipleMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.catalogs.product_groups.multiple.$delete>,
    ) {
      return parseResponse(client.catalogs.product_groups.multiple.$delete(args, options))
    },
  })
}

export function injectDeleteCatalogsProductGroupsMultiple<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.catalogs.product_groups.multiple.$delete>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.catalogs.product_groups.multiple.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCatalogsProductGroupsMultipleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsProductGroupsProductGroupIdQueryKey(
  args: InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>,
) {
  return ['catalogs', '/catalogs/product_groups/:product_group_id', args] as const
}

export function getCatalogsProductGroupsProductGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsProductGroupsProductGroupIdQueryKey>
  >({
    queryKey: getCatalogsProductGroupsProductGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.product_groups[':product_group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsProductGroupsProductGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsProductGroupsProductGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsProductGroupsProductGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCatalogsProductGroupsProductGroupIdMutationKey() {
  return ['catalogs', '/catalogs/product_groups/:product_group_id', 'DELETE'] as const
}

export function getDeleteCatalogsProductGroupsProductGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCatalogsProductGroupsProductGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs.product_groups)[':product_group_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.catalogs.product_groups[':product_group_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteCatalogsProductGroupsProductGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.catalogs.product_groups)[':product_group_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCatalogsProductGroupsProductGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCatalogsProductGroupsProductGroupIdMutationKey() {
  return ['catalogs', '/catalogs/product_groups/:product_group_id', 'PATCH'] as const
}

export function getPatchCatalogsProductGroupsProductGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCatalogsProductGroupsProductGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs.product_groups)[':product_group_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.catalogs.product_groups[':product_group_id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchCatalogsProductGroupsProductGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCatalogsProductGroupsProductGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsProductGroupsProductGroupIdProductCountsQueryKey(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
  >,
) {
  return ['catalogs', '/catalogs/product_groups/:product_group_id/product_counts', args] as const
}

export function getCatalogsProductGroupsProductGroupIdProductCountsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCatalogsProductGroupsProductGroupIdProductCountsQueryKey>
  >({
    queryKey: getCatalogsProductGroupsProductGroupIdProductCountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.product_groups[':product_group_id'].product_counts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsProductGroupsProductGroupIdProductCounts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCatalogsProductGroupsProductGroupIdProductCountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsProductGroupsProductGroupIdProductCountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCatalogsProductGroupsProductGroupIdProductsQueryKey(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
  >,
) {
  return ['catalogs', '/catalogs/product_groups/:product_group_id/products', args] as const
}

export function getCatalogsProductGroupsProductGroupIdProductsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCatalogsProductGroupsProductGroupIdProductsQueryKey>
  >({
    queryKey: getCatalogsProductGroupsProductGroupIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.product_groups[':product_group_id'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsProductGroupsProductGroupIdProducts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCatalogsProductGroupsProductGroupIdProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsProductGroupsProductGroupIdProductsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostCatalogsProductsGetByProductGroupFiltersMutationKey() {
  return ['catalogs', '/catalogs/products/get_by_product_group_filters', 'POST'] as const
}

export function getPostCatalogsProductsGetByProductGroupFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.catalogs.products.get_by_product_group_filters.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.catalogs.products.get_by_product_group_filters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsProductsGetByProductGroupFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.catalogs.products.get_by_product_group_filters.$post>,
    ) {
      return parseResponse(
        client.catalogs.products.get_by_product_group_filters.$post(args, options),
      )
    },
  })
}

export function injectPostCatalogsProductsGetByProductGroupFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.catalogs.products.get_by_product_group_filters.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.catalogs.products.get_by_product_group_filters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsProductsGetByProductGroupFiltersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsReportsQueryKey(
  args: InferRequestType<typeof client.catalogs.reports.$get>,
) {
  return ['catalogs', '/catalogs/reports', args] as const
}

export function getCatalogsReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.catalogs.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsReportsQueryKey>
  >({
    queryKey: getCatalogsReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCatalogsReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.catalogs.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCatalogsReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCatalogsReportsMutationKey() {
  return ['catalogs', '/catalogs/reports', 'POST'] as const
}

export function getPostCatalogsReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.catalogs.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.reports.$post>) {
      return parseResponse(client.catalogs.reports.$post(args, options))
    },
  })
}

export function injectPostCatalogsReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.catalogs.reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsReportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsReportsStatsQueryKey(
  args: InferRequestType<typeof client.catalogs.reports.stats.$get>,
) {
  return ['catalogs', '/catalogs/reports/stats', args] as const
}

export function getCatalogsReportsStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.catalogs.reports.stats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsReportsStatsQueryKey>
  >({
    queryKey: getCatalogsReportsStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.reports.stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsReportsStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.catalogs.reports.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsReportsStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsReportsStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCatalogsSupplementalFeedsQueryKey(
  args: InferRequestType<typeof client.catalogs.supplemental_feeds.$get>,
) {
  return ['catalogs', '/catalogs/supplemental_feeds', args] as const
}

export function getCatalogsSupplementalFeedsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.catalogs.supplemental_feeds.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsSupplementalFeedsQueryKey>
  >({
    queryKey: getCatalogsSupplementalFeedsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.supplemental_feeds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsSupplementalFeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.catalogs.supplemental_feeds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsSupplementalFeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsSupplementalFeedsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCatalogsSupplementalFeedsMutationKey() {
  return ['catalogs', '/catalogs/supplemental_feeds', 'POST'] as const
}

export function getPostCatalogsSupplementalFeedsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.catalogs.supplemental_feeds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsSupplementalFeedsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.supplemental_feeds.$post>) {
      return parseResponse(client.catalogs.supplemental_feeds.$post(args, options))
    },
  })
}

export function injectPostCatalogsSupplementalFeeds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.catalogs.supplemental_feeds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsSupplementalFeedsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsSupplementalFeedsFeedIdQueryKey(
  args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>,
) {
  return ['catalogs', '/catalogs/supplemental_feeds/:feed_id', args] as const
}

export function getCatalogsSupplementalFeedsFeedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsSupplementalFeedsFeedIdQueryKey>
  >({
    queryKey: getCatalogsSupplementalFeedsFeedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.supplemental_feeds[':feed_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsSupplementalFeedsFeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsSupplementalFeedsFeedIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsSupplementalFeedsFeedIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCatalogsSupplementalFeedsFeedIdMutationKey() {
  return ['catalogs', '/catalogs/supplemental_feeds/:feed_id', 'DELETE'] as const
}

export function getDeleteCatalogsSupplementalFeedsFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCatalogsSupplementalFeedsFeedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$delete']>,
    ) {
      return parseResponse(client.catalogs.supplemental_feeds[':feed_id'].$delete(args, options))
    },
  })
}

export function injectDeleteCatalogsSupplementalFeedsFeedId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCatalogsSupplementalFeedsFeedIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCatalogsSupplementalFeedsFeedIdMutationKey() {
  return ['catalogs', '/catalogs/supplemental_feeds/:feed_id', 'PATCH'] as const
}

export function getPatchCatalogsSupplementalFeedsFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCatalogsSupplementalFeedsFeedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>,
    ) {
      return parseResponse(client.catalogs.supplemental_feeds[':feed_id'].$patch(args, options))
    },
  })
}

export function injectPatchCatalogsSupplementalFeedsFeedId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCatalogsSupplementalFeedsFeedIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCatalogsCatalogIdMutationKey() {
  return ['catalogs', '/catalogs/:catalog_id', 'PATCH'] as const
}

export function getPatchCatalogsCatalogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCatalogsCatalogIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.catalogs)[':catalog_id']['$patch']>) {
      return parseResponse(client.catalogs[':catalog_id'].$patch(args, options))
    },
  })
}

export function injectPatchCatalogsCatalogId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs)[':catalog_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCatalogsCatalogIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCatalogsCatalogIdAutoLocalizationConfigsMutationKey() {
  return ['catalogs', '/catalogs/:catalog_id/auto_localization_configs', 'POST'] as const
}

export function getPostCatalogsCatalogIdAutoLocalizationConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.catalogs)[':catalog_id']['auto_localization_configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsCatalogIdAutoLocalizationConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalog_id']['auto_localization_configs']['$post']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalog_id'].auto_localization_configs.$post(args, options),
      )
    },
  })
}

export function injectPostCatalogsCatalogIdAutoLocalizationConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.catalogs)[':catalog_id']['auto_localization_configs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsCatalogIdAutoLocalizationConfigsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryKey(
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

export function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryKey>
  >({
    queryKey: getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalog_id'].auto_localization_configs[
          ':auto_localization_config_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdMutationKey() {
  return [
    'catalogs',
    '/catalogs/:catalog_id/auto_localization_configs/:auto_localization_config_id',
    'PUT',
  ] as const
}

export function getPutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$put']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalog_id'].auto_localization_configs[
          ':auto_localization_config_id'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryKey(
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

export function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryKey
    >
  >({
    queryKey:
      getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalog_id'].auto_localization_configs[
          ':auto_localization_config_id'
        ].translations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewMutationKey() {
  return [
    'catalogs',
    '/catalogs/:catalog_id/auto_localization_configs/:auto_localization_config_id/translations/review',
    'POST',
  ] as const
}

export function getPostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['review']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['review']['$post']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalog_id'].auto_localization_configs[
          ':auto_localization_config_id'
        ].translations.review.$post(args, options),
      )
    },
  })
}

export function injectPostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['review']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsCatalogIdCountryLocaleMappingQueryKey(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>,
) {
  return ['catalogs', '/catalogs/:catalog_id/country_locale_mapping', args] as const
}

export function getCatalogsCatalogIdCountryLocaleMappingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogIdCountryLocaleMappingQueryKey>
  >({
    queryKey: getCatalogsCatalogIdCountryLocaleMappingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalog_id'].country_locale_mapping.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsCatalogIdCountryLocaleMapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogIdCountryLocaleMappingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsCatalogIdCountryLocaleMappingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutCatalogsCatalogIdCountryLocaleMappingMutationKey() {
  return ['catalogs', '/catalogs/:catalog_id/country_locale_mapping', 'PUT'] as const
}

export function getPutCatalogsCatalogIdCountryLocaleMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCatalogsCatalogIdCountryLocaleMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$put']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalog_id'].country_locale_mapping.$put(args, options),
      )
    },
  })
}

export function injectPutCatalogsCatalogIdCountryLocaleMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCatalogsCatalogIdCountryLocaleMappingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteCatalogsCatalogIdCountryLocaleMappingMutationKey() {
  return ['catalogs', '/catalogs/:catalog_id/country_locale_mapping', 'DELETE'] as const
}

export function getDeleteCatalogsCatalogIdCountryLocaleMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCatalogsCatalogIdCountryLocaleMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$delete']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalog_id'].country_locale_mapping.$delete(args, options),
      )
    },
  })
}

export function injectDeleteCatalogsCatalogIdCountryLocaleMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCatalogsCatalogIdCountryLocaleMappingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCatalogsCatalogIdLocalInventoryItemsBatchMutationKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_inventory_items/batch', 'POST'] as const
}

export function getPostCatalogsCatalogIdLocalInventoryItemsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['local_inventory_items']['batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsCatalogIdLocalInventoryItemsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalog_id']['local_inventory_items']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalog_id'].local_inventory_items.batch.$post(args, options),
      )
    },
  })
}

export function injectPostCatalogsCatalogIdLocalInventoryItemsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.catalogs)[':catalog_id']['local_inventory_items']['batch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsCatalogIdLocalInventoryItemsBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCatalogsCatalogIdLocalInventoryItemsQueryMutationKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_inventory_items/query', 'POST'] as const
}

export function getPostCatalogsCatalogIdLocalInventoryItemsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['local_inventory_items']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsCatalogIdLocalInventoryItemsQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalog_id']['local_inventory_items']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalog_id'].local_inventory_items.query.$post(args, options),
      )
    },
  })
}

export function injectPostCatalogsCatalogIdLocalInventoryItemsQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.catalogs)[':catalog_id']['local_inventory_items']['query']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsCatalogIdLocalInventoryItemsQueryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsCatalogIdLocalStoresQueryKey(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>,
) {
  return ['catalogs', '/catalogs/:catalog_id/local_stores', args] as const
}

export function getCatalogsCatalogIdLocalStoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogIdLocalStoresQueryKey>
  >({
    queryKey: getCatalogsCatalogIdLocalStoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalog_id'].local_stores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsCatalogIdLocalStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogIdLocalStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsCatalogIdLocalStoresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCatalogsCatalogIdLocalStoresMutationKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_stores', 'POST'] as const
}

export function getPostCatalogsCatalogIdLocalStoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsCatalogIdLocalStoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>,
    ) {
      return parseResponse(client.catalogs[':catalog_id'].local_stores.$post(args, options))
    },
  })
}

export function injectPostCatalogsCatalogIdLocalStores<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCatalogsCatalogIdLocalStoresMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteCatalogsCatalogIdLocalStoresMutationKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_stores', 'DELETE'] as const
}

export function getDeleteCatalogsCatalogIdLocalStoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCatalogsCatalogIdLocalStoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$delete']>,
    ) {
      return parseResponse(client.catalogs[':catalog_id'].local_stores.$delete(args, options))
    },
  })
}

export function injectDeleteCatalogsCatalogIdLocalStores<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCatalogsCatalogIdLocalStoresMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCatalogsCatalogIdLocalStoresMutationKey() {
  return ['catalogs', '/catalogs/:catalog_id/local_stores', 'PATCH'] as const
}

export function getPatchCatalogsCatalogIdLocalStoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCatalogsCatalogIdLocalStoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>,
    ) {
      return parseResponse(client.catalogs[':catalog_id'].local_stores.$patch(args, options))
    },
  })
}

export function injectPatchCatalogsCatalogIdLocalStores<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCatalogsCatalogIdLocalStoresMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
  >,
) {
  return ['catalogs', '/catalogs/:catalog_id/supplemental_items/batch/:batch_id', args] as const
}

export function getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryKey>
  >({
    queryKey: getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalog_id'].supplemental_items.batch[':batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCatalogsCatalogIdSupplementalItemsBatchBatchId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostCollaborativeCatalogsMutationKey() {
  return ['collaborative_catalogs', '/collaborative_catalogs', 'POST'] as const
}

export function getPostCollaborativeCatalogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.collaborative_catalogs.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.collaborative_catalogs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollaborativeCatalogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collaborative_catalogs.$post>) {
      return parseResponse(client.collaborative_catalogs.$post(args, options))
    },
  })
}

export function injectPostCollaborativeCatalogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.collaborative_catalogs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.collaborative_catalogs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollaborativeCatalogsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIntegrationsQueryKey(args: InferRequestType<typeof client.integrations.$get>) {
  return ['integrations', '/integrations', args] as const
}

export function getIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.integrations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIntegrationsQueryKey>
  >({
    queryKey: getIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.integrations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntegrationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostIntegrationsCommerceMutationKey() {
  return ['integrations', '/integrations/commerce', 'POST'] as const
}

export function getPostIntegrationsCommerceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.commerce.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.integrations.commerce.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsCommerceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.commerce.$post>) {
      return parseResponse(client.integrations.commerce.$post(args, options))
    },
  })
}

export function injectPostIntegrationsCommerce<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.commerce.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.commerce.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIntegrationsCommerceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIntegrationsCommerceExternalBusinessIdQueryKey(
  args: InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$get']>,
) {
  return ['integrations', '/integrations/commerce/:external_business_id', args] as const
}

export function getIntegrationsCommerceExternalBusinessIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsCommerceExternalBusinessIdQueryKey>
  >({
    queryKey: getIntegrationsCommerceExternalBusinessIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.commerce[':external_business_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIntegrationsCommerceExternalBusinessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.integrations.commerce)[':external_business_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsCommerceExternalBusinessIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsCommerceExternalBusinessIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteIntegrationsCommerceExternalBusinessIdMutationKey() {
  return ['integrations', '/integrations/commerce/:external_business_id', 'DELETE'] as const
}

export function getDeleteIntegrationsCommerceExternalBusinessIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntegrationsCommerceExternalBusinessIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integrations.commerce)[':external_business_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.integrations.commerce[':external_business_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteIntegrationsCommerceExternalBusinessId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.integrations.commerce)[':external_business_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIntegrationsCommerceExternalBusinessIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchIntegrationsCommerceExternalBusinessIdMutationKey() {
  return ['integrations', '/integrations/commerce/:external_business_id', 'PATCH'] as const
}

export function getPatchIntegrationsCommerceExternalBusinessIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIntegrationsCommerceExternalBusinessIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integrations.commerce)[':external_business_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.integrations.commerce[':external_business_id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchIntegrationsCommerceExternalBusinessId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIntegrationsCommerceExternalBusinessIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostIntegrationsLogsMutationKey() {
  return ['integrations', '/integrations/logs', 'POST'] as const
}

export function getPostIntegrationsLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.logs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.integrations.logs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsLogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.logs.$post>) {
      return parseResponse(client.integrations.logs.$post(args, options))
    },
  })
}

export function injectPostIntegrationsLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.logs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.logs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIntegrationsLogsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIntegrationsIdQueryKey(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
) {
  return ['integrations', '/integrations/:id', args] as const
}

export function getIntegrationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIdQueryKey>
  >({
    queryKey: getIntegrationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIntegrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.integrations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntegrationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMediaQueryKey(args: InferRequestType<typeof client.media.$get>) {
  return ['media', '/media', args] as const
}

export function getMediaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.media.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMediaQueryKey>
  >({
    queryKey: getMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMedia<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.media.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMediaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMediaMutationKey() {
  return ['media', '/media', 'POST'] as const
}

export function getPostMediaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
    TError,
    InferRequestType<typeof client.media.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.media.$post>) {
      return parseResponse(client.media.$post(args, options))
    },
  })
}

export function injectPostMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
        TError,
        InferRequestType<typeof client.media.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaMediaIdQueryKey(
  args: InferRequestType<(typeof client.media)[':media_id']['$get']>,
) {
  return ['media', '/media/:media_id', args] as const
}

export function getMediaMediaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':media_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaMediaIdQueryKey>
  >({
    queryKey: getMediaMediaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media[':media_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMediaMediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.media)[':media_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaMediaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMediaMediaIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMediaLibraryBusinessesBusinessIdAssetsQueryKey(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$get']
  >,
) {
  return ['media_library', '/media_library/businesses/:business_id/assets', args] as const
}

export function getMediaLibraryBusinessesBusinessIdAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaLibraryBusinessesBusinessIdAssetsQueryKey>
  >({
    queryKey: getMediaLibraryBusinessesBusinessIdAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media_library.businesses[':business_id'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMediaLibraryBusinessesBusinessIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.media_library.businesses)[':business_id']['assets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaLibraryBusinessesBusinessIdAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaLibraryBusinessesBusinessIdAssetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostMediaLibraryBusinessesBusinessIdAssetsMutationKey() {
  return ['media_library', '/media_library/businesses/:business_id/assets', 'POST'] as const
}

export function getPostMediaLibraryBusinessesBusinessIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.media_library.businesses)[':business_id']['assets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaLibraryBusinessesBusinessIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.media_library.businesses)[':business_id']['assets']['$post']
      >,
    ) {
      return parseResponse(
        client.media_library.businesses[':business_id'].assets.$post(args, options),
      )
    },
  })
}

export function injectPostMediaLibraryBusinessesBusinessIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.media_library.businesses)[':business_id']['assets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.media_library.businesses)[':business_id']['assets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaLibraryBusinessesBusinessIdAssetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMediaLibraryBusinessesBusinessIdAssetsMutationKey() {
  return ['media_library', '/media_library/businesses/:business_id/assets', 'DELETE'] as const
}

export function getDeleteMediaLibraryBusinessesBusinessIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.media_library.businesses)[':business_id']['assets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMediaLibraryBusinessesBusinessIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.media_library.businesses)[':business_id']['assets']['$delete']
      >,
    ) {
      return parseResponse(
        client.media_library.businesses[':business_id'].assets.$delete(args, options),
      )
    },
  })
}

export function injectDeleteMediaLibraryBusinessesBusinessIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.media_library.businesses)[':business_id']['assets']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMediaLibraryBusinessesBusinessIdAssetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchMediaLibraryBusinessesBusinessIdAssetsMutationKey() {
  return ['media_library', '/media_library/businesses/:business_id/assets', 'PATCH'] as const
}

export function getPatchMediaLibraryBusinessesBusinessIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.media_library.businesses)[':business_id']['assets']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMediaLibraryBusinessesBusinessIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.media_library.businesses)[':business_id']['assets']['$patch']
      >,
    ) {
      return parseResponse(
        client.media_library.businesses[':business_id'].assets.$patch(args, options),
      )
    },
  })
}

export function injectPatchMediaLibraryBusinessesBusinessIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.media_library.businesses)[':business_id']['assets']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.media_library.businesses)[':business_id']['assets']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMediaLibraryBusinessesBusinessIdAssetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryKey(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
  >,
) {
  return ['media_library', '/media_library/businesses/:business_id/assets/:asset_id', args] as const
}

export function getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryKey>
  >({
    queryKey: getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media_library.businesses[':business_id'].assets[':asset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMediaLibraryBusinessesBusinessIdAssetsAssetId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getMerchantMerchantIdStatusQueryKey(
  args: InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>,
) {
  return ['merchant', '/merchant/:merchant_id/status', args] as const
}

export function getMerchantMerchantIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantMerchantIdStatusQueryKey>
  >({
    queryKey: getMerchantMerchantIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchant[':merchant_id'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMerchantMerchantIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantMerchantIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantMerchantIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostNotificationsMutationKey() {
  return ['notifications', '/notifications', 'POST'] as const
}

export function getPostNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.$post>) {
      return parseResponse(client.notifications.$post(args, options))
    },
  })
}

export function injectPostNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.notifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthConversionTokenMutationKey() {
  return ['oauth', '/oauth/conversion_token', 'POST'] as const
}

export function getPostOauthConversionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.conversion_token.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOauthConversionTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.oauth.conversion_token.$post(undefined, options))
    },
  })
}

export function injectPostOauthConversionToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.conversion_token.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthConversionTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthTokenMutationKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function getPostOauthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.$post>) {
      return parseResponse(client.oauth.token.$post(args, options))
    },
  })
}

export function injectPostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthTokenRevokeMutationKey() {
  return ['oauth', '/oauth/token/revoke', 'POST'] as const
}

export function getPostOauthTokenRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.token.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.revoke.$post>) {
      return parseResponse(client.oauth.token.revoke.$post(args, options))
    },
  })
}

export function injectPostOauthTokenRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.revoke.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.token.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthTokenRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOverlayAssignmentRulesQueryKey() {
  return ['overlay_assignment_rules', '/overlay_assignment_rules'] as const
}

export function getOverlayAssignmentRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOverlayAssignmentRulesQueryKey>
  >({
    queryKey: getOverlayAssignmentRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.overlay_assignment_rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOverlayAssignmentRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOverlayAssignmentRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOverlayAssignmentRulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostOverlayAssignmentRulesMutationKey() {
  return ['overlay_assignment_rules', '/overlay_assignment_rules', 'POST'] as const
}

export function getPostOverlayAssignmentRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.overlay_assignment_rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOverlayAssignmentRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.overlay_assignment_rules.$post>) {
      return parseResponse(client.overlay_assignment_rules.$post(args, options))
    },
  })
}

export function injectPostOverlayAssignmentRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.overlay_assignment_rules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOverlayAssignmentRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOverlayAssignmentRulesIdQueryKey(
  args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>,
) {
  return ['overlay_assignment_rules', '/overlay_assignment_rules/:id', args] as const
}

export function getOverlayAssignmentRulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOverlayAssignmentRulesIdQueryKey>
  >({
    queryKey: getOverlayAssignmentRulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.overlay_assignment_rules[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOverlayAssignmentRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOverlayAssignmentRulesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOverlayAssignmentRulesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteOverlayAssignmentRulesIdMutationKey() {
  return ['overlay_assignment_rules', '/overlay_assignment_rules/:id', 'DELETE'] as const
}

export function getDeleteOverlayAssignmentRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOverlayAssignmentRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$delete']>,
    ) {
      return parseResponse(client.overlay_assignment_rules[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteOverlayAssignmentRulesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOverlayAssignmentRulesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchOverlayAssignmentRulesIdMutationKey() {
  return ['overlay_assignment_rules', '/overlay_assignment_rules/:id', 'PATCH'] as const
}

export function getPatchOverlayAssignmentRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOverlayAssignmentRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$patch']>,
    ) {
      return parseResponse(client.overlay_assignment_rules[':id'].$patch(args, options))
    },
  })
}

export function injectPatchOverlayAssignmentRulesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOverlayAssignmentRulesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOverlaysQueryKey(args: InferRequestType<typeof client.overlays.$get>) {
  return ['overlays', '/overlays', args] as const
}

export function getOverlaysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.overlays.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOverlaysQueryKey>
  >({
    queryKey: getOverlaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.overlays.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOverlays<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.overlays.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOverlaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOverlaysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostOverlaysMutationKey() {
  return ['overlays', '/overlays', 'POST'] as const
}

export function getPostOverlaysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$post>>>>>,
    TError,
    InferRequestType<typeof client.overlays.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOverlaysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.overlays.$post>) {
      return parseResponse(client.overlays.$post(args, options))
    },
  })
}

export function injectPostOverlays<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.overlays.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOverlaysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOverlaysIdQueryKey(
  args: InferRequestType<(typeof client.overlays)[':id']['$get']>,
) {
  return ['overlays', '/overlays/:id', args] as const
}

export function getOverlaysIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.overlays)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOverlaysIdQueryKey>
  >({
    queryKey: getOverlaysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.overlays[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOverlaysId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.overlays)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOverlaysIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOverlaysIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteOverlaysIdMutationKey() {
  return ['overlays', '/overlays/:id', 'DELETE'] as const
}

export function getDeleteOverlaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.overlays)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOverlaysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.overlays)[':id']['$delete']>) {
      return parseResponse(client.overlays[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteOverlaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.overlays)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOverlaysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchOverlaysIdMutationKey() {
  return ['overlays', '/overlays/:id', 'PATCH'] as const
}

export function getPatchOverlaysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.overlays)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOverlaysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.overlays)[':id']['$patch']>) {
      return parseResponse(client.overlays[':id'].$patch(args, options))
    },
  })
}

export function injectPatchOverlaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.overlays)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOverlaysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPinsQueryKey(args: InferRequestType<typeof client.pins.$get>) {
  return ['pins', '/pins', args] as const
}

export function getPinsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPinsQueryKey>
  >({
    queryKey: getPinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPins<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPinsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPinsMutationKey() {
  return ['pins', '/pins', 'POST'] as const
}

export function getPostPinsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$post>>>>>,
    TError,
    InferRequestType<typeof client.pins.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pins.$post>) {
      return parseResponse(client.pins.$post(args, options))
    },
  })
}

export function injectPostPins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$post>>>>>,
        TError,
        InferRequestType<typeof client.pins.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPinsAnalyticsQueryKey(
  args: InferRequestType<typeof client.pins.analytics.$get>,
) {
  return ['pins', '/pins/analytics', args] as const
}

export function getPinsAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pins.analytics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPinsAnalyticsQueryKey>
  >({
    queryKey: getPinsAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pins.analytics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPinsAnalytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pins.analytics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPinsAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPinsAnalyticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPinsPinIdQueryKey(
  args: InferRequestType<(typeof client.pins)[':pin_id']['$get']>,
) {
  return ['pins', '/pins/:pin_id', args] as const
}

export function getPinsPinIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.pins)[':pin_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPinsPinIdQueryKey>
  >({
    queryKey: getPinsPinIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pins[':pin_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPinsPinId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pins)[':pin_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPinsPinIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPinsPinIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePinsPinIdMutationKey() {
  return ['pins', '/pins/:pin_id', 'DELETE'] as const
}

export function getDeletePinsPinIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.pins)[':pin_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePinsPinIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pins)[':pin_id']['$delete']>) {
      return parseResponse(client.pins[':pin_id'].$delete(args, options))
    },
  })
}

export function injectDeletePinsPinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.pins)[':pin_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePinsPinIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPinsPinIdMutationKey() {
  return ['pins', '/pins/:pin_id', 'PATCH'] as const
}

export function getPatchPinsPinIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pins)[':pin_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPinsPinIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pins)[':pin_id']['$patch']>) {
      return parseResponse(client.pins[':pin_id'].$patch(args, options))
    },
  })
}

export function injectPatchPinsPinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pins)[':pin_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPinsPinIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPinsPinIdAnalyticsQueryKey(
  args: InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>,
) {
  return ['pins', '/pins/:pin_id/analytics', args] as const
}

export function getPinsPinIdAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPinsPinIdAnalyticsQueryKey>
  >({
    queryKey: getPinsPinIdAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pins[':pin_id'].analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPinsPinIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPinsPinIdAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPinsPinIdAnalyticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPinsPinIdProductTagsQueryKey(
  args: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>,
) {
  return ['pins', '/pins/:pin_id/product_tags', args] as const
}

export function getPinsPinIdProductTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPinsPinIdProductTagsQueryKey>
  >({
    queryKey: getPinsPinIdProductTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pins[':pin_id'].product_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPinsPinIdProductTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPinsPinIdProductTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPinsPinIdProductTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostPinsPinIdProductTagsMutationKey() {
  return ['pins', '/pins/:pin_id/product_tags', 'POST'] as const
}

export function getPostPinsPinIdProductTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsPinIdProductTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$post']>,
    ) {
      return parseResponse(client.pins[':pin_id'].product_tags.$post(args, options))
    },
  })
}

export function injectPostPinsPinIdProductTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsPinIdProductTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPinsPinIdProductTagsBulkDeleteMutationKey() {
  return ['pins', '/pins/:pin_id/product_tags/bulk-delete', 'POST'] as const
}

export function getPostPinsPinIdProductTagsBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['bulk-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsPinIdProductTagsBulkDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.pins)[':pin_id']['product_tags']['bulk-delete']['$post']
      >,
    ) {
      return parseResponse(client.pins[':pin_id'].product_tags['bulk-delete'].$post(args, options))
    },
  })
}

export function injectPostPinsPinIdProductTagsBulkDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.pins)[':pin_id']['product_tags']['bulk-delete']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['bulk-delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsPinIdProductTagsBulkDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPinsPinIdSaveMutationKey() {
  return ['pins', '/pins/:pin_id/save', 'POST'] as const
}

export function getPostPinsPinIdSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['save']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pins)[':pin_id']['save']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsPinIdSaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pins)[':pin_id']['save']['$post']>) {
      return parseResponse(client.pins[':pin_id'].save.$post(args, options))
    },
  })
}

export function injectPostPinsPinIdSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pins)[':pin_id']['save']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pins)[':pin_id']['save']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsPinIdSaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResourcesAdAccountCountriesQueryKey() {
  return ['resources', '/resources/ad_account_countries'] as const
}

export function getResourcesAdAccountCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesAdAccountCountriesQueryKey>
  >({
    queryKey: getResourcesAdAccountCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.ad_account_countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesAdAccountCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesAdAccountCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesAdAccountCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getResourcesDeliveryMetricsQueryKey(
  args: InferRequestType<typeof client.resources.delivery_metrics.$get>,
) {
  return ['resources', '/resources/delivery_metrics', args] as const
}

export function getResourcesDeliveryMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.resources.delivery_metrics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesDeliveryMetricsQueryKey>
  >({
    queryKey: getResourcesDeliveryMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.delivery_metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesDeliveryMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resources.delivery_metrics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesDeliveryMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesDeliveryMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesLeadFormQuestionsQueryKey() {
  return ['resources', '/resources/lead_form_questions'] as const
}

export function getResourcesLeadFormQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesLeadFormQuestionsQueryKey>
  >({
    queryKey: getResourcesLeadFormQuestionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.lead_form_questions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesLeadFormQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesLeadFormQuestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesLeadFormQuestionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getResourcesMetricsReadyStateQueryKey(
  args: InferRequestType<typeof client.resources.metrics_ready_state.$get>,
) {
  return ['resources', '/resources/metrics_ready_state', args] as const
}

export function getResourcesMetricsReadyStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.resources.metrics_ready_state.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMetricsReadyStateQueryKey>
  >({
    queryKey: getResourcesMetricsReadyStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.metrics_ready_state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMetricsReadyState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resources.metrics_ready_state.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMetricsReadyStateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMetricsReadyStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesTargetingInterestsInterestIdQueryKey(
  args: InferRequestType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>,
) {
  return ['resources', '/resources/targeting/interests/:interest_id', args] as const
}

export function getResourcesTargetingInterestsInterestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTargetingInterestsInterestIdQueryKey>
  >({
    queryKey: getResourcesTargetingInterestsInterestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.targeting.interests[':interest_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesTargetingInterestsInterestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.resources.targeting.interests)[':interest_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesTargetingInterestsInterestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesTargetingInterestsInterestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesTargetingTargetingTypeQueryKey(
  args: InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>,
) {
  return ['resources', '/resources/targeting/:targeting_type', args] as const
}

export function getResourcesTargetingTargetingTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTargetingTargetingTypeQueryKey>
  >({
    queryKey: getResourcesTargetingTargetingTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.targeting[':targeting_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesTargetingTargetingType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesTargetingTargetingTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesTargetingTargetingTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchBoardsQueryKey(args: InferRequestType<typeof client.search.boards.$get>) {
  return ['search', '/search/boards', args] as const
}

export function getSearchBoardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.boards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchBoardsQueryKey>
  >({
    queryKey: getSearchBoardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.boards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchBoards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.boards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchBoardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchBoardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchPartnerPinsQueryKey(
  args: InferRequestType<typeof client.search.partner.pins.$get>,
) {
  return ['search', '/search/partner/pins', args] as const
}

export function getSearchPartnerPinsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.partner.pins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchPartnerPinsQueryKey>
  >({
    queryKey: getSearchPartnerPinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.partner.pins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchPartnerPins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.partner.pins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchPartnerPinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchPartnerPinsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchPinsQueryKey(args: InferRequestType<typeof client.search.pins.$get>) {
  return ['search', '/search/pins', args] as const
}

export function getSearchPinsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.pins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchPinsQueryKey>
  >({
    queryKey: getSearchPinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.pins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchPins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.pins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchPinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchPinsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTermsRelatedQueryKey(args: InferRequestType<typeof client.terms.related.$get>) {
  return ['terms', '/terms/related', args] as const
}

export function getTermsRelatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.terms.related.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTermsRelatedQueryKey>
  >({
    queryKey: getTermsRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.terms.related.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTermsRelated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.terms.related.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTermsRelatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTermsRelatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTermsSuggestedQueryKey(
  args: InferRequestType<typeof client.terms.suggested.$get>,
) {
  return ['terms', '/terms/suggested', args] as const
}

export function getTermsSuggestedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.terms.suggested.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTermsSuggestedQueryKey>
  >({
    queryKey: getTermsSuggestedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.terms.suggested.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTermsSuggested<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.terms.suggested.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTermsSuggestedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTermsSuggestedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTrendsEditorialArticlesQueryKey(
  args: InferRequestType<typeof client.trends.editorial_articles.$get>,
) {
  return ['trends', '/trends/editorial_articles', args] as const
}

export function getTrendsEditorialArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trends.editorial_articles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsEditorialArticlesQueryKey>
  >({
    queryKey: getTrendsEditorialArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trends.editorial_articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTrendsEditorialArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.trends.editorial_articles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendsEditorialArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTrendsEditorialArticlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTrendsKeywordsRegionTopTrendTypeQueryKey(
  args: InferRequestType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>,
) {
  return ['trends', '/trends/keywords/:region/top/:trend_type', args] as const
}

export function getTrendsKeywordsRegionTopTrendTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsKeywordsRegionTopTrendTypeQueryKey>
  >({
    queryKey: getTrendsKeywordsRegionTopTrendTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trends.keywords[':region'].top[':trend_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTrendsKeywordsRegionTopTrendType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendsKeywordsRegionTopTrendTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTrendsKeywordsRegionTopTrendTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTrendsProductCategoriesDetailsQueryKey(
  args: InferRequestType<typeof client.trends.product_categories.details.$get>,
) {
  return ['trends', '/trends/product_categories/details', args] as const
}

export function getTrendsProductCategoriesDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trends.product_categories.details.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsProductCategoriesDetailsQueryKey>
  >({
    queryKey: getTrendsProductCategoriesDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trends.product_categories.details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTrendsProductCategoriesDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.trends.product_categories.details.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendsProductCategoriesDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTrendsProductCategoriesDetailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTrendsProductCategoriesTrendingQueryKey(
  args: InferRequestType<typeof client.trends.product_categories.trending.$get>,
) {
  return ['trends', '/trends/product_categories/trending', args] as const
}

export function getTrendsProductCategoriesTrendingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trends.product_categories.trending.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsProductCategoriesTrendingQueryKey>
  >({
    queryKey: getTrendsProductCategoriesTrendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trends.product_categories.trending.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTrendsProductCategoriesTrending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.trends.product_categories.trending.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendsProductCategoriesTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTrendsProductCategoriesTrendingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTrendsTopicsFeaturedQueryKey(
  args: InferRequestType<typeof client.trends.topics.featured.$get>,
) {
  return ['trends', '/trends/topics/featured', args] as const
}

export function getTrendsTopicsFeaturedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trends.topics.featured.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsTopicsFeaturedQueryKey>
  >({
    queryKey: getTrendsTopicsFeaturedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trends.topics.featured.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTrendsTopicsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.trends.topics.featured.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendsTopicsFeaturedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTrendsTopicsFeaturedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserAccountQueryKey(args: InferRequestType<typeof client.user_account.$get>) {
  return ['user_account', '/user_account', args] as const
}

export function getUserAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user_account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserAccountQueryKey>
  >({
    queryKey: getUserAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_account.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserAccountAnalyticsQueryKey(
  args: InferRequestType<typeof client.user_account.analytics.$get>,
) {
  return ['user_account', '/user_account/analytics', args] as const
}

export function getUserAccountAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_account.analytics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountAnalyticsQueryKey>
  >({
    queryKey: getUserAccountAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserAccountAnalytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_account.analytics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserAccountAnalyticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserAccountAnalyticsTopPinsQueryKey(
  args: InferRequestType<typeof client.user_account.analytics.top_pins.$get>,
) {
  return ['user_account', '/user_account/analytics/top_pins', args] as const
}

export function getUserAccountAnalyticsTopPinsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_account.analytics.top_pins.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountAnalyticsTopPinsQueryKey>
  >({
    queryKey: getUserAccountAnalyticsTopPinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.analytics.top_pins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserAccountAnalyticsTopPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_account.analytics.top_pins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountAnalyticsTopPinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserAccountAnalyticsTopPinsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserAccountAnalyticsTopVideoPinsQueryKey(
  args: InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>,
) {
  return ['user_account', '/user_account/analytics/top_video_pins', args] as const
}

export function getUserAccountAnalyticsTopVideoPinsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountAnalyticsTopVideoPinsQueryKey>
  >({
    queryKey: getUserAccountAnalyticsTopVideoPinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.analytics.top_video_pins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserAccountAnalyticsTopVideoPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountAnalyticsTopVideoPinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserAccountAnalyticsTopVideoPinsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserAccountBusinessesQueryKey() {
  return ['user_account', '/user_account/businesses'] as const
}

export function getUserAccountBusinessesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountBusinessesQueryKey>
  >({
    queryKey: getUserAccountBusinessesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.businesses.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserAccountBusinesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountBusinessesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserAccountBusinessesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getUserAccountFollowersQueryKey(
  args: InferRequestType<typeof client.user_account.followers.$get>,
) {
  return ['user_account', '/user_account/followers', args] as const
}

export function getUserAccountFollowersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_account.followers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountFollowersQueryKey>
  >({
    queryKey: getUserAccountFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserAccountFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_account.followers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserAccountFollowersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserAccountFollowingQueryKey(
  args: InferRequestType<typeof client.user_account.following.$get>,
) {
  return ['user_account', '/user_account/following', args] as const
}

export function getUserAccountFollowingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_account.following.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountFollowingQueryKey>
  >({
    queryKey: getUserAccountFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserAccountFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_account.following.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserAccountFollowingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserAccountFollowingBoardsQueryKey(
  args: InferRequestType<typeof client.user_account.following.boards.$get>,
) {
  return ['user_account', '/user_account/following/boards', args] as const
}

export function getUserAccountFollowingBoardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.boards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_account.following.boards.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.boards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountFollowingBoardsQueryKey>
  >({
    queryKey: getUserAccountFollowingBoardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.following.boards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserAccountFollowingBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.boards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_account.following.boards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_account.following.boards.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountFollowingBoardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserAccountFollowingBoardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUserAccountFollowingUsernameMutationKey() {
  return ['user_account', '/user_account/following/:username', 'POST'] as const
}

export function getPostUserAccountFollowingUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_account.following)[':username']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_account.following)[':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserAccountFollowingUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_account.following)[':username']['$post']>,
    ) {
      return parseResponse(client.user_account.following[':username'].$post(args, options))
    },
  })
}

export function injectPostUserAccountFollowingUsername<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_account.following)[':username']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user_account.following)[':username']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserAccountFollowingUsernameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserAccountWebsitesQueryKey(
  args: InferRequestType<typeof client.user_account.websites.$get>,
) {
  return ['user_account', '/user_account/websites', args] as const
}

export function getUserAccountWebsitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_account.websites.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountWebsitesQueryKey>
  >({
    queryKey: getUserAccountWebsitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.websites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserAccountWebsites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_account.websites.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountWebsitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserAccountWebsitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostUserAccountWebsitesMutationKey() {
  return ['user_account', '/user_account/websites', 'POST'] as const
}

export function getPostUserAccountWebsitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_account.websites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserAccountWebsitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_account.websites.$post>) {
      return parseResponse(client.user_account.websites.$post(args, options))
    },
  })
}

export function injectPostUserAccountWebsites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user_account.websites.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserAccountWebsitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUserAccountWebsitesMutationKey() {
  return ['user_account', '/user_account/websites', 'DELETE'] as const
}

export function getDeleteUserAccountWebsitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.user_account.websites.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserAccountWebsitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_account.websites.$delete>) {
      return parseResponse(client.user_account.websites.$delete(args, options))
    },
  })
}

export function injectDeleteUserAccountWebsites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$delete>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.user_account.websites.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserAccountWebsitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserAccountWebsitesVerificationQueryKey(
  args: InferRequestType<typeof client.user_account.websites.verification.$get>,
) {
  return ['user_account', '/user_account/websites/verification', args] as const
}

export function getUserAccountWebsitesVerificationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_account.websites.verification.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountWebsitesVerificationQueryKey>
  >({
    queryKey: getUserAccountWebsitesVerificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_account.websites.verification.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserAccountWebsitesVerification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_account.websites.verification.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountWebsitesVerificationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserAccountWebsitesVerificationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUsernameInterestsFollowQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>,
) {
  return ['users', '/users/:username/interests/follow', args] as const
}

export function getUsersUsernameInterestsFollowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameInterestsFollowQueryKey>
  >({
    queryKey: getUsersUsernameInterestsFollowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].interests.follow.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUsernameInterestsFollow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameInterestsFollowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameInterestsFollowQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
